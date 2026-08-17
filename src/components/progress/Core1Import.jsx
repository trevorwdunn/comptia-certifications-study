import { useState } from 'react'
import { useProgress } from '../../context/ProgressContext'

export default function Core1Import({ certId, domains }) {
  const { saveQuizBatch } = useProgress()
  const [open, setOpen] = useState(false)
  const [code, setCode] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState(null)
  const [result, setResult] = useState(null)

  async function run() {
    setError(null)
    setResult(null)
    setBusy(true)
    try {
      // Loaded on demand so the 120-question bank stays out of the main bundle.
      const { decodeCore1, summarizeCore1 } = await import('../../lib/core1Import')
      const byDomain = summarizeCore1(decodeCore1(code))
      const payloads = Object.entries(byDomain).map(([domain, r]) => ({
        certId, domain: Number(domain), total: r.total, correct: r.correct,
      }))
      if (!payloads.length) {
        setError('That code is valid but has no answered questions in it.')
        return
      }
      saveQuizBatch(payloads)
      setCode('')
      setResult(byDomain)
    } catch (e) {
      setError(e.message)
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="card">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-3 text-left"
      >
        <span>
          <span className="font-medium text-sm">Import from Core 1 Bench</span>
          <span className="block text-xs text-slate-500 mt-0.5">
            Paste the progress code from the standalone Core 1 practice exam
          </span>
        </span>
        <span className="text-slate-500 text-xs shrink-0">{open ? '▲' : '▼'}</span>
      </button>

      {open && (
        <div className="mt-4 space-y-3">
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            rows={3}
            spellCheck={false}
            placeholder="A1.0.0.…"
            className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-xs font-mono break-all focus:outline-none focus:border-slate-500"
          />
          <div className="flex items-center gap-3">
            <button onClick={run} disabled={busy || !code.trim()} className="btn-ghost text-sm disabled:opacity-40">
              {busy ? 'Importing…' : 'Import'}
            </button>
            <p className="text-xs text-slate-500">
              Adds one attempt per domain. It won't overwrite what you already have.
            </p>
          </div>

          {error && <p className="text-sm text-red-400">{error}</p>}

          {result && (
            <div className="text-sm text-emerald-400">
              <p className="mb-1">Imported:</p>
              <ul className="text-xs text-slate-300 space-y-0.5">
                {Object.entries(result).map(([d, r]) => (
                  <li key={d}>
                    {domains.find((x) => x.id === Number(d))?.name || `Domain ${d}`} — {r.correct}/{r.total} correct
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
