export async function onRequestPost({ request, env }) {
  const { email, password } = await request.json()
  if (!email || !password || password.length < 8) return json({ error: 'Valid email and password (min 8 chars) required' }, 400)

  const existing = await env.DB.prepare('SELECT id FROM users WHERE email = ?').bind(email.toLowerCase()).first()
  if (existing) return json({ error: 'Email already registered' }, 409)

  const id = crypto.randomUUID()
  const salt = crypto.randomUUID()
  const hash = await pbkdf2(password, salt)
  const cap = Number(env.MAX_ACCOUNTS) || 10
  // Conditional insert rather than count-then-insert so concurrent signups can't
  // both pass the check and overshoot the cap.
  const res = await env.DB
    .prepare('INSERT INTO users (id, email, password_hash, salt) SELECT ?, ?, ?, ? WHERE (SELECT COUNT(*) FROM users) < ?')
    .bind(id, email.toLowerCase(), hash, salt, cap)
    .run()
  if (!res.meta.changes) return json({ error: 'Registration is closed — the account limit has been reached.' }, 403)

  const token = await makeJWT({ sub: id, email: email.toLowerCase() }, env.JWT_SECRET)
  return json({ token, user: { id, email: email.toLowerCase() } })
}

async function pbkdf2(password, salt) {
  const enc = new TextEncoder()
  const key = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveBits'])
  const bits = await crypto.subtle.deriveBits({ name: 'PBKDF2', salt: enc.encode(salt), iterations: 100_000, hash: 'SHA-256' }, key, 256)
  return btoa(String.fromCharCode(...new Uint8Array(bits)))
}

async function makeJWT(payload, secret) {
  // Refuse to mint tokens rather than fall back to a hardcoded key — this repo is
  // public, so a default secret would let anyone forge a session.
  if (!secret) throw new Error('JWT_SECRET is not configured')
  const h = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }))
  const b = btoa(JSON.stringify({ ...payload, iat: Math.floor(Date.now() / 1000), exp: Math.floor(Date.now() / 1000) + 86400 * 30 }))
  const data = `${h}.${b}`
  const k = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign'])
  const sig = await crypto.subtle.sign('HMAC', k, new TextEncoder().encode(data))
  return `${data}.${btoa(String.fromCharCode(...new Uint8Array(sig))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')}`
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } })
}
