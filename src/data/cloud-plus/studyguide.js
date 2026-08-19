// Cloud+ CV0-004 Study Guide
// Guides covering all 5 exam domains

export const studyGuide = [
  {
    id: 'cloud-sg1',
    domain: 1,
    title: 'Cloud Architecture',
    summary:
      'Service and deployment models, who is responsible for what, how workloads scale and stay available, and which storage type fits which job. This domain sets the vocabulary the rest of the exam assumes.',
    topics: [
      {
        id: 'cloud-sg1-1',
        title: 'Service Models & Shared Responsibility',
        content: `The service model determines where the provider's responsibility ends and yours begins.

| Model | Provider manages | You manage |
|-------|------------------|------------|
| IaaS | Facilities, hardware, hypervisor, network | Guest OS, patching, runtime, apps, data |
| PaaS | All of the above plus OS and runtime | Applications and data |
| SaaS | Everything | Your data and user configuration |

**Shared responsibility in one line:** the provider secures **the cloud**; you secure **what you put in it**.

**Key exam points:**
- **Guest OS patching is always yours in IaaS** — the most frequently tested boundary
- Physical security and hypervisor patching are **never** the customer's job
- **Your data is always your responsibility**, in every model
- Choosing PaaS trades flexibility for the removal of server maintenance`,
      },
      {
        id: 'cloud-sg1-2',
        title: 'Deployment Models',
        content: `| Model | Description | Chosen when |
|-------|-------------|-------------|
| Public | Provider-owned, multi-tenant | Elasticity and low capital cost matter most |
| Private | Dedicated to one organization | Regulation, control, or performance demands it |
| Hybrid | Private and public, connected | Some data must stay in-house, some workloads must scale |
| Community | Shared by organizations with common requirements | Several bodies share a compliance regime |
| Multicloud | Services from more than one provider | Avoiding lock-in, or best-of-breed per service |

**Key exam points:**
- A scenario with **regulated data on-premises plus public-facing workloads in the cloud** is **hybrid**
- **Several hospitals or agencies sharing an environment** is **community**, not public
- **Multicloud is about multiple providers**; hybrid is about mixing private and public
- Hybrid and multicloud both add integration complexity and skills requirements`,
      },
      {
        id: 'cloud-sg1-3',
        title: 'Scaling, Elasticity & High Availability',
        content: `**Vertical scaling (scale up)** — add CPU or memory to an existing instance. Simple, but bounded by the largest instance available and still a single point of failure.

**Horizontal scaling (scale out)** — add more instances behind a load balancer. Better fault tolerance and effectively unbounded, but the workload must tolerate running in multiple copies (ideally stateless).

**Elasticity** is automatic scaling in **both** directions as demand changes — including scaling back down, which is where the cost savings come from.

**Cloud bursting** keeps a workload private and overflows into the public cloud only at peak.

**High availability building blocks**
- **Availability zones** — isolated failure domains within a region; spreading across them survives a datacenter failure
- **Regions** — geographic separation; spreading across them survives a regional outage and addresses data residency
- **Load balancers** — remove unhealthy backends from rotation automatically

**Key exam points:**
- **Horizontal scaling is the fault-tolerance answer**; a bigger single server is still one server
- Availability zones protect against **infrastructure** failure — they are **not** a substitute for backups
- Stateless application tiers are what make scaling out practical`,
      },
      {
        id: 'cloud-sg1-4',
        title: 'Storage Types & Cost Models',
        content: `| Type | Access | Best for |
|------|--------|----------|
| Block | Raw volumes formatted by the OS | Databases, boot volumes, low-latency I/O |
| Object | HTTP API, objects with metadata | Media, backups, static assets, archives |
| File | NFS/SMB shared file system | Applications expecting a mounted share |

**Purchasing options**

| Option | Trade-off |
|--------|-----------|
| On-demand | No commitment, highest rate |
| Reserved | Committed term for a large discount — steady workloads |
| Spot | Deep discount on spare capacity, reclaimable at short notice |

**Key exam points:**
- **Databases want block storage**; millions of images want **object storage**
- **Reserved instances win for predictable, long-running workloads**
- **Spot is for interruption-tolerant work** such as batch processing
- Storage tiering (hot → cool → archive) trades retrieval speed for lower cost`,
      },
    ],
  },

  {
    id: 'cloud-sg2',
    domain: 2,
    title: 'Deployment',
    summary:
      'Getting workloads into the cloud: migration strategies, the virtualization and container layer beneath them, release techniques that limit risk, and the network plumbing that connects it all.',
    topics: [
      {
        id: 'cloud-sg2-1',
        title: 'Migration Strategies',
        content: `Commonly taught as the "R" strategies:

| Strategy | What it means | Effort |
|----------|---------------|--------|
| Rehost | Lift and shift, essentially unchanged | Lowest |
| Replatform | Modest optimization, e.g. managed database | Low-moderate |
| Refactor | Rewrite as cloud-native / microservices | Highest |
| Repurchase | Replace with a SaaS product | Varies |
| Retain | Leave it where it is for now | None |
| Retire | Decommission it entirely | None |

**Before any migration:**
- Capture a **performance baseline** so the target can be sized and validated
- Map **dependencies** — the forgotten integration is what breaks the cutover
- Plan the **rollback** before you plan the cutover

**Key exam points:**
- **Rehost = fastest, fewest cloud benefits. Refactor = slowest, most benefit**
- A **baseline is mandatory**; without it "is it faster now?" is unanswerable
- **Live migration** keeps the source running and minimizes downtime; **cold migration** requires an outage`,
      },
      {
        id: 'cloud-sg2-2',
        title: 'Virtualization & Containers',
        content: `**Hypervisors**
- **Type 1 (bare metal)** — runs directly on hardware. Better performance, smaller attack surface, used in datacenters
- **Type 2 (hosted)** — runs as an application on a host OS. Convenient for desktops and labs

**Containers vs. VMs**

| | Container | Virtual machine |
|---|-----------|-----------------|
| OS | Shares the host kernel | Full guest OS each |
| Size | Megabytes | Gigabytes |
| Start time | Seconds | Minutes |
| Isolation | Process-level | Stronger, hardware-level |

**Key exam points:**
- **Containers share the host kernel** — the single most tested distinction
- Containers are lighter and faster; VMs provide stronger isolation
- A **golden image** gives consistent, repeatable deployments — but still needs patching itself
- **Ephemeral storage disappears when the instance does**; persistent volumes must be attached deliberately`,
      },
      {
        id: 'cloud-sg2-3',
        title: 'Release Strategies',
        content: `| Strategy | How it works | Rollback |
|----------|--------------|----------|
| Blue-green | Two full environments; cut traffic over after validation | Switch traffic back |
| Canary | Release to a small subset, monitor, then widen | Stop the rollout |
| Rolling | Update instances in batches | Roll batches back |
| In-place | Upgrade the existing system directly | Restore from backup |

**Key exam points:**
- **Blue-green gives the cleanest rollback** — the old environment is still running
- **Canary limits blast radius** by exposing only a fraction of users
- **Rolling deployments mean two versions run at once** — the application must tolerate that
- Whichever strategy you pick, **validate with health checks before shifting traffic**`,
      },
      {
        id: 'cloud-sg2-4',
        title: 'Network & Storage Deployment',
        content: `**Network components**
- **VPC / virtual network** — your isolated address space, subnets, and routing
- **Public subnet** — has a route to an internet gateway
- **Private subnet** — no inbound path from the internet
- **NAT gateway** — lets private instances reach out (updates, APIs) without being reachable
- **Load balancer** — distributes traffic and removes unhealthy backends
- **CDN** — caches content near users, reducing latency and origin load

**RAID quick reference**

| Level | Technique | Survives | Usable capacity |
|-------|-----------|----------|-----------------|
| 0 | Striping | Nothing | 100% |
| 1 | Mirroring | One disk | 50% |
| 5 | Striping + parity | One disk | n-1 |
| 6 | Striping + dual parity | Two disks | n-2 |
| 10 | Mirrored stripes | One per mirror | 50% |

**Key exam points:**
- **NAT gateway = outbound only** — the standard answer for private instances needing updates
- **RAID 0 has no redundancy** despite being fast
- **RAID 10 is the performance-plus-redundancy answer**
- RAID is not a backup — it protects against disk failure, not deletion or corruption`,
      },
    ],
  },

  {
    id: 'cloud-sg3',
    domain: 3,
    title: 'Operations',
    summary:
      'Keeping the environment healthy: monitoring and baselines, backup and disaster recovery metrics, patching, capacity, and the cost discipline that cloud environments demand.',
    topics: [
      {
        id: 'cloud-sg3-1',
        title: 'Monitoring & Baselines',
        content: `A **baseline** documents normal behavior — CPU, memory, disk I/O, network, response time. Without it, thresholds are guesswork and slow degradation goes unnoticed.

**What to monitor**
- **Resource metrics** — CPU, memory, disk, network
- **Application metrics** — request rate, error rate, latency
- **Availability** — synthetic checks from outside the environment
- **Logs** — centralized, searchable, retained to policy

**Alerting that works**
- Alert on **symptoms that require action**, not on every event
- Tune thresholds against the baseline
- Route by severity; page only for what genuinely cannot wait

**Key exam points:**
- **Alert fatigue** is caused by non-actionable alerts and ends with real alerts ignored
- **Sustained paging or swapping means memory pressure**, not a disk capacity problem
- Monitoring from **outside** the environment catches failures internal checks miss`,
      },
      {
        id: 'cloud-sg3-2',
        title: 'Backup Types & Recovery Metrics',
        content: `**The two metrics that drive every design decision**
- **RPO — Recovery Point Objective:** how much data you can afford to lose, in time. A 1-hour RPO demands at least hourly backup or replication
- **RTO — Recovery Time Objective:** how long restoration may take

**Backup types**

| Type | Captures | Restore requires |
|------|----------|------------------|
| Full | Everything | Just the full |
| Incremental | Changes since the **last backup of any type** | Full + every incremental in order |
| Differential | Changes since the **last full** | Full + latest differential only |
| Snapshot | Point-in-time volume image | The snapshot (usually same storage system) |

**Key exam points:**
- **RPO = data loss. RTO = downtime.** Questions test this pairing constantly
- **Incremental is fastest to back up, slowest to restore**; differential is the reverse
- A **snapshot is not a backup** — it typically lives beside the data it protects
- **3-2-1**: three copies, two media types, one offsite — and test the restores`,
      },
      {
        id: 'cloud-sg3-3',
        title: 'Disaster Recovery',
        content: `| Site type | Readiness | Cost | Typical RTO |
|-----------|-----------|------|-------------|
| Hot | Fully provisioned, data current | Highest | Minutes |
| Warm | Hardware ready, data must be restored | Moderate | Hours |
| Cold | Space and power only | Lowest | Days |

**Related concepts**
- **Failover** — shifting production to the recovery environment
- **Failback** — returning to the primary once it is healthy
- **Pilot light** — a minimal always-on core that scales up during a disaster
- **DR testing** — the only way to know the plan works; untested DR is a hypothesis

**Key exam points:**
- **Hot site = fastest and most expensive; cold site = cheapest and slowest**
- Geographic separation matters — a DR site in the same flood plain is not separation
- **Failback is part of the plan**, and is frequently the step organizations forget to rehearse`,
      },
      {
        id: 'cloud-sg3-4',
        title: 'Patching, Capacity & Cost Control',
        content: `**Patch management**
- Test in **staging** before production; security urgency compresses that window but rarely removes it
- Maintain a **rollback path** for every change
- Automate where possible so patching does not depend on someone remembering

**Capacity management**
- Right-size against real utilization, not against the original request
- Autoscaling handles variable demand; reserved capacity handles the steady baseline
- Watch for **noisy neighbor** effects on shared infrastructure

**Cost control**
- Hunt **orphaned resources**: unattached volumes, idle instances, forgotten snapshots, unreleased IPs
- Apply **tags** so spend can be attributed to a team or project
- Set **budgets and alerts** — cloud bills grow quietly, then all at once
- Match the purchasing model to the workload pattern

**Key exam points:**
- An unexplained bill increase with flat traffic almost always means **orphaned or over-provisioned resources**
- **Tagging is what makes cost attribution possible** — retrofitting it is painful
- Right-sizing usually saves more than negotiating on price`,
      },
    ],
  },

  {
    id: 'cloud-sg4',
    domain: 4,
    title: 'Security',
    summary:
      'Identity, encryption, network controls, compliance, and incident response applied to cloud environments — where the perimeter is identity rather than the network edge.',
    topics: [
      {
        id: 'cloud-sg4-1',
        title: 'Identity & Access Management',
        content: `In cloud environments **identity is the perimeter**. Most breaches trace back to over-permissioned or exposed credentials rather than to network intrusion.

**Core concepts**
- **RBAC** — permissions attach to roles; users are assigned roles. Scales cleanly, simplifies audit and offboarding
- **Least privilege** — only the access required, for only as long as required
- **MFA** — required for privileged accounts without exception
- **Instance roles / managed identities** — short-lived, auto-rotated credentials for workloads, so no static keys live in code or on disk
- **Federation / SSO** — one identity provider, centrally revocable
- **Service accounts** — non-human identities, which need the same scrutiny and rotation as human ones

**Key exam points:**
- **Never embed long-lived access keys in code** — use an instance role
- **RBAC over per-user permissions**, always
- Privileged access should be **temporary and audited**, not standing`,
      },
      {
        id: 'cloud-sg4-2',
        title: 'Encryption & Key Management',
        content: `**Encryption at rest** protects stored data — disks, object storage, databases, backups. It is what protects you when physical media is stolen or improperly decommissioned.

**Encryption in transit** protects data moving across networks — TLS for application traffic, IPsec or provider VPN for site-to-site links.

**Key management**
- A **KMS** generates, stores, rotates, and controls access to keys, with audit logging
- **Customer-managed keys** give control and revocability; **provider-managed keys** are simpler
- **HSMs** provide hardware-backed key protection for the strictest requirements
- Keys must be stored **separately from the data they protect**

**Key exam points:**
- **Encryption at rest is the answer for stolen or decommissioned media**
- **Rotation and separation of keys** matter as much as the algorithm
- Encrypting backups is as important as encrypting production — backups are a favorite target`,
      },
      {
        id: 'cloud-sg4-3',
        title: 'Network Security & Compliance',
        content: `**Network controls**
- **Security groups** — instance-level, stateful, default-deny inbound
- **Network ACLs** — subnet-level, stateless, evaluated in order
- **Bastion / jump host** — a single hardened, audited entry point for administration
- **WAF** — filters application-layer attacks such as injection and cross-site scripting
- **Segmentation** — separate tiers so a compromise in one does not reach the others
- **Zero trust** — authenticate and authorize every request regardless of network location

**Compliance considerations**
- **Data sovereignty** — data is governed by the laws of the country it resides in
- **Regulatory frameworks** — HIPAA, PCI DSS, GDPR, SOC 2 each carry specific control requirements
- **Audit logging** — must be enabled, protected from tampering, and retained to policy

**Key exam points:**
- **Security group = instance and stateful; network ACL = subnet and stateless**
- **Management interfaces never face the internet** — use a bastion or managed session service
- **Region selection is the control for data residency requirements**`,
      },
      {
        id: 'cloud-sg4-4',
        title: 'Assessment & Incident Response',
        content: `**Assessment**
- **Vulnerability scanning** — automated enumeration of known weaknesses, run regularly
- **Penetration testing** — attempted exploitation to prove real impact; requires written authorization, and many providers require notification
- **Configuration auditing** — continuous checking against a hardening benchmark
- **Data masking** — realistic substitutes for sensitive values so test environments stay safe

**Incident response order**
1. **Prepare** — plan, contacts, tooling in place beforehand
2. **Identify** — confirm an incident is real and determine scope
3. **Contain** — isolate the affected resource
4. **Capture evidence** — snapshot volatile and disk state **before** remediation
5. **Eradicate** — remove the cause
6. **Recover** — restore service and monitor closely
7. **Lessons learned** — feed findings back into controls

**Key exam points:**
- **Isolate and snapshot before terminating** — rebooting or deleting destroys the evidence
- **Scanning finds; penetration testing proves** — and testing needs authorization in writing
- Recovery is not the end; the **post-incident review** is what prevents a repeat`,
      },
    ],
  },

  {
    id: 'cloud-sg5',
    domain: 5,
    title: 'DevOps Fundamentals',
    summary:
      'The automation practices that make cloud environments repeatable: pipelines, infrastructure as code, configuration management, orchestration, and handling secrets safely.',
    topics: [
      {
        id: 'cloud-sg5-1',
        title: 'CI/CD Pipelines',
        content: `**Continuous integration (CI)** — developers merge frequently and every change triggers an automated build and test run, so integration defects surface in minutes instead of at release.

**Continuous delivery** — every build is kept releasable, with a **manual approval** before production.

**Continuous deployment** — the same, but the production release is automated too.

**A typical pipeline**

    commit → build → unit tests → security scan → deploy to staging
           → integration tests → approval → deploy to production

A failed stage stops promotion. That gate is the whole value.

**Key exam points:**
- **Delivery stops at an approval; deployment does not** — the single most tested distinction here
- CI is about **frequent merging plus automated testing**, not about deployment
- Pipelines should include **security scanning**, not just functional tests`,
      },
      {
        id: 'cloud-sg5-2',
        title: 'Infrastructure as Code & Configuration Management',
        content: `**Infrastructure as code (IaC)** defines infrastructure in version-controlled files:
- Environments become **repeatable** — staging genuinely matches production
- Changes are **reviewable** as diffs before they are applied
- Rebuilding after a disaster becomes a pipeline run rather than an archaeology project

**Declarative vs. imperative**
- **Declarative** — describe the desired end state; the tool works out how to reach it
- **Imperative** — specify each step to execute

Declarative is preferred because re-running it converges on the same result.

**Configuration management** continuously enforces desired state on existing systems, correcting **configuration drift** — the gradual divergence caused by manual changes.

**Immutable infrastructure** goes further: nothing is modified after deployment. Changes produce a new image and instances are replaced.

**Key exam points:**
- **IaC solves drift and makes environments reproducible**
- **Idempotency** — running the same operation repeatedly yields the same result — is what makes safe retries possible
- **Immutable infrastructure replaces rather than patches** running instances`,
      },
      {
        id: 'cloud-sg5-3',
        title: 'Containers & Orchestration',
        content: `Containers package an application with its dependencies so it runs identically everywhere. At scale they need orchestration.

**An orchestrator (such as Kubernetes) provides:**
- **Scheduling** — placing containers on suitable nodes
- **Self-healing** — restarting failed containers, replacing failed nodes
- **Scaling** — adjusting replica counts to demand
- **Service discovery and load balancing** between components
- **Rolling updates and rollback** as first-class operations
- **Declarative desired state** — continuously reconciled against reality

**Registry** — the store for container images, and a control point for scanning images for vulnerabilities before deployment.

**Key exam points:**
- Orchestration **continuously reconciles actual state against desired state**
- Containers are **ephemeral** — persistent data belongs in mounted volumes or external services
- **Scan images in the registry**; a vulnerable base image propagates everywhere it is used`,
      },
      {
        id: 'cloud-sg5-4',
        title: 'Testing, APIs & Secrets',
        content: `**Test types**

| Type | Verifies |
|------|----------|
| Unit | An individual component behaves correctly |
| Integration | Components work together |
| Regression | Existing functionality still works after a change |
| Load / performance | Behavior under expected and peak volume |
| Smoke | The build is fundamentally functional |

**APIs** are the foundation of cloud automation — every console action is an API call underneath, which is what makes IaC, autoscaling, and pipelines possible.

**Secrets management**
- Store credentials in a **dedicated secrets manager**, retrieved at runtime
- **Never commit secrets to source control** — they persist in history even after deletion
- Rotate regularly and **audit access**
- Keep secrets out of build logs and error messages

**Key exam points:**
- **Regression testing catches breakage of existing functionality**
- **A secret committed to git must be considered compromised** and rotated, not merely deleted
- Automation depends on APIs, so **API credentials are high-value targets** and deserve the strictest controls`,
      },
    ],
  },
];
