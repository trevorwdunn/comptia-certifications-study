import { Link } from 'react-router-dom'
import { getCert, CERT_COLORS } from '../certs'
import { useProgress } from '../context/ProgressContext'
import { getCertLastActivity, getEarnedCerts } from '../lib/storage'

function timeAgo(iso) {
  if (!iso) return 'Just started'
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86400000)
  if (days <= 0) return 'Active today'
  if (days === 1) return 'Active yesterday'
  if (days < 30) return `Active ${days}d ago`
  return `Active ${Math.floor(days / 30)}mo ago`
}

// Shown on the Account page (full cards) and, compact, in the sidebar — kept as
// one component so "what counts as ongoing/earned" can't drift between the two.
export default function MyCertifications({ compact = false }) {
  const { progress, activeCerts } = useProgress()
  const earned = getEarnedCerts(progress).filter((e) => getCert(e.certId))

  const earnedIds = new Set(earned.map((e) => e.certId))
  const ongoing = activeCerts
    .filter((id) => !earnedIds.has(id) && getCert(id))
    .map((id) => ({ certId: id, lastActivity: getCertLastActivity(progress, id) }))
    .sort((a, b) => (b.lastActivity || '').localeCompare(a.lastActivity || ''))

  if (!ongoing.length && !earned.length) {
    return compact ? null : (
      <p className="text-sm text-slate-500">
        Nothing tracked yet — hit "+ Study this cert" on a certification, or mark one earned once you pass it.
      </p>
    )
  }

  function Row({ certId, sub }) {
    const cert = getCert(certId)
    const c = CERT_COLORS[cert.color]
    return (
      <Link
        key={certId}
        to={`/${certId}`}
        className={
          compact
            ? 'flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs text-slate-300 hover:bg-slate-800 transition-colors'
            : 'card flex items-center gap-3 hover:border-slate-500 transition-colors'
        }
      >
        <div className={`${compact ? 'w-5 h-5 text-[9px]' : 'w-9 h-9 text-xs'} ${c.bg} rounded-lg flex items-center justify-center font-bold text-white shrink-0`}>
          {cert.badge}
        </div>
        <div className="min-w-0 flex-1">
          <div className={compact ? 'truncate' : 'font-medium text-sm truncate'}>{cert.name}</div>
          {!compact && <div className="text-xs text-slate-500">{sub}</div>}
        </div>
        {compact && <div className="text-[10px] text-slate-500 shrink-0 truncate max-w-[5.5rem]">{sub}</div>}
      </Link>
    )
  }

  const headingClass = compact
    ? 'text-[10px] font-semibold text-slate-600 uppercase tracking-wider px-2 mb-1'
    : 'text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2'
  const listClass = compact ? 'space-y-0.5' : 'space-y-2'

  return (
    <div className={compact ? 'space-y-3' : 'space-y-6'}>
      {ongoing.length > 0 && (
        <div>
          <h3 className={headingClass}>Studying</h3>
          <div className={listClass}>
            {ongoing.map(({ certId, lastActivity }) => (
              <Row key={certId} certId={certId} sub={timeAgo(lastActivity)} />
            ))}
          </div>
        </div>
      )}
      {earned.length > 0 && (
        <div>
          <h3 className={headingClass}>Earned</h3>
          <div className={listClass}>
            {earned.map(({ certId, earnedAt }) => (
              <Row key={certId} certId={certId} sub={`🏅 ${new Date(earnedAt).toLocaleDateString()}`} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
