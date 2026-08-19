import { useState, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getCert, CERT_COLORS } from '../../certs'
import { useCertData } from '../../data/index'
import Loading from '../Loading'
import { useProgress } from '../../context/ProgressContext'

function Results({ certId, questions, answers, onRestart, onBack }) {
  const cert = getCert(certId)
  const correct = answers.filter((a, i) => a === questions[i].correct).length
  const score = Math.round((correct / questions.length) * 100)
  // A null passingScore (CASP+ is pass/fail, 3CX is vendor training) would otherwise
  // compute a 0% threshold and mark every attempt a pass. Fall back to 72%, matching
  // the default used on the progress view.
  const threshold = cert?.passingScore ? Math.round((cert.passingScore / 900) * 100) : 72
  const passing = score >= threshold

  return (
    <div className="space-y-6">
      <div className={`card border text-center py-8 ${passing ? 'border-emerald-600/40 bg-emerald-600/5' : 'border-red-600/40 bg-red-600/5'}`}>
        <div className={`text-5xl font-bold mb-2 ${passing ? 'text-emerald-400' : 'text-red-400'}`}>{score}%</div>
        <div className="text-lg font-semibold mb-1">{passing ? 'Passing Score!' : 'Keep Studying'}</div>
        <div className="text-slate-400 text-sm">{correct} / {questions.length} correct</div>
      </div>
      <div className="flex gap-3">
        <button onClick={onRestart} className="btn-primary flex-1">Try Again</button>
        <button onClick={onBack} className="btn-secondary flex-1">Back to Quiz Menu</button>
      </div>
      <div className="space-y-4">
        <h2 className="font-semibold">Review Answers</h2>
        {questions.map((q, i) => {
          const isCorrect = answers[i] === q.correct
          return (
            <div key={q.id} className={`card border ${isCorrect ? 'border-emerald-700/40' : 'border-red-700/40'}`}>
              <div className="flex gap-2 items-start mb-3">
                <span className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${isCorrect ? 'bg-emerald-600 text-white' : 'bg-red-600 text-white'}`}>{isCorrect ? '✓' : '✗'}</span>
                <p className="text-sm font-medium">{q.question}</p>
              </div>
              <div className="ml-7 space-y-1 text-sm">
                {q.options.map((opt, j) => (
                  <div key={j} className={`px-3 py-1.5 rounded-md ${j === q.correct ? 'bg-emerald-600/20 text-emerald-300' : j === answers[i] && !isCorrect ? 'bg-red-600/20 text-red-300' : 'text-slate-500'}`}>
                    {j === q.correct ? '✓ ' : j === answers[i] && !isCorrect ? '✗ ' : '   '}{opt}
                  </div>
                ))}
                <p className="text-slate-400 text-xs mt-2 pt-2 border-t border-slate-700">{q.explanation}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function QuizSession() {
  const { certId, domainId } = useParams()
  const cert = getCert(certId)
  const data = useCertData(certId)
  const { saveQuiz } = useProgress()
  const isAll = domainId === 'all'
  const domain = isAll ? null : data?.domains.find((d) => d.id === Number(domainId))
  const c = cert ? CERT_COLORS[cert.color] : CERT_COLORS.blue

  const [sessionKey, setSessionKey] = useState(0)
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState([])
  const [selected, setSelected] = useState(null)
  const [confirmed, setConfirmed] = useState(false)
  const [done, setDone] = useState(false)

  const qs = useMemo(
    () => data ? data.getRandomQuestions(isAll ? null : Number(domainId), isAll ? 30 : 15) : [],
    [certId, domainId, sessionKey, data]
  )
  const q = qs[current]

  function handleConfirm() { if (selected !== null) setConfirmed(true) }

  function handleNext() {
    const newAnswers = [...answers, selected]
    if (current + 1 >= qs.length) {
      setAnswers(newAnswers)
      const correct = newAnswers.filter((a, i) => a === qs[i].correct).length
      saveQuiz({ certId, domain: isAll ? null : Number(domainId), total: qs.length, correct })
      setDone(true)
    } else {
      setAnswers(newAnswers)
      setCurrent(current + 1)
      setSelected(null)
      setConfirmed(false)
    }
  }

  function handleRestart() {
    setSessionKey((k) => k + 1); setCurrent(0); setAnswers([]); setSelected(null); setConfirmed(false); setDone(false)
  }

  if (cert && !data) return <Loading />

  if (!cert || qs.length === 0) {
    return (
      <div className="space-y-4">
        <Link to={`/${certId}/quiz`} className="text-slate-500 hover:text-white text-sm">← Quiz Menu</Link>
        <div className="card border border-slate-700 text-center py-12">
          <div className="text-slate-400 text-lg mb-2">No questions available yet</div>
          <p className="text-slate-500 text-sm">Content for this certification is coming soon.</p>
        </div>
      </div>
    )
  }

  if (done) return <Results certId={certId} questions={qs} answers={answers} onRestart={handleRestart} onBack={() => window.history.back()} />

  const pct = (current / qs.length) * 100

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Link to={`/${certId}/quiz`} className="text-slate-500 hover:text-white text-sm">← Quiz Menu</Link>
          <h1 className="text-xl font-bold mt-1">{domain ? `D${domain.id}: ${domain.name}` : `${cert.name} — Mixed Exam`}</h1>
        </div>
        <div className="text-sm text-slate-400">{current + 1} / {qs.length}</div>
      </div>

      <div className="h-1.5 bg-slate-800 rounded-full">
        <div className={`h-full ${c.bar} rounded-full transition-all duration-300`} style={{ width: `${pct}%` }} />
      </div>

      <div className="card">
        <div className="text-xs text-slate-500 mb-3">Question {current + 1} · Domain {q.domain}</div>
        <p className="font-medium text-base leading-relaxed mb-6">{q.question}</p>
        <div className="space-y-2">
          {q.options.map((opt, idx) => {
            let cls = 'w-full text-left px-4 py-3 rounded-lg border text-sm transition-colors '
            if (!confirmed) {
              cls += selected === idx ? `${c.border} ${c.dim} ${c.text}` : 'border-slate-700 bg-slate-900 hover:border-slate-500 text-slate-200 cursor-pointer'
            } else {
              if (idx === q.correct) cls += 'border-emerald-500 bg-emerald-600/20 text-emerald-200'
              else if (idx === selected) cls += 'border-red-500 bg-red-600/20 text-red-200'
              else cls += 'border-slate-800 bg-slate-900/50 text-slate-500'
            }
            return (
              <button key={idx} className={cls} onClick={() => { if (!confirmed) setSelected(idx) }} disabled={confirmed}>
                <span className="font-medium mr-2">{String.fromCharCode(65 + idx)}.</span>{opt}
              </button>
            )
          })}
        </div>
        {confirmed && (
          <div className={`mt-4 p-3 rounded-lg text-sm ${selected === q.correct ? 'bg-emerald-900/30 text-emerald-300' : 'bg-red-900/30 text-red-300'}`}>
            <span className="font-semibold">{selected === q.correct ? 'Correct! ' : 'Incorrect. '}</span>{q.explanation}
          </div>
        )}
      </div>

      <div className="flex justify-end gap-3">
        {!confirmed
          ? <button onClick={handleConfirm} disabled={selected === null} className="btn-primary">Check Answer</button>
          : <button onClick={handleNext} className="btn-primary">{current + 1 >= qs.length ? 'See Results' : 'Next →'}</button>
        }
      </div>
    </div>
  )
}
