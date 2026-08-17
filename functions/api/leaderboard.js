// GET /api/leaderboard?cert=network-plus  (or omit cert for all-certs summary)
// Returns all users' progress summaries — only aggregated stats, no raw data

export async function onRequestGet({ request, env }) {
  const user = await auth(request, env)
  if (!user) return json({ error: 'Unauthorized' }, 401)

  const url = new URL(request.url)
  const certId = url.searchParams.get('cert') // optional

  const rows = await env.DB.prepare(
    'SELECT u.email, up.data FROM users u LEFT JOIN user_progress up ON u.id = up.user_id'
  ).all()

  const board = (rows.results || []).map((row) => {
    const email = row.email
    const displayName = email.split('@')[0]
    let progressData = {}
    try { progressData = row.data ? JSON.parse(row.data) : {} } catch {}

    const summary = summarize(progressData, certId)
    return { email, displayName, ...summary }
  })

  // Sort by avgScore descending
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

async function auth(request, env) {
  const token = (request.headers.get('Authorization') || '').replace('Bearer ', '')
  if (!token || !env.JWT_SECRET) return null
  try {
    const [h, b, sig] = token.split('.')
    const k = await crypto.subtle.importKey('raw', new TextEncoder().encode(env.JWT_SECRET), { name: 'HMAC', hash: 'SHA-256' }, false, ['verify'])
    const sigBytes = Uint8Array.from(atob(sig.replace(/-/g, '+').replace(/_/g, '/')), (c) => c.charCodeAt(0))
    const valid = await crypto.subtle.verify('HMAC', k, sigBytes, new TextEncoder().encode(`${h}.${b}`))
    if (!valid) return null
    const payload = JSON.parse(atob(b))
    if (payload.exp < Math.floor(Date.now() / 1000)) return null
    return payload
  } catch { return null }
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } })
}
