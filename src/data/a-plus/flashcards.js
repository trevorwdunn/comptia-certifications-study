// CompTIA A+ Flashcards
// Core 1 (220-1101): Domains 1-5
// Core 2 (220-1102): Domains 6-9

export const flashcards = [
  // ─── DOMAIN 1: MOBILE DEVICES ────────────────────────────────────────────

  {
    id: 'aplus-fc-001',
    domain: 1,
    term: 'SO-DIMM',
    definition:
      'Small Outline Dual In-line Memory Module — the compact RAM form factor used in laptops and small form-factor PCs. Approximately half the physical size of a full-size DIMM. DDR4 SO-DIMM: 260 pins; DDR5 SO-DIMM: 262 pins.',
  },
  {
    id: 'aplus-fc-002',
    domain: 1,
    term: 'LCD Display Types',
    definition:
      'TN (Twisted Nematic): Fastest response, narrow viewing angles, lower cost.\nIPS (In-Plane Switching): Excellent color accuracy, wide viewing angles, most common in quality laptops.\nVA (Vertical Alignment): High contrast, good color, moderate response times.\nOLED: Self-emissive pixels (no backlight), perfect blacks, vibrant colors — used in premium phones/laptops.',
  },
  {
    id: 'aplus-fc-003',
    domain: 1,
    term: 'Mobile Device Connections',
    definition:
      'Lightning: Apple proprietary connector (iPhones before iPhone 15, older iPads).\nUSB-C: Universal connector used on modern Android phones, iPhone 15+, MacBooks. Supports USB 3.x, Thunderbolt, DisplayPort, power delivery.\nMicro-USB: Older Android standard.\nThunderbolt 3/4: Intel/Apple, uses USB-C connector, supports up to 40 Gbps + daisy-chaining.',
  },
  {
    id: 'aplus-fc-004',
    domain: 1,
    term: 'Cellular Network Standards',
    definition:
      '2G: GSM/CDMA — voice and basic data.\n3G: HSPA/EVDO — mobile internet.\n4G LTE: Typical speeds 10-150 Mbps, low latency.\n5G NR: Up to multi-Gbps speeds. Three bands: low-band (wide coverage), mid-band (balance), mmWave (ultra-fast, short range).',
  },
  {
    id: 'aplus-fc-005',
    domain: 1,
    term: 'MDM (Mobile Device Management)',
    definition:
      'Software platform for centrally managing, monitoring, and securing mobile devices (smartphones, tablets). Capabilities: enforce passcode/encryption policies, remote wipe, app distribution/restriction, VPN configuration, geolocation tracking. Supports BYOD (Bring Your Own Device) and corporate-owned devices.',
  },
  {
    id: 'aplus-fc-006',
    domain: 1,
    term: 'Mobile Wireless Technologies',
    definition:
      'Bluetooth: Short range (~10m), personal area network. Classes 1/2/3 define power/range.\nBluetooth 5.0: Up to 4x range, 2x speed vs BT 4.2.\nNFC (Near Field Communication): Very short range (~4 cm), used for contactless payments (Apple Pay, Google Pay), data transfer.\nInfrared (IR): Line-of-sight, used for remote controls.',
  },

  // ─── DOMAIN 2: NETWORKING (Core 1) ───────────────────────────────────────

  {
    id: 'aplus-fc-007',
    domain: 2,
    term: 'TCP/IP Configuration Parameters',
    definition:
      'Four required settings for IPv4 connectivity:\n1. IP address — identifies the host\n2. Subnet mask — defines the network boundary\n3. Default gateway — router to other networks\n4. DNS server — resolves hostnames to IP addresses\n\nAll viewable with: ipconfig /all (Windows), ifconfig or ip addr (Linux)',
  },
  {
    id: 'aplus-fc-008',
    domain: 2,
    term: 'Network Devices Comparison',
    definition:
      'Hub: Layer 1, broadcasts to all ports, half-duplex, causes collisions — obsolete.\nSwitch: Layer 2, forwards by MAC address, each port = collision domain, full-duplex.\nRouter: Layer 3, routes by IP address, connects different networks/subnets.\nAccess Point (AP): Layer 2, connects wireless clients to wired network.\nFirewall: Layer 3-7, controls traffic based on rules.',
  },
  {
    id: 'aplus-fc-009',
    domain: 2,
    term: 'Common Network Ports (A+)',
    definition:
      'FTP: 20/21 | SSH: 22 | Telnet: 23 | SMTP: 25 | DNS: 53 (UDP) | DHCP: 67/68 (UDP) | HTTP: 80 | POP3: 110 | IMAP: 143 | HTTPS: 443 | SMB: 445 | RDP: 3389\n\nTip: Know which use TCP vs. UDP. Most use TCP; DNS and DHCP use UDP.',
  },
  {
    id: 'aplus-fc-010',
    domain: 2,
    term: 'Wi-Fi Standards Summary (A+)',
    definition:
      '802.11a: 5 GHz, 54 Mbps.\n802.11b: 2.4 GHz, 11 Mbps.\n802.11g: 2.4 GHz, 54 Mbps.\n802.11n (Wi-Fi 4): 2.4/5 GHz, 600 Mbps, MIMO.\n802.11ac (Wi-Fi 5): 5 GHz, ~3.5 Gbps, MU-MIMO.\n802.11ax (Wi-Fi 6): 2.4/5 GHz, ~9.6 Gbps, OFDMA.\nMemory aid: a=5GHz only, b/g=2.4GHz, n/ac/ax=modern.',
  },
  {
    id: 'aplus-fc-011',
    domain: 2,
    term: 'VPN (Virtual Private Network)',
    definition:
      'Creates an encrypted tunnel over a public network (internet), allowing secure remote access to private network resources. Types:\n- Site-to-site: Connects entire networks (e.g., branch offices)\n- Remote access / client VPN: Individual users connect to corporate network\n- SSL VPN: Uses TCP 443; works through most firewalls; browser-based option\n- IPsec VPN: Industry standard, supports site-to-site and remote access',
  },
  {
    id: 'aplus-fc-012',
    domain: 2,
    term: 'DNS Record Types',
    definition:
      'A: hostname → IPv4 address\nAAAA: hostname → IPv6 address\nCNAME: alias → canonical (real) hostname\nMX: mail exchange records for a domain\nNS: authoritative name servers for a domain\nPTR: IP → hostname (reverse lookup)\nTXT: Text data (SPF, DKIM, domain verification)',
  },

  // ─── DOMAIN 3: HARDWARE ───────────────────────────────────────────────────

  {
    id: 'aplus-fc-013',
    domain: 3,
    term: 'CPU Socket Types',
    definition:
      'LGA (Land Grid Array): Pins on the MOTHERBOARD socket; flat pads on the CPU. Used by Intel (LGA1200, LGA1700) and AMD AM5.\nPGA (Pin Grid Array): Pins on the CPU; holes on the motherboard socket. Used by AMD (AM4 and earlier).\nBGA (Ball Grid Array): CPU soldered directly to motherboard; not user-replaceable. Used in laptops and mobile devices.',
  },
  {
    id: 'aplus-fc-014',
    domain: 3,
    term: 'RAM Types',
    definition:
      'DDR4: 288-pin DIMM (desktop), 260-pin SO-DIMM (laptop). Speeds: 2133-3200+ MHz. Standard in most current PCs.\nDDR5: 288-pin DIMM (new keying), 262-pin SO-DIMM. Speeds starting at 4800 MHz. Higher density, integrated power management. Used in newer Intel/AMD platforms.\nECC RAM: Error-Correcting Code memory; detects and corrects single-bit errors; used in servers.',
  },
  {
    id: 'aplus-fc-015',
    domain: 3,
    term: 'Storage Types & Interfaces',
    definition:
      'HDD: Mechanical, spinning platters; 5400/7200 RPM; slower but high capacity, cheaper per GB.\nSSD (SATA): No moving parts, ~550 MB/s max; uses SATA III interface; form factors: 2.5", M.2.\nSSD (NVMe M.2): Uses PCIe lanes + NVMe protocol; Gen 3: ~3,500 MB/s; Gen 4: ~7,000 MB/s. Much faster than SATA.\nOptane: Intel 3D XPoint memory, low latency; used as SSD or RAM cache.',
  },
  {
    id: 'aplus-fc-016',
    domain: 3,
    term: 'PSU Connectors',
    definition:
      '24-pin ATX: Main motherboard power connector.\n8-pin EPS (4+4): CPU/processor power.\n6+2-pin PCIe: GPU (graphics card) power (one = 75W, two = 150W additional).\n15-pin SATA power: SATA drives.\n4-pin Molex (legacy): Older drives, fans.\n\nVoltage rails: +3.3V, +5V, +12V (main), -12V, +5VSB (standby).',
  },
  {
    id: 'aplus-fc-017',
    domain: 3,
    term: 'Display Connectors',
    definition:
      'VGA (DB-15): Analog video only; legacy. Blue connector.\nDVI-D: Digital video only. DVI-I carries analog + digital.\nHDMI: Digital audio + video over single cable; common on TVs, monitors, laptops.\nDisplayPort: Digital audio + video; supports higher resolutions, refresh rates; can daisy-chain monitors; common on gaming monitors and workstations.\nThunderbolt: Uses Mini DisplayPort or USB-C connector; carries data, video, and power.',
  },
  {
    id: 'aplus-fc-018',
    domain: 3,
    term: 'PCIe (Peripheral Component Interconnect Express)',
    definition:
      'High-speed serial expansion bus standard. Slot sizes: x1, x4, x8, x16 (number of lanes). Larger slots provide more bandwidth:\n- PCIe 3.0 x16: ~16 GB/s\n- PCIe 4.0 x16: ~32 GB/s\n- PCIe 5.0 x16: ~64 GB/s\nGPUs use x16 slots. SSDs and NICs may use x1 or x4. A smaller card CAN fit in a larger slot (x1 card in x16 slot).',
  },
  {
    id: 'aplus-fc-019',
    domain: 3,
    term: 'Laser Printer Process',
    definition:
      'The 7 steps of laser printing (in order):\n1. Processing — Data sent to printer, rasterized (RIP)\n2. Charging — Drum coated with uniform negative charge\n3. Exposing — Laser draws the image, neutralizing charge on image areas\n4. Developing — Toner (negatively charged) sticks to exposed (neutral) areas\n5. Transferring — Toner transferred from drum to paper via positive charge\n6. Fusing — Heat and pressure permanently bond toner to paper\n7. Cleaning — Excess toner removed from drum',
  },
  {
    id: 'aplus-fc-020',
    domain: 3,
    term: 'RAID Levels',
    definition:
      'RAID 0 (Striping): Splits data across drives. Improved performance, NO redundancy. Any drive failure = total data loss.\nRAID 1 (Mirroring): Identical copy on each drive. 50% storage efficiency. Survives 1 drive failure.\nRAID 5 (Striping + Parity): Minimum 3 drives. Distributed parity. Survives 1 drive failure. Good balance of speed and redundancy.\nRAID 10 (1+0): Mirrors then stripes. Minimum 4 drives. Best performance + redundancy; expensive.',
  },

  // ─── DOMAIN 4: VIRTUALIZATION & CLOUD ────────────────────────────────────

  {
    id: 'aplus-fc-021',
    domain: 4,
    term: 'Hypervisor Types',
    definition:
      'Type 1 (Bare-metal): Runs directly on hardware — no host OS. More efficient, better performance. Used in production environments.\nExamples: VMware ESXi, Microsoft Hyper-V, Citrix Hypervisor.\n\nType 2 (Hosted): Runs as an application on a host OS. Easier to set up, less efficient. Used for desktop virtualization/development.\nExamples: VMware Workstation/Fusion, Oracle VirtualBox.',
  },
  {
    id: 'aplus-fc-022',
    domain: 4,
    term: 'Cloud Service Models (IaaS/PaaS/SaaS)',
    definition:
      'IaaS: Vendor provides hardware, networking, storage, virtualization. Customer manages OS, middleware, apps, data. Example: AWS EC2, Azure VMs.\nPaaS: Vendor manages through the OS/runtime. Customer manages apps and data. Example: Heroku, Google App Engine.\nSaaS: Vendor manages everything. Customer just uses the application. Example: Microsoft 365, Salesforce, Gmail.',
  },
  {
    id: 'aplus-fc-023',
    domain: 4,
    term: 'Cloud Deployment Models',
    definition:
      'Public cloud: Multi-tenant infrastructure managed by a cloud provider (AWS, Azure, GCP). Scalable, pay-per-use.\nPrivate cloud: Dedicated infrastructure for one organization; hosted on-premises or by a provider.\nHybrid cloud: Combines private and public cloud with orchestration between them.\nCommunity cloud: Shared by organizations with common requirements (e.g., government agencies).',
  },
  {
    id: 'aplus-fc-024',
    domain: 4,
    term: 'Containers vs. Virtual Machines',
    definition:
      'Virtual Machine: Includes full guest OS, hypervisor manages hardware abstraction. Heavyweight (~GBs), slow startup (minutes), strong isolation.\nContainer: Shares host OS kernel, packages only app + dependencies. Lightweight (~MBs), fast startup (seconds), process-level isolation.\nDocker is the most common container platform. Kubernetes orchestrates multiple containers at scale.',
  },

  // ─── DOMAIN 5: HARDWARE & NETWORK TROUBLESHOOTING ────────────────────────

  {
    id: 'aplus-fc-025',
    domain: 5,
    term: 'POST & Beep Codes',
    definition:
      'POST (Power-On Self-Test) runs at startup to test hardware before loading the OS. If POST fails and no video is available, the BIOS communicates errors via beep codes (pattern varies by BIOS vendor: AMI, Award, Phoenix).\nCommon issues:\n- No beeps: CPU or PSU failure\n- 1 long, 3 short (AMI): Memory failure\n- Continuous beep: Memory not seated\nModern systems may use LED error codes instead of beeps.',
  },
  {
    id: 'aplus-fc-026',
    domain: 5,
    term: 'BIOS vs. UEFI',
    definition:
      'BIOS (Basic Input/Output System): Legacy firmware standard. 16-bit, limited to 1MB addressable space. Does not support drives >2TB for boot. Uses MBR (Master Boot Record).\nUEFI (Unified Extensible Firmware Interface): Modern replacement. 32/64-bit, supports drives >2TB, uses GPT (GUID Partition Table). Faster boot, Secure Boot support, GUI interface, supports mouse input. Required for Windows 11.',
  },
  {
    id: 'aplus-fc-027',
    domain: 5,
    term: 'Common Hardware Failure Symptoms',
    definition:
      'RAM failure: BSOD, system crashes, beep codes, application errors.\nHDD failure: Click of death, slow access, SMART errors, read errors, grinding noise.\nGPU failure: Artifacts on screen, corrupted display, no display, crash during gaming.\nPSU failure: Random shutdowns, no power, inability to power on, burning smell.\nCPU failure: No POST, system freeze, overheating (check thermal paste/fan).',
  },
  {
    id: 'aplus-fc-028',
    domain: 5,
    term: 'Printer Troubleshooting Issues',
    definition:
      'Ghost images: Worn drum (photosensitive drum not cleaning properly).\nSmearing / not fusing: Fuser assembly failure.\nLines/streaks: Dirty drum or developer roller, low toner.\nBlank pages: No toner, laser failure, transfer belt failure.\nPaper jams: Worn pickup rollers, incorrect paper type, overfilled tray.\nIncorrect colors (inkjet): Clogged nozzles — run cleaning cycle.',
  },

  // ─── DOMAIN 6: OPERATING SYSTEMS ─────────────────────────────────────────

  {
    id: 'aplus-fc-029',
    domain: 6,
    term: 'Windows Editions Comparison',
    definition:
      'Windows Home: Basic features, no domain join, no Group Policy, no BitLocker, no Hyper-V.\nWindows Pro: Adds domain join, BitLocker, Group Policy, Hyper-V, Remote Desktop hosting, Windows Sandbox.\nWindows Enterprise: Pro + AppLocker, BranchCache, DirectAccess, advanced BitLocker management. Requires volume licensing.\nWindows Server: Designed for server roles (AD, DNS, DHCP, file server, web server).',
  },
  {
    id: 'aplus-fc-030',
    domain: 6,
    term: 'File Systems',
    definition:
      'NTFS: Windows standard. Supports permissions, encryption (EFS), compression, journaling, large files. Required for Windows installation.\nFAT32: Universal compatibility; max file size 4 GB; max volume 32 GB (Windows format limit). Used for USB drives and older systems.\nexFAT: No file size limit; cross-platform (Windows/macOS/Linux). Best for large USB drives/SD cards.\nAPFS: Apple File System — macOS 10.13+, iOS, watchOS. Optimized for SSDs.\next4: Standard Linux file system. Journaling, large file support.',
  },
  {
    id: 'aplus-fc-031',
    domain: 6,
    term: 'Windows Command-Line Tools',
    definition:
      'ipconfig /all — View TCP/IP config (IP, mask, gateway, DNS, MAC)\nipconfig /release & /renew — Release/renew DHCP lease\nipconfig /flushdns — Clear DNS cache\nping — Test ICMP connectivity\ntracert — Trace route to destination\nnslookup — Query DNS\nnetstat -an — Show active connections and listening ports\nchkdsk — Check disk for errors\nsfc /scannow — Scan and repair system files',
  },
  {
    id: 'aplus-fc-032',
    domain: 6,
    term: 'Windows Administrative Tools',
    definition:
      'Task Manager (Ctrl+Shift+Esc): Processes, performance, startup programs, services.\nDevice Manager: View/update/rollback hardware drivers.\nEvent Viewer: System/application/security logs.\nDisk Management: Partition, format, assign drive letters.\nServices.msc: Manage Windows services.\nRegedit: Edit Windows Registry.\nMsconfig: Configure startup, boot options, services.\nGpedit.msc: Group Policy editor (Pro/Enterprise only).',
  },
  {
    id: 'aplus-fc-033',
    domain: 6,
    term: 'macOS Key Utilities',
    definition:
      'Finder: File manager (equivalent to Windows Explorer).\nActivity Monitor: Running processes and resource usage (equivalent to Task Manager).\nSystem Information: Hardware specs and peripherals (equivalent to Device Manager/System Info).\nKeychain Access: Password and certificate management.\nDisk Utility: Disk management, format, First Aid (repair).\nTerminal: Command-line interface (bash/zsh).\nTime Machine: Automatic backup to external drive or network location.',
  },
  {
    id: 'aplus-fc-034',
    domain: 6,
    term: 'Linux Basics',
    definition:
      'ls: List directory contents\ncd: Change directory\npwd: Print working directory\ncp/mv/rm: Copy/move/remove files\ncat: Display file contents\ngrep: Search text patterns\nchmod/chown: Change permissions/ownership\napt-get / yum / dnf: Package managers\nps aux: List running processes\ntop: Real-time process monitor\nsudo: Run command as administrator\nman <command>: Display manual page',
  },

  // ─── DOMAIN 7: SECURITY ───────────────────────────────────────────────────

  {
    id: 'aplus-fc-035',
    domain: 7,
    term: 'Malware Types',
    definition:
      'Virus: Attaches to files; spreads when user runs infected file.\nWorm: Self-replicating; spreads via network WITHOUT user action.\nTrojan: Disguised as legitimate software; does not self-replicate.\nRansomware: Encrypts files; demands payment for decryption key.\nSpyware: Secretly monitors user activity, captures keystrokes/passwords.\nAdware: Displays unwanted advertisements.\nRootkit: Hides malware presence at OS/firmware level.\nBotnet: Network of infected machines controlled remotely (C2).',
  },
  {
    id: 'aplus-fc-036',
    domain: 7,
    term: 'Social Engineering Attacks',
    definition:
      'Phishing: Fraudulent email mimicking a trusted source to steal credentials.\nSpear phishing: Targeted phishing against specific individual using personalized info.\nWhaling: Spear phishing targeting executives (C-level).\nVishing: Voice/phone phishing.\nSmishing: SMS-based phishing.\nTailgating/Piggybacking: Following authorized person into secure area.\nImpersonation: Pretending to be someone else.\nDumpster diving: Recovering sensitive info from discarded materials.',
  },
  {
    id: 'aplus-fc-037',
    domain: 7,
    term: 'Windows Security Features',
    definition:
      'BitLocker: Full-disk encryption for volumes; uses AES; requires TPM (Windows Pro+).\nEFS (Encrypting File System): Encrypts individual files/folders; NTFS only; tied to user account.\nWindows Defender: Built-in antimalware; real-time protection, cloud-based detection.\nUAC (User Account Control): Prompts for elevation when programs attempt system changes.\nWindows Firewall: Host-based stateful firewall, configurable per network profile.\nSecure Boot (UEFI): Prevents loading unsigned/unauthorized boot code.',
  },
  {
    id: 'aplus-fc-038',
    domain: 7,
    term: 'Password Best Practices',
    definition:
      'Length: Minimum 8 characters (longer is better — 12+ recommended).\nComplexity: Mix of uppercase, lowercase, numbers, symbols.\nExpiration: Regular password changes (though NIST now recommends against mandatory rotation unless compromised).\nHistory: Prevent reuse of recent passwords.\nLockout: Account lockout after N failed attempts (prevents brute force).\nMFA: Add second factor — greatly reduces risk of compromised passwords.\nPassword manager: Helps users maintain unique passwords per site.',
  },
  {
    id: 'aplus-fc-039',
    domain: 7,
    term: 'Physical Security Controls',
    definition:
      'Mantrap (access control vestibule): Two-door entry prevents tailgating.\nBadge/smart card reader: Authentication before door access.\nSecurity cameras (CCTV): Deter and record security incidents.\nCable lock: Physical lock securing laptop to desk via Kensington slot.\nLocking server racks: Prevent physical access to servers.\nGuards: Human security at entry points.\nFence/bollards: Perimeter security.\nSafe: Stores sensitive documents or backup media.',
  },
  {
    id: 'aplus-fc-040',
    domain: 7,
    term: 'CompTIA Malware Removal Steps',
    definition:
      '1. Investigate and verify malware symptoms\n2. Quarantine infected systems (isolate from network)\n3. Disable System Restore in Windows (to prevent reinfection from restore points)\n4. Remediate (update AV signatures, scan and remove malware, manual removal if needed)\n5. Schedule scans and run updates\n6. Enable System Restore and create a clean restore point\n7. Educate the end user on how to avoid future infections',
  },

  // ─── DOMAIN 8: SOFTWARE TROUBLESHOOTING ──────────────────────────────────

  {
    id: 'aplus-fc-041',
    domain: 8,
    term: 'Blue Screen of Death (BSOD)',
    definition:
      'Windows kernel-level stop error (stop code/bug check) that crashes the OS to prevent further damage. Common causes:\n- Faulty or incompatible device drivers\n- RAM errors (run Windows Memory Diagnostic)\n- Corrupt system files (run sfc /scannow)\n- Hardware failures (CPU, GPU, motherboard)\n- Overheating\nAnalyze dump files with WinDbg or Event Viewer.',
  },
  {
    id: 'aplus-fc-042',
    domain: 8,
    term: 'Windows Performance Issues',
    definition:
      'High CPU: Check Task Manager for process consuming CPU. Could be malware, stuck update, or application bug.\nHigh RAM: Too many apps open, memory leak, insufficient installed RAM.\nHigh disk usage: Antivirus scan, Windows Update, fragmentation (HDD), failing drive.\nSlow boot: Too many startup programs (Task Manager → Startup), slow drive, malware.\nTools: Task Manager, Resource Monitor, Performance Monitor, Disk Cleanup, Disk Defragmenter.',
  },
  {
    id: 'aplus-fc-043',
    domain: 8,
    term: 'Application Troubleshooting',
    definition:
      'Missing DLL: Reinstall application or install missing runtime (Visual C++, .NET).\nApplication crashes: Update the app, check for driver conflicts, run in compatibility mode, check Event Viewer for error details.\nFails to install: Check permissions, disk space, compatibility, existing conflicting software.\nBrowser issues: Clear cache/cookies, disable extensions, reset browser settings.\nPrinter not found: Check print spooler service, reinstall driver, check port configuration.',
  },

  // ─── DOMAIN 9: OPERATIONAL PROCEDURES ────────────────────────────────────

  {
    id: 'aplus-fc-044',
    domain: 9,
    term: 'Change Management Process',
    definition:
      'Formal process to control changes to IT systems:\n1. Request: Document the proposed change\n2. Impact analysis: Assess risks and effects on other systems\n3. Approval: Change Advisory Board (CAB) or manager approval\n4. Implementation: Make the change; have a rollback plan ready\n5. Testing: Verify the change works as intended\n6. Documentation: Record what was done, outcome, and lessons learned\n7. Closure: Close the change ticket',
  },
  {
    id: 'aplus-fc-045',
    domain: 9,
    term: 'Backup Types & Strategy',
    definition:
      'Full: All selected data; slowest to back up, fastest to restore. Resets archive bit.\nIncremental: Only changes since last backup (any type). Fastest backup, slowest restore (need full + all incrementals).\nDifferential: All changes since last FULL backup. Faster backup than full, faster restore than incremental.\n\n3-2-1 Rule: 3 copies of data, 2 different media types, 1 offsite copy.',
  },
  {
    id: 'aplus-fc-046',
    domain: 9,
    term: 'ESD & Safety Procedures',
    definition:
      'ESD (Electrostatic Discharge): Static electricity can permanently damage computer components even without a visible spark.\nPrevention:\n- Antistatic wrist strap (connected to chassis ground)\n- Antistatic mat on work surface\n- Touch chassis before handling components\n- Store components in antistatic bags\n- Avoid working on carpet or wearing wool\n- Maintain 40-60% relative humidity in the workspace',
  },
  {
    id: 'aplus-fc-047',
    domain: 9,
    term: 'Documentation Types',
    definition:
      'Network diagrams: Physical and logical layout of infrastructure.\nAsset inventory: Hardware/software tracking (serial numbers, licenses, warranty).\nKnowledge base: IT solutions and procedures for common issues.\nStandard Operating Procedures (SOPs): Step-by-step instructions for routine tasks.\nChange log: Record of all system changes.\nTicketing system: Track, prioritize, and document IT incidents and requests.',
  },
  {
    id: 'aplus-fc-048',
    domain: 9,
    term: 'PII & Data Classification',
    definition:
      'PII (Personally Identifiable Information): Data that can identify a person — names, SSN, email, phone, address, biometrics, financial data, health records.\nData classifications:\n- Public: No restrictions\n- Internal/Private: Employee-only\n- Confidential: Restricted; business sensitive\n- Regulated/Restricted: Legally protected (HIPAA=health, PCI DSS=payments, GDPR=EU personal data)\n\nProperly classify and handle data according to its sensitivity.',
  },
  {
    id: 'aplus-fc-049',
    domain: 9,
    term: 'Ticketing System & Incident Management',
    definition:
      'A ticketing system tracks IT incidents and service requests:\n- Record: User information, problem description, date/time\n- Categorize: Type of issue (hardware, software, network)\n- Prioritize: Severity (critical/high/medium/low)\n- Assign: To appropriate technician or team\n- Document: Steps taken, solution, time spent\n- Resolve & Close: Confirm with user, close ticket\n- Report: Metrics (MTTR, ticket volume, satisfaction)',
  },
  {
    id: 'aplus-fc-050',
    domain: 9,
    term: 'Environmental Controls (Data Centers)',
    definition:
      'Temperature: Maintain 65-80°F (18-27°C) in server rooms. Hot/cold aisle containment optimizes airflow.\nHumidity: 40-60% relative humidity prevents ESD (too low) and condensation (too high).\nFire suppression: Clean agent systems (FM-200, Halon alternatives) — extinguish fire without damaging equipment or requiring oxygen removal.\nPower: UPS (Uninterruptible Power Supply) for short-term backup; generator for extended outages. PDUs (Power Distribution Units) in racks.\nPhysical access: Locked doors, badge readers, mantraps, cameras.',
  },
  {
    id: 'aplus-fc-051',
    domain: 7,
    term: 'Multi-Factor Authentication (MFA)',
    definition:
      'Authentication using two or more factors from DIFFERENT categories:\n- Something you KNOW: Password, PIN, security question\n- Something you HAVE: Smart card, hardware token (RSA SecurID), OTP via authenticator app/SMS, badge\n- Something you ARE: Biometrics — fingerprint, facial recognition, iris scan, voice\n- Somewhere you ARE: Geolocation\n- Something you DO: Behavioral biometrics (typing pattern)\n\nTwo-factor authentication (2FA) is the most common implementation.',
  },
  {
    id: 'aplus-fc-052',
    domain: 3,
    term: 'Thermal Management',
    definition:
      'CPUs and GPUs generate significant heat requiring thermal management:\n- Thermal paste/compound: Applied between CPU and heatsink to improve heat transfer; must be replaced when reseating the heatsink\n- Heatsink: Metal fins that dissipate heat\n- CPU fan: Active cooling; failure causes overheating and throttling/shutdown\n- Case airflow: Front intake fans, rear/top exhaust fans create positive pressure (keeps dust out with filters) or negative pressure\n- Liquid cooling (AIO or custom loop): More effective for overclocking or high TDP CPUs',
  },
];

/**
 * Returns all flashcards for a specific domain (1-9).
 * @param {number} domainId
 * @returns {Array}
 */
export function getFlashcardsByDomain(domainId) {
  return flashcards.filter((fc) => fc.domain === domainId);
}
