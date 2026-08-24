import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function Register() {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    if (password !== confirm) { setError('Passwords do not match'); return }
    if (password.length < 8) { setError('Password must be at least 8 characters'); return }
    if (!/^[a-z0-9_]{3,20}$/.test(username.trim().toLowerCase())) {
      setError('Username must be 3-20 characters: lowercase letters, numbers, or underscores')
      return
    }
    setLoading(true)
    try { await register(email, password, username.trim().toLowerCase()); navigate('/') }
    catch (err) { setError(err.message || 'Registration failed') }
    finally { setLoading(false) }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl text-xl font-bold text-white mb-4">CT</div>
          <h1 className="text-2xl font-bold">Create account</h1>
          <p className="text-ink-4 text-sm mt-1">Save and share progress across all certifications</p>
        </div>
        <div className="card">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="register-email" className="block text-sm font-medium text-ink-3 mb-1.5">Email</label>
              <input id="register-email" name="email" type="email" className="input" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required autoFocus autoComplete="username" />
            </div>
            <div>
              <label htmlFor="register-username" className="block text-sm font-medium text-ink-3 mb-1.5">Username</label>
              <input id="register-username" name="username" type="text" className="input" placeholder="how you'll show up on the leaderboard" value={username} onChange={(e) => setUsername(e.target.value)} required autoComplete="nickname" maxLength={20} />
              <p className="text-xs text-ink-5 mt-1">Lowercase letters, numbers and underscores. Others find you by this — never your email.</p>
            </div>
            <div>
              <label htmlFor="register-password" className="block text-sm font-medium text-ink-3 mb-1.5">Password</label>
              <input id="register-password" name="password" type="password" className="input" placeholder="Min. 8 characters" value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="new-password" />
            </div>
            <div>
              <label htmlFor="register-confirm" className="block text-sm font-medium text-ink-3 mb-1.5">Confirm Password</label>
              <input id="register-confirm" name="confirm-password" type="password" className="input" placeholder="••••••••" value={confirm} onChange={(e) => setConfirm(e.target.value)} required autoComplete="new-password" />
            </div>
            {error && <p className="text-red-700 dark:text-red-400 text-sm">{error}</p>}
            <button type="submit" className="btn-primary w-full" disabled={loading}>{loading ? 'Creating account…' : 'Create account'}</button>
          </form>
        </div>
        <p className="text-center text-sm text-ink-5 mt-4">
          Already have an account? <Link to="/login" className="text-blue-700 dark:text-blue-400 hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  )
}
