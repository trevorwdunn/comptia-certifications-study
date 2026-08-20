const KEY = 'cstudy_progress'

export function loadLocalProgress() {
  try { return JSON.parse(localStorage.getItem(KEY) || '{}') } catch { return {} }
}

export function saveLocalProgress(p) {
  localStorage.setItem(KEY, JSON.stringify(p))
}

// Progress keys are namespaced: `${certId}:quiz_d${domainId}`, `${certId}:fc_${cardId}`, etc.

export function recordQuizAttempt(progress, { certId, domain, total, correct }) {
  const key = `${certId}:quiz_d${domain ?? 'all'}`
  const prev = progress[key] || { attempts: [], bestScore: 0 }
  const score = Math.round((correct / total) * 100)
  return {
    ...progress,
    [key]: {
      attempts: [...prev.attempts, { total, correct, score, date: new Date().toISOString() }].slice(-10),
      bestScore: Math.max(prev.bestScore, score),
      lastScore: score,
    },
  }
}

export function recordFlashcard(progress, { certId, flashcardId, status }) {
  return { ...progress, [`${certId}:fc_${flashcardId}`]: { status, lastReviewed: new Date().toISOString() } }
}

export function recordTopicVisit(progress, { certId, topicId }) {
  const key = `${certId}:topic_${topicId}`
  return { ...progress, [key]: { ...(progress[key] || {}), visited: true, lastVisited: new Date().toISOString() } }
}

export function markTopicComplete(progress, { certId, topicId, completed }) {
  const key = `${certId}:topic_${topicId}`
  return { ...progress, [key]: { ...(progress[key] || {}), completed, lastVisited: new Date().toISOString() } }
}

// Videos are tracked by the watcher marking them done — we deliberately don't try
// to read YouTube watch state, which the API hasn't exposed for years.
export function markVideoWatched(progress, { certId, videoId, watched }) {
  const key = `${certId}:vid_${videoId}`
  if (!watched) {
    const { [key]: _omit, ...rest } = progress
    return rest
  }
  return { ...progress, [key]: { watched: true, watchedAt: new Date().toISOString() } }
}

export function isVideoWatched(progress, certId, videoId) {
  return Boolean(progress[`${certId}:vid_${videoId}`]?.watched)
}

// `nextIndex` is simply the first unwatched video, so marking one done advances the
// pointer on its own — no separate cursor to keep in sync.
export function getVideoStats(progress, certId, videos = []) {
  const watched = videos.filter((v) => isVideoWatched(progress, certId, v.id))
  const nextIndex = videos.findIndex((v) => !isVideoWatched(progress, certId, v.id))
  return {
    total: videos.length,
    watched: watched.length,
    nextIndex,
    complete: videos.length > 0 && nextIndex === -1,
  }
}

export function resetVideoTrack(progress, certId) {
  const prefix = `${certId}:vid_`
  return Object.fromEntries(Object.entries(progress).filter(([k]) => !k.startsWith(prefix)))
}

// Derived purely from progress keys so callers don't need the cert's content
// loaded — this is what lets the home screen skip downloading every cert.
export function getCertAttempts(progress, certId) {
  const prefix = `${certId}:quiz_d`
  return Object.entries(progress)
    .filter(([k]) => k.startsWith(prefix))
    .flatMap(([, v]) => v?.attempts || [])
}

export function getCertStats(progress, certId) {
  const attempts = getCertAttempts(progress, certId)
  const masteredCards = Object.entries(progress).filter(
    ([k, v]) => k.startsWith(`${certId}:fc_`) && v?.status === 'mastered'
  ).length
  return {
    attempts: attempts.length,
    avgScore: attempts.length ? Math.round(attempts.reduce((s, a) => s + a.score, 0) / attempts.length) : null,
    masteredCards,
  }
}

export function getActiveCerts(progress) {
  return progress['_activeCerts'] || []
}

export function setActiveCerts(progress, certIds) {
  return { ...progress, _activeCerts: certIds }
}

// Most recent timestamp of any recorded activity for a cert — used to order
// "currently studying" lists by what the user actually touched last.
export function getCertLastActivity(progress, certId) {
  const prefix = `${certId}:`
  let latest = null
  for (const [k, v] of Object.entries(progress)) {
    if (!k.startsWith(prefix) || !v) continue
    const dates = [
      ...(v.attempts || []).map((a) => a.date),
      v.lastReviewed,
      v.lastVisited,
      v.watchedAt,
    ].filter(Boolean)
    for (const d of dates) if (!latest || d > latest) latest = d
  }
  return latest
}

export function setCertEarned(progress, certId, earned, earnedAt = new Date().toISOString()) {
  const key = `${certId}:earned`
  if (!earned) {
    const { [key]: _omit, ...rest } = progress
    return rest
  }
  return { ...progress, [key]: { earnedAt } }
}

export function getCertEarned(progress, certId) {
  return progress[`${certId}:earned`] || null
}

// Sorted most-recently-earned first.
export function getEarnedCerts(progress) {
  return Object.entries(progress)
    .filter(([k]) => k.endsWith(':earned'))
    .map(([k, v]) => ({ certId: k.slice(0, -':earned'.length), earnedAt: v.earnedAt }))
    .sort((a, b) => (a.earnedAt < b.earnedAt ? 1 : -1))
}
