import { Link, useParams } from 'react-router-dom'
import { getCert, CERT_COLORS } from '../../certs'
import { useCertData } from '../../data/index'
import Loading from '../Loading'
import { useProgress } from '../../context/ProgressContext'

const domainColors = ['blue','violet','emerald','red','amber','teal','orange','purple','sky']
const fallbackColor = { border: 'border-slate-600/40', dim: 'bg-slate-700/10', badge: 'bg-slate-700 text-slate-300', text: 'text-slate-400' }

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
        <Link to={`/${certId}`} className="text-slate-500 hover:text-white text-sm">← {cert.name}</Link>
        <h1 className="text-2xl font-bold mt-1">Study Guide</h1>
        <p className="text-slate-400 mt-1 text-sm">Structured notes and explanations for every topic</p>
      </div>

      {data.studyGuide.length === 0 ? (
        <div className="card border border-slate-700 text-center py-12 text-slate-500">Study guide content coming soon.</div>
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
                    <div className="text-xs text-slate-500">{guide.summary}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  {completed > 0 && <span className="text-xs text-slate-500">{completed}/{guide.topics.length} done</span>}
                  <span className="text-slate-500">→</span>
                </div>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
