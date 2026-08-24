// Theme preference: 'light', 'dark', or 'system'. Only the resolved value
// ('light' | 'dark') ever reaches the DOM, as a `dark` class on <html>.
//
// The same storage key and resolution rules are duplicated in the inline script
// in index.html, which runs before React mounts so the first paint is already
// in the right palette. Change one, change the other.

export const THEME_KEY = 'cstudy_theme'
export const THEMES = ['light', 'dark', 'system']

// Matches the --chrome token for each palette, so the mobile browser chrome and
// the iOS standalone status bar blend into the app's own header.
const THEME_COLOR = { light: '#ffffff', dark: '#0f172a' }

export function readPreference() {
  try {
    const stored = localStorage.getItem(THEME_KEY)
    if (THEMES.includes(stored)) return stored
  } catch {
    // Private mode or blocked storage — fall through to the system default.
  }
  return 'system'
}

export function systemTheme() {
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function resolveTheme(preference) {
  return preference === 'system' ? systemTheme() : preference
}

export function applyTheme(preference) {
  const resolved = resolveTheme(preference)
  document.documentElement.classList.toggle('dark', resolved === 'dark')

  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.setAttribute('content', THEME_COLOR[resolved])

  // Only the translucent style lets a dark page bleed under the iOS status bar;
  // on a light page that same setting renders white-on-white status text.
  const bar = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]')
  if (bar) bar.setAttribute('content', resolved === 'dark' ? 'black-translucent' : 'default')

  return resolved
}

export function savePreference(preference) {
  try {
    if (preference === 'system') localStorage.removeItem(THEME_KEY)
    else localStorage.setItem(THEME_KEY, preference)
  } catch {
    // Preference just won't survive a reload; the in-memory theme still applies.
  }
}
