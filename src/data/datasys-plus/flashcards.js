// DataSys+ DS0-001 Flashcards
// Domains: 1=Database Fundamentals, 2=Database Deployment,
//          3=Database Management and Maintenance, 4=Data and Database Security,
//          5=Business Continuity

export const flashcards = [
  // ─── DOMAIN 1: DATABASE FUNDAMENTALS ─────────────────────────────────────

  {
    id: 'dsplus-fc-001',
    domain: 1,
    term: 'Primary key',
    definition:
      'Column or set of columns uniquely identifying each row. Cannot be null and cannot repeat. A UNIQUE constraint enforces uniqueness but usually still allows a null.',
  },
  {
    id: 'dsplus-fc-002',
    domain: 1,
    term: 'Foreign key',
    definition:
      'Column referencing a primary key in another table. Enforces referential integrity so no row can point at a parent that does not exist.',
  },
  {
    id: 'dsplus-fc-003',
    domain: 1,
    term: 'Composite key',
    definition:
      'Primary key made of two or more columns because no single column is unique alone. Common in junction tables resolving many-to-many relationships.',
  },
  {
    id: 'dsplus-fc-004',
    domain: 1,
    term: 'Referential integrity',
    definition:
      'Guarantee that every foreign key value matches an existing primary key. Enforced on insert, update, and delete, preventing orphaned rows.',
  },
  {
    id: 'dsplus-fc-005',
    domain: 1,
    term: 'First normal form (1NF)',
    definition:
      'Every column holds a single atomic value and there are no repeating groups. No comma-separated lists stuffed into one field.',
  },
  {
    id: 'dsplus-fc-006',
    domain: 1,
    term: 'Second normal form (2NF)',
    definition:
      'In 1NF, plus every non-key attribute depends on the whole primary key. Removes partial dependencies on part of a composite key.',
  },
  {
    id: 'dsplus-fc-007',
    domain: 1,
    term: 'Third normal form (3NF)',
    definition:
      'In 2NF, plus no transitive dependencies — non-key attributes must not depend on other non-key attributes. The usual target for transactional schemas.',
  },
  {
    id: 'dsplus-fc-008',
    domain: 1,
    term: 'Denormalization',
    definition:
      'Deliberately introducing redundancy to reduce joins and speed up reads. Trades storage and write complexity for query performance — common in reporting and analytics.',
  },
  {
    id: 'dsplus-fc-009',
    domain: 1,
    term: 'JOIN types',
    definition:
      'INNER — only matching rows. LEFT OUTER — all left rows plus matches. RIGHT OUTER — all right rows plus matches. FULL OUTER — everything from both. CROSS — every combination.',
  },
  {
    id: 'dsplus-fc-010',
    domain: 1,
    term: 'WHERE vs. HAVING',
    definition:
      'WHERE filters individual rows before grouping. HAVING filters aggregated groups after GROUP BY. Filtering an aggregate with WHERE is a classic error.',
  },
  {
    id: 'dsplus-fc-011',
    domain: 1,
    term: 'DECIMAL vs. FLOAT',
    definition:
      'DECIMAL/NUMERIC stores exact fixed-point values and is required for currency. FLOAT is approximate and accumulates rounding error.',
  },
  {
    id: 'dsplus-fc-012',
    domain: 1,
    term: 'ACID',
    definition:
      'Atomicity — all or nothing. Consistency — constraints always hold. Isolation — concurrent transactions do not interfere. Durability — committed data survives a crash.',
  },
  {
    id: 'dsplus-fc-013',
    domain: 1,
    term: 'BASE',
    definition:
      'Basically Available, Soft state, Eventual consistency — the relaxed model many distributed NoSQL systems adopt, trading immediate consistency for availability and scale.',
  },
  {
    id: 'dsplus-fc-014',
    domain: 1,
    term: 'Row vs. columnar storage',
    definition:
      'Row storage keeps whole records together, suiting transactional reads and writes. Columnar keeps each column together, suiting analytical aggregates over few columns and many rows.',
  },
  {
    id: 'dsplus-fc-015',
    domain: 1,
    term: 'NoSQL families',
    definition:
      'Document (JSON-like records), key-value (simple lookups), columnar (wide-column analytics), and graph (nodes and edges for highly connected data).',
  },
  {
    id: 'dsplus-fc-016',
    domain: 1,
    term: 'Many-to-many relationships',
    definition:
      'Implemented with a junction/bridge table holding foreign keys to both sides, converting one many-to-many into two one-to-many relationships.',
  },
  {
    id: 'dsplus-fc-017',
    domain: 1,
    term: 'OLTP vs. OLAP',
    definition:
      'OLTP — many small concurrent transactions, normalized, write-heavy. OLAP — large analytical queries, often denormalized or columnar, read-heavy.',
  },

  // ─── DOMAIN 2: DATABASE DEPLOYMENT ───────────────────────────────────────

  {
    id: 'dsplus-fc-018',
    domain: 2,
    term: 'Storage sizing',
    definition:
      'Plan for table data plus indexes, transaction logs, and temporary objects, with headroom for growth. A full log volume stops writes entirely.',
  },
  {
    id: 'dsplus-fc-019',
    domain: 2,
    term: 'DBaaS (managed database)',
    definition:
      'Provider handles patching, backups, and HA plumbing. Schema design, query tuning, access control, and data protection remain the customer’s job.',
  },
  {
    id: 'dsplus-fc-020',
    domain: 2,
    term: 'Buffer pool',
    definition:
      'Memory cache holding data and index pages. Sizing it well is among the highest-impact tuning decisions, since memory reads vastly outperform disk.',
  },
  {
    id: 'dsplus-fc-021',
    domain: 2,
    term: 'ETL',
    definition:
      'Extract from sources, Transform (cleanse, standardize, reshape), Load into the target. Transformation happens before the data lands.',
  },
  {
    id: 'dsplus-fc-022',
    domain: 2,
    term: 'ELT',
    definition:
      'Extract, Load raw data into a powerful target, then Transform in place using the target’s compute. Suits modern warehouses and preserves the raw source.',
  },
  {
    id: 'dsplus-fc-023',
    domain: 2,
    term: 'Bulk load optimization',
    definition:
      'Drop or disable non-essential indexes during a large load and rebuild afterward, batch commits rather than committing per row, and load in key order where possible.',
  },
  {
    id: 'dsplus-fc-024',
    domain: 2,
    term: 'Environment separation',
    definition:
      'Development, test, staging, and production kept separate. Production data copied downward must be masked, since lower environments have weaker controls.',
  },
  {
    id: 'dsplus-fc-025',
    domain: 2,
    term: 'Migration prerequisites',
    definition:
      'A verified full backup, a tested rollback plan, a documented cutover window, and validation queries confirming row counts and checksums after the move.',
  },
  {
    id: 'dsplus-fc-026',
    domain: 2,
    term: 'Schema versioning',
    definition:
      'Managing schema changes as version-controlled migration scripts applied in order, so every environment can be rebuilt to a known state.',
  },

  // ─── DOMAIN 3: MANAGEMENT AND MAINTENANCE ────────────────────────────────

  {
    id: 'dsplus-fc-027',
    domain: 3,
    term: 'Index trade-off',
    definition:
      'Indexes speed reads but must be maintained on every write and consume storage. Unused indexes are pure overhead and should be removed.',
  },
  {
    id: 'dsplus-fc-028',
    domain: 3,
    term: 'Clustered vs. non-clustered index',
    definition:
      'A clustered index defines the physical row order — one per table. Non-clustered indexes are separate structures pointing back to the rows.',
  },
  {
    id: 'dsplus-fc-029',
    domain: 3,
    term: 'Cardinality',
    definition:
      'Number of distinct values in a column. High cardinality indexes well; low cardinality often does not narrow results enough to beat a scan.',
  },
  {
    id: 'dsplus-fc-030',
    domain: 3,
    term: 'Execution plan',
    definition:
      'The engine’s intended strategy for a query — join order, access methods, estimated costs. The starting point for tuning; look for scans where seeks were expected.',
  },
  {
    id: 'dsplus-fc-031',
    domain: 3,
    term: 'Statistics',
    definition:
      'Metadata describing data distribution, used by the optimizer to choose plans. Stale statistics after significant growth are a leading cause of sudden slowdowns.',
  },
  {
    id: 'dsplus-fc-032',
    domain: 3,
    term: 'Index fragmentation',
    definition:
      'Pages left partially filled and out of order by ongoing modification, increasing I/O. Rebuild restores density; reorganize is a lighter, online alternative.',
  },
  {
    id: 'dsplus-fc-033',
    domain: 3,
    term: 'Deadlock',
    definition:
      'Two or more transactions each holding a lock the other needs. The engine detects the cycle and kills a victim. Prevent with consistent lock ordering and short transactions.',
  },
  {
    id: 'dsplus-fc-034',
    domain: 3,
    term: 'Isolation levels',
    definition:
      'Read uncommitted (dirty reads possible) → read committed → repeatable read → serializable (strictest). Higher isolation means fewer anomalies and more blocking.',
  },
  {
    id: 'dsplus-fc-035',
    domain: 3,
    term: 'Dirty / non-repeatable / phantom reads',
    definition:
      'Dirty — reading uncommitted data. Non-repeatable — a re-read row changed. Phantom — a re-run query returns new rows. Each is prevented at a successively higher isolation level.',
  },
  {
    id: 'dsplus-fc-036',
    domain: 3,
    term: 'Buffer cache hit ratio',
    definition:
      'Share of page requests served from memory. A falling ratio means more disk reads, pointing at memory pressure or queries scanning far more data than needed.',
  },
  {
    id: 'dsplus-fc-037',
    domain: 3,
    term: 'Transaction log growth',
    definition:
      'The log cannot truncate while a transaction is open or, under full recovery, until a log backup runs. Unbounded growth eventually fills the volume and halts writes.',
  },
  {
    id: 'dsplus-fc-038',
    domain: 3,
    term: 'Constraints for data quality',
    definition:
      'NOT NULL, CHECK, UNIQUE, and foreign keys reject invalid data at the source. Application-only validation is bypassed by any client writing directly.',
  },
  {
    id: 'dsplus-fc-039',
    domain: 3,
    term: 'Partitioning',
    definition:
      'Splitting a large table into segments by range, list, or hash. Improves manageability and lets queries prune irrelevant partitions entirely.',
  },
  {
    id: 'dsplus-fc-040',
    domain: 3,
    term: 'Sharding',
    definition:
      'Distributing data horizontally across multiple database servers by a shard key. Scales writes beyond one machine at the cost of cross-shard query complexity.',
  },

  // ─── DOMAIN 4: DATA AND DATABASE SECURITY ────────────────────────────────

  {
    id: 'dsplus-fc-041',
    domain: 4,
    term: 'Least privilege (databases)',
    definition:
      'Grant the narrowest right that satisfies the need — SELECT on one table or view rather than broad ownership. Application accounts especially must be scoped tightly.',
  },
  {
    id: 'dsplus-fc-042',
    domain: 4,
    term: 'Database roles',
    definition:
      'Permissions granted to roles with users assigned to them, keeping grants consistent and making removal reliable. Removing a user from a role revokes everything it carried.',
  },
  {
    id: 'dsplus-fc-043',
    domain: 4,
    term: 'Views as a security boundary',
    definition:
      'A view exposes only selected columns and rows, so access can be granted to the view instead of the underlying table.',
  },
  {
    id: 'dsplus-fc-044',
    domain: 4,
    term: 'SQL injection',
    definition:
      'Attack inserting SQL through user input. Prevented decisively by parameterized queries / prepared statements, which keep input from ever being parsed as code.',
  },
  {
    id: 'dsplus-fc-045',
    domain: 4,
    term: 'Encryption at rest vs. in transit',
    definition:
      'At rest (transparent data encryption) protects data files and backups against stolen media. In transit (TLS) protects the connection. Both are needed; they address different threats.',
  },
  {
    id: 'dsplus-fc-046',
    domain: 4,
    term: 'Backup encryption',
    definition:
      'Backups leave the secured environment for tapes, offsite storage, and cloud buckets. Encrypting them is essential even when production is already encrypted.',
  },
  {
    id: 'dsplus-fc-047',
    domain: 4,
    term: 'Data masking',
    definition:
      'Replacing sensitive values with realistic substitutes so lower environments stay usable without exposing real data. Static masking alters the copy; dynamic masking hides values at query time.',
  },
  {
    id: 'dsplus-fc-048',
    domain: 4,
    term: 'Tokenization',
    definition:
      'Substituting sensitive values with tokens that have no mathematical relationship to the original, with the mapping held in a separately protected vault. Common for payment card data.',
  },
  {
    id: 'dsplus-fc-049',
    domain: 4,
    term: 'Data classification',
    definition:
      'Labeling data as public, internal, confidential, or restricted to drive control selection, retention, and handling. Without it, protection is uniform and therefore wrong.',
  },
  {
    id: 'dsplus-fc-050',
    domain: 4,
    term: 'Audit logging',
    definition:
      'Recording who accessed or changed what, and when. Must be shipped to storage administrators cannot alter, or a privileged account can erase its own tracks.',
  },
  {
    id: 'dsplus-fc-051',
    domain: 4,
    term: 'Data lineage',
    definition:
      'Documented flow of data from origin through transformations to destinations. Required to honor deletion requests and to trace the impact of a quality problem.',
  },
  {
    id: 'dsplus-fc-052',
    domain: 4,
    term: 'Separation of duties',
    definition:
      'Splitting sensitive capabilities so no single person can both make and conceal a change — for example separating administration from audit log review.',
  },

  // ─── DOMAIN 5: BUSINESS CONTINUITY ───────────────────────────────────────

  {
    id: 'dsplus-fc-053',
    domain: 5,
    term: 'Full / differential / incremental backups',
    definition:
      'Full — everything. Differential — changes since the last full. Incremental — changes since the last backup of any type. Restore complexity rises as backup size falls.',
  },
  {
    id: 'dsplus-fc-054',
    domain: 5,
    term: 'Transaction log backup',
    definition:
      'Captures committed changes in sequence, enabling point-in-time recovery — restoring to just before an accidental deletion rather than only to the last full backup.',
  },
  {
    id: 'dsplus-fc-055',
    domain: 5,
    term: 'RPO vs. RTO',
    definition:
      'RPO — tolerable data loss, which sets backup or replication frequency. RTO — tolerable downtime, which sets recovery architecture.',
  },
  {
    id: 'dsplus-fc-056',
    domain: 5,
    term: 'High availability vs. disaster recovery',
    definition:
      'HA keeps the service running through component failure using redundancy and failover. DR restores service after an event that takes out the environment.',
  },
  {
    id: 'dsplus-fc-057',
    domain: 5,
    term: 'Synchronous replication',
    definition:
      'Commit acknowledged only after the replica confirms — zero data loss, but write latency is tied to the network link.',
  },
  {
    id: 'dsplus-fc-058',
    domain: 5,
    term: 'Asynchronous replication',
    definition:
      'Commit acknowledged immediately and shipped to the replica afterward — better performance and distance tolerance, but recent transactions can be lost on failure.',
  },
  {
    id: 'dsplus-fc-059',
    domain: 5,
    term: 'Failover and failback',
    definition:
      'Failover shifts production to a standby. Failback returns to the primary and requires resynchronizing changes made while on the standby — often the more delicate operation.',
  },
  {
    id: 'dsplus-fc-060',
    domain: 5,
    term: 'Restore testing',
    definition:
      'The only proof a backup works. Corrupted files, missing encryption keys, broken chains, and undocumented steps surface only when a restore is attempted.',
  },
  {
    id: 'dsplus-fc-061',
    domain: 5,
    term: 'Retention policy',
    definition:
      'How long backups are kept, driven by regulatory, contractual, and business recovery requirements — not by available disk space.',
  },
];

/**
 * Returns all flashcards for a specific domain (1-5).
 * @param {number} domainId
 * @returns {Array}
 */
export function getFlashcardsByDomain(domainId) {
  return flashcards.filter((fc) => fc.domain === domainId);
}
