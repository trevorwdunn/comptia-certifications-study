import { useEffect, useState } from 'react'
import { Outlet, NavLink, Link, useParams, useNavigate, useLocation } from 'react-router-dom'
import { useAuth, displayNameOf } from '../context/AuthContext'
import { CERTS, CERT_COLORS, getCert } from '../certs'
import Avatar from './Avatar'
import MyCertifications from './MyCertifications'
import ThemeToggle from './ThemeToggle'

const certNavItems = [
  { sub: '',           label: 'Overview',   icon: '⊞', end: true, tint: 'sky'     },
  { sub: '/quiz',      label: 'Quiz',       icon: '✦',            tint: 'violet'  },
  { sub: '/flashcards',label: 'Cards',      icon: '⟐',            tint: 'emerald' },
  { sub: '/study',     label: 'Study',      icon: '≡',            tint: 'amber'   },
  { sub: '/progress',  label: 'Progress',   icon: '◑',            tint: 'rose'    },
]

export default function Layout() {
  const { certId } = useParams()
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const cert = certId ? getCert(certId) : null
  const c = cert ? CERT_COLORS[cert.color] : null

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <div className="min-h-screen">
      {/* Mobile top bar — padded for the iOS status bar inset so it doesn't
          render underneath it when launched standalone from the home screen. */}
      <header
        className="lg:hidden fixed top-0 inset-x-0 bg-chrome border-b border-line z-30 flex items-center gap-3 px-3"
        style={{ height: 'calc(var(--header-h) + env(safe-area-inset-top))', paddingTop: 'env(safe-area-inset-top)' }}
      >
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className="w-10 h-10 -ml-1 flex items-center justify-center rounded-lg text-ink-3 hover:bg-sunken text-xl"
        >
          ☰
        </button>
        <Link to="/" className="flex items-center gap-2 min-w-0">
          {cert && c ? (
            <>
              <div className={`w-7 h-7 ${c.bg} rounded-lg flex items-center justify-center text-xs font-bold text-white shrink-0`}>{cert.badge}</div>
              <span className="font-semibold text-sm truncate">{cert.name}</span>
            </>
          ) : (
            <>
              <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-violet-600 rounded-lg flex items-center justify-center text-xs font-bold text-white shrink-0">CT</div>
              <span className="font-semibold text-sm truncate">CompTIA Study</span>
            </>
          )}
        </Link>
        <div className="ml-auto shrink-0">
          {user
            ? <Link to="/account" className="relative block">
                <Avatar email={user.email} name={displayNameOf(user)} size={30} />
                {user.pendingRequests > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-blue-500 ring-2 ring-chrome" />
                )}
              </Link>
            : <Link to="/login" className="text-xs btn-primary py-1.5 px-3">Sign in</Link>}
        </div>
      </header>

      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 scrim z-40"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 lg:w-56 bg-chrome border-r border-line flex flex-col
          transform transition-transform duration-200 lg:translate-x-0
          ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div
          className="px-4 py-4 border-b border-line flex items-center justify-between"
          style={{ paddingTop: 'calc(1rem + env(safe-area-inset-top))' }}
        >
          <Link to="/" className="flex items-center gap-2 group min-w-0">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-violet-600 rounded-lg flex items-center justify-center text-xs font-bold text-white shrink-0">CT</div>
            <div className="min-w-0">
              <div className="font-bold text-sm leading-tight group-hover:text-ink text-ink-2">CompTIA Study</div>
              <div className="text-xs text-ink-5 truncate">{window.location.hostname}</div>
            </div>
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="lg:hidden w-11 h-11 shrink-0 flex items-center justify-center rounded-lg text-ink-4 hover:bg-sunken text-lg"
          >
            ✕
          </button>
        </div>

        {cert && c && (
          <div className="px-2 py-3 border-b border-line">
            <div className={`flex items-center gap-2 px-2 py-2 lg:py-1.5 rounded-lg ${c.dim} mb-2`}>
              <div className={`w-7 h-7 lg:w-6 lg:h-6 ${c.bg} rounded flex items-center justify-center text-xs font-bold text-white shrink-0`}>{cert.badge}</div>
              <div className="min-w-0">
                <div className={`text-sm lg:text-xs font-semibold ${c.text} truncate`}>{cert.name}</div>
                <div className="text-xs text-ink-6 truncate">{cert.code}</div>
              </div>
            </div>
            <nav className="space-y-1 lg:space-y-0.5">
              {certNavItems.map(({ sub, label, icon, end }) => (
                <NavLink
                  key={sub}
                  to={`/${certId}${sub}`}
                  end={end}
                  className={({ isActive }) =>
                    `flex items-center gap-3 lg:gap-2.5 px-3 py-3 lg:py-2 rounded-lg text-base lg:text-xs font-medium transition-colors ${
                      isActive ? `${c.dim} ${c.text}` : 'text-ink-4 hover:text-ink hover:bg-sunken'
                    }`
                  }
                >
                  <span className="text-lg lg:text-sm">{icon}</span>{label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}

        <div className="px-2 py-3 flex-1 overflow-auto">
          <MyCertifications compact />

          <div className="text-xs font-semibold text-ink-6 uppercase tracking-wider px-2 mb-2 mt-4">Certifications</div>
          <nav className="space-y-1 lg:space-y-0.5">
            {CERTS.map((cc) => {
              const cl = CERT_COLORS[cc.color]
              const isActive = certId === cc.id
              return (
                <Link
                  key={cc.id}
                  to={`/${cc.id}`}
                  className={`flex items-center gap-3 lg:gap-2.5 px-2 py-3 lg:py-2 rounded-lg text-base lg:text-xs transition-colors ${
                    isActive ? `${cl.dim} ${cl.text} font-semibold` : 'text-ink-4 hover:text-ink hover:bg-sunken'
                  }`}
                >
                  <div className={`w-7 h-7 lg:w-5 lg:h-5 ${isActive ? `${cl.bg} text-white` : 'bg-raised text-ink-4'} rounded flex items-center justify-center text-xs lg:text-[10px] font-bold shrink-0`}>{cc.badge}</div>
                  {cc.name}
                </Link>
              )
            })}
          </nav>
        </div>

        <div className="px-3 py-3 border-t border-line space-y-2">
          <ThemeToggle compact />
          {user ? (
            <>
              <Link to="/account" className="flex items-center gap-2.5 px-2 py-2 lg:py-1 mb-1 min-w-0 rounded-lg hover:bg-sunken">
                <Avatar email={user.email} name={displayNameOf(user)} size={32} />
                <div className="text-sm lg:text-xs text-ink-4 truncate">{displayNameOf(user)}</div>
              </Link>
              <Link
                to="/friends"
                className="flex items-center gap-2.5 px-2 py-2 lg:py-1.5 mb-1 rounded-lg text-sm lg:text-xs text-ink-4 hover:text-ink hover:bg-sunken"
              >
                <span className="w-8 lg:w-5 text-center text-base lg:text-sm">◎</span>
                Friends
                {user.pendingRequests > 0 && (
                  <span className="ml-auto bg-blue-600 text-white text-[10px] font-bold rounded-full px-1.5 py-0.5">
                    {user.pendingRequests}
                  </span>
                )}
              </Link>
              <button onClick={() => { logout(); navigate('/') }} className="btn-ghost text-sm lg:text-xs w-full text-left text-ink-4 py-2.5 lg:py-1.5">
                Sign out
              </button>
            </>
          ) : (
            <Link to="/login" className="btn-primary text-sm lg:text-xs block text-center py-2.5 lg:py-2">Sign in to save progress</Link>
          )}
        </div>
      </aside>

      <main className="lg:ml-56">
        <div className={`max-w-4xl mx-auto px-4 sm:px-6 pt-header ${cert ? 'pb-tabbar' : 'pb-8'}`}>
          <Outlet />
        </div>
      </main>

      {/* Mobile bottom tabs — only while inside a cert */}
      {cert && c && (
        <nav
          className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-chrome border-t border-line flex"
          style={{
            height: 'calc(var(--tabbar-h) + env(safe-area-inset-bottom))',
            paddingBottom: 'env(safe-area-inset-bottom)',
          }}
        >
          {certNavItems.map(({ sub, label, icon, end, tint }) => {
            const tc = CERT_COLORS[tint]
            return (
              <NavLink
                key={sub}
                to={`/${certId}${sub}`}
                end={end}
                className={({ isActive }) =>
                  `flex-1 flex flex-col items-center justify-center gap-0.5 py-1.5 text-[11px] font-semibold transition-opacity ${tc.text} ${
                    isActive ? 'opacity-100' : 'opacity-45'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className={`w-9 h-9 flex items-center justify-center rounded-xl text-xl leading-none transition-colors ${isActive ? tc.dim : ''}`}>
                      {icon}
                    </span>
                    {label}
                  </>
                )}
              </NavLink>
            )
          })}
        </nav>
      )}
    </div>
  )
}
