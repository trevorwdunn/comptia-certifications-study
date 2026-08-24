import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { applyTheme, readPreference, resolveTheme, savePreference } from '../lib/theme'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [preference, setPreference] = useState(readPreference)
  const [resolved, setResolved] = useState(() => resolveTheme(readPreference()))

  useEffect(() => {
    setResolved(applyTheme(preference))
  }, [preference])

  // While the preference is 'system', follow the OS flipping between light and
  // dark without a reload.
  useEffect(() => {
    if (preference !== 'system') return
    const mq = window.matchMedia?.('(prefers-color-scheme: dark)')
    if (!mq) return
    const onChange = () => setResolved(applyTheme('system'))
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [preference])

  const setTheme = useCallback((next) => {
    savePreference(next)
    setPreference(next)
  }, [])

  const value = useMemo(
    () => ({ preference, resolved, setTheme, toggle: () => setTheme(resolved === 'dark' ? 'light' : 'dark') }),
    [preference, resolved, setTheme]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used inside a ThemeProvider')
  return ctx
}
