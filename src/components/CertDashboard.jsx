import { Link, useParams } from 'react-router-dom'
import { getCert, CERT_COLORS } from '../certs'
import { useCertData } from '../data/index'
import Loading from './Loading'
import { useProgress } from '../context/ProgressContext'
import { getCertEarned, getVideoStats } from '../lib/storage'
import { useAuth } from '../context/AuthContext'
import Leaderboard from './Leaderboard'

export default function CertDashboard() {
  const { certId } = useParams()
  const cert = getCert(certId)
  const data = useCertData(certId)
  const { progress, activeCerts, toggleActiveCert, setEarned } = useProgress()
  const { user } = useAuth()

  if (cert && !data) return <Loading />
  if (!cert || !data) return <div className="text-ink-4">Certification not found.</div>

  const c = CERT_COLORS[cert.color]
  const isActive = activeCerts.includes(certId)
  const earned = getCertEarned(progress, certId)

  const allAttempts = [
    ...(progress[`${certId}:quiz_dall`]?.attempts || []),
    ...data.domains.flatMap((d) => progress[`${certId}:quiz_d${d.id}`]?.attempts || []),
  ]
  const avgScore = allAttempts.length
    ? Math.round(allAttempts.reduce((s, a) => s + a.score, 0) / allAttempts.length)
    : null
  const masteredCards = data.flashcards.filter((f) => progress[`${certId}:fc_${f.id}`]?.status === 'mastered').length
  const completedTopics = data.studyGuide.reduce(
    (s, g) => s + g.topics.filter((t) => progress[`${certId}:topic_${t.id}`]?.completed).length, 0
  )
  const totalTopics = data.studyGuide.reduce((s, g) => s + g.topics.length, 0)
  const videoStats = getVideoStats(progress, certId, cert.videos ?? [])
  const videoPct = videoStats.total ? Math.round((videoStats.watched / videoStats.total) * 100) : 0

  // A+ grouping
  const coreGroups = cert.id === 'a-plus'
    ? [
        { label: 'Core 1 (220-1201)', domains: data.domains.filter((d) => d.core === 1) },
        { label: 'Core 2 (220-1202)', domains: data.domains.filter((d) => d.core === 2) },
      ]
    : [{ label: null, domains: data.domains }]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div className="flex items-center gap-4 min-w-0">
          <div className={`w-12 h-12 sm:w-14 sm:h-14 shrink-0 ${c.bg} rounded-2xl flex items-center justify-center text-xl sm:text-2xl font-bold text-white`}>{cert.badge}</div>
          <div className="min-w-0">
            <h1 className="text-xl sm:text-2xl font-bold">{cert.fullName}</h1>
            {/* Not every entry is scored out of 900 — CASP+ is pass/fail and 3CX is
                vendor training, so both carry a null passingScore. */}
            <p className="text-ink-4 text-sm">
              {cert.code}{cert.passingScore ? ` · Passing score: ${cert.passingScore}/900` : ''}
            </p>
            {cert.note && <p className="text-xs text-amber-700/80 dark:text-amber-400/80 mt-1">⚠ {cert.note}</p>}
          </div>
        </div>
        <div className="flex gap-2 shrink-0 self-start">
          <button
            onClick={() => toggleActiveCert(certId)}
            className={`text-sm px-3 py-1.5 rounded-full border transition-colors ${
              isActive ? `${c.border} ${c.text} ${c.dim}` : 'border-line-3 text-ink-5 hover:border-line-5'
            }`}
          >
            {isActive ? '● Studying' : '+ Study this cert'}
          </button>
          <button
            onClick={() => setEarned(certId, !earned)}
            className={`text-sm px-3 py-1.5 rounded-full border transition-colors ${
              earned ? 'border-amber-500/40 text-amber-700 dark:text-amber-400 bg-amber-500/10' : 'border-line-3 text-ink-5 hover:border-line-5'
            }`}
          >
            {earned ? `🏅 Earned ${new Date(earned.earnedAt).toLocaleDateString()}` : '🏅 Mark as earned'}
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: 'Avg Score', value: avgScore !== null ? `${avgScore}%` : '—', color: c.text },
          { label: 'Quizzes', value: allAttempts.length, color: c.text },
          { label: 'Cards Mastered', value: `${masteredCards}/${data.flashcards.length}`, color: c.text },
          { label: 'Topics Done', value: `${completedTopics}/${totalTopics}`, color: c.text },
        ].map(({ label, value, color }) => (
          <div key={label} className="card text-center">
            <div className={`text-2xl font-bold ${color}`}>{value}</div>
            <div className="text-xs text-ink-5 mt-1">{label}</div>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { to: `/${certId}/quiz`,       label: 'Practice Quiz',  icon: '✦', color: c.bg },
          { to: `/${certId}/quiz/all`,   label: 'Full Exam Sim',  icon: '⊡', color: c.bg },
          { to: `/${certId}/flashcards`, label: 'Flashcards',     icon: '⟐', color: c.bg },
          { to: `/${certId}/study`,      label: 'Study Guide',    icon: '≡', color: c.bg },
        ].map(({ to, label, icon, color }) => (
          <Link key={to} to={to} className="card border-line-2 hover:border-line-4 transition-colors text-center">
            <div className={`w-8 h-8 ${color} rounded-lg flex items-center justify-center mx-auto mb-2 text-white`}>{icon}</div>
            <div className="text-sm font-medium">{label}</div>
          </Link>
        ))}
      </div>

      {/* Domain breakdown */}
      {coreGroups.map(({ label, domains }) => (
        <div key={label || 'all'}>
          {label && <h2 className="text-base font-semibold mb-3 text-ink-3">{label}</h2>}
          {!label && <h2 className="text-lg font-semibold mb-3">Domains</h2>}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {domains.map((d) => {
              const key = `${certId}:quiz_d${d.id}`
              const qData = progress[key]
              const best = qData?.bestScore ?? null
              const qCount = data.questions.filter((q) => q.domain === d.id).length
              const fcCount = data.flashcards.filter((f) => f.domain === d.id).length
              return (
                <div key={d.id} className={`card border ${c.border} ${c.dim}`}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="text-xs text-ink-5 mb-0.5">Domain {d.id} · {d.percent}%</div>
                      <div className="font-medium text-sm">{d.name}</div>
                    </div>
                    {best !== null && (
                      <span className={`text-xs font-bold ${best >= 80 ? 'text-emerald-700 dark:text-emerald-400' : best >= 60 ? 'text-amber-700 dark:text-amber-400' : 'text-red-700 dark:text-red-400'}`}>{best}%</span>
                    )}
                  </div>
                  <div className="text-xs text-ink-6 mb-3">{qCount} questions · {fcCount} cards</div>
                  <div className="flex gap-2">
                    <Link to={`/${certId}/quiz/${d.id}`} className={`flex-1 text-center text-xs py-1.5 rounded-md ${c.bg} text-white font-medium`}>Quiz</Link>
                    <Link to={`/${certId}/flashcards/${d.id}`} className="flex-1 text-center text-xs py-1.5 rounded-md btn-secondary">Cards</Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ))}

      {/* Video track — only for certs with a curated ordered list */}
      {cert.videos?.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold mb-3">Video Track</h2>
          <Link
            to={`/${certId}/videos`}
            className={`card border ${videoStats.complete ? 'border-emerald-600/40' : c.border} ${c.dim} block hover:brightness-110 transition-all`}
          >
            <div className="flex items-center justify-between gap-3 mb-2">
              <div className="min-w-0">
                <div className="font-medium text-sm">
                  {videoStats.complete
                    ? 'Track complete'
                    : videoStats.watched === 0
                      ? 'Start the video track'
                      : `Up next: video ${videoStats.nextIndex + 1}`}
                </div>
                <div className="text-xs text-ink-5 mt-0.5">
                  {videoStats.watched} of {videoStats.total} watched · watch in order, mark as you go
                </div>
              </div>
              <span className={`text-sm font-bold shrink-0 ${videoStats.complete ? 'text-emerald-700 dark:text-emerald-400' : c.text}`}>
                {videoPct}%
              </span>
            </div>
            <div className="h-1.5 bg-raised rounded-full overflow-hidden">
              <div className={`h-full ${c.bar} rounded-full transition-all duration-500`} style={{ width: `${videoPct}%` }} />
            </div>
          </Link>
        </div>
      )}

      {/* Resources */}
      {cert.resources?.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold mb-3">Free Study Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {cert.resources.map((r) => (
              <a
                key={r.href}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card border border-line-2 hover:border-line-4 transition-colors flex items-center gap-3"
              >
                <span className={`w-8 h-8 shrink-0 rounded-lg flex items-center justify-center text-sm ${r.kind === 'video' ? 'bg-red-600/15 text-red-700 dark:bg-red-600/20 dark:text-red-400' : 'bg-raised text-ink-3'}`}>
                  {r.kind === 'video' ? '▶' : '⎘'}
                </span>
                <span className="text-sm font-medium min-w-0 truncate">{r.label}</span>
                <span className="ml-auto text-ink-6 text-xs shrink-0">↗</span>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Leaderboard */}
      <Leaderboard certId={certId} />
    </div>
  )
}
