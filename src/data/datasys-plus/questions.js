// DataSys+ DS0-001 Practice Questions
// Domains: 1=Database Fundamentals, 2=Database Deployment,
//          3=Database Management and Maintenance, 4=Data and Database Security,
//          5=Business Continuity

export const questions = [
  // ─── DOMAIN 1: DATABASE FUNDAMENTALS ─────────────────────────────────────

  {
    id: 'dsplus-q-001',
    domain: 1,
    topic: 'Relational Concepts',
    question: 'Which constraint guarantees that a column contains no duplicate and no null values?',
    options: ['FOREIGN KEY', 'PRIMARY KEY', 'CHECK', 'DEFAULT'],
    correct: 1,
    explanation:
      'A primary key enforces both uniqueness and non-nullability. A UNIQUE constraint enforces uniqueness but typically still permits a null.',
  },
  {
    id: 'dsplus-q-002',
    domain: 1,
    topic: 'Relational Concepts',
    question:
      'What does referential integrity enforce in a relational database?',
    options: [
      'That every foreign key value matches an existing primary key value',
      'That all tables have the same number of columns',
      'That queries return results in sorted order',
      'That indexes are rebuilt nightly',
    ],
    correct: 0,
    explanation:
      'Referential integrity prevents orphaned rows by requiring each foreign key to reference a row that actually exists, which the database enforces on insert, update, and delete.',
  },
  {
    id: 'dsplus-q-003',
    domain: 1,
    topic: 'Normalization',
    question: 'Which normal form requires that every non-key attribute depend on the whole primary key?',
    options: ['First normal form', 'Second normal form', 'Third normal form', 'Boyce-Codd normal form'],
    correct: 1,
    explanation:
      'Second normal form eliminates partial dependencies on a composite key. Third normal form goes further and removes transitive dependencies between non-key attributes.',
  },
  {
    id: 'dsplus-q-004',
    domain: 1,
    topic: 'Normalization',
    question:
      'A reporting workload runs slowly because it joins many highly normalized tables. Which approach is most appropriate?',
    options: [
      'Denormalize selected structures for read performance',
      'Remove all primary keys',
      'Convert every column to text',
      'Disable referential integrity permanently',
    ],
    correct: 0,
    explanation:
      'Denormalization deliberately introduces redundancy to reduce joins for read-heavy analytics. It trades storage and write complexity for query speed, which is often the right call in reporting systems.',
  },
  {
    id: 'dsplus-q-005',
    domain: 1,
    topic: 'SQL',
    question:
      'Which JOIN returns all rows from the left table and only matching rows from the right?',
    options: ['INNER JOIN', 'LEFT OUTER JOIN', 'RIGHT OUTER JOIN', 'CROSS JOIN'],
    correct: 1,
    explanation:
      'A LEFT OUTER JOIN preserves every row from the left table, filling right-side columns with nulls where no match exists. An INNER JOIN returns only matched rows.',
  },
  {
    id: 'dsplus-q-006',
    domain: 1,
    topic: 'SQL',
    question:
      'Which clause filters rows after aggregation has been applied?',
    options: ['WHERE', 'HAVING', 'ORDER BY', 'GROUP BY'],
    correct: 1,
    explanation:
      'WHERE filters individual rows before grouping; HAVING filters the aggregated groups afterward. Using WHERE on an aggregate result is a common error.',
  },
  {
    id: 'dsplus-q-007',
    domain: 1,
    topic: 'Data Types',
    question:
      'Which data type is most appropriate for storing monetary values where rounding errors are unacceptable?',
    options: ['FLOAT', 'DECIMAL / NUMERIC', 'VARCHAR', 'INT'],
    correct: 1,
    explanation:
      'DECIMAL stores exact fixed-point values. Floating-point types are approximate and accumulate rounding errors, which is unacceptable for currency.',
  },
  {
    id: 'dsplus-q-008',
    domain: 1,
    topic: 'Database Types',
    question:
      'Which database model is best suited to storing highly interconnected data such as social relationships?',
    options: ['Relational', 'Graph', 'Key-value', 'Columnar'],
    correct: 1,
    explanation:
      'Graph databases store nodes and edges as first-class objects, making traversal of relationships efficient compared with repeated joins in a relational model.',
  },
  {
    id: 'dsplus-q-009',
    domain: 1,
    topic: 'Database Types',
    question:
      'Which storage model is optimized for analytical queries that aggregate a few columns across many rows?',
    options: ['Row-oriented storage', 'Columnar storage', 'Document storage', 'Key-value storage'],
    correct: 1,
    explanation:
      'Columnar storage keeps values from a single column together, so an aggregate reads only the needed columns. Row storage suits transactional workloads that touch whole records.',
  },
  {
    id: 'dsplus-q-010',
    domain: 1,
    topic: 'ACID',
    question: 'Which ACID property guarantees that a transaction either completes fully or has no effect?',
    options: ['Atomicity', 'Consistency', 'Isolation', 'Durability'],
    correct: 0,
    explanation:
      'Atomicity makes the transaction all-or-nothing. Durability guarantees committed changes survive a crash, and isolation governs visibility between concurrent transactions.',
  },
  {
    id: 'dsplus-q-011',
    domain: 1,
    topic: 'ACID',
    question:
      'Which ACID property ensures that committed data survives a sudden power loss?',
    options: ['Atomicity', 'Consistency', 'Isolation', 'Durability'],
    correct: 3,
    explanation:
      'Durability means a committed transaction is permanently recorded, typically by writing to the transaction log before acknowledging the commit.',
  },
  {
    id: 'dsplus-q-012',
    domain: 1,
    topic: 'Keys',
    question: 'What is a composite key?',
    options: [
      'A key made of two or more columns that together uniquely identify a row',
      'A key generated automatically by the database',
      'A key that references another table',
      'A key stored in an external file',
    ],
    correct: 0,
    explanation:
      'A composite key combines multiple columns because no single column is unique on its own — common in junction tables resolving many-to-many relationships.',
  },
  {
    id: 'dsplus-q-013',
    domain: 1,
    topic: 'Schema Design',
    question:
      'How is a many-to-many relationship implemented in a relational database?',
    options: [
      'With a junction table containing foreign keys to both tables',
      'By duplicating one table',
      'With a single foreign key column',
      'It cannot be represented relationally',
    ],
    correct: 0,
    explanation:
      'A junction (bridge) table holds foreign keys to each side, turning one many-to-many relationship into two one-to-many relationships.',
  },

  // ─── DOMAIN 2: DATABASE DEPLOYMENT ───────────────────────────────────────

  {
    id: 'dsplus-q-014',
    domain: 2,
    topic: 'Installation',
    question:
      'Which consideration is most important when sizing storage for a new transactional database?',
    options: [
      'Projected data growth plus space for logs, indexes, and temporary objects',
      'The color of the server chassis',
      'The number of developers on the team',
      'The version of the client application',
    ],
    correct: 0,
    explanation:
      'Raw table data is only part of the requirement — transaction logs, indexes, and temp space frequently rival or exceed it, and running out of log space halts the database.',
  },
  {
    id: 'dsplus-q-015',
    domain: 2,
    topic: 'Deployment Models',
    question:
      'What is the main operational advantage of a managed (DBaaS) database over self-hosting?',
    options: [
      'The provider handles patching, backups, and high availability plumbing',
      'It removes the need for schema design',
      'It eliminates all licensing costs',
      'It guarantees queries will be fast',
    ],
    correct: 0,
    explanation:
      'DBaaS shifts routine operational work to the provider. Schema design, query tuning, and access control remain the customer’s responsibility.',
  },
  {
    id: 'dsplus-q-016',
    domain: 2,
    topic: 'Migration',
    question:
      'Which step should always precede a production database migration?',
    options: [
      'A full verified backup and a tested rollback plan',
      'Dropping all indexes',
      'Disabling authentication',
      'Deleting the transaction log',
    ],
    correct: 0,
    explanation:
      'A verified backup plus a rehearsed rollback is what makes a migration reversible. Without it, a failed cutover becomes a data-loss incident.',
  },
  {
    id: 'dsplus-q-017',
    domain: 2,
    topic: 'ETL',
    question: 'In an ETL pipeline, what happens during the transform stage?',
    options: [
      'Data is cleansed, standardized, and reshaped to fit the target model',
      'Data is copied byte-for-byte to the destination',
      'The source system is decommissioned',
      'Indexes are rebuilt on the source',
    ],
    correct: 0,
    explanation:
      'Transformation applies cleansing, type conversion, deduplication, and business rules so the loaded data conforms to the target schema.',
  },
  {
    id: 'dsplus-q-018',
    domain: 2,
    topic: 'ETL',
    question:
      'What distinguishes ELT from ETL?',
    options: [
      'Data is loaded into the target first and transformed there using its compute power',
      'ELT never validates data',
      'ELT only works with flat files',
      'ELT eliminates the need for a data warehouse',
    ],
    correct: 0,
    explanation:
      'ELT loads raw data into a powerful target platform and transforms in place, which suits modern warehouses that can process transformations faster than an intermediate server.',
  },
  {
    id: 'dsplus-q-019',
    domain: 2,
    topic: 'Import and Export',
    question:
      'A bulk import of millions of rows is running slowly. Which technique most commonly improves throughput?',
    options: [
      'Dropping or disabling non-essential indexes during the load, then rebuilding',
      'Committing after every single row',
      'Adding more foreign key constraints',
      'Running the import through a single-row loop',
    ],
    correct: 0,
    explanation:
      'Each index must be updated for every inserted row. Removing them during a bulk load and rebuilding afterward is usually far faster overall, and batching commits helps as well.',
  },
  {
    id: 'dsplus-q-020',
    domain: 2,
    topic: 'Environments',
    question:
      'Why should production data be masked before being copied into a development environment?',
    options: [
      'Development environments rarely have production-grade access controls',
      'Masked data compresses better',
      'Developers cannot read real data formats',
      'It is required to build indexes',
    ],
    correct: 0,
    explanation:
      'Non-production environments typically have weaker controls and broader access. Masking preserves realistic structure while removing the sensitive values that would otherwise be exposed.',
  },
  {
    id: 'dsplus-q-021',
    domain: 2,
    topic: 'Configuration',
    question:
      'Which database setting most directly affects how much data can be cached in memory to avoid disk reads?',
    options: [
      'Buffer pool / shared buffer size',
      'The listening TCP port',
      'The character set',
      'The log file naming convention',
    ],
    correct: 0,
    explanation:
      'The buffer pool caches data and index pages in memory. Sizing it appropriately is one of the highest-impact tuning decisions for a transactional database.',
  },

  // ─── DOMAIN 3: DATABASE MANAGEMENT AND MAINTENANCE ───────────────────────

  {
    id: 'dsplus-q-022',
    domain: 3,
    topic: 'Indexing',
    question: 'What is the primary trade-off of adding an index to a table?',
    options: [
      'Faster reads at the cost of slower writes and more storage',
      'Faster writes at the cost of slower reads',
      'Reduced storage with no downside',
      'It prevents the table from being queried',
    ],
    correct: 0,
    explanation:
      'Indexes accelerate lookups but must be maintained on every insert, update, and delete, and they consume space. Unused indexes are pure overhead.',
  },
  {
    id: 'dsplus-q-023',
    domain: 3,
    topic: 'Indexing',
    question:
      'A query filters on a column with very few distinct values across millions of rows. Why might an index on that column be ineffective?',
    options: [
      'Low cardinality means the index does not narrow results enough to beat a scan',
      'Indexes cannot be created on such columns',
      'The optimizer never uses indexes on large tables',
      'The column must be a primary key first',
    ],
    correct: 0,
    explanation:
      'With low cardinality, each value matches a large fraction of the table, so the optimizer often judges a full scan cheaper than many random index lookups.',
  },
  {
    id: 'dsplus-q-024',
    domain: 3,
    topic: 'Query Optimization',
    question:
      'Which tool shows how the database engine intends to execute a query?',
    options: ['Execution plan (EXPLAIN)', 'Transaction log', 'Data dictionary export', 'Backup catalog'],
    correct: 0,
    explanation:
      'An execution plan reveals join order, access methods, and estimated costs, which is where tuning begins — it exposes scans where a seek was expected.',
  },
  {
    id: 'dsplus-q-025',
    domain: 3,
    topic: 'Query Optimization',
    question:
      'A previously fast query has become slow with no code change. Which cause should be checked first?',
    options: [
      'Stale statistics or index fragmentation after significant data growth',
      'The server hostname changed',
      'The client operating system was updated',
      'The database vendor released a new logo',
    ],
    correct: 0,
    explanation:
      'The optimizer relies on statistics describing data distribution. As data grows, stale statistics lead to poor plan choices — updating them is the standard first response.',
  },
  {
    id: 'dsplus-q-026',
    domain: 3,
    topic: 'Concurrency',
    question: 'What is a deadlock?',
    options: [
      'Two or more transactions each waiting for a lock the other holds',
      'A query that returns no rows',
      'A backup running longer than its window',
      'A table with no primary key',
    ],
    correct: 0,
    explanation:
      'Deadlocked transactions wait on each other indefinitely, so the engine detects the cycle and terminates one as the victim. Consistent lock ordering is the usual prevention.',
  },
  {
    id: 'dsplus-q-027',
    domain: 3,
    topic: 'Concurrency',
    question:
      'Which isolation level prevents dirty reads but still permits non-repeatable reads?',
    options: ['Read uncommitted', 'Read committed', 'Repeatable read', 'Serializable'],
    correct: 1,
    explanation:
      'Read committed guarantees only committed data is read, but a row re-read within the same transaction may have changed. Repeatable read prevents that; serializable is the strictest.',
  },
  {
    id: 'dsplus-q-028',
    domain: 3,
    topic: 'Maintenance',
    question:
      'Why do index rebuilds or reorganizations need to be scheduled periodically?',
    options: [
      'Fragmentation from inserts, updates, and deletes degrades scan efficiency',
      'Indexes expire after 30 days',
      'The database requires it to accept new connections',
      'It reduces the number of tables',
    ],
    correct: 0,
    explanation:
      'Ongoing modification leaves indexes fragmented with partially filled pages, increasing I/O. Rebuilding restores density; reorganizing is a lighter online alternative.',
  },
  {
    id: 'dsplus-q-029',
    domain: 3,
    topic: 'Monitoring',
    question:
      'Which metric best indicates that a database is reading more from disk than it should?',
    options: [
      'A falling buffer cache hit ratio',
      'The number of tables in the schema',
      'The length of table names',
      'The database version number',
    ],
    correct: 0,
    explanation:
      'A declining cache hit ratio means requested pages are not in memory and must come from disk, which usually points at memory pressure or queries reading far more data than necessary.',
  },
  {
    id: 'dsplus-q-030',
    domain: 3,
    topic: 'Automation',
    question:
      'Which task is the best candidate for scheduled automation in a database environment?',
    options: [
      'Nightly backups with verification and integrity checks',
      'Approving schema design decisions',
      'Negotiating vendor licensing',
      'Interviewing new analysts',
    ],
    correct: 0,
    explanation:
      'Backups, integrity checks, statistics updates, and index maintenance are repetitive, high-stakes, and easy to forget — exactly the profile for automation with alerting on failure.',
  },
  {
    id: 'dsplus-q-031',
    domain: 3,
    topic: 'Capacity',
    question:
      'A transaction log is growing without bound on a busy database. What is the most likely cause?',
    options: [
      'Log backups are not running, or a long-running transaction is preventing truncation',
      'Too many users are connected',
      'Indexes are too small',
      'The server clock is wrong',
    ],
    correct: 0,
    explanation:
      'The log cannot be truncated while a transaction remains open or, in full recovery models, until a log backup occurs. Unbounded growth eventually fills the volume and stops writes.',
  },
  {
    id: 'dsplus-q-032',
    domain: 3,
    topic: 'Data Quality',
    question:
      'Which practice most directly improves data quality at the point of entry?',
    options: [
      'Enforcing constraints and validation rules in the database',
      'Increasing the buffer pool',
      'Adding more indexes',
      'Compressing the backups',
    ],
    correct: 0,
    explanation:
      'Constraints — NOT NULL, CHECK, UNIQUE, foreign keys — reject invalid data at the source. Application-only validation is bypassed whenever another client writes directly.',
  },

  // ─── DOMAIN 4: DATA AND DATABASE SECURITY ────────────────────────────────

  {
    id: 'dsplus-q-033',
    domain: 4,
    topic: 'Access Control',
    question:
      'An analyst needs to read one table and nothing else. Which approach follows least privilege?',
    options: [
      'Grant SELECT on that specific table or a view exposing it',
      'Grant db_owner so they are never blocked',
      'Share the application service account credentials',
      'Grant SELECT on all databases',
    ],
    correct: 0,
    explanation:
      'Least privilege means granting the narrowest right that satisfies the requirement. A view can narrow it further by exposing only the needed columns and rows.',
  },
  {
    id: 'dsplus-q-034',
    domain: 4,
    topic: 'Access Control',
    question: 'What is the security advantage of using roles rather than granting permissions to individual users?',
    options: [
      'Permissions stay consistent and are revoked automatically when membership changes',
      'Roles make queries run faster',
      'Roles remove the need for authentication',
      'Roles compress the permission tables',
    ],
    correct: 0,
    explanation:
      'Role-based permissions scale, keep grants consistent, and make joiner/leaver processes reliable — removing a user from a role revokes everything it carried.',
  },
  {
    id: 'dsplus-q-035',
    domain: 4,
    topic: 'SQL Injection',
    question:
      'Which coding practice most effectively prevents SQL injection?',
    options: [
      'Parameterized queries / prepared statements',
      'Concatenating user input into the query string',
      'Hiding the database version',
      'Renaming the tables',
    ],
    correct: 0,
    explanation:
      'Parameterization separates code from data so input is never parsed as SQL. Input validation is a useful defense in depth but does not replace parameterized queries.',
  },
  {
    id: 'dsplus-q-036',
    domain: 4,
    topic: 'Encryption',
    question:
      'Which encryption approach protects data files and backups if the physical media is stolen?',
    options: [
      'Transparent data encryption (encryption at rest)',
      'TLS between client and server',
      'Password complexity requirements',
      'Query result caching',
    ],
    correct: 0,
    explanation:
      'Encryption at rest protects the stored files themselves. TLS protects data in transit, which is a different threat — an attacker with the disk never touches the network.',
  },
  {
    id: 'dsplus-q-037',
    domain: 4,
    topic: 'Encryption',
    question:
      'Why must backup files be encrypted even when the live database already is?',
    options: [
      'Backups are copies that often leave the secured environment',
      'Backups cannot be restored unless encrypted',
      'Encryption makes backups smaller',
      'It is required for indexes to function',
    ],
    correct: 0,
    explanation:
      'Backups travel to offsite storage, tapes, and cloud buckets, frequently outside the controls protecting production. Unencrypted backups are a well-worn breach path.',
  },
  {
    id: 'dsplus-q-038',
    domain: 4,
    topic: 'Data Classification',
    question:
      'What is the purpose of classifying data as public, internal, confidential, or restricted?',
    options: [
      'To determine the controls, retention, and handling each dataset requires',
      'To decide which index type to use',
      'To choose a database vendor',
      'To set the server hostname',
    ],
    correct: 0,
    explanation:
      'Classification drives control selection. Without it, organizations either over-protect everything at great cost or under-protect the data that actually matters.',
  },
  {
    id: 'dsplus-q-039',
    domain: 4,
    topic: 'Privacy',
    question:
      'Which technique replaces sensitive values with a non-sensitive substitute that maps back only through a secure lookup?',
    options: ['Tokenization', 'Compression', 'Partitioning', 'Sharding'],
    correct: 0,
    explanation:
      'Tokenization swaps sensitive values for tokens with no mathematical relationship to the original; the mapping lives in a separately protected vault. Widely used for payment card data.',
  },
  {
    id: 'dsplus-q-040',
    domain: 4,
    topic: 'Auditing',
    question:
      'Why should database audit logs be written to a location administrators cannot modify?',
    options: [
      'So a compromised or malicious privileged account cannot erase its own tracks',
      'To make the logs smaller',
      'To improve query performance',
      'Because the database refuses to start otherwise',
    ],
    correct: 0,
    explanation:
      'Audit value depends on integrity. Logs an insider can edit prove nothing, which is why they are shipped to a separate, append-only system.',
  },
  {
    id: 'dsplus-q-041',
    domain: 4,
    topic: 'Compliance',
    question:
      'An organization must ensure personal data is deleted upon request. Which capability is required?',
    options: [
      'Knowing where all copies of that data reside, including backups and replicas',
      'A faster CPU',
      'More database indexes',
      'A larger transaction log',
    ],
    correct: 0,
    explanation:
      'Deletion rights are impossible to honor without data lineage and inventory. Copies in replicas, warehouses, exports, and backups are what make these requests hard in practice.',
  },
  {
    id: 'dsplus-q-042',
    domain: 4,
    topic: 'Account Security',
    question:
      'What is the risk of an application connecting to its database with an administrative account?',
    options: [
      'A single injection flaw or credential leak yields total control of the database',
      'Queries will run more slowly',
      'Indexes cannot be created',
      'Backups will fail',
    ],
    correct: 0,
    explanation:
      'The application account defines the blast radius of any application-layer compromise. Scoping it to exactly what the application needs limits what an attacker can do with it.',
  },

  // ─── DOMAIN 5: BUSINESS CONTINUITY ───────────────────────────────────────

  {
    id: 'dsplus-q-043',
    domain: 5,
    topic: 'Backup Types',
    question:
      'Which backup type allows point-in-time recovery when combined with a full backup?',
    options: [
      'Transaction log backups',
      'Index rebuild scripts',
      'Schema-only exports',
      'Statistics snapshots',
    ],
    correct: 0,
    explanation:
      'Log backups capture every committed change in sequence, so a restore can roll forward to a chosen moment — for example just before an accidental deletion.',
  },
  {
    id: 'dsplus-q-044',
    domain: 5,
    topic: 'Recovery Metrics',
    question:
      'A business accepts losing at most 15 minutes of data. Which metric does this define, and what does it require?',
    options: [
      'RPO — backups or log shipping at least every 15 minutes',
      'RTO — restoration completed within 15 minutes',
      'MTTR — repairs completed within 15 minutes',
      'SLA — 15 minutes of downtime per year',
    ],
    correct: 0,
    explanation:
      'Recovery Point Objective describes tolerable data loss, and the backup or replication interval must be at least as frequent as the RPO.',
  },
  {
    id: 'dsplus-q-045',
    domain: 5,
    topic: 'High Availability',
    question:
      'What is the key difference between high availability and disaster recovery?',
    options: [
      'HA keeps a service running through component failures; DR restores it after a major event',
      'They are the same thing',
      'HA applies only to backups',
      'DR applies only to networking',
    ],
    correct: 0,
    explanation:
      'HA is about avoiding downtime from localized failures through redundancy and failover. DR is about recovering after something takes out the whole environment.',
  },
  {
    id: 'dsplus-q-046',
    domain: 5,
    topic: 'Replication',
    question:
      'What is the primary trade-off of synchronous replication compared with asynchronous?',
    options: [
      'Zero data loss at the cost of write latency and sensitivity to network delay',
      'Lower cost but higher data loss',
      'Faster writes with guaranteed consistency',
      'It requires no network connection',
    ],
    correct: 0,
    explanation:
      'Synchronous replication acknowledges a commit only after the replica confirms, giving zero data loss but tying write performance to the link. Asynchronous is faster but can lose recent transactions.',
  },
  {
    id: 'dsplus-q-047',
    domain: 5,
    topic: 'Testing',
    question:
      'Why must restores be tested rather than simply scheduled?',
    options: [
      'A backup that cannot be restored provides no protection, and failures are only discovered during a real incident',
      'Testing makes backups run faster',
      'It is required to compress backups',
      'Testing reduces storage cost',
    ],
    correct: 0,
    explanation:
      'Corrupted files, missing keys, incomplete chains, and undocumented steps all surface only on restore. An untested backup is an assumption, not a recovery capability.',
  },
  {
    id: 'dsplus-q-048',
    domain: 5,
    topic: 'Retention',
    question:
      'What primarily determines how long database backups should be retained?',
    options: [
      'Regulatory, contractual, and business recovery requirements',
      'The amount of free disk space',
      'The database vendor’s default setting',
      'The number of database administrators',
    ],
    correct: 0,
    explanation:
      'Retention is a policy decision driven by compliance obligations and how far back the business may need to recover. Storage capacity constrains implementation but should not set policy.',
  },
  {
    id: 'dsplus-q-049',
    domain: 5,
    topic: 'Failover',
    question:
      'After failing over to a standby database, what step is frequently overlooked in planning?',
    options: [
      'Planning and rehearsing the failback to the primary',
      'Turning off the application',
      'Deleting the standby',
      'Renaming the database',
    ],
    correct: 0,
    explanation:
      'Organizations rehearse failover and forget failback, which involves resynchronizing data accumulated on the standby and is often the more delicate operation.',
  },
];

/**
 * Returns all questions for a specific domain (1-5).
 * @param {number} domainId
 * @returns {Array}
 */
export function getQuestionsByDomain(domainId) {
  return questions.filter((q) => q.domain === domainId);
}

/**
 * Returns a random selection of questions, optionally filtered by domain.
 * @param {number|null} domainId - Pass null for all domains
 * @param {number} count - Number of questions to return
 * @returns {Array}
 */
export function getRandomQuestions(domainId, count) {
  const pool = domainId ? getQuestionsByDomain(domainId) : [...questions];
  const shuffled = pool.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}
