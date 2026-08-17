// Server+ SK0-005 Flashcards
// 50+ key term flashcards covering all five domains

export const flashcards = [
  // ── DOMAIN 1: Server Hardware ─────────────────────────────────────────────
  {
    id: 'splus-fc-001',
    domain: 1,
    term: 'Rack Unit (U)',
    definition: 'A standardized unit of measure for rack-mounted equipment height. 1U = 1.75 inches (44.45 mm). Standard server racks are typically 42U tall. Servers are sold as 1U, 2U, 4U, etc. Higher U count = more internal expansion space but uses more rack space.'
  },
  {
    id: 'splus-fc-002',
    domain: 1,
    term: 'Blade Server',
    definition: 'A modular server form factor where individual server "blades" (compute modules) slide into a shared chassis (blade enclosure). The chassis provides shared power supplies, cooling fans, network switching, and management. Maximizes compute density and reduces cabling. Examples: HPE BladeSystem, Dell PowerEdge M-Series.'
  },
  {
    id: 'splus-fc-003',
    domain: 1,
    term: 'Hot-Swap',
    definition: 'The ability to remove and replace a hardware component (power supply, hard drive, fan) while the system remains powered on and operational. Critical for high-availability servers where downtime must be avoided. Compare to cold-swap (requires power-off) and warm-swap (requires a brief pause).'
  },
  {
    id: 'splus-fc-004',
    domain: 1,
    term: 'ECC RAM (Error-Correcting Code)',
    definition: 'Server memory that uses extra bits to detect and automatically correct single-bit memory errors in real time. Prevents silent data corruption. Registered ECC DIMMs (RDIMMs) include a register/buffer chip for stability with many DIMMs per channel. Required for production servers. Consumer PCs typically use non-ECC RAM.'
  },
  {
    id: 'splus-fc-005',
    domain: 1,
    term: 'IPMI (Intelligent Platform Management Interface)',
    definition: 'A standardized specification for out-of-band server management via a dedicated Baseboard Management Controller (BMC). Allows remote power control, console access, hardware sensor monitoring, and event logging independently of the host OS — even when the server is powered off. Operates over a dedicated management network interface.'
  },
  {
    id: 'splus-fc-006',
    domain: 1,
    term: 'iDRAC (Integrated Dell Remote Access Controller)',
    definition: 'Dell\'s vendor implementation of IPMI/out-of-band management. Provides a web interface and API for remote server management including power control, virtual console, virtual media, hardware health monitoring, and lifecycle controller for firmware/BIOS management. Equivalent products: HPE iLO, Lenovo XClarity.'
  },
  {
    id: 'splus-fc-007',
    domain: 1,
    term: 'iLO (Integrated Lights-Out)',
    definition: 'HPE\'s (Hewlett Packard Enterprise) out-of-band server management controller. Like iDRAC, it provides remote console, power management, hardware health monitoring, and firmware management capabilities independent of the host OS. The "Lights-Out" name refers to managing servers without requiring anyone to be physically present in the data center.'
  },
  {
    id: 'splus-fc-008',
    domain: 1,
    term: 'KVM Switch (Keyboard, Video, Mouse)',
    definition: 'A hardware device that allows a single keyboard, monitor, and mouse to control multiple servers. Administrators switch between servers using a hotkey or front-panel button. IP-based KVM switches extend this over the network. Distinct from IPMI (which is software/firmware-based remote management).'
  },
  {
    id: 'splus-fc-009',
    domain: 1,
    term: 'UPS — Offline/Standby',
    definition: 'The simplest UPS type. Under normal conditions, power passes directly from utility to load; the battery is on standby. When utility power fails, the UPS transfers to battery within 4–12 milliseconds. Least expensive but has a transfer delay and does not condition power. Suitable for basic desktop protection but not ideal for sensitive server equipment.'
  },
  {
    id: 'splus-fc-010',
    domain: 1,
    term: 'UPS — Line-Interactive',
    definition: 'A UPS type with an autotransformer that regulates voltage for minor sags and surges without switching to battery. Has a shorter transfer time than standby UPS (~2–4 ms). Offers better power conditioning than standby. Common middle-ground choice for small server rooms. Still has a brief transfer delay during complete power failure.'
  },
  {
    id: 'splus-fc-011',
    domain: 1,
    term: 'UPS — Online Double-Conversion',
    definition: 'The highest-quality UPS type. Converts incoming AC to DC, then back to AC through an inverter — servers always run from the inverter. Zero transfer time during power failure. Completely isolates equipment from utility power problems (sags, surges, frequency variations, noise). Most expensive. Required for critical servers and data center equipment.'
  },
  {
    id: 'splus-fc-012',
    domain: 1,
    term: 'Rack PDU (Power Distribution Unit)',
    definition: 'A multi-outlet power strip designed for rack-mounted equipment. Distributes power from a single high-amperage circuit to multiple server outlets. Smart/managed PDUs add remote outlet switching, power monitoring, and current measurement per outlet. Installed vertically or horizontally in the rack. Should be loaded to no more than 80% of rated amperage.'
  },
  {
    id: 'splus-fc-013',
    domain: 1,
    term: 'HBA (Host Bus Adapter)',
    definition: 'An expansion card that connects a server to an external storage network. Most commonly used for Fibre Channel SAN connectivity. The HBA handles FC protocol processing, presenting storage LUNs to the OS as block devices. Also available for iSCSI (software or hardware initiator) and SAS. Distinct from a RAID controller, which manages internal drives.'
  },
  {
    id: 'splus-fc-014',
    domain: 1,
    term: 'Hot Aisle / Cold Aisle',
    definition: 'Data center rack arrangement that separates airflow: rack fronts face each other across the cold aisle (where cool air is supplied from raised floor tiles or overhead), and rack rears exhaust hot air into the hot aisle (where CRAC/CRAH units remove heat). Prevents hot exhaust air from being recirculated to server intakes. Blanking panels fill empty rack U spaces to prevent bypass air.'
  },

  // ── DOMAIN 2: Server Administration ──────────────────────────────────────
  {
    id: 'splus-fc-015',
    domain: 2,
    term: 'RAID 0 (Striping)',
    definition: 'Data is split and written across multiple disks simultaneously for improved read/write performance. Minimum 2 disks. NO fault tolerance — if any disk fails, all data is lost. Usable capacity = total of all disks. Used where performance is critical and data loss is acceptable (e.g., video editing scratch disks). Not for production data.'
  },
  {
    id: 'splus-fc-016',
    domain: 2,
    term: 'RAID 1 (Mirroring)',
    definition: 'Data is written identically to two disks simultaneously, creating a mirror. Minimum 2 disks. Tolerates failure of one disk. Usable capacity = 50% of raw total (n/2). Good read performance (can read from either disk); write performance similar to single disk. Simple fault tolerance. Used for OS drives or critical small databases.'
  },
  {
    id: 'splus-fc-017',
    domain: 2,
    term: 'RAID 5 (Striping with Distributed Parity)',
    definition: 'Data and parity information are striped across all disks. Minimum 3 disks. Tolerates 1 disk failure; data rebuilt from remaining disks + parity on replacement. Usable capacity = (n-1) drives. Good read performance; write performance slightly reduced (parity calculation overhead). Most common RAID level for general server storage. Risk: if a second drive fails during rebuild, data is lost.'
  },
  {
    id: 'splus-fc-018',
    domain: 2,
    term: 'RAID 6 (Double Distributed Parity)',
    definition: 'Like RAID 5 but with two independent parity blocks per stripe. Minimum 4 disks. Tolerates simultaneous failure of ANY two disks. Usable capacity = (n-2) drives. Recommended for large disk arrays where single-drive failure during rebuild carries significant risk of a second failure. Write performance is slightly lower than RAID 5 due to double parity calculation.'
  },
  {
    id: 'splus-fc-019',
    domain: 2,
    term: 'RAID 10 (Mirrored Stripes)',
    definition: 'Combines RAID 1 mirroring and RAID 0 striping. Data is mirrored (RAID 1), and the mirror pairs are striped together (RAID 0). Minimum 4 disks. Excellent read AND write performance. Can survive multiple drive failures (one per mirror pair). Usable capacity = 50% of total raw. High cost (half capacity used for redundancy). Best for high-performance, high-availability databases.'
  },
  {
    id: 'splus-fc-020',
    domain: 2,
    term: 'Active Directory (AD)',
    definition: 'Microsoft\'s directory service for Windows domain environments. Stores information about users, computers, groups, and resources. Provides authentication (Kerberos/NTLM) and authorization. Components: domain, forest, tree, OU (organizational unit), GPO (Group Policy Object). Runs on Domain Controllers (DCs). The foundation of Windows enterprise identity management.'
  },
  {
    id: 'splus-fc-021',
    domain: 2,
    term: 'Forest / Domain / Tree (Active Directory)',
    definition: 'Forest: the top-level AD container; a collection of one or more domain trees sharing a common schema, global catalog, and trust relationships. Domain: a logical grouping of network objects sharing a common directory database. Tree: a hierarchy of domains sharing a contiguous DNS namespace. A forest can contain multiple trees. The first domain created is the forest root domain.'
  },
  {
    id: 'splus-fc-022',
    domain: 2,
    term: 'Organizational Unit (OU)',
    definition: 'A container in Active Directory used to organize users, computers, groups, and other OUs within a domain. Used to apply Group Policy Objects (GPOs) and delegate administrative control (e.g., "helpdesk can reset passwords in the Sales OU"). OUs can be nested. Unlike groups, OUs cannot be used in ACLs to assign resource permissions.'
  },
  {
    id: 'splus-fc-023',
    domain: 2,
    term: 'GPO (Group Policy Object)',
    definition: 'A collection of Group Policy settings that can be applied to users and computers in an Active Directory domain. Linked to sites, domains, or OUs. Can configure security settings, software installation, desktop restrictions, logon scripts, and hundreds of OS settings. Processed in LSDOU order (Local → Site → Domain → OU). Later GPOs override earlier ones (by default).'
  },
  {
    id: 'splus-fc-024',
    domain: 2,
    term: 'DNS Server Role',
    definition: 'Resolves hostnames to IP addresses (forward lookup: A/AAAA records) and IP addresses to hostnames (reverse lookup: PTR records). Critical for Active Directory (AD uses DNS to locate domain controllers via SRV records). Also stores MX (mail), CNAME (alias), NS (name server), and SOA (start of authority) records. Windows Server DNS integrates with AD for dynamic updates.'
  },
  {
    id: 'splus-fc-025',
    domain: 2,
    term: 'DHCP Server',
    definition: 'Automatically assigns IP configuration to network clients (IP address, subnet mask, default gateway, DNS server addresses, lease duration). Process: DORA (Discover → Offer → Request → Acknowledge). Scope: a range of IP addresses a DHCP server can assign. Exclusions: addresses within a scope not assigned by DHCP. Reservations: permanent IP-to-MAC mappings. DHCP failover allows two servers to share scope responsibilities.'
  },
  {
    id: 'splus-fc-026',
    domain: 2,
    term: 'NFS (Network File System)',
    definition: 'A distributed file system protocol originating from Sun Microsystems. The native file sharing protocol for Unix/Linux systems. Allows Linux/Unix clients to mount remote directories as if they were local. NFSv3 uses TCP/UDP; NFSv4 uses TCP only and adds stateful operations, security improvements (Kerberos support). Server exports defined in /etc/exports; client mounts configured in /etc/fstab.'
  },
  {
    id: 'splus-fc-027',
    domain: 2,
    term: 'SMB/CIFS (Server Message Block)',
    definition: 'The native Windows file sharing protocol. Allows Windows clients to access shared files, printers, and named pipes. Also used by Linux (via Samba) for cross-platform file sharing. SMB 3.x (Windows Server 2012+) adds encryption, multichannel (multiple NICs), and SMB Direct (RDMA). CIFS is an older dialect of SMB. Samba implements SMB on Linux, enabling Linux servers to serve Windows clients.'
  },
  {
    id: 'splus-fc-028',
    domain: 2,
    term: 'iSCSI',
    definition: 'IP-based storage protocol that encapsulates SCSI commands within TCP/IP packets, allowing block-level storage access over standard Ethernet networks. An initiator (server) connects to a target (storage array) over TCP port 3260. More cost-effective than Fibre Channel (uses existing Ethernet infrastructure). iSCSI software initiators use host CPU for processing; hardware iSCSI HBAs offload processing.'
  },
  {
    id: 'splus-fc-029',
    domain: 2,
    term: 'SAN (Storage Area Network)',
    definition: 'A dedicated high-speed network that provides block-level storage to servers. Storage appears as local disks to connected servers. Protocols: Fibre Channel (FC), iSCSI, FCoE. Enables storage consolidation, thin provisioning, snapshots, and live migration of VMs. More complex and expensive than NAS. Best for high-performance databases and virtualization environments.'
  },
  {
    id: 'splus-fc-030',
    domain: 2,
    term: 'NAS (Network Attached Storage)',
    definition: 'A file-level storage server accessible over a standard IP network using file sharing protocols (NFS for Linux, SMB/CIFS for Windows). Easy to deploy and manage. Suitable for file shares, home directories, and backup targets. Multiple clients can access the same files simultaneously. Less complex than SAN. Examples: Synology, QNAP, NetApp (also has enterprise SAN products).'
  },
  {
    id: 'splus-fc-031',
    domain: 2,
    term: 'DAS (Direct-Attached Storage)',
    definition: 'Storage connected directly to a server without a storage network. Examples: internal SATA/SAS drives, external USB/SAS drive enclosures, eSATA. Lowest cost and latency but not shareable between servers. Cannot be accessed by other servers on the network. Used in small environments or where dedicated storage per server is acceptable.'
  },
  {
    id: 'splus-fc-032',
    domain: 2,
    term: 'VMware ESXi',
    definition: 'VMware\'s Type 1 (bare-metal) hypervisor. Runs directly on server hardware without a conventional host OS. Hosts multiple VMs on shared physical resources. Managed individually via DCUI/web client or centrally via vCenter Server. Supports features like vMotion (live migration), High Availability (HA), DRS (Distributed Resource Scheduler), and VMFS (VMware File System). Industry-leading enterprise virtualization platform.'
  },
  {
    id: 'splus-fc-033',
    domain: 2,
    term: 'Hyper-V',
    definition: 'Microsoft\'s Type 1 hypervisor included with Windows Server and available as a free standalone product (Hyper-V Server). Integrated with Windows administration tools (Server Manager, PowerShell, System Center). Supports live migration, clustering, Hyper-V Replica, and Storage Spaces. Generation 2 VMs support UEFI/Secure Boot and virtual TPM. Tightly integrated with Windows ecosystem.'
  },
  {
    id: 'splus-fc-034',
    domain: 2,
    term: 'Docker',
    definition: 'A platform for developing, shipping, and running applications in containers. Containers package an application with its dependencies but share the host OS kernel. Docker images are read-only templates; running instances are containers. Docker Daemon (dockerd) manages containers. Docker Hub is the public container image registry. Docker Compose manages multi-container applications. Containers are ephemeral by default; persistent data uses volumes.'
  },
  {
    id: 'splus-fc-035',
    domain: 2,
    term: 'Kubernetes (K8s)',
    definition: 'An open-source container orchestration platform for automating deployment, scaling, and management of containerized applications. Key concepts: Pod (smallest deployable unit, one or more containers), Node (worker server running pods), Cluster (collection of nodes), Deployment (manages pod replicas), Service (stable network endpoint for pods), Namespace (virtual cluster for isolation). Often used with Docker containers in production environments.'
  },

  // ── DOMAIN 3: Security ────────────────────────────────────────────────────
  {
    id: 'splus-fc-036',
    domain: 3,
    term: 'Principle of Least Privilege',
    definition: 'A security principle stating that users, processes, and systems should be granted only the minimum permissions necessary to perform their intended function. Reduces blast radius of compromised accounts. Implementation examples: service accounts with limited permissions, standard user accounts for daily tasks with separate admin accounts, just-in-time access provisioning.'
  },
  {
    id: 'splus-fc-037',
    domain: 3,
    term: 'RBAC (Role-Based Access Control)',
    definition: 'An access control model where permissions are assigned to roles, and users are assigned to roles. Simplifies administration: changing a user\'s job means changing role membership, not individual permissions. Supports separation of duties. Examples: AD security groups used as RBAC roles for file share permissions. Compare to DAC (owner sets permissions) and MAC (labels and clearances).'
  },
  {
    id: 'splus-fc-038',
    domain: 3,
    term: 'Server Hardening',
    definition: 'The process of reducing a server\'s attack surface by: removing unnecessary software/services/accounts, applying all security patches, configuring a host-based firewall, enabling audit logging, using strong passwords, renaming or disabling default accounts (Administrator, root), changing default ports, configuring minimum-necessary permissions, and enabling only required network services.'
  },
  {
    id: 'splus-fc-039',
    domain: 3,
    term: 'SSL/TLS Certificate',
    definition: 'A digital certificate that binds a cryptographic key pair to an organization or server identity, verified by a Certificate Authority (CA). Enables HTTPS encryption. Contains: subject (common name/SAN), issuer (CA), validity period, public key, and digital signature. The server uses its private key to prove identity; clients use the public key to encrypt the TLS session key. TLS 1.3 is the current recommended version.'
  },
  {
    id: 'splus-fc-040',
    domain: 3,
    term: 'Vulnerability Scanning',
    definition: 'An automated process of identifying known security weaknesses (CVEs) in systems, applications, and network services. Tools: Nessus, OpenVAS, Qualys, Microsoft Security Baseline Analyzer. Produces reports with CVSS severity scores. Authenticated scans (using credentials) find more vulnerabilities than unauthenticated scans. Should be run regularly (monthly minimum) and after significant changes. Results drive patch management priorities.'
  },
  {
    id: 'splus-fc-041',
    domain: 3,
    term: 'SMART Status (Self-Monitoring, Analysis and Reporting Technology)',
    definition: 'A monitoring system built into hard drives and SSDs that tracks reliability metrics such as reallocated sectors, spin-up time, read error rate, temperature, and power-on hours. Key warning attributes: Reallocated_Sector_Ct (increasing = bad sectors being remapped), Pending_Sector_Count (unreadable sectors), Uncorrectable_Sector_Count. Use tools like `smartctl` (Linux) or CrystalDiskInfo (Windows) to monitor SMART status.'
  },

  // ── DOMAIN 4: Disaster Recovery ───────────────────────────────────────────
  {
    id: 'splus-fc-042',
    domain: 4,
    term: 'RPO (Recovery Point Objective)',
    definition: 'The maximum acceptable age of the most recent backup or restore point — i.e., how much data loss the organization can tolerate. Example: RPO = 4 hours means backups must occur at least every 4 hours. Drives backup frequency decisions. RPO of zero requires synchronous replication. Used in BCP/DRP planning alongside RTO.'
  },
  {
    id: 'splus-fc-043',
    domain: 4,
    term: 'RTO (Recovery Time Objective)',
    definition: 'The maximum acceptable duration of downtime after a disaster — how quickly systems must be restored to operation. Example: RTO = 2 hours means systems must be operational within 2 hours of a failure. Shorter RTOs require more expensive solutions (hot sites, redundant clusters). Longer RTOs allow more economical solutions (backup restore from tape). RTO drives DR architecture decisions.'
  },
  {
    id: 'splus-fc-044',
    domain: 4,
    term: '3-2-1 Backup Rule',
    definition: 'A backup best practice: maintain 3 copies of data (production + 2 backups), on 2 different storage media types (e.g., disk and tape, or disk and cloud), with 1 copy stored offsite (geographically separate from production). Protects against single points of failure, media-specific failure, local disasters (fire, flood), and ransomware (the offsite copy is unreachable by malware attacking local systems).'
  },
  {
    id: 'splus-fc-045',
    domain: 4,
    term: 'Hot Site',
    definition: 'A fully operational, continuously maintained DR facility that replicates the production environment in real time (or near real time). All hardware is installed, configured, and running. Failover can occur within minutes. Most expensive DR option. Best for organizations with near-zero RTO requirements. Requires ongoing investment to keep systems current and synchronized.'
  },
  {
    id: 'splus-fc-046',
    domain: 4,
    term: 'Warm Site',
    definition: 'A DR facility with hardware pre-installed and partially configured, but not fully synchronized with production. Requires restoring recent backups and some configuration before operations resume. Failover typically takes hours to a day. Moderate cost. Balances cost and recovery speed. More common than hot sites for organizations with moderate RTO requirements.'
  },
  {
    id: 'splus-fc-047',
    domain: 4,
    term: 'Cold Site',
    definition: 'A basic DR facility with power, cooling, and network connectivity but no pre-installed equipment. Hardware must be procured, shipped, installed, configured, and data restored after a disaster. Recovery can take days to weeks. Least expensive DR site option. Appropriate for organizations with high RTO tolerance or very long-term disruption scenarios. Often just a co-location space reserved for emergency use.'
  },
  {
    id: 'splus-fc-048',
    domain: 4,
    term: 'Full Backup',
    definition: 'A backup that copies ALL selected data regardless of when it was last changed. Creates a complete point-in-time copy. Slowest backup type (most data to transfer) but fastest to restore (single backup set needed). Typically combined with incremental or differential backups: run full backups weekly, differential or incremental daily. Full backup resets the "archive bit" or "changed since last backup" marker.'
  },
  {
    id: 'splus-fc-049',
    domain: 4,
    term: 'Incremental Backup',
    definition: 'Backs up only data that has changed since the LAST BACKUP OF ANY TYPE (full or incremental). Fastest backup to create (smallest dataset). Slowest to restore (requires full backup + ALL incrementals since then). Uses least backup storage day-to-day. Risk: if one incremental in the chain is corrupted, subsequent restores may fail. Contrast with differential backup.'
  },
  {
    id: 'splus-fc-050',
    domain: 4,
    term: 'Differential Backup',
    definition: 'Backs up only data that has changed since the LAST FULL BACKUP. Grows larger each day as more changes accumulate since the last full. Slower to create than incremental (larger dataset). Faster to restore than incremental (requires only full + most recent differential). Good balance for environments needing faster recovery. Restoration requires exactly 2 sets: last full + latest differential.'
  },
  {
    id: 'splus-fc-051',
    domain: 4,
    term: 'Snapshot',
    definition: 'A point-in-time copy of a storage volume or virtual machine created almost instantaneously using copy-on-write or redirect-on-write techniques. Does not duplicate all data immediately — only tracks changes from the snapshot point forward. Used for quick recovery, testing, and VM checkpoints. NOT a substitute for true backups (snapshots rely on the same storage infrastructure; if the LUN fails, snapshots are lost too).'
  },
  {
    id: 'splus-fc-052',
    domain: 4,
    term: 'Failover Clustering',
    definition: 'A high-availability configuration where two or more servers (nodes) share workloads, and if one node fails, the others automatically take over its workloads with minimal interruption. Windows Server Failover Clustering (WSFC) uses shared storage or Storage Spaces Direct. Requires a quorum mechanism to prevent "split-brain" scenarios. Used for SQL Server, file servers, Hyper-V, and other applications requiring HA.'
  },
  {
    id: 'splus-fc-053',
    domain: 4,
    term: 'MTBF (Mean Time Between Failures)',
    definition: 'A statistical reliability metric representing the average time a device operates between failures across a large population of identical devices. Expressed in hours. Example: MTBF of 500,000 hours does NOT mean a drive lasts 57 years — it means the population failure rate is 1/500,000 per hour. Used to calculate annual failure rates and plan redundancy. Formula: MTBF = Total operating time / Number of failures.'
  },
  {
    id: 'splus-fc-054',
    domain: 4,
    term: 'MTTR (Mean Time To Repair)',
    definition: 'The average time required to repair a failed component or system and restore it to normal operation. Includes time to diagnose, obtain replacement parts, replace, test, and verify. Measured in hours or days. Lower MTTR = better. Minimized by: spare parts inventory, documented procedures, trained staff, and vendor support contracts (e.g., 4-hour hardware replacement SLAs). Used alongside MTBF to calculate system availability.'
  },
  {
    id: 'splus-fc-055',
    domain: 4,
    term: 'Synchronous vs. Asynchronous Replication',
    definition: 'Synchronous: write is not acknowledged to the application until confirmed at BOTH primary and replica. Guarantees RPO=0 (zero data loss) but adds latency; feasible only over short distances. Asynchronous: write is acknowledged immediately at primary; replica update happens in background. Lower latency, supports longer distances, but small data loss risk (RPO > 0) if failure occurs before replication completes.'
  },

  // ── DOMAIN 5: Troubleshooting ─────────────────────────────────────────────
  {
    id: 'splus-fc-056',
    domain: 5,
    term: 'NIC Teaming (Link Aggregation)',
    definition: 'Combining two or more physical NICs into a logical interface to provide bandwidth aggregation and/or fault tolerance. Modes: Active-Active (both NICs carry traffic, bandwidth aggregated), Active-Passive (one NIC carries traffic; backup activates on failure). Requires switch support for LACP (802.3ad) in active-active mode. Eliminates the NIC as a single point of failure. Also called bonding (Linux) or NIC teaming (Windows).'
  },
  {
    id: 'splus-fc-057',
    domain: 5,
    term: 'POST (Power-On Self-Test)',
    definition: 'Firmware-level hardware diagnostic that runs immediately when a server is powered on. Tests CPU, RAM, storage controllers, and other fundamental components before the OS loads. Failures are reported via beep codes (audio signals from the system speaker) or error codes on a diagnostic LED display (POST code display). If POST fails, the server cannot boot. Check BIOS/UEFI documentation for beep code meanings (vary by manufacturer).'
  },
  {
    id: 'splus-fc-058',
    domain: 5,
    term: 'Windows Event Viewer',
    definition: 'The Windows tool for viewing system, application, and security event logs. Key logs: System (OS/driver events), Application (app events), Security (logon/logoff, audit events — requires audit policy). Key event IDs for server troubleshooting: 41 (unexpected shutdown/kernel power), 6008 (unexpected shutdown), 7023 (service failure), 4625 (failed logon), 4740 (account lockout), 1000 (application crash). Access via eventvwr.msc or Server Manager.'
  },
  {
    id: 'splus-fc-059',
    domain: 5,
    term: '/var/log/syslog and /var/log/messages',
    definition: 'Primary system log files on Linux. /var/log/syslog (Debian/Ubuntu) and /var/log/messages (RHEL/CentOS) capture general kernel, daemon, and system events. Other important logs: /var/log/auth.log or /var/log/secure (authentication events), /var/log/kern.log (kernel events), /var/log/dmesg (boot hardware detection). Use `journalctl` on systemd systems for unified log access. `tail -f /var/log/syslog` monitors in real time.'
  },
  {
    id: 'splus-fc-060',
    domain: 5,
    term: 'RAID Degraded State',
    definition: 'A RAID array operates in a degraded state when one (RAID 5/6/10) or both (RAID 6) drives have failed but the array is still functional using parity or redundant mirror. Data is at risk — a second failure (RAID 5/10) means total data loss. Performance is reduced as the controller must reconstruct data on every read. Priority action: replace failed drive(s) immediately to begin rebuild and restore redundancy.'
  },
  {
    id: 'splus-fc-061',
    domain: 5,
    term: 'Load Balancing',
    definition: 'Distribution of incoming network traffic or workload across multiple servers to prevent any single server from becoming a bottleneck. Methods: round-robin (requests distributed evenly), least-connections (sent to server with fewest active connections), IP-hash (same client always goes to same server). Hardware load balancers (F5, Citrix ADC) or software (HAProxy, Nginx, Windows NLB). Improves availability and scalability.'
  },
  {
    id: 'splus-fc-062',
    domain: 5,
    term: 'Clustering (High Availability)',
    definition: 'Two or more servers configured so that if one fails, another automatically assumes its workload. Types: Active-Passive (one server active, one on standby — simple but wastes standby capacity), Active-Active (all nodes handle traffic, survivors absorb load on failure — more complex but efficient). Requires shared storage or data replication, a heartbeat network between nodes, and a quorum/witness to prevent split-brain.'
  }
];

export function getFlashcardsByDomain(domainId) {
  return flashcards.filter(fc => fc.domain === domainId);
}
