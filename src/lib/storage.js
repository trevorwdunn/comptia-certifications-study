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
