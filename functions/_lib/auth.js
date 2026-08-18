// Shared auth/JWT helpers. These used to be copy-pasted into every endpoint;
// with friends the endpoint count roughly triples, so they live here now.

export function json(data, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } })
}

export async function pbkdf2(password, salt) {
  const enc = new TextEncoder()
  const key = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveBits'])
  const bits = await crypto.subtle.deriveBits({ name: 'PBKDF2', salt: enc.encode(salt), iterations: 100_000, hash: 'SHA-256' }, key, 256)
  return btoa(String.fromCharCode(...new Uint8Array(bits)))
}

export async function makeJWT(payload, secret) {
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

// Verifies the bearer token and returns its payload ({ sub, email }), or null.
// The username is deliberately NOT in the token: tokens live 30 days and the
// username is editable, so it's read from the DB wherever it's actually needed.
export async function auth(request, env) {
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

// Gravatar hash, computed server-side so other people's email addresses never
// have to be shipped to the browser just to render an avatar.
export async function avatarHash(email) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(email.trim().toLowerCase()))
  return [...new Uint8Array(buf)].map((x) => x.toString(16).padStart(2, '0')).join('')
}

export const USERNAME_RE = /^[a-z0-9_]{3,20}$/

// Returns a cleaned username or an error string.
export function normalizeUsername(raw) {
  const u = String(raw ?? '').trim().toLowerCase()
  if (!u) return { error: 'Username is required' }
  if (!USERNAME_RE.test(u)) return { error: 'Username must be 3-20 characters: lowercase letters, numbers, or underscores' }
  return { username: u }
}
