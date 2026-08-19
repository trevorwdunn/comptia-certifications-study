// Cert content is loaded on demand — it's ~70% of the app's bytes, and a user
// only ever studies one cert at a time. Each loader below becomes its own chunk.
import { useEffect, useState } from 'react'

const loaders = {
  'casp-plus': () => Promise.all([
    import('./casp-plus/domains.js'),
    import('./casp-plus/questions.js'),
    import('./casp-plus/flashcards.js'),
    import('./casp-plus/studyguide.js'),
  ]),
  'pentest-plus': () => Promise.all([
    import('./pentest-plus/domains.js'),
    import('./pentest-plus/questions.js'),
    import('./pentest-plus/flashcards.js'),
    import('./pentest-plus/studyguide.js'),
  ]),
  'cysa-plus': () => Promise.all([
    import('./cysa-plus/domains.js'),
    import('./cysa-plus/questions.js'),
    import('./cysa-plus/flashcards.js'),
    import('./cysa-plus/studyguide.js'),
  ]),
  'datasys-plus': () => Promise.all([
    import('./datasys-plus/domains.js'),
    import('./datasys-plus/questions.js'),
    import('./datasys-plus/flashcards.js'),
    import('./datasys-plus/studyguide.js'),
  ]),
  'linux-plus': () => Promise.all([
    import('./linux-plus/domains.js'),
    import('./linux-plus/questions.js'),
    import('./linux-plus/flashcards.js'),
    import('./linux-plus/studyguide.js'),
  ]),
  'cloud-plus': () => Promise.all([
    import('./cloud-plus/domains.js'),
    import('./cloud-plus/questions.js'),
    import('./cloud-plus/flashcards.js'),
    import('./cloud-plus/studyguide.js'),
  ]),
  'itf-plus': () => Promise.all([
    import('./itf-plus/domains.js'),
    import('./itf-plus/questions.js'),
    import('./itf-plus/flashcards.js'),
    import('./itf-plus/studyguide.js'),
  ]),
  'network-plus': () => Promise.all([
    import('./network-plus/domains.js'),
    import('./network-plus/questions.js'),
    import('./network-plus/flashcards.js'),
    import('./network-plus/studyguide.js'),
  ]),
  'a-plus': () => Promise.all([
    import('./a-plus/domains.js'),
    import('./a-plus/questions.js'),
    import('./a-plus/flashcards.js'),
    import('./a-plus/studyguide.js'),
  ]),
  'server-plus': () => Promise.all([
    import('./server-plus/domains.js'),
    import('./server-plus/questions.js'),
    import('./server-plus/flashcards.js'),
    import('./server-plus/studyguide.js'),
  ]),
  'security-plus': () => Promise.all([
    import('./security-plus/domains.js'),
    import('./security-plus/questions.js'),
    import('./security-plus/flashcards.js'),
    import('./security-plus/studyguide.js'),
  ]),
}

const EMPTY = {
  domains: [], questions: [], flashcards: [], studyGuide: [],
  getQuestionsByDomain: () => [],
  getRandomQuestions: () => [],
  getFlashcardsByDomain: () => [],
}

const pending = new Map()
const resolved = new Map()

export function loadCertData(certId) {
  if (resolved.has(certId)) return Promise.resolve(resolved.get(certId))
  if (pending.has(certId)) return pending.get(certId)

  const loader = loaders[certId]
  const promise = (loader
    ? loader().then(([d, q, f, s]) => ({
        domains: d.domains,
        questions: q.questions,
        flashcards: f.flashcards,
        studyGuide: s.studyGuide,
        getQuestionsByDomain: q.getQuestionsByDomain,
        getRandomQuestions: q.getRandomQuestions,
        getFlashcardsByDomain: f.getFlashcardsByDomain,
      }))
    : Promise.resolve(EMPTY)
  ).then((data) => {
    resolved.set(certId, data)
    pending.delete(certId)
    return data
  })

  pending.set(certId, promise)
  return promise
}

// Synchronous peek — only returns content already downloaded.
export function getLoadedCertData(certId) {
  return resolved.get(certId) ?? null
}

export function useCertData(certId) {
  const [data, setData] = useState(() => resolved.get(certId) ?? null)

  useEffect(() => {
    if (!certId) return
    const cached = resolved.get(certId)
    if (cached) { setData(cached); return }

    let alive = true
    setData(null)
    loadCertData(certId).then((d) => { if (alive) setData(d) })
    return () => { alive = false }
  }, [certId])

  return data
}
