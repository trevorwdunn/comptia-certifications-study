import { Link, useParams } from 'react-router-dom'
import { getCert, CERT_COLORS } from '../../certs'
import { useCertData } from '../../data/index'
import Loading from '../Loading'
import { useProgress } from '../../context/ProgressContext'

function Bar({ pct, color }) {
  const c = CERT_COLORS[color] || CERT_COLORS.blue
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-2 bg-slate-800 rounded-full">
        <div className={`h-full rounded-full transition-all duration-500 ${c.bar}`} style={{ width: `${pct}%` }} />
      </div>
      <span className={`text-sm font-semibold w-10 text-right ${c.text}`}>{pct}%</span>
    </div>
  )
}

export default function ProgressView() {
  const { certId } = useParams()
  const cert = getCert(certId)
  const data = useCertData(certId)
  const { progress } = useProgress()
  if (cert && !data) return <Loading />
  if (!cert || !data) return null
  const c = CERT_COLORS[cert.color]

  const allAttempts = [
    ...(progress[`${certId}:quiz_dall`]?.attempts || []),
    ...data.domains.flatMap((d) => progress[`${certId}:quiz_d${d.id}`]?.attempts || []),
  ]
  const overallAvg = allAttempts.length
    ? Math.round(allAttempts.reduce((s, a) => s + a.score, 0) / allAttempts.length)
    : null
  const masteredCards = data.flashcards.filter((f) => progress[`${certId}:fc_${f.id}`]?.status === 'mastered').length
  const totalTopics = data.studyGuide.reduce((s, g) => s + g.topics.length, 0)
  const completedTopics = data.studyGuide.reduce(
    (s, g) => s + g.topics.filter((t) => progress[`${certId}:topic_${t.id}`]?.completed).length, 0
  )

  const passingPct = cert.passingScore ? Math.round((cert.passingScore / 900) * 100) : 72

  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <Link to={`/${certId}`} className="text-slate-500 hover:text-white text-sm">← {cert.name}</Link>
          <h1 className="text-xl sm:text-2xl font-bold mt-1">Your Progress</h1>
          <p className="text-slate-400 text-sm mt-1">{cert.fullName} · {cert.code}</p>
        </div>
        <div className={`text-xs px-3 py-1.5 rounded-full shrink-0 whitespace-nowrap ${overallAvg !== null && overallAvg >= passingPct ? 'bg-emerald-900/30 text-emerald-400 border border-emerald-700/40' : 'bg-slate-800 text-slate-400 border border-slate-700'}`}>
          Passing: {passingPct}%
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4">
        <div className="card text-center">
          <div className={`text-xl sm:text-3xl font-bold ${c.text}`}>{overallAvg !== null ? `${overallAvg}%` : '—'}</div>
          <div className="text-xs text-slate-500 mt-1">Overall Avg</div>
        </div>
        <div className="card text-center">
          <div className={`text-xl sm:text-3xl font-bold ${c.text}`}>{masteredCards}/{data.flashcards.length}</div>
          <div className="text-xs text-slate-500 mt-1">Cards Mastered</div>
        </div>
        <div className="card text-center">
          <div className={`text-xl sm:text-3xl font-bold ${c.text}`}>{completedTopics}/{totalTopics}</div>
          <div className="text-xs text-slate-500 mt-1">Topics Done</div>
        </div>
      </div>

      {/* Quiz by domain */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Quiz Scores by Domain</h2>
        <div className="space-y-4">
          {data.domains.map((d) => {
            const key = `${certId}:quiz_d${d.id}`
            const dData = progress[key]
            const attempts = dData?.attempts || []
            const best = dData?.bestScore ?? null
            const avg = attempts.length ? Math.round(attempts.reduce((s, a) => s + a.score, 0) / attempts.length) : null
            return (
              <div key={d.id} className="card">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-xs text-slate-500 mr-2">D{d.id} · {d.percent}%</span>
                    <span className="font-medium text-sm">{d.name}</span>
                  </div>
                  <Link to={`/${certId}/quiz/${d.id}`} className="text-xs btn-ghost py-1">Practice →</Link>
                </div>
                {best !== null ? (
                  <>
                    <Bar pct={best} color={cert.color} />
                    <div className="flex gap-4 mt-2 text-xs text-slate-500">
                      <span>Best: <span className="text-slate-300">{best}%</span></span>
                      <span>Avg: <span className="text-slate-300">{avg}%</span></span>
                      <span>{attempts.length} attempt{attempts.length !== 1 ? 's' : ''}</span>
                    </div>
                  </>
                ) : (
                  <p className="text-slate-500 text-sm">No attempts yet</p>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Flashcard breakdown */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Flashcard Progress</h2>
        <div className="space-y-3">
          {data.domains.map((d) => {
            const cards = data.flashcards.filter((f) => f.domain === d.id)
            const mastered = cards.filter((f) => progress[`${certId}:fc_${f.id}`]?.status === 'mastered').length
            const pct = cards.length ? Math.round((mastered / cards.length) * 100) : 0
            return (
              <div key={d.id} className="flex items-center gap-4">
                <div className="w-28 text-xs text-slate-500 shrink-0">D{d.id} · {d.name.split(' ')[0]}</div>
                <div className="flex-1"><Bar pct={pct} color={cert.color} /></div>
                <div className="text-xs text-slate-500 w-16 text-right shrink-0">{mastered}/{cards.length}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
