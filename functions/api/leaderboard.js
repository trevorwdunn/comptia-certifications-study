// GET /api/leaderboard?cert=network-plus&scope=friends
// Returns aggregated progress summaries only — never raw progress data, and
// never email addresses (avatars ride on a server-computed hash instead).

import { auth, json, avatarHash } from '../_lib/auth'

export async function onRequestGet({ request, env }) {
  const session = await auth(request, env)
  if (!session) return json({ error: 'Unauthorized' }, 401)

  const url = new URL(request.url)
  const certId = url.searchParams.get('cert') // optional
  const scope = url.searchParams.get('scope') === 'friends' ? 'friends' : 'all'

  // In friends scope you still appear on your own board, hence the `u.id = ?1`.
  const query = scope === 'friends'
    ? `SELECT u.id, u.email, u.username, up.data
       FROM users u
       LEFT JOIN user_progress up ON u.id = up.user_id
       WHERE u.id = ?1 OR u.id IN (
         SELECT CASE WHEN requester_id = ?1 THEN addressee_id ELSE requester_id END
         FROM friendships
         WHERE status = 'accepted' AND (requester_id = ?1 OR addressee_id = ?1)
       )`
    : `SELECT u.id, u.email, u.username, up.data
       FROM users u
       LEFT JOIN user_progress up ON u.id = up.user_id`

  const stmt = scope === 'friends'
    ? env.DB.prepare(query).bind(session.sub)
    : env.DB.prepare(query)
  const rows = await stmt.all()

  const board = []
  for (const row of rows.results || []) {
    let progressData = {}
    try { progressData = row.data ? JSON.parse(row.data) : {} } catch {}
    board.push({
      id: row.id,
      displayName: row.username || 'user',
      avatarHash: await avatarHash(row.email),
      ...summarize(progressData, certId),
    })
  }

  board.sort((a, b) => (b.avgScore ?? -1) - (a.avgScore ?? -1))
  return json(board)
}

function summarize(progress, certId) {
  const prefix = certId ? `${certId}:quiz_d` : null

  let totalScore = 0
  let totalAttempts = 0
  let masteredCards = 0

  for (const [key, val] of Object.entries(progress)) {
    if (key.startsWith('_')) continue

    // Quiz attempts
    if (key.includes(':quiz_d') && val?.attempts) {
      if (!prefix || key.startsWith(`${certId}:`)) {
        for (const a of val.attempts) {
          totalScore += a.score
          totalAttempts++
        }
      }
    }

    // Mastered flashcards
    if (key.includes(':fc_') && val?.status === 'mastered') {
      if (!certId || key.startsWith(`${certId}:`)) {
        masteredCards++
      }
    }
  }

  return {
    avgScore: totalAttempts > 0 ? Math.round(totalScore / totalAttempts) : null,
    attempts: totalAttempts,
    masteredCards,
  }
}
