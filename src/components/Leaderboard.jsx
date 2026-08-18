import { useEffect, useState } from 'react'
import { useAuth, displayNameOf } from '../context/AuthContext'
import { useProgress } from '../context/ProgressContext'
import { getCertStats } from '../lib/storage'
import { CERT_COLORS, getCert } from '../certs'
import Avatar from './Avatar'

// Fetches progress summaries for a cert (or all certs if no certId), across
// either everyone or just the people you've added as friends.
async function fetchLeaderboard(certId, scope) {
  const token = localStorage.getItem('cstudy_token')
  if (!token) return null
  const params = new URLSearchParams()
  if (certId) params.set('cert', certId)
  if (scope === 'friends') params.set('scope', 'friends')
  const qs = params.toString()
  const res = await fetch(`/api/leaderboard${qs ? `?${qs}` : ''}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  if (!res.ok) return null
  return res.json()
}

function Medal({ rank }) {
  if (rank === 1) return <span className="text-amber-400 text-base">🥇</span>
  if (rank === 2) return <span className="text-slate-400 text-base">🥈</span>
  if (rank === 3) return <span className="text-amber-700 text-base">🥉</span>
  return <span className="text-slate-600 text-sm font-bold w-5 text-center">{rank}</span>
}

export default function Leaderboard({ certId }) {
  const { user } = useAuth()
  const { progress } = useProgress()
  const [board, setBoard] = useState(null)
  const [loading, setLoading] = useState(false)
  const [scope, setScope] = useState('all')

  useEffect(() => {
    if (!user) return
    setLoading(true)
    fetchLeaderboard(certId, scope).then(setBoard).finally(() => setLoading(false))
  }, [user, certId, scope])

  // Build local entry for the current user (always show even if not logged in)
  const localEntry = (() => {
    if (!certId) return null
    const stats = getCertStats(progress, certId)
    return {
      id: user?.id ?? null,
      displayName: user ? displayNameOf(user) : 'You (local)',
      isYou: true,
      ...stats,
    }
  })()

  // Merge server board with local data. Identity is by user id now — the board
  // no longer carries email addresses.
  const entries = board
    ? board.map((e) => ({ ...e, isYou: user && e.id === user.id }))
    : localEntry ? [localEntry] : []

  const sorted = [...entries].sort((a, b) => (b.avgScore ?? -1) - (a.avgScore ?? -1))

  const cert = certId ? getCert(certId) : null
  const c = cert ? CERT_COLORS[cert.color] : CERT_COLORS.blue

  if (!user && !localEntry) return null

  return (
    <div>
      <div className="flex items-center justify-between mb-3 gap-3">
        <h2 className="text-lg font-semibold">Leaderboard</h2>
        {user && (
          <div className="flex bg-slate-800 rounded-lg p-0.5 text-xs font-semibold shrink-0">
            {['all', 'friends'].map((s) => (
              <button
                key={s}
                onClick={() => setScope(s)}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  scope === s ? 'bg-slate-700 text-slate-100' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {s === 'all' ? 'Everyone' : 'Friends'}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="card border border-slate-700">
        {loading && <div className="text-slate-500 text-sm py-2">Loading scores…</div>}
        {!loading && sorted.length === 0 && (
          <div className="text-slate-500 text-sm">No scores yet — be the first to quiz!</div>
        )}
        {!loading && sorted.length > 0 && (
          <div className="space-y-0">
            {sorted.map((entry, i) => (
              <div
                key={entry.id ?? entry.displayName}
                className={`flex items-center gap-3 py-3 ${i < sorted.length - 1 ? 'border-b border-slate-700' : ''} ${entry.isYou ? `${c.dim} -mx-5 px-5 rounded-lg` : ''}`}
              >
                <div className="w-6 flex items-center justify-center shrink-0">
                  <Medal rank={i + 1} />
                </div>
                <Avatar hash={entry.avatarHash} email={entry.isYou ? user?.email : undefined} name={entry.displayName} size={36} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className={`font-semibold text-sm ${entry.isYou ? c.text : 'text-slate-200'}`}>
                      {entry.displayName}
                    </span>
                    {entry.isYou && <span className="text-xs text-slate-500">(you)</span>}
                  </div>
                  <div className="text-xs text-slate-500">
                    {entry.attempts} quiz{entry.attempts !== 1 ? 'zes' : ''} · {entry.masteredCards} cards mastered
                  </div>
                </div>
                <div className="text-right shrink-0">
                  {entry.avgScore !== null ? (
                    <div className={`text-lg font-bold ${entry.avgScore >= 80 ? 'text-emerald-400' : entry.avgScore >= 72 ? 'text-amber-400' : 'text-slate-400'}`}>
                      {entry.avgScore}%
                    </div>
                  ) : (
                    <div className="text-slate-600 text-sm">No scores</div>
                  )}
                  <div className="text-xs text-slate-600">avg score</div>
                </div>
              </div>
            ))}
          </div>
        )}
        {!user && (
          <div className="mt-3 pt-3 border-t border-slate-700 text-xs text-slate-500">
            <a href="/login" className="text-blue-400 hover:underline">Sign in</a> to see how everyone is doing.
          </div>
        )}
      </div>
    </div>
  )
}
