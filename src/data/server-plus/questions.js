// Server+ SK0-005 Exam Questions
// Domain 1: Server Hardware Installation & Management (17%)
// Domain 2: Server Administration (27%)
// Domain 3: Security (20%)
// Domain 4: Disaster Recovery (19%)
// Domain 5: Troubleshooting (17%)

export const questions = [
  // ── DOMAIN 1: Server Hardware Installation & Management ──────────────────
  {
    id: 'splus-q-001',
    domain: 1,
    question: 'A technician is installing a new server into a rack. The server is described as a "2U" device. What does "2U" mean in the context of rack mounting?',
    options: [
      'The server requires two power supplies',
      'The server occupies two rack units of vertical space, each unit being 1.75 inches tall',
      'The server supports two CPUs',
      'The server connects to two network uplinks'
    ],
    correct: 1,
    explanation: 'A rack unit (U) is a standardized unit of measure for rack-mounted equipment height. One U equals 1.75 inches (44.45 mm). A 2U server therefore occupies 3.5 inches of vertical rack space. Standard equipment racks are typically 42U tall.'
  },
  {
    id: 'splus-q-002',
    domain: 1,
    question: 'Which server form factor is best suited for a data center that needs to maximize compute density while sharing power supplies and cooling infrastructure across many server nodes?',
    options: [
      'Tower server',
      '1U rack server',
      'Blade server',
      'Micro-ATX server'
    ],
    correct: 2,
    explanation: 'Blade servers are designed for maximum density. Multiple blade modules are installed into a shared chassis (blade enclosure) that provides centralized power, cooling, networking, and management. This reduces cabling and physical footprint compared to equivalent numbers of 1U rack servers.'
  },
  {
    id: 'splus-q-003',
    domain: 1,
    question: 'A server administrator needs to manage a server remotely even when the server\'s OS is unresponsive or the server is powered off. Which technology provides this capability?',
    options: [
      'KVM over IP switch',
      'IPMI / BMC (out-of-band management)',
      'Remote Desktop Protocol (RDP)',
      'SSH daemon'
    ],
    correct: 1,
    explanation: 'IPMI (Intelligent Platform Management Interface) operates through a dedicated Baseboard Management Controller (BMC) that has its own network port and power source. It allows administrators to power cycle, access the remote console, and view hardware sensor data regardless of whether the OS is running. Vendor implementations include iDRAC (Dell), iLO (HPE), and IMM (IBM/Lenovo). RDP and SSH require an active OS; a KVM switch requires physical keyboard/video/mouse connections.'
  },
  {
    id: 'splus-q-004',
    domain: 1,
    question: 'A data center experiences a brief power sag that causes servers to reboot. Which type of UPS would BEST prevent this from happening by always running servers from its inverter?',
    options: [
      'Offline (standby) UPS',
      'Line-interactive UPS',
      'Online double-conversion UPS',
      'Ferroresonant UPS'
    ],
    correct: 2,
    explanation: 'An online double-conversion UPS constantly converts incoming AC power to DC and back to AC through its inverter. Servers always run from the inverter, so there is zero transfer time during a power event. An offline UPS has a brief transfer delay (4–12 ms) and a line-interactive UPS has a shorter delay but still a small gap. Only online double-conversion completely isolates equipment from utility power quality issues including sags, surges, and frequency variations.'
  },
  {
    id: 'splus-q-005',
    domain: 1,
    question: 'Which type of RAM is most appropriate for use in production servers because it can detect and correct single-bit memory errors automatically?',
    options: [
      'DDR5 non-ECC unbuffered DIMM',
      'ECC RDIMM (Registered Error-Correcting Code)',
      'SO-DIMM laptop memory',
      'XMP overclocked consumer RAM'
    ],
    correct: 1,
    explanation: 'ECC (Error-Correcting Code) RAM uses additional bits to detect and correct single-bit errors in real time, preventing data corruption. Registered DIMMs (RDIMMs) include a register chip that buffers the address and command signals, allowing more DIMMs per channel — required in servers with many memory slots. Consumer non-ECC RAM has no error correction and should not be used in production servers.'
  },
  {
    id: 'splus-q-006',
    domain: 1,
    question: 'A server has two power supplies installed. One power supply has failed but the server continues to operate normally. What feature makes this possible?',
    options: [
      'NIC teaming',
      'Hot-swap redundant power supplies',
      'RAID 1 disk mirroring',
      'UPS battery backup'
    ],
    correct: 1,
    explanation: 'Hot-swap redundant power supplies allow a failed PSU to be removed and replaced while the server remains running, because the second PSU continues to supply power. The power supplies operate in a 1+1 (or N+1) redundant configuration, sharing the load under normal conditions. This eliminates the power supply as a single point of failure.'
  },
  {
    id: 'splus-q-007',
    domain: 1,
    question: 'What is the purpose of an HBA (Host Bus Adapter) in a server?',
    options: [
      'To provide additional Ethernet network connectivity',
      'To manage RAID arrays for internal SATA drives',
      'To connect the server to external storage networks such as Fibre Channel SANs',
      'To provide out-of-band management access'
    ],
    correct: 2,
    explanation: 'An HBA is an expansion card that connects a server to an external storage network, most commonly a Fibre Channel SAN. The HBA handles the FC protocol and presents storage LUNs to the OS as local drives. Unlike a RAID controller (which manages internal drives), an HBA offloads storage networking tasks from the CPU. Some HBAs also support iSCSI or FCoE for converged networking.'
  },
  {
    id: 'splus-q-008',
    domain: 1,
    question: 'A rack PDU (Power Distribution Unit) in a data center has an overload indicator illuminated. What is the MOST likely cause?',
    options: [
      'The PDU firmware needs updating',
      'The total power draw of connected devices exceeds the PDU circuit amperage rating',
      'One of the PDU outlets has failed',
      'The UPS battery is depleted'
    ],
    correct: 1,
    explanation: 'A rack PDU distributes power from a single circuit to multiple outlets. When the aggregate current draw of connected equipment exceeds the PDU\'s rated amperage (e.g., 20A or 30A), an overload occurs. This can trip the circuit breaker or blow a fuse. Proper data center practice includes calculating power draw (watts / volts = amps) and staying below 80% of circuit capacity to maintain a safety margin.'
  },
  {
    id: 'splus-q-009',
    domain: 1,
    question: 'A technician needs to allow one administrator to control multiple servers\' keyboards, monitors, and mice from a single workstation. Which device accomplishes this?',
    options: [
      'Managed Ethernet switch',
      'KVM (Keyboard, Video, Mouse) switch',
      'Serial console server',
      'Network load balancer'
    ],
    correct: 1,
    explanation: 'A KVM switch allows one set of keyboard, video (monitor), and mouse peripherals to be shared among multiple servers. The administrator can switch between servers using a hotkey combination or a button on the switch unit. IP-based KVM switches extend this capability over the network, providing remote console access without requiring physical proximity to the servers.'
  },
  {
    id: 'splus-q-010',
    domain: 1,
    question: 'When installing servers in a rack, what is the recommended practice for airflow management to prevent hot air recirculation?',
    options: [
      'Mount all servers with the rear panel facing the same direction',
      'Arrange racks in hot aisle/cold aisle configuration with blanking panels filling empty U spaces',
      'Install all servers horizontally to maximize airflow',
      'Point all server exhausts toward the ceiling tiles'
    ],
    correct: 1,
    explanation: 'Hot aisle/cold aisle rack arrangement positions rack fronts facing each other (cold aisle) and rack rears facing each other (hot aisle). Cold air is supplied from perforated floor tiles in the cold aisle; hot air exhausts into the hot aisle and is removed by CRAC units. Blanking panels are installed in empty rack U spaces to prevent hot air from the back of the rack from recirculating around to the front, which would reduce cooling efficiency.'
  },

  // ── DOMAIN 2: Server Administration ──────────────────────────────────────
  {
    id: 'splus-q-011',
    domain: 2,
    question: 'An administrator needs to set up centralized authentication so that users can log on to any Windows workstation in the organization with a single set of credentials. Which Windows Server role is required?',
    options: [
      'DNS Server',
      'DHCP Server',
      'Active Directory Domain Services (AD DS)',
      'Web Server (IIS)'
    ],
    correct: 2,
    explanation: 'Active Directory Domain Services (AD DS) provides centralized identity management for Windows environments. It stores user accounts, computer accounts, and security policies in a directory database. When workstations are joined to the domain, users can authenticate to any domain-joined computer using their single domain credentials. DNS is required by AD but does not itself provide authentication.'
  },
  {
    id: 'splus-q-012',
    domain: 2,
    question: 'A Linux administrator needs to schedule a backup script to run every day at 2:00 AM. Which tool should they use?',
    options: [
      'systemd timer or cron job',
      'at command',
      '/etc/init.d script',
      'taskschd.msc'
    ],
    correct: 0,
    explanation: 'Both cron and systemd timers are used for recurring scheduled tasks on Linux. A crontab entry "0 2 * * * /path/to/backup.sh" runs the script at 2:00 AM daily. The `at` command schedules one-time jobs. /etc/init.d is for service startup scripts. taskschd.msc is the Windows Task Scheduler GUI.'
  },
  {
    id: 'splus-q-013',
    domain: 2,
    question: 'Which RAID level provides disk striping with distributed parity, requires a minimum of three disks, and can tolerate the failure of any single disk?',
    options: [
      'RAID 0',
      'RAID 1',
      'RAID 5',
      'RAID 10'
    ],
    correct: 2,
    explanation: 'RAID 5 stripes data and parity information across all disks (minimum 3). Parity is distributed rather than stored on a dedicated disk. If one disk fails, data can be reconstructed from the remaining disks and parity blocks. RAID 0 is striping only (no fault tolerance). RAID 1 is mirroring (two disks). RAID 10 combines mirroring and striping but requires at least 4 disks.'
  },
  {
    id: 'splus-q-014',
    domain: 2,
    question: 'An administrator installs a new service on a Linux server. They want it to start automatically at boot and start it immediately without rebooting. Which commands accomplish both goals?',
    options: [
      'service start httpd && chkconfig httpd on',
      'systemctl enable httpd && systemctl start httpd',
      '/etc/init.d/httpd start && update-rc.d httpd defaults',
      'initctl start httpd && initctl enable httpd'
    ],
    correct: 1,
    explanation: '`systemctl enable` creates symlinks so the service starts at boot (persists across reboots), while `systemctl start` starts the service immediately in the current session. These two commands together achieve both goals on systems using systemd (most modern Linux distributions including RHEL/CentOS 7+, Ubuntu 16.04+, Debian 8+). The `service`/`chkconfig` commands are older SysV init equivalents.'
  },
  {
    id: 'splus-q-015',
    domain: 2,
    question: 'What is the difference between an Organizational Unit (OU) and a Group in Active Directory?',
    options: [
      'OUs can contain users and computers; Groups can only contain users',
      'OUs are used to apply Group Policy Objects and delegate administration; Groups are used to assign permissions to resources',
      'Groups can be nested inside OUs; OUs cannot be nested',
      'OUs are replicated to all domain controllers; Groups are stored on a single server'
    ],
    correct: 1,
    explanation: 'OUs (Organizational Units) are containers used for administrative purposes — they hold users, computers, groups, and other OUs, and GPOs can be linked to them. You can also delegate administrative control of an OU. Security Groups are used to assign permissions to shared resources and can be applied in ACLs. Both can be nested, and both are replicated across all domain controllers.'
  },
  {
    id: 'splus-q-016',
    domain: 2,
    question: 'A Windows Server needs to provide automatic IP address assignment to client workstations. Which role must be installed?',
    options: [
      'DNS Server',
      'DHCP Server',
      'WINS Server',
      'NPS (Network Policy Server)'
    ],
    correct: 1,
    explanation: 'DHCP (Dynamic Host Configuration Protocol) server role automatically assigns IP addresses, subnet masks, default gateways, and DNS server addresses to client computers. When a DHCP client connects, it broadcasts a DHCPDISCOVER message; the server responds with a DHCPOFFER, the client requests the offered address (DHCPREQUEST), and the server confirms with DHCPACK — the DORA process (Discover, Offer, Request, Acknowledge).'
  },
  {
    id: 'splus-q-017',
    domain: 2,
    question: 'Which RAID level requires at least 4 disks, mirrors two RAID 0 stripe sets, and provides both high performance and fault tolerance?',
    options: [
      'RAID 5',
      'RAID 6',
      'RAID 10 (1+0)',
      'RAID 50'
    ],
    correct: 2,
    explanation: 'RAID 10 (also called RAID 1+0) first mirrors pairs of disks (RAID 1), then stripes data across the mirrored pairs (RAID 0). It requires a minimum of 4 disks. It provides excellent read/write performance and can survive multiple disk failures as long as no mirror pair loses both drives. Usable capacity is 50% of total raw capacity. RAID 6 uses double parity (two disk fault tolerance) but doesn\'t offer the same write performance.'
  },
  {
    id: 'splus-q-018',
    domain: 2,
    question: 'An administrator needs to mount a remote NFS share automatically every time a Linux server reboots. Where should the mount entry be configured?',
    options: [
      '/etc/hosts',
      '/etc/fstab',
      '/etc/exports',
      '/etc/network/interfaces'
    ],
    correct: 1,
    explanation: '/etc/fstab (filesystem table) contains entries for all filesystems to be mounted at boot, including local drives, NFS shares, CIFS/SMB shares, and other network filesystems. Each entry specifies the device/path, mount point, filesystem type, mount options, and dump/pass values. /etc/exports defines which directories a Linux server exports via NFS (the server side). /etc/hosts maps hostnames to IPs.'
  },
  {
    id: 'splus-q-019',
    domain: 2,
    question: 'A virtualization administrator is running VMware ESXi. They need to install an agent inside a guest VM that improves performance and enables features like vMotion. What should they install?',
    options: [
      'VMware vCenter Server',
      'VMware Horizon Client',
      'VMware Tools',
      'VMware NSX'
    ],
    correct: 2,
    explanation: 'VMware Tools is a package installed inside each guest VM that provides optimized drivers for virtual hardware (SCSI, NIC, graphics), enables features like vMotion (live migration), improves mouse integration and display resolution, and allows the host to synchronize the guest clock. Without VMware Tools, guests run with generic drivers and vMotion may be unavailable. vCenter Server is the management platform, not a per-VM agent.'
  },
  {
    id: 'splus-q-020',
    domain: 2,
    question: 'Which package manager is used on Red Hat Enterprise Linux (RHEL) 8 and later to install software packages?',
    options: [
      'apt-get',
      'dpkg',
      'dnf',
      'pacman'
    ],
    correct: 2,
    explanation: 'DNF (Dandified YUM) replaced YUM as the default package manager in RHEL/CentOS 8 and Fedora 22+. It handles RPM package installation, dependency resolution, and repository management. `apt-get` and `dpkg` are used on Debian/Ubuntu systems. `pacman` is the Arch Linux package manager. RHEL 7 and earlier used `yum`, which is still symlinked to `dnf` in RHEL 8 for backward compatibility.'
  },
  {
    id: 'splus-q-021',
    domain: 2,
    question: 'What is the primary difference between a Type 1 and Type 2 hypervisor?',
    options: [
      'Type 1 supports more VMs than Type 2',
      'Type 1 runs directly on hardware (bare-metal); Type 2 runs on top of a host OS',
      'Type 2 provides better performance than Type 1',
      'Type 1 only supports Windows guests; Type 2 supports Linux guests'
    ],
    correct: 1,
    explanation: 'A Type 1 (bare-metal) hypervisor runs directly on the server hardware without an underlying OS — examples include VMware ESXi, Microsoft Hyper-V (as a standalone product), and KVM. A Type 2 (hosted) hypervisor runs as an application on top of a conventional OS — examples include VMware Workstation, VirtualBox, and Parallels. Type 1 hypervisors generally offer better performance and are used in production data centers.'
  },
  {
    id: 'splus-q-022',
    domain: 2,
    question: 'A server administrator needs to share a directory on a Windows Server so that Linux clients can access it using native Linux tools. Which protocol should be configured?',
    options: [
      'SMB/CIFS only',
      'NFS (Network File System)',
      'FTP',
      'iSCSI'
    ],
    correct: 1,
    explanation: 'NFS (Network File System) is the native file sharing protocol for Linux/Unix systems. Windows Server includes an NFS server role that can serve NFS shares to Linux/Unix clients. While Linux clients can access SMB/CIFS shares (using Samba/CIFS utilities), NFS is the native protocol and is typically preferred for Linux-to-Linux or mixed environments where seamless integration with Linux mount semantics is needed.'
  },
  {
    id: 'splus-q-023',
    domain: 2,
    question: 'An administrator wants to isolate a containerized application with its dependencies from the host OS, but does not need full hardware virtualization. Which technology is most appropriate?',
    options: [
      'VMware ESXi virtual machine',
      'Docker container',
      'Hyper-V Generation 2 VM',
      'KVM with hardware-assisted virtualization'
    ],
    correct: 1,
    explanation: 'Docker containers share the host OS kernel and use namespaces and cgroups for isolation. They are lightweight, start quickly, and package an application with its libraries and dependencies into an image. Unlike VMs, containers do not include a full guest OS, making them much smaller and faster. This is ideal for application isolation without the overhead of full virtualization. However, all containers on a host share the same kernel.'
  },
  {
    id: 'splus-q-024',
    domain: 2,
    question: 'Which RAID level uses double distributed parity, requires a minimum of 4 disks, and can survive the simultaneous failure of any two disks?',
    options: [
      'RAID 1',
      'RAID 5',
      'RAID 6',
      'RAID 10'
    ],
    correct: 2,
    explanation: 'RAID 6 extends RAID 5 by adding a second parity block for each stripe, enabling the array to withstand two simultaneous disk failures. This is important in large arrays where the probability of a second drive failing during the lengthy rebuild process after a first failure is significant. RAID 6 requires at least 4 disks, and usable capacity is (n-2) drives worth of space.'
  },
  {
    id: 'splus-q-025',
    domain: 2,
    question: 'A GPO (Group Policy Object) is linked to an OU. An administrator wants to prevent a specific computer in that OU from receiving the GPO settings. What is the BEST approach?',
    options: [
      'Delete the computer account from Active Directory',
      'Move the computer to the default Computers container',
      'Apply a security filter to the GPO to deny "Apply Group Policy" permission to that computer',
      'Disable the GPO entirely'
    ],
    correct: 2,
    explanation: 'Security filtering (also called ACL filtering) allows administrators to control which users, groups, or computers a GPO applies to within its linked scope. By removing the computer\'s Authenticated Users permission and adding a Deny for "Apply Group Policy," you prevent just that one computer from receiving the policy while all others in the OU continue to receive it. Moving the computer out of the OU would work but may break other policies.'
  },

  // ── DOMAIN 3: Security ────────────────────────────────────────────────────
  {
    id: 'splus-q-026',
    domain: 3,
    question: 'Which principle states that a user account should be granted only the minimum permissions necessary to perform their job function?',
    options: [
      'Defense in depth',
      'Separation of duties',
      'Principle of least privilege',
      'Need to know'
    ],
    correct: 2,
    explanation: 'The principle of least privilege limits user and service accounts to only the permissions required to perform their assigned tasks. This minimizes the blast radius if an account is compromised — an attacker gains only limited access. For example, a web server service account should not have local administrator rights. This is a foundational concept in server hardening and access control.'
  },
  {
    id: 'splus-q-027',
    domain: 3,
    question: 'As part of server hardening, an administrator disables several Windows services including Remote Registry, Telnet, and SNMP. What security principle does this implement?',
    options: [
      'Data encryption at rest',
      'Reducing the attack surface by disabling unnecessary services',
      'Implementing defense in depth',
      'Enabling audit logging'
    ],
    correct: 1,
    explanation: 'Every enabled service represents a potential attack vector. Disabling services that are not required for a server\'s function reduces the attack surface — there are fewer entry points for attackers to exploit. Telnet transmits data in cleartext and should always be replaced by SSH. Remote Registry allows remote modification of the registry. SNMP v1/v2 has known vulnerabilities. Disabling unused services is a core server hardening practice.'
  },
  {
    id: 'splus-q-028',
    domain: 3,
    question: 'An administrator is setting up a server SSL/TLS certificate for a web application. The certificate was issued by an internal Certificate Authority. Which file must be installed on client browsers to prevent certificate trust warnings?',
    options: [
      'The server\'s private key',
      'The CRL (Certificate Revocation List)',
      'The internal CA\'s root certificate',
      'The server\'s CSR (Certificate Signing Request)'
    ],
    correct: 2,
    explanation: 'Browsers and operating systems maintain a trust store containing root CA certificates from trusted Certificate Authorities. When a server presents a certificate signed by an internal (private) CA, clients will show an untrusted certificate warning because the internal CA is not in their trust store. Distributing and installing the internal CA\'s root certificate into client trust stores resolves this. The private key must never be shared; the CSR is only used during certificate issuance.'
  },
  {
    id: 'splus-q-029',
    domain: 3,
    question: 'Which access control model assigns permissions based on a user\'s organizational role (e.g., "Manager," "HR Staff") rather than assigning permissions directly to individual users?',
    options: [
      'DAC (Discretionary Access Control)',
      'MAC (Mandatory Access Control)',
      'RBAC (Role-Based Access Control)',
      'ABAC (Attribute-Based Access Control)'
    ],
    correct: 2,
    explanation: 'RBAC assigns permissions to roles, then assigns users to roles. This simplifies administration: when an employee changes jobs, you change their role membership rather than modifying individual permissions. DAC allows the data owner to set permissions (Windows NTFS permissions are an example). MAC uses sensitivity labels and security clearances (used in government/military environments). ABAC makes access decisions based on attributes of users, resources, and environment.'
  },
  {
    id: 'splus-q-030',
    domain: 3,
    question: 'A server administrator wants to detect unauthorized changes to critical system files on a Linux server. Which tool is best suited for this?',
    options: [
      'Nmap port scanner',
      'Wireshark packet capture',
      'AIDE (Advanced Intrusion Detection Environment) or Tripwire',
      'Fail2ban'
    ],
    correct: 2,
    explanation: 'AIDE and Tripwire are file integrity monitoring (FIM) tools that create a cryptographic hash database of critical system files. Subsequent scans compare current hashes to the baseline, alerting administrators to unauthorized changes that could indicate compromise or rootkit installation. Nmap scans for open ports; Wireshark captures network traffic; Fail2ban blocks IPs after failed authentication attempts.'
  },
  {
    id: 'splus-q-031',
    domain: 3,
    question: 'An administrator is reviewing server logs and notices repeated failed login attempts from an external IP address. What should they implement to automatically block such attempts?',
    options: [
      'SSL certificate renewal',
      'Account lockout policy and IP-based fail2ban or firewall rules',
      'Increasing the account password length requirement',
      'Enabling NTLM authentication'
    ],
    correct: 1,
    explanation: 'An account lockout policy limits the number of consecutive failed login attempts before locking the account, defending against brute-force attacks. Additionally, tools like Fail2ban (Linux) or firewall rules can automatically block source IPs that exceed failed login thresholds. Together these defenses mitigate automated credential attacks without requiring manual intervention for each incident.'
  },
  {
    id: 'splus-q-032',
    domain: 3,
    question: 'Which type of encryption protects data stored on server hard drives if the physical drives are stolen?',
    options: [
      'Encryption in transit (TLS)',
      'Encryption at rest (full disk encryption)',
      'End-to-end encryption',
      'Hashing'
    ],
    correct: 1,
    explanation: 'Encryption at rest protects data stored on physical media. If hard drives are stolen from a server, the data remains unreadable without the encryption key. Technologies include BitLocker (Windows), LUKS/dm-crypt (Linux), and self-encrypting drives (SEDs). Encryption in transit (TLS/SSL) protects data moving over the network. Hashing is one-way and used for integrity verification, not confidentiality.'
  },
  {
    id: 'splus-q-033',
    domain: 3,
    question: 'A vulnerability scan reveals that a server is running a service with a known critical CVE that has an available patch. What is the recommended immediate response?',
    options: [
      'Ignore it until the next maintenance window six months from now',
      'Disable the service or apply the patch as soon as possible, following change management procedures',
      'Change the service port number to obscure it',
      'Configure the firewall to allow only trusted IPs to access the service'
    ],
    correct: 1,
    explanation: 'A critical CVE with an available patch represents a significant risk. The immediate actions should be to apply the patch (following change management to prevent unintended disruptions) or, if patching cannot happen immediately, to mitigate by disabling the service or implementing compensating controls (firewall restrictions). Simply changing ports is "security through obscurity" and ineffective against determined attackers. Long delays in patching critical vulnerabilities are unacceptable.'
  },
  {
    id: 'splus-q-034',
    domain: 3,
    question: 'An organization uses a server room with a biometric door lock. A visitor is granted access to the server room only after swiping an access card AND providing a fingerprint scan. What physical access control concept does this demonstrate?',
    options: [
      'Single-factor authentication',
      'Multi-factor physical access control (something you have + something you are)',
      'Role-based access control',
      'Mantrap / access control vestibule'
    ],
    correct: 1,
    explanation: 'This scenario combines two authentication factors: something you have (access card) and something you are (biometric fingerprint). Requiring both factors means that a stolen access card alone cannot grant entry. Physical security for server rooms typically layers multiple controls: biometrics, access cards, PINs, camera surveillance, and mantraps (controlled entry vestibules that allow only one person through at a time).'
  },
  {
    id: 'splus-q-035',
    domain: 3,
    question: 'Which server hardening step should be performed immediately after OS installation before connecting the server to the production network?',
    options: [
      'Configure DNS settings',
      'Apply all available OS patches and security updates',
      'Add the server to the Active Directory domain',
      'Install all available software applications'
    ],
    correct: 1,
    explanation: 'Immediately after OS installation, the server may have months or years of unpatched vulnerabilities. Before connecting to a production network, apply all security patches to reduce exposure. The sequence should be: install OS → patch → harden (disable unnecessary services, rename default accounts, configure firewall) → then join to domain and connect to network. Connecting an unpatched server to the network risks compromise before hardening is complete.'
  },

  // ── DOMAIN 4: Disaster Recovery ───────────────────────────────────────────
  {
    id: 'splus-q-036',
    domain: 4,
    question: 'A business states that in the event of a disaster, they can afford to lose no more than 4 hours of data. Which DR term describes this requirement?',
    options: [
      'RTO (Recovery Time Objective)',
      'RPO (Recovery Point Objective)',
      'MTBF (Mean Time Between Failures)',
      'MTTR (Mean Time To Repair)'
    ],
    correct: 1,
    explanation: 'RPO (Recovery Point Objective) defines the maximum acceptable amount of data loss measured in time. If the RPO is 4 hours, backups must occur at least every 4 hours so that no more than 4 hours of data is lost in a disaster. RTO defines how quickly systems must be restored (the downtime tolerance). MTBF measures reliability (average time between failures); MTTR measures how long repairs take.'
  },
  {
    id: 'splus-q-037',
    domain: 4,
    question: 'An organization must restore a critical server within 2 hours of a disaster. Which DR term describes this requirement?',
    options: [
      'RPO (Recovery Point Objective)',
      'RTO (Recovery Time Objective)',
      'MTTR (Mean Time To Repair)',
      'SLA (Service Level Agreement)'
    ],
    correct: 1,
    explanation: 'RTO (Recovery Time Objective) is the maximum acceptable duration of downtime — how quickly systems must be operational after a disaster. A 2-hour RTO means systems must be restored and operational within 2 hours of a failure. Meeting aggressive RTOs typically requires hot standby systems or rapid failover capabilities. RPO measures data loss tolerance; MTTR is the actual measured repair time; SLA is the contract that may include both RPO and RTO.'
  },
  {
    id: 'splus-q-038',
    domain: 4,
    question: 'What does the 3-2-1 backup rule specify?',
    options: [
      'Three servers, two locations, one administrator',
      'Three copies of data, stored on two different media types, with one copy offsite',
      'Three full backups per week, two incrementals per day, one differential weekly',
      'Three years retention, two encryption keys, one offsite DR site'
    ],
    correct: 1,
    explanation: 'The 3-2-1 backup rule is a best practice: maintain 3 copies of data (production + 2 backups), on 2 different storage media types (e.g., local disk and tape), with 1 copy stored offsite (cloud, tape vault, or secondary location). This protects against local disasters, media failures, and ransomware — an attacker who encrypts your production data and local backup cannot reach the offsite copy.'
  },
  {
    id: 'splus-q-039',
    domain: 4,
    question: 'Which backup type only backs up files that have changed since the LAST FULL backup, regardless of whether incremental backups have run since then?',
    options: [
      'Full backup',
      'Incremental backup',
      'Differential backup',
      'Snapshot backup'
    ],
    correct: 2,
    explanation: 'A differential backup captures all changes since the last full backup. It grows larger over time as more changes accumulate. Restoration requires only 2 sets: the last full backup + the latest differential. An incremental backup captures only changes since the LAST BACKUP OF ANY TYPE (full or incremental), so restoration requires the last full + all incrementals since then. Differentials are slower to back up but faster to restore; incrementals are faster to back up but slower to restore.'
  },
  {
    id: 'splus-q-040',
    domain: 4,
    question: 'An organization maintains a DR site that has all the same equipment as the production site, pre-configured and running, with real-time data replication. What type of DR site is this?',
    options: [
      'Cold site',
      'Warm site',
      'Hot site',
      'Mobile site'
    ],
    correct: 2,
    explanation: 'A hot site is a fully operational, always-running duplicate of the production environment with real-time or near-real-time data replication. Failover can occur within minutes. A warm site has hardware pre-installed but may require restoration of recent backups and some configuration; failover takes hours to days. A cold site is an empty facility with power, cooling, and network access — equipment must be procured, installed, and configured after a disaster, taking days to weeks.'
  },
  {
    id: 'splus-q-041',
    domain: 4,
    question: 'A Windows Server failover cluster uses shared storage. Node A is actively serving file shares. If Node A crashes, Node B automatically takes over with minimal interruption. What is this called?',
    options: [
      'Load balancing',
      'NIC teaming',
      'Automatic failover clustering',
      'Hyper-V live migration'
    ],
    correct: 2,
    explanation: 'Windows Server Failover Clustering (WSFC) groups two or more servers so that if one node fails, another node automatically takes over the workloads (cluster resources) with minimal downtime. This is called failover. The cluster uses shared storage (SAN or CSV — Cluster Shared Volumes) or Storage Spaces Direct. Load balancing distributes traffic across multiple active nodes; NIC teaming aggregates network adapters; live migration moves running VMs without downtime.'
  },
  {
    id: 'splus-q-042',
    domain: 4,
    question: 'Which replication type ensures that data is written to both the primary site and the DR site before the write is acknowledged to the application, guaranteeing zero data loss?',
    options: [
      'Asynchronous replication',
      'Synchronous replication',
      'Differential replication',
      'Snapshot replication'
    ],
    correct: 1,
    explanation: 'Synchronous replication waits for the write to be confirmed at the secondary (DR) site before acknowledging success to the application. This guarantees RPO = 0 (no data loss) but introduces latency proportional to the round-trip time between sites. Asynchronous replication acknowledges writes to the application immediately and replicates in the background — this allows greater distances but risks some data loss (RPO > 0) if a failure occurs before replication completes.'
  },
  {
    id: 'splus-q-043',
    domain: 4,
    question: 'What is the purpose of a backup restore test?',
    options: [
      'To verify that backup jobs complete without errors in the backup software',
      'To confirm that backed-up data can actually be successfully restored to a usable state',
      'To measure the backup job duration',
      'To validate that backup media is physically intact'
    ],
    correct: 1,
    explanation: 'A backup is only valuable if it can actually be restored. Backup restore tests verify that data can be recovered to a usable state, not just that the backup process ran without errors. Backup jobs can appear successful while the data is corrupted, the media is faulty, or the restore process has untested dependencies. DR planning requires periodic restore tests; regulatory frameworks like SOC 2 and HIPAA often mandate them.'
  },
  {
    id: 'splus-q-044',
    domain: 4,
    question: 'A server hard drive has an MTBF of 500,000 hours. What does this indicate?',
    options: [
      'The drive will last exactly 500,000 hours before failing',
      'Statistically, across a large population of these drives, the average time between failures is 500,000 hours',
      'The drive has already operated for 500,000 hours',
      'The manufacturer guarantees replacement within 500,000 hours of purchase'
    ],
    correct: 1,
    explanation: 'MTBF (Mean Time Between Failures) is a statistical reliability measure, not a guarantee for any individual drive. It represents the expected average operating time between failures across a large sample of identical devices under normal operating conditions. A 500,000-hour MTBF (about 57 years) does not mean the drive will last that long — individual drives can fail much sooner. MTBF is used to estimate the probability of failure over a given time period when planning redundancy.'
  },
  {
    id: 'splus-q-045',
    domain: 4,
    question: 'Which backup media type is most cost-effective for long-term archival storage of large datasets and is commonly used for compliance-driven data retention?',
    options: [
      'SSD (Solid State Drive)',
      'NAS (Network Attached Storage)',
      'Magnetic tape',
      'Optical disc (Blu-ray)'
    ],
    correct: 2,
    explanation: 'Magnetic tape remains the most cost-effective medium for large-scale, long-term data archival. Modern LTO (Linear Tape-Open) tape cartridges can store up to 45 TB (LTO-9 compressed) per cartridge at a fraction of the cost per terabyte compared to disk. Tape is also air-gapped by nature (offline storage), providing protection against ransomware. Many regulated industries use tape for multi-year compliance archival. The downside is slow sequential access speed.'
  },

  // ── DOMAIN 5: Troubleshooting ─────────────────────────────────────────────
  {
    id: 'splus-q-046',
    domain: 5,
    question: 'A server fails to POST (Power-On Self-Test) and emits three short beeps followed by one long beep. What does this most likely indicate?',
    options: [
      'The OS boot loader is corrupt',
      'A hardware component failure detected during POST (specific to BIOS/UEFI beep code)',
      'The RAID array has degraded',
      'A network adapter is disconnected'
    ],
    correct: 1,
    explanation: 'POST beep codes are audio error signals from the BIOS/UEFI firmware indicating a hardware initialization failure before the OS loads. Common causes include RAM not seated properly, a failed RAM module, a CPU issue, or a video card problem. The specific beep pattern meaning varies by BIOS manufacturer (AMI, Award, Phoenix). Since the OS is not yet loaded, OS-level issues (boot loader, RAID, network) cannot be the cause. Check the BIOS documentation for the specific beep code meaning.'
  },
  {
    id: 'splus-q-047',
    domain: 5,
    question: 'A RAID 5 array with 4 disks shows one disk as failed in the RAID controller utility. The array is still operational but in a degraded state. What action is MOST critical to take immediately?',
    options: [
      'Power off the server immediately to prevent further data loss',
      'Replace the failed disk as soon as possible to restore redundancy',
      'Back up data and rebuild using only the three remaining disks',
      'Increase the RAID controller cache size'
    ],
    correct: 1,
    explanation: 'A degraded RAID 5 array has lost its fault tolerance. If a second disk fails before the first is replaced and the array rebuilds, all data is lost. The immediate priority is to replace the failed disk with a compatible drive. If the controller supports hot spare configuration, the rebuild will start automatically. Because RAID 5 rebuild stresses the remaining drives (increasing failure risk), replacing the disk quickly is critical. The server can continue running during degraded operation and rebuild.'
  },
  {
    id: 'splus-q-048',
    domain: 5,
    question: 'A Windows Server cannot be reached on the network. The administrator can access the server via iDRAC/IPMI console. In the Windows Event Viewer, the administrator finds Event ID 7023 for a critical service that failed to start. What is the most likely cause of the network outage?',
    options: [
      'Physical network cable is disconnected',
      'A critical Windows service failed to start, causing OS-level network functionality to be unavailable',
      'The NIC hardware has failed',
      'The DHCP server is not responding'
    ],
    correct: 1,
    explanation: 'Since the server is accessible via IPMI (out-of-band, which is independent of the OS), the hardware and physical network at the management level are functional. Event ID 7023 indicates a service terminated with an error. If a critical networking-related service (like the Server service, DHCP Client, or network configuration service) failed, it could cause OS-level network connectivity to fail. The fact that IPMI works rules out physical cable disconnection and NIC hardware failure.'
  },
  {
    id: 'splus-q-049',
    domain: 5,
    question: 'A server\'s performance monitoring shows CPU utilization consistently at 95-100% but memory and disk I/O are within normal ranges. Applications are responding slowly. What is the FIRST action to take?',
    options: [
      'Add more RAM to the server',
      'Replace the server\'s hard drives with SSDs',
      'Identify and investigate the process(es) consuming excessive CPU using Task Manager or top',
      'Increase the network bandwidth'
    ],
    correct: 2,
    explanation: 'Before taking action, identify WHICH process is consuming the CPU. Use Task Manager (Windows) or `top`/`htop` (Linux) to identify the offending process. It could be a legitimate workload that has grown, a runaway process with a bug, malware, or an indexing/antivirus scan. Adding RAM or SSDs won\'t help if the bottleneck is CPU. Proper bottleneck analysis requires identifying the root cause before implementing a solution.'
  },
  {
    id: 'splus-q-050',
    domain: 5,
    question: 'A Linux server cannot boot and drops to an emergency shell with the error: "Failed to mount /data — see systemctl status... for details." What file should the administrator examine to resolve the mount failure?',
    options: [
      '/etc/hosts',
      '/etc/fstab',
      '/boot/grub/grub.cfg',
      '/etc/resolv.conf'
    ],
    correct: 1,
    explanation: '/etc/fstab defines all filesystems to be mounted at boot. A common cause of this error is an incorrect UUID, device path, or filesystem type in /etc/fstab, or a missing/failed disk. The administrator should check the fstab entry for /data, verify the device exists (using `lsblk` or `blkid`), and correct any errors. Using `nofail` or `x-systemd.automount` mount options can prevent non-critical mount failures from causing boot failures.'
  },
  {
    id: 'splus-q-051',
    domain: 5,
    question: 'A server administrator runs the `smartctl -a /dev/sda` command and sees the value for "Reallocated_Sector_Ct" increasing over successive tests. What does this indicate?',
    options: [
      'The drive is operating normally; reallocated sectors are expected',
      'The drive is remapping bad sectors to spare sectors, indicating developing hardware failure',
      'The filesystem needs to be defragmented',
      'The RAID controller cache needs to be cleared'
    ],
    correct: 1,
    explanation: 'The SMART (Self-Monitoring, Analysis and Reporting Technology) "Reallocated_Sector_Ct" attribute counts sectors the drive has remapped from its spare pool after detecting read errors. An increasing count indicates the drive is experiencing a growing number of bad sectors — a sign of hardware degradation and impending failure. While a small static count may be acceptable, an increasing count requires immediate attention: back up data and plan for disk replacement before complete failure.'
  },
  {
    id: 'splus-q-052',
    domain: 5,
    question: 'A server has two NICs configured in an active-passive NIC team. Administrators report intermittent network connectivity. What should be checked FIRST?',
    options: [
      'Check the DNS server for stale records',
      'Verify that both physical NICs are linked, check the NIC teaming software logs, and verify switch port configuration matches the teaming mode',
      'Replace both NICs with new hardware',
      'Increase the MTU size on the server\'s network adapter'
    ],
    correct: 1,
    explanation: 'NIC teaming issues can stem from several causes: a physical NIC that has lost its link, misconfigured switch ports (LACP mode mismatches), or NIC teaming driver/software issues. In active-passive mode, if the active NIC loses its link but the failover mechanism fails, connectivity is lost intermittently. Start by verifying physical link status (LED indicators, `ethtool` on Linux, adapter status in Device Manager on Windows), then examine teaming logs and switch port configuration.'
  },
  {
    id: 'splus-q-053',
    domain: 5,
    question: 'A server running multiple VMs suddenly becomes unresponsive. The hypervisor console shows the host has very high disk I/O wait. What condition is MOST likely causing this?',
    options: [
      'CPU overcommitment on the hypervisor',
      'Insufficient RAM causing extensive swap/paging activity',
      'A misconfigured VLAN on the management network',
      'An expired SSL certificate on the hypervisor'
    ],
    correct: 1,
    explanation: 'High disk I/O wait in a virtualization host typically indicates memory overcommitment: the host does not have enough physical RAM for all running VMs, so the hypervisor is using disk-based swap/ballooning heavily. This causes VMs to read and write to disk instead of RAM, which is orders of magnitude slower, creating an I/O bottleneck. Solutions include adding physical RAM, reducing the number of running VMs, or reducing per-VM memory allocations.'
  },
  {
    id: 'splus-q-054',
    domain: 5,
    question: 'When reviewing Windows Server logs in Event Viewer, which log would you check to find evidence of failed user logon attempts?',
    options: [
      'Application log',
      'System log',
      'Security log',
      'Setup log'
    ],
    correct: 2,
    explanation: 'The Windows Security event log records security-related events including logon successes (Event ID 4624), logon failures (Event ID 4625), account lockouts (Event ID 4740), privilege use, and policy changes. Audit policies must be enabled (via GPO or Local Security Policy) to populate the Security log. The Application log records application errors; the System log records OS and driver events; the Setup log records installation events.'
  },
  {
    id: 'splus-q-055',
    domain: 5,
    question: 'A server administrator receives alerts that a server\'s ECC RAM has been correcting single-bit errors at an increasing rate. What action should be taken?',
    options: [
      'The ECC is working as designed; no action is needed unless double-bit errors occur',
      'Investigate the source of errors using memory diagnostic tools and plan to replace the failing DIMM',
      'Restart the server to clear the ECC error counters',
      'Increase the server\'s RAM allocation in the BIOS'
    ],
    correct: 1,
    explanation: 'While ECC RAM corrects single-bit errors automatically, a rising error rate is a warning sign that a DIMM module is degrading. ECC can correct single-bit errors but only detect (not correct) double-bit errors — a double-bit error causes a system crash. Run memory diagnostics (memtest86+, Dell Memory Diagnostics, or vendor-specific tools) to identify the failing DIMM. Reseat or replace the suspect DIMM during a maintenance window to prevent future data corruption or system crash.'
  },
  {
    id: 'splus-q-056',
    domain: 5,
    question: 'After a power failure, a Linux server reboots but the root filesystem is mounted read-only, preventing normal operation. What is the MOST likely cause?',
    options: [
      'The root password has been corrupted',
      'Filesystem errors were detected during fsck, causing the OS to mount it read-only to prevent further corruption',
      'The SSH daemon is not running',
      'The server\'s IP address changed after the reboot'
    ],
    correct: 1,
    explanation: 'During boot, Linux runs fsck (filesystem check) on the root partition. If filesystem errors are detected (common after an ungraceful shutdown/power failure), the OS may mount the root filesystem in read-only mode to prevent further corruption. The administrator must boot to a rescue/live environment and run `fsck -y /dev/sdX` to repair the filesystem, then reboot normally. Journal replay in modern journaling filesystems (ext4, XFS) usually prevents this, but severe power failures can still cause issues.'
  },
  {
    id: 'splus-q-057',
    domain: 2,
    question: 'A Windows Server administrator wants to run PowerShell scripts on remote servers. Which Windows feature must be enabled on the remote servers?',
    options: [
      'Remote Desktop Services (RDP)',
      'Windows Remote Management (WinRM) / PowerShell Remoting',
      'Telnet Server',
      'SNMP Service'
    ],
    correct: 1,
    explanation: 'PowerShell Remoting uses the WinRM (Windows Remote Management) protocol, which is based on WS-Management. Running `Enable-PSRemoting` on target servers configures WinRM to accept remote PowerShell connections. By default, WinRM is disabled in workgroup environments. PowerShell Remoting uses port 5985 (HTTP) or 5986 (HTTPS). RDP provides a graphical remote desktop session, not PowerShell remoting.'
  },
  {
    id: 'splus-q-058',
    domain: 3,
    question: 'An organization requires that administrative tasks on servers are performed using personal named accounts rather than shared generic accounts like "Administrator." What security principles does this support?',
    options: [
      'Encryption at rest and data integrity',
      'Accountability and non-repudiation through audit trails',
      'Defense in depth and network segmentation',
      'Patch management and vulnerability reduction'
    ],
    correct: 1,
    explanation: 'When administrators use personal named accounts for administrative tasks, every action can be attributed to a specific individual (accountability). Audit logs with personal account names create non-repudiation — users cannot credibly deny their actions. Shared accounts like "Administrator" or "root" make it impossible to determine which individual performed an action. Best practice is to use personal accounts with elevated privileges (via sudo or UAC) rather than logging on directly as the built-in administrator.'
  },
  {
    id: 'splus-q-059',
    domain: 4,
    question: 'After a major disaster, an organization recovers their systems using backups. The most recent backup was taken 6 hours before the disaster. What term describes the 6 hours of data that was lost?',
    options: [
      'The RTO gap',
      'The data loss within the RPO',
      'MTTR',
      'The recovery delta'
    ],
    correct: 1,
    explanation: 'The data lost between the last backup and the disaster event represents the actual data loss, measured against the RPO. If the organization\'s RPO is 4 hours but the last backup was 6 hours ago, the RPO was violated. If the RPO is 8 hours and the backup was 6 hours ago, the RPO was met. The organization should evaluate whether their backup frequency meets their defined RPO and adjust accordingly.'
  },
  {
    id: 'splus-q-060',
    domain: 1,
    question: 'A technician needs to install a server that requires 650 watts of power. The rack PDU circuit is rated at 20 amps at 120 volts. What is the maximum wattage available from this circuit, and does the server fit?',
    options: [
      '1200 watts maximum; the server fits comfortably',
      '2400 watts maximum; the server fits comfortably',
      '1600 watts maximum at 80% safety margin that leaves 1280 watts; the server fits but the 80% rule should be observed',
      '1000 watts maximum at 80% of 20A×120V=2400; server fits with margin to spare'
    ],
    correct: 2,
    explanation: 'Power (watts) = Voltage × Current = 120V × 20A = 2,400 watts total circuit capacity. However, best practice is to load circuits to no more than 80% of rated capacity to prevent tripping breakers under transient loads: 2,400 × 0.80 = 1,920 watts practical limit. A 650W server easily fits within this limit. In a real environment, UPS and PDU input ratings, power factor, and nameplate vs. actual draw should all be verified.'
  },

  // Additional questions to reach 60+ total
  {
    id: 'splus-q-061',
    domain: 2,
    question: 'A company wants to automatically assign IP addresses only to registered corporate devices while blocking unknown devices from receiving network access via DHCP. Which DHCP feature accomplishes this?',
    options: [
      'DHCP scope options',
      'DHCP reservations and DHCP MAC address filtering/allowlisting',
      'DHCP failover configuration',
      'DHCP superscope'
    ],
    correct: 1,
    explanation: 'DHCP reservations bind a specific IP address to a specific MAC address, ensuring consistent IP assignment. Some DHCP implementations also support MAC address filtering or allowlisting that prevents DHCP offers to unknown MAC addresses. For stronger network access control, 802.1X port-based NAC is used in conjunction with DHCP to authenticate devices before granting network access.'
  },
  {
    id: 'splus-q-062',
    domain: 3,
    question: 'An organization wants to ensure that no single administrator can both approve and implement a change to a production server. What security concept does this implement?',
    options: [
      'Principle of least privilege',
      'Separation of duties',
      'Defense in depth',
      'Zero trust'
    ],
    correct: 1,
    explanation: 'Separation of duties (SoD) divides critical tasks between multiple individuals so that no single person can complete a sensitive process alone. This prevents fraud and errors by requiring collusion between multiple parties for unauthorized actions. In change management, one person might request/approve a change while a different person implements it. This is distinct from least privilege (limiting permissions) but complements it.'
  },
  {
    id: 'splus-q-063',
    domain: 4,
    question: 'An organization performs weekly full backups and daily incremental backups. A disaster occurs on Thursday. How many backup sets are needed to restore to Wednesday\'s state?',
    options: [
      'Just the Wednesday incremental',
      'The weekly full backup plus Monday, Tuesday, and Wednesday incrementals',
      'The weekly full backup plus Wednesday\'s differential',
      'Two full backups and one incremental'
    ],
    correct: 1,
    explanation: 'With incremental backups, each incremental captures only what changed since the LAST backup (full or incremental). To restore to Wednesday, you need the last full backup (baseline) plus EVERY incremental since then: Monday, Tuesday, and Wednesday incrementals. This is why incremental restores take longer than differential restores — with differentials, you only need the full + ONE differential (the most recent). The trade-off is that incrementals are faster to create but slower to restore.'
  },
  {
    id: 'splus-q-064',
    domain: 5,
    question: 'A server\'s operating system reports that a volume is at 99% capacity. Applications are failing with "disk full" errors. What is the IMMEDIATE step to take?',
    options: [
      'Reformat the volume to reclaim space',
      'Identify and remove or archive large files/logs to free space immediately, then plan for permanent storage expansion',
      'Restart the server to clear temporary files',
      'Disable file indexing to reduce disk usage'
    ],
    correct: 1,
    explanation: 'The immediate goal is to restore free space so applications can function. Identify large files using `du -sh * | sort -rh` (Linux) or WinDirStat/Storage Sense (Windows), and move, compress, or delete old logs, temp files, or archives. For a long-term fix, extend the volume (if LVM or dynamic disk), add storage, or move data to network storage. Simply restarting may temporarily free some temp files but won\'t address the underlying problem.'
  },
  {
    id: 'splus-q-065',
    domain: 1,
    question: 'What is the primary difference between a SAN (Storage Area Network) and a NAS (Network Attached Storage)?',
    options: [
      'SAN uses Ethernet; NAS uses Fibre Channel',
      'SAN provides block-level storage accessed over a dedicated storage network; NAS provides file-level storage accessed over a standard IP network',
      'NAS is faster than SAN in all scenarios',
      'SAN can only be used with Linux servers; NAS works with any OS'
    ],
    correct: 1,
    explanation: 'A SAN presents raw block storage (like a local disk) to servers over a dedicated storage network (Fibre Channel, iSCSI, FCoE). The server\'s OS formats and manages the filesystem on the block device. A NAS is a file server that presents pre-formatted filesystems over standard Ethernet using file-sharing protocols like NFS or SMB/CIFS. SANs offer higher performance and flexibility; NAS offers easier management and sharing among multiple clients.'
  }
];

export function getQuestionsByDomain(domainId) {
  return questions.filter(q => q.domain === domainId);
}

export function getRandomQuestions(domainId, count) {
  const pool = domainId ? getQuestionsByDomain(domainId) : [...questions];
  const shuffled = pool.slice().sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
