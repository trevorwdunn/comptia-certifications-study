import { readdirSync, existsSync } from 'node:fs'

const certs = ['itf-plus', 'network-plus', 'a-plus', 'server-plus', 'security-plus']
let problems = 0
const bad = (msg) => { console.log(`  !! ${msg}`); problems++ }

for (const cert of certs) {
  const dir = `./src/data/${cert}`
  if (!existsSync(dir)) { console.log(`MISSING DIR ${cert}`); problems++; continue }
  const files = readdirSync(dir)

  const domainMod = files.includes('domains.js') ? await import(`${dir}/domains.js`) : null
  const domainIds = domainMod ? domainMod.domains.map((d) => d.id) : []
  console.log(`\n=== ${cert} === domains: ${domainIds.join(', ')}`)

  if (files.includes('questions.js')) {
    const m = await import(`${dir}/questions.js`)
    const qs = m.questions
    const perDomain = {}
    for (const q of qs) perDomain[q.domain] = (perDomain[q.domain] || 0) + 1
    console.log(`  questions: ${qs.length}  per-domain: ${JSON.stringify(perDomain)}`)
    for (const q of qs) {
      const errs = []
      if (!q.id) errs.push('no id')
      if (!q.question) errs.push('no question text')
      if (!Array.isArray(q.options) || q.options.length < 2) errs.push('bad options')
      if (typeof q.correct !== 'number' || q.correct < 0 || q.correct >= (q.options?.length ?? 0)) errs.push(`bad correct index: ${q.correct}`)
      if (!q.explanation) errs.push('no explanation')
      if (!domainIds.includes(q.domain)) errs.push(`unknown domain ${q.domain}`)
      if (errs.length) bad(`q ${q.id}: ${errs.join('; ')}`)
    }
    const ids = qs.map((q) => q.id)
    const dupes = [...new Set(ids.filter((id, i) => ids.indexOf(id) !== i))]
    if (dupes.length) bad(`duplicate question ids: ${dupes.join(', ')}`)
    for (const d of domainIds) if (!perDomain[d]) bad(`domain ${d} has ZERO questions`)
    if (typeof m.getQuestionsByDomain !== 'function') bad('missing getQuestionsByDomain export')
    if (typeof m.getRandomQuestions !== 'function') bad('missing getRandomQuestions export')
  } else bad('questions.js MISSING')

  if (files.includes('flashcards.js')) {
    const m = await import(`${dir}/flashcards.js`)
    const fc = m.flashcards
    const perDomain = {}
    for (const c of fc) perDomain[c.domain] = (perDomain[c.domain] || 0) + 1
    console.log(`  flashcards: ${fc.length}  per-domain: ${JSON.stringify(perDomain)}`)
    for (const c of fc) {
      const errs = []
      if (!c.id) errs.push('no id')
      if (!c.term) errs.push('no term')
      if (!c.definition) errs.push('no definition')
      if (!domainIds.includes(c.domain)) errs.push(`unknown domain ${c.domain}`)
      if (errs.length) bad(`fc ${c.id}: ${errs.join('; ')}`)
    }
    const ids = fc.map((c) => c.id)
    const dupes = [...new Set(ids.filter((id, i) => ids.indexOf(id) !== i))]
    if (dupes.length) bad(`duplicate flashcard ids: ${dupes.join(', ')}`)
    for (const d of domainIds) if (!perDomain[d]) bad(`domain ${d} has ZERO flashcards`)
    if (typeof m.getFlashcardsByDomain !== 'function') bad('missing getFlashcardsByDomain export')
  } else bad('flashcards.js MISSING')

  if (files.includes('studyguide.js')) {
    const m = await import(`${dir}/studyguide.js`)
    const sg = m.studyGuide
    console.log(`  studyGuide guides: ${sg.length}  topics: ${sg.reduce((n, g) => n + (g.topics?.length ?? 0), 0)}`)
    for (const g of sg) {
      const errs = []
      if (!g.id) errs.push('no id')
      if (!g.title) errs.push('no title')
      if (!g.summary) errs.push('no summary')
      if (!Array.isArray(g.topics) || !g.topics.length) errs.push('no topics')
      if (!domainIds.includes(g.domain)) errs.push(`unknown domain ${g.domain}`)
      if (errs.length) bad(`guide ${g.id}: ${errs.join('; ')}`)
      for (const t of g.topics ?? []) {
        const te = []
        if (!t.id) te.push('no id')
        if (!t.title) te.push('no title')
        if (!t.content) te.push('no content')
        if (te.length) bad(`topic ${t.id} in ${g.id}: ${te.join('; ')}`)
      }
    }
  } else bad('studyguide.js MISSING')
}

console.log(`\n${problems === 0 ? '=== OK — no problems found ===' : `=== ${problems} PROBLEM(S) ===`}`)
