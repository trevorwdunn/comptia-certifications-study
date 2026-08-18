import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { domains as aPlusDomains } from '../data/a-plus/domains'
import Core1Import from './progress/Core1Import'
import Avatar from './Avatar'
import MyCertifications from './MyCertifications'

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
        <Avatar email={user.email} name={user.email.split('@')[0]} size={48} />
        <div className="min-w-0">
          <div className="font-semibold truncate">{user.email}</div>
          <div className="text-xs text-slate-500">Signed in</div>
        </div>
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
