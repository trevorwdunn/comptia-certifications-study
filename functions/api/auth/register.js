import { json, pbkdf2, makeJWT, normalizeUsername } from '../../_lib/auth'

export async function onRequestPost({ request, env }) {
  const { email, password, username } = await request.json()
  if (!email || !password || password.length < 8) return json({ error: 'Valid email and password (min 8 chars) required' }, 400)

  // Fall back to the email local-part so an older cached client that doesn't
  // send a username still gets a working account.
  const wanted = username ?? email.split('@')[0].replace(/[^a-zA-Z0-9_]/g, '_').slice(0, 20)
  const { username: name, error } = normalizeUsername(wanted)
  if (error) return json({ error }, 400)

  const existing = await env.DB.prepare('SELECT id FROM users WHERE email = ?').bind(email.toLowerCase()).first()
  if (existing) return json({ error: 'Email already registered' }, 409)

  const taken = await env.DB.prepare('SELECT id FROM users WHERE username = ?').bind(name).first()
  if (taken) return json({ error: 'That username is taken' }, 409)

  const id = crypto.randomUUID()
  const salt = crypto.randomUUID()
  const hash = await pbkdf2(password, salt)
  const cap = Number(env.MAX_ACCOUNTS) || 10
  // Conditional insert rather than count-then-insert so concurrent signups can't
  // both pass the check and overshoot the cap.
  let res
  try {
    res = await env.DB
      .prepare('INSERT INTO users (id, email, password_hash, salt, username) SELECT ?, ?, ?, ?, ? WHERE (SELECT COUNT(*) FROM users) < ?')
      .bind(id, email.toLowerCase(), hash, salt, name, cap)
      .run()
  } catch (e) {
    // The unique index is the real arbiter — the SELECT above can lose a race.
    if (String(e).includes('UNIQUE')) return json({ error: 'That username is taken' }, 409)
    throw e
  }
  if (!res.meta.changes) return json({ error: 'Registration is closed — the account limit has been reached.' }, 403)

  const token = await makeJWT({ sub: id, email: email.toLowerCase() }, env.JWT_SECRET)
  return json({ token, user: { id, email: email.toLowerCase(), username: name } })
}
