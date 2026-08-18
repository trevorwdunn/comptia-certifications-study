import { auth, json } from '../../_lib/auth'

// PATCH /api/friends/:id — accept a request addressed to you.
export async function onRequestPatch({ request, env, params }) {
  const session = await auth(request, env)
  if (!session) return json({ error: 'Unauthorized' }, 401)

  const res = await env.DB.prepare(
    `UPDATE friendships SET status = 'accepted', updated_at = CURRENT_TIMESTAMP
     WHERE id = ? AND addressee_id = ? AND status = 'pending'`
  ).bind(params.id, session.sub).run()

  if (!res.meta.changes) return json({ error: 'No pending request to accept' }, 404)
  return json({ ok: true })
}

// DELETE /api/friends/:id — decline, cancel, or unfriend. Either side may do it.
export async function onRequestDelete({ request, env, params }) {
  const session = await auth(request, env)
  if (!session) return json({ error: 'Unauthorized' }, 401)

  const res = await env.DB
    .prepare('DELETE FROM friendships WHERE id = ? AND (requester_id = ? OR addressee_id = ?)')
    .bind(params.id, session.sub, session.sub)
    .run()

  if (!res.meta.changes) return json({ error: 'Not found' }, 404)
  return json({ ok: true })
}
