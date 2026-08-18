import { auth, json, avatarHash } from '../../_lib/auth'

// GET /api/friends — everyone connected to you, in three buckets.
export async function onRequestGet({ request, env }) {
  const session = await auth(request, env)
  if (!session) return json({ error: 'Unauthorized' }, 401)

  const rows = await env.DB.prepare(
    `SELECT f.id, f.status, f.requester_id, f.created_at,
            u.id AS other_id, u.email AS other_email, u.username AS other_username
     FROM friendships f
     JOIN users u ON u.id = CASE WHEN f.requester_id = ?1 THEN f.addressee_id ELSE f.requester_id END
     WHERE f.requester_id = ?1 OR f.addressee_id = ?1
     ORDER BY u.username`
  ).bind(session.sub).all()

  const friends = []
  const incoming = []
  const outgoing = []
  for (const r of rows.results || []) {
    const entry = {
      friendshipId: r.id,
      id: r.other_id,
      username: r.other_username,
      avatarHash: await avatarHash(r.other_email),
      since: r.created_at,
    }
    if (r.status === 'accepted') friends.push(entry)
    else if (r.requester_id === session.sub) outgoing.push(entry)
    else incoming.push(entry)
  }

  return json({ friends, incoming, outgoing })
}

// POST /api/friends { username } — send a request.
export async function onRequestPost({ request, env }) {
  const session = await auth(request, env)
  if (!session) return json({ error: 'Unauthorized' }, 401)

  const { username } = await request.json()
  const target = await env.DB
    .prepare('SELECT id FROM users WHERE username = ?')
    .bind(String(username ?? '').trim().toLowerCase())
    .first()
  if (!target) return json({ error: 'No user with that username' }, 404)
  if (target.id === session.sub) return json({ error: "You can't friend yourself" }, 400)

  // If they already requested you, treat this as accepting rather than erroring
  // out on the pair index — it's what the person clicking clearly means.
  const existing = await env.DB.prepare(
    `SELECT id, status, requester_id FROM friendships
     WHERE (requester_id = ?1 AND addressee_id = ?2) OR (requester_id = ?2 AND addressee_id = ?1)`
  ).bind(session.sub, target.id).first()

  if (existing) {
    if (existing.status === 'accepted') return json({ error: 'You are already friends' }, 409)
    if (existing.requester_id === target.id) {
      await env.DB
        .prepare("UPDATE friendships SET status = 'accepted', updated_at = CURRENT_TIMESTAMP WHERE id = ?")
        .bind(existing.id)
        .run()
      return json({ ok: true, status: 'accepted' })
    }
    return json({ error: 'Request already sent' }, 409)
  }

  const id = crypto.randomUUID()
  try {
    await env.DB
      .prepare("INSERT INTO friendships (id, requester_id, addressee_id, status) VALUES (?, ?, ?, 'pending')")
      .bind(id, session.sub, target.id)
      .run()
  } catch (e) {
    if (String(e).includes('UNIQUE')) return json({ error: 'Request already sent' }, 409)
    throw e
  }
  return json({ ok: true, status: 'pending' })
}
