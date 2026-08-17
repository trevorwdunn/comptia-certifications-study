export async function onRequestPost({ request, env }) {
  const { email, password } = await request.json()
  if (!email || !password) return json({ error: 'Email and password required' }, 400)

  const user = await env.DB.prepare('SELECT * FROM users WHERE email = ?').bind(email.toLowerCase()).first()
  if (!user) return json({ error: 'Invalid credentials' }, 401)

  const hash = await pbkdf2(password, user.salt)
  if (hash !== user.password_hash) return json({ error: 'Invalid credentials' }, 401)

  const token = await makeJWT({ sub: user.id, email: user.email }, env.JWT_SECRET)
  return json({ token, user: { id: user.id, email: user.email } })
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
