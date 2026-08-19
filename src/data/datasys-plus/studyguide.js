// DataSys+ DS0-001 Study Guide
// Guides covering all 5 exam domains

export const studyGuide = [
  {
    id: 'dsplus-sg1',
    domain: 1,
    title: 'Database Fundamentals',
    summary:
      'Relational structure and keys, the normal forms and when to break them, the SQL constructs the exam expects you to read fluently, and the consistency models behind relational and NoSQL systems.',
    topics: [
      {
        id: 'dsplus-sg1-1',
        title: 'Structure, Keys & Relationships',
        content: `A relational database stores data in **tables** of rows (records) and columns (fields), linked by keys.

| Key type | Purpose |
|----------|---------|
| Primary key | Uniquely identifies a row; never null, never duplicated |
| Foreign key | References a primary key elsewhere, creating the relationship |
| Composite key | Multiple columns forming one primary key |
| Surrogate key | System-generated identifier with no business meaning |
| Natural key | A real-world value used as the identifier |

**Relationship cardinality**
- **One-to-one** — often a table split for security or sparse columns
- **One-to-many** — the most common; the foreign key lives on the "many" side
- **Many-to-many** — requires a **junction table** holding foreign keys to both sides

**Referential integrity** prevents orphans by rejecting a foreign key value with no matching parent, enforced on insert, update, and delete.

**Key exam points:**
- **Primary key = unique AND not null**; UNIQUE alone usually permits a null
- **Many-to-many always needs a junction table**
- A **surrogate key** avoids the pain of a natural key that later needs to change`,
      },
      {
        id: 'dsplus-sg1-2',
        title: 'Normalization & Denormalization',
        content: `Normalization removes redundancy so a fact is stored once.

| Form | Requirement |
|------|-------------|
| 1NF | Atomic values, no repeating groups |
| 2NF | 1NF plus no partial dependency on part of a composite key |
| 3NF | 2NF plus no transitive dependency between non-key attributes |
| BCNF | Stricter 3NF, every determinant is a candidate key |

3NF is the usual target for transactional systems.

**Denormalization** deliberately reintroduces redundancy to cut joins:
- Chosen for **read-heavy reporting and analytics**
- Costs storage and complicates writes, since a value now lives in several places
- A legitimate design decision, not a failure — provided it is intentional

**Key exam points:**
- **2NF removes partial dependencies, 3NF removes transitive ones** — the distinction is tested directly
- **Denormalize for read performance**, and accept the write-side cost knowingly
- Over-normalized reporting schemas produce join-heavy queries that will not scale`,
      },
      {
        id: 'dsplus-sg1-3',
        title: 'SQL Essentials',
        content: `**Statement categories**

| Category | Statements | Purpose |
|----------|-----------|---------|
| DDL | CREATE, ALTER, DROP, TRUNCATE | Define structure |
| DML | SELECT, INSERT, UPDATE, DELETE | Work with data |
| DCL | GRANT, REVOKE | Control permissions |
| TCL | COMMIT, ROLLBACK, SAVEPOINT | Manage transactions |

**JOIN behavior**

| Join | Returns |
|------|---------|
| INNER | Only rows matching in both tables |
| LEFT OUTER | All left rows, nulls where no right match |
| RIGHT OUTER | All right rows, nulls where no left match |
| FULL OUTER | Everything from both sides |
| CROSS | Every combination — usually accidental |

**Clause order matters:** SELECT … FROM … WHERE … GROUP BY … HAVING … ORDER BY

**WHERE filters rows before grouping; HAVING filters groups after.**

**Key exam points:**
- **DELETE is DML and can be rolled back; TRUNCATE is DDL** and typically cannot
- **HAVING is for aggregates**, WHERE is for individual rows
- **DECIMAL for money**, never FLOAT — approximate types lose cents`,
      },
      {
        id: 'dsplus-sg1-4',
        title: 'ACID, BASE & Database Models',
        content: `**ACID** — the transactional guarantees of relational systems:
- **Atomicity** — all or nothing
- **Consistency** — constraints hold before and after
- **Isolation** — concurrent transactions do not corrupt each other
- **Durability** — committed data survives a crash

**BASE** — the relaxed model many distributed systems adopt: **B**asically **A**vailable, **S**oft state, **E**ventual consistency. Availability and scale are prioritized over immediate consistency.

**Model selection**

| Model | Best for |
|-------|----------|
| Relational | Structured data, strong consistency, complex relationships |
| Document | Semi-structured records with varying shape |
| Key-value | Simple, extremely fast lookups (caching, sessions) |
| Columnar | Analytical aggregates over huge row counts |
| Graph | Highly interconnected data where traversal dominates |

**OLTP vs. OLAP:** OLTP handles many small concurrent transactions on normalized schemas. OLAP runs large analytical queries, usually denormalized or columnar.

**Key exam points:**
- **Atomicity = all or nothing; durability = survives a crash** — the two most confused properties
- **Graph databases win when relationships are the query**
- **Columnar storage suits aggregates**; row storage suits whole-record access`,
      },
    ],
  },

  {
    id: 'dsplus-sg2',
    domain: 2,
    title: 'Database Deployment',
    summary:
      'Sizing and installing a database, choosing between self-managed and DBaaS, moving data with ETL and ELT, and keeping environments separated safely.',
    topics: [
      {
        id: 'dsplus-sg2-1',
        title: 'Planning & Installation',
        content: `**Sizing** must account for more than table data:
- **Data files** — current volume plus projected growth
- **Indexes** — frequently a large fraction of data size
- **Transaction logs** — a full log volume stops writes entirely
- **Temp space** — sorts, hashes, and large intermediate result sets
- **Backup storage** — retention multiplies this considerably

**Key configuration choices**
- **Buffer pool / shared buffers** — memory for caching pages; among the highest-impact settings
- **Character set and collation** — painful to change later; decide up front
- **Recovery model** — determines whether point-in-time recovery is possible
- **Max connections** — too high exhausts memory, too low blocks the application

**Key exam points:**
- **Logs and indexes are not an afterthought** in sizing
- **Collation changes after the fact are disruptive** — get it right at creation
- Memory allocated to the **buffer pool** usually buys more than faster disks`,
      },
      {
        id: 'dsplus-sg2-2',
        title: 'Deployment Models',
        content: `| Model | Provider handles | You handle |
|-------|------------------|------------|
| On-premises | Nothing | Everything |
| IaaS-hosted | Hardware, hypervisor | OS, database, backups, HA |
| DBaaS (managed) | OS, patching, backups, HA plumbing | Schema, tuning, access control, data |

**DBaaS shifts operational toil, not accountability.** Schema design, query performance, permission management, and data protection remain yours in every model.

**Additional considerations**
- **Licensing** — per-core models can dominate the cost of a large deployment
- **Vendor lock-in** — proprietary extensions raise the cost of leaving
- **Data residency** — the region a managed database runs in determines applicable law

**Key exam points:**
- **Managed does not mean secured** — access control and classification stay with the customer
- **DBaaS reduces staffing needs, not design responsibility**
- Region selection is the control for **residency and sovereignty** requirements`,
      },
      {
        id: 'dsplus-sg2-3',
        title: 'ETL, ELT & Data Movement',
        content: `**ETL** — Extract, **Transform**, Load. Data is cleansed and reshaped before it lands, so the target only ever holds conformed data.

**ELT** — Extract, Load, **Transform**. Raw data lands first and is transformed in place using the target's compute. Preserves the raw source and suits modern warehouses.

**Transformation work typically includes:**
- Cleansing — nulls, malformed values, outliers
- Standardization — date formats, units, casing
- Deduplication
- Type conversion
- Applying business rules and derived columns

**Bulk load performance**
- Drop or disable **non-essential indexes**, then rebuild after loading
- **Batch commits** rather than committing every row
- Load **in key order** where the target supports it
- Temporarily relax constraints only when the data is independently validated

**Key exam points:**
- **ETL transforms before loading; ELT transforms after** — that is the whole distinction
- **Index maintenance is what makes row-by-row bulk loads slow**
- Always validate with **row counts and checksums** after a load`,
      },
      {
        id: 'dsplus-sg2-4',
        title: 'Environments & Change Management',
        content: `**Environment separation**

| Environment | Purpose | Data |
|-------------|---------|------|
| Development | Building features | Masked or synthetic |
| Test / QA | Verification | Masked, representative volume |
| Staging | Production rehearsal | Masked, production-like |
| Production | Live service | Real, fully controlled |

**Production data copied downward must be masked.** Lower environments have broader access and weaker controls, which is exactly why they are a common breach path.

**Schema change management**
- Treat schema changes as **version-controlled migration scripts** applied in order
- Every change needs a **rollback script**, written before the change is applied
- Rehearse in staging against **production-like volume** — a migration that is instant on 1,000 rows may lock a table for an hour on 100 million
- Take a **verified backup** immediately before applying to production

**Key exam points:**
- **Mask production data before it leaves production**
- **A rollback plan is part of the change**, not a contingency to improvise
- Test migrations at **realistic data volume**, not on a token dataset`,
      },
    ],
  },

  {
    id: 'dsplus-sg3',
    domain: 3,
    title: 'Management & Maintenance',
    summary:
      'The largest domain at 26%: indexing strategy, query optimization, concurrency and locking, routine maintenance, and the monitoring that tells you which of these needs attention.',
    topics: [
      {
        id: 'dsplus-sg3-1',
        title: 'Indexing Strategy',
        content: `An index is a trade: **faster reads, slower writes, more storage.** Every insert, update, and delete must maintain every affected index.

| Index type | Notes |
|------------|-------|
| Clustered | Defines physical row order — one per table |
| Non-clustered | Separate structure pointing back to rows |
| Composite | Multiple columns; **column order matters** |
| Unique | Enforces uniqueness as well as accelerating lookups |
| Covering | Contains every column a query needs, avoiding lookups |

**Cardinality** — the number of distinct values — determines whether an index helps. A column with two distinct values across ten million rows rarely narrows the search enough to beat a scan.

**Composite index column order** follows the leftmost-prefix rule: an index on (last_name, first_name) helps queries filtering on last_name, but not ones filtering only on first_name.

**Key exam points:**
- **Unused indexes are pure cost** — they slow writes and consume space for nothing
- **Low cardinality often defeats an index**
- In composite indexes, **the leading column governs usefulness**`,
      },
      {
        id: 'dsplus-sg3-2',
        title: 'Query Optimization',
        content: `Start with the **execution plan**, which shows the engine's intended join order, access methods, and cost estimates.

**Warning signs in a plan**
- A **full table scan** where a seek was expected — often a missing index or a function applied to an indexed column
- A **large gap between estimated and actual rows** — usually stale statistics
- **Expensive sorts** — an index in the required order may eliminate them
- **Nested loops over huge inputs** where a hash join would be cheaper

**Common causes of sudden slowdowns**
- **Stale statistics** after significant data growth — the standard first check
- **Index fragmentation**
- **Parameter-sensitive plans** cached from an atypical execution
- Data volume simply crossing a threshold where the old plan stops being viable

**Query hygiene**
- Select only the columns needed; SELECT * defeats covering indexes
- Avoid wrapping indexed columns in functions in the WHERE clause
- Filter as early and as selectively as possible

**Key exam points:**
- **Update statistics first** when a previously fast query degrades
- **A function on an indexed column usually prevents the index being used**
- The execution plan is the evidence; guessing at tuning wastes time`,
      },
      {
        id: 'dsplus-sg3-3',
        title: 'Concurrency, Locking & Isolation',
        content: `**Isolation levels and what they prevent**

| Level | Dirty read | Non-repeatable read | Phantom read |
|-------|-----------|--------------------|--------------|
| Read uncommitted | Possible | Possible | Possible |
| Read committed | Prevented | Possible | Possible |
| Repeatable read | Prevented | Prevented | Possible |
| Serializable | Prevented | Prevented | Prevented |

Higher isolation means fewer anomalies and more blocking. **Read committed** is the common default.

**The anomalies**
- **Dirty read** — reading data another transaction has not committed
- **Non-repeatable read** — re-reading a row and finding it changed
- **Phantom read** — re-running a query and finding new rows

**Deadlocks** occur when transactions each hold a lock the other needs. The engine detects the cycle and terminates a victim. Reduce them by:
- Accessing objects in a **consistent order**
- Keeping transactions **short**
- Avoiding user interaction inside a transaction

**Key exam points:**
- Know which anomaly each level prevents — this table is tested directly
- **Deadlock victims are chosen by the engine**; the application must be prepared to retry
- **Long transactions cause blocking and prevent log truncation**`,
      },
      {
        id: 'dsplus-sg3-4',
        title: 'Maintenance & Monitoring',
        content: `**Routine maintenance**

| Task | Why |
|------|-----|
| Update statistics | Keeps optimizer estimates accurate |
| Rebuild / reorganize indexes | Reverses fragmentation |
| Integrity checks | Detects corruption before it spreads into backups |
| Backup verification | Proves the backup is restorable |
| Purge / archive old data | Controls growth and keeps queries fast |

Automate these and **alert on failure** — a maintenance job that silently stops is worse than none, because it creates false confidence.

**Metrics worth watching**
- **Buffer cache hit ratio** — falling means more disk reads
- **Blocking and deadlock counts**
- **Transaction log size and growth rate**
- **Long-running queries**
- **Disk latency and queue depth**
- **Connection counts** against the configured maximum

**Transaction log growth** is a frequent incident: the log cannot truncate while a transaction stays open or, under full recovery, until a log backup runs. Left alone it fills the volume and stops all writes.

**Key exam points:**
- **Runaway log growth = open transaction or missing log backups**
- **Verify backups**; scheduling them is not the same as having them
- **Integrity checks catch corruption early**, before it is backed up over the good copies`,
      },
    ],
  },

  {
    id: 'dsplus-sg4',
    domain: 4,
    title: 'Data & Database Security',
    summary:
      'Access control that scales, defending against injection, encryption for data at rest and in transit, privacy techniques such as masking and tokenization, and audit trails that hold up.',
    topics: [
      {
        id: 'dsplus-sg4-1',
        title: 'Access Control',
        content: `**Least privilege** governs everything here: grant the narrowest right that satisfies the requirement.

- An analyst needing one table gets **SELECT on that table**, or better, on a **view** exposing only the necessary columns and rows
- **Application accounts** must be scoped to exactly what the application does — they define the blast radius of any application compromise
- **Administrative rights** should be temporary and audited rather than standing

**Roles over individual grants**
- Permissions attach to roles; users are assigned roles
- Grants stay consistent across people doing the same job
- Removing someone from a role revokes everything it carried, which makes offboarding reliable

**Views as a security boundary** let you expose a subset of a table without duplicating data or granting access to the underlying object.

**Key exam points:**
- **An application connecting as an admin turns any injection flaw into total compromise**
- **Roles scale; per-user grants drift** and become impossible to audit
- Shared accounts destroy accountability — every action must trace to a person`,
      },
      {
        id: 'dsplus-sg4-2',
        title: 'SQL Injection & Application Threats',
        content: `**SQL injection** occurs when user input is concatenated into a query and interpreted as code.

**The fix is parameterization.** Prepared statements send the query structure and the values separately, so input can never change the statement's meaning.

**Defense in depth around it**
- **Input validation** — necessary, but not sufficient on its own
- **Least-privilege application accounts** — limits what a successful injection achieves
- **Stored procedures** — helpful only if they do not themselves build dynamic SQL from input
- **Generic error messages** — detailed database errors hand attackers a map
- **Web application firewall** — catches common patterns, not a substitute for fixing the code

**Related risks**
- **Excessive result exposure** — an endpoint returning far more data than the UI displays
- **Credentials in source control** — persist in history long after removal
- **Verbose logging** — secrets and personal data leaking into log files

**Key exam points:**
- **Parameterized queries are the answer** — escaping and blocklists are not equivalent
- **Least privilege limits the damage** when prevention fails
- Detailed database errors returned to users are an information disclosure issue`,
      },
      {
        id: 'dsplus-sg4-3',
        title: 'Encryption & Privacy Techniques',
        content: `**Encryption at rest** (transparent data encryption) protects data files and backups against stolen or improperly decommissioned media.

**Encryption in transit** (TLS) protects the client-server connection.

These address **different threats** and are not substitutes: an attacker holding a stolen disk never touches the network.

**Column-level encryption** protects specific sensitive fields even from users who can read the rest of the table — at the cost of losing index usefulness on those columns.

**Backups must be encrypted too.** They leave the secured environment for tapes, offsite storage, and cloud buckets, frequently outside the controls protecting production.

**Privacy techniques**

| Technique | What it does |
|-----------|--------------|
| Static masking | Permanently replaces values in a copied dataset |
| Dynamic masking | Hides values at query time based on the requester |
| Tokenization | Substitutes tokens with no relation to the original; mapping held in a vault |
| Anonymization | Removes identifying information irreversibly |
| Pseudonymization | Replaces identifiers, with re-identification possible via separate data |

**Key exam points:**
- **At rest protects media; in transit protects the connection** — you need both
- **Encrypting production but not backups** is a widely exploited gap
- **Tokenization keeps the mapping in a separate vault** — that separation is the control`,
      },
      {
        id: 'dsplus-sg4-4',
        title: 'Classification, Auditing & Compliance',
        content: `**Data classification** — public, internal, confidential, restricted — drives which controls, retention, and handling each dataset needs. Without it, protection is applied uniformly and therefore incorrectly: too much on trivia, too little on what matters.

**Audit logging** should capture:
- Authentication successes and failures
- Permission and role changes
- Schema changes
- Access to classified data
- Administrative actions

**Audit integrity is the whole point.** Logs must be written where administrators cannot alter them — otherwise a compromised or malicious privileged account simply erases its own tracks. Ship them to an append-only, separately controlled system.

**Compliance capabilities that depend on good data management**
- **Data lineage** — knowing where data came from and where copies went
- **Right to deletion** — impossible without an inventory that includes replicas, warehouses, exports, and backups
- **Retention limits** — some regulations require deleting data after a period, not just keeping it
- **Separation of duties** — no one person both makes and conceals a change

**Key exam points:**
- **Classification precedes control selection** — it is the input, not paperwork
- **Audit logs an administrator can edit are worthless**
- **Deletion requests fail on forgotten copies**, which is why lineage matters`,
      },
    ],
  },

  {
    id: 'dsplus-sg5',
    domain: 5,
    title: 'Business Continuity',
    summary:
      'Backup strategies and point-in-time recovery, the metrics that drive design, replication and high availability, and the testing that turns a plan into a capability.',
    topics: [
      {
        id: 'dsplus-sg5-1',
        title: 'Backup Strategies',
        content: `| Type | Captures | Restore requires |
|------|----------|------------------|
| Full | Everything | Just the full |
| Differential | Changes since last full | Full + latest differential |
| Incremental | Changes since last backup of any type | Full + every incremental in order |
| Transaction log | Committed changes in sequence | Full + log chain |
| Snapshot | Point-in-time image | The snapshot itself |

**Transaction log backups enable point-in-time recovery** — restoring to the moment just before an accidental DELETE rather than only to last night's full backup. This is the capability that separates a real database backup strategy from file copies.

**The chain matters.** A missing log backup breaks recovery at that point, no matter how many later backups exist.

**3-2-1**: three copies, two media types, one offsite — and offsite copies must be encrypted.

**Key exam points:**
- **Point-in-time recovery requires log backups** and an unbroken chain
- **A snapshot on the same storage is not a backup** — it shares the failure domain
- Differential restores are simpler; incremental restores are faster to create but fragile`,
      },
      {
        id: 'dsplus-sg5-2',
        title: 'RPO, RTO & Planning',
        content: `**RPO — Recovery Point Objective:** how much data the business can afford to lose, expressed in time. It sets the **backup or replication frequency**. A 15-minute RPO requires capturing changes at least every 15 minutes.

**RTO — Recovery Time Objective:** how long restoration may take. It sets the **recovery architecture** — a four-hour RTO on a large database rules out restoring from tape.

These are **business decisions**, not technical ones. The role of the data professional is to state honestly what each target costs and what the current design actually delivers.

**Related metrics**
- **MTTR** — mean time to repair
- **MTBF** — mean time between failures
- **SLA** — the commitment made to the business or customer

**Key exam points:**
- **RPO = data loss, RTO = downtime** — the single most tested pairing in this domain
- **RPO drives backup frequency; RTO drives recovery design**
- A stated RPO the backup schedule cannot meet is a **finding**, and should be raised rather than quietly accepted`,
      },
      {
        id: 'dsplus-sg5-3',
        title: 'High Availability & Replication',
        content: `**HA keeps the service running through component failure. DR restores it after an event takes out the environment.** They solve different problems and neither replaces the other.

**Replication modes**

| Mode | Data loss | Trade-off |
|------|-----------|-----------|
| Synchronous | None | Write latency tied to the link; distance sensitive |
| Asynchronous | Recent transactions possible | Better performance and distance tolerance |

**Common HA patterns**
- **Failover clustering** — a standby takes over the workload automatically
- **Availability groups / replica sets** — multiple synchronized copies, often with readable secondaries
- **Log shipping** — periodic log restore to a warm standby; simple and cheap, higher RPO
- **Read replicas** — offload reporting from the primary

**Failback** — returning to the primary after recovery — requires resynchronizing everything written while on the standby. It is routinely under-rehearsed and is often the harder operation.

**Key exam points:**
- **Synchronous = zero data loss but latency cost; asynchronous = better performance but possible loss**
- **HA is not backup** — replication faithfully copies an accidental DELETE to every replica
- **Plan and rehearse failback**, not just failover`,
      },
      {
        id: 'dsplus-sg5-4',
        title: 'Testing, Retention & Documentation',
        content: `**Restore testing is the only proof a backup works.** Scheduling backups is not the same as having them. What surfaces only during a real restore:
- Corrupted or incomplete backup files
- Missing encryption keys — an encrypted backup with a lost key is data loss
- Broken log chains
- Undocumented steps only one person knew
- Restores that take far longer than the RTO allows

Test on a **realistic schedule**, restore to a **separate environment**, and **time it** so the measured duration can be compared against the stated RTO.

**Retention** is set by regulatory, contractual, and business recovery requirements — never by available disk space. Some regulations also require **deleting** data after a period, so retention has an upper bound as well as a lower one.

**Documentation that must exist before an incident**
- Step-by-step restore procedures a second person can follow
- Where backups live and how to access them
- Where encryption keys are held and who can retrieve them
- Contact and escalation paths
- Dependency order for bringing systems back

**Key exam points:**
- **An untested backup is an assumption**, not a recovery capability
- **A lost encryption key makes an encrypted backup useless** — key custody is part of the plan
- Documentation must be usable by **someone other than its author**, at 3am`,
      },
    ],
  },
];
