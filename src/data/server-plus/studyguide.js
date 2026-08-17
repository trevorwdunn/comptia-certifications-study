// Server+ SK0-005 Study Guide
// Guides covering all 5 exam domains

export const studyGuide = [
  {
    id: 'splus-sg-001',
    domain: 1,
    title: "Server Hardware & Form Factors",
    summary: "Study notes for Server Hardware & Form Factors.",
    topics: [
      {
        id: 'splus-sg-001-1',
        title: "Server Form Factors",
        content: `**Tower Servers**
Stand-alone units resembling desktop computers. Easy to expand (many drive bays, PCIe slots), require no rack infrastructure, and are quieter. Best for small offices or branch locations. Disadvantage: poor space efficiency if you need many servers.

**1U / 2U Rack Servers**
Designed to mount in a standard 19-inch equipment rack. One rack unit (U) = 1.75 inches tall. Common in data centers due to good density and standardized mounting. 1U servers have fewer expansion slots and drive bays; 2U servers offer more room. Most enterprise servers are 1U or 2U.

**Blade Servers**
Multiple compute blades (thin server modules) slide into a shared chassis/enclosure. The chassis provides centralized power supplies, cooling, network switching, and management modules shared across all blades. Highest compute density, reduced cabling. Higher upfront chassis cost but lower per-blade cost and reduced power/cooling overhead. Examples: HPE BladeSystem, Dell PowerEdge M-Series, Cisco UCS.

**Micro-Servers / High-Density Computing**
Low-power, low-cost nodes designed for scale-out web serving and cloud workloads. Examples: HP Moonshot. Not covered extensively on SK0-005 but understand the density tradeoff concept.

---`,
      },
      {
        id: 'splus-sg-001-2',
        title: "Key Server Components",
        content: `**CPUs (Processors)**
Server CPUs differ from desktop CPUs: they support multi-socket configurations (2–8 CPUs per motherboard), larger L3 caches, ECC memory, more PCIe lanes, and advanced RAS (Reliability, Availability, Serviceability) features. Intel Xeon and AMD EPYC are the dominant server CPU families. NUMA (Non-Uniform Memory Access) topology matters for performance tuning in multi-socket servers.

**ECC RAM (Error-Correcting Code Memory)**
Server RAM uses ECC to detect and correct single-bit memory errors in real time, preventing silent data corruption. RDIMM (Registered/Buffered DIMM) includes a register chip between the DRAM chips and the memory controller, improving signal integrity for systems with many DIMMs per channel. LRDIMMs (Load-Reduced DIMMs) use a different buffer design to support even higher memory density. Non-ECC RAM is NOT appropriate for production servers.

**RAID Controllers**
Hardware RAID controllers manage disk arrays independently of the host CPU, improving performance via onboard cache (with battery-backed write cache/BBWC or flash-backed cache). Look for: cache size, supported RAID levels, supported drive interfaces (SAS/SATA/NVMe), and host interface (PCIe). Software RAID (Windows Storage Spaces, Linux mdadm) uses CPU resources but costs less.

**NICs (Network Interface Cards)**
Server NICs are typically 1GbE, 10GbE, or 25/100GbE for high-performance environments. Support features like: hardware offloading (TCP offload engine/TOE), SR-IOV (Single Root I/O Virtualization for VMs), RDMA (Remote Direct Memory Access for storage/HPC workloads), and teaming/bonding for redundancy. Converged NICs (CNAs) support both Ethernet and iSCSI/FCoE on one card.

**HBAs (Host Bus Adapters)**
Connect servers to Fibre Channel SANs. Present FC storage as block devices to the OS. Each HBA has a unique WWPN (World Wide Port Name) — similar to a MAC address for FC. Software iSCSI initiators use a standard NIC; hardware iSCSI HBAs offload protocol processing.

---`,
      },
      {
        id: 'splus-sg-001-3',
        title: "Power Systems",
        content: `**Redundant Hot-Swap Power Supplies**
Servers use dual (or more) PSUs in a 1+1 or N+1 configuration. Each PSU can handle the full server load. If one fails, the other continues without interruption. Hot-swap means the failed PSU can be replaced while the server runs. Load sharing: under normal operation, both PSUs share the electrical load, running cooler and more efficiently.

**UPS (Uninterruptible Power Supply) Types**

| Type | Transfer Time | Power Conditioning | Cost | Best For |
|------|--------------|-------------------|------|----------|
| Offline/Standby | 4–12 ms | Minimal | Low | Desktops |
| Line-Interactive | 2–4 ms | Voltage regulation | Medium | Small servers |
| Online Double-Conversion | 0 ms | Full isolation | High | Data centers |

**Online double-conversion** is the gold standard for data center servers. Servers run from the inverter at all times, so utility power failure has no transfer delay.

**Rack PDUs (Power Distribution Units)**
Distribute power from one 20A or 30A circuit to multiple rack-mounted devices. Smart PDUs add per-outlet monitoring, remote switching, and current measurement. Key rule: load to 80% maximum of rated amperage to maintain safety margin (20A circuit → max 16A load; 120V × 16A = 1,920W practical limit).

---`,
      },
      {
        id: 'splus-sg-001-4',
        title: "Out-of-Band Management",
        content: `**IPMI (Intelligent Platform Management Interface)**
Industry-standard interface for hardware-level server management via a dedicated BMC (Baseboard Management Controller). Capabilities: remote power on/off/reset, virtual console (keyboard/video over network), hardware sensor monitoring (temperature, fan speed, voltage), system event log (SEL). Operates on a separate management NIC. Works regardless of OS state — even when the server is off (requires standby power).

**Vendor Implementations:**
- Dell: iDRAC (Integrated Dell Remote Access Controller) — iDRAC Express (basic), iDRAC Enterprise (full features)
- HPE: iLO (Integrated Lights-Out) — iLO Standard, iLO Advanced, iLO Advanced Premium
- IBM/Lenovo: XClarity (formerly IMM — Integrated Management Module)

**KVM Switches**
Share one keyboard, video monitor, and mouse across multiple physical servers. Cat5/IP-based KVM switches extend access over the network. Unlike IPMI (which is built into the server), KVM switches are external devices. Useful for initial server setup before network access is configured.

---`,
      },
      {
        id: 'splus-sg-001-5',
        title: "Cable Management & Rack Layout",
        content: `**Hot Aisle / Cold Aisle Configuration**
Alternating rows of racks face each other: fronts face the cold aisle, rears face the hot aisle. Cold aisles receive cool air from perforated floor tiles (raised floor) or overhead supply. Hot aisles exhaust hot air to CRAC/CRAH returns. Blanking panels fill empty U spaces to prevent hot air bypass. Containment systems (aisle containment) further improve efficiency by physically separating hot and cold airflow.

**Structured Cabling**
Use cable managers (1U/2U horizontal and vertical cable managers) to route cables neatly. Label all cables. Color-coding: blue = production network, red = management network, yellow = storage, green = crossover/custom. Proper cable management improves airflow, simplifies troubleshooting, and reduces accidental disconnections.`,
      },
    ],
  },
  {
    id: 'splus-sg-002',
    domain: 2,
    title: "RAID Levels",
    summary: "RAID (Redundant Array of Independent Disks) combines multiple physical disks to improve performance, fault tolerance, or both.",
    topics: [
      {
        id: 'splus-sg-002-1',
        title: "RAID 0 — Striping (No Redundancy)",
        content: `**How it works:** Data is split into blocks and written alternately across all drives in parallel.

**Minimum disks:** 2
**Fault tolerance:** NONE — one drive failure = total data loss
**Usable capacity:** 100% of total raw (n drives × drive size)
**Read performance:** High (parallel reads from all drives)
**Write performance:** High (parallel writes to all drives)

**Use cases:** Video editing scratch disks, gaming, temporary data where speed matters and data loss is acceptable. NEVER use for production server data.

**Key exam point:** RAID 0 improves performance but provides NO fault tolerance. It actually increases the probability of data loss compared to a single drive (any one of the drives can cause failure).

---`,
      },
      {
        id: 'splus-sg-002-2',
        title: "RAID 1 — Mirroring",
        content: `**How it works:** Identical data written to all drives simultaneously.

**Minimum disks:** 2
**Fault tolerance:** 1 drive failure (in a 2-disk mirror)
**Usable capacity:** 50% of total raw (n/2)
**Read performance:** Can be improved (reads from either drive)
**Write performance:** Same as single drive (must write to all mirrors)

**Use cases:** OS drives, small critical databases, boot volumes. Excellent fault tolerance with simple recovery.

**Key exam point:** Fastest write acknowledgment after RAID 0; simplest recovery (remove failed drive, insert replacement, rebuild automatically or manually).

---`,
      },
      {
        id: 'splus-sg-002-3',
        title: "RAID 5 — Striping with Distributed Parity",
        content: `**How it works:** Data and parity are striped across all drives. Parity for each stripe is distributed to a different drive. If one drive fails, data is reconstructed using the remaining drives and parity.

**Minimum disks:** 3
**Fault tolerance:** 1 drive failure
**Usable capacity:** (n-1) × drive size  [e.g., 4×4TB = 12TB usable]
**Read performance:** Good
**Write performance:** Moderate (parity calculation adds overhead; write penalty)

**Parity Calculation:** For any stripe, Parity = DataBlock1 XOR DataBlock2 XOR DataBlock3...

**Degraded mode:** Array still functions but without fault tolerance. Performance drops because every read requires parity calculation for missing data. REPLACE FAILED DRIVE IMMEDIATELY.

**Risk in large arrays:** During rebuild, the remaining drives are stressed. In large arrays (8+ drives), the probability of a second drive failing during a multi-hour rebuild is significant. Consider RAID 6 for large arrays.

**Use cases:** Most common RAID level for general server file storage. Balance of capacity, performance, and fault tolerance.

---`,
      },
      {
        id: 'splus-sg-002-4',
        title: "RAID 6 — Striping with Double Distributed Parity",
        content: `**How it works:** Like RAID 5 but calculates and stores TWO independent parity blocks per stripe using different mathematical algorithms (P+Q parity, using Reed-Solomon).

**Minimum disks:** 4
**Fault tolerance:** ANY 2 simultaneous drive failures
**Usable capacity:** (n-2) × drive size  [e.g., 6×4TB = 16TB usable]
**Read performance:** Same as RAID 5
**Write performance:** Lower than RAID 5 (two parity calculations)

**Use cases:** Large disk arrays (12+ drives) where rebuild time makes a second failure likely. High-capacity NAS/SAN environments. Compliance environments requiring higher data protection.

**Key exam point:** RAID 6 is recommended when your array is large enough that a second drive failure during RAID 5 rebuild is a realistic risk.

---`,
      },
      {
        id: 'splus-sg-002-5',
        title: "RAID 10 (1+0) — Mirrored Stripes",
        content: `**How it works:** First, drives are mirrored in pairs (RAID 1). Then, data is striped across the mirror pairs (RAID 0).

**Minimum disks:** 4 (in pairs)
**Fault tolerance:** One drive failure per mirror pair; can survive multiple failures if they're in DIFFERENT pairs
**Usable capacity:** 50% of total raw
**Read performance:** Excellent (reads from any mirror copy, full striping benefit)
**Write performance:** Excellent (write penalty of RAID 1 mirrors, but parallel striping)

**Use cases:** High-performance databases (SQL Server, Oracle), transaction logs, any workload needing both high performance AND strong fault tolerance. Most expensive per usable GB.

**Exam distinction:** RAID 10 vs RAID 5 trade-off:
- RAID 10: Higher cost (50% usable), better performance, faster rebuild (restore from mirror copy only)
- RAID 5: Lower cost (more usable capacity), lower write performance, slower/riskier rebuild

---`,
      },
      {
        id: 'splus-sg-002-6',
        title: "Summary Comparison Table",
        content: `| RAID | Min Disks | Drive Failures Tolerated | Usable Capacity | Best Use Case |
|------|-----------|------------------------|-----------------|---------------|
| 0    | 2         | 0                      | 100%            | Performance only |
| 1    | 2         | 1                      | 50%             | OS drive, simple mirror |
| 5    | 3         | 1                      | (n-1)/n         | General storage |
| 6    | 4         | 2                      | (n-2)/n         | Large arrays |
| 10   | 4         | 1 per mirror pair      | 50%             | High-perf databases |

---`,
      },
      {
        id: 'splus-sg-002-7',
        title: "RAID Controller Cache",
        content: `Hardware RAID controllers include battery-backed write cache (BBWC) or flash-backed write cache (FBWC). Write-back caching allows the controller to acknowledge a write to the host immediately (after writing to cache), then write to disk asynchronously — dramatically improving write performance. The battery/flash ensures cached data survives a power failure. NEVER enable write-back caching without battery backup — a power failure can corrupt data.`,
      },
    ],
  },
  {
    id: 'splus-sg-003',
    domain: 2,
    title: "Server Virtualization",
    summary: "Study notes for Server Virtualization.",
    topics: [
      {
        id: 'splus-sg-003-1',
        title: "Hypervisor Types",
        content: `**Type 1 — Bare-Metal (Native) Hypervisor**
Runs directly on physical server hardware without a conventional host OS. The hypervisor IS the OS layer. Maximum performance because there is no overhead OS layer consuming resources.

Examples:
- **VMware ESXi** — Industry-leading enterprise hypervisor. Managed via vCenter Server for multi-host environments. Supports vMotion, HA, DRS, vSAN.
- **Microsoft Hyper-V** — Integrated into Windows Server (as a role) and available as a standalone free product. Tight Windows integration.
- **KVM (Kernel-based Virtual Machine)** — Linux kernel module that turns Linux into a Type 1 hypervisor. Managed via libvirt/virt-manager or cloud platforms (OpenStack, oVirt).
- **Citrix XenServer (Citrix Hypervisor)** — Based on open-source Xen. Used in Citrix Virtual Apps and Desktops environments.

**Type 2 — Hosted Hypervisor**
Runs as an application on a conventional host OS. Easier to set up; host OS handles hardware abstraction. Performance overhead from host OS layer.

Examples: VMware Workstation, VirtualBox (Oracle), Parallels Desktop. Used for development, testing, and desktop virtualization — NOT for production servers.

---`,
      },
      {
        id: 'splus-sg-003-2',
        title: "VMware vSphere Architecture",
        content: `- **ESXi Host:** The physical server running the VMware ESXi hypervisor. Hosts VMs.
- **vCenter Server:** Centralized management platform for multiple ESXi hosts. Enables advanced features.
- **VM (Virtual Machine):** Emulated computer with virtual CPU, RAM, disk (VMDK files), and NIC. Runs its own OS.
- **VMware Tools:** Software package installed inside each guest VM providing optimized drivers and enabling vMotion, heartbeat monitoring, and guest customization.
- **VMFS (VMware File System):** Clustered filesystem on shared storage (SAN/iSCSI) that allows multiple ESXi hosts to access the same VM files simultaneously.
- **Datastore:** Storage repository (NFS share, iSCSI LUN, or local disk) where VMDK files and ISO images are stored.

**Advanced vSphere Features:**
- **vMotion:** Live migration of a running VM from one ESXi host to another with no downtime. Requires shared storage, vCenter, and compatible CPU generations.
- **Storage vMotion:** Migrates a running VM's storage between datastores with no downtime.
- **High Availability (HA):** Automatically restarts VMs on surviving hosts if an ESXi host fails (brief outage during restart).
- **DRS (Distributed Resource Scheduler):** Automatically balances VM workloads across ESXi hosts in a cluster based on CPU/RAM utilization.
- **vSAN:** VMware's Software-Defined Storage — pools local disks across ESXi hosts to create a distributed shared storage without a separate SAN array.

---`,
      },
      {
        id: 'splus-sg-003-3',
        title: "Microsoft Hyper-V Architecture",
        content: `- **Hyper-V Host:** Windows Server with the Hyper-V role, or standalone Hyper-V Server.
- **Parent Partition:** The privileged management partition running Windows Server and the Hyper-V management tools.
- **Child Partitions (VMs):** Guest VMs running any supported OS. Windows guests use Integration Services for optimized drivers.
- **Virtual Switch:** Software-defined switch inside Hyper-V. Types: External (connected to physical NIC), Internal (host + VMs communicate), Private (VMs only, isolated from host).
- **VHDX:** Hyper-V virtual disk format. Supports up to 64TB, is more resilient to corruption than older VHD format.
- **Generation 2 VMs:** UEFI-based firmware, Secure Boot, faster boot. Requires compatible 64-bit guest OS.
- **Hyper-V Replica:** Asynchronous replication of VMs to a secondary Hyper-V server for DR purposes.
- **Live Migration:** Like VMware vMotion — moves running VMs between Hyper-V hosts with no downtime.

---`,
      },
      {
        id: 'splus-sg-003-4',
        title: "Containers vs. Virtual Machines",
        content: `| Feature | Virtual Machine | Container (Docker) |
|---------|----------------|-------------------|
| Isolation | Full (separate kernel) | Process-level (shared kernel) |
| OS overhead | Full guest OS per VM | Shared host OS kernel |
| Size | GBs (includes full OS) | MBs (app + libs only) |
| Startup time | Minutes | Seconds |
| Performance | Near-native (with hardware assist) | Near-native (minimal overhead) |
| Portability | Good (VM image files) | Excellent (images on Docker Hub) |
| Security isolation | Strong | Weaker (shared kernel) |

**Docker Key Concepts:**
- **Image:** Read-only template. Layers of filesystem changes stacked on a base image.
- **Container:** Running instance of an image. Adds a thin writable layer.
- **Dockerfile:** Text file with instructions to build an image (\`FROM\`, \`RUN\`, \`COPY\`, \`EXPOSE\`, \`CMD\`).
- **Docker Hub:** Public registry of Docker images.
- **Volume:** Persistent storage mount that survives container deletion.
- **Docker Compose:** YAML-defined multi-container applications.

**Kubernetes Key Concepts:**
- **Pod:** Smallest deployable unit; contains one or more containers sharing a network namespace and storage.
- **Deployment:** Manages desired replica count of pods, rolling updates, and rollbacks.
- **Service:** Stable virtual IP (ClusterIP) and DNS name that load-balances to pod replicas.
- **Namespace:** Virtual cluster providing resource isolation between teams/applications.
- **Ingress:** HTTP/HTTPS routing to services from outside the cluster.
- **kubectl:** Command-line tool for interacting with a Kubernetes cluster.

---`,
      },
      {
        id: 'splus-sg-003-5',
        title: "Virtualization Resource Management",
        content: `**CPU Overcommitment:** Assigning more virtual CPUs to VMs than physical cores exist. Works because VMs are rarely all 100% active simultaneously. Excessive overcommitment causes CPU contention (ready time increases — VMs waiting for CPU time).

**Memory Overcommitment:** Assigning more RAM to VMs than physical RAM available. The hypervisor uses memory management techniques: transparent page sharing (deduplication of identical memory pages), ballooning (reclaiming unused memory from guest VMs), and swapping to disk (last resort — severe performance impact). Excessive overcommitment causes disk swap I/O.

**NUMA Awareness:** In multi-socket servers, memory attached to one CPU socket is faster to access than memory attached to another socket (non-uniform access latency). Hypervisors should align VMs to NUMA nodes to avoid cross-socket memory accesses.`,
      },
    ],
  },
  {
    id: 'splus-sg-004',
    domain: 2,
    title: "Active Directory & Windows Server Roles",
    summary: "Study notes for Active Directory & Windows Server Roles.",
    topics: [
      {
        id: 'splus-sg-004-1',
        title: "Active Directory Fundamentals",
        content: `**What is Active Directory?**
Active Directory Domain Services (AD DS) is Microsoft's centralized directory service for managing users, computers, groups, and other network resources in a Windows domain environment. It provides:
- **Authentication:** Verifying identity (Kerberos v5 is primary; NTLM for legacy)
- **Authorization:** Determining what authenticated users can access
- **Directory Service:** Database of objects (users, computers, groups, printers, OUs)

**Logical Structure:**
- **Domain:** Basic administrative unit. All objects share a common directory database, replication topology, and security policies. Defined by a DNS domain name (e.g., corp.example.com).
- **Tree:** A hierarchy of domains sharing a contiguous DNS namespace. Parent-child domain relationships. Automatic two-way transitive trusts between parent and child.
- **Forest:** The top-level security and replication boundary. Contains one or more domain trees. All domains share a common schema (object class definitions) and global catalog. The first domain created is the forest root domain. Cross-domain trusts within a forest are automatic and transitive.
- **OU (Organizational Unit):** Container within a domain. Used to delegate administrative control and apply GPOs. Can contain users, computers, groups, and nested OUs. Does NOT cross domain boundaries.

**Physical Structure:**
- **Domain Controller (DC):** Server running AD DS. Stores a writable copy of the AD database (NTDS.DIT). Handles authentication requests. Multiple DCs per domain provide fault tolerance and distribute authentication load.
- **FSMO Roles (Flexible Single Master Operations):** Five special roles assigned to specific DCs:
  1. **Schema Master** (per forest) — Controls changes to the AD schema
  2. **Domain Naming Master** (per forest) — Controls adding/removing domains from the forest
  3. **PDC Emulator** (per domain) — Handles time synchronization, account lockouts, password changes, legacy client support
  4. **RID Master** (per domain) — Allocates pools of RIDs (Relative Identifiers) to DCs
  5. **Infrastructure Master** (per domain) — Maintains cross-domain object references
- **Global Catalog (GC):** A DC that stores a partial copy of all objects from all domains in the forest. Used for cross-domain searches and universal group membership. Required for user logon when using UPN suffixes.
- **Site:** Represents a physical network location with reliable, high-bandwidth connectivity. AD replication between sites is scheduled and compressed; within a site, replication is frequent and uncompressed.

---`,
      },
      {
        id: 'splus-sg-004-2',
        title: "Group Policy",
        content: `**GPO (Group Policy Object):** Container for hundreds of settings applied to users and computers in an AD environment.

**Application Order (LSDOU — Last wins by default):**
1. **L**ocal Group Policy (on the computer)
2. **S**ite-level GPOs
3. **D**omain-level GPOs
4. **O**U-level GPOs (parent OU before child OU)

Later policies override earlier ones. Exceptions: **Block Inheritance** (OU admin blocks GPOs from higher levels), **Enforced/No Override** (prevents Block Inheritance from blocking a critical GPO), **Security Filtering** (controls which users/computers a GPO applies to via ACL).

**Common GPO Settings for Servers:**
- Password policies (complexity, length, expiration, lockout threshold)
- Audit policies (enabling security event logging)
- Software restriction / AppLocker policies
- Windows Firewall settings
- Service configuration
- Startup/logon scripts

---`,
      },
      {
        id: 'splus-sg-004-3',
        title: "Key Windows Server Roles",
        content: `**AD DS (Active Directory Domain Services)**
Provides the directory, authentication, and authorization infrastructure. Requires DNS (AD is heavily DNS-dependent — clients find DCs via DNS SRV records).

**DNS Server**
Resolves names to IPs and vice versa. Windows Server DNS integrates with AD for automatic SRV record registration (DCs register _ldap, _kerberos SRV records). Supports primary, secondary, and Active Directory-Integrated zones. AD-Integrated zones store zone data in the AD database and replicate via AD replication (more secure, automatic).

**DHCP Server**
Automatically assigns IP configuration. Concepts:
- **Scope:** Range of IP addresses available for assignment (e.g., 192.168.1.10–192.168.1.250)
- **Exclusion:** Addresses within the scope permanently withheld (for static devices)
- **Reservation:** Specific IP always assigned to a specific MAC address
- **Options:** Additional config data sent to clients (003 = gateway, 006 = DNS servers, 015 = domain name)
- **DHCP Failover:** Two DHCP servers share responsibility for a scope (Active-Active or Active-Standby)
- **DHCP Snooping:** Switch feature that blocks unauthorized DHCP servers on access ports

**File Server**
Provides SMB/NFS file shares. Features: DFS (Distributed File System) for namespace consolidation and replication, Quotas (limit disk usage per user/share), File Screening (block file types), Shadow Copies (VSS-based point-in-time copies accessible to users via "Previous Versions").

**Web Server (IIS — Internet Information Services)**
Hosts websites and web applications. Manages bindings (IP:port:hostname), application pools (isolated worker processes), and HTTPS certificates. Supports ASP.NET, PHP (via FastCGI), and static HTML.

**Print Server**
Centralizes printer management. Clients connect to shared printers on the server. Admins manage drivers, queues, and permissions centrally. Windows uses Point and Print for automatic driver deployment to clients.

**NPS (Network Policy Server)**
Microsoft's RADIUS server implementation. Used for: 802.1X wired/wireless authentication (validates domain credentials before granting network access), VPN authentication, centralized network access policies.

---`,
      },
      {
        id: 'splus-sg-004-4',
        title: "Users and Groups",
        content: `**User Account Types:**
- **Local accounts:** Stored on the local computer. No domain access. Use for standalone servers or emergency access.
- **Domain accounts:** Stored in AD. Can log on to any domain-joined computer (based on permissions). Use for all production users.
- **Service accounts:** Used by services/applications to run under. Should have minimum necessary permissions. Never use Domain Admin as a service account. Managed Service Accounts (MSA) and Group Managed Service Accounts (gMSA) provide automatic password rotation.

**Group Types:**
- **Security Groups:** Used to assign permissions. Can be used in DACLs.
- **Distribution Groups:** Email distribution lists. Cannot be used in DACLs.

**Group Scope:**
- **Domain Local:** Can contain users/groups from any domain; assign permissions only in the local domain. Use in resource DACLs.
- **Global:** Can contain users/groups from same domain only; can assign permissions anywhere in the forest. Use to organize users.
- **Universal:** Can contain users/groups from any domain; can assign permissions anywhere. Membership stored in Global Catalog. Use for cross-domain access.

**Best practice — AGDLP:**
**A**ccounts → **G**lobal groups → **D**omain **L**ocal groups → **P**ermissions
(Put user accounts into global groups, nest global groups into domain local groups, assign permissions to domain local groups)`,
      },
    ],
  },
  {
    id: 'splus-sg-005',
    domain: 4,
    title: "Backup & Disaster Recovery",
    summary: "Study notes for Backup & Disaster Recovery.",
    topics: [
      {
        id: 'splus-sg-005-1',
        title: "Core DR Metrics",
        content: `**RPO (Recovery Point Objective)**
The maximum acceptable data loss, expressed as time. If your RPO is 4 hours, you must have a backup no older than 4 hours. RPO drives how frequently backups run.

Example: RPO = 1 hour → backup every 1 hour (or continuous replication)
Example: RPO = 24 hours → nightly backup is sufficient

**RTO (Recovery Time Objective)**
The maximum acceptable downtime after a disaster. How quickly systems must be restored and operational.

Example: RTO = 15 minutes → requires hot standby/failover clustering
Example: RTO = 4 hours → warm site with pre-staged hardware
Example: RTO = 72 hours → cold site or even tape restore is acceptable

**MTBF (Mean Time Between Failures)**
Statistical average operating time between failures for a component type. Used to estimate annual failure rates and plan redundancy. A 300,000-hour MTBF hard drive has an AFR (Annual Failure Rate) of ~2.9%.

**MTTR (Mean Time To Repair)**
Average time to diagnose and restore a failed component. Lower MTTR achieved through: spare parts inventory, trained technicians, vendor support SLAs (e.g., 4-hour hardware replacement), documented procedures.

**System Availability = MTBF / (MTBF + MTTR)**
Two nines (99%) = ~87 hours downtime/year
Three nines (99.9%) = ~8.7 hours/year
Four nines (99.99%) = ~52 minutes/year
Five nines (99.999%) = ~5 minutes/year

---`,
      },
      {
        id: 'splus-sg-005-2',
        title: "Backup Types",
        content: `**Full Backup**
- Copies ALL selected data
- Slowest to create, fastest to restore (one backup set)
- Resets the change tracking attribute (archive bit/changed-since-last-backup)
- Run weekly as the baseline for most environments

**Incremental Backup**
- Copies only data changed since the LAST BACKUP OF ANY TYPE (full or incremental)
- Fastest to create (smallest data set per session)
- Slowest to restore (need FULL + ALL incrementals since last full)
- Clears the change attribute after each backup
- Chain integrity: if any incremental in the chain is damaged, subsequent restores may fail
- Example restore chain: Full (Sunday) + Mon Inc + Tue Inc + Wed Inc + Thu Inc = Thursday restore

**Differential Backup**
- Copies all data changed since the LAST FULL BACKUP only
- Grows larger each day (more changes accumulate since last full)
- Faster than incremental to create on day 1, slower later in the week
- Fast to restore (need only FULL + MOST RECENT differential — just 2 sets)
- Does NOT clear the change attribute (changes accumulate until next full)
- Example restore chain: Full (Sunday) + Thu Diff = Thursday restore

**Snapshot**
- Point-in-time copy using copy-on-write (COW) or redirect-on-write (ROW) techniques
- Near-instantaneous creation — no data is copied immediately
- Used for: VM checkpoints, LUN snapshots on SAN, VSS (Volume Shadow Copy Service) for application-consistent backups
- NOT a substitute for backup: snapshots exist on the same storage infrastructure. If the storage fails, snapshots are lost too.
- Application-consistent snapshots quiesce the application before snapping (VSS writers for SQL, Exchange, etc.)

---`,
      },
      {
        id: 'splus-sg-005-3',
        title: "Backup Media",
        content: `**Tape (LTO — Linear Tape-Open)**
Highest-capacity, lowest-cost-per-TB for archival. LTO-9: up to 18TB native, 45TB compressed per cartridge. Offline by nature (disconnected from network when removed from library) — ransomware-resistant. Sequential access only (no random access). Long shelf life (30+ years for LTO). Used for long-term compliance archival.

**Disk-Based Backup (NAS/VTL)**
Faster than tape for both backup and restore. VTL (Virtual Tape Library) emulates a tape library on disk for compatibility with tape-based backup software. Disk-to-disk-to-tape (D2D2T) is a common strategy: back up to fast disk first, then duplicate to tape for offsite archival.

**Cloud Backup**
Offsite by definition. Scalable capacity. Cost: ongoing monthly fees for storage + data transfer. Restore speed limited by internet bandwidth — can be slow for large datasets. Suitable for the "1 offsite copy" in the 3-2-1 rule. Popular solutions: Azure Backup, AWS Backup, Veeam Cloud Connect.

**SAN Replication**
Storage arrays replicate LUNs to secondary arrays at the DR site. Synchronous (RPO=0, requires low-latency connection) or asynchronous (supports longer distances, small RPO). Enables near-instant failover for production workloads.

---`,
      },
      {
        id: 'splus-sg-005-4',
        title: "DR Site Types",
        content: `**Hot Site**
- Fully equipped and operational duplicate of production
- Real-time or near-real-time data replication
- Failover in minutes
- Highest cost
- Required for near-zero RTO (financial institutions, hospitals)

**Warm Site**
- Hardware pre-installed and configured but not fully synchronized
- Requires backup restoration (hours) before operations resume
- Moderate cost
- RTO: hours to 1 day

**Cold Site**
- Facility with power, cooling, network — no equipment
- Must procure and install hardware, restore all data after disaster
- Lowest cost
- RTO: days to weeks
- Acceptable for non-critical systems or as a secondary long-term option

**Cloud DR (Disaster Recovery as a Service — DRaaS)**
Increasingly popular alternative. VMs replicated to cloud (Azure Site Recovery, Zerto, Veeam). Failover: start VMs in cloud. Eliminates DR site infrastructure cost. Testing is easier (spin up a copy in cloud without affecting production).

---`,
      },
      {
        id: 'splus-sg-005-5',
        title: "3-2-1 Backup Rule",
        content: `**3** copies of data (original + 2 backups)
**2** different storage media types (e.g., disk AND tape; or disk AND cloud)
**1** copy stored offsite (geographically separate from production)

**Why it works:**
- 3 copies: eliminates single point of failure in backup media
- 2 media types: a failure type that affects one media (e.g., tape humidity damage) won't affect the other
- 1 offsite: protects against local disasters (fire, flood, theft) and ransomware (offsite copy unreachable by attacker)

**Modern extension — 3-2-1-1-0:**
Add: 1 immutable (ransomware-proof, WORM-protected) copy + 0 errors verified by restore testing.

---`,
      },
      {
        id: 'splus-sg-005-6',
        title: "Testing DR Plans",
        content: `DR plans are only as good as their last successful test. Types of tests (least to most disruptive):

1. **Tabletop Exercise:** Team discusses the DR plan scenario without taking any actions. Identifies gaps in procedures.
2. **Walkthrough/Structured Walkthrough:** Team follows the DR plan step-by-step on paper, verifying each step is accurate and complete.
3. **Simulation Test:** IT staff practice the DR procedures in a test environment that does not affect production.
4. **Parallel Test:** DR systems are brought online and tested while production continues normally. Verifies DR systems actually work.
5. **Full Interruption Test (Failover Test):** Production is actually failed over to DR site. Highest fidelity but highest risk — only performed for most critical systems after other tests confirm readiness.

**Backup Restore Tests:** Periodically restore backups to verify data integrity. Many regulatory frameworks (SOC 2, HIPAA, PCI DSS) require documented restore tests. A backup that has never been restore-tested is of unknown value.`,
      },
    ],
  },
  {
    id: 'splus-sg-006',
    domain: 3,
    title: "Server Security Hardening",
    summary: "Study notes for Server Security Hardening.",
    topics: [
      {
        id: 'splus-sg-006-1',
        title: "The Security Baseline",
        content: `Server hardening is the process of reducing a server's attack surface. Every unnecessary service, user account, open port, and permission is a potential vulnerability. The goal is to configure servers with only what is needed to fulfill their function.

**Key Server Hardening Steps (in order after OS installation):**

1. **Apply all OS patches and security updates** before connecting to production network
2. **Disable unnecessary services** (Telnet, Remote Registry, SNMP v1/v2, FTP, etc.)
3. **Remove unnecessary software** (uninstall anything not required for the server's role)
4. **Rename or disable built-in admin accounts** (Windows: rename "Administrator"; Linux: disable direct root SSH login)
5. **Create named individual accounts** for all administrators (for accountability)
6. **Configure host firewall** (Windows Firewall / iptables/firewalld) to allow only required ports
7. **Enable and configure audit logging** (log authentication events, privilege use, file access)
8. **Set strong password policies** (length, complexity, expiration, lockout)
9. **Implement minimum-necessary permissions** (principle of least privilege)
10. **Configure time synchronization** (NTP — required for Kerberos and log correlation)

---`,
      },
      {
        id: 'splus-sg-006-2',
        title: "Access Control Models",
        content: `**DAC (Discretionary Access Control)**
The data/resource owner controls who can access their resources and can grant permissions to others. The most common model for general-purpose systems. Windows NTFS permissions implement DAC — a file owner can change the ACL. Flexible but can lead to permission sprawl.

**MAC (Mandatory Access Control)**
Access is controlled by a central authority based on security labels (sensitivity levels: Unclassified, Secret, Top Secret) and clearances. Users cannot change access levels. Used in government and military environments. Implementation: SELinux, AppArmor. Very rigid but highly secure.

**RBAC (Role-Based Access Control)**
Permissions are assigned to roles; users are assigned to roles. Simplifies administration and enforces separation of duties. Used in most enterprise environments. Example: AD Security Groups used as roles for file share permissions.

**ABAC (Attribute-Based Access Control)**
Access decisions based on attributes of the user (department, clearance level, location), resource (classification, owner), and environment (time of day, network location). More flexible than RBAC. Used in modern IAM and zero trust implementations.

---`,
      },
      {
        id: 'splus-sg-006-3',
        title: "Account Security",
        content: `**Principle of Least Privilege**
Grant only the minimum permissions necessary. Service accounts should not be Domain Admins. Web server processes should run as a low-privilege service account, not as SYSTEM or root. Databases should have their own service accounts with access only to their databases.

**Account Lockout Policy**
Configure to lock accounts after a defined number of failed attempts (typically 5–10). This prevents brute-force attacks. Exam values: lockout threshold (number of bad attempts), lockout duration (minutes before automatic unlock), observation window (time period in which bad attempts are counted).

**Password Policies**
Length is more important than complexity. Current NIST guidance (NIST SP 800-63B) recommends: minimum 8 characters (12+ preferred), allow any characters (spaces, special), check against breached password lists, do NOT require regular expiration for non-compromised passwords. Older policies required complexity (uppercase/lowercase/number/symbol) + regular expiration — this led to predictable passwords.

**Separation of Duties**
No single person should have complete control over critical systems or transactions. IT example: one person approves change requests, a different person implements the change. Financial example: accounts payable cannot also authorize payments.

---`,
      },
      {
        id: 'splus-sg-006-4',
        title: "Auditing and Log Management",
        content: `**Audit Policies (Windows)**
Enable via Group Policy: Computer Configuration → Windows Settings → Security Settings → Audit Policy. Key audits:
- Logon events (success and failure) — detect unauthorized access attempts
- Account management — detect unauthorized account creation/modification
- Object access — detect unauthorized file/folder access (requires per-object SACL configuration)
- Policy change — detect unauthorized GPO/policy modifications
- Privilege use — detect unauthorized use of elevated privileges

**Windows Security Event Log Key Event IDs:**
- 4624: Successful logon
- 4625: Failed logon
- 4720: User account created
- 4740: Account locked out
- 4768: Kerberos authentication ticket requested
- 4769: Kerberos service ticket requested

**Linux Audit Logging**
- **auditd:** Linux audit daemon. Captures system calls, file access, network connections. Rules configured in /etc/audit/rules.d/. Reports via \`ausearch\` and \`aureport\`.
- **/var/log/auth.log or /var/log/secure:** Authentication events (sudo, SSH, PAM). Critical for detecting unauthorized access.
- **Centralize logs to SIEM:** Ship logs to a central log management system (SIEM — Security Information and Event Management) so logs can't be tampered with on the compromised system.

---`,
      },
      {
        id: 'splus-sg-006-5',
        title: "Network Security for Servers",
        content: `**Host-Based Firewall**
Every server should run a host-based firewall regardless of perimeter firewall protection (defense in depth). Allow only the specific ports required for the server's role:
- Web server: TCP 80 (HTTP), TCP 443 (HTTPS)
- SSH: TCP 22 (restrict to management subnets)
- RDP: TCP 3389 (restrict to VPN or management subnets — NEVER expose to internet)
- DNS: UDP/TCP 53

**Network Segmentation**
Servers should be on separate VLANs from end-user workstations. Management interfaces (iDRAC, iLO, IPMI) should be on a dedicated out-of-band management VLAN accessible only from administrator workstations. DMZ for servers hosting public-facing services.

**IDS/IPS (Intrusion Detection/Prevention Systems)**
Host-based IDS/IPS monitors system calls, file integrity, and network connections on the server itself. Network-based IDS/IPS monitors traffic at the network level. IDS alerts; IPS can block.

---`,
      },
      {
        id: 'splus-sg-006-6',
        title: "Certificate Management",
        content: `**SSL/TLS Certificate Lifecycle:**
1. Generate a private key and CSR (Certificate Signing Request) on the server
2. Submit CSR to CA (public CA like DigiCert/Let's Encrypt, or internal CA)
3. CA validates and issues signed certificate
4. Install certificate and private key on server
5. Monitor expiration and renew before expiry (typically 90-day or 1-year certificates)

**Certificate Types:**
- **DV (Domain Validation):** CA verifies domain ownership only. Fast and cheap. Appropriate for internal sites.
- **OV (Organization Validation):** CA verifies organization identity. Shows company name in cert details.
- **EV (Extended Validation):** Strictest validation. Previously showed green bar in browsers.
- **Wildcard:** Covers a domain and all its subdomains (*.example.com).
- **SAN (Subject Alternative Name):** One certificate covers multiple specific domain names.

**PKI Components:**
- **CA (Certificate Authority):** Issues and signs digital certificates
- **CRL (Certificate Revocation List):** List of revoked certificate serial numbers published by CA
- **OCSP (Online Certificate Status Protocol):** Real-time certificate revocation checking
- **Trust Store:** Repository of trusted root CA certificates in OS/browser

---`,
      },
      {
        id: 'splus-sg-006-7',
        title: "Vulnerability Management",
        content: `**Scan regularly** — monthly minimum, or after significant changes.
**Authenticated scans** find more vulnerabilities than unauthenticated scans (can see installed software versions, missing patches, configuration issues).
**CVSS (Common Vulnerability Scoring System)** scores severity: 0–3.9 Low, 4.0–6.9 Medium, 7.0–8.9 High, 9.0–10 Critical.
**Patch prioritization:** Critical + High CVEs with public exploits → patch immediately. Others within defined SLAs (e.g., High = 30 days, Medium = 90 days, Low = next maintenance window).
**Compensating controls:** If a patch can't be applied immediately, mitigate: disable the vulnerable service, add firewall rules to restrict access, enable enhanced logging.`,
      },
    ],
  },
  {
    id: 'splus-sg-007',
    domain: 5,
    title: "Server Troubleshooting",
    summary: "Study notes for Server Troubleshooting.",
    topics: [
      {
        id: 'splus-sg-007-1',
        title: "Troubleshooting Process",
        content: `CompTIA's recommended troubleshooting methodology (also applicable to Server+):

1. **Identify the problem** — Gather information, identify symptoms, question affected users, review recent changes
2. **Establish a theory of probable cause** — Consider multiple hypotheses, start with most likely
3. **Test the theory** — Confirm hypothesis or re-theorize
4. **Establish a plan of action** — Identify steps to resolve, consider impact/risk
5. **Implement the solution** — Execute the fix or escalate
6. **Verify full functionality** — Confirm the problem is resolved, implement preventive measures
7. **Document findings** — Record what was found, what was done, and the outcome

---`,
      },
      {
        id: 'splus-sg-007-2',
        title: "Hardware Troubleshooting",
        content: `**POST Failures**
POST (Power-On Self-Test) is the firmware-level hardware check before the OS loads. Failures manifest as:
- **Beep codes:** Audio codes from the system speaker. Meaning varies by BIOS manufacturer (AMI, Award, Phoenix). Common causes: unseated/failed RAM, CPU issue, missing video card.
- **Error codes on POST display:** Many servers have a 2-digit POST code display on the chassis showing progress through POST stages. Refer to server documentation.
- **No POST at all:** Check power (PSU status LEDs), check all power connectors inside server, reseat components.

**Diagnostic LEDs**
Enterprise servers have status LEDs for: power status, system health, NIC link/activity, drive activity, individual drive status (green=normal, amber=fault/degraded, off=failed or absent). iDRAC/iLO also shows detailed LED meaning in the management interface.

**Memory Errors**
- **Single-bit errors corrected by ECC:** Normal in small quantities. If the rate is increasing, identify and replace the failing DIMM. Run vendor memory diagnostics (Dell memory diagnostics, HP Smart Storage administrator, or memtest86+).
- **Double-bit (uncorrectable) error:** System crash (blue screen/kernel panic). Requires immediate DIMM replacement.
- Identify failing DIMM: check iDRAC/iLO System Event Log for the DIMM slot identifier.

**Storage Troubleshooting**
- **SMART attributes to watch:** Reallocated_Sector_Ct (increasing = bad sectors), Pending_Sector_Count (sectors pending reallocation), Uncorrectable_Sector_Count (permanent read failures), Temperature_Celsius (high temp = reliability risk).
- **RAID degraded:** One drive failed but array operational. Replace failed drive immediately; the array is vulnerable to data loss until rebuild completes.
- **RAID failed:** Too many drives failed. Data may be lost. Restore from backup.
- **Controller cache issues:** Battery-backed write cache failure puts controller into write-through mode (slower but safe). Replace battery or flash module.

---`,
      },
      {
        id: 'splus-sg-007-3',
        title: "OS Boot Troubleshooting",
        content: `**Windows Boot Failures**

| Symptom | Likely Cause | Resolution |
|---------|-------------|------------|
| "BOOTMGR is missing" | Boot partition corruption, incorrect boot order | Boot from Windows installation media, use repair tools: \`bootrec /fixmbr\`, \`bootrec /fixboot\`, \`bootrec /rebuildbcd\` |
| "Winload.exe is missing or corrupt" | Boot files damaged | \`bootrec /rebuildbcd\`, system file checker from WinPE |
| Blue screen during boot | Driver issue, hardware failure | Boot to Safe Mode, check Event Viewer, roll back recent driver/update |
| Stuck at "Preparing Automatic Repair" | File system corruption | Check disk from WinPE: \`chkdsk /f /r\` |

**Linux Boot Failures**

| Symptom | Likely Cause | Resolution |
|---------|-------------|------------|
| Drops to initramfs or emergency shell | Failed mount in /etc/fstab, root filesystem errors | Check /etc/fstab entries; run \`fsck -y /dev/sdX\` |
| "No such file or directory" for kernel | GRUB misconfiguration | Edit GRUB entries at boot (press 'e'), reinstall GRUB: \`grub-install /dev/sda && update-grub\` |
| Read-only root filesystem | Filesystem errors detected during boot | Boot to rescue mode, run \`fsck -y /dev/sdX\`, reboot |
| \`systemd\` emergency target | Service failure / mount failure | \`systemctl status failed\`, fix the failing unit, disable with \`--force\` if non-critical |

---`,
      },
      {
        id: 'splus-sg-007-4',
        title: "Network Troubleshooting on Servers",
        content: `**Basic Connectivity Checks (in order):**
1. Check physical link indicators (NIC LED, switch port LED)
2. Verify IP configuration: \`ipconfig /all\` (Windows) or \`ip addr show\` (Linux)
3. Ping local gateway (tests local subnet and default gateway routing)
4. Ping known external IP (tests routing to internet, bypasses DNS)
5. Ping hostname (tests DNS resolution)
6. Check routing table: \`route print\` (Windows) or \`ip route show\` (Linux)
7. Check listening services: \`netstat -tulpn\` (Linux) or \`netstat -an\` (Windows)

**NIC Teaming Issues:**
- Verify both NICs have physical link: \`ethtool eth0 | grep Link\` (Linux)
- Check teaming/bonding driver logs: \`dmesg | grep bond\`, \`/var/log/messages\`
- Verify switch port configuration matches teaming mode (LACP requires matching switch port-channel configuration)
- Active-passive: only one NIC carries traffic; verify correct NIC is active

**VLAN Misconfiguration:**
- Verify server NIC VLAN tag configuration matches switch port (access port vs. trunk port)
- Wrong VLAN ID → server can reach wrong subnet or no resources
- Check with switch team: \`show interfaces trunk\`, \`show vlan brief\`

---`,
      },
      {
        id: 'splus-sg-007-5',
        title: "Performance Troubleshooting",
        content: `**CPU Bottleneck**
Symptoms: high CPU utilization, slow response times, application timeouts.
Diagnosis tools:
- Windows: Task Manager, Resource Monitor, Performance Monitor (perfmon), \`Get-Process | Sort-Object CPU -Descending\`
- Linux: \`top\`, \`htop\`, \`vmstat 1\`, \`sar -u 1 10\`
Identify the specific process consuming CPU. Consider: legitimate workload growth (add capacity), runaway process/bug (restart service, contact vendor), malware (investigate and remediate).

**Memory Bottleneck**
Symptoms: high paging/swapping activity, slow disk I/O, application crashes (OOM errors).
Diagnosis:
- Windows: Task Manager → Performance → Memory (look at "In Use" vs. "Available"), high "Hard Faults/sec" in Performance Monitor indicates excessive paging
- Linux: \`free -h\`, \`vmstat 1\` (watch \`si\`/\`so\` = swap in/out), \`top\` (look at \`VIRT\` vs \`RES\`)
Solutions: add physical RAM, close unnecessary services, identify and fix memory leaks, add swap space (temporary mitigation only).

**Disk I/O Bottleneck**
Symptoms: high disk wait time, slow file operations, database timeouts.
Diagnosis:
- Windows: Task Manager → Performance → Disk, Performance Monitor: Avg. Disk Queue Length (>2 sustained = bottleneck), Disk Transfers/sec
- Linux: \`iostat -xz 1\` (look at \`%util\`, \`await\`, \`r/s\`, \`w/s\`)
Solutions: upgrade to SSDs/NVMe, add RAID striping, distribute I/O across multiple spindles, move logs/temp files to faster storage, add I/O cache.

**Network Bottleneck**
Symptoms: high network utilization, high latency, packet loss.
Diagnosis:
- Windows: Task Manager → Performance → Ethernet, Performance Monitor: Bytes Total/sec
- Linux: \`ifstat\`, \`iftop\`, \`nload\`
Solutions: upgrade NIC to higher speed (1GbE → 10GbE), enable NIC teaming/bonding, optimize application network usage, investigate top talkers.

---`,
      },
      {
        id: 'splus-sg-007-6',
        title: "Log Analysis",
        content: `**Windows Event Viewer — Key Locations:**
- **System log:** Service failures, driver issues, hardware events, unexpected shutdowns (ID 6008, 41)
- **Application log:** Application errors and crashes (ID 1000, 1001)
- **Security log:** Logon events (4624 success, 4625 failure), account lockouts (4740), policy changes
- **Custom Views:** Create filtered views for specific event IDs or sources to speed troubleshooting

**Linux Log Files:**
- **/var/log/syslog or /var/log/messages:** General system/daemon events
- **/var/log/auth.log or /var/log/secure:** SSH, sudo, PAM authentication
- **/var/log/kern.log or dmesg:** Kernel messages, hardware errors
- **/var/log/boot.log:** Boot process messages
- **journalctl:** Unified log access for systemd systems. \`journalctl -u httpd\` shows service logs; \`journalctl -p err\` shows errors; \`journalctl --since "1 hour ago"\` for recent events; \`journalctl -xe\` for extended info on recent errors.`,
      },
    ],
  },
]
