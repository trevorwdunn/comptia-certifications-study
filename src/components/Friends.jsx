import { useCallback, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { api } from '../lib/api'
import Avatar from './Avatar'

const RELATIONSHIP_LABEL = {
  friends: 'Friends',
  pending_out: 'Requested',
  pending_in: 'Wants to add you',
}

function Person({ person, children }) {
  return (
    <div className="flex items-center gap-3 py-3">
      <Avatar hash={person.avatarHash} name={person.username} size={36} />
      <div className="flex-1 min-w-0">
        <div className="font-semibold text-sm text-ink-2 truncate">{person.username}</div>
      </div>
      <div className="flex items-center gap-2 shrink-0">{children}</div>
    </div>
  )
}

export default function Friends() {
  const { user } = useAuth()
  const [data, setData] = useState({ friends: [], incoming: [], outgoing: [] })
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState(null)
  const [searching, setSearching] = useState(false)
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(null)

  const load = useCallback(async () => {
    try { setData(await api.friends.list()) }
    catch (e) { setError(e.message) }
    finally { setLoading(false) }
  }, [])

  useEffect(() => { load() }, [load])

  // Debounced so typing a username doesn't fire a request per keystroke.
  useEffect(() => {
    const q = query.trim()
    if (q.length < 2) { setResults(null); return }
    setSearching(true)
    const t = setTimeout(() => {
      api.users.search(q)
        .then(setResults)
        .catch((e) => setError(e.message))
        .finally(() => setSearching(false))
    }, 300)
    return () => clearTimeout(t)
  }, [query])

  if (!user) return <Navigate to="/login" replace />

  async function act(key, fn) {
    setBusy(key)
    setError('')
    try {
      await fn()
      await load()
      if (query.trim().length >= 2) setResults(await api.users.search(query.trim()))
    } catch (e) {
      setError(e.message)
    } finally {
      setBusy(null)
    }
  }

  return (
    <div className="space-y-6 max-w-lg">
      <div>
        <h1 className="text-2xl font-bold">Friends</h1>
        <p className="text-ink-4 text-sm mt-1">
          Add people by username to compare progress on the leaderboard.
        </p>
      </div>

      {error && <p className="text-red-700 dark:text-red-400 text-sm">{error}</p>}

      <div className="card">
        <label htmlFor="friend-search" className="block text-sm font-medium text-ink-3 mb-1.5">
          Find someone
        </label>
        <input
          id="friend-search"
          className="input"
          placeholder="Search by username"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoComplete="off"
        />
        {searching && <p className="text-ink-5 text-xs mt-2">Searching…</p>}
        {results && results.length === 0 && !searching && (
          <p className="text-ink-5 text-sm mt-3">No one found with that username.</p>
        )}
        {results && results.length > 0 && (
          <div className="mt-2 divide-y divide-line-2">
            {results.map((p) => (
              <Person key={p.id} person={p}>
                {p.relationship === 'none' ? (
                  <button
                    className="btn-primary text-xs py-1.5 px-3"
                    disabled={busy === p.id}
                    onClick={() => act(p.id, () => api.friends.add(p.username))}
                  >
                    {busy === p.id ? '…' : 'Add'}
                  </button>
                ) : (
                  <span className="text-xs text-ink-5">{RELATIONSHIP_LABEL[p.relationship]}</span>
                )}
              </Person>
            ))}
          </div>
        )}
      </div>

      {loading ? (
        <p className="text-ink-5 text-sm">Loading…</p>
      ) : (
        <>
          {data.incoming.length > 0 && (
            <div>
              <h2 className="font-bold mb-2">
                Requests <span className="text-xs text-ink-5 font-normal">({data.incoming.length})</span>
              </h2>
              <div className="card divide-y divide-line-2">
                {data.incoming.map((p) => (
                  <Person key={p.friendshipId} person={p}>
                    <button
                      className="btn-primary text-xs py-1.5 px-3"
                      disabled={busy === p.friendshipId}
                      onClick={() => act(p.friendshipId, () => api.friends.accept(p.friendshipId))}
                    >
                      Accept
                    </button>
                    <button
                      className="btn-secondary text-xs py-1.5 px-3"
                      disabled={busy === p.friendshipId}
                      onClick={() => act(p.friendshipId, () => api.friends.remove(p.friendshipId))}
                    >
                      Decline
                    </button>
                  </Person>
                ))}
              </div>
            </div>
          )}

          <div>
            <h2 className="font-bold mb-2">
              Your friends <span className="text-xs text-ink-5 font-normal">({data.friends.length})</span>
            </h2>
            <div className="card">
              {data.friends.length === 0 ? (
                <p className="text-ink-5 text-sm">
                  No friends yet — search for a username above to send a request.
                </p>
              ) : (
                <div className="divide-y divide-line-2">
                  {data.friends.map((p) => (
                    <Person key={p.friendshipId} person={p}>
                      <button
                        className="btn-ghost text-xs py-1.5 px-2 text-ink-5 hover:text-red-700 dark:hover:text-red-400"
                        disabled={busy === p.friendshipId}
                        onClick={() => act(p.friendshipId, () => api.friends.remove(p.friendshipId))}
                      >
                        Remove
                      </button>
                    </Person>
                  ))}
                </div>
              )}
            </div>
          </div>

          {data.outgoing.length > 0 && (
            <div>
              <h2 className="font-bold mb-2">Sent requests</h2>
              <div className="card divide-y divide-line-2">
                {data.outgoing.map((p) => (
                  <Person key={p.friendshipId} person={p}>
                    <button
                      className="btn-ghost text-xs py-1.5 px-2 text-ink-5 hover:text-red-700 dark:hover:text-red-400"
                      disabled={busy === p.friendshipId}
                      onClick={() => act(p.friendshipId, () => api.friends.remove(p.friendshipId))}
                    >
                      Cancel
                    </button>
                  </Person>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
