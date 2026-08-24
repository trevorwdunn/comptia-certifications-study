import { Link, useParams } from 'react-router-dom'
import { getCert, CERT_COLORS } from '../../certs'
import { useProgress } from '../../context/ProgressContext'
import { getVideoStats, isVideoWatched } from '../../lib/storage'

function watchUrl(id) {
  return `https://www.youtube.com/watch?v=${id}`
}

// Videos open on YouTube in a new tab rather than embedding: the site can't read
// YouTube watch state either way, and an external link avoids third-party cookies
// and the "video unavailable in embedded player" failure mode entirely.
export default function VideoTrack() {
  const { certId } = useParams()
  const cert = getCert(certId)
  const { progress, setVideoWatched, resetVideos } = useProgress()

  if (!cert) return <div className="text-ink-4">Certification not found.</div>

  const videos = cert.videos ?? []
  if (videos.length === 0) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Video track</h1>
        <p className="text-ink-4 text-sm">
          No video track has been curated for {cert.name} yet.
        </p>
        <Link to={`/${certId}`} className="btn-secondary text-sm inline-block">Back to {cert.name}</Link>
      </div>
    )
  }

  const c = CERT_COLORS[cert.color]
  const { watched, total, nextIndex, complete } = getVideoStats(progress, certId, videos)
  const pct = total ? Math.round((watched / total) * 100) : 0

  return (
    <div className="space-y-6">
      <div>
        <Link to={`/${certId}`} className="text-xs text-ink-5 hover:text-ink-3">← {cert.name}</Link>
        <h1 className="text-2xl font-bold mt-1">Video track</h1>
        <p className="text-ink-4 text-sm mt-1">
          Watch in order. Videos open on YouTube in a new tab — come back and hit{' '}
          <span className="text-ink-3 font-medium">Mark watched &amp; next</span> to advance.
        </p>
      </div>

      {/* Progress */}
      <div className="card">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">{watched} of {total} watched</span>
          <div className="flex items-center gap-3">
            <span className={`text-sm font-bold ${complete ? 'text-emerald-700 dark:text-emerald-400' : c.text}`}>{pct}%</span>
            {watched > 0 && (
              <button
                onClick={() => resetVideos(certId)}
                className="text-xs text-ink-5 hover:text-red-700 dark:hover:text-red-400"
              >
                Reset
              </button>
            )}
          </div>
        </div>
        <div className="h-2 bg-raised rounded-full overflow-hidden">
          <div className={`h-full ${c.bar} rounded-full transition-all duration-500`} style={{ width: `${pct}%` }} />
        </div>
        {complete && (
          <p className="text-emerald-700 dark:text-emerald-400 text-xs mt-3">
            ✓ Track complete — every video marked watched.
          </p>
        )}
      </div>

      {/* Videos */}
      <div className="space-y-2">
        {videos.map((v, i) => {
          const done = isVideoWatched(progress, certId, v.id)
          const isCurrent = i === nextIndex

          return (
            <div
              key={v.id}
              className={`card border transition-colors ${
                isCurrent ? `${c.border} ${c.dim}` : 'border-line-2'
              } ${done && !isCurrent ? 'opacity-60' : ''}`}
            >
              <div className="flex items-start gap-3">
                {/* Manual toggle — always available, independent of the Next flow */}
                <button
                  onClick={() => setVideoWatched(certId, v.id, !done)}
                  aria-label={done ? `Mark ${v.title} as not watched` : `Mark ${v.title} as watched`}
                  aria-pressed={done}
                  className={`w-6 h-6 mt-0.5 shrink-0 rounded-md border flex items-center justify-center text-xs font-bold transition-colors ${
                    done
                      ? 'bg-emerald-600 border-emerald-600 text-white'
                      : 'border-line-3 text-transparent hover:border-line-5'
                  }`}
                >
                  ✓
                </button>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs text-ink-5">{i + 1}.</span>
                    <a
                      href={watchUrl(v.id)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`font-medium text-sm hover:underline ${done ? 'text-ink-4' : 'text-ink'}`}
                    >
                      {v.title}
                    </a>
                    <span className="text-xs text-ink-6">↗</span>
                    {isCurrent && (
                      <span className={`text-[10px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded ${c.badge}`}>
                        Up next
                      </span>
                    )}
                  </div>
                  {v.by && <div className="text-xs text-ink-5 mt-0.5">{v.by}</div>}
                  {v.note && <div className="text-xs text-ink-5 mt-1">{v.note}</div>}

                  {isCurrent && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      <a
                        href={watchUrl(v.id)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-xs py-1.5 px-3 rounded-md ${c.bg} text-white font-medium`}
                      >
                        ▶ Watch on YouTube
                      </a>
                      <button
                        onClick={() => setVideoWatched(certId, v.id, true)}
                        className="btn-secondary text-xs py-1.5 px-3"
                      >
                        Mark watched &amp; next →
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <p className="text-xs text-ink-6">
        Progress is tracked here, not on YouTube — YouTube has not exposed watch history to
        other sites for years. Signed in, this syncs across your devices.
      </p>
    </div>
  )
}
