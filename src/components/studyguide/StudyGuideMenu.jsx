import { Link, useParams } from 'react-router-dom'
import { getCert, CERT_COLORS } from '../../certs'
import { useCertData } from '../../data/index'
import Loading from '../Loading'
import { useProgress } from '../../context/ProgressContext'

const domainColors = ['blue','violet','emerald','red','amber','teal','orange','purple','sky']
const fallbackColor = { border: 'border-line-3/40', dim: 'bg-sunken', badge: 'bg-raised text-ink-3', text: 'text-ink-4' }

export default function StudyGuideMenu() {
  const { certId } = useParams()
  const cert = getCert(certId)
  const data = useCertData(certId)
  const { progress } = useProgress()
  if (cert && !data) return <Loading />
  if (!cert || !data) return null
  const c = CERT_COLORS[cert.color]

  return (
    <div className="space-y-6">
      <div>
        <Link to={`/${certId}`} className="text-ink-5 hover:text-ink text-sm">← {cert.name}</Link>
        <h1 className="text-2xl font-bold mt-1">Study Guide</h1>
        <p className="text-ink-4 mt-1 text-sm">Structured notes and explanations for every topic</p>
      </div>

      {data.studyGuide.length === 0 ? (
        <div className="card border border-line-2 text-center py-12 text-ink-5">Study guide content coming soon.</div>
      ) : (
        <div className="space-y-2">
          {data.studyGuide.map((guide) => {
            const completed = guide.topics.filter((t) => progress[`${certId}:topic_${t.id}`]?.completed).length
            return (
              <Link key={guide.id} to={`/${certId}/study/${guide.id}`}
                className={`card border transition-colors flex items-center justify-between ${c.border} ${c.dim} hover:opacity-90`}>
                <div className="flex items-center gap-3">
                  <span className={`badge ${c.badge}`}>D{guide.domain}</span>
                  <div>
                    <div className="font-medium text-sm">{guide.title}</div>
                    <div className="text-xs text-ink-5">{guide.summary}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  {completed > 0 && <span className="text-xs text-ink-5">{completed}/{guide.topics.length} done</span>}
                  <span className="text-ink-5">→</span>
                </div>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
