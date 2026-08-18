import { createContext, useContext, useState, useCallback, useEffect } from 'react'
import { useAuth } from './AuthContext'
import { api } from '../lib/api'
import {
  loadLocalProgress, saveLocalProgress,
  recordQuizAttempt, recordFlashcard,
  recordTopicVisit, markTopicComplete,
  getActiveCerts, setActiveCerts,
  setCertEarned,
} from '../lib/storage'

const ProgressContext = createContext(null)

export function ProgressProvider({ children }) {
  const { user } = useAuth()
  const [progress, setProgress] = useState(loadLocalProgress)

  useEffect(() => {
    if (!user) return
    api.progress.get()
      .then((remote) => {
        const merged = { ...loadLocalProgress(), ...remote }
        setProgress(merged)
        saveLocalProgress(merged)
      })
      .catch(() => {})
  }, [user])

  const update = useCallback((updater) => {
    setProgress((prev) => {
      const next = updater(prev)
      saveLocalProgress(next)
      if (user) api.progress.update(next).catch(() => {})
      return next
    })
  }, [user])

  const saveQuiz      = useCallback((payload) => update((p) => recordQuizAttempt(p, payload)), [update])
  // One state write and one sync for a whole set of attempts, so an import of
  // several domains doesn't fire a request per domain.
  const saveQuizBatch = useCallback((payloads) => update((p) => payloads.reduce(recordQuizAttempt, p)), [update])
  const saveFlashcard = useCallback((certId, flashcardId, status) => update((p) => recordFlashcard(p, { certId, flashcardId, status })), [update])
  const visitTopic    = useCallback((certId, topicId) => update((p) => recordTopicVisit(p, { certId, topicId })), [update])
  const completeTopic = useCallback((certId, topicId, completed = true) => update((p) => markTopicComplete(p, { certId, topicId, completed })), [update])

  const activeCerts = getActiveCerts(progress)
  const toggleActiveCert = useCallback((certId) => {
    update((p) => {
      const current = getActiveCerts(p)
      const next = current.includes(certId) ? current.filter((c) => c !== certId) : [...current, certId]
      return setActiveCerts(p, next)
    })
  }, [update])

  const setEarned = useCallback((certId, earned) => update((p) => setCertEarned(p, certId, earned)), [update])

  return (
    <ProgressContext.Provider value={{ progress, activeCerts, toggleActiveCert, saveQuiz, saveQuizBatch, saveFlashcard, visitTopic, completeTopic, setEarned }}>
      {children}
    </ProgressContext.Provider>
  )
}

export function useProgress() { return useContext(ProgressContext) }
