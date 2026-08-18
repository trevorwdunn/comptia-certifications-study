import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useAuth, displayNameOf } from '../context/AuthContext'
import { domains as aPlusDomains } from '../data/a-plus/domains'
import Core1Import from './progress/Core1Import'
import Avatar from './Avatar'
import MyCertifications from './MyCertifications'

function UsernameEditor() {
  const { user, setUsername } = useAuth()
  const [value, setValue] = useState(user?.username ?? '')
  const [status, setStatus] = useState(null) // 'saving' | 'saved' | error string
  const dirty = value.trim().toLowerCase() !== (user?.username ?? '')

  async function save(e) {
    e.preventDefault()
    setStatus('saving')
    try {
      await setUsername(value.trim().toLowerCase())
      setStatus('saved')
    } catch (err) {
      setStatus(err.message || 'Could not save username')
    }
  }

  return (
    <form onSubmit={save} className="card space-y-2">
      <label htmlFor="account-username" className="block text-sm font-medium text-slate-300">Username</label>
      <div className="flex gap-2">
        <input
          id="account-username"
          className="input flex-1"
          value={value}
          maxLength={20}
          onChange={(e) => { setValue(e.target.value); setStatus(null) }}
          placeholder="username"
        />
        <button type="submit" className="btn-primary text-sm shrink-0" disabled={!dirty || status === 'saving'}>
          {status === 'saving' ? 'Saving…' : 'Save'}
        </button>
      </div>
      {status === 'saved' && <p className="text-emerald-400 text-xs">Username updated.</p>}
      {status && status !== 'saving' && status !== 'saved' && <p className="text-red-400 text-xs">{status}</p>}
      <p className="text-xs text-slate-500">
        This is the only name other people see — your email is never shown to them.
      </p>
    </form>
  )
}

export default function Account() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  if (!user) return <Navigate to="/login" replace />

  return (
    <div className="space-y-6 max-w-lg">
      <div>
        <h1 className="text-2xl font-bold">Account</h1>
        <p className="text-slate-400 text-sm mt-1">Manage your profile and import prior progress.</p>
      </div>

      <div className="card flex items-center gap-3">
        <Avatar email={user.email} name={displayNameOf(user)} size={48} />
        <div className="min-w-0">
          <div className="font-semibold truncate">{displayNameOf(user)}</div>
          <div className="text-xs text-slate-500 truncate">{user.email}</div>
        </div>
      </div>

      <UsernameEditor />

      <div className="card flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="font-semibold text-sm">Friends</div>
          <div className="text-xs text-slate-500">Compare progress with people you add.</div>
        </div>
        <Link to="/friends" className="btn-secondary text-sm shrink-0">
          Manage{user.pendingRequests ? ` (${user.pendingRequests})` : ''}
        </Link>
      </div>

      <div>
        <h2 className="font-bold mb-3">My Certifications</h2>
        <MyCertifications />
      </div>

      <Core1Import certId="a-plus" domains={aPlusDomains} />

      <div className="card">
        <button
          onClick={() => { logout(); navigate('/') }}
          className="btn-secondary text-sm w-full"
        >
          Sign out
        </button>
      </div>

      <p className="text-center text-sm">
        <Link to="/" className="text-slate-400 hover:text-white">&larr; Back to dashboard</Link>
      </p>
    </div>
  )
}
