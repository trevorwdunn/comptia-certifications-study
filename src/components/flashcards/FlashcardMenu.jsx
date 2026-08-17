import { Link, useParams } from 'react-router-dom'
import { getCert, CERT_COLORS } from '../../certs'
import { useCertData } from '../../data/index'
import Loading from '../Loading'
import { useProgress } from '../../context/ProgressContext'

export default function FlashcardMenu() {
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

  const totalMastered = data.flashcards.filter((f) => progress[`${certId}:fc_${f.id}`]?.status === 'mastered').length

  return (
    <div className="space-y-6">
      <div>
        <Link to={`/${certId}`} className="text-slate-500 hover:text-white text-sm">← {cert.name}</Link>
        <h1 className="text-2xl font-bold mt-1">Flashcards</h1>
        <p className="text-slate-400 mt-1 text-sm">{totalMastered} of {data.flashcards.length} cards mastered</p>
      </div>

      {data.flashcards.length === 0 ? (
        <div className="card border border-slate-700 text-center py-12 text-slate-500">Content coming soon.</div>
      ) : (
        <>
          <Link to={`/${certId}/flashcards/all`} className="card border border-slate-600 hover:border-slate-400 transition-colors flex items-center justify-between">
            <div>
              <div className="font-semibold">All Flashcards</div>
              <div className="text-sm text-slate-400 mt-0.5">{data.flashcards.length} cards · All domains</div>
            </div>
            <span className="text-slate-400">→</span>
          </Link>

          {coreGroups.map(({ label, domains }) => (
            <div key={label || 'all'}>
              {label && <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">{label}</h2>}
              <div className="space-y-2">
                {domains.map((d) => {
                  const cards = data.flashcards.filter((f) => f.domain === d.id)
                  const mastered = cards.filter((f) => progress[`${certId}:fc_${f.id}`]?.status === 'mastered').length
                  return (
                    <Link key={d.id} to={`/${certId}/flashcards/${d.id}`}
                      className={`card border transition-colors flex items-center justify-between ${c.border} ${c.dim} hover:opacity-90`}>
                      <div className="flex items-center gap-3">
                        <span className={`badge ${c.badge}`}>D{d.id}</span>
                        <div>
                          <div className="font-medium text-sm">{d.name}</div>
                          <div className="text-xs text-slate-500">{cards.length} cards</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        {mastered > 0 && <span className="text-xs text-emerald-400">{mastered} mastered</span>}
                        <span className="text-slate-500">→</span>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  )
}
