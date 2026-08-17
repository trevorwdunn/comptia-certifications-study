// Reads progress codes exported by the standalone "Core 1 Bench" A+ practice exam.
//
// Its code format is `A1.<exams>.<last>.<body>`, where body is two base64 characters
// per question in bank order: views, then misses*4+streak. Decoding therefore depends
// on the bank order below matching the source app's exactly — if that app ever adds
// or reorders questions, old codes and this list drift apart and the length check fails.

const BANK = [
  "HW01:3", "HW02:3", "HW03:3", "HW04:3", "HW05:3", "HW06:3",
  "HW07:3", "HW08:3", "HW09:3", "HW10:3", "HW11:3", "HW12:3",
  "HW13:3", "HW14:3", "HW15:3", "HW16:3", "HW17:3", "HW18:3",
  "HW19:3", "HW20:3", "HW21:3", "HW22:3", "HW23:3", "HW24:3",
  "HW25:3", "HW26:3", "HW27:3", "HW28:3", "HW29:3", "HW30:3",
  "NE01:2", "NE02:2", "NE03:2", "NE04:2", "NE05:2", "NE06:2",
  "NE07:2", "NE08:2", "NE09:2", "NE10:2", "NE11:2", "NE12:2",
  "NE13:2", "NE14:2", "NE15:2", "NE16:2", "NE17:2", "NE18:2",
  "NE19:2", "NE20:2", "NE21:2", "NE22:2", "NE23:2", "NE24:2",
  "NE25:2", "NE26:2", "NE27:2", "NE28:2", "MO01:1", "MO02:1",
  "MO03:1", "MO04:1", "MO05:1", "MO06:1", "MO07:1", "MO08:1",
  "MO09:1", "MO10:1", "MO11:1", "MO12:1", "MO13:1", "MO14:1",
  "MO15:1", "MO16:1", "MO17:1", "MO18:1", "VC01:4", "VC02:4",
  "VC03:4", "VC04:4", "VC05:4", "VC06:4", "VC07:4", "VC08:4",
  "VC09:4", "VC10:4", "VC11:4", "VC12:4", "VC13:4", "VC14:4",
  "TS01:5", "TS02:5", "TS03:5", "TS04:5", "TS05:5", "TS06:5",
  "TS07:5", "TS08:5", "TS09:5", "TS10:5", "TS11:5", "TS12:5",
  "TS13:5", "TS14:5", "TS15:5", "TS16:5", "TS17:5", "TS18:5",
  "TS19:5", "TS20:5", "TS21:5", "TS22:5", "TS23:5", "TS24:5",
  "TS25:5", "TS26:5", "TS27:5", "TS28:5", "TS29:5", "TS30:5",
].map((e) => {
  const [id, domain] = e.split(':')
  return { id, domain: Number(domain) }
})

const DOMAIN_BY_ID = Object.fromEntries(BANK.map((b) => [b.id, b.domain]))
const A64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'

/**
 * @param {string} raw a `A1.…` code or the legacy JSON export
 * @returns {{stats: Record<string, {n:number,w:number,s:number}>, exams: number}}
 */
export function decodeCore1(raw) {
  const str = String(raw || '').replace(/\s+/g, '')
  if (!str) throw new Error('Paste a progress code first.')

  if (str.startsWith('{')) {
    let parsed
    try { parsed = JSON.parse(str) } catch { throw new Error("That looks like JSON but it won't parse.") }
    const stats = {}
    for (const [id, r] of Object.entries(parsed.q || {})) {
      if (!DOMAIN_BY_ID[id]) continue
      stats[id] = { n: +r.n || 0, w: +r.w || 0, s: +r.s || 0 }
    }
    return { stats, exams: +parsed.exams || 0 }
  }

  const parts = str.split('.')
  if (parts.length !== 4 || parts[0] !== 'A1') {
    throw new Error('Not a Core 1 Bench code — it should start with "A1." and have four dot-separated parts.')
  }
  const body = parts[3]
  if (body.length !== BANK.length * 2) {
    throw new Error(`Code is for a different question bank (expected ${BANK.length * 2} characters, got ${body.length}).`)
  }

  const stats = {}
  BANK.forEach((q, i) => {
    const a = A64.indexOf(body[i * 2])
    const b = A64.indexOf(body[i * 2 + 1])
    if (a < 0 || b < 0) throw new Error('Code contains characters that are not part of the format.')
    if (a === 0 && b === 0) return
    stats[q.id] = { n: a, w: Math.floor(b / 4), s: b % 4 }
  })
  return { stats, exams: +parts[1] || 0 }
}

/**
 * Core 1 Bench tracks per-question counters; we only track quiz attempts. Project
 * one onto the other by treating each domain as a single attempt: every question
 * seen counts toward the total, and a question whose current streak is positive
 * (last answer was right) counts as correct.
 */
export function summarizeCore1(decoded) {
  const byDomain = {}
  for (const [id, r] of Object.entries(decoded.stats)) {
    if (!r.n) continue
    const d = DOMAIN_BY_ID[id]
    const row = (byDomain[d] ||= { total: 0, correct: 0 })
    row.total++
    if (r.s > 0) row.correct++
  }
  return byDomain
}
