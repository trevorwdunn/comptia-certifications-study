import { createContext, useContext, useState, useCallback } from 'react'
import { api } from '../lib/api'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem('cstudy_user') || 'null') } catch { return null }
  })

  const login = useCallback(async (email, password) => {
    const { token, user: u } = await api.auth.login(email, password)
    localStorage.setItem('cstudy_token', token)
    localStorage.setItem('cstudy_user', JSON.stringify(u))
    setUser(u)
  }, [])

  const register = useCallback(async (email, password) => {
    const { token, user: u } = await api.auth.register(email, password)
    localStorage.setItem('cstudy_token', token)
    localStorage.setItem('cstudy_user', JSON.stringify(u))
    setUser(u)
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem('cstudy_token')
    localStorage.removeItem('cstudy_user')
    setUser(null)
  }, [])

  return <AuthContext.Provider value={{ user, login, register, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() { return useContext(AuthContext) }
