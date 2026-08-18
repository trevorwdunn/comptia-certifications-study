import { auth, json } from '../../_lib/auth'

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
