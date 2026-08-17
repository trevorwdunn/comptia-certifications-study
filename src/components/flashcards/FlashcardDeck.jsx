import { useState, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getCert, CERT_COLORS } from '../../certs'
import { useCertData } from '../../data/index'
import Loading from '../Loading'
import { useProgress } from '../../context/ProgressContext'

export default function FlashcardDeck() {
  const { certId, domainId } = useParams()
  const cert = getCert(certId)
  const data = useCertData(certId)
  const { progress, saveFlashcard } = useProgress()
  const isAll = domainId === 'all'
  const c = cert ? CERT_COLORS[cert.color] : CERT_COLORS.blue

  const cards = useMemo(() => {
    const pool = data ? (isAll ? data.flashcards : data.flashcards.filter((f) => f.domain === Number(domainId))) : []
    return [...pool].sort(() => Math.random() - 0.5)
  }, [certId, domainId, data])

  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)

  if (cert && !data) return <Loading />
  if (!cert || cards.length === 0) {
    return (
      <div className="space-y-4">
        <Link to={`/${certId}/flashcards`} className="text-slate-500 hover:text-white text-sm">← Flashcards</Link>
        <div className="card border border-slate-700 text-center py-12 text-slate-500">No cards available yet.</div>
      </div>
    )
  }

  const card = cards[index]
  const mastered = cards.filter((c) => progress[`${certId}:fc_${c.id}`]?.status === 'mastered').length

  function next() { setFlipped(false); setTimeout(() => setIndex((i) => Math.min(i + 1, cards.length - 1)), 50) }
  function prev() { setFlipped(false); setTimeout(() => setIndex((i) => Math.max(i - 1, 0)), 50) }
  function handleStatus(status) { saveFlashcard(certId, card.id, status); next() }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Link to={`/${certId}/flashcards`} className="text-slate-500 hover:text-white text-sm">← Flashcards</Link>
          <h1 className="text-xl font-bold mt-1">{cert.name} Flashcards</h1>
        </div>
        <div className="text-sm text-slate-400">{index + 1} / {cards.length}</div>
      </div>

      <div className="h-1.5 bg-slate-800 rounded-full">
        <div className={`h-full ${c.bar} rounded-full transition-all`} style={{ width: `${(index / cards.length) * 100}%` }} />
      </div>

      <div className="flex gap-4 text-sm">
        <span className="text-emerald-400">{mastered} mastered</span>
        <span className="text-slate-500">{cards.length - mastered} remaining</span>
      </div>

      <div className="flip-card" style={{ height: 260 }} onClick={() => setFlipped((f) => !f)}>
        <div className={`flip-card-inner ${flipped ? 'flipped' : ''}`}>
          <div className={`flip-card-front card border ${c.border} flex flex-col items-center justify-center cursor-pointer select-none`}>
            <div className="text-xs text-slate-500 mb-4 uppercase tracking-wider">Term</div>
            <div className="text-xl sm:text-2xl font-bold text-center px-4 sm:px-6">{card.term}</div>
            <div className="text-xs text-slate-600 mt-6">Click to flip</div>
          </div>
          <div className={`flip-card-back card border ${c.border} ${c.dim} flex flex-col items-center justify-center cursor-pointer select-none`}>
            <div className="text-xs text-slate-500 mb-4 uppercase tracking-wider">Definition</div>
            <div className="text-sm text-slate-200 text-center px-4 sm:px-6 leading-relaxed whitespace-pre-line overflow-y-auto max-h-full">{card.definition}</div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-2">
        <button onClick={prev} disabled={index === 0} className="btn-secondary disabled:opacity-30 shrink-0">←</button>
        {flipped ? (
          <div className="flex gap-2 flex-1 min-w-0">
            <button onClick={() => handleStatus('learning')} className="flex-1 px-2 sm:px-3 py-2 bg-red-900/30 border border-red-700/40 text-red-400 text-xs sm:text-sm rounded-lg hover:bg-red-900/50 transition-colors">Still Learning</button>
            <button onClick={() => handleStatus('mastered')} className="flex-1 px-2 sm:px-3 py-2 bg-emerald-900/30 border border-emerald-700/40 text-emerald-400 text-xs sm:text-sm rounded-lg hover:bg-emerald-900/50 transition-colors">Mastered ✓</button>
          </div>
        ) : (
          <button onClick={next} disabled={index >= cards.length - 1} className="btn-secondary disabled:opacity-30 shrink-0">Next →</button>
        )}
      </div>
    </div>
  )
}
