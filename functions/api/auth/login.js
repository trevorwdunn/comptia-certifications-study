import { json, pbkdf2, makeJWT } from '../../_lib/auth'

export async function onRequestPost({ request, env }) {
  const { email, password } = await request.json()
  if (!email || !password) return json({ error: 'Email and password required' }, 400)

  const user = await env.DB.prepare('SELECT * FROM users WHERE email = ?').bind(email.toLowerCase()).first()
  if (!user) return json({ error: 'Invalid credentials' }, 401)

  const hash = await pbkdf2(password, user.salt)
  if (hash !== user.password_hash) return json({ error: 'Invalid credentials' }, 401)

  const token = await makeJWT({ sub: user.id, email: user.email }, env.JWT_SECRET)
  return json({ token, user: { id: user.id, email: user.email, username: user.username } })
}
