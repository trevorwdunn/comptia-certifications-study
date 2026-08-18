import { createContext, useContext, useState, useCallback, useEffect } from 'react'
import { api } from '../lib/api'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem('cstudy_user') || 'null') } catch { return null }
  })

  const persist = useCallback((u) => {
    localStorage.setItem('cstudy_user', JSON.stringify(u))
    setUser(u)
  }, [])

  // The cached user goes stale after a rename, and accounts created before
  // usernames existed have none at all, so re-fetch it on load.
  const refresh = useCallback(async () => {
    if (!localStorage.getItem('cstudy_token')) return null
    try {
      const u = await api.me.get()
      persist(u)
      return u
    } catch {
      return null
    }
  }, [persist])

  useEffect(() => { refresh() }, [refresh])

  const login = useCallback(async (email, password) => {
    const { token, user: u } = await api.auth.login(email, password)
    localStorage.setItem('cstudy_token', token)
    persist(u)
    refresh()
  }, [persist, refresh])

  const register = useCallback(async (email, password, username) => {
    const { token, user: u } = await api.auth.register(email, password, username)
    localStorage.setItem('cstudy_token', token)
    persist(u)
    refresh()
  }, [persist, refresh])

  const setUsername = useCallback(async (username) => {
    const u = await api.me.setUsername(username)
    persist({ ...user, ...u })
  }, [persist, user])

  const logout = useCallback(() => {
    localStorage.removeItem('cstudy_token')
    localStorage.removeItem('cstudy_user')
    setUser(null)
  }, [])

  return (
    <AuthContext.Provider value={{ user, login, register, logout, refresh, setUsername }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() { return useContext(AuthContext) }

// Every display of a person's name goes through this, so accounts that predate
// usernames still render something sensible.
export function displayNameOf(user) {
  return user?.username || user?.email?.split('@')[0] || 'you'
}
