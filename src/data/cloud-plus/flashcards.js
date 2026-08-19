// Cloud+ CV0-004 Flashcards
// Domains: 1=Cloud Architecture, 2=Deployment, 3=Operations,
//          4=Security, 5=DevOps Fundamentals

export const flashcards = [
  // ─── DOMAIN 1: CLOUD ARCHITECTURE ────────────────────────────────────────

  {
    id: 'cloud-fc-001',
    domain: 1,
    term: 'IaaS',
    definition:
      'Infrastructure as a Service — the provider supplies compute, storage, and networking; the customer manages the guest OS, middleware, applications, and data. Most control, most responsibility.',
  },
  {
    id: 'cloud-fc-002',
    domain: 1,
    term: 'PaaS',
    definition:
      'Platform as a Service — the provider manages the OS, runtime, and patching; the customer supplies only application code and data. Removes server maintenance at the cost of some flexibility.',
  },
  {
    id: 'cloud-fc-003',
    domain: 1,
    term: 'SaaS',
    definition:
      'Software as a Service — the provider manages everything; the customer consumes the application and controls only their data and user configuration.',
  },
  {
    id: 'cloud-fc-004',
    domain: 1,
    term: 'Shared responsibility model',
    definition:
      'Division of security duties between provider and customer. The provider secures the cloud (facilities, hardware, hypervisor); the customer secures what they put in it. The line moves with the service model.',
  },
  {
    id: 'cloud-fc-005',
    domain: 1,
    term: 'Public cloud',
    definition:
      'Infrastructure owned by a provider and shared among many tenants. Lowest capital cost, highest elasticity, least physical control.',
  },
  {
    id: 'cloud-fc-006',
    domain: 1,
    term: 'Private cloud',
    definition:
      'Cloud infrastructure dedicated to a single organization, on-premises or hosted. Chosen for regulatory, performance, or control requirements.',
  },
  {
    id: 'cloud-fc-007',
    domain: 1,
    term: 'Hybrid cloud',
    definition:
      'Private and public infrastructure connected so workloads and data can move between them. The usual answer when regulated data must stay in-house while other workloads scale publicly.',
  },
  {
    id: 'cloud-fc-008',
    domain: 1,
    term: 'Community cloud',
    definition:
      'Environment shared by organizations with common requirements — often regulatory — splitting cost while restricting access to that community.',
  },
  {
    id: 'cloud-fc-009',
    domain: 1,
    term: 'Multicloud',
    definition:
      'Using services from more than one cloud provider, typically to avoid vendor lock-in or to use the best service from each. Adds integration and skills overhead.',
  },
  {
    id: 'cloud-fc-010',
    domain: 1,
    term: 'Vertical vs. horizontal scaling',
    definition:
      'Vertical (scale up) adds CPU/memory to an existing instance and has a ceiling. Horizontal (scale out) adds more instances and generally gives better fault tolerance.',
  },
  {
    id: 'cloud-fc-011',
    domain: 1,
    term: 'Elasticity vs. scalability',
    definition:
      'Scalability is the ability to grow to meet demand. Elasticity is scaling automatically in both directions as demand changes, including scaling back down to save cost.',
  },
  {
    id: 'cloud-fc-012',
    domain: 1,
    term: 'Cloud bursting',
    definition:
      'Running a workload in a private cloud and overflowing into the public cloud only during demand spikes, paying for peak capacity only when it is used.',
  },
  {
    id: 'cloud-fc-013',
    domain: 1,
    term: 'Region vs. availability zone',
    definition:
      'A region is a geographic location. An availability zone is an isolated failure domain within a region. Spreading across zones survives a datacenter failure; spreading across regions survives a regional one.',
  },
  {
    id: 'cloud-fc-014',
    domain: 1,
    term: 'Block storage',
    definition:
      'Raw volumes the OS formats and controls directly. Low latency and random access — the right choice for databases and boot volumes.',
  },
  {
    id: 'cloud-fc-015',
    domain: 1,
    term: 'Object storage',
    definition:
      'Data stored as objects with metadata and unique IDs, accessed over HTTP APIs. Near-unlimited scale and high durability; the standard choice for media, backups, and static assets.',
  },
  {
    id: 'cloud-fc-016',
    domain: 1,
    term: 'File storage',
    definition:
      'Shared hierarchical file systems accessed over protocols such as NFS or SMB. Suits applications expecting a traditional mounted file share.',
  },
  {
    id: 'cloud-fc-017',
    domain: 1,
    term: 'Five essential cloud characteristics',
    definition:
      'On-demand self-service, broad network access, resource pooling, rapid elasticity, and measured service (metered, pay-per-use billing).',
  },
  {
    id: 'cloud-fc-018',
    domain: 1,
    term: 'VPC / virtual network',
    definition:
      'A logically isolated network inside the provider’s infrastructure where the customer defines address space, subnets, routing, and gateways.',
  },

  // ─── DOMAIN 2: DEPLOYMENT ────────────────────────────────────────────────

  {
    id: 'cloud-fc-019',
    domain: 2,
    term: 'Rehosting (lift and shift)',
    definition:
      'Moving a workload to the cloud essentially unchanged. Fastest migration path, lowest risk, fewest cloud-native benefits.',
  },
  {
    id: 'cloud-fc-020',
    domain: 2,
    term: 'Replatforming',
    definition:
      'Making modest optimizations during migration — for example moving to a managed database — without rewriting the application.',
  },
  {
    id: 'cloud-fc-021',
    domain: 2,
    term: 'Refactoring / re-architecting',
    definition:
      'Rewriting an application to be cloud-native, often as microservices. Highest effort and risk, greatest long-term benefit.',
  },
  {
    id: 'cloud-fc-022',
    domain: 2,
    term: 'Type 1 vs. Type 2 hypervisor',
    definition:
      'Type 1 (bare metal) runs directly on hardware — better performance, smaller attack surface, used in datacenters. Type 2 (hosted) runs as an application on a host OS, typical for desktops and labs.',
  },
  {
    id: 'cloud-fc-023',
    domain: 2,
    term: 'Container vs. virtual machine',
    definition:
      'Containers share the host kernel and package only the app and its dependencies — lightweight, fast to start. VMs each run a full guest OS — heavier, but stronger isolation.',
  },
  {
    id: 'cloud-fc-024',
    domain: 2,
    term: 'Golden image',
    definition:
      'A standardized, hardened, pre-configured template used to deploy instances consistently. Eliminates configuration drift at deployment but must itself be maintained and patched.',
  },
  {
    id: 'cloud-fc-025',
    domain: 2,
    term: 'Blue-green deployment',
    definition:
      'Two complete environments run side by side; traffic cuts over to the new one after validation. Rollback is as simple as switching traffic back.',
  },
  {
    id: 'cloud-fc-026',
    domain: 2,
    term: 'Canary deployment',
    definition:
      'Releasing a change to a small subset of users first and monitoring before wider rollout, limiting the blast radius of a bad release.',
  },
  {
    id: 'cloud-fc-027',
    domain: 2,
    term: 'Rolling deployment',
    definition:
      'Updating instances in batches so the service stays available throughout. Slower to complete, and two versions run simultaneously during the rollout.',
  },
  {
    id: 'cloud-fc-028',
    domain: 2,
    term: 'Load balancer',
    definition:
      'Distributes incoming requests across healthy backends, removing failed members from rotation. Provides both scale and fault tolerance.',
  },
  {
    id: 'cloud-fc-029',
    domain: 2,
    term: 'NAT gateway',
    definition:
      'Allows instances in a private subnet to initiate outbound connections (for updates, API calls) while blocking inbound connections from the internet.',
  },
  {
    id: 'cloud-fc-030',
    domain: 2,
    term: 'RAID levels',
    definition:
      'RAID 0 = striping, speed, no redundancy. RAID 1 = mirroring, 50% capacity. RAID 5 = striping with distributed parity, survives one disk. RAID 6 = survives two. RAID 10 = mirrored stripes, best performance plus redundancy.',
  },
  {
    id: 'cloud-fc-031',
    domain: 2,
    term: 'Performance baseline',
    definition:
      'Documented normal CPU, memory, storage, and network usage. Required before migration to size the target correctly and to prove performance afterward.',
  },
  {
    id: 'cloud-fc-032',
    domain: 2,
    term: 'Live vs. cold migration',
    definition:
      'A live migration keeps the source running while data synchronizes, leaving a brief cutover. A cold migration requires the source to be offline for the duration.',
  },

  // ─── DOMAIN 3: OPERATIONS ────────────────────────────────────────────────

  {
    id: 'cloud-fc-033',
    domain: 3,
    term: 'RPO (Recovery Point Objective)',
    definition:
      'Maximum acceptable data loss, expressed as time. A one-hour RPO requires backup or replication at least hourly. Answers "how much data can we lose?"',
  },
  {
    id: 'cloud-fc-034',
    domain: 3,
    term: 'RTO (Recovery Time Objective)',
    definition:
      'Maximum acceptable time to restore service after an outage. Answers "how long can we be down?"',
  },
  {
    id: 'cloud-fc-035',
    domain: 3,
    term: 'Full backup',
    definition:
      'Complete copy of all data. Slowest to create and largest to store, but fastest and simplest to restore from.',
  },
  {
    id: 'cloud-fc-036',
    domain: 3,
    term: 'Incremental backup',
    definition:
      'Captures only data changed since the last backup of any type. Fastest to create, smallest, but restore requires the full plus every subsequent incremental in order.',
  },
  {
    id: 'cloud-fc-037',
    domain: 3,
    term: 'Differential backup',
    definition:
      'Captures everything changed since the last full backup. Grows each day, but restore needs only the full plus the most recent differential.',
  },
  {
    id: 'cloud-fc-038',
    domain: 3,
    term: 'Snapshot',
    definition:
      'Point-in-time image of a volume or VM. Fast to create and useful before risky changes, but usually stored alongside the source — not a substitute for real backups.',
  },
  {
    id: 'cloud-fc-039',
    domain: 3,
    term: 'Hot, warm, and cold sites',
    definition:
      'Hot — fully provisioned with current data, near-instant failover, highest cost. Warm — hardware ready, data must be restored. Cold — space and power only, cheapest, slowest.',
  },
  {
    id: 'cloud-fc-040',
    domain: 3,
    term: 'Infrastructure as code (IaC)',
    definition:
      'Defining infrastructure declaratively in version-controlled files so environments are repeatable, reviewable, and free of manual drift.',
  },
  {
    id: 'cloud-fc-041',
    domain: 3,
    term: 'Configuration drift',
    definition:
      'Gradual divergence of systems from their intended configuration due to manual changes. The core problem configuration management and immutable infrastructure solve.',
  },
  {
    id: 'cloud-fc-042',
    domain: 3,
    term: 'Alert fatigue',
    definition:
      'Desensitization caused by too many non-actionable alerts, leading responders to ignore real ones. Fixed by tuning thresholds and alerting on actionable symptoms.',
  },
  {
    id: 'cloud-fc-043',
    domain: 3,
    term: 'Orphaned resources',
    definition:
      'Provisioned but unused resources still generating charges — unattached volumes, idle instances, forgotten snapshots, unreleased IPs. The most common cause of unexplained bill growth.',
  },
  {
    id: 'cloud-fc-044',
    domain: 3,
    term: 'Reserved vs. spot vs. on-demand',
    definition:
      'On-demand — pay as you go, no commitment, highest rate. Reserved — committed term for a large discount, best for steady workloads. Spot — spare capacity at deep discount, reclaimable at short notice.',
  },
  {
    id: 'cloud-fc-045',
    domain: 3,
    term: 'Thin vs. thick provisioning',
    definition:
      'Thin provisioning allocates storage on demand, overcommitting capacity for efficiency. Thick provisioning reserves the full amount up front, avoiding the risk of running out unexpectedly.',
  },

  // ─── DOMAIN 4: SECURITY ──────────────────────────────────────────────────

  {
    id: 'cloud-fc-046',
    domain: 4,
    term: 'RBAC (role-based access control)',
    definition:
      'Permissions granted to roles rather than individuals, with users assigned to roles. Scales cleanly and simplifies audits, joiners, and leavers.',
  },
  {
    id: 'cloud-fc-047',
    domain: 4,
    term: 'Least privilege',
    definition:
      'Granting only the access a user or workload requires, for only as long as required. Limits the blast radius of any compromised identity.',
  },
  {
    id: 'cloud-fc-048',
    domain: 4,
    term: 'Instance role / managed identity',
    definition:
      'Attaching a permission set to a compute resource so it receives short-lived, automatically rotated credentials — removing static keys from code and disk.',
  },
  {
    id: 'cloud-fc-049',
    domain: 4,
    term: 'Encryption at rest vs. in transit',
    definition:
      'At rest protects stored data on disk or in object storage against media exposure. In transit (TLS, VPN, IPsec) protects data moving across networks.',
  },
  {
    id: 'cloud-fc-050',
    domain: 4,
    term: 'Key management service (KMS)',
    definition:
      'Centralized generation, storage, rotation, and access control for cryptographic keys, with audit logging. Keys must be kept separate from the data they protect.',
  },
  {
    id: 'cloud-fc-051',
    domain: 4,
    term: 'Security group vs. network ACL',
    definition:
      'A security group is an instance-level, typically stateful virtual firewall. A network ACL is a subnet-level, stateless filter evaluated in rule order.',
  },
  {
    id: 'cloud-fc-052',
    domain: 4,
    term: 'Bastion / jump host',
    definition:
      'A hardened, audited single entry point for administrative access to private systems, keeping management interfaces off the public internet.',
  },
  {
    id: 'cloud-fc-053',
    domain: 4,
    term: 'Data sovereignty',
    definition:
      'The principle that data is subject to the laws of the country where it physically resides. Controlled through region selection and replication restrictions.',
  },
  {
    id: 'cloud-fc-054',
    domain: 4,
    term: 'Vulnerability scan vs. penetration test',
    definition:
      'A scan enumerates known weaknesses, largely automated and run regularly. A penetration test attempts real exploitation to prove impact and requires written authorization.',
  },
  {
    id: 'cloud-fc-055',
    domain: 4,
    term: 'Data masking / obfuscation',
    definition:
      'Replacing sensitive values with realistic substitutes so test and development environments stay usable without exposing production data.',
  },
  {
    id: 'cloud-fc-056',
    domain: 4,
    term: 'Zero trust',
    definition:
      'Security model that trusts no request implicitly regardless of network location. Every request is authenticated, authorized, and verified — "never trust, always verify."',
  },
  {
    id: 'cloud-fc-057',
    domain: 4,
    term: 'Incident containment order',
    definition:
      'Isolate the affected resource, capture a snapshot for forensics, then eradicate and recover. Terminating or rebooting first destroys the evidence needed to understand the intrusion.',
  },

  // ─── DOMAIN 5: DEVOPS FUNDAMENTALS ───────────────────────────────────────

  {
    id: 'cloud-fc-058',
    domain: 5,
    term: 'Continuous integration (CI)',
    definition:
      'Merging code changes frequently with automated build and test on every change, so integration defects surface in minutes rather than at release.',
  },
  {
    id: 'cloud-fc-059',
    domain: 5,
    term: 'Continuous delivery vs. continuous deployment',
    definition:
      'Both keep the build always releasable. Delivery stops at a manual approval before production; deployment pushes to production automatically.',
  },
  {
    id: 'cloud-fc-060',
    domain: 5,
    term: 'Pipeline',
    definition:
      'Automated sequence of build, test, security scan, and deploy stages a change passes through. A failed stage stops promotion.',
  },
  {
    id: 'cloud-fc-061',
    domain: 5,
    term: 'Version control',
    definition:
      'System tracking every change to code and infrastructure definitions with history, attribution, peer review, and the ability to roll back.',
  },
  {
    id: 'cloud-fc-062',
    domain: 5,
    term: 'Immutable infrastructure',
    definition:
      'Servers are never modified after deployment. Changes produce a new image and instances are replaced, making deployments identical and rollback trivial.',
  },
  {
    id: 'cloud-fc-063',
    domain: 5,
    term: 'Container orchestration',
    definition:
      'Platform such as Kubernetes that schedules containers onto nodes, restarts failures, scales replicas, and reconciles actual state against declared desired state.',
  },
  {
    id: 'cloud-fc-064',
    domain: 5,
    term: 'Declarative vs. imperative',
    definition:
      'Declarative defines the desired end state and lets the tool reach it. Imperative specifies the exact steps to run. Cloud automation favors declarative for repeatability.',
  },
  {
    id: 'cloud-fc-065',
    domain: 5,
    term: 'API',
    definition:
      'Programmatic interface for provisioning and managing cloud resources. Every console action is ultimately an API call, which is what makes automation possible.',
  },
  {
    id: 'cloud-fc-066',
    domain: 5,
    term: 'Regression testing',
    definition:
      'Re-verifying previously working functionality after a change, to catch breakage introduced by new work.',
  },
  {
    id: 'cloud-fc-067',
    domain: 5,
    term: 'Secrets management',
    definition:
      'Storing credentials and keys in a dedicated encrypted service with access control, rotation, and auditing — never in source control, where they persist in history.',
  },
  {
    id: 'cloud-fc-068',
    domain: 5,
    term: 'Idempotency',
    definition:
      'Property of an operation that produces the same result whether run once or many times. Essential for automation that may retry or re-run safely.',
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
