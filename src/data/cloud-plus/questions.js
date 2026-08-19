// Cloud+ CV0-004 Practice Questions
// Domains: 1=Cloud Architecture, 2=Deployment, 3=Operations,
//          4=Security, 5=DevOps Fundamentals

export const questions = [
  // ─── DOMAIN 1: CLOUD ARCHITECTURE ────────────────────────────────────────

  {
    id: 'cloud-q-001',
    domain: 1,
    topic: 'Service Models',
    question:
      'A company wants to run its own application code without managing operating systems or patching servers. Which service model fits best?',
    options: ['IaaS', 'PaaS', 'SaaS', 'On-premises colocation'],
    correct: 1,
    explanation:
      'PaaS supplies the runtime platform — OS, middleware, and patching are the provider’s responsibility — while the customer supplies only the application. IaaS would still leave OS management with the customer.',
  },
  {
    id: 'cloud-q-002',
    domain: 1,
    topic: 'Service Models',
    question:
      'Under the shared responsibility model in IaaS, which task remains the customer’s responsibility?',
    options: [
      'Physical security of the datacenter',
      'Hypervisor patching',
      'Guest operating system patching',
      'Replacing failed disks in the storage array',
    ],
    correct: 2,
    explanation:
      'In IaaS the provider secures the physical facility, hardware, and hypervisor. Everything from the guest OS upward — patching, configuration, data — belongs to the customer.',
  },
  {
    id: 'cloud-q-003',
    domain: 1,
    topic: 'Deployment Models',
    question:
      'An organization keeps regulated data in its private datacenter while running its public website with a cloud provider, with the two connected. Which deployment model is this?',
    options: ['Public cloud', 'Private cloud', 'Hybrid cloud', 'Community cloud'],
    correct: 2,
    explanation:
      'Hybrid cloud combines private and public infrastructure connected so workloads and data can move between them, which is the usual answer when regulated data must stay in-house.',
  },
  {
    id: 'cloud-q-004',
    domain: 1,
    topic: 'Deployment Models',
    question:
      'Several hospitals share a cloud environment built to meet common healthcare compliance requirements. What is this called?',
    options: ['Community cloud', 'Public cloud', 'Multicloud', 'Private cloud'],
    correct: 0,
    explanation:
      'A community cloud is shared by organizations with common requirements such as regulatory compliance, splitting cost while keeping the environment restricted to that community.',
  },
  {
    id: 'cloud-q-005',
    domain: 1,
    topic: 'Scaling',
    question:
      'Adding more CPU and memory to an existing virtual machine is an example of which scaling approach?',
    options: ['Horizontal scaling', 'Vertical scaling', 'Cloud bursting', 'Load balancing'],
    correct: 1,
    explanation:
      'Vertical scaling (scaling up) makes a single instance larger. Horizontal scaling (scaling out) adds more instances, which generally offers better fault tolerance.',
  },
  {
    id: 'cloud-q-006',
    domain: 1,
    topic: 'Scaling',
    question:
      'Which scaling strategy best supports fault tolerance for a stateless web tier?',
    options: [
      'Vertical scaling to the largest available instance',
      'Horizontal scaling across multiple instances behind a load balancer',
      'Increasing the disk size on the single server',
      'Disabling auto-scaling to keep capacity predictable',
    ],
    correct: 1,
    explanation:
      'Multiple smaller instances behind a load balancer let the service survive the loss of any single instance. A single large instance remains a single point of failure no matter its size.',
  },
  {
    id: 'cloud-q-007',
    domain: 1,
    topic: 'High Availability',
    question:
      'What is the primary reason to distribute workloads across multiple availability zones?',
    options: [
      'To reduce licensing costs',
      'To survive the failure of a single datacenter or zone',
      'To simplify IP address management',
      'To avoid the need for backups',
    ],
    correct: 1,
    explanation:
      'Availability zones are isolated failure domains within a region. Spreading instances across them keeps a service running when one zone fails. It does not remove the need for backups.',
  },
  {
    id: 'cloud-q-008',
    domain: 1,
    topic: 'Storage Types',
    question:
      'Which storage type is most appropriate for a database requiring low-latency block-level access?',
    options: ['Object storage', 'Block storage', 'File storage', 'Archive storage'],
    correct: 1,
    explanation:
      'Block storage presents raw volumes the OS formats and controls directly, giving the low latency and random access databases require. Object storage is optimized for scale and durability, not transactional I/O.',
  },
  {
    id: 'cloud-q-009',
    domain: 1,
    topic: 'Storage Types',
    question:
      'A company needs to store millions of images accessed over HTTP with metadata and near-unlimited capacity. Which storage type fits?',
    options: ['Block storage', 'Object storage', 'RAID 10 array', 'Local ephemeral disk'],
    correct: 1,
    explanation:
      'Object storage stores data as objects with metadata and unique identifiers, accessed over HTTP APIs, and scales effectively without limit — the standard choice for media and static assets.',
  },
  {
    id: 'cloud-q-010',
    domain: 1,
    topic: 'Cloud Characteristics',
    question:
      'Which characteristic of cloud computing allows a customer to provision resources without human interaction from the provider?',
    options: [
      'Measured service',
      'On-demand self-service',
      'Resource pooling',
      'Broad network access',
    ],
    correct: 1,
    explanation:
      'On-demand self-service means the customer provisions capacity themselves through a portal or API. Measured service refers to metered, pay-per-use billing.',
  },
  {
    id: 'cloud-q-011',
    domain: 1,
    topic: 'Networking',
    question:
      'What is the purpose of a virtual private cloud (VPC) or virtual network in a public cloud?',
    options: [
      'To provide a logically isolated network segment the customer controls',
      'To encrypt all data stored at rest automatically',
      'To eliminate the need for security groups',
      'To guarantee unlimited bandwidth',
    ],
    correct: 0,
    explanation:
      'A VPC gives the customer a logically isolated network with their own address space, subnets, and routing inside the provider’s shared infrastructure.',
  },
  {
    id: 'cloud-q-012',
    domain: 1,
    topic: 'Cost Optimization',
    question:
      'A workload runs continuously for at least three years with predictable demand. Which purchasing option is typically most cost-effective?',
    options: [
      'On-demand instances',
      'Spot instances',
      'Reserved instances',
      'Dedicated hosts billed hourly',
    ],
    correct: 2,
    explanation:
      'Reserved instances trade a long-term commitment for a substantial discount, which suits steady, predictable workloads. Spot pricing is cheaper but can be reclaimed at short notice.',
  },

  // ─── DOMAIN 2: DEPLOYMENT ────────────────────────────────────────────────

  {
    id: 'cloud-q-013',
    domain: 2,
    topic: 'Migration Strategies',
    question:
      'A company moves a virtual machine to the cloud unchanged, with no modification to the application. What is this strategy called?',
    options: ['Refactoring', 'Rehosting (lift and shift)', 'Replatforming', 'Retiring'],
    correct: 1,
    explanation:
      'Rehosting, or lift and shift, relocates a workload as-is. It is the fastest migration path but captures the fewest cloud-native benefits.',
  },
  {
    id: 'cloud-q-014',
    domain: 2,
    topic: 'Migration Strategies',
    question:
      'Rewriting a monolithic application into cloud-native microservices is best described as which strategy?',
    options: ['Rehosting', 'Repurchasing', 'Refactoring', 'Retaining'],
    correct: 2,
    explanation:
      'Refactoring (or re-architecting) rewrites the application to take advantage of cloud-native capabilities. It offers the greatest long-term benefit at the highest effort and risk.',
  },
  {
    id: 'cloud-q-015',
    domain: 2,
    topic: 'Virtualization',
    question:
      'Which type of hypervisor runs directly on the physical hardware without a host operating system?',
    options: ['Type 1 (bare metal)', 'Type 2 (hosted)', 'Container runtime', 'Emulator'],
    correct: 0,
    explanation:
      'A Type 1 hypervisor runs directly on hardware, offering better performance and a smaller attack surface. Type 2 hypervisors run as an application on top of a host OS.',
  },
  {
    id: 'cloud-q-016',
    domain: 2,
    topic: 'Containers',
    question:
      'What is the key architectural difference between a container and a virtual machine?',
    options: [
      'Containers include a full guest operating system; VMs do not',
      'Containers share the host OS kernel; VMs each run their own guest OS',
      'Containers cannot be networked; VMs can',
      'Containers require more resources than VMs',
    ],
    correct: 1,
    explanation:
      'Containers package an application with its dependencies but share the host kernel, making them far lighter and faster to start than VMs, which each carry a full guest OS.',
  },
  {
    id: 'cloud-q-017',
    domain: 2,
    topic: 'Templates and Images',
    question:
      'What is the primary benefit of deploying instances from a standardized golden image?',
    options: [
      'It eliminates the need for patching',
      'It ensures consistent, repeatable configuration across deployments',
      'It removes licensing requirements',
      'It guarantees the lowest possible cost',
    ],
    correct: 1,
    explanation:
      'A golden image bakes in an approved, tested configuration so every instance starts identically, removing configuration drift at deployment time. The image itself still needs periodic patching.',
  },
  {
    id: 'cloud-q-018',
    domain: 2,
    topic: 'Deployment Testing',
    question:
      'A new application version is deployed alongside the current one, and traffic is switched over only after validation. Which deployment strategy is this?',
    options: ['Rolling deployment', 'Blue-green deployment', 'Canary deployment', 'In-place upgrade'],
    correct: 1,
    explanation:
      'Blue-green maintains two complete environments and cuts traffic over once the new one is verified, which makes rollback as simple as switching back.',
  },
  {
    id: 'cloud-q-019',
    domain: 2,
    topic: 'Deployment Testing',
    question:
      'A team releases a change to 5% of users first and monitors error rates before wider rollout. What is this called?',
    options: ['Canary deployment', 'Blue-green deployment', 'Big bang deployment', 'Cold standby'],
    correct: 0,
    explanation:
      'A canary release exposes a small subset of users to the change so problems surface with limited blast radius before full deployment.',
  },
  {
    id: 'cloud-q-020',
    domain: 2,
    topic: 'Network Deployment',
    question:
      'Which component distributes incoming client requests across multiple backend servers?',
    options: ['Load balancer', 'NAT gateway', 'Bastion host', 'CDN origin'],
    correct: 0,
    explanation:
      'A load balancer spreads traffic across healthy backends, providing both scale and fault tolerance by removing failed members from rotation.',
  },
  {
    id: 'cloud-q-021',
    domain: 2,
    topic: 'Network Deployment',
    question:
      'Instances in a private subnet must reach the internet for updates but must not be reachable from it. What should be deployed?',
    options: [
      'An internet gateway attached directly to the subnet',
      'A NAT gateway',
      'A public IP on each instance',
      'A reverse proxy in the private subnet',
    ],
    correct: 1,
    explanation:
      'A NAT gateway allows outbound-initiated connections while blocking inbound ones, which is exactly the requirement for private instances that need to pull updates.',
  },
  {
    id: 'cloud-q-022',
    domain: 2,
    topic: 'Storage Deployment',
    question:
      'Which RAID level provides both striping and mirroring for performance and redundancy?',
    options: ['RAID 0', 'RAID 1', 'RAID 5', 'RAID 10'],
    correct: 3,
    explanation:
      'RAID 10 combines mirroring (RAID 1) with striping (RAID 0), delivering strong performance and redundancy at the cost of 50% usable capacity. RAID 0 has no redundancy at all.',
  },
  {
    id: 'cloud-q-023',
    domain: 2,
    topic: 'Capacity Planning',
    question:
      'What must be verified before migrating a workload to ensure it will perform acceptably?',
    options: [
      'That a performance baseline exists for the current environment',
      'That the workload uses only open-source software',
      'That the provider offers unlimited storage',
      'That the application has no dependencies',
    ],
    correct: 0,
    explanation:
      'Without a baseline of current CPU, memory, storage, and network usage there is no way to size the target environment or to prove performance after the move.',
  },
  {
    id: 'cloud-q-024',
    domain: 2,
    topic: 'Migration Types',
    question:
      'Which migration approach minimizes downtime by keeping the source system running while data synchronizes to the target?',
    options: ['Cold migration', 'Live/online migration', 'Offline bulk export', 'Cutover-only migration'],
    correct: 1,
    explanation:
      'A live migration replicates data continuously while the source remains in service, leaving only a brief cutover window. A cold migration requires the source to be offline for the duration.',
  },

  // ─── DOMAIN 3: OPERATIONS ────────────────────────────────────────────────

  {
    id: 'cloud-q-025',
    domain: 3,
    topic: 'Monitoring',
    question:
      'What is the purpose of establishing a performance baseline after deployment?',
    options: [
      'To document normal behavior so deviations can be detected',
      'To satisfy licensing requirements',
      'To eliminate the need for alerting',
      'To reduce storage costs',
    ],
    correct: 0,
    explanation:
      'A baseline defines what normal looks like. Without it, an alert threshold is guesswork and gradual degradation goes unnoticed.',
  },
  {
    id: 'cloud-q-026',
    domain: 3,
    topic: 'Monitoring',
    question:
      'Which practice reduces alert fatigue while preserving visibility?',
    options: [
      'Alerting on every log entry',
      'Tuning thresholds and alerting on symptoms that require action',
      'Disabling alerts outside business hours',
      'Routing all alerts to a single shared inbox',
    ],
    correct: 1,
    explanation:
      'Alerts should be actionable. Tuning thresholds to real, symptom-level conditions keeps responders attentive; alerting on everything trains people to ignore alerts.',
  },
  {
    id: 'cloud-q-027',
    domain: 3,
    topic: 'Backup and Recovery',
    question: 'What does Recovery Point Objective (RPO) define?',
    options: [
      'How long recovery may take',
      'The maximum acceptable amount of data loss measured in time',
      'The cost of the recovery process',
      'The number of backup copies retained',
    ],
    correct: 1,
    explanation:
      'RPO is how much data the business can afford to lose, expressed as a time window — a one-hour RPO requires backups or replication at least hourly. RTO is how long recovery may take.',
  },
  {
    id: 'cloud-q-028',
    domain: 3,
    topic: 'Backup and Recovery',
    question:
      'A business states that systems must be restored within four hours of an outage. Which metric is being defined?',
    options: ['RPO', 'RTO', 'MTBF', 'SLA credit'],
    correct: 1,
    explanation:
      'Recovery Time Objective is the maximum tolerable duration of an outage before restoration. RPO addresses data loss rather than downtime.',
  },
  {
    id: 'cloud-q-029',
    domain: 3,
    topic: 'Backup Types',
    question:
      'Which backup type copies only data changed since the last full backup, and grows larger each day until the next full?',
    options: ['Incremental', 'Differential', 'Synthetic full', 'Snapshot'],
    correct: 1,
    explanation:
      'A differential backup captures everything changed since the last full backup, so it grows over time but needs only the full plus the latest differential to restore. Incrementals capture changes since the last backup of any type.',
  },
  {
    id: 'cloud-q-030',
    domain: 3,
    topic: 'Disaster Recovery',
    question:
      'Which disaster recovery site type provides the fastest failover at the highest cost?',
    options: ['Cold site', 'Warm site', 'Hot site', 'Mobile site'],
    correct: 2,
    explanation:
      'A hot site is fully provisioned with current data and can take over almost immediately. Cold sites are just space and power, cheapest but slowest to bring online.',
  },
  {
    id: 'cloud-q-031',
    domain: 3,
    topic: 'Automation',
    question:
      'What is the main operational benefit of infrastructure as code?',
    options: [
      'It removes the need for testing',
      'Environments become versioned, repeatable, and reviewable',
      'It eliminates cloud costs',
      'It prevents all outages',
    ],
    correct: 1,
    explanation:
      'Defining infrastructure declaratively in source control makes environments reproducible, diffable, and reviewable, which eliminates the drift that manual builds accumulate.',
  },
  {
    id: 'cloud-q-032',
    domain: 3,
    topic: 'Patch Management',
    question:
      'Why should patches be applied to a staging environment before production?',
    options: [
      'Staging environments do not require licenses',
      'To validate that the patch does not break the application',
      'Because patches cannot be installed twice',
      'To reduce the size of the patch',
    ],
    correct: 1,
    explanation:
      'Testing in a representative staging environment catches regressions before they reach users. Security urgency may compress that window but rarely eliminates it.',
  },
  {
    id: 'cloud-q-033',
    domain: 3,
    topic: 'Troubleshooting',
    question:
      'Users report intermittent timeouts to an application behind a load balancer. Which check is the most useful first step?',
    options: [
      'Rebuild all application servers',
      'Review load balancer health checks and backend instance status',
      'Increase the DNS TTL',
      'Restart the user workstations',
    ],
    correct: 1,
    explanation:
      'Intermittent failures behind a load balancer commonly mean some backends are unhealthy and still receiving traffic, or health checks are misconfigured. That is the fastest place to confirm or rule out.',
  },
  {
    id: 'cloud-q-034',
    domain: 3,
    topic: 'Capacity Management',
    question:
      'Which metric best indicates that a virtual machine needs additional memory?',
    options: [
      'High sustained swap or page file activity',
      'Low CPU utilization',
      'High disk capacity usage',
      'Low network throughput',
    ],
    correct: 0,
    explanation:
      'Sustained paging means the working set exceeds physical memory and the system is falling back to much slower disk. Disk capacity is a separate concern from memory pressure.',
  },
  {
    id: 'cloud-q-035',
    domain: 3,
    topic: 'Cost Management',
    question:
      'A monthly cloud bill rises sharply with no change in user traffic. Which is the most likely cause to investigate first?',
    options: [
      'Orphaned resources such as unattached volumes and idle instances',
      'The provider raising prices without notice',
      'Users clearing their browser cache',
      'DNS propagation delays',
    ],
    correct: 0,
    explanation:
      'Unused but still-billed resources — unattached volumes, idle instances, forgotten snapshots, unreleased IPs — are the most common cause of unexplained cost growth.',
  },

  // ─── DOMAIN 4: SECURITY ──────────────────────────────────────────────────

  {
    id: 'cloud-q-036',
    domain: 4,
    topic: 'Identity and Access',
    question:
      'Which access control model assigns permissions based on a user’s job function rather than to individuals?',
    options: [
      'Discretionary access control',
      'Role-based access control',
      'Mandatory access control',
      'Rule-based access control',
    ],
    correct: 1,
    explanation:
      'RBAC grants permissions to roles and assigns users to those roles, which scales far better than per-user permissions and simplifies audits and offboarding.',
  },
  {
    id: 'cloud-q-037',
    domain: 4,
    topic: 'Identity and Access',
    question:
      'An application running on a cloud instance needs to read from an object storage bucket. What is the most secure way to grant access?',
    options: [
      'Embed long-lived access keys in the application code',
      'Assign an instance role with least-privilege permissions',
      'Make the bucket publicly readable',
      'Store credentials in a plain-text file on the instance',
    ],
    correct: 1,
    explanation:
      'An instance role supplies short-lived, automatically rotated credentials scoped to what the workload needs, removing static secrets from code and disk entirely.',
  },
  {
    id: 'cloud-q-038',
    domain: 4,
    topic: 'Encryption',
    question:
      'Which control protects data confidentiality if a cloud provider’s physical disk is stolen or improperly decommissioned?',
    options: [
      'Encryption at rest',
      'A network ACL',
      'Multi-factor authentication',
      'A load balancer health check',
    ],
    correct: 0,
    explanation:
      'Encryption at rest renders the stored data unreadable without the key, which is what protects against physical media exposure. Access controls do nothing once the media leaves the system.',
  },
  {
    id: 'cloud-q-039',
    domain: 4,
    topic: 'Encryption',
    question: 'What is the primary purpose of a key management service (KMS)?',
    options: [
      'To generate, store, rotate, and control access to cryptographic keys',
      'To scan virtual machines for malware',
      'To balance traffic between regions',
      'To compress backup data',
    ],
    correct: 0,
    explanation:
      'A KMS centralizes the key lifecycle with auditing and access control. Keeping keys separate from the data they protect is the point — an encrypted volume whose key sits beside it gains little.',
  },
  {
    id: 'cloud-q-040',
    domain: 4,
    topic: 'Network Security',
    question:
      'Which control filters traffic at the instance level based on allowed ports, protocols, and sources?',
    options: ['Security group', 'CDN', 'Object lifecycle policy', 'Autoscaling policy'],
    correct: 0,
    explanation:
      'Security groups act as instance-level virtual firewalls, typically stateful and default-deny for inbound traffic. Network ACLs operate at the subnet level.',
  },
  {
    id: 'cloud-q-041',
    domain: 4,
    topic: 'Network Security',
    question:
      'Administrators must reach management interfaces on private instances without exposing them to the internet. What is the appropriate design?',
    options: [
      'Assign public IPs and restrict by password complexity',
      'Use a bastion/jump host or managed session service',
      'Open the management port to 0.0.0.0/0 with a long password',
      'Disable the firewall during maintenance windows',
    ],
    correct: 1,
    explanation:
      'A hardened bastion host or managed session service provides a single audited entry point, keeping management interfaces off the public internet entirely.',
  },
  {
    id: 'cloud-q-042',
    domain: 4,
    topic: 'Compliance',
    question:
      'An organization must guarantee that regulated data never leaves a specific country. Which cloud consideration addresses this?',
    options: [
      'Data sovereignty and region selection',
      'Instance type selection',
      'Autoscaling thresholds',
      'Reserved instance pricing',
    ],
    correct: 0,
    explanation:
      'Data sovereignty means data is subject to the laws of the country where it resides, so the control is selecting regions and restricting replication to compliant locations.',
  },
  {
    id: 'cloud-q-043',
    domain: 4,
    topic: 'Vulnerability Management',
    question:
      'What is the difference between a vulnerability scan and a penetration test?',
    options: [
      'A scan identifies known weaknesses; a penetration test attempts to exploit them',
      'A scan is manual; a penetration test is automated',
      'They are two terms for the same activity',
      'A scan is only performed on networks; a test only on applications',
    ],
    correct: 0,
    explanation:
      'Scanning enumerates known weaknesses and is largely automated. A penetration test attempts actual exploitation to demonstrate real impact, and typically requires written authorization.',
  },
  {
    id: 'cloud-q-044',
    domain: 4,
    topic: 'Data Protection',
    question:
      'Which technique replaces sensitive values with realistic but non-sensitive substitutes for use in a test environment?',
    options: ['Data masking', 'Deduplication', 'Compression', 'Thin provisioning'],
    correct: 0,
    explanation:
      'Masking (or obfuscation) preserves data format and usability while removing real sensitive values, which allows realistic testing without exposing production data.',
  },
  {
    id: 'cloud-q-045',
    domain: 4,
    topic: 'Incident Response',
    question:
      'A compromised instance is detected. Which action best preserves evidence while limiting damage?',
    options: [
      'Immediately terminate the instance',
      'Isolate the instance and capture a snapshot before further action',
      'Reboot the instance to clear the attacker’s session',
      'Restore the instance from backup without investigation',
    ],
    correct: 1,
    explanation:
      'Isolating stops the spread while a snapshot preserves volatile and disk state for forensics. Terminating or rebooting destroys evidence needed to understand the intrusion.',
  },

  // ─── DOMAIN 5: DEVOPS FUNDAMENTALS ───────────────────────────────────────

  {
    id: 'cloud-q-046',
    domain: 5,
    topic: 'CI/CD',
    question: 'What does continuous integration primarily accomplish?',
    options: [
      'Automatically deploying every change to production',
      'Merging and automatically testing code changes frequently to catch defects early',
      'Provisioning infrastructure on demand',
      'Encrypting source code repositories',
    ],
    correct: 1,
    explanation:
      'CI merges changes frequently and runs automated builds and tests on each one, so integration problems surface within minutes rather than at a painful release-day merge.',
  },
  {
    id: 'cloud-q-047',
    domain: 5,
    topic: 'CI/CD',
    question:
      'What distinguishes continuous deployment from continuous delivery?',
    options: [
      'Continuous deployment releases to production automatically; continuous delivery stops at a manual approval',
      'Continuous delivery requires containers; continuous deployment does not',
      'They are identical practices',
      'Continuous delivery skips automated testing',
    ],
    correct: 0,
    explanation:
      'Both keep the build always releasable. Continuous delivery leaves the final push to production as a human decision; continuous deployment automates that step as well.',
  },
  {
    id: 'cloud-q-048',
    domain: 5,
    topic: 'Version Control',
    question: 'Why should infrastructure code be stored in version control?',
    options: [
      'To provide history, peer review, and the ability to roll back changes',
      'To make deployments run faster',
      'Because cloud providers require it',
      'To avoid the need for backups',
    ],
    correct: 0,
    explanation:
      'Version control gives infrastructure the same auditability as application code — who changed what, why, and the ability to revert to a known-good state.',
  },
  {
    id: 'cloud-q-049',
    domain: 5,
    topic: 'Configuration Management',
    question:
      'What problem does configuration management tooling primarily solve?',
    options: [
      'Configuration drift between systems that should be identical',
      'Insufficient network bandwidth',
      'Physical hardware failure',
      'Software licensing costs',
    ],
    correct: 0,
    explanation:
      'Configuration management continuously enforces a declared desired state, correcting the drift that accumulates when systems are modified by hand over time.',
  },
  {
    id: 'cloud-q-050',
    domain: 5,
    topic: 'Immutable Infrastructure',
    question:
      'In an immutable infrastructure model, how is a configuration change applied to running servers?',
    options: [
      'By logging in and editing each server directly',
      'By building a new image and replacing the instances',
      'By disabling configuration management temporarily',
      'By restoring servers from the previous backup',
    ],
    correct: 1,
    explanation:
      'Immutable infrastructure never modifies running servers. Changes produce a new image, and instances are replaced, which makes every deployment identical and trivially reversible.',
  },
  {
    id: 'cloud-q-051',
    domain: 5,
    topic: 'Orchestration',
    question:
      'What is the role of a container orchestration platform such as Kubernetes?',
    options: [
      'Scheduling, scaling, and maintaining the desired state of containerized workloads',
      'Compiling application source code',
      'Providing physical datacenter security',
      'Replacing the need for monitoring',
    ],
    correct: 0,
    explanation:
      'Orchestration platforms place containers on nodes, restart failed ones, scale replicas, and continuously reconcile actual state against declared desired state.',
  },
  {
    id: 'cloud-q-052',
    domain: 5,
    topic: 'APIs',
    question:
      'Why are APIs central to cloud automation?',
    options: [
      'They allow programmatic provisioning and management of resources',
      'They encrypt all traffic by default',
      'They eliminate the need for authentication',
      'They reduce storage costs directly',
    ],
    correct: 0,
    explanation:
      'Every cloud action is ultimately an API call, which is what makes infrastructure as code, autoscaling, and CI/CD pipelines possible at all.',
  },
  {
    id: 'cloud-q-053',
    domain: 5,
    topic: 'Testing',
    question:
      'Which test type verifies that a new change has not broken previously working functionality?',
    options: ['Regression testing', 'Load testing', 'Penetration testing', 'Smoke testing'],
    correct: 0,
    explanation:
      'Regression tests re-verify existing behavior after a change. Load testing measures behavior under volume, and smoke testing is a quick check that a build is fundamentally functional.',
  },
  {
    id: 'cloud-q-054',
    domain: 5,
    topic: 'Secrets Management',
    question:
      'Where should application secrets such as database passwords be stored in an automated pipeline?',
    options: [
      'Hardcoded in the source repository',
      'In a dedicated secrets manager referenced at runtime',
      'In environment-specific plain-text config files committed to git',
      'In the build log for troubleshooting',
    ],
    correct: 1,
    explanation:
      'A secrets manager provides encrypted storage, access control, rotation, and auditing. Secrets committed to a repository persist in history even after removal.',
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
