import { Link, useParams } from 'react-router-dom'
import { getCert, CERT_COLORS } from '../../certs'
import { useCertData } from '../../data/index'
import Loading from '../Loading'
import { useProgress } from '../../context/ProgressContext'

export default function QuizMenu() {
  const { certId } = useParams()
  const cert = getCert(certId)
  const data = useCertData(certId)
  const { progress } = useProgress()

  if (cert && !data) return <Loading />
  if (!cert || !data) return null
  const c = CERT_COLORS[cert.color]

  const coreGroups = cert.id === 'a-plus'
    ? [
        { label: 'Core 1 (220-1201)', domains: data.domains.filter((d) => d.core === 1) },
        { label: 'Core 2 (220-1202)', domains: data.domains.filter((d) => d.core === 2) },
      ]
    : [{ label: null, domains: data.domains }]

  return (
    <div className="space-y-6">
      <div>
        <Link to={`/${certId}`} className="text-ink-5 hover:text-ink text-sm">← {cert.name}</Link>
        <h1 className="text-2xl font-bold mt-1">Practice Quiz</h1>
        <p className="text-ink-4 mt-1 text-sm">Test your knowledge by domain or simulate the full exam</p>
      </div>

      <Link to={`/${certId}/quiz/all`} className="card border border-line-3 hover:border-line-5 transition-colors flex items-center justify-between">
        <div>
          <div className="font-semibold">Mixed Exam — All Domains</div>
          <div className="text-sm text-ink-4 mt-0.5">{data.questions.length} questions · Simulates the real exam</div>
        </div>
        <span className="text-ink-4 text-lg">→</span>
      </Link>

      {coreGroups.map(({ label, domains }) => (
        <div key={label || 'all'}>
          {label && <h2 className="text-sm font-semibold text-ink-4 uppercase tracking-wider mb-3">{label}</h2>}
          <div className="space-y-2">
            {domains.map((d) => {
              const key = `${certId}:quiz_d${d.id}`
              const qData = progress[key]
              const qCount = data.questions.filter((q) => q.domain === d.id).length
              return (
                <Link key={d.id} to={`/${certId}/quiz/${d.id}`}
                  className={`card border transition-colors flex items-center justify-between ${c.border} ${c.dim} hover:opacity-90`}>
                  <div className="flex items-center gap-3">
                    <span className={`badge ${c.badge}`}>D{d.id}</span>
                    <div>
                      <div className="font-medium text-sm">{d.name}</div>
                      <div className="text-xs text-ink-5">{qCount} questions · {d.percent}% of exam</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {qData?.bestScore != null && (
                      <span className={`text-xs font-semibold ${qData.bestScore >= 80 ? 'text-emerald-700 dark:text-emerald-400' : qData.bestScore >= 60 ? 'text-amber-700 dark:text-amber-400' : 'text-red-700 dark:text-red-400'}`}>
                        Best: {qData.bestScore}%
                      </span>
                    )}
                    <span className="text-ink-5">→</span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
