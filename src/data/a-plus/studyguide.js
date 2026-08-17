// CompTIA A+ Study Guide
// Core 1 (220-1101) and Core 2 (220-1102)

export const studyGuide = [
  {
    id: 'aplus-sg1',
    domain: 3,
    title: 'Computer Hardware Components',
    summary:
      'Understanding computer hardware is the foundation of the A+ certification. This guide covers CPUs, RAM, storage, power supplies, expansion cards, and how they all work together inside a PC.',
    topics: [
      {
        id: 'aplus-sg1-1',
        title: 'CPU Architecture & Sockets',
        content: `The **CPU (Central Processing Unit)** is the "brain" of the computer, executing program instructions.

**Key CPU concepts:**
- **Cores**: Physical processing units within a single CPU die. A quad-core CPU has 4 independent cores.
- **Threads/Hyper-threading**: Intel's Hyper-Threading (and AMD's SMT) allows each core to process 2 threads simultaneously, appearing as twice the logical processors to the OS.
- **Clock speed**: Measured in GHz — the number of instruction cycles per second. Higher = faster (generally).
- **Cache**: Ultra-fast SRAM built into the CPU. L1 (fastest, smallest), L2, L3 (slowest, largest, sometimes shared between cores).
- **TDP (Thermal Design Power)**: Maximum heat output in watts — determines cooling requirements.

**CPU Socket Types:**

| Socket | Manufacturer | Type | Notes |
|--------|-------------|------|-------|
| LGA 1700 | Intel | LGA | 12th/13th Gen Core |
| LGA 1200 | Intel | LGA | 10th/11th Gen Core |
| AM5 | AMD | LGA | Ryzen 7000 series |
| AM4 | AMD | PGA | Ryzen 1000-5000 series |
| BGA | Various | Soldered | Laptops, mobile — not user-replaceable |

**LGA (Land Grid Array)**: Pins are on the motherboard socket; flat pads on CPU. Intel (mostly).
**PGA (Pin Grid Array)**: Pins are on the CPU; holes in the motherboard socket. AMD AM4 and earlier.
**BGA (Ball Grid Array)**: Soldered permanently to PCB. Cannot be replaced by end users.

**Thermal paste** must be applied between the CPU and heatsink to fill microscopic gaps and improve heat transfer. Always reapply when reseating a heatsink.`,
      },
      {
        id: 'aplus-sg1-2',
        title: 'RAM Types & Installation',
        content: `**RAM (Random Access Memory)** is volatile memory used by the CPU to store actively running programs and data.

**DDR4 vs. DDR5:**

| Feature | DDR4 | DDR5 |
|---------|------|------|
| Pin count (DIMM) | 288 | 288 (new keying) |
| Pin count (SO-DIMM) | 260 | 262 |
| Base speed | 2133 MHz | 4800 MHz |
| Voltage | 1.2V | 1.1V |
| Capacity per stick | Up to 32 GB (common) | Up to 64 GB+ |
| Power management | On motherboard | On DIMM itself |

**Key RAM concepts:**
- **DIMM**: Full-size desktop module (288 pins for DDR4/DDR5)
- **SO-DIMM**: Laptop-sized module (smaller)
- **Dual-channel**: Two matched sticks in appropriate slots doubles memory bandwidth. Check motherboard manual for correct slot placement (usually A1+B1 or A2+B2).
- **ECC (Error-Correcting Code)**: Detects and corrects single-bit memory errors. Used in servers and workstations. Requires ECC-compatible CPU and motherboard.

**RAM troubleshooting:**
- Symptoms of bad RAM: BSOD, random crashes, application errors, memory test failures
- Tools: Windows Memory Diagnostic (mdsched.exe), MemTest86 (bootable)
- Fix: Reseat RAM, test one stick at a time, replace faulty stick`,
      },
      {
        id: 'aplus-sg1-3',
        title: 'Storage Technologies',
        content: `**HDD (Hard Disk Drive):**
- Mechanical device with spinning magnetic platters and read/write heads
- 5400 RPM (energy-efficient) or 7200 RPM (performance)
- Interface: SATA III (max ~600 MB/s, real-world ~150 MB/s)
- High capacity per dollar, but slow and fragile (shock-sensitive)
- Failure symptoms: clicking noise ("click of death"), slow access, SMART errors

**SSD (Solid State Drive):**
- No moving parts — flash memory chips (NAND)
- SATA SSD: Same SATA III interface as HDDs; form factor: 2.5". Max ~550 MB/s.
- NVMe SSD (M.2): Uses PCIe lanes + NVMe protocol. Much faster:
  - PCIe Gen 3 x4: ~3,500 MB/s read
  - PCIe Gen 4 x4: ~7,000 MB/s read
  - PCIe Gen 5 x4: ~12,000+ MB/s read
- M.2 form factors: 2230, 2242, 2260, 2280 (length in mm) — 2280 most common
- Note: M.2 slots can be SATA or NVMe — not interchangeable in terms of performance! Check slot type.

**RAID (Redundant Array of Independent Disks):**

| RAID Level | Min Drives | Redundancy | Performance | Notes |
|------------|-----------|------------|-------------|-------|
| RAID 0 | 2 | None | High | Striping; 1 failure = all data lost |
| RAID 1 | 2 | Yes (1 failure) | Read fast | Mirroring; 50% capacity |
| RAID 5 | 3 | Yes (1 failure) | Good | Striping + distributed parity |
| RAID 10 | 4 | Yes | Best | Mirror then stripe; 50% capacity |

**Optical drives**: CD (700 MB), DVD (4.7 GB / 8.5 GB dual-layer), Blu-ray (25 GB / 50 GB dual-layer). Largely replaced by USB and cloud storage.`,
      },
      {
        id: 'aplus-sg1-4',
        title: 'Power Supplies & Connectors',
        content: `The **PSU (Power Supply Unit)** converts AC wall power to regulated DC voltages required by computer components.

**Voltage Rails:**
- **+12V**: Powers CPU, GPU, motors (most power goes here in modern systems)
- **+5V**: Older drives, some USB, logic circuits
- **+3.3V**: RAM, chipset, some expansion cards
- **-12V**: Legacy serial ports (very low amperage)
- **+5VSB**: Standby power (keeps system responsive to wake signals when "off")

**Key ATX Connectors:**

| Connector | Pins | Powers |
|-----------|------|--------|
| ATX main | 20+4 (24 total) | Motherboard |
| EPS/CPU | 4+4 (8 total) | CPU/processor |
| PCIe | 6+2 (8 total) | GPU (75W per connector) |
| SATA power | 15-pin | SATA drives, SSDs |
| Molex | 4-pin | Legacy fans, older drives |

**PSU sizing**: Total system wattage (all components) + 20-30% headroom = recommended PSU wattage. A gaming PC with a high-end GPU may need 650-850W+.

**PSU efficiency rating (80 Plus)**: Bronze, Silver, Gold, Platinum, Titanium — indicates efficiency at various loads. Higher rating = less wasted energy (less heat, lower electricity cost).

**Troubleshooting PSU:**
- No power at all: Check power cable, surge protector, PSU switch
- Random shutdowns: PSU may be underpowered or failing
- Test with multimeter on 24-pin connector: 12V, 5V, 3.3V rails should be within ±5%
- Replace PSU if voltages are out of range — do NOT attempt to repair`,
      },
    ],
  },

  {
    id: 'aplus-sg2',
    domain: 3,
    title: 'Storage Technologies',
    summary:
      'Storage devices are critical A+ hardware knowledge. This guide covers HDDs, SSDs, interfaces, optical media, and how to troubleshoot common storage failures.',
    topics: [
      {
        id: 'aplus-sg2-1',
        title: 'Hard Drive vs. SSD Comparison',
        content: `**Choosing the right storage technology:**

| Feature | HDD | SATA SSD | NVMe SSD |
|---------|-----|----------|---------|
| Speed (sequential) | ~150 MB/s | ~550 MB/s | 3,500–12,000 MB/s |
| Speed (random I/O) | Low (mechanical) | High | Very high |
| Price per GB | Lowest | Medium | Higher |
| Durability | Low (shock-sensitive) | High | High |
| Noise | Yes (spinning) | Silent | Silent |
| Best use | Mass storage, archives | OS drive, general use | OS drive, heavy workloads |
| Power consumption | Higher | Lower | Similar to SATA |

**HDD internals:**
- **Platters**: Circular magnetic disks that store data
- **Read/write heads**: Fly nanometers above platters on an air bearing
- **Actuator arm**: Moves heads across platters
- **Spindle motor**: Spins platters at 5400 or 7200 RPM
- **Click of death**: Repeated clicking = heads failing to find correct position; imminent failure!

**SMART (Self-Monitoring, Analysis, and Reporting Technology):**
Built into all modern drives. Monitors internal health metrics (reallocated sectors, spin retry count, temperature). Check with CrystalDiskInfo (Windows) or smartctl (Linux). Warning SMART status = replace the drive soon.`,
      },
      {
        id: 'aplus-sg2-2',
        title: 'Storage Interfaces & Form Factors',
        content: `**SATA (Serial ATA):**
- SATA I: 1.5 Gb/s | SATA II: 3 Gb/s | SATA III: 6 Gb/s (~600 MB/s max, ~550 MB/s real)
- Data cable: 7-pin, max 1 meter
- Power cable: 15-pin SATA power from PSU
- Form factors: 3.5" (desktop HDDs), 2.5" (laptop HDDs and SATA SSDs)
- Hot-swappable in server environments with appropriate backplanes

**M.2 Interface:**
- Small form factor: 22mm wide, lengths: 2230, 2242, 2260, 2280 (most common), 22110
- Key types:
  - **M key** (only): NVMe PCIe SSD
  - **B+M key**: SATA or NVMe (check spec)
  - **B key** (only): SATA SSD
- A single M.2 slot may support SATA, NVMe, or both — check motherboard specs!
- PCIe Gen 3/4/5 x4 for NVMe — much faster than SATA

**NVMe (Non-Volatile Memory Express):**
- Protocol designed specifically for NAND flash over PCIe
- Lower latency, higher queue depth (65,535 queues × 65,535 commands vs AHCI's 1 queue × 32 commands)
- Requires NVMe driver support in OS (built into Windows 10/11, modern Linux)

**USB Storage:**
- USB 3.0 (blue ports): 5 Gbps
- USB 3.1 Gen 2: 10 Gbps
- USB 3.2 Gen 2x2: 20 Gbps
- USB4/Thunderbolt 4: 40 Gbps`,
      },
      {
        id: 'aplus-sg2-3',
        title: 'Storage Troubleshooting',
        content: `**Common storage failure symptoms and solutions:**

**Hard drive making clicking noise:**
- Diagnosis: Mechanical failure of read/write heads (imminent failure)
- Action: Stop using immediately; do not run chkdsk (may worsen damage)
- Recovery: Professional data recovery service; restore from backup

**Drive not detected in BIOS:**
- Check data cable connection (both ends)
- Check power connector
- Try a different SATA port on motherboard
- Test drive in another system
- Check BIOS settings (SATA mode: AHCI vs. IDE vs. RAID)

**Slow system performance:**
- Run disk check: \`chkdsk /f /r\` (Windows), requires reboot
- Check SMART status with CrystalDiskInfo
- Run Disk Cleanup, delete temp files
- Defragment HDDs (never defrag SSDs — use Optimize)
- Check for malware consuming disk I/O

**Cannot boot from drive:**
- Check BIOS boot order
- Run Startup Repair from Windows Recovery Environment
- Rebuild BCD: \`bootrec /fixmbr\`, \`bootrec /fixboot\`, \`bootrec /rebuildbcd\`
- Check for disk errors with chkdsk

**SSD wear and lifespan:**
- SSDs have a limited number of write cycles per cell (TBW — Terabytes Written rating)
- Monitor with manufacturer tools or CrystalDiskInfo
- SSDs fail gracefully (read-only mode) rather than sudden failure like HDDs`,
      },
    ],
  },

  {
    id: 'aplus-sg3',
    domain: 2,
    title: 'Networking for A+ Technicians',
    summary:
      'A+ technicians must understand networking fundamentals including TCP/IP configuration, common protocols, wireless networking, and basic network troubleshooting.',
    topics: [
      {
        id: 'aplus-sg3-1',
        title: 'TCP/IP Fundamentals',
        content: `Every device on a network needs four configuration parameters for IPv4 connectivity:

1. **IP Address**: Unique identifier for the device on the network (e.g., 192.168.1.100)
2. **Subnet Mask**: Defines the network boundary (e.g., 255.255.255.0 = /24)
3. **Default Gateway**: The router's IP address — sends traffic to other networks (e.g., 192.168.1.1)
4. **DNS Server**: Resolves domain names to IP addresses (e.g., 8.8.8.8 = Google DNS)

**DHCP (Dynamic Host Configuration Protocol):**
Most networks use DHCP to automatically assign these settings. Process (DORA):
1. **Discover**: Client broadcasts to find DHCP servers
2. **Offer**: DHCP server offers an IP address
3. **Request**: Client requests the offered IP
4. **Acknowledge**: Server confirms the lease

**Static IP configuration:** Manually set on servers, printers, and network devices that should always have the same IP. Avoids DHCP dependency.

**APIPA (169.254.x.x):** Windows assigns a 169.254.0.0/16 address when DHCP fails. This means: no DHCP server reached, check network cable, DHCP server status, and DHCP scope.

**Viewing TCP/IP configuration (Windows):**
- \`ipconfig\` — Basic IP, mask, gateway
- \`ipconfig /all\` — Full config including MAC, DNS, DHCP server, lease times
- \`ipconfig /release\` — Releases current DHCP lease
- \`ipconfig /renew\` — Requests new DHCP lease
- \`ipconfig /flushdns\` — Clears DNS cache`,
      },
      {
        id: 'aplus-sg3-2',
        title: 'Network Hardware & Cabling',
        content: `**Network hardware roles:**

**Hub** (Layer 1 — Physical):
- Receives signal on one port and broadcasts it out ALL other ports
- Creates a single collision domain — all devices compete for bandwidth
- Half-duplex only; obsolete — replaced by switches

**Switch** (Layer 2 — Data Link):
- Forwards frames based on **MAC addresses** — only to the correct port
- Each port is its own collision domain; full-duplex
- Maintains a **MAC address table (CAM table)** mapping MACs to ports
- Most modern networks use switches exclusively

**Router** (Layer 3 — Network):
- Forwards packets between **different networks** based on IP addresses
- Connects home/office network to internet
- Makes routing decisions using routing table

**Access Point** (AP):
- Connects wireless clients to the wired network
- Acts as a wireless switch for Wi-Fi clients
- WAP = Wireless Access Point

**Ethernet cabling:**

| Category | Max Speed | Max Distance |
|----------|-----------|-------------|
| Cat 5 | 100 Mbps | 100 m |
| Cat 5e | 1 Gbps | 100 m |
| Cat 6 | 1 Gbps (10 Gbps to 55m) | 100 m |
| Cat 6a | 10 Gbps | 100 m |

- All Ethernet cables use RJ-45 connectors
- T568A and T568B are the two wiring standards — be consistent within an installation
- Straight-through: Both ends same standard (connects different device types)
- Crossover: Ends use different standards (connects same device types — mostly auto-detected by modern equipment)`,
      },
      {
        id: 'aplus-sg3-3',
        title: 'Network Troubleshooting Commands',
        content: `**Essential network troubleshooting tools:**

**ping**
Tests basic ICMP connectivity and measures round-trip time:
- \`ping 127.0.0.1\` — Tests local TCP/IP stack (should always work)
- \`ping <gateway IP>\` — Tests connectivity to default gateway (local network)
- \`ping 8.8.8.8\` — Tests internet connectivity by IP (bypasses DNS)
- \`ping google.com\` — Tests DNS + internet connectivity
- If ping by IP works but not by name → **DNS problem**

**tracert** (Windows) / **traceroute** (Linux)
Traces the path to a destination, showing each router hop and latency:
- \`\`tracert 8.8.8.8\`\` — Use when ping fails or connectivity is slow
- \`* * *\` at a hop means ICMP is blocked at that router (not necessarily a fault — check if the next hop responds)

**nslookup**
Tests DNS resolution:
- \`\`nslookup google.com\`\` — Queries default DNS server
- \`\`nslookup google.com 8.8.8.8\`\` — Queries Google's DNS specifically
- Reports both the answer and which DNS server was used

**netstat**
Shows active connections and listening ports:
- \`\`netstat -an\`\` — All connections/ports (numeric, no DNS lookup)
- \`\`netstat -b\`\` (Windows, run as admin) — Shows process for each connection

**Troubleshooting methodology:**
1. Can you ping 127.0.0.1? (No → TCP/IP stack issue)
2. Can you ping your own IP? (No → adapter/driver issue)
3. Can you ping the gateway? (No → cable, switch, VLAN issue)
4. Can you ping external IP (8.8.8.8)? (No → routing/ISP issue)
5. Can you ping by hostname? (No → DNS issue)`,
      },
    ],
  },

  {
    id: 'aplus-sg4',
    domain: 6,
    title: 'Windows Operating System',
    summary:
      'Windows OS is the most tested topic on A+ Core 2. This guide covers Windows editions, file systems, command-line tools, administrative utilities, and OS installation.',
    topics: [
      {
        id: 'aplus-sg4-1',
        title: 'Windows Editions & Features',
        content: `**Windows 10/11 Editions:**

| Feature | Home | Pro | Enterprise |
|---------|------|-----|-----------|
| Domain Join | No | Yes | Yes |
| Group Policy | No | Yes | Yes |
| BitLocker | No | Yes | Yes |
| Hyper-V | No | Yes | Yes |
| Remote Desktop (host) | No | Yes | Yes |
| AppLocker | No | No | Yes |
| DirectAccess | No | No | Yes |
| Pricing | Consumer | Business | Volume license only |

**Windows 11 requirements:**
- 64-bit processor (2+ cores, 1+ GHz)
- 4 GB RAM minimum (8 GB recommended)
- 64 GB storage
- TPM 2.0 (Trusted Platform Module)
- UEFI firmware with Secure Boot capable
- DirectX 12 compatible graphics

**Windows 10/11 upgrade path:**
Home → Pro (paid upgrade or product key)
Pro → Enterprise (volume license)

**Key Windows features:**
- **Cortana**: Microsoft's virtual assistant
- **Windows Hello**: Biometric authentication (fingerprint, facial recognition)
- **Windows Sandbox**: Isolated desktop to run untrusted software (Pro+)
- **WSL (Windows Subsystem for Linux)**: Run Linux binaries natively in Windows`,
      },
      {
        id: 'aplus-sg4-2',
        title: 'File Systems & Disk Management',
        content: `**Windows File Systems:**

**NTFS (New Technology File System)** — Windows standard:
- Supports permissions (DACL), ownership, auditing
- File encryption (EFS — Encrypting File System, tied to user certificate)
- Compression (per-file/folder, transparent)
- Journaling (recovers from crashes without full disk scan)
- Large volume support (up to 256 TB)
- Maximum file size: 16 TB (practically limited by OS)
- Required for Windows system drives

**FAT32:**
- Maximum file size: **4 GB** (FAT32 can NOT store files >4 GB)
- Maximum volume size: 32 GB (Windows format limit; technically 2 TB)
- Compatible with all operating systems and devices
- No permissions or journaling

**exFAT (Extended FAT):**
- Designed for flash drives and SD cards
- No practical file size or volume size limit
- Cross-platform: Windows, macOS, Linux (with exFAT driver), gaming consoles
- Best choice for large USB drives shared between operating systems

**Disk Management (diskmgmt.msc):**
- Create, delete, format partitions
- Extend or shrink volumes
- Change drive letters
- Initialize new disks
- Convert between MBR and GPT (data destructive!)
- Mark partitions as active

**MBR vs. GPT:**

| Feature | MBR | GPT |
|---------|-----|-----|
| Max disk size | 2 TB | 9.4 ZB (effectively unlimited) |
| Max partitions | 4 primary | 128 (Windows) |
| Firmware | BIOS | UEFI |
| Boot code location | First sector | Protective MBR + EFI partition |
| Required for Windows 11 | No | Yes (with UEFI + Secure Boot) |`,
      },
      {
        id: 'aplus-sg4-3',
        title: 'Windows Administrative Tools',
        content: `**Task Manager (Ctrl+Shift+Esc):**
- **Processes tab**: All running processes with CPU/memory/disk/network usage
- **Performance tab**: CPU, memory, disk, network graphs and totals
- **Startup tab**: Programs that launch with Windows (enable/disable here)
- **Services tab**: Quick view of services with start/stop control
- Use: Kill unresponsive apps, identify high CPU/RAM processes, manage startup

**Device Manager (devmgmt.msc):**
- View all hardware devices and their drivers
- Yellow exclamation mark: Driver error
- Red X: Device disabled
- Update driver, roll back driver, disable/enable device
- View hidden devices (View → Show hidden devices)

**Event Viewer (eventvwr.msc):**
- **Windows Logs**: Application, Security, System, Setup, Forwarded Events
- Severity levels: Error (red X), Warning (yellow !), Information (blue i)
- Use: Diagnose crashes, application errors, security events, driver failures

**Registry Editor (regedit.exe):**
Key hives:
- \`HKEY_LOCAL_MACHINE (HKLM)\`: Machine-wide settings
- \`HKEY_CURRENT_USER (HKCU)\`: Current logged-in user settings
- \`HKEY_CLASSES_ROOT (HKCR)\`: File type associations
- \`HKEY_USERS (HKU)\`: All user profiles
- \`HKEY_CURRENT_CONFIG (HKCC)\`: Current hardware profile
- **Always export/back up before editing!**

**Services (services.msc):**
- Start, stop, restart, disable Windows services
- Configure startup type: Automatic, Automatic (Delayed), Manual, Disabled
- Dependency tab: Shows what a service depends on

**System Configuration (msconfig):**
- General, Boot, Services, Startup tabs
- Diagnostic startup: Load minimal drivers (troubleshooting)
- Boot options: Safe mode, no GUI boot, boot logging`,
      },
      {
        id: 'aplus-sg4-4',
        title: 'Windows Command-Line Essentials',
        content: `**Navigation & File Management:**

\`cd\` — Change directory: \`cd C:\\Users\\Trevor\`, \`cd ..\` (parent dir)
\`dir\` — List directory contents: \`dir /a\` (show hidden), \`dir /s\` (recursive)
\`md / mkdir\` — Create directory
\`rd / rmdir\` — Remove directory: \`rd /s /q folder\` (silent recursive)
\`copy\` — Copy files: \`copy source.txt dest.txt\`
\`move\` — Move/rename files
\`del\` — Delete files
\`type\` — Display text file contents (like Linux cat)

**System & Network:**
\`ipconfig /all\` — Full TCP/IP configuration
\`ipconfig /release\` and \`/renew\` — DHCP lease management
\`ipconfig /flushdns\` — Clear DNS cache
\`ping <IP/hostname>\` — Test connectivity
\`tracert <destination>\` — Trace route
\`nslookup <hostname>\` — DNS query
\`netstat -an\` — Active connections and ports
\`arp -a\` — Display ARP cache (IP-to-MAC table)

**Disk & System:**
\`chkdsk C: /f /r\` — Check and repair disk errors (f=fix, r=recover sectors)
\`sfc /scannow\` — Scan and repair protected system files
\`DISM /Online /Cleanup-Image /RestoreHealth\` — Repair Windows image
\`format C: /fs:NTFS\` — Format a volume
\`diskpart\` — Advanced disk partitioning (interactive)
\`gpupdate /force\` — Force Group Policy refresh
\`shutdown /r /t 0\` — Restart immediately

**Tips:**
- Run Command Prompt as Administrator for system commands
- \`cls\` clears the screen
- Up arrow recalls previous commands
- Tab key auto-completes paths and filenames`,
      },
    ],
  },

  {
    id: 'aplus-sg5',
    domain: 7,
    title: 'Security Fundamentals',
    summary:
      'Security is 25% of the A+ Core 2 exam. This guide covers malware types, social engineering attacks, Windows security tools, authentication methods, and basic security best practices.',
    topics: [
      {
        id: 'aplus-sg5-1',
        title: 'Malware Types & Characteristics',
        content: `**Malware** (malicious software) is any software designed to harm, disrupt, or gain unauthorized access to computer systems.

**Malware Types:**

| Type | Spreads By | Requires User Action? | Key Characteristic |
|------|-----------|----------------------|-------------------|
| Virus | Attaches to files | Yes (run infected file) | Modifies/corrupts files |
| Worm | Network vulnerabilities | No | Self-replicating across networks |
| Trojan | Appears legitimate | Yes (install/run it) | Does NOT self-replicate |
| Ransomware | Email/web/lateral | Sometimes | Encrypts files, demands ransom |
| Spyware | Bundled software | Sometimes | Secretly monitors user |
| Adware | Bundled software | Sometimes | Displays unwanted ads |
| Rootkit | Various | Often | Hides malware at OS level |
| Keylogger | Various | Often | Records keystrokes (steals passwords) |
| Botnet | Exploit/email | Various | Remote-controlled network of infected PCs |
| Fileless malware | Memory injection | No | Lives in RAM only; hard to detect |

**Common delivery methods:**
- Email attachments and malicious links (phishing)
- Drive-by downloads (visiting compromised websites)
- Removable media (infected USB drives)
- Bundled with legitimate software (PUPs — Potentially Unwanted Programs)
- Exploiting unpatched software vulnerabilities
- Social engineering

**Signs of malware infection:**
- System suddenly slow
- Pop-up advertisements (especially when browser is closed)
- Antivirus disabled or won't update
- New browser toolbars or homepage changed
- Unexplained network activity
- Files encrypted or missing
- Ransom note on screen`,
      },
      {
        id: 'aplus-sg5-2',
        title: 'Social Engineering Attacks',
        content: `**Social engineering** exploits human psychology rather than technical vulnerabilities. No amount of technical security can fully prevent it — user education is critical.

**Attack Types:**

**Phishing**: Mass email campaign appearing to be from a trusted source (bank, Microsoft, IT department) containing a malicious link or attachment. Goal: steal credentials or install malware.

**Spear phishing**: Targeted phishing using personalized information about the victim to appear more credible.

**Whaling**: Spear phishing targeting high-value individuals (CEOs, CFOs, executives).

**Vishing** (Voice Phishing): Phone calls impersonating IT support, banks, or government agencies to manipulate victims into revealing information or taking actions.

**Smishing** (SMS Phishing): Text messages with malicious links or requesting sensitive information.

**Tailgating / Piggybacking**: Following an authorized person through a secure door without badging in. Prevention: mantrap, security guards, user awareness.

**Impersonation**: Pretending to be an IT technician, vendor, or authority figure to gain access to systems or information.

**Dumpster diving**: Searching discarded documents and media for sensitive information. Prevention: shred sensitive documents, degauss/physically destroy old drives.

**Pretexting**: Creating a fabricated scenario (pretext) to extract information (e.g., "I'm from IT, I need your password to fix your account").

**Best defenses against social engineering:**
- User security awareness training
- Verify identity before acting on requests
- Established procedures for sensitive requests (never provide passwords over phone)
- Report suspicious activity`,
      },
      {
        id: 'aplus-sg5-3',
        title: 'Windows Security Features',
        content: `**BitLocker (Full Disk Encryption):**
- Encrypts entire drive volumes using AES-128 or AES-256
- Available on Windows Pro and Enterprise (not Home)
- Requires **TPM 2.0** chip (or USB startup key in older configurations)
- Protects data if device is stolen or lost
- BitLocker To Go: Encrypts removable drives (USB)
- Recovery key must be saved (Microsoft account, USB, print, Active Directory)

**EFS (Encrypting File System):**
- Encrypts individual files and folders on NTFS volumes
- Tied to the user's account/certificate — only that user can access encrypted files
- Available in all Windows editions that support NTFS
- Less robust than BitLocker; does NOT protect data if attacker boots from external media

**Windows Defender Antivirus:**
- Built-in, always-on antimalware (no license cost)
- Real-time protection, cloud-based detection, automatic updates
- Managed through Windows Security app or Group Policy

**UAC (User Account Control):**
- Displays consent prompt when apps request elevated (admin) privileges
- Prevents malware from silently elevating privileges
- Standard user prompt: Must enter admin credentials
- Admin user prompt: Confirm elevation (consent)
- Should remain ENABLED — disabling UAC is a security risk

**Windows Firewall:**
- Host-based stateful firewall
- Three network profiles: Domain, Private, Public (more restrictive)
- Can block/allow by program, port, or IP address
- Managed via Windows Security or wf.msc (advanced settings)

**Secure Boot (UEFI):**
- Prevents loading unauthorized bootloaders and OS kernels
- Uses digital signatures to verify boot software
- Required for Windows 11
- Can prevent some bootkit malware`,
      },
    ],
  },

  {
    id: 'aplus-sg6',
    domain: 1,
    title: 'Mobile Devices & Connectivity',
    summary:
      'Mobile devices represent 15% of the A+ Core 1 exam. This guide covers laptop hardware, smartphone connectivity, cellular standards, mobile OS features, and MDM.',
    topics: [
      {
        id: 'aplus-sg6-1',
        title: 'Laptop Hardware Components',
        content: `Laptops share many components with desktops but use smaller, more power-efficient versions.

**Key laptop-specific components:**

**Display:**
- **LCD types**: TN (fast, narrow angles), IPS (wide angles, accurate color), OLED (perfect blacks, vibrant)
- **Backlight**: LED backlighting (modern). CCFL (legacy fluorescent) had separate inverter.
- **Symptom — dim image with flashlight visible**: Backlight failure, not LCD panel
- **Digitizer**: Touch overlay on touchscreen laptops; can be replaced separately from LCD

**RAM:**
- SO-DIMM form factor (smaller than desktop DIMM)
- Many ultrabooks have RAM **soldered** to motherboard — not user-upgradeable
- Check laptop specs before attempting RAM upgrade

**Storage:**
- 2.5" SATA SSD or HDD
- M.2 NVMe SSD (most modern laptops)
- eMMC: Soldered flash storage (budget laptops, Chromebooks) — not replaceable

**Battery:**
- Lithium-ion (Li-ion) or Lithium Polymer (Li-Po)
- Degrades over charge cycles (~300-500 full cycles)
- Symptoms of failing battery: Rapid discharge, not charging, swelling (fire hazard!)
- Swollen battery = immediate replacement needed

**Thermal management:**
- Laptops use copper heat pipes to conduct heat from CPU/GPU to a heatsink + fan at the exhaust vent
- Thermal paste degrades over time — repasting (replacing thermal compound) can significantly reduce temperatures on older laptops
- Blocked vents = overheating → thermal throttling → poor performance`,
      },
      {
        id: 'aplus-sg6-2',
        title: 'Mobile Device Connectivity & OS',
        content: `**Mobile Connectivity Standards:**

**Bluetooth:**
- Short-range, personal area network
- Class 1: 100m range | Class 2: 10m | Class 3: 1m
- Bluetooth 5.0: 4x range, 2x speed vs. Bluetooth 4.2
- Uses 2.4 GHz ISM band (same as Wi-Fi 2.4 GHz — can interfere)
- Pairing process: discovery → pairing → bonded connection

**NFC (Near Field Communication):**
- Extremely short range (typically < 4 cm)
- ISO/IEC 14443 standard
- Uses: Contactless payments (Apple Pay, Google Pay), transit cards, quick device pairing, access control
- Passive tags need no battery; active devices (phones) have their own power

**Mobile OS:**

**iOS** (Apple):
- Closed ecosystem; apps only from App Store (without jailbreaking)
- Regular, predictable update cycle
- Tight integration with iCloud, Mac, iPad
- File management more restricted
- Security: App sandboxing, FaceID/TouchID, Secure Enclave

**Android** (Google):
- Open ecosystem; sideloading apps possible
- Fragmented: Many vendors, update delivery varies
- More customizable than iOS
- Security: Google Play Protect, Android sandbox

**MDM (Mobile Device Management):**
- Enterprise platform for managing, monitoring, and securing mobile devices
- Capabilities: Enforce password/encryption policies, remote wipe, app management, VPN configuration, geofencing, compliance reporting
- Corporate-owned vs. BYOD (Bring Your Own Device) deployment models
- Examples: Microsoft Intune, VMware Workspace ONE, Jamf (Apple)`,
      },
    ],
  },

  {
    id: 'aplus-sg7',
    domain: 5,
    title: 'Troubleshooting Methodology',
    summary:
      'The CompTIA troubleshooting methodology is tested directly on the A+ exam. Apply this structured approach to hardware, software, and network problems systematically.',
    topics: [
      {
        id: 'aplus-sg7-1',
        title: 'CompTIA 6-Step Troubleshooting Process',
        content: `CompTIA defines a **6-step troubleshooting process** for A+ technicians (note: Network+ has 7 steps — A+ combines two steps):

**Step 1: Identify the Problem**
- Gather information from the user: What exactly isn't working? When did it start? What changed recently?
- Identify symptoms: Error messages, unusual behavior, scope (one user vs. many)
- Duplicate the problem when possible
- Question the obvious first (is it plugged in? is it powered on?)

**Step 2: Establish a Theory of Probable Cause**
- Consider multiple possible causes
- Start with the most likely cause (Occam's Razor — simplest explanation first)
- Use top-down, bottom-up, or divide-and-conquer approach

**Step 3: Test the Theory to Determine Cause**
- Systematically test your theory
- If confirmed: proceed to step 4
- If not confirmed: revise the theory or escalate

**Step 4: Establish a Plan of Action and Identify Potential Effects**
- Plan the fix before implementing
- Document what you're going to change
- Identify potential side effects or risks
- Prepare a rollback plan

**Step 5: Implement the Solution or Escalate**
- Apply the fix
- If beyond your expertise or tools: escalate to appropriate team

**Step 6: Verify Full System Functionality and Implement Preventive Measures**
- Confirm the problem is resolved with the user
- Test related functionality (fixing A didn't break B)
- Apply preventive measures (updates, configuration changes)
- **Document everything**: Problem, cause, solution, preventive measures
- Educate the user if appropriate`,
      },
      {
        id: 'aplus-sg7-2',
        title: 'Hardware Troubleshooting Scenarios',
        content: `**No power / won't turn on:**
1. Check power cable at wall and back of PC
2. Check surge protector / UPS — press reset button
3. Verify PSU switch is on (some have rocker switch at back)
4. Test wall outlet with a known-good device
5. Try a different power cable
6. Check PSU voltages with multimeter
7. Try paperclip test (short PSU PS_ON to GND to test without motherboard)
8. Replace PSU if faulty

**System POSTs but won't boot to OS:**
1. Check boot order in BIOS/UEFI
2. Remove any external drives (USB, DVD)
3. Run Startup Repair from Windows Recovery Environment
4. Check if drive is detected in BIOS
5. Run chkdsk from recovery command prompt
6. Rebuild BCD: bootrec /fixmbr, bootrec /fixboot, bootrec /rebuildbcd

**Overheating / random shutdowns:**
1. Check CPU temperature in BIOS or with HWiNFO/HWMonitor
2. Verify CPU fan is spinning
3. Clean dust from heatsink, fans, and case vents (compressed air)
4. Reapply thermal paste between CPU and heatsink
5. Ensure proper airflow: front intake, rear exhaust
6. Add case fans if temperature remains high
7. Check if BIOS has thermal shutdown settings

**Blue Screen of Death (BSOD):**
1. Note the stop code (error message like IRQL_NOT_LESS_OR_EQUAL)
2. Check Event Viewer for details (System log, around the crash time)
3. Run Windows Memory Diagnostic (mdsched.exe)
4. Check recently installed drivers — roll back or uninstall
5. Run sfc /scannow and DISM /RestoreHealth
6. Boot into Safe Mode to test without third-party drivers`,
      },
      {
        id: 'aplus-sg7-3',
        title: 'Software & OS Troubleshooting',
        content: `**Windows won't boot — Safe Mode:**
Safe Mode loads Windows with minimal drivers. Three types:
- **Safe Mode**: Minimal drivers, no network
- **Safe Mode with Networking**: Safe Mode + network drivers
- **Safe Mode with Command Prompt**: Command-line only

Access: Press F8 during boot (legacy), or hold Shift while clicking Restart → Troubleshoot → Advanced Options → Startup Settings → Restart → F4/F5/F6

**Performance troubleshooting workflow:**
1. Open Task Manager: Which process is consuming CPU/RAM/Disk?
2. If unknown process: Search the process name (could be malware)
3. Check Startup tab: Disable non-essential startup items
4. Check Disk: chkdsk, SMART status (potential failing drive)
5. Scan for malware
6. Check for overheating causing throttling
7. Consider adding RAM if consistently near 100%

**Application won't install or crashes:**
1. Check system requirements (32 vs. 64-bit, Windows version, RAM/disk)
2. Run installer as Administrator
3. Check Event Viewer for specific error
4. Ensure Windows is up to date (.NET, Visual C++ runtimes often required)
5. Temporarily disable antivirus (AV may block install)
6. Try Clean Boot: Disable non-Microsoft services and startup items

**Slow or unresponsive browser:**
1. Clear browser cache and cookies
2. Disable browser extensions (test in private/incognito mode)
3. Reset browser to default settings
4. Check for browser hijacker (changed homepage/search engine)
5. Reinstall browser
6. Check for malware with Malwarebytes`,
      },
    ],
  },
];
