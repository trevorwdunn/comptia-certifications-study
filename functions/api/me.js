import { auth, json, avatarHash, normalizeUsername } from '../_lib/auth'

// The client caches the user in localStorage, so it needs a way to refresh it
// after a rename (and after this feature shipped, for accounts created before it).
export async function onRequestGet({ request, env }) {
  const session = await auth(request, env)
  if (!session) return json({ error: 'Unauthorized' }, 401)

  const row = await env.DB.prepare('SELECT id, email, username FROM users WHERE id = ?').bind(session.sub).first()
  if (!row) return json({ error: 'Unauthorized' }, 401)

  const pending = await env.DB
    .prepare("SELECT COUNT(*) AS n FROM friendships WHERE addressee_id = ? AND status = 'pending'")
    .bind(session.sub)
    .first()

  return json({
    id: row.id,
    email: row.email,
    username: row.username,
    avatarHash: await avatarHash(row.email),
    pendingRequests: pending?.n ?? 0,
  })
}

export async function onRequestPatch({ request, env }) {
  const session = await auth(request, env)
  if (!session) return json({ error: 'Unauthorized' }, 401)

  const body = await request.json()
  const { username, error } = normalizeUsername(body.username)
  if (error) return json({ error }, 400)

  try {
    await env.DB.prepare('UPDATE users SET username = ? WHERE id = ?').bind(username, session.sub).run()
  } catch (e) {
    if (String(e).includes('UNIQUE')) return json({ error: 'That username is taken' }, 409)
    throw e
  }

  const row = await env.DB.prepare('SELECT id, email, username FROM users WHERE id = ?').bind(session.sub).first()
  return json({ id: row.id, email: row.email, username: row.username, avatarHash: await avatarHash(row.email) })
}
