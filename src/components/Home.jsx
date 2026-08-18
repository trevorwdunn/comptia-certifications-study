import { Link } from 'react-router-dom'
import { CERTS, PATHWAYS, CERT_COLORS, getCert } from '../certs'
import { useAuth } from '../context/AuthContext'
import { useProgress } from '../context/ProgressContext'
import { getCertStats, getCertAttempts } from '../lib/storage'
import Leaderboard from './Leaderboard'

function CertCard({ cert }) {
  const { progress, activeCerts, toggleActiveCert } = useProgress()
  const c = CERT_COLORS[cert.color]
  const isActive = activeCerts.includes(cert.id)
  const isComingSoon = cert.status === 'coming-soon'
  const { attempts: quizCount, avgScore, masteredCards } = getCertStats(progress, cert.id)

  if (isComingSoon) {
    return (
      <div className="card border border-slate-700/50 opacity-60 relative overflow-hidden">
        <div className="absolute top-2.5 right-2.5">
          <span className="text-xs bg-slate-700 text-slate-400 px-2 py-0.5 rounded-full">Coming Soon</span>
        </div>
        <div className="flex items-center gap-3 mb-3">
          <div className={`w-9 h-9 ${c.bg} opacity-50 rounded-xl flex items-center justify-center font-bold text-white text-xs`}>{cert.badge}</div>
          <div>
            <div className="font-semibold text-slate-400">{cert.name}</div>
            <div className="text-xs text-slate-600">{cert.code}</div>
          </div>
        </div>
        <p className="text-xs text-slate-500">{cert.description}</p>
      </div>
    )
  }

  return (
    <div className={`card border transition-all ${isActive ? `${c.border} ${c.dim}` : 'border-slate-700 hover:border-slate-500'}`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 ${c.bg} rounded-xl flex items-center justify-center font-bold text-white text-sm`}>{cert.badge}</div>
          <div>
            <div className="font-bold">{cert.name}</div>
            <div className="text-xs text-slate-500">{cert.code}</div>
          </div>
        </div>
        <button
          onClick={() => toggleActiveCert(cert.id)}
          className={`text-xs px-2.5 py-1 rounded-full border transition-colors shrink-0 ${
            isActive ? `${c.border} ${c.text} ${c.dim}` : 'border-slate-600 text-slate-500 hover:border-slate-400'
          }`}
        >
          {isActive ? '● Studying' : '+ Study'}
        </button>
      </div>

      <p className="text-xs text-slate-400 mb-3 leading-relaxed">{cert.description}</p>
      {cert.note && <p className="text-xs text-amber-400/80 mb-3">⚠ {cert.note}</p>}

      <div className="flex gap-4 text-sm mb-3">
        <div>
          <div className={`font-bold text-base ${c.text}`}>{avgScore !== null ? `${avgScore}%` : '—'}</div>
          <div className="text-xs text-slate-600">Avg Score</div>
        </div>
        <div>
          <div className={`font-bold text-base ${c.text}`}>{quizCount}</div>
          <div className="text-xs text-slate-600">Quizzes</div>
        </div>
        <div>
          <div className={`font-bold text-base ${c.text}`}>{masteredCards}</div>
          <div className="text-xs text-slate-600">Cards</div>
        </div>
      </div>

      <div className="flex gap-2">
        <Link to={`/${cert.id}`} className={`flex-1 text-center text-sm py-2 rounded-lg font-semibold ${c.bg} text-white hover:opacity-90 transition-opacity`}>
          Open →
        </Link>
        <Link to={`/${cert.id}/quiz`} className="flex-1 text-center text-sm py-2 rounded-lg btn-secondary">
          Quiz
        </Link>
      </div>
    </div>
  )
}

export default function Home() {
  const { user } = useAuth()
  const { activeCerts, progress } = useProgress()

  const totalQuizzes = CERTS.filter((c) => c.status === 'active')
    .reduce((n, cert) => n + getCertAttempts(progress, cert.id).length, 0)

  return (
    <div className="space-y-10">
      {/* Hero */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            {user ? `Welcome back, ${user.email.split('@')[0]}` : 'CompTIA Study'}
          </h1>
          <p className="text-slate-400 mt-1 text-sm">
            {activeCerts.length
              ? `${activeCerts.length} cert${activeCerts.length > 1 ? 's' : ''} in progress · ${totalQuizzes} quizzes taken`
              : 'Select certifications below to start tracking your progress'}
          </p>
        </div>
        {!user && (
          <Link to="/login" className="btn-primary text-sm shrink-0">Login or Sign Up</Link>
        )}
      </div>

      {/* Active certs quick-access */}
      {activeCerts.length > 0 && (
        <div>
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Currently Studying</h2>
          <div className="flex gap-2 flex-wrap">
            {activeCerts.map((id) => {
              const cert = getCert(id)
              if (!cert) return null
              const c = CERT_COLORS[cert.color]
              return (
                <Link key={id} to={`/${id}`} className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${c.border} ${c.dim} ${c.text} text-sm font-medium hover:opacity-80 transition-opacity`}>
                  <span className="font-bold">{cert.badge}</span>{cert.name}
                </Link>
              )
            })}
          </div>
        </div>
      )}

      {/* Certifications by pathway */}
      {PATHWAYS.map((pathway) => {
        const pathwayCerts = CERTS.filter((c) => c.pathway === pathway.id)
        return (
          <div key={pathway.id}>
            <div className="mb-4">
              <h2 className="text-lg font-semibold">{pathway.label}</h2>
              <p className="text-xs text-slate-500">{pathway.description}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {pathwayCerts.map((cert) => <CertCard key={cert.id} cert={cert} />)}
            </div>
          </div>
        )
      })}

      {/* Overall leaderboard */}
      <Leaderboard certId={null} />

      {!user && (
        <div className="card border-slate-600 text-center">
          <p className="text-sm text-slate-300 mb-2">
            <Link to="/register" className="text-blue-400 font-semibold hover:underline">Create a free account</Link>
            {' '}to sync progress across all certifications and see your friends' scores.
          </p>
          <p className="text-xs text-slate-500">Progress saves locally without an account.</p>
        </div>
      )}
    </div>
  )
}
