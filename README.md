# CompTIA Certification Study

A single study site covering multiple CompTIA certifications — practice quizzes,
flashcards, and study guides — with optional accounts so progress follows you across
devices and a small group can compare stats.

Runs on Cloudflare Pages, with the API as Pages Functions and D1 for storage.

## Certifications

Five have full content. The rest are registered in `src/certs.js` and render as
coming-soon.

| Certification | Exam | Questions | Flashcards | Study topics |
|---|---|---:|---:|---:|
| ITF+ | FC0-U61 | 60 | 76 | 24 |
| A+ | 220-1201 / 220-1202 | 155 | 52 | 22 |
| Network+ | N10-009 | 62 | 62 | 24 |
| Security+ | SY0-701 | 60 | 75 | 37 |
| Server+ | SK0-005 | 65 | 62 | 40 |

A+ is a single entry containing both cores; its domain objects carry a `core: 1 | 2`
field so the UI groups them.

Also scaffolded, without content yet: Linux+, Cloud+, CySA+, PenTest+, CASP+,
DataSys+.

## Running it locally

```bash
npm install
npm run dev
```

`vite dev` serves the front end only. It does **not** run Pages Functions, so anything
under `/api/*` will 404 — sign-up and sign-in included. That's expected. To exercise the
API, build first and use Wrangler:

```bash
npm run build
npx wrangler pages dev dist
```

Without an account the app still works fully; progress is kept in `localStorage` and
merged into your account if you sign in later.

## Editing content

Content lives in `src/data/<cert-id>/` as four files: `domains.js`, `questions.js`,
`flashcards.js`, `studyguide.js`. Each cert is a separate lazily-loaded chunk, so adding
one doesn't slow down the rest of the site.

After any content change, run the validator:

```bash
node validate-content.mjs
```

It catches the failure modes that are silent in the UI — an answer index pointing past the
end of its options array, duplicate IDs, questions assigned to a domain that doesn't
exist, and missing helper exports. A question with a bad `correct` index looks completely
normal and simply marks everyone wrong.

## Importing from Core 1 Bench

A+ carries 99 multiple-choice questions imported from a standalone Core 1 practice exam;
they keep a `sourceId` field holding their original bank id. The A+ progress page also
accepts that app's `A1.…` progress codes, decoded in `src/lib/core1Import.js`.

Decoding depends on the bank order hardcoded in that file matching the source app's
question order exactly, because the code is positional — two characters per question, no
ids. A code from a bank of a different size is rejected outright, but a bank that was
*reordered* without changing size would decode into silently wrong questions.

## Deployment

The Pages project is a **direct upload**, not connected to this repository, so
pushing to `main` does not deploy anything. Build and upload explicitly:

```bash
npm run build
npx wrangler pages deploy dist --project-name=comptia-certifications-study
```

Connecting the repo in the dashboard would swap this for build-on-push; nothing in
the code depends on which one is in use.

Either way the project needs:

- Build command `npm run build`, output directory `dist`
- D1 binding named `DB` (the binding name is referenced directly by the API functions)
- `JWT_SECRET` — required, encrypted. The auth functions throw rather than fall back to a
  default, so a missing value fails closed instead of signing tokens with a key anyone
  could read here.
- `MAX_ACCOUNTS` — optional, defaults to 10. Registration is refused past this many users.

Bindings and variables only apply to *new* builds, so redeploy after changing them.

`SETUP.html` walks through the whole thing in more detail.

## Privacy

No user data is in this repository, and none can be. Accounts, password hashes, and
progress exist only in D1 or in the visitor's own browser — nothing about a user is ever
written to a file in the source tree.

The leaderboard is deliberately narrow: the API returns only aggregate figures (average
score, attempt count, cards mastered). Individual answers and per-question history are
never exposed to other users. Avatars come from Gravatar, derived from a hash of the
account email, so no images are stored or uploaded.

## Licensing

Split, because the repository holds two different kinds of work:

- **Code** — MIT. See [`LICENSE`](LICENSE).
- **Study content** under `src/data/` — CC BY-SA 4.0. See
  [`LICENSE-CONTENT.md`](LICENSE-CONTENT.md).

All practice material here is original. **Do not contribute real CompTIA exam questions** —
they're copyrighted and covered by the exam NDA, and can't be accepted no matter how
they're reworded. Write original questions targeting the same objective instead.

Not affiliated with or endorsed by CompTIA. CompTIA's trademarks and exam objectives
remain theirs.
