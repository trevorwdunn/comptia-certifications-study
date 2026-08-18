import { useEffect, useState } from 'react'

// Gravatar avatars cost us zero storage — the image is just a URL derived from a
// hash of the email. Gravatar accepts SHA-256, which the browser gives us natively,
// so there's no MD5 dependency. `d=identicon` means users without a Gravatar
// account still get a unique generated pattern instead of a blank.
const urlCache = new Map()

async function gravatarUrl(email, px) {
  const key = `${email}|${px}`
  const cached = urlCache.get(key)
  if (cached) return cached

  const normalized = email.trim().toLowerCase()
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(normalized))
  const hash = [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('')
  const url = `https://gravatar.com/avatar/${hash}?s=${px * 2}&d=identicon`
  urlCache.set(key, url)
  return url
}

function hashedUrl(hash, px) {
  return `https://gravatar.com/avatar/${hash}?s=${px * 2}&d=identicon`
}

const PALETTE = ['bg-blue-600', 'bg-emerald-600', 'bg-violet-600', 'bg-amber-600', 'bg-rose-600', 'bg-teal-600']

function initialsFor(name) {
  const parts = name.replace(/[^a-zA-Z0-9 ]/g, ' ').trim().split(/\s+/)
  return ((parts[0]?.[0] ?? '?') + (parts[1]?.[0] ?? '')).toUpperCase()
}

// `hash` is the Gravatar hash computed server-side. Everyone other than the
// signed-in user is rendered from it, so other people's email addresses never
// have to reach the browser at all.
export default function Avatar({ email, hash, name, size = 36, className = '' }) {
  const [url, setUrl] = useState(() =>
    hash ? hashedUrl(hash, size) : urlCache.get(`${email}|${size}`) ?? null
  )
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    setFailed(false)
    if (hash) { setUrl(hashedUrl(hash, size)); return }
    if (!email || !crypto?.subtle) return
    let alive = true
    gravatarUrl(email, size).then((u) => alive && setUrl(u)).catch(() => {})
    return () => { alive = false }
  }, [email, hash, size])

  const label = name || email || '?'
  const tint = PALETTE[[...label].reduce((n, ch) => n + ch.charCodeAt(0), 0) % PALETTE.length]
  const box = { width: size, height: size }

  if (!url || failed) {
    return (
      <div
        style={box}
        className={`${tint} rounded-full shrink-0 flex items-center justify-center font-semibold text-white select-none ${className}`}
      >
        <span style={{ fontSize: size * 0.4 }}>{initialsFor(label)}</span>
      </div>
    )
  }

  return (
    <img
      src={url}
      alt={label}
      width={size}
      height={size}
      loading="lazy"
      onError={() => setFailed(true)}
      style={box}
      className={`rounded-full shrink-0 bg-slate-700 object-cover ${className}`}
    />
  )
}
