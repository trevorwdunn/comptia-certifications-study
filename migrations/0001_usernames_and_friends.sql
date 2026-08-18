-- Run once against the live DB:
--   wrangler d1 execute certifications-db --remote --file=migrations/0001_usernames_and_friends.sql
--
-- Safe to run before the new code deploys: the column is nullable and the old
-- endpoints ignore it.

ALTER TABLE users ADD COLUMN username TEXT;

-- Backfill from the email local-part, which is exactly what the UI displayed
-- before usernames existed, so nobody's leaderboard name changes.
UPDATE users
SET username = substr(
  lower(replace(replace(replace(substr(email, 1, instr(email, '@') - 1), '.', '_'), '+', '_'), '-', '_')),
  1, 20)
WHERE username IS NULL;

-- Any local-part that collided (or was too short) gets a short id suffix.
UPDATE users
-- The suffix is run through the same character rules as the rest, so a
-- backfilled name is always one the user could type back in themselves.
SET username = substr(username, 1, 15) || '_' || replace(substr(id, 1, 4), '-', '0')
WHERE length(username) < 3
   OR id NOT IN (SELECT min(id) FROM users GROUP BY username);

CREATE UNIQUE INDEX IF NOT EXISTS idx_users_username ON users(username);

CREATE TABLE IF NOT EXISTS friendships (
  id TEXT PRIMARY KEY,
  requester_id TEXT NOT NULL,
  addressee_id TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',   -- 'pending' | 'accepted'
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (requester_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (addressee_id) REFERENCES users(id) ON DELETE CASCADE,
  CHECK (requester_id <> addressee_id)
);

-- Ordered pair index: makes A->B and B->A the same row, so two people who
-- request each other simultaneously can't create a duplicate friendship.
CREATE UNIQUE INDEX IF NOT EXISTS idx_friendship_pair ON friendships(
  CASE WHEN requester_id < addressee_id THEN requester_id ELSE addressee_id END,
  CASE WHEN requester_id < addressee_id THEN addressee_id ELSE requester_id END
);

CREATE INDEX IF NOT EXISTS idx_friendship_addressee ON friendships(addressee_id, status);
CREATE INDEX IF NOT EXISTS idx_friendship_requester ON friendships(requester_id, status);
