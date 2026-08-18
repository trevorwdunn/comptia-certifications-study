import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try { await login(email, password); navigate('/') }
    catch (err) { setError(err.message || 'Login failed') }
    finally { setLoading(false) }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl text-xl font-bold mb-4">CT</div>
          <h1 className="text-2xl font-bold">Sign in</h1>
          <p className="text-slate-400 text-sm mt-1">CompTIA Study · {window.location.hostname}</p>
        </div>
        <div className="card">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="login-email" className="block text-sm font-medium text-slate-300 mb-1.5">Email</label>
              <input id="login-email" name="email" type="email" className="input" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required autoFocus autoComplete="username" />
            </div>
            <div>
              <label htmlFor="login-password" className="block text-sm font-medium text-slate-300 mb-1.5">Password</label>
              <input id="login-password" name="password" type="password" className="input" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="current-password" />
            </div>
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <button type="submit" className="btn-primary w-full" disabled={loading}>{loading ? 'Signing in…' : 'Sign in'}</button>
          </form>
        </div>
        <p className="text-center text-sm text-slate-500 mt-4">
          No account? <Link to="/register" className="text-blue-400 hover:underline">Create one</Link>
        </p>
        <p className="text-center text-sm text-slate-500 mt-2">
          <Link to="/" className="text-slate-400 hover:text-white">Continue without signing in →</Link>
        </p>
      </div>
    </div>
  )
}
