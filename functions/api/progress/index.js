export async function onRequestGet({ request, env }) {
  const user = await auth(request, env)
  if (!user) return json({ error: 'Unauthorized' }, 401)
  const row = await env.DB.prepare('SELECT data FROM user_progress WHERE user_id = ?').bind(user.sub).first()
  return json(row ? JSON.parse(row.data) : {})
}

export async function onRequestPost({ request, env }) {
  const user = await auth(request, env)
  if (!user) return json({ error: 'Unauthorized' }, 401)
  const data = JSON.stringify(await request.json())
  await env.DB.prepare(
    'INSERT INTO user_progress (user_id, data, updated_at) VALUES (?, ?, CURRENT_TIMESTAMP) ON CONFLICT(user_id) DO UPDATE SET data = excluded.data, updated_at = excluded.updated_at'
  ).bind(user.sub, data).run()
  return json({ ok: true })
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
