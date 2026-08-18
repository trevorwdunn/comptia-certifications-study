import { auth, json, avatarHash } from '../../_lib/auth'

// GET /api/users/search?q=jack — username prefix search, used to add friends.
// Only usernames are searchable; email addresses are never exposed here.
export async function onRequestGet({ request, env }) {
  const session = await auth(request, env)
  if (!session) return json({ error: 'Unauthorized' }, 401)

  // LIKE wildcards are stripped rather than escaped — usernames can't contain
  // them anyway, so there is nothing legitimate to search for.
  const q = (new URL(request.url).searchParams.get('q') || '').trim().toLowerCase().replace(/[^a-z0-9_]/g, '')
  if (q.length < 2) return json([])

  const rows = await env.DB.prepare(
    `SELECT u.id, u.email, u.username,
            f.status AS friend_status,
            f.requester_id AS friend_requester
     FROM users u
     LEFT JOIN friendships f
       ON (f.requester_id = u.id AND f.addressee_id = ?1)
       OR (f.addressee_id = u.id AND f.requester_id = ?1)
     WHERE u.id != ?1 AND u.username LIKE ?2
     ORDER BY u.username
     LIMIT 20`
  ).bind(session.sub, q + '%').all()

  const out = []
  for (const r of rows.results || []) {
    out.push({
      id: r.id,
      username: r.username,
      avatarHash: await avatarHash(r.email),
      // 'none' | 'pending_out' | 'pending_in' | 'friends'
      relationship: !r.friend_status
        ? 'none'
        : r.friend_status === 'accepted'
          ? 'friends'
          : r.friend_requester === session.sub ? 'pending_out' : 'pending_in',
    })
  }
  return json(out)
}
