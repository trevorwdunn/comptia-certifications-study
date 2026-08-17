// CompTIA A+ Practice Questions
// Core 1 (220-1101): Domains 1-5
// Core 2 (220-1102): Domains 6-9
// Domain numbering: 1=Mobile Devices, 2=Networking, 3=Hardware, 4=Virtualization/Cloud,
//   5=HW/Network Troubleshooting, 6=OS, 7=Security, 8=SW Troubleshooting, 9=Operational Procedures

export const questions = [
  // ─── DOMAIN 1: MOBILE DEVICES (Core 1) ───────────────────────────────────

  {
    id: 'aplus-q-001',
    domain: 1,
    topic: 'Laptop Components',
    question:
      'A laptop displays a dim image only visible when a flashlight is shone on the screen. Which component has most likely failed?',
    options: [
      'LCD panel',
      'Video card (GPU)',
      'Backlight / inverter',
      'Display cable',
    ],
    correct: 2,
    explanation:
      'A dim image visible with a flashlight indicates the LCD panel is functioning but the backlight (or inverter on CCFL displays) has failed. LED-backlit displays rarely need inverters; the LED backlight itself may have failed or the driver board may be faulty.',
  },
  {
    id: 'aplus-q-002',
    domain: 1,
    topic: 'Laptop RAM',
    question:
      'What type of RAM module is used in laptops rather than the full-size DIMM used in desktop computers?',
    options: [
      'SO-DIMM',
      'RIMM',
      'SIMM',
      'MicroDIMM',
    ],
    correct: 0,
    explanation:
      'SO-DIMM (Small Outline Dual In-line Memory Module) is the laptop-sized version of desktop DIMM RAM. SO-DIMMs are approximately half the physical size of full-size DIMMs. DDR4 SO-DIMMs have 260 pins; DDR5 SO-DIMMs have 262 pins.',
  },
  {
    id: 'aplus-q-003',
    domain: 1,
    topic: 'Mobile Connections',
    question:
      'A user wants to transfer files from their iPhone to a Windows PC using a cable. Which connector type is on the iPhone end of the cable?',
    options: [
      'USB-C',
      'Micro-USB',
      'Lightning',
      'USB-A',
    ],
    correct: 2,
    explanation:
      'iPhones prior to iPhone 15 use Apple\'s proprietary Lightning connector. The iPhone 15 and later models transitioned to USB-C. Android devices typically use USB-C or Micro-USB.',
  },
  {
    id: 'aplus-q-004',
    domain: 1,
    topic: 'Cellular Standards',
    question:
      'Which cellular technology provides the fastest theoretical data speeds and uses millimeter wave (mmWave) frequencies for ultra-high bandwidth?',
    options: [
      'LTE (4G)',
      'HSPA+',
      '5G NR',
      'LTE-A',
    ],
    correct: 2,
    explanation:
      '5G NR (New Radio) is the latest cellular standard offering gigabit speeds. It operates on multiple frequency bands: low-band (sub-1 GHz, good range), mid-band (1-6 GHz, balance), and mmWave (24+ GHz, ultra-fast but short range). 4G LTE offers typical speeds of 10-150 Mbps.',
  },
  {
    id: 'aplus-q-005',
    domain: 1,
    topic: 'MDM',
    question:
      'An organization wants to enforce passcode policies, enable remote wipe, and restrict app installations on employee-owned smartphones. Which solution should be implemented?',
    options: [
      'VPN client',
      'Mobile Device Management (MDM)',
      'Two-factor authentication',
      'Device encryption',
    ],
    correct: 1,
    explanation:
      'MDM (Mobile Device Management) software allows IT to centrally manage, monitor, and secure mobile devices. MDM can enforce passcode policies, enable remote wipe, distribute apps, restrict features, and ensure compliance with corporate security policies on both corporate-owned and BYOD devices.',
  },

  // ─── DOMAIN 2: NETWORKING (Core 1) ───────────────────────────────────────

  {
    id: 'aplus-q-006',
    domain: 2,
    topic: 'TCP/IP',
    question:
      'A technician needs to find the default gateway and DNS server address currently assigned to a Windows computer. Which command should be used?',
    options: [
      'ping',
      'netstat',
      'ipconfig /all',
      'nslookup',
    ],
    correct: 2,
    explanation:
      '"ipconfig /all" displays detailed TCP/IP configuration for all network adapters, including IP address, subnet mask, default gateway, DNS servers, DHCP server, MAC address, and DHCP lease information. "ipconfig" alone shows only IP, mask, and gateway.',
  },
  {
    id: 'aplus-q-007',
    domain: 2,
    topic: 'Network Devices',
    question:
      'Which network device operates at Layer 3 of the OSI model and forwards traffic between different networks based on IP addresses?',
    options: [
      'Hub',
      'Switch',
      'Router',
      'Access point',
    ],
    correct: 2,
    explanation:
      'A router operates at Layer 3 (Network) and makes forwarding decisions based on IP addresses. Routers connect different networks and manage traffic between them. Switches operate at Layer 2 using MAC addresses. Hubs operate at Layer 1 and simply repeat signals.',
  },
  {
    id: 'aplus-q-008',
    domain: 2,
    topic: 'Wireless',
    question:
      'A user complains that their laptop\'s Wi-Fi is slow even though they are close to the router. A neighbor is also using a 2.4 GHz wireless network. What is the most likely cause?',
    options: [
      'The laptop antenna is broken',
      'Channel interference between the two 2.4 GHz networks',
      'The router is malfunctioning',
      'The user needs a 5G cellular connection',
    ],
    correct: 1,
    explanation:
      'When two wireless networks use overlapping channels on the 2.4 GHz band, they interfere with each other, reducing throughput even when signal strength is strong. The fix is to set both routers to non-overlapping channels (1, 6, or 11). Switching to the 5 GHz band would also help.',
  },
  {
    id: 'aplus-q-009',
    domain: 2,
    topic: 'Ports & Protocols',
    question:
      'Which protocol and port does a DHCP client use to request an IP address from a DHCP server?',
    options: [
      'TCP port 67',
      'UDP port 67 (client broadcasts to server)',
      'UDP port 68 (client listens on this port)',
      'TCP port 80',
    ],
    correct: 1,
    explanation:
      'DHCP clients broadcast DHCP Discover messages to UDP port 67 (the server port). The DHCP server responds to UDP port 68 (the client port). The transaction uses UDP because TCP connections require knowing the server\'s IP address in advance.',
  },
  {
    id: 'aplus-q-010',
    domain: 2,
    topic: 'IoT',
    question:
      'A smart home thermostat uses a short-range, low-power wireless protocol for communication with a central hub. Which wireless protocol is commonly used for this type of IoT application?',
    options: [
      '802.11ac (Wi-Fi 5)',
      'Zigbee',
      'LTE',
      'Bluetooth Classic',
    ],
    correct: 1,
    explanation:
      'Zigbee is an IEEE 802.15.4-based wireless protocol designed for low-power, low-data-rate IoT applications. It operates at 2.4 GHz, consumes very little power, and supports mesh networking. Z-Wave is another common IoT protocol. Wi-Fi consumes more power; LTE is cellular.',
  },

  // ─── DOMAIN 3: HARDWARE (Core 1) ─────────────────────────────────────────

  {
    id: 'aplus-q-011',
    domain: 3,
    topic: 'CPU',
    question:
      'Which CPU socket type, used by Intel, makes contact with pins on the motherboard rather than on the CPU itself?',
    options: [
      'PGA (Pin Grid Array)',
      'LGA (Land Grid Array)',
      'BGA (Ball Grid Array)',
      'ZIF (Zero Insertion Force)',
    ],
    correct: 1,
    explanation:
      'Intel uses LGA (Land Grid Array) sockets where the pins are on the motherboard socket and make contact with flat pads (lands) on the CPU. AMD traditionally uses PGA (Pin Grid Array) where pins are on the CPU and insert into holes on the motherboard (AM4, older). AMD AM5 switched to LGA.',
  },
  {
    id: 'aplus-q-012',
    domain: 3,
    topic: 'RAM',
    question:
      'A desktop workstation currently has two DDR4 RAM sticks installed in slots 1 and 3. A technician wants to add more RAM to take advantage of dual-channel memory. Where should the new RAM be installed?',
    options: [
      'Only slot 2',
      'Slots 2 and 4 together, matching the existing configuration',
      'Slot 4 only, so all 4 slots are filled',
      'Replace slots 1 and 3 with larger sticks',
    ],
    correct: 1,
    explanation:
      'Dual-channel memory requires matched pairs installed in the correct slots (as designated by the motherboard). If slots 1 and 3 are already a dual-channel pair, adding RAM in slots 2 and 4 (the other dual-channel pair) maintains dual-channel operation. Slot color coding on the motherboard typically indicates matching pairs.',
  },
  {
    id: 'aplus-q-013',
    domain: 3,
    topic: 'Storage',
    question:
      'Which storage interface provides the fastest data transfer speeds for SSDs by using PCIe lanes and the NVMe protocol?',
    options: [
      'SATA III (6 Gb/s)',
      'M.2 SATA',
      'M.2 NVMe (PCIe)',
      'USB 3.0',
    ],
    correct: 2,
    explanation:
      'M.2 NVMe drives use PCIe lanes (typically PCIe 3.0 x4 or PCIe 4.0 x4) and the NVMe protocol, achieving speeds of 3,500+ MB/s (Gen 3) or 7,000+ MB/s (Gen 4). SATA III is limited to ~600 MB/s (real-world ~550 MB/s). M.2 SATA uses the M.2 form factor but is still limited by the SATA interface.',
  },
  {
    id: 'aplus-q-014',
    domain: 3,
    topic: 'Power Supply',
    question:
      'A desktop PC won\'t power on. The technician uses a multimeter on the 24-pin ATX connector. Which voltage should be present on the 3.3V rail?',
    options: [
      '+5V ±5%',
      '+3.3V ±5%',
      '+12V ±5%',
      '-12V ±10%',
    ],
    correct: 1,
    explanation:
      'The ATX 24-pin connector provides several voltage rails: +3.3V, +5V, +12V, -12V, and +5VSB (standby). The +3.3V rail powers some memory and chipset components. Acceptable tolerance is ±5% (3.135V to 3.465V). If the voltage is outside this range, the PSU should be replaced.',
  },
  {
    id: 'aplus-q-015',
    domain: 3,
    topic: 'Display Connectors',
    question:
      'Which display connector supports both audio and video over a single cable, does NOT require a separate audio cable, and is the standard on modern graphics cards?',
    options: [
      'VGA',
      'DVI-D',
      'HDMI',
      'S-Video',
    ],
    correct: 2,
    explanation:
      'HDMI (High-Definition Multimedia Interface) carries both digital video and audio over a single cable. VGA carries analog video only. DVI-D carries digital video only. DisplayPort also carries audio and video and supports daisy-chaining of monitors.',
  },
  {
    id: 'aplus-q-016',
    domain: 3,
    topic: 'PCIe',
    question:
      'A technician is installing a high-end graphics card that requires an x16 PCIe slot. Which PCIe slot on the motherboard should be used?',
    options: [
      'The shortest PCIe slot (x1)',
      'Any available PCIe slot',
      'The longest PCIe slot closest to the CPU (primary x16 slot)',
      'A PCI slot',
    ],
    correct: 2,
    explanation:
      'High-end graphics cards require a PCIe x16 slot, which is the longest PCIe slot on the motherboard. The primary x16 slot (closest to the CPU) is directly connected to the CPU\'s PCIe lanes and provides maximum bandwidth (up to 16 GB/s on PCIe 3.0 x16). Secondary slots may share bandwidth.',
  },
  {
    id: 'aplus-q-017',
    domain: 3,
    topic: 'Printers',
    question:
      'Which type of printer uses heat to fuse toner powder onto paper using a laser and photosensitive drum?',
    options: [
      'Inkjet printer',
      'Thermal printer',
      'Laser printer',
      'Impact (dot matrix) printer',
    ],
    correct: 2,
    explanation:
      'A laser printer uses a laser beam to create a static charge on a photosensitive drum, which attracts toner powder. The drum transfers the toner to paper, and a fuser unit applies heat and pressure to permanently bond the toner. Laser printers produce high-quality output at high speeds.',
  },
  {
    id: 'aplus-q-018',
    domain: 3,
    topic: 'Cables & Connectors',
    question:
      'A technician needs to connect a new hard drive using the standard internal interface for consumer storage devices. Which cable type should be used?',
    options: [
      'PATA (40-pin IDE)',
      'SATA data cable',
      'SCSI cable',
      'SAS cable',
    ],
    correct: 1,
    explanation:
      'SATA (Serial ATA) is the standard internal storage interface for consumer hard drives and SSDs. A SATA data cable connects the drive to the motherboard, and a SATA power connector from the PSU provides power. PATA (IDE) is legacy. SCSI/SAS is used in enterprise environments.',
  },

  // ─── DOMAIN 4: VIRTUALIZATION & CLOUD (Core 1) ───────────────────────────

  {
    id: 'aplus-q-019',
    domain: 4,
    topic: 'Hypervisors',
    question:
      'A company runs VMware ESXi on a server to host multiple virtual machines. Which type of hypervisor is ESXi?',
    options: [
      'Type 1 (bare-metal) hypervisor',
      'Type 2 (hosted) hypervisor',
      'Container engine',
      'Paravirtualization hypervisor',
    ],
    correct: 0,
    explanation:
      'VMware ESXi is a Type 1 (bare-metal) hypervisor that runs directly on the physical hardware without a host operating system. Type 1 hypervisors offer better performance and are used in enterprise environments. Examples: VMware ESXi, Microsoft Hyper-V, Citrix XenServer. Type 2 hypervisors (VMware Workstation, VirtualBox) run on top of a host OS.',
  },
  {
    id: 'aplus-q-020',
    domain: 4,
    topic: 'Cloud Models',
    question:
      'A developer uses a cloud service to run their web application without managing the underlying servers, OS, or infrastructure. Which cloud service model best describes this?',
    options: [
      'IaaS',
      'PaaS',
      'SaaS',
      'DaaS',
    ],
    correct: 1,
    explanation:
      'PaaS (Platform as a Service) provides a managed platform for developers to build and deploy applications without managing the underlying infrastructure. The cloud provider handles servers, storage, networking, and OS. Examples: Google App Engine, Heroku, Azure App Service.',
  },
  {
    id: 'aplus-q-021',
    domain: 4,
    topic: 'Virtualization',
    question:
      'Which virtual machine component acts as a simulated network adapter, allowing VMs to communicate with each other and with external networks?',
    options: [
      'Virtual CPU (vCPU)',
      'Virtual NIC (vNIC)',
      'Virtual switch',
      'Hypervisor',
    ],
    correct: 1,
    explanation:
      'A virtual NIC (vNIC) is a software-emulated network adapter assigned to a virtual machine. The hypervisor connects vNICs to virtual switches, which can connect VMs to each other (internal/private) or to the physical network (bridged) via physical NICs.',
  },
  {
    id: 'aplus-q-022',
    domain: 4,
    topic: 'Containers',
    question:
      'How do containers differ from virtual machines?',
    options: [
      'Containers include a full guest operating system; VMs do not',
      'Containers share the host OS kernel, making them more lightweight than VMs',
      'Containers require a Type 1 hypervisor; VMs require Type 2',
      'Containers cannot run applications; they only store data',
    ],
    correct: 1,
    explanation:
      'Containers share the host OS kernel and only package the application code and its dependencies. This makes containers much more lightweight, faster to start, and more portable than VMs. Virtual machines include a complete guest OS, consuming more disk space, memory, and boot time. Docker is the most popular container platform.',
  },

  // ─── DOMAIN 5: HARDWARE & NETWORK TROUBLESHOOTING (Core 1) ───────────────

  {
    id: 'aplus-q-023',
    domain: 5,
    topic: 'POST & BIOS',
    question:
      'A computer emits a series of beep codes during startup and fails to display anything on the monitor. The beep pattern is 1 long, 3 short. What is the most likely cause?',
    options: [
      'CPU failure',
      'Hard drive failure',
      'RAM (memory) failure',
      'Power supply failure',
    ],
    correct: 2,
    explanation:
      'Beep codes are generated by the POST (Power-On Self-Test) to indicate hardware failures when no video is available. The specific meaning varies by BIOS manufacturer (AMI, Award, Phoenix), but 1 long + 3 short typically indicates a memory/RAM error. No beeps at all may indicate a CPU or PSU failure.',
  },
  {
    id: 'aplus-q-024',
    domain: 5,
    topic: 'Storage Troubleshooting',
    question:
      'A hard drive is making a loud clicking noise and the OS cannot read data from it. What does this most likely indicate?',
    options: [
      'The drive cable is loose',
      'The drive is healthy and performing a self-check',
      'A physical/mechanical failure of the drive heads (head crash)',
      'A file system corruption issue',
    ],
    correct: 2,
    explanation:
      'A "click of death" (repetitive clicking) on a hard drive indicates a physical mechanical failure, typically the read/write heads failing to find the correct position and retrying. This is a serious failure. Immediately stop using the drive to prevent further data loss and attempt data recovery. SSDs fail silently without mechanical sounds.',
  },
  {
    id: 'aplus-q-025',
    domain: 5,
    topic: 'Printer Troubleshooting',
    question:
      'A laser printer is producing prints with ghosted images — faint copies of previous page content repeating on the current page. Which component is most likely defective?',
    options: [
      'Fuser assembly',
      'Drum (photosensitive drum)',
      'Transfer belt',
      'Toner cartridge',
    ],
    correct: 1,
    explanation:
      'Ghost images (previously printed content appearing faintly on the page) are typically caused by a worn or damaged photosensitive drum that is not fully erased between print jobs, leaving residual charge that attracts toner. The fuser causes "smearing" when it fails to bond toner properly.',
  },
  {
    id: 'aplus-q-026',
    domain: 5,
    topic: 'Network Troubleshooting',
    question:
      'A PC can communicate with other computers on the local network but cannot access any internet websites by URL. Pinging external IP addresses works. What is the most likely cause?',
    options: [
      'Incorrect default gateway',
      'DNS resolution failure',
      'IP address conflict',
      'Firewall blocking all outbound traffic',
    ],
    correct: 1,
    explanation:
      'If internet IP addresses are reachable but domain names are not resolving, the problem is DNS. The user can ping by IP (routing works, gateway is correct) but cannot resolve hostnames. Check the DNS server address in the TCP/IP configuration. Run nslookup to test DNS resolution.',
  },
  {
    id: 'aplus-q-027',
    domain: 5,
    topic: 'BIOS/UEFI',
    question:
      'A technician needs to configure a computer to boot from a USB drive to install a new operating system. Where is this setting configured?',
    options: [
      'Windows Device Manager',
      'BIOS/UEFI firmware settings',
      'Disk Management in Windows',
      'Task Manager',
    ],
    correct: 1,
    explanation:
      'Boot order (boot priority) is configured in the BIOS/UEFI firmware settings, accessed during POST by pressing a key (Del, F2, F10, F12, etc. — varies by manufacturer). The boot order determines which device the system attempts to boot from first (USB, DVD, network PXE, SSD).',
  },

  // ─── DOMAIN 6: OPERATING SYSTEMS (Core 2) ─────────────────────────────────

  {
    id: 'aplus-q-028',
    domain: 6,
    topic: 'Windows Editions',
    question:
      'Which Windows 10/11 edition includes features such as BitLocker encryption, domain joining, Group Policy, and is designed for business use?',
    options: [
      'Windows Home',
      'Windows Pro',
      'Windows S Mode',
      'Windows SE',
    ],
    correct: 1,
    explanation:
      'Windows Pro includes BitLocker drive encryption, domain join capability, Group Policy, Remote Desktop hosting, and Hyper-V virtualization — features required for business environments. Windows Home lacks these enterprise features. Windows S Mode restricts apps to the Microsoft Store.',
  },
  {
    id: 'aplus-q-029',
    domain: 6,
    topic: 'File Systems',
    question:
      'A technician is formatting a USB flash drive that must be readable by Windows, macOS, and Linux. Which file system should be used?',
    options: [
      'NTFS',
      'APFS',
      'exFAT',
      'ext4',
    ],
    correct: 2,
    explanation:
      'exFAT (Extended File Allocation Table) is supported natively by Windows, macOS, and Linux and supports files larger than 4 GB (unlike FAT32). NTFS is Windows-native (macOS can read but not write without third-party tools). APFS is macOS/iOS only. ext4 is Linux-native.',
  },
  {
    id: 'aplus-q-030',
    domain: 6,
    topic: 'Command Line',
    question:
      'Which Windows command-line command lists the contents of the current directory?',
    options: [
      'ls',
      'dir',
      'list',
      'pwd',
    ],
    correct: 1,
    explanation:
      '"dir" is the Windows command to list directory contents (equivalent to "ls" in Linux/macOS). Common dir options: "dir /a" (show hidden files), "dir /s" (recursive), "dir /w" (wide format). In PowerShell, both "dir" and "ls" work as aliases for Get-ChildItem.',
  },
  {
    id: 'aplus-q-031',
    domain: 6,
    topic: 'Command Line',
    question:
      'A technician wants to test network connectivity and measure latency to a remote host using the Windows command line. Which command should be used?',
    options: [
      'netstat',
      'ipconfig',
      'ping',
      'tracert',
    ],
    correct: 2,
    explanation:
      '"ping" sends ICMP Echo Request packets to a host and reports round-trip time and packet loss — the primary tool for testing basic connectivity and measuring latency. "tracert" shows the path; "netstat" shows connections; "ipconfig" shows local IP config.',
  },
  {
    id: 'aplus-q-032',
    domain: 6,
    topic: 'Windows Tools',
    question:
      'Which Windows tool allows a technician to view running processes, CPU/memory usage, and end unresponsive applications?',
    options: [
      'Device Manager',
      'Task Manager',
      'Registry Editor',
      'Event Viewer',
    ],
    correct: 1,
    explanation:
      'Task Manager (Ctrl+Shift+Esc or Ctrl+Alt+Del → Task Manager) shows running applications and background processes, CPU/memory/disk/network usage, startup programs, and allows ending processes. Device Manager manages hardware drivers. Event Viewer shows system/application logs.',
  },
  {
    id: 'aplus-q-033',
    domain: 6,
    topic: 'Windows Registry',
    question:
      'A technician needs to edit the Windows Registry to modify a startup program. Which command opens the Registry Editor?',
    options: [
      'msconfig',
      'regedit',
      'gpedit.msc',
      'services.msc',
    ],
    correct: 1,
    explanation:
      '"regedit" opens the Windows Registry Editor (regedit.exe). The Registry stores OS, hardware, application, and user configuration. Key hives: HKLM (local machine settings), HKCU (current user), HKCR (file type associations), HKU (all users), HKCC (current hardware profile). Always back up the Registry before editing.',
  },
  {
    id: 'aplus-q-034',
    domain: 6,
    topic: 'macOS',
    question:
      'What is the macOS equivalent of Windows Device Manager, used to view hardware information and system specifications?',
    options: [
      'Activity Monitor',
      'System Information (System Profiler)',
      'Finder',
      'Terminal',
    ],
    correct: 1,
    explanation:
      'System Information (accessible via "About This Mac" → "System Report" or the "system_profiler" command in Terminal) provides detailed hardware and software information on macOS, similar to Device Manager/System Information in Windows. Activity Monitor is equivalent to Windows Task Manager.',
  },
  {
    id: 'aplus-q-035',
    domain: 6,
    topic: 'OS Installation',
    question:
      'A technician is deploying Windows to 50 new computers from a single master image. Which installation method is most efficient?',
    options: [
      'Unattended installation from DVD',
      'Manual installation on each computer individually',
      'Image deployment using tools like WDS (Windows Deployment Services)',
      'USB installation using a bootable drive on each computer',
    ],
    correct: 2,
    explanation:
      'Image-based deployment (using WDS, MDT, or SCCM/Endpoint Configuration Manager) is the most efficient method for deploying OS to many computers. A sysprepped master image is captured and deployed to multiple machines over the network simultaneously, often in minutes per machine.',
  },

  // ─── DOMAIN 7: SECURITY (Core 2) ─────────────────────────────────────────

  {
    id: 'aplus-q-036',
    domain: 7,
    topic: 'Malware Types',
    question:
      'A user\'s files have been encrypted and a message demands Bitcoin payment to decrypt them. Which type of malware has infected the system?',
    options: [
      'Virus',
      'Worm',
      'Ransomware',
      'Spyware',
    ],
    correct: 2,
    explanation:
      'Ransomware encrypts a victim\'s files (or entire drives) and demands payment for the decryption key. Well-known examples include WannaCry, Petya, and REvil. Best defenses: regular offline backups, up-to-date patches, endpoint protection, and user awareness training.',
  },
  {
    id: 'aplus-q-037',
    domain: 7,
    topic: 'Malware Types',
    question:
      'Which type of malware replicates itself across a network WITHOUT requiring user interaction or attachment to an executable file?',
    options: [
      'Virus',
      'Worm',
      'Trojan',
      'Adware',
    ],
    correct: 1,
    explanation:
      'A worm is self-replicating malware that spreads across networks without requiring user interaction, exploiting vulnerabilities in OS or application services. A virus requires attachment to a file and user execution to spread. A Trojan disguises itself as legitimate software.',
  },
  {
    id: 'aplus-q-038',
    domain: 7,
    topic: 'Social Engineering',
    question:
      'An employee receives an email appearing to be from their bank, asking them to click a link and verify their account credentials. What type of attack is this?',
    options: [
      'Vishing',
      'Phishing',
      'Tailgating',
      'Whaling',
    ],
    correct: 1,
    explanation:
      'Phishing is a social engineering attack using fraudulent emails that appear to come from legitimate sources to trick users into revealing credentials, clicking malicious links, or opening infected attachments. Vishing uses voice calls. Tailgating is physical access. Whaling targets executives (C-level phishing).',
  },
  {
    id: 'aplus-q-039',
    domain: 7,
    topic: 'Windows Security',
    question:
      'Which Windows feature encrypts entire drive volumes, including the OS drive, to protect data if a computer is stolen?',
    options: [
      'EFS (Encrypting File System)',
      'BitLocker',
      'Windows Defender',
      'UAC (User Account Control)',
    ],
    correct: 1,
    explanation:
      'BitLocker is a Windows full-disk encryption feature available in Windows Pro and Enterprise editions. It encrypts entire volumes using AES and uses a TPM (Trusted Platform Module) chip to store the encryption key. EFS encrypts individual files/folders. Windows Defender is antimalware. UAC prompts for elevation.',
  },
  {
    id: 'aplus-q-040',
    domain: 7,
    topic: 'Physical Security',
    question:
      'An organization wants to prevent unauthorized individuals from entering a secure server room by following authorized employees through the door. What physical security control addresses this?',
    options: [
      'Security cameras',
      'Mantrap (access control vestibule)',
      'Badge reader',
      'Cable lock',
    ],
    correct: 1,
    explanation:
      'A mantrap (access control vestibule) is a small room with two doors — the second door does not open until the first is closed and the person has been authenticated. This prevents tailgating (piggybacking) where unauthorized individuals follow authorized staff through a secure door.',
  },
  {
    id: 'aplus-q-041',
    domain: 7,
    topic: 'MFA',
    question:
      'A user logs into a system with a password and then must enter a code sent to their smartphone. What security concept does this represent?',
    options: [
      'Single sign-on (SSO)',
      'Multi-factor authentication (MFA)',
      'Biometric authentication',
      'Privileged access management',
    ],
    correct: 1,
    explanation:
      'MFA (Multi-Factor Authentication) requires two or more authentication factors from different categories: something you know (password), something you have (smartphone/OTP token), or something you are (biometric). Using a password + smartphone code combines "something you know" and "something you have."',
  },
  {
    id: 'aplus-q-042',
    domain: 7,
    topic: 'Windows Security',
    question:
      'Which Windows feature prompts users for permission or administrator credentials when a program attempts to make changes to the system?',
    options: [
      'BitLocker',
      'Windows Defender',
      'UAC (User Account Control)',
      'EFS',
    ],
    correct: 2,
    explanation:
      'UAC (User Account Control) displays a consent prompt when a program attempts to make changes requiring elevated privileges. This prevents malware from silently obtaining administrative access. Standard users see a credential prompt; administrators see a consent prompt. UAC should remain enabled.',
  },

  // ─── DOMAIN 8: SOFTWARE TROUBLESHOOTING (Core 2) ─────────────────────────

  {
    id: 'aplus-q-043',
    domain: 8,
    topic: 'BSOD',
    question:
      'A Windows computer displays a Blue Screen of Death (BSOD) with the error "IRQL_NOT_LESS_OR_EQUAL." What is the most likely cause?',
    options: [
      'Hard drive failure',
      'Faulty or incompatible device driver or RAM issue',
      'Virus infection',
      'Incorrect monitor resolution',
    ],
    correct: 1,
    explanation:
      'IRQL_NOT_LESS_OR_EQUAL is a common BSOD caused by a driver attempting to access memory at a higher IRQL (interrupt request level) than allowed — typically caused by a faulty, outdated, or incompatible device driver, or bad RAM. Check recently installed drivers and run Windows Memory Diagnostic.',
  },
  {
    id: 'aplus-q-044',
    domain: 8,
    topic: 'Performance',
    question:
      'A user reports their Windows computer has become very slow over the past few weeks. Task Manager shows CPU usage at 100% constantly. What should the technician check first?',
    options: [
      'Monitor resolution settings',
      'Which processes are consuming the CPU in Task Manager',
      'The network connection speed',
      'The hard drive format',
    ],
    correct: 1,
    explanation:
      'When a computer is slow with high CPU usage, the first step is to open Task Manager → Processes tab and sort by CPU to identify which process is consuming resources. Common culprits: malware, Windows Update running in background, application bugs, or a failing cooling system causing thermal throttling.',
  },
  {
    id: 'aplus-q-045',
    domain: 8,
    topic: 'Malware Removal',
    question:
      'A technician is following the CompTIA malware removal process. After quarantining the infected system, what is the NEXT recommended step?',
    options: [
      'Reinstall the operating system immediately',
      'Remediate the infected system (update definitions and scan)',
      'Educate the user',
      'Enable System Restore',
    ],
    correct: 1,
    explanation:
      'CompTIA\'s malware removal steps: (1) Investigate and verify malware symptoms, (2) Quarantine infected systems, (3) Disable System Restore in Windows, (4) Remediate infected systems (update AV signatures, scan, remove), (5) Schedule scans and run updates, (6) Enable System Restore and create restore point, (7) Educate the end user.',
  },
  {
    id: 'aplus-q-046',
    domain: 8,
    topic: 'Application Issues',
    question:
      'A Windows application fails to open and shows an error about a missing DLL file. What is the most likely cause and solution?',
    options: [
      'The application is infected with malware; run antivirus',
      'A required dependency or runtime library is missing; reinstall the application or install the missing runtime',
      'The hard drive is failing; replace it',
      'Windows needs to be reinstalled',
    ],
    correct: 1,
    explanation:
      'A "missing DLL" error means the application cannot find a required Dynamic Link Library file. This often occurs when an application is improperly installed, a required runtime (like Visual C++ Redistributable or .NET Framework) is missing, or a DLL was accidentally deleted. Reinstalling the application or the required runtime usually resolves this.',
  },

  // ─── DOMAIN 9: OPERATIONAL PROCEDURES (Core 2) ───────────────────────────

  {
    id: 'aplus-q-047',
    domain: 9,
    topic: 'Change Management',
    question:
      'Before deploying a critical software update to a production server, what should a technician create to allow reverting to the previous state if the update causes issues?',
    options: [
      'A security audit report',
      'A system backup or rollback plan',
      'A network diagram',
      'A software license inventory',
    ],
    correct: 1,
    explanation:
      'Change management procedures require a rollback plan before implementing changes. Creating a system backup, snapshot (for VMs), or restore point ensures the system can be reverted quickly if the change causes problems. Document the change in the ticketing/change management system.',
  },
  {
    id: 'aplus-q-048',
    domain: 9,
    topic: 'Safety Procedures',
    question:
      'A technician is replacing a RAM module in a desktop computer. Which safety precaution MUST be taken before handling the RAM to prevent damage from static electricity?',
    options: [
      'Wear safety glasses',
      'Use an antistatic wrist strap or touch an unpainted metal chassis surface',
      'Power on the computer first to discharge capacitors',
      'Work on a carpeted surface',
    ],
    correct: 1,
    explanation:
      'ESD (Electrostatic Discharge) can permanently damage sensitive electronic components. Technicians should use an antistatic wrist strap grounded to the computer chassis or touch an unpainted metal part of the chassis to discharge static. Working on carpet increases static; power should be OFF when handling components.',
  },
  {
    id: 'aplus-q-049',
    domain: 9,
    topic: 'Backup Types',
    question:
      'A company performs a full backup every Sunday night. On weekdays, only changed files since the last FULL backup are backed up. What backup strategy are they using for weekday backups?',
    options: [
      'Incremental backup',
      'Differential backup',
      'Synthetic full backup',
      'Mirror backup',
    ],
    correct: 1,
    explanation:
      'A differential backup backs up all data changed since the last FULL backup (not since the last backup of any type). This means Monday\'s differential is small, but Friday\'s is larger. To restore: apply the last full backup + the most recent differential. Incremental backups only back up changes since the last backup of any type.',
  },
  {
    id: 'aplus-q-050',
    domain: 9,
    topic: 'Documentation',
    question:
      'A company must comply with GDPR regulations regarding customer data. Which type of personally identifiable information (PII) requires special handling?',
    options: [
      'Office building addresses',
      'Employee names and Social Security Numbers',
      'Company stock ticker symbols',
      'Product serial numbers',
    ],
    correct: 1,
    explanation:
      'PII (Personally Identifiable Information) includes data that can identify an individual: names, Social Security Numbers, email addresses, phone numbers, financial data, health information, biometric data. GDPR (General Data Protection Regulation) requires organizations to protect EU residents\' PII, obtain consent for collection, and report breaches.',
  },
  {
    id: 'aplus-q-051',
    domain: 9,
    topic: 'Environmental Controls',
    question:
      'Which environmental concern in a server room can cause intermittent hardware failures and is addressed by maintaining humidity levels between 40-60%?',
    options: [
      'Excessive heat',
      'Power surges',
      'Electrostatic discharge (ESD) due to low humidity',
      'Dust accumulation',
    ],
    correct: 2,
    explanation:
      'Low humidity increases the risk of ESD (electrostatic discharge), which can cause intermittent failures or permanent damage to electronic components. High humidity can cause condensation. Data centers maintain 40-60% relative humidity. Proper grounding and antistatic materials also help mitigate ESD.',
  },
  {
    id: 'aplus-q-052',
    domain: 9,
    topic: 'Licensing',
    question:
      'A company purchases a single software license but installs the software on 10 computers. What is this an example of?',
    options: [
      'Open-source license violation',
      'End User License Agreement (EULA) violation / software piracy',
      'Freeware misuse',
      'Volume licensing',
    ],
    correct: 1,
    explanation:
      'Installing a single-license software on multiple computers without purchasing additional licenses violates the EULA (End User License Agreement) and constitutes software piracy. Organizations should use volume licensing for multiple installations, track licenses in an asset management system, and ensure compliance.',
  },
  {
    id: 'aplus-q-053',
    domain: 7,
    topic: 'Malware Removal',
    question:
      'During malware removal, why should System Restore be disabled BEFORE running a scan?',
    options: [
      'System Restore slows down the antivirus scan',
      'Malware may be hiding in restore points and could reinfect the system if restore is used',
      'System Restore uses too much disk space',
      'Disabling System Restore improves system performance',
    ],
    correct: 1,
    explanation:
      'System Restore can store copies of infected files in restore points. If not disabled, malware could reinfect the system after removal when a restore point is applied. After remediation is complete, System Restore should be re-enabled and a clean restore point created.',
  },
  {
    id: 'aplus-q-054',
    domain: 3,
    topic: 'RAID',
    question:
      'A small business server has RAID 1 configured with two hard drives. One drive fails. What is the status of the data?',
    options: [
      'All data is lost — RAID 1 requires both drives',
      'Data is still accessible — RAID 1 mirrors data across both drives',
      'Data is degraded but readable from parity information',
      'The server will not boot until the failed drive is replaced',
    ],
    correct: 1,
    explanation:
      'RAID 1 (mirroring) writes identical data to two drives simultaneously. If one drive fails, the other contains a complete copy of all data — no data loss occurs. The array runs in a "degraded" state and should be rebuilt with a new drive as soon as possible. RAID 1 provides redundancy but does NOT increase storage capacity.',
  },
  {
    id: 'aplus-q-055',
    domain: 6,
    topic: 'Windows Tools',
    question:
      'A technician wants to prevent a specific application from running on startup to improve boot times. Which built-in Windows 10/11 tool provides the easiest way to manage startup programs?',
    options: [
      'Registry Editor (regedit)',
      'Task Manager → Startup tab',
      'Services.msc',
      'Disk Management',
    ],
    correct: 1,
    explanation:
      'Task Manager → Startup tab (or Settings → Apps → Startup on Windows 10/11) provides the easiest way to enable/disable startup programs and shows their "Startup impact" (High/Medium/Low). Alternatively, msconfig can be used. Registry Editor also controls startup entries but requires manual navigation.',
  },
  {
    id: 'aplus-q-056',
    domain: 5,
    topic: 'Wireless Troubleshooting',
    question:
      'A laptop can connect to the corporate Wi-Fi but intermittently loses connection. Other users on the same AP have no issues. What is the MOST likely cause?',
    options: [
      'The access point is overloaded',
      'A faulty wireless adapter or driver in the laptop',
      'The Wi-Fi network password has changed',
      'The corporate firewall is blocking the laptop',
    ],
    correct: 1,
    explanation:
      'When a problem is isolated to one device while others on the same AP work fine, the issue is with the individual device — most likely a faulty wireless adapter, outdated or corrupt driver, or interference from the laptop\'s hardware (e.g., metal case, other radios). Update or reinstall the wireless driver, or test with an external USB Wi-Fi adapter.',
  },
  // ─── IMPORTED: Core 1 Bench (220-1201) ───────────────────────────────────
  // Multiple-choice items carried over from the standalone Core 1 Bench practice
  // exam. sourceId is its original bank id, which its progress codes key on.

  {
    id: "aplus-c1b-001",
    sourceId: "HW01",
    domain: 3,
    question:
      "A technician is told a single DDR5 UDIMM behaves like two smaller modules internally. How many independent subchannels does one DDR5 DIMM present to the memory controller, and how wide is each?",
    options: [
      "One 64-bit channel",
      "Two 32-bit subchannels",
      "Two 64-bit subchannels",
      "Four 16-bit subchannels",
    ],
    correct: 1,
    explanation:
      "DDR5 divides each DIMM into two independent 32-bit subchannels, each with its own command/address bus. Total width stays 64 bits, but two subchannels can be worked on at once, which raises efficiency. This is why a single DDR5 DIMM is often said to be dual channel on its own, though it is not a substitute for populating both physical memory channels. Why the others are wrong — A) That is the DDR4 and earlier arrangement. DDR5 split the module to improve efficiency. C) The total data width of a DDR5 UDIMM is still 64 bits (72 with ECC), not 128. D) No DDR generation splits a DIMM into four subchannels.",
  },
  {
    id: "aplus-c1b-002",
    sourceId: "HW02",
    domain: 3,
    question:
      "A motherboard has four DIMM slots labeled A1, A2, B1, B2 (in that order out from the CPU) and supports dual channel. The customer supplies only two matched modules. Where should they go?",
    options: [
      "A1 and A2",
      "A1 and B1",
      "A2 and B2",
      "B1 and B2",
    ],
    correct: 2,
    explanation:
      "One module per channel is required for dual channel, which rules out A1+A2 and B1+B2. Between the two remaining choices, the vast majority of ATX board manuals specify the second slot of each channel (A2/B2, often the 2nd and 4th slots from the CPU) for a two-module install because of DDR signal routing. The exam answer is always to check the manual, and the manual almost always says A2/B2. Why the others are wrong — A) Both modules land in channel A, so the board runs single channel. B) Populated on both channels, but most manuals reserve the slot nearest the CPU for a fully populated board due to signal integrity. D) Both modules land in channel B, so the board runs single channel.",
  },
  {
    id: "aplus-c1b-003",
    sourceId: "HW03",
    domain: 3,
    question:
      "A customer buys an NVMe SSD rated at 7,000 MB/s. What is the minimum interface the drive needs to hit that number?",
    options: [
      "PCIe 3.0 x4",
      "PCIe 4.0 x4",
      "PCIe 4.0 x2",
      "SATA III",
    ],
    correct: 1,
    explanation:
      "PCIe 4.0 delivers about 2 GB/s per lane, so an x4 link is roughly 8 GB/s (7,880 MB/s) before overhead. That is the first interface fast enough for a 7,000 MB/s drive. PCIe 3.0 x4 is about 3.94 GB/s, which is why a Gen4 drive in a Gen3 slot benchmarks at roughly half its rating. Why the others are wrong — A) PCIe 3.0 x4 tops out near 3,940 MB/s, so the drive would be throttled to about half its rating. C) Half the lanes means roughly 3,940 MB/s, which is not enough. D) SATA III caps at 6 Gb/s, or roughly 600 MB/s, more than ten times too slow.",
  },
  {
    id: "aplus-c1b-004",
    sourceId: "HW04",
    domain: 3,
    question:
      "A user complains their new SATA SSD is not much faster than the old one for large file copies. Both drives are on SATA III ports. What is the realistic ceiling for sustained throughput on that interface?",
    options: [
      "About 150 MB/s",
      "About 300 MB/s",
      "About 600 MB/s",
      "About 1,000 MB/s",
    ],
    correct: 2,
    explanation:
      "SATA III runs at 6 Gb/s. After 8b/10b encoding overhead that works out to roughly 600 MB/s, and real drives land around 520 to 560 MB/s. Every SATA SSD is pinned to that ceiling regardless of the NAND inside, which is exactly why the upgrade felt underwhelming. Why the others are wrong — A) That is SATA I (1.5 Gb/s). B) That is SATA II (3 Gb/s). D) No SATA revision reaches this. SATA III is the last consumer revision at 6 Gb/s.",
  },
  {
    id: "aplus-c1b-005",
    sourceId: "HW05",
    domain: 3,
    question:
      "A small business server has six 2 TB drives configured in RAID 6. How much usable capacity does the array provide, and how many simultaneous drive failures can it survive?",
    options: [
      "12 TB, one failure",
      "10 TB, one failure",
      "8 TB, two failures",
      "6 TB, two failures",
    ],
    correct: 2,
    explanation:
      "RAID 6 uses double distributed parity, so usable capacity is (n - 2) times the drive size: (6 - 2) x 2 TB = 8 TB. Because there are two parity blocks per stripe, any two drives can fail at once without data loss. RAID 5 on the same six drives would give 10 TB but survive only one failure. Why the others are wrong — A) This describes no parity loss at all and understates redundancy. RAID 6 always gives up two drives worth of space. B) 10 TB would be single parity (RAID 5). RAID 6 uses double parity. D) 6 TB would be the result of RAID 10 with six drives, which mirrors rather than uses parity.",
  },
  {
    id: "aplus-c1b-006",
    sourceId: "HW06",
    domain: 3,
    question:
      "A technician needs an array that gives both striping performance and mirroring redundancy, with the fewest drives possible. What is the minimum drive count for RAID 10, and what failure does it NOT guarantee survival from?",
    options: [
      "Two drives; loss of either drive",
      "Four drives; loss of both drives in the same mirror",
      "Four drives; loss of any two drives",
      "Three drives; loss of two drives",
    ],
    correct: 1,
    explanation:
      "RAID 10 is a stripe of mirrors, so it needs at least two mirrored pairs, or four drives. It survives one failure in each mirror, and often two failures total, but if both members of the same mirrored pair fail the array is lost. That subtlety is what the word guarantee is testing. Why the others are wrong — A) Two drives is RAID 1 or RAID 0. RAID 10 needs mirrors that are then striped. C) RAID 10 can often survive two failures, but not if both are in the same mirrored pair, so any is wrong. D) Three drives is the minimum for RAID 5, not RAID 10.",
  },
  {
    id: "aplus-c1b-007",
    sourceId: "HW08",
    domain: 3,
    question:
      "Pages from a color laser printer come out with the full image correct, but the toner smears when rubbed with a finger. Which component should be checked first?",
    options: [
      "Transfer belt",
      "Fuser assembly",
      "Primary charge roller",
      "Imaging drum",
    ],
    correct: 1,
    explanation:
      "Toner that transfers correctly but never bonds means the page was never properly fused. The fuser applies heat and pressure to melt the plastic in the toner into the paper fibers, so a failed heating element, a bad thermistor, or an out-of-spec fuser is the cause. Check that any orange shipping tabs or eco-mode heat settings are not involved before ordering a fuser. Why the others are wrong — A) The transfer belt moves toner onto the paper. If it failed, the image would be missing or faint, not present but loose. C) A failing charge roller produces blank or blotchy pages because the drum cannot hold a uniform charge. D) A worn drum causes repeating spots or ghosting, not loose toner.",
  },
  {
    id: "aplus-c1b-008",
    sourceId: "HW09",
    domain: 3,
    question:
      "A retail point-of-sale receipt printer produces blank paper even though the printer reports a successful job. Which is the MOST likely cause?",
    options: [
      "The ribbon is exhausted",
      "Wrong paper was loaded or loaded upside down",
      "The toner cartridge is empty",
      "The print head needs alignment",
    ],
    correct: 1,
    explanation:
      "Receipt printers are direct thermal: a heating element darkens chemically treated paper, and there is no ink, ribbon, or toner at all. Blank output almost always means plain paper was loaded, the thermal roll was loaded with the coated side facing away from the head, or the head is dirty. Confirm coated side by scratching the paper with a coin, which leaves a dark mark. Why the others are wrong — A) Thermal printers do not use a ribbon. That is an impact printer consumable. C) Thermal printers have no toner. That is a laser consumable. D) Alignment issues cause skewed or offset output, not completely blank paper.",
  },
  {
    id: "aplus-c1b-009",
    sourceId: "HW10",
    domain: 3,
    question:
      "A warehouse still uses an impact printer for three-part carbonless shipping forms. Print is legible on the top copy but nearly blank on the second and third copies. What should the technician do FIRST?",
    options: [
      "Replace the ribbon",
      "Adjust the platen gap so the print head strikes harder",
      "Replace the tractor feed assembly",
      "Update the print driver",
    ],
    correct: 1,
    explanation:
      "Multipart forms rely on physical impact force to transfer the impression through each layer. Most impact printers have a paper thickness or platen gap lever that must be opened for multipart stock; if it is set for single sheets, the top copy prints fine while lower copies are faint. Only after adjusting that would you look at ribbon wear or a failing print head. Why the others are wrong — A) A worn ribbon fades all copies including the top one, which is still legible here. C) The tractor feed pulls paper through and has no effect on impression strength. D) A driver problem produces garbled or misformatted output, not weak impressions on lower copies.",
  },
  {
    id: "aplus-c1b-010",
    sourceId: "HW11",
    domain: 3,
    question:
      "An FDM 3D printer produces first layers that curl up and detach from the build surface partway through the job. Which adjustment addresses the root cause?",
    options: [
      "Increase the filament diameter setting",
      "Level the print bed and verify bed heating",
      "Switch from filament to resin",
      "Reduce the print head travel speed",
    ],
    correct: 1,
    explanation:
      "Warping and lifting at layer one is a bed adhesion problem. An unlevel bed makes the nozzle sit too far from the surface so the first layer never squishes into place, and an unheated or under-heated bed lets the plastic contract and pull free as it cools. Level the bed, set the correct nozzle offset, and confirm the heated bed reaches the temperature the filament requires. Why the others are wrong — A) Filament diameter affects extrusion volume and would cause over or under extrusion throughout the print, not adhesion at layer one. C) Resin is used by SLA/DLP printers and is not compatible with an FDM machine. D) Travel speed influences stringing and quality but does not fix a part lifting off the bed.",
  },
  {
    id: "aplus-c1b-011",
    sourceId: "HW12",
    domain: 3,
    question:
      "A user reports that every page from their inkjet printer has thin horizontal white gaps through the text. The ink cartridges are reported as more than half full. What is the appropriate first action?",
    options: [
      "Run the print head cleaning and nozzle check utility",
      "Replace the fuser",
      "Replace the duplexing assembly",
      "Recalibrate the paper feed rollers",
    ],
    correct: 0,
    explanation:
      "Horizontal banding on an inkjet is the classic symptom of clogged or partially dried nozzles. The built-in head cleaning cycle forces ink through the jets, and the nozzle check pattern confirms which colors are missing. If repeated cleanings do not resolve it, then look at head alignment or a failed cartridge, but cleaning is the cheap first step. Why the others are wrong — B) Inkjet printers have no fuser. Ink dries or is absorbed rather than being melted onto the page. C) The duplexer flips paper for two-sided printing and has no effect on image quality. D) Feed roller problems cause jams, skew, or multiple sheets pulled at once, not banded output.",
  },
  {
    id: "aplus-c1b-012",
    sourceId: "HW13",
    domain: 3,
    question:
      "A customer wants the quietest possible power supply for a build that draws about 400 W at load. Which specification most directly reduces the heat the fan has to remove?",
    options: [
      "Higher total wattage rating",
      "A higher 80 PLUS efficiency rating",
      "A modular cable design",
      "A redundant (dual) power supply",
    ],
    correct: 1,
    explanation:
      "Efficiency is the percentage of wall power actually delivered to the components; the rest becomes heat inside the supply. An 80 PLUS Gold unit at 90 percent efficiency wastes about 44 W at a 400 W load, while a lower-rated 80 percent unit wastes 100 W. Less waste heat means less airflow required and a quieter fan. Why the others are wrong — A) A larger supply may run its fan slower, but wattage alone says nothing about how much energy is wasted as heat. C) Modular cables improve airflow and cable management but do not change the power lost inside the unit. D) Redundancy adds a second unit for uptime and usually adds noise, not less of it.",
  },
  {
    id: "aplus-c1b-013",
    sourceId: "HW14",
    domain: 3,
    question:
      "A technician is installing a high-end GPU that requires a 12VHPWR (12V-2x6) connection, but the customer's power supply only has 8-pin PCIe outputs. What is the correct approach?",
    options: [
      "Use two 6-pin PCIe connectors with a passive splitter",
      "Use the adapter supplied with the card, fed by the required number of separate 8-pin PCIe cables",
      "Connect the card using the 8-pin EPS/CPU cable",
      "Connect the 24-pin ATX connector to the card",
    ],
    correct: 1,
    explanation:
      "Cards that use 12VHPWR ship with an adapter that fans out to two, three, or four 8-pin PCIe plugs depending on the wattage. Each 8-pin PCIe cable is rated for 150 W, so the count matters. Use separate cable runs rather than daisy-chained pigtails on high-draw cards, and seat the connector fully since partial insertion is a known cause of melted plugs. Why the others are wrong — A) 6-pin connectors deliver only 75 W each and a splitter does not create additional capacity. C) EPS 12V connectors are keyed for the CPU and have a different pinout. Forcing one into a GPU can destroy the card. D) The 24-pin supplies the motherboard only and cannot be repurposed.",
  },
  {
    id: "aplus-c1b-014",
    sourceId: "HW15",
    domain: 3,
    question:
      "Which statement about a motherboard form factor comparison is accurate?",
    options: [
      "Mini-ITX boards are 9.6 x 9.6 in and normally have two expansion slots",
      "microATX boards are the same size as full ATX but with fewer slots",
      "Mini-ITX boards are 6.7 x 6.7 in and have a single expansion slot",
      "ATX boards are 12 x 12 in and always have seven RAM slots",
    ],
    correct: 2,
    explanation:
      "Mini-ITX is 6.7 x 6.7 inches (170 x 170 mm) with exactly one expansion slot and usually two DIMM slots. microATX is 9.6 x 9.6 inches with up to four expansion slots, and full ATX is 12 x 9.6 inches with up to seven. All three share the same rear I/O cutout and mounting hole pattern, so a smaller board fits a larger case. Why the others are wrong — A) Those dimensions belong to microATX. Mini-ITX is smaller. B) microATX is shorter than ATX, which is why it has fewer expansion slots. D) ATX is 12 x 9.6 in, and consumer ATX boards typically have two or four RAM slots.",
  },
  {
    id: "aplus-c1b-015",
    sourceId: "HW16",
    domain: 3,
    question:
      "A technician is removing a Ryzen processor from an AM5 socket and an older Ryzen from an AM4 socket. Which statement correctly describes the pin arrangement?",
    options: [
      "Both sockets are PGA, so the pins are on the CPU",
      "Both sockets are LGA, so the pins are in the socket",
      "AM4 is PGA and AM5 is LGA",
      "AM4 is LGA and AM5 is PGA",
    ],
    correct: 2,
    explanation:
      "AM4 is a pin grid array: the delicate pins are on the underside of the CPU, so bent pins are a CPU-side failure. AM5 switched to a land grid array like Intel's LGA sockets, putting the pins in the socket where the load plate protects them. Handling changes accordingly, since with LGA a dropped socket cover or a stray screwdriver ruins the board rather than the chip. Why the others are wrong — A) AM4 is PGA, but AM5 moved to a land grid array. B) AM5 is LGA, but AM4 has pins on the processor itself. D) This reverses the two. AMD moved from pins-on-chip to pins-in-socket with AM5.",
  },
  {
    id: "aplus-c1b-016",
    sourceId: "HW17",
    domain: 3,
    question:
      "A technician installs an M.2 drive in a laptop and the system does not detect it. The drive has a notch at position B and another at position M, and the laptop's slot is keyed for M only. What is the MOST likely explanation?",
    options: [
      "The drive is physically too long for the standoff position",
      "The B+M keyed drive is a SATA module and the slot only supplies PCIe lanes",
      "A B+M keyed drive cannot physically enter an M-only slot",
      "M.2 drives require a separate power cable that was not connected",
    ],
    correct: 1,
    explanation:
      "Keying tells you what the slot can do, not whether the drive will work. B+M keyed modules are almost always SATA-based M.2 drives, and an M-key slot wired for PCIe x4 only will not talk to a SATA device unless the host explicitly supports both. Check the laptop specification: some slots are PCIe only, some are SATA only, and some support either. Why the others are wrong — A) Length mismatch prevents the screw from seating but does not stop detection if the connector is engaged. Also a B+M drive fits an M slot. C) A B+M drive physically fits both B and M slots. That is the point of the double notch. D) M.2 draws power through the same edge connector. There is no separate power lead.",
  },
  {
    id: "aplus-c1b-017",
    sourceId: "HW18",
    domain: 3,
    question:
      "A parts list specifies an M.2 2280 module. What do those digits describe?",
    options: [
      "22 mm wide by 80 mm long",
      "2,280 MB/s maximum throughput",
      "22 pins by 80 mm long",
      "A 2.2 mm thickness with an 80 GB minimum capacity",
    ],
    correct: 0,
    explanation:
      "M.2 module sizes are given as width followed by length in millimeters. 2280 is 22 mm wide and 80 mm long, which is the most common desktop and laptop size; 2242 and 2230 are the shorter variants used in compact laptops and handhelds. Width is 22 mm on all of them, so only the last two digits vary in practice. Why the others are wrong — B) M.2 numbering never encodes speed. Throughput depends on the PCIe generation and lane count. C) The pin count of the M.2 edge connector is 67, not 22. D) Neither thickness nor capacity is part of the naming.",
  },
  {
    id: "aplus-c1b-018",
    sourceId: "HW19",
    domain: 3,
    question:
      "A budget 2-in-1 laptop advertises 128 GB of eMMC storage. A customer asks why it feels slower than a desktop with a 128 GB SSD. What is the accurate explanation?",
    options: [
      "eMMC is spinning magnetic media with no moving parts advantage",
      "eMMC is flash soldered to the board with a narrow interface and no dedicated controller of an SSD's caliber",
      "eMMC is a form of RAM that loses data at shutdown",
      "eMMC uses the SATA III interface and is therefore capped at 600 MB/s",
    ],
    correct: 1,
    explanation:
      "eMMC is the same NAND technology used in SD cards, soldered directly to the mainboard with a simple embedded controller and a bus far narrower than SATA or NVMe. Typical eMMC 5.1 tops out around 300 MB/s sequential with weak random performance, and because it is soldered it cannot be upgraded. That is why low-cost machines feel sluggish even though they are technically solid state. Why the others are wrong — A) eMMC is flash. There are no platters. C) eMMC is non-volatile storage. It retains data with no power. D) eMMC does not use SATA. Its bus is far narrower than SATA III.",
  },
  {
    id: "aplus-c1b-019",
    sourceId: "HW20",
    domain: 3,
    question:
      "A server memory order lists registered ECC DIMMs. Which statement is correct?",
    options: [
      "Registered modules can be mixed with unbuffered modules to expand capacity",
      "Registered modules add a buffer that reduces electrical load, allowing more DIMMs per channel",
      "ECC corrects all multi-bit errors automatically",
      "ECC requires only that the memory modules support it",
    ],
    correct: 1,
    explanation:
      "Registered (buffered) DIMMs put a register between the memory controller and the DRAM chips, reducing electrical load so a channel can drive more modules. The trade-off is one clock cycle of latency. ECC is separate: it adds a ninth chip per rank to detect two-bit and correct single-bit errors, and it requires CPU, chipset, and board support to actually function. Why the others are wrong — A) Registered and unbuffered modules cannot be mixed in the same system. The board supports one or the other. C) Standard ECC detects two-bit errors and corrects single-bit errors. Multi-bit correction requires more advanced schemes. D) The CPU and chipset must also support ECC or the extra bits are simply ignored.",
  },
  {
    id: "aplus-c1b-020",
    sourceId: "HW21",
    domain: 3,
    question:
      "A user needs to move a 90 GB video file from an external drive as quickly as possible. Which port on their laptop should the technician recommend?",
    options: [
      "A USB-C port marked SS10",
      "A USB-A port marked SS",
      "A USB-C port with a lightning bolt icon labeled Thunderbolt 4",
      "A USB-C port marked USB 3.2 Gen 2x2",
    ],
    correct: 2,
    explanation:
      "Thunderbolt 3 and 4 run at 40 Gb/s, twice the 20 Gb/s of USB 3.2 Gen 2x2 and four times the 10 Gb/s of Gen 2. Note the port markings: SS is 5 Gb/s, SS10 is 10 Gb/s, and a lightning bolt next to USB-C indicates Thunderbolt. The drive and cable must both support the standard or the link negotiates down. Why the others are wrong — A) SuperSpeed 10 Gbps is fast, but there is a faster option on this list. B) SS without a number is USB 3.2 Gen 1 at 5 Gbps. D) 20 Gbps is quick, but Thunderbolt 4 doubles it.",
  },
  {
    id: "aplus-c1b-021",
    sourceId: "HW22",
    domain: 3,
    question:
      "A user wants to drive three monitors from a single output on their laptop without a dock. Which technology makes this possible?",
    options: [
      "HDMI Consumer Electronics Control (CEC)",
      "DisplayPort Multi-Stream Transport (MST)",
      "HDMI Audio Return Channel (ARC)",
      "DVI Dual Link",
    ],
    correct: 1,
    explanation:
      "DisplayPort MST packs multiple independent video streams into one link, so displays can be daisy chained or split with an MST hub. HDMI has no equivalent, which is why HDMI splitters mirror rather than extend. Total resolution and refresh across all displays is still limited by the bandwidth of the single DisplayPort link. Why the others are wrong — A) CEC lets connected devices control each other's power and input, not chain displays. C) ARC carries audio back from a TV to a receiver and has nothing to do with multiple displays. D) Dual link DVI raises bandwidth for one high-resolution display. It cannot chain.",
  },
  {
    id: "aplus-c1b-022",
    sourceId: "HW23",
    domain: 3,
    question:
      "A technician needs to connect a legacy projector that has a DVI-D input to a laptop with only a VGA output. What is required?",
    options: [
      "A passive DVI-D to VGA adapter",
      "An active analog-to-digital converter",
      "A DVI-I to VGA adapter",
      "A dual-link DVI cable",
    ],
    correct: 1,
    explanation:
      "The D in DVI-D means digital only, so the analog pins that make simple DVI to VGA adapters work are absent. Converting an analog VGA signal to digital requires powered conversion circuitry that samples the analog signal. DVI-I, by contrast, carries both analog and digital, which is why a cheap passive adapter works on that connector but not this one. Why the others are wrong — A) No passive adapter works here. DVI-D carries digital only and VGA is analog. C) A DVI-I to VGA adapter passes the analog pins of DVI-I, but the projector input is DVI-D with no analog pins. D) Dual link raises bandwidth between two DVI devices and cannot bridge analog to digital.",
  },
  {
    id: "aplus-c1b-023",
    sourceId: "HW24",
    domain: 3,
    question:
      "A cable installer terminates a fiber run and needs the connector that supports two fibers in a single latching housing at roughly half the footprint of the older square connector. Which connector is being described?",
    options: [
      "ST",
      "SC",
      "LC",
      "F-type",
    ],
    correct: 2,
    explanation:
      "LC (Lucent Connector) is the small form factor standard, roughly half the size of SC, and is normally supplied as a duplex clip holding transmit and receive fibers together. That density is why SFP and SFP+ transceivers use LC. SC is the larger square push-pull type, and ST is the round bayonet type used in older installations. Why the others are wrong — A) ST is a round bayonet-twist connector carrying a single fiber. B) SC is the square push-pull connector. LC was designed to be about half its size. D) F-type is a threaded coaxial connector for cable TV and cable modems, not fiber.",
  },
  {
    id: "aplus-c1b-024",
    sourceId: "HW25",
    domain: 3,
    question:
      "A technician terminating horizontal cable runs in a wiring closet needs to seat solid-core conductors into an insulation displacement block and trim the excess in one motion. Which tool is required?",
    options: [
      "Crimper",
      "Punchdown tool",
      "Cable tester",
      "Toner probe",
    ],
    correct: 1,
    explanation:
      "A punchdown tool pushes each conductor into the metal blades of a 110 or 66 block, which slice through the insulation to make contact, and the spring-loaded cutting blade trims the excess flush in the same stroke. Make sure the cut side of the blade faces the waste end. Crimpers are for plugs on stranded patch cords, not blocks. Why the others are wrong — A) A crimper attaches modular plugs such as RJ45 to the end of a patch cable. C) A tester verifies continuity and pinout after termination but does not seat conductors. D) A toner probe traces which cable is which. It performs no termination.",
  },
  {
    id: "aplus-c1b-025",
    sourceId: "NE01",
    domain: 2,
    question:
      "A workstation cannot reach any network resource. ipconfig shows the address 169.254.18.44 with mask 255.255.0.0. What does this indicate?",
    options: [
      "The workstation has a valid static address that conflicts with another host",
      "The workstation failed to reach a DHCP server and self-assigned an APIPA address",
      "The workstation is on a loopback interface",
      "The workstation received a DHCP address from a rogue server",
    ],
    correct: 1,
    explanation:
      "169.254.0.0/16 is the Automatic Private IP Addressing range. A Windows host assigns itself one when DHCP DISCOVER goes unanswered. APIPA allows link-local communication with other APIPA hosts on the same segment but provides no gateway or DNS, so nothing beyond the local link works. Look at the switch port, the cable, or the DHCP server. Why the others are wrong — A) A conflict produces an error message and usually a different address range. C) Loopback is 127.0.0.0/8, not 169.254. D) A rogue server hands out a routable address of its own choosing, not an APIPA address.",
  },
  {
    id: "aplus-c1b-026",
    sourceId: "NE02",
    domain: 2,
    question:
      "A technician is given the network 192.168.10.0/26. How many usable host addresses does each subnet of this size provide?",
    options: [
      "30",
      "62",
      "64",
      "126",
    ],
    correct: 1,
    explanation:
      "A /26 leaves 6 host bits, so 2^6 = 64 total addresses per subnet. Subtracting the network address and the broadcast address gives 62 usable hosts. The subnet mask is 255.255.255.192, and the blocks increment by 64: .0, .64, .128, .192. Why the others are wrong — A) 30 usable hosts corresponds to a /27. C) 64 is the total block size. Two addresses are consumed by the network ID and broadcast. D) 126 usable hosts corresponds to a /25.",
  },
  {
    id: "aplus-c1b-027",
    sourceId: "NE03",
    domain: 2,
    question:
      "A host is configured with the mask 255.255.255.240. Which CIDR notation and usable host count match that mask?",
    options: [
      "/28 with 14 usable hosts",
      "/28 with 16 usable hosts",
      "/29 with 6 usable hosts",
      "/27 with 30 usable hosts",
    ],
    correct: 0,
    explanation:
      "240 in binary is 11110000, so 28 bits are network and 4 are host: /28. That is 2^4 = 16 addresses, minus the network and broadcast addresses, leaving 14 usable. Memorize the last-octet ladder: 128=/25, 192=/26, 224=/27, 240=/28, 248=/29, 252=/30. Why the others are wrong — B) 16 is the total block size, not the usable count. C) /29 is mask 255.255.255.248. D) /27 is mask 255.255.255.224.",
  },
  {
    id: "aplus-c1b-028",
    sourceId: "NE04",
    domain: 2,
    question:
      "Users can reach websites by IP address but not by name. Which port is MOST likely being blocked?",
    options: [
      "Port 80",
      "Port 53",
      "Port 443",
      "Port 67",
    ],
    correct: 1,
    explanation:
      "Name resolution that fails while raw IP connectivity works is the textbook DNS symptom, and DNS uses port 53 over both UDP and TCP. UDP 53 handles ordinary queries, and TCP 53 handles zone transfers and responses too large for a single datagram. Verify the configured DNS server before assuming a firewall rule. Why the others are wrong — A) Blocking 80 would break HTTP by IP as well, which still works here. C) Blocking 443 would break HTTPS by IP too, and users can reach sites by address. D) Port 67 is the DHCP server port. A DHCP failure produces an APIPA address, not a name resolution failure.",
  },
  {
    id: "aplus-c1b-029",
    sourceId: "NE07",
    domain: 2,
    question:
      "A domain administrator asks a technician to add a record so that mail sent to the company domain reaches a new hosted mail provider. Which DNS record type is required?",
    options: [
      "A",
      "MX",
      "TXT",
      "CNAME",
    ],
    correct: 1,
    explanation:
      "MX (Mail Exchanger) records tell sending servers which hosts accept mail for a domain, with a priority value where the lowest number is tried first. The MX target must point at a hostname that itself has an A or AAAA record, never directly at an IP and never at a CNAME. TXT records handle the anti-spoofing side: SPF, DKIM, and DMARC. Why the others are wrong — A) An A record maps a hostname to an IPv4 address and does not control mail routing. C) TXT records hold SPF, DKIM, and DMARC policy data. They validate mail but do not route it. D) A CNAME creates an alias to another hostname. Mail routing does not use it directly.",
  },
  {
    id: "aplus-c1b-030",
    sourceId: "NE08",
    domain: 2,
    question:
      "An office deploys three access points in a 2.4 GHz environment. Which channel assignment prevents co-channel and adjacent-channel interference in North America?",
    options: [
      "1, 5, 9",
      "1, 6, 11",
      "2, 7, 12",
      "1, 11, 14",
    ],
    correct: 1,
    explanation:
      "2.4 GHz channels are spaced 5 MHz apart but each occupies about 20 MHz, so adjacent channels bleed into each other. Only 1, 6, and 11 are far enough apart to be fully non-overlapping in the North American 11-channel plan. Channels 12 and 13 are restricted and 14 is Japan-only. Why the others are wrong — A) These overlap. 2.4 GHz channels are 5 MHz apart but 20 MHz wide, so five channels of separation is not enough. C) Channel 12 is not permitted for normal use in the United States and this set drifts into restricted territory. D) Channel 14 is Japan-only and is not usable in North America.",
  },
  {
    id: "aplus-c1b-031",
    sourceId: "NE09",
    domain: 2,
    question:
      "A wireless client supports Wi-Fi 6E. Which capability does that specifically add over Wi-Fi 6?",
    options: [
      "Support for the 6 GHz band",
      "Support for OFDMA",
      "Support for MU-MIMO",
      "Support for 160 MHz channel widths",
    ],
    correct: 0,
    explanation:
      "6E is the same 802.11ax standard extended into the newly opened 6 GHz band, roughly 1,200 MHz of additional spectrum with room for many non-overlapping 80 and 160 MHz channels and no legacy devices creating interference. The trade-off is shorter effective range and worse wall penetration than 2.4 GHz. Wi-Fi 7 (802.11be) builds on this with 320 MHz channels and multi-link operation. Why the others are wrong — B) OFDMA arrived with Wi-Fi 6 (802.11ax) itself and is present on 2.4 and 5 GHz as well. C) MU-MIMO predates 6E, appearing in 802.11ac Wave 2. D) 160 MHz channels were already defined in 802.11ac and are available to Wi-Fi 6 on 5 GHz.",
  },
  {
    id: "aplus-c1b-032",
    sourceId: "NE10",
    domain: 2,
    question:
      "A 10GBASE-T link must run 85 meters through an existing riser. Which cable specification is the minimum that supports this?",
    options: [
      "Cat 5e",
      "Cat 6",
      "Cat 6a",
      "Cat 3",
    ],
    correct: 2,
    explanation:
      "Cat 6 can carry 10GBASE-T but only to roughly 55 meters because of alien crosstalk. Cat 6a is engineered with tighter twists and improved shielding to hold 10 Gb/s across the full 100 meter channel, so it is the minimum for an 85 meter run. If the riser passes through a plenum air space, the cable also has to carry a plenum (CMP) jacket rating. Why the others are wrong — A) Cat 5e is rated for 1 Gb/s over 100 m and is not a 10 Gb specification. B) Cat 6 supports 10 Gb/s only to about 55 m, which is short of 85 m. D) Cat 3 is legacy voice-grade cable rated for 10 Mb/s.",
  },
  {
    id: "aplus-c1b-033",
    sourceId: "NE11",
    domain: 2,
    question:
      "A cable run must pass above a suspended ceiling that is used for return air circulation. What is the FIRST requirement the technician must satisfy?",
    options: [
      "Use direct burial rated cable",
      "Use plenum rated cable",
      "Use shielded twisted pair",
      "Use single-mode fiber",
    ],
    correct: 1,
    explanation:
      "A ceiling space used for return air is a plenum space, so fire code requires cable with a low-smoke, flame-retardant jacket (CMP). Ordinary PVC jacketed cable releases toxic smoke when burning, and the air handler would distribute it through the building. Riser rated cable (CMR) is for vertical shafts between floors and is not a substitute in a plenum. Why the others are wrong — A) Direct burial cable is gel-filled for outdoor underground runs and is not the requirement here. C) Shielding addresses electromagnetic interference, not fire code. D) Fiber may be used but is not required, and fiber also comes in plenum and riser jacket ratings.",
  },
  {
    id: "aplus-c1b-034",
    sourceId: "NE12",
    domain: 2,
    question:
      "A technician terminates one end of a patch cable to T568A and the other to T568B. What has been created and where is it typically needed today?",
    options: [
      "A rollover cable, used for console access to a switch",
      "A crossover cable, rarely needed because most modern ports use Auto-MDIX",
      "A straight-through cable, which is the normal patch cable",
      "A loopback plug, used to test a NIC",
    ],
    correct: 1,
    explanation:
      "Mixing T568A on one end with T568B on the other swaps the transmit and receive pairs, which is the definition of a crossover cable. It was once required to connect two like devices directly, such as switch to switch or PC to PC. Auto-MDIX on virtually all current gear detects the pairing and flips internally, so crossovers are now mostly a legacy and exam topic. Why the others are wrong — A) A rollover cable reverses all eight conductors end to end and is used for serial console ports. C) A straight-through cable uses the same standard on both ends. D) A loopback plug loops transmit back to receive within a single connector.",
  },
  {
    id: "aplus-c1b-035",
    sourceId: "NE14",
    domain: 2,
    question:
      "A network printer keeps changing IP addresses, breaking saved print queues. The administrator wants DHCP to keep managing it but wants the address to stay the same. What should be configured?",
    options: [
      "Shorten the DHCP lease time",
      "Create a DHCP reservation tied to the printer's MAC address",
      "Exclude the printer's current address from the scope",
      "Enable DHCP relay on the router",
    ],
    correct: 1,
    explanation:
      "A reservation maps a specific MAC address to a specific IP inside the scope, so the device still uses DHCP but always receives the same address. That keeps central management of gateway and DNS options while giving the stability a static address would. Setting a static address on the printer would also work but takes it out of central management and risks conflicts unless the address is also excluded from the scope. Why the others are wrong — A) A shorter lease increases the churn rather than stopping it. C) An exclusion just prevents the server from handing that address out. It does not assign it to the printer. D) A relay forwards DHCP requests across subnets and has no bearing on address stability.",
  },
  {
    id: "aplus-c1b-036",
    sourceId: "NE15",
    domain: 2,
    question:
      "Which statement about IPv6 is accurate?",
    options: [
      "IPv6 uses broadcast addresses for local discovery",
      "An address beginning fe80:: is a link-local address that is not routed",
      "IPv6 addresses are 64 bits long",
      "IPv6 requires NAT to reach the internet",
    ],
    correct: 1,
    explanation:
      "fe80::/10 is the link-local range. Every IPv6 interface generates one automatically and uses it for neighbor discovery and router solicitation, but routers never forward it off the local link. IPv6 dropped broadcast in favor of multicast groups such as ff02::1 for all nodes, uses 128-bit addresses, and does not need NAT. Why the others are wrong — A) IPv6 eliminated broadcast entirely in favor of multicast. C) IPv6 addresses are 128 bits. D) IPv6 was designed to make NAT unnecessary because of its enormous address space.",
  },
  {
    id: "aplus-c1b-037",
    sourceId: "NE16",
    domain: 2,
    question:
      "A branch office needs its wireless access points powered without running electrical circuits to the ceiling. Each AP requires 45 W. Which PoE standard must the switch support?",
    options: [
      "802.3af (PoE)",
      "802.3at (PoE+)",
      "802.3bt Type 3 (PoE++)",
      "802.11ax",
    ],
    correct: 2,
    explanation:
      "802.3bt Type 3 provides up to 60 W at the port (about 51 W at the device) using all four pairs, which covers a 45 W access point. Type 4 goes to 100 W. 802.3af tops out at 15.4 W and 802.3at at 30 W, so neither is sufficient. Where the switch cannot be replaced, a single-port PoE injector is the usual workaround. Why the others are wrong — A) 802.3af delivers up to 15.4 W at the source, about 12.95 W at the device. B) 802.3at delivers up to 30 W at the source, which is not enough for a 45 W device. D) 802.11ax is a wireless standard and has nothing to do with delivering power over Ethernet.",
  },
  {
    id: "aplus-c1b-038",
    sourceId: "NE17",
    domain: 2,
    question:
      "An ISP installs fiber to a residence and terminates it in a box on the wall that outputs an Ethernet cable. What is that box?",
    options: [
      "A cable modem",
      "An optical network terminal (ONT)",
      "A media converter used to bridge two dissimilar copper standards",
      "A DSL modem",
    ],
    correct: 1,
    explanation:
      "The ONT is the demarcation device for fiber to the premises. It converts the optical signal to Ethernet and marks the boundary between the provider's responsibility and the customer's. The customer's router plugs into it. On coax the equivalent is the cable modem, and on twisted-pair telephone lines it is a DSL modem. Why the others are wrong — A) A cable modem terminates coaxial cable service, not fiber. C) Media converters do bridge media, but the specific device an ISP installs for fiber service is called an ONT. D) A DSL modem terminates service over telephone twisted pair.",
  },
  {
    id: "aplus-c1b-039",
    sourceId: "NE18",
    domain: 2,
    question:
      "A technician must isolate the guest wireless network from the corporate network while both use the same physical switches. What should be configured?",
    options: [
      "A separate VLAN for guest traffic",
      "A VPN tunnel between the guest and corporate networks",
      "Port forwarding on the firewall",
      "A DMZ containing all guest and corporate devices",
    ],
    correct: 0,
    explanation:
      "A VLAN creates a separate logical broadcast domain over shared physical hardware, so guest and corporate traffic never see each other at layer 2 and must pass through a router or firewall to interact. The guest SSID is mapped to the guest VLAN, and switch uplinks are configured as trunks to carry both tagged VLANs. Why the others are wrong — B) A VPN connects networks securely across an untrusted path. That is the opposite of isolation. C) Port forwarding exposes internal services to the outside and does nothing to separate internal traffic. D) A DMZ is a screened subnet for public-facing servers, not a means of separating two internal user populations on shared switches.",
  },
  {
    id: "aplus-c1b-040",
    sourceId: "NE19",
    domain: 2,
    question:
      "Users report that an internal web application is reachable, but a specific external site is blocked and a corporate notice page appears instead. Which device is MOST likely responsible?",
    options: [
      "A load balancer",
      "A proxy server",
      "A DHCP server",
      "A repeater",
    ],
    correct: 1,
    explanation:
      "A proxy sits between clients and the internet, terminating requests on the users' behalf. That position lets it cache content, log activity, and apply URL filtering, which is what generates the corporate block page. Content filtering functionality on a UTM firewall behaves the same way, but of the choices given only the proxy performs this role. Why the others are wrong — A) A load balancer distributes incoming requests across a pool of servers and does not filter user browsing. C) DHCP assigns addressing and has no role in filtering web requests. D) A repeater regenerates a signal to extend distance and makes no content decisions.",
  },
  {
    id: "aplus-c1b-041",
    sourceId: "NE20",
    domain: 2,
    question:
      "A technician needs to identify which of 48 unlabeled cables in a patch panel corresponds to a specific wall jack. Which tool set is appropriate?",
    options: [
      "Cable tester and crimper",
      "Toner probe and tone generator",
      "Loopback plug and multimeter",
      "Punchdown tool and Wi-Fi analyzer",
    ],
    correct: 1,
    explanation:
      "The tone generator clips onto the conductor pair at the wall jack and injects an audible signal, and the inductive probe is swept across the patch panel until it picks up that tone. This is often called a fox and hound. A cable tester with a remote end unit is the alternative when both ends can be accessed one at a time. Why the others are wrong — A) A tester confirms wiring on a known cable but cannot pick one out of a bundle. C) A loopback plug tests a single NIC and a multimeter measures electrical values. D) Neither identifies a cable in a bundle.",
  },
  {
    id: "aplus-c1b-042",
    sourceId: "NE21",
    domain: 2,
    question:
      "A user on a video call reports that audio breaks into choppy fragments even though a speed test shows plenty of bandwidth. Which metric best describes the problem?",
    options: [
      "Throughput",
      "Jitter",
      "Attenuation",
      "Duplex mismatch",
    ],
    correct: 1,
    explanation:
      "Jitter is variation in packet arrival timing. Real-time audio and video need packets at consistent intervals, so even with high bandwidth an inconsistent delay causes the jitter buffer to run dry and playback to fragment. QoS prioritization for voice traffic is the standard fix. Why the others are wrong — A) Throughput measures the volume of data moved, which the speed test already showed is adequate. C) Attenuation is signal loss over distance and typically causes complete failure or high error rates rather than choppy real-time audio. D) A duplex mismatch causes collisions and slow transfers, usually visible as heavy retransmission across all traffic.",
  },
  {
    id: "aplus-c1b-043",
    sourceId: "NE22",
    domain: 2,
    question:
      "A small office router is configured so an internal server at 192.168.1.50 can be reached from the internet on TCP 443. Which feature does this describe?",
    options: [
      "Port forwarding",
      "Universal Plug and Play",
      "Quality of Service",
      "MAC filtering",
    ],
    correct: 0,
    explanation:
      "Port forwarding creates a static inbound NAT rule mapping a port on the router's public address to a port on a specific internal host. Inbound connections have no other way through NAT, since the router has no state entry to match them against. UPnP performs the same mapping but automatically at an application's request, which is why it is often disabled for security. Why the others are wrong — B) UPnP lets applications request their own mappings automatically. Here an administrator configured it deliberately. C) QoS prioritizes classes of traffic and does not expose internal hosts. D) MAC filtering permits or denies devices on the local network by hardware address.",
  },
  {
    id: "aplus-c1b-044",
    sourceId: "NE23",
    domain: 2,
    question:
      "Which internet service type is characterized by high latency of roughly 500 to 600 ms round trip regardless of provider quality, due to the physics of the link?",
    options: [
      "Cable",
      "Fiber",
      "Geostationary satellite",
      "Fixed wireless (WISP)",
    ],
    correct: 2,
    explanation:
      "A geostationary satellite orbits about 35,786 km up, so a signal travels to orbit and back on the way out and again on the way back. That round trip alone accounts for roughly half a second and cannot be engineered away. It makes satellite unsuitable for real-time gaming or VoIP. Low-earth-orbit constellations sit far closer and cut latency to the 20 to 50 ms range. Why the others are wrong — A) Cable latency is typically 10 to 40 ms. B) Fiber latency is typically under 20 ms. D) Fixed wireless is terrestrial line-of-sight with latency usually well under 50 ms.",
  },
  {
    id: "aplus-c1b-045",
    sourceId: "NE24",
    domain: 2,
    question:
      "A technician is asked to describe a SAN. Which statement is accurate?",
    options: [
      "It is a network dedicated to providing block-level storage access to servers",
      "It is a personal area network created by Bluetooth pairing",
      "It is a city-wide network operated by a service provider",
      "It is a file-sharing protocol used to map network drives",
    ],
    correct: 0,
    explanation:
      "A storage area network is a dedicated high-speed network, usually Fibre Channel or iSCSI, that presents raw block storage to servers so the volumes appear as locally attached disks. That is the key contrast with NAS, which presents shared folders at the file level over the regular LAN. Why the others are wrong — B) That describes a PAN. C) That describes a MAN. D) That describes SMB/CIFS file sharing, which is file-level rather than block-level.",
  },
  {
    id: "aplus-c1b-046",
    sourceId: "NE28",
    domain: 2,
    question:
      "A user in a warehouse reports the Wi-Fi drops whenever a large microwave oven in the break room runs. Which action is MOST likely to resolve it?",
    options: [
      "Move the affected clients to the 5 GHz band",
      "Increase the transmit power on the 2.4 GHz radio to overpower the interference",
      "Change the SSID to something not broadcast",
      "Switch the encryption from WPA3 to WPA2",
    ],
    correct: 0,
    explanation:
      "Microwave ovens emit strongly in the 2.4 GHz ISM band, which is why interference tracks the oven's operation. Moving clients to 5 GHz or 6 GHz sidesteps the interfering spectrum entirely. If 2.4 GHz must be used, a Wi-Fi analyzer can help pick the cleanest of channels 1, 6, and 11, but the band change is the direct fix. Why the others are wrong — B) Raising power increases the AP's reach but not the client's, and it worsens co-channel interference for neighbors. C) Hiding the SSID is a weak obscurity measure and has no effect on RF interference. D) Encryption choice does not affect radio interference.",
  },
  {
    id: "aplus-c1b-047",
    sourceId: "MO01",
    domain: 1,
    question:
      "A technician replaces a laptop's LCD panel. After reassembly the display works but Wi-Fi signal strength is far worse than before. What was MOST likely done incorrectly?",
    options: [
      "The digitizer ribbon cable was reversed",
      "The antenna wires routed through the display hinge were not reconnected to the wireless card",
      "The inverter was omitted during reassembly",
      "The webcam cable was pinched",
    ],
    correct: 1,
    explanation:
      "Laptop Wi-Fi antennas are routed up the display bezel because the lid is the highest, least obstructed position on the chassis. The thin coax leads run down through the hinge to the M.2 or mini-PCIe wireless card, where they snap onto the main and auxiliary connectors. Leaving them off or pinching them in the hinge leaves the card working off almost nothing, producing exactly this symptom. Why the others are wrong — A) A reversed digitizer cable affects touch input, not radio range. C) LED-backlit panels have no inverter, and a missing inverter on an older CCFL panel would leave the screen dark. D) A pinched webcam cable disables the camera and does not affect Wi-Fi.",
  },
  {
    id: "aplus-c1b-048",
    sourceId: "MO02",
    domain: 1,
    question:
      "A user reports their phone screen displays images correctly but does not respond to touch anywhere. What component has failed?",
    options: [
      "The LCD panel",
      "The digitizer",
      "The battery",
      "The proximity sensor",
    ],
    correct: 1,
    explanation:
      "The digitizer is the transparent capacitive touch layer laminated over the display. When it fails or its ribbon cable comes loose, the image remains perfect but input is dead. On most modern phones the digitizer and display are fused into one assembly, so the repair is a full screen replacement rather than a single layer. Why the others are wrong — A) The LCD produces the image, which is still working. C) A battery fault causes power and charging symptoms, not loss of touch. D) The proximity sensor blanks the screen during calls. Its failure does not disable touch across the whole screen.",
  },
  {
    id: "aplus-c1b-049",
    sourceId: "MO03",
    domain: 1,
    question:
      "A user reports their phone has become difficult to lay flat on a desk and the screen appears slightly lifted at one edge. What is the correct FIRST action?",
    options: [
      "Apply pressure to reseat the display assembly",
      "Remove the device from service, stop charging it, and follow safe handling and disposal procedures",
      "Perform a factory reset to rule out a software cause",
      "Place the device in a bag of rice overnight",
    ],
    correct: 1,
    explanation:
      "A lifting screen or a case that no longer sits flat is the signature of a swollen lithium-ion battery, caused by gas building up inside the cell. It is a fire and rupture hazard. Stop charging immediately, do not press or puncture the cell, keep the device away from combustibles, and route it to proper hazardous waste or battery recycling rather than the trash. Why the others are wrong — A) Applying pressure to a swelling lithium battery risks puncture, fire, and toxic gas release. C) No software condition deforms a chassis, and delaying handling increases risk. D) Rice is a myth even for liquid damage, and it does nothing for a swelling battery.",
  },
  {
    id: "aplus-c1b-050",
    sourceId: "MO04",
    domain: 1,
    question:
      "A field technician needs the laptop's built-in cellular modem to authenticate on a carrier network. Which component identifies the subscriber to that network?",
    options: [
      "The IMEI",
      "The SIM (physical or eSIM)",
      "The MAC address of the Wi-Fi adapter",
      "The PRL",
    ],
    correct: 1,
    explanation:
      "The SIM holds the IMSI and cryptographic keys that authenticate the subscriber to the carrier. An eSIM does the same job in a chip soldered to the board, provisioned over the air by the carrier. The IMEI is the device serial identity used for blocklisting stolen handsets, and the PRL is a roaming preference table. Why the others are wrong — A) The IMEI identifies the hardware itself, not the subscriber account. C) The MAC address is a local layer 2 identifier and has no meaning to a cellular carrier. D) The Preferred Roaming List tells the device which towers to prefer. It does not identify the subscriber.",
  },
  {
    id: "aplus-c1b-051",
    sourceId: "MO06",
    domain: 1,
    question:
      "A company issues personal phones for work email and needs to enforce a passcode, enable remote wipe, and push the mail configuration, while leaving personal apps and data alone. Which solution matches this requirement?",
    options: [
      "Mobile device management (MDM) with a work profile or managed application container",
      "Configuring the email account manually on each device with IMAP",
      "Enabling full-device encryption only",
      "Requiring users to connect through a VPN for all traffic",
    ],
    correct: 0,
    explanation:
      "MDM enrolls the device and lets administrators push configuration profiles, enforce passcode and encryption policy, and issue a remote wipe. In a BYOD scenario the containerized work profile or managed app configuration (sometimes distinguished as MAM) limits the enterprise's reach to corporate data only, so a wipe removes the work container without touching personal photos and apps. Why the others are wrong — B) Manual configuration provides no policy enforcement or remote wipe. C) Encryption protects data at rest but enforces no policy and does not push configuration. D) A VPN secures the transport path and does nothing about device policy or remote wipe.",
  },
  {
    id: "aplus-c1b-052",
    sourceId: "MO07",
    domain: 1,
    question:
      "A user's phone reports Connected but shows no data throughput while on the corporate Wi-Fi. Personal devices on the same SSID work. What should the technician check FIRST?",
    options: [
      "Whether airplane mode is enabled",
      "Whether the device is failing 802.1X authentication or captive portal sign-in",
      "Whether the battery is below 20 percent",
      "Whether Bluetooth is disabled",
    ],
    correct: 1,
    explanation:
      "Associating with an access point and being authorized to pass traffic are two separate stages. With 802.1X enterprise authentication or a captive portal, the client can show a connected status while the switch port or controller blocks everything but the authentication exchange. Check the supplicant credentials, certificate trust, and whether the portal page has been accepted. Why the others are wrong — A) Airplane mode would disable the radio entirely, so the device could not report a connected Wi-Fi state. C) Battery level does not gate network throughput. D) Bluetooth has no bearing on Wi-Fi data throughput.",
  },
  {
    id: "aplus-c1b-053",
    sourceId: "MO08",
    domain: 1,
    question:
      "A user asks why their phone's navigation continues to show position accurately inside a large mall where satellite reception is poor. Which mechanism explains this?",
    options: [
      "The device switches to GPS-only mode indoors",
      "Assisted location using Wi-Fi access point and cellular tower databases",
      "NFC beacons in the ceiling",
      "The accelerometer calculates absolute position",
    ],
    correct: 1,
    explanation:
      "Location services fuse several inputs. When satellite signals are weak, the device matches the BSSIDs of nearby Wi-Fi access points and cellular tower identifiers against crowd-sourced databases to estimate position, often within tens of meters. This is why turning Wi-Fi off degrades indoor location accuracy even when not connected to a network. Why the others are wrong — A) GPS is the mechanism failing indoors. It cannot be the answer. C) NFC has a range of a few centimeters and cannot provide positioning across a building. D) An accelerometer detects motion and orientation but has no absolute position reference.",
  },
  {
    id: "aplus-c1b-054",
    sourceId: "MO09",
    domain: 1,
    question:
      "A laptop user complains the machine will not charge with a colleague's USB-C charger although it works with their own. Both chargers use USB-C. What is the MOST likely cause?",
    options: [
      "The colleague's charger does not support USB Power Delivery at the wattage the laptop requires",
      "USB-C chargers are keyed and only fit one manufacturer",
      "The laptop battery has failed",
      "The laptop needs a driver update to recognize new chargers",
    ],
    correct: 0,
    explanation:
      "USB-C describes only the connector. What determines charging is USB Power Delivery negotiation between the charger and the device, and both sides advertise available voltage and current profiles. A 20 W phone charger physically fits a laptop that needs 65 W or 100 W but cannot supply it, so the laptop either charges very slowly or refuses. The cable matters too, since some are rated only for 3 A. Why the others are wrong — B) USB-C is a universal reversible connector with no vendor keying. C) A failed battery would prevent charging with either charger. D) Charging negotiation happens in hardware and firmware, not through operating system drivers.",
  },
  {
    id: "aplus-c1b-055",
    sourceId: "MO10",
    domain: 1,
    question:
      "A technician needs to add memory to an ultrabook whose specification sheet lists LPDDR5 memory. What should the technician tell the customer?",
    options: [
      "The SODIMM modules can be replaced with higher capacity ones",
      "The memory is soldered to the mainboard and cannot be upgraded",
      "The memory can be upgraded through the M.2 slot",
      "A memory upgrade requires only a BIOS update to unlock additional capacity",
    ],
    correct: 1,
    explanation:
      "LPDDR (low power DDR) is packaged for direct board mounting and is soldered in place, which is why it appears in thin and light designs where board space and power draw matter. There is no socket, so capacity is fixed at purchase. Only laptops that use SODIMM modules are user-upgradable, and many current models have neither slot at all. Why the others are wrong — A) The laptop has no SODIMM slots to work with. C) M.2 slots carry storage and wireless cards. They do not accept system memory. D) Firmware cannot create physical memory that is not installed.",
  },
  {
    id: "aplus-c1b-056",
    sourceId: "MO11",
    domain: 1,
    question:
      "A user wants to share their phone's cellular connection with a laptop over a physical cable rather than Wi-Fi. What is this called?",
    options: [
      "Wireless hotspot",
      "USB tethering",
      "Bluetooth pairing",
      "NFC transfer",
    ],
    correct: 1,
    explanation:
      "USB tethering presents the phone to the laptop as a network adapter over the USB cable, sharing the cellular connection. It is generally faster and more stable than a Wi-Fi hotspot, does not compete for the 2.4 GHz band, and charges the phone at the same time. Bluetooth tethering is the third option and is the slowest of the three. Why the others are wrong — A) A hotspot shares the connection over Wi-Fi, which the user is specifically avoiding. C) Bluetooth tethering exists but is wireless and much slower. The question specifies a cable. D) NFC exchanges small amounts of data at very short range and cannot carry a network connection.",
  },
  {
    id: "aplus-c1b-057",
    sourceId: "MO12",
    domain: 1,
    question:
      "A user reports their phone gets very hot and the battery drains quickly, but only when they are in a specific rural area. What is the MOST likely explanation?",
    options: [
      "The battery has reached the end of its charge cycle life",
      "Weak cellular signal is causing the radio to transmit at maximum power continuously",
      "Too many applications are installed",
      "The charging port is dirty",
    ],
    correct: 1,
    explanation:
      "When signal strength is poor, the modem raises transmit power and retries repeatedly to hold the link, which is one of the largest power draws in a phone and generates real heat. It is worst at the fringe of coverage where the device is neither solidly connected nor fully out of range. Enabling airplane mode or Wi-Fi calling in those areas resolves the drain. Why the others are wrong — A) A worn battery drains everywhere, not only in one location. C) Installed applications do not consume power based on geography. D) A dirty port affects charging, not location-dependent drain and heat.",
  },
  {
    id: "aplus-c1b-058",
    sourceId: "MO14",
    domain: 1,
    question:
      "A phone was dropped in water. The user immediately dried it and it powers on normally. What is the appropriate guidance?",
    options: [
      "Place the phone in rice for 48 hours",
      "Power the device off, avoid charging, and let it dry thoroughly; watch for corrosion symptoms over the following weeks",
      "Charge the phone immediately to prevent data loss",
      "Run a factory reset to clear any corrupted data",
    ],
    correct: 1,
    explanation:
      "The danger with liquid is not the water so much as the minerals and the current. Applying power while moisture is present causes shorting, and dissolved salts left behind corrode traces and connectors over days or weeks. Power the device down, do not charge it, and dry it thoroughly; professional service can open and clean the board with isopropyl alcohol if contamination is likely. Why the others are wrong — A) Rice does not draw meaningful moisture out of a sealed device and dust from it can enter ports. C) Applying power to a wet device is the fastest way to short a board. D) Liquid exposure is a hardware issue, and a reset destroys the user data for no benefit.",
  },
  {
    id: "aplus-c1b-059",
    sourceId: "MO15",
    domain: 1,
    question:
      "A technician is servicing a laptop with an integrated M.2 2230 wireless card. The card has two tiny gold-tipped coaxial leads to connect. What happens if only one lead is attached?",
    options: [
      "The card will not be detected by the operating system",
      "Wi-Fi will work but with reduced range, throughput, and no MIMO diversity",
      "The card will overheat and shut down",
      "Bluetooth will be disabled entirely",
    ],
    correct: 1,
    explanation:
      "The two leads are the main and auxiliary antenna paths. With both connected, the card can use multiple-input multiple-output for spatial streams and diversity, which raises both range and throughput. Connect only one and the card falls back to a single chain: it associates and works, but performance drops noticeably. This is a common symptom after a display or card replacement. Why the others are wrong — A) Detection happens over the M.2 bus and is unaffected by antenna leads. C) Antenna leads do not affect thermal behavior. D) Bluetooth shares the antenna path but generally still functions at short range.",
  },
  {
    id: "aplus-c1b-060",
    sourceId: "MO16",
    domain: 1,
    question:
      "After a corporate email account is added to a personal phone, the user complains the phone now demands a six-digit passcode and encrypts the device. What caused this?",
    options: [
      "A malware infection triggered by the email setup",
      "The Exchange ActiveSync or MDM policy applied by the mail server",
      "The IMAP configuration enabled S/MIME by default",
      "The phone automatically enabled airplane mode restrictions",
    ],
    correct: 1,
    explanation:
      "Exchange ActiveSync lets a mail server push security policy to any device that connects, including minimum passcode complexity, screen lock timeout, device encryption, and remote wipe rights. Accepting the account means accepting those terms. Users should be told about this up front in BYOD environments, especially the remote wipe capability. Why the others are wrong — A) Nothing here suggests malware. The behavior is a documented policy enforcement. C) S/MIME signs and encrypts messages, not the device, and it does not set passcode rules. D) Airplane mode disables radios and has nothing to do with passcode policy.",
  },
  {
    id: "aplus-c1b-061",
    sourceId: "MO17",
    domain: 1,
    question:
      "A laptop's screen is very dim but an image is faintly visible when a bright flashlight is shone at an angle. Which component should be suspected?",
    options: [
      "The video card",
      "The backlight or its power circuit",
      "The digitizer",
      "The system RAM",
    ],
    correct: 1,
    explanation:
      "If the image is present under external light, the LCD and the video path are both working; only the illumination is missing. On LED-backlit panels suspect the backlight LED strip, its driver circuit on the board, or the lid-close switch stuck in the closed position. On legacy CCFL panels the inverter is the usual culprit. Try an external monitor to confirm the video path is healthy. Why the others are wrong — A) A failed video card produces no image, artifacts, or a distorted image, not a correctly rendered but unlit one. C) The digitizer handles touch input and does not illuminate anything. D) Faulty RAM causes crashes and POST failures, not a dark but functional panel.",
  },
  {
    id: "aplus-c1b-062",
    sourceId: "VC01",
    domain: 4,
    question:
      "A technician installs VMware Workstation on a Windows 11 laptop to run test virtual machines. Which type of hypervisor is this and what does it require?",
    options: [
      "Type 1, installed directly on the hardware",
      "Type 2, running as an application on top of a host operating system",
      "Type 1, requiring a host operating system",
      "Type 2, requiring dedicated server hardware with no host OS",
    ],
    correct: 1,
    explanation:
      "A type 2 or hosted hypervisor runs as an application on an existing operating system, which makes it the practical choice for a technician's laptop, lab work, and testing. It shares hardware with everything else the host is doing, so performance is lower than bare metal. Type 1 hypervisors such as ESXi or Hyper-V Server install directly on the hardware for production workloads. Why the others are wrong — A) A type 1 hypervisor replaces the host operating system rather than running on top of it. C) This contradicts itself. Type 1 has no host operating system. D) Type 2 specifically runs on a normal desktop OS.",
  },
  {
    id: "aplus-c1b-063",
    sourceId: "VC02",
    domain: 4,
    question:
      "A user installs a type 2 hypervisor and receives an error that hardware virtualization is unavailable. What should the technician do?",
    options: [
      "Add more system RAM",
      "Enable Intel VT-x or AMD SVM in UEFI/BIOS",
      "Reinstall the network drivers",
      "Convert the drive from MBR to GPT",
    ],
    correct: 1,
    explanation:
      "Hardware-assisted virtualization has to be turned on in firmware, and many boards ship with it disabled. On Intel it is labeled VT-x or Virtualization Technology, and on AMD it is SVM Mode, usually in an advanced CPU configuration menu. On Windows, note that Hyper-V, WSL2, Memory Integrity, or Credential Guard can also claim the extensions and block a third-party hypervisor even after firmware is enabled. Why the others are wrong — A) Insufficient RAM produces a memory allocation error, not a virtualization support error. C) Networking has no bearing on virtualization extensions. D) Partition scheme does not control CPU features.",
  },
  {
    id: "aplus-c1b-064",
    sourceId: "VC04",
    domain: 4,
    question:
      "A retailer's website automatically adds capacity during a holiday sale and releases it afterward, and the invoice reflects only what was used. Which two cloud characteristics does this illustrate?",
    options: [
      "Resource pooling and high availability",
      "Rapid elasticity and measured service",
      "On-demand self-service and file synchronization",
      "Virtual desktop infrastructure and community cloud",
    ],
    correct: 1,
    explanation:
      "Rapid elasticity is the ability to scale resources out and back in quickly, often automatically, to match demand. Measured service (metered utility billing) means consumption is tracked and billed per unit used, which is what makes elasticity economically meaningful. The other formal characteristics are on-demand self-service, broad network access, and resource pooling. Why the others are wrong — A) Pooling and availability are real characteristics but do not describe scaling with usage-based billing. C) Self-service is relevant but file synchronization is unrelated to capacity scaling. D) Neither describes automatic scaling or usage-based billing.",
  },
  {
    id: "aplus-c1b-065",
    sourceId: "VC05",
    domain: 4,
    question:
      "A hospital wants patient records to stay in its own datacenter under its direct control, while running a public-facing appointment booking site on a commercial cloud provider. Which deployment model is this?",
    options: [
      "Public cloud",
      "Private cloud",
      "Hybrid cloud",
      "Community cloud",
    ],
    correct: 2,
    explanation:
      "Hybrid cloud combines a private environment with public cloud services, connected so workloads and data can move between them under policy. It is the standard answer for regulated data that must stay in-house alongside public-facing services that benefit from public cloud scale. A community cloud is shared infrastructure for multiple organizations with common compliance needs, such as several agencies in the same sector. Why the others are wrong — A) Public cloud alone would not satisfy the requirement to keep records in-house. B) Private cloud alone would not include the commercial provider hosting the booking site. D) A community cloud is shared by several organizations with common requirements, which is not what is described.",
  },
  {
    id: "aplus-c1b-066",
    sourceId: "VC06",
    domain: 4,
    question:
      "A company replaces desktop PCs with thin clients that connect to centrally hosted desktop sessions. Which technology is being deployed, and what becomes the critical dependency?",
    options: [
      "VDI, with network availability and latency becoming critical",
      "SaaS, with local storage capacity becoming critical",
      "Type 2 virtualization, with local CPU becoming critical",
      "A SAN, with Fibre Channel zoning becoming critical",
    ],
    correct: 0,
    explanation:
      "Virtual desktop infrastructure runs each user's desktop as a virtual machine on central servers and streams the display to a thin client. It centralizes patching, backup, and security, and it makes endpoint replacement trivial. The trade-off is total dependence on the network: any outage, congestion, or latency spike between client and datacenter stops work entirely, so redundancy and QoS become critical. Why the others are wrong — B) Thin clients have minimal local storage by design, and SaaS describes applications, not full desktops. C) Thin clients do minimal local processing. The compute happens in the datacenter. D) A SAN is storage infrastructure, which may support VDI but is not the technology described.",
  },
  {
    id: "aplus-c1b-067",
    sourceId: "VC07",
    domain: 4,
    question:
      "A technician needs to run a legacy application that requires Windows 7 and an old ODBC driver, on a machine that must also stay on the current corporate Windows build. What is the appropriate approach?",
    options: [
      "Dual boot the workstation between Windows 7 and the corporate build",
      "Run the legacy operating system in a virtual machine with restricted network access",
      "Install the ODBC driver in compatibility mode on the current build",
      "Replace the application with a web-based alternative immediately",
    ],
    correct: 1,
    explanation:
      "A virtual machine isolates the legacy operating system and its dependencies while the host stays current and managed, and the user can access both at once. Because an out-of-support OS cannot be patched, the security requirement is to limit what the VM can reach: no internet access, restricted internal access to only the systems the application needs, and snapshots taken before changes. Why the others are wrong — A) Dual boot works but takes the machine out of service for corporate use whenever the legacy app runs, and it puts an unpatched OS directly on the network hardware. C) Compatibility mode changes reported version data but often fails with drivers, which run at kernel level. D) This may be the right long-term plan but is not something a technician can do as an immediate fix.",
  },
  {
    id: "aplus-c1b-068",
    sourceId: "VC09",
    domain: 4,
    question:
      "Which statement most accurately describes the security consideration unique to running multiple virtual machines on one host?",
    options: [
      "Each VM must have its own physical NIC or it cannot be secured",
      "A compromise of the hypervisor potentially exposes every guest running on it",
      "Virtual machines cannot be infected by malware because they are not physical",
      "Snapshots make antivirus unnecessary because any infection can be rolled back",
    ],
    correct: 1,
    explanation:
      "The hypervisor is a shared trust boundary. If it is compromised, every guest and all their data sit below the attacker's position, which is why hypervisor patching and restricting management interface access matter so much. Guests still need their own patching and endpoint protection, and network isolation between guests should be enforced with separate virtual switches or VLANs rather than assumed. Why the others are wrong — A) VMs share physical NICs through virtual switches and are still separable with VLANs and policy. C) VMs run real operating systems and are as vulnerable as physical machines. D) Rollback loses all data written since the snapshot and does not prevent data theft that already occurred.",
  },
  {
    id: "aplus-c1b-069",
    sourceId: "VC10",
    domain: 4,
    question:
      "A user's files appear on their laptop, phone, and a web portal, and an edit made on one shows up on the others within seconds. Which cloud concept describes this?",
    options: [
      "Resource pooling",
      "File synchronization",
      "Rapid elasticity",
      "Metered service",
    ],
    correct: 1,
    explanation:
      "Cloud file synchronization keeps a local copy on each device in agreement with the authoritative copy in the cloud, pushing changes as they happen. It gives offline access plus cross-device consistency, and usually version history. It is not the same as backup: a deletion or ransomware encryption syncs everywhere too, which is why versioning and a separate backup still matter. Why the others are wrong — A) Resource pooling refers to the provider serving many customers from shared infrastructure. C) Elasticity is about scaling capacity, not propagating file changes. D) Metering concerns billing based on usage.",
  },
  {
    id: "aplus-c1b-070",
    sourceId: "VC11",
    domain: 4,
    question:
      "A developer needs to test how an application behaves on eight different operating systems, discarding each environment after the test. Which capability of virtualization makes this practical?",
    options: [
      "Snapshots and rapid cloning of virtual machines",
      "Hardware RAID on the host",
      "PXE booting of physical hardware",
      "Trusted Platform Module attestation",
    ],
    correct: 0,
    explanation:
      "A snapshot captures the entire state of a VM so it can be reverted in seconds after a destructive test, and templates or clones let identical environments be stood up on demand. That combination replaces what would otherwise be eight physical machines and hours of reimaging. Snapshots are for short-term test states, though, and are not a backup strategy since they grow and degrade performance if left in place. Why the others are wrong — B) RAID provides redundancy or performance for storage and does not create test environments. C) PXE can deploy operating systems to physical machines but is far slower and requires the hardware. D) A TPM stores keys and measures boot integrity. It does not create disposable environments.",
  },
  {
    id: "aplus-c1b-071",
    sourceId: "VC12",
    domain: 4,
    question:
      "A security analyst needs to open a suspicious email attachment to observe its behavior without risking the corporate network. Which use of virtualization is this?",
    options: [
      "Cross-platform virtualization",
      "Sandboxing",
      "Application virtualization for legacy support",
      "Virtual desktop infrastructure",
    ],
    correct: 1,
    explanation:
      "A sandbox is an isolated, disposable environment where untrusted code can execute while being observed, with no path back to production. The VM is given no network access or a fully isolated virtual network, and it is reverted to a clean snapshot afterward. Analysts should be aware that some malware detects virtualization and alters its behavior to avoid analysis. Why the others are wrong — A) That refers to running one platform's software on another, such as a Windows guest on a Linux host. C) Legacy support is about compatibility, not containment of hostile code. D) VDI delivers production desktops to users and is not a malware analysis technique.",
  },
  {
    id: "aplus-c1b-072",
    sourceId: "VC13",
    domain: 4,
    question:
      "An organization is comparing an on-premises server purchase against cloud hosting. Which statement most accurately captures the cost difference?",
    options: [
      "Cloud always costs less over the life of the workload",
      "On-premises is a capital expense with ongoing maintenance, while cloud shifts spending to a recurring operational expense",
      "Cloud eliminates the need for any internal IT staff",
      "On-premises hardware requires no security patching once installed",
    ],
    correct: 1,
    explanation:
      "The core difference is the spending model. On-premises means a large upfront capital purchase plus power, cooling, space, and refresh cycles, with capacity that must be sized for peak. Cloud converts that to a recurring operational expense with capacity added and removed as needed. Which is cheaper depends on how variable the workload is; steady-state workloads often favor owning the hardware. Why the others are wrong — A) Steady, predictable workloads frequently cost more in the cloud over several years. C) Cloud environments still require configuration, identity management, monitoring, and security work. D) Patching is a continuous requirement on any platform.",
  },
  {
    id: "aplus-c1b-073",
    sourceId: "VC14",
    domain: 4,
    question:
      "A virtual machine needs to communicate with other VMs on the same host but must never reach the physical network. Which virtual network configuration accomplishes this?",
    options: [
      "Bridged networking",
      "Host-only or internal networking",
      "NAT networking",
      "Promiscuous mode on the physical adapter",
    ],
    correct: 1,
    explanation:
      "Host-only and internal virtual switches connect guests to each other, and in the host-only case to the host itself, with no uplink to a physical adapter. That is the right choice for lab networks and malware analysis. Bridged mode puts the VM on the LAN with its own address, and NAT lets it out through the host while remaining unreachable from the LAN. Why the others are wrong — A) Bridging places the VM directly on the physical network as a peer of the host. C) NAT lets the VM reach the physical network and the internet through the host's address. D) Promiscuous mode controls which frames an adapter accepts, not whether a VM is isolated.",
  },
  {
    id: "aplus-c1b-074",
    sourceId: "TS01",
    domain: 5,
    question:
      "A desktop powers on, fans spin, but there is no video and no POST beeps. The technician has already reseated RAM and the GPU. What is the BEST next step?",
    options: [
      "Replace the power supply",
      "Clear CMOS and test with only CPU, one stick of RAM, and integrated video connected",
      "Reinstall the operating system",
      "Replace the CPU",
    ],
    correct: 1,
    explanation:
      "With no POST, reduce the system to the minimum that can boot and remove variables: CPU, one memory module in the first supported slot, integrated graphics if available, and nothing else attached. Clearing CMOS resets a bad overclock or corrupt setting that can prevent POST. Add components back one at a time to isolate the failure, and check for POST code LEDs or a debug display on the board. Why the others are wrong — A) The system powers on, so the supply is at least partially functional. This is an expensive guess. C) No POST means the system never reaches storage. The OS is irrelevant. D) CPU failure is rare and this is the most expensive component to swap on a hunch.",
  },
  {
    id: "aplus-c1b-075",
    sourceId: "TS02",
    domain: 5,
    question:
      "A workstation randomly shuts down under heavy load but runs fine when idle. Temperatures reported by monitoring software sit near 100 C during load. What is the MOST likely cause?",
    options: [
      "Failing hard drive",
      "Inadequate CPU cooling from dried thermal paste or a poorly seated heatsink",
      "Corrupt operating system files",
      "An incorrect display resolution",
    ],
    correct: 1,
    explanation:
      "Shutdowns that track load and coincide with temperatures at the thermal limit are protective: the CPU throttles and then the system cuts power to prevent damage. The usual causes are pump-out or dried thermal interface material, a heatsink that has lost mounting pressure, a failed or unplugged fan, or dust clogging the fins. Clean, reapply paste, and confirm the cooler is seated evenly before considering anything else. Why the others are wrong — A) Drive failures cause read errors, freezes, and boot problems, not thermal shutdown under CPU load. C) File corruption produces application errors and blue screens, not load-correlated thermal shutdown. D) Display settings have no thermal effect.",
  },
  {
    id: "aplus-c1b-076",
    sourceId: "TS03",
    domain: 5,
    question:
      "A technician notices several small cylindrical components near the CPU socket have domed tops with brown residue. What does this indicate and what is the correct action?",
    options: [
      "Normal thermal expansion; no action needed",
      "Failing capacitors; the motherboard should be replaced",
      "Excess thermal paste; clean and reapply",
      "Dust accumulation; clean with compressed air",
    ],
    correct: 1,
    explanation:
      "Electrolytic capacitors are designed with a scored flat top so they vent rather than burst. A domed or split top with crusty brown or orange residue means the electrolyte has failed. In the VRM area next to the socket this causes unstable power delivery, random reboots, POST failures, and instability under load. Capacitors can be replaced only with board-level rework, so in practice the board is replaced. Why the others are wrong — A) Domed and leaking capacitors are never normal. C) Thermal paste is grey or white and sits between the CPU and heatsink, not on capacitors. D) Dust does not deform a capacitor top.",
  },
  {
    id: "aplus-c1b-077",
    sourceId: "TS05",
    domain: 5,
    question:
      "A user reports a laptop makes a rhythmic clicking sound and the operating system frequently freezes for several seconds before responding. What should the technician do FIRST?",
    options: [
      "Run a disk defragmentation",
      "Back up the user's data immediately",
      "Update the storage controller driver",
      "Run chkdsk with the repair option",
    ],
    correct: 1,
    explanation:
      "A rhythmic click with freezing is the classic mechanical hard drive failure signature, usually the head assembly repeatedly failing to find its position. The drive is likely to fail completely, possibly within hours. Every additional operation risks data, so the first move is to get the data off, ideally with a sector-by-sector image, and only then diagnose or replace. Confirm with SMART attributes if the drive still reports them. Why the others are wrong — A) Defragmenting a failing drive increases wear and read attempts, raising the risk of total loss. C) A driver update does not address a mechanical failure and delays the backup. D) Repair operations hammer a dying drive and may finish the job. Image the data first.",
  },
  {
    id: "aplus-c1b-078",
    sourceId: "TS06",
    domain: 5,
    question:
      "A desktop displays the message No bootable device found after a technician installed a second drive. The original drive is detected in UEFI. What should be checked FIRST?",
    options: [
      "Whether the boot order now lists the new drive first",
      "Whether the original drive has failed",
      "Whether the operating system license has expired",
      "Whether the RAM is seated properly",
    ],
    correct: 0,
    explanation:
      "Adding a drive frequently reorders the firmware boot entries so the new, empty drive is attempted first. Because it has no bootloader, the firmware reports no bootable device even though the original drive is healthy and visible. Set the correct UEFI boot entry, and while in there confirm the drive is in the right mode (AHCI versus RAID) since changing that also breaks booting. Why the others are wrong — B) The firmware still detects the drive, so a total failure is unlikely. C) Licensing does not affect the boot process. D) Bad memory prevents POST or causes crashes rather than a boot device message after a drive is added.",
  },
  {
    id: "aplus-c1b-079",
    sourceId: "TS07",
    domain: 5,
    question:
      "A user's monitor shows the correct desktop but with a persistent faint image of a previously displayed window that will not go away. Which display technology and cause does this suggest?",
    options: [
      "LCD backlight failure",
      "OLED burn-in from static content",
      "A dead pixel cluster",
      "Incorrect refresh rate",
    ],
    correct: 1,
    explanation:
      "OLED pixels are individual organic emitters that dim with use, so static elements such as taskbars, HUDs, or a docked window wear those pixels faster and leave a permanent ghost. LCDs can show temporary image persistence that fades, but permanent burn-in is an OLED and plasma characteristic. Mitigations are pixel shift, screen savers, hiding static UI, and lower brightness. Why the others are wrong — A) A backlight failure darkens the whole panel and does not create a residual image. C) Dead pixels are fixed black or colored dots, not a recognizable ghost of prior content. D) A wrong refresh rate causes flicker or a no-signal message, not image retention.",
  },
  {
    id: "aplus-c1b-080",
    sourceId: "TS08",
    domain: 5,
    question:
      "A user reports colored geometric shapes and stray lines appearing across the screen during games, and the driver occasionally reports it has recovered. What is the MOST likely cause?",
    options: [
      "Failing GPU or overheating video memory",
      "A failing power button",
      "An incorrect DNS setting",
      "A dirty optical drive lens",
    ],
    correct: 0,
    explanation:
      "Artifacts, meaning shapes, speckles, or lines that do not belong in the rendered image, indicate that data in the GPU's memory or its processing pipeline is being corrupted. Load-related onset points to heat, an unstable factory or user overclock, or degraded VRAM. Clean the cooler and reseat the card, remove any overclock, test the card in another machine, and update or roll back the driver before condemning the hardware. Why the others are wrong — B) A power button fault causes startup problems, not on-screen artifacts. C) DNS affects name resolution and has no relationship to rendering. D) Optical drives are unrelated to display output.",
  },
  {
    id: "aplus-c1b-081",
    sourceId: "TS10",
    domain: 5,
    question:
      "Several users on one floor report that print jobs sent to a shared printer sit in the queue and never print, while a test page printed from the printer's own control panel works. What should the technician check FIRST?",
    options: [
      "Replace the toner cartridge",
      "Verify the print spooler service on the print server and clear any stuck jobs",
      "Replace the fuser",
      "Reinstall the operating system on each client",
    ],
    correct: 1,
    explanation:
      "A successful test page from the panel proves the hardware, consumables, and paper path are healthy, which moves the problem to the path between clients and printer. On a shared queue that usually means the spooler service has hung or a corrupt job is blocking the queue. Restart the spooler, clear the spool folder, and confirm network connectivity to the printer from the server. Why the others are wrong — A) The printer's own test page printed correctly, so the print engine and consumables are fine. C) A fuser fault would affect the control panel test page as well. D) This is enormously disruptive and does not match a server-side queue symptom.",
  },
  {
    id: "aplus-c1b-082",
    sourceId: "TS11",
    domain: 5,
    question:
      "A laser printer jams repeatedly, always pulling several sheets at once from the same tray. Which component should be inspected?",
    options: [
      "The fuser assembly",
      "The separation pad and pickup rollers",
      "The transfer corona wire",
      "The formatter board",
    ],
    correct: 1,
    explanation:
      "Multiple sheets feeding at once is a separation failure. The pickup roller grabs the top sheet and the separation pad or roller provides friction so the sheets underneath stay behind. A glazed, worn, or contaminated pad loses that friction. Clean or replace the pad and rollers, and confirm the paper is not humid, static-bonded, or overfilled in the tray. Why the others are wrong — A) The fuser acts after the paper is already moving through and does not control how many sheets are picked. C) The transfer stage moves toner to the paper and does not affect sheet feeding. D) The formatter processes print data and is not part of the paper path.",
  },
  {
    id: "aplus-c1b-083",
    sourceId: "TS12",
    domain: 5,
    question:
      "A user reports that a wired connection drops for a few seconds every several minutes. The switch log shows the port repeatedly going up and down. Which is the MOST likely cause?",
    options: [
      "Duplex mismatch between the NIC and the switch port",
      "A damaged cable or loose connector causing the link to flap",
      "An incorrect subnet mask on the workstation",
      "DNS server unavailability",
    ],
    correct: 1,
    explanation:
      "Port flapping is a physical layer symptom: the switch is losing the electrical link and re-establishing it. Causes are a marginal or damaged cable, a poorly terminated connector, a bad port, an unseated patch cord, or interference on an unshielded run near motors and ballasts. Test the run with a cable tester, swap the patch cable, and try a different switch port before looking at configuration. Why the others are wrong — A) A duplex mismatch causes collisions, errors, and slow throughput, but the link stays up. C) A wrong mask breaks reachability to some destinations but does not cycle the physical link. D) DNS failures affect name resolution while the link stays up.",
  },
  {
    id: "aplus-c1b-084",
    sourceId: "TS13",
    domain: 5,
    question:
      "A user reports intermittent Wi-Fi in a specific corner of the office. A wireless survey shows a strong signal there but a poor signal-to-noise ratio. What does this indicate?",
    options: [
      "The access point is too far away and transmit power must be increased",
      "A source of RF interference is raising the noise floor in that area",
      "The SSID needs to be hidden to reduce traffic",
      "The clients require static IP addresses",
    ],
    correct: 1,
    explanation:
      "Signal-to-noise ratio measures how far the desired signal rises above the background. A strong signal with poor SNR means noise is high, from a microwave, cordless phone, Bluetooth device, a neighboring network on the same channel, or industrial equipment. Raising transmit power raises the signal but leaves clients transmitting at the same power, so the fix is to identify and eliminate the source or move to a cleaner channel or band. Why the others are wrong — A) Signal strength is already strong. Distance is not the issue. C) Hiding an SSID does not affect noise or interference. D) Addressing has nothing to do with radio noise.",
  },
  {
    id: "aplus-c1b-085",
    sourceId: "TS14",
    domain: 5,
    question:
      "A user cannot reach an internal server by name or IP, but can reach other hosts on their own subnet. Which command result would BEST support a default gateway problem?",
    options: [
      "ping to the loopback address succeeds",
      "ping to the local gateway address fails while ping to a local peer succeeds",
      "nslookup returns the correct IP for the server name",
      "ipconfig shows a valid DHCP-assigned address",
    ],
    correct: 1,
    explanation:
      "Reaching hosts on the local subnet proves the NIC, cable, switch, and IP configuration are working at layer 2. Everything beyond the subnet requires the default gateway, so if pings to local peers succeed but the gateway does not answer, routing off-subnet is where the failure lies. Check the configured gateway address, the router interface, and any VLAN assignment on the switch port. Why the others are wrong — A) Loopback success only proves the local TCP/IP stack is functioning. C) This shows DNS is working and points away from a name resolution problem. D) A valid address does not by itself prove the gateway is reachable.",
  },
  {
    id: "aplus-c1b-086",
    sourceId: "TS15",
    domain: 5,
    question:
      "Users report that internet browsing became extremely slow for everyone in a small office at the same time each afternoon. Internal file transfers remain fast. What should the technician investigate FIRST?",
    options: [
      "Replace the office switch",
      "Check WAN link utilization and identify what is consuming bandwidth at that time",
      "Reinstall the browsers on each workstation",
      "Increase the DHCP lease duration",
    ],
    correct: 1,
    explanation:
      "Fast internal traffic with slow internet narrows the problem to the WAN link or the path beyond it. A predictable daily pattern points at a scheduled consumer: cloud backups, large software update pushes, or streaming. Look at the router's utilization graphs and per-host traffic, then reschedule the bulk transfer or apply QoS. Only if the link is not saturated should you engage the ISP. Why the others are wrong — A) Internal transfers are fast, which indicates the switch is fine. C) A synchronized, office-wide slowdown is not a per-workstation software problem. D) Lease duration has no impact on throughput.",
  },
  {
    id: "aplus-c1b-087",
    sourceId: "TS16",
    domain: 5,
    question:
      "A technician needs to verify that a computer's power supply provides correct voltage on the 12 V rail while the system is running under load. Which tool is appropriate?",
    options: [
      "A PSU tester with the system powered off",
      "A multimeter probing a spare connector while the system runs",
      "A loopback plug",
      "A toner probe",
    ],
    correct: 1,
    explanation:
      "A multimeter set to DC volts, with the black probe on a ground (black) wire and the red probe on the yellow 12 V line of a spare peripheral connector, reads the actual rail voltage while the system is doing real work. ATX tolerance is plus or minus 5 percent, so 12 V should stay between 11.4 and 12.6 V. A PSU tester is faster for a dead-or-alive check but applies only a token load, so it can pass a supply that sags under a real one. Why the others are wrong — A) A tester checks the supply out of the system with a dummy load and cannot measure behavior under real load. C) A loopback plug tests network and serial ports. D) A toner probe traces cable runs and reads no voltage.",
  },
  {
    id: "aplus-c1b-088",
    sourceId: "TS17",
    domain: 5,
    question:
      "A laptop will not power on at all. When the AC adapter is connected, no charging LED illuminates. Which step BEST isolates whether the adapter or the laptop is at fault?",
    options: [
      "Reinstall the battery driver in Device Manager",
      "Test with a known good adapter of the same voltage, polarity, and wattage",
      "Replace the motherboard",
      "Run the built-in memory diagnostic",
    ],
    correct: 1,
    explanation:
      "Substitution with a known good part is the fastest way to divide the problem in half. If the laptop powers on with a different adapter, the original adapter or its cable is the fault; if it does not, the problem is inside the laptop at the DC jack, charging circuit, or board. Match voltage, polarity, wattage, and connector, since an underpowered adapter may run the system without charging or refuse entirely. Why the others are wrong — A) The machine does not power on, so no operating system tools are reachable. C) This is the most expensive component and has not been shown to be at fault. D) Diagnostics require the system to power on.",
  },
  {
    id: "aplus-c1b-089",
    sourceId: "TS18",
    domain: 5,
    question:
      "A RAID 5 array reports one failed drive. The array is still serving data. What is the correct immediate action?",
    options: [
      "Shut down and rebuild the array from scratch",
      "Verify backups, then replace the failed drive so the array can rebuild",
      "Convert the array to RAID 0 to restore performance",
      "Ignore it since the array is still functioning",
    ],
    correct: 1,
    explanation:
      "RAID 5 tolerates a single drive failure, so the array runs in degraded mode with parity reconstructing the missing data on the fly. There is no redundancy left, and a rebuild puts sustained read stress on the remaining drives, which is when a second failure most often appears. Confirm a current backup exists first, then insert a matching replacement and monitor the rebuild. Why the others are wrong — A) This destroys data unnecessarily. RAID 5 is designed to run degraded. C) RAID 0 has no redundancy and the conversion would destroy the data. D) A degraded RAID 5 array has zero remaining fault tolerance and the next failure loses everything.",
  },
  {
    id: "aplus-c1b-090",
    sourceId: "TS19",
    domain: 5,
    question:
      "A user's phone charges to only 80 percent and then stops, and the phone is warm to the touch. The user charges it on a car dashboard in direct sunlight. What is the BEST explanation?",
    options: [
      "The battery has failed and needs replacement",
      "Thermal protection is limiting charging because the battery is too warm",
      "The charging cable is not rated for fast charging",
      "The operating system needs to be reinstalled",
    ],
    correct: 1,
    explanation:
      "Lithium-ion cells degrade rapidly and can become unsafe when charged hot, so devices monitor battery temperature and reduce or halt charging above roughly 35 C. Direct sun on a dashboard easily exceeds that. Move the phone out of the sun, remove a thick case while charging, and stop using GPS navigation at full brightness during charging if heat persists. Why the others are wrong — A) This is normal protective behavior and does not indicate a failed cell. C) A low-rated cable slows charging but does not create a hard stop at a percentage with heat. D) Charge management is handled by firmware and hardware, not the OS install state.",
  },
  {
    id: "aplus-c1b-091",
    sourceId: "TS20",
    domain: 5,
    question:
      "A user reports the cursor on their laptop drifts across the screen on its own and clicks are registered without input. Which is the MOST likely cause?",
    options: [
      "A failing hard drive",
      "A dirty or damaged touchpad, or a stuck sensitivity setting from moisture or debris",
      "An outdated BIOS",
      "Insufficient RAM",
    ],
    correct: 1,
    explanation:
      "Ghost cursor movement is usually the capacitive touchpad registering contact that is not there, caused by residue, moisture, a swelling battery pressing on the underside of the pad, or a damaged surface. Clean it with a slightly damp lint-free cloth, check the sensitivity and palm rejection settings, and confirm the behavior stops with the touchpad disabled to prove the source. Check for battery swelling if the pad also feels raised. Why the others are wrong — A) Storage faults cause slowness and errors, not phantom pointer movement. C) Firmware version does not create random pointer input. D) Low memory causes slowdowns and paging, not spurious clicks.",
  },
  {
    id: "aplus-c1b-092",
    sourceId: "TS22",
    domain: 5,
    question:
      "A newly installed workstation gets an IP address and can ping other hosts by IP, but cannot resolve any names, including internal ones. Other workstations on the same subnet work correctly. What should the technician check?",
    options: [
      "The default gateway address",
      "The DNS server addresses configured on the workstation",
      "The subnet mask",
      "The MAC address of the NIC",
    ],
    correct: 1,
    explanation:
      "Only this host fails to resolve names while its peers succeed, so the problem is local configuration, not the DNS server. Compare the output of ipconfig /all against a working machine: the workstation may have a manually entered or stale DNS server, or it may have been given DNS by a rogue source. Clear the resolver cache with ipconfig /flushdns after correcting it. Why the others are wrong — A) A gateway problem would break off-subnet IP connectivity, which is working. C) A wrong mask breaks reachability to certain ranges by IP, which is not the symptom. D) MAC addresses are assigned by the manufacturer and are not part of name resolution.",
  },
  {
    id: "aplus-c1b-093",
    sourceId: "TS23",
    domain: 5,
    question:
      "An external USB drive is not recognized on one port but works on another port of the same computer. What should the technician check FIRST?",
    options: [
      "Replace the drive enclosure",
      "Verify whether the non-working port is disabled, damaged, or unable to supply sufficient power",
      "Reformat the drive",
      "Update the drive's firmware",
    ],
    correct: 1,
    explanation:
      "Since the drive works elsewhere on the same machine, the variable is the port. Inspect for bent or recessed contacts, check whether the port is disabled in firmware or Device Manager, and consider power: front panel headers and unpowered hubs often cannot deliver the current a bus-powered drive needs to spin up. Rear ports wired directly to the board are the reliable test point. Why the others are wrong — A) The drive works on another port, so the enclosure is functional. C) The drive is readable elsewhere, so the file system is intact. D) Firmware is common to both ports and cannot explain the difference.",
  },
  {
    id: "aplus-c1b-094",
    sourceId: "TS24",
    domain: 5,
    question:
      "After replacing a laptop keyboard, some keys produce the wrong characters and the number keys behave like a numeric keypad. What is the MOST likely cause?",
    options: [
      "The ribbon cable is not fully seated",
      "Num Lock is enabled and the keyboard lacks a separate keypad",
      "The wrong keyboard model was installed",
      "The touchpad driver is conflicting with the keyboard",
    ],
    correct: 1,
    explanation:
      "Compact laptops without a dedicated numeric keypad overlay one on the right side of the letter keys, activated by Num Lock, often with Fn. When it is on, keys such as U, I, O, J, K, L output 4, 5, 6, 1, 2, 3 instead. Toggle Num Lock and the behavior returns to normal. Only if that fails should you suspect the wrong part or a seating issue. Why the others are wrong — A) A partially seated ribbon typically produces dead keys or an entirely non-functional keyboard, not remapped behavior. C) A physically wrong keyboard is possible, but the described behavior exactly matches embedded keypad operation. D) The touchpad and keyboard are separate input devices and do not remap each other.",
  },
  {
    id: "aplus-c1b-095",
    sourceId: "TS25",
    domain: 5,
    question:
      "A technician replaces a failed drive in a system and the machine now reports the array is not found at boot. The drive was replaced with a larger model of a different brand. What is the MOST likely issue?",
    options: [
      "The new drive was not initialized as part of the array and the controller does not recognize the configuration",
      "The larger capacity exceeds what any RAID controller supports",
      "Different brands of drive cannot be used in any RAID array",
      "The operating system license is tied to the original drive serial number",
    ],
    correct: 0,
    explanation:
      "RAID metadata lives on the member drives, and a replacement arrives with none of it. The controller must be told to mark the new drive as a hot spare or rebuild target so the array configuration is written to it and reconstruction begins. Enter the controller utility and check the array status. Also verify the storage mode was not changed from RAID to AHCI in firmware, which makes an array vanish. Why the others are wrong — B) Capacity is rarely the limit, and a larger drive is normally acceptable with the extra space unused. C) Mixing brands is not ideal but is generally supported. Matching size and performance matters more. D) Licensing does not control whether firmware can find an array.",
  },
  {
    id: "aplus-c1b-096",
    sourceId: "TS26",
    domain: 5,
    question:
      "A user reports that their monitor loses signal for one to two seconds every few minutes, then returns. Cables have been reseated. Which is the MOST likely cause?",
    options: [
      "A dying backlight",
      "A marginal cable, loose connector, or a display refresh rate the cable cannot sustain",
      "A corrupt user profile",
      "An expired antivirus subscription",
    ],
    correct: 1,
    explanation:
      "Intermittent signal loss is a link training failure: the display briefly cannot maintain the digital link and renegotiates. Common causes are a damaged or poor-quality cable, an adapter in the path, a connector under strain, or running a resolution and refresh combination near the cable's bandwidth ceiling. Test with a known good cable, lower the refresh rate to confirm, and try a different port on the GPU. Why the others are wrong — A) A failing backlight dims or flickers the image but does not drop the signal and restore it. C) Profile corruption causes login and settings problems, not signal loss. D) Antivirus licensing has no effect on video output.",
  },
  {
    id: "aplus-c1b-097",
    sourceId: "TS28",
    domain: 5,
    question:
      "A technician needs to determine whether a network drop is wired correctly end to end, including split pairs. Which tool provides this?",
    options: [
      "A multimeter",
      "A cable tester with a remote end unit",
      "A punchdown tool",
      "A Wi-Fi analyzer",
    ],
    correct: 1,
    explanation:
      "A wiremap tester with a remote terminator at the far end checks each of the eight conductors for continuity, opens, shorts, reversals, and crossed pairs. Better testers also detect split pairs, where continuity is correct pin to pin but two conductors from different pairs are twisted together, which passes a simple continuity check yet destroys performance through crosstalk. Certification testers add length and signal quality measurements. Why the others are wrong — A) A multimeter measures continuity one conductor at a time and cannot identify a split pair. C) A punchdown tool terminates conductors and performs no testing. D) A Wi-Fi analyzer surveys wireless spectrum and is unrelated to copper cabling.",
  },
  {
    id: "aplus-c1b-098",
    sourceId: "TS29",
    domain: 5,
    question:
      "A user complains that video calls freeze and audio cuts out, but only when a large file upload is running in the background. Bandwidth is otherwise adequate. What is the appropriate remedy?",
    options: [
      "Configure QoS to prioritize real-time traffic on the router",
      "Replace all patch cables with Cat 6a",
      "Increase the DHCP scope size",
      "Disable the firewall",
    ],
    correct: 0,
    explanation:
      "A saturated uplink fills the router's buffers, so latency-sensitive voice and video packets wait behind bulk upload data and arrive late or not at all. Quality of Service classifies traffic and gives real-time streams priority in the queue, so the upload absorbs the delay instead of the call. Modern routers may expose this as a smart queue or bufferbloat setting, which handles the same problem. Why the others are wrong — B) Cabling is not the constraint. The symptom appears only when the link is saturated by the upload. C) Scope size determines how many addresses can be leased and has no effect on congestion. D) Disabling security controls does not address congestion and creates exposure.",
  },
  {
    id: "aplus-c1b-099",
    sourceId: "TS30",
    domain: 5,
    question:
      "A workstation displays a SMART status warning at boot but continues into the operating system normally with no other symptoms. What is the correct response?",
    options: [
      "Disable SMART monitoring in firmware to stop the message",
      "Back up the data and plan for drive replacement",
      "Run a full defragmentation to remap the bad sectors",
      "Replace the SATA cable and consider the issue resolved",
    ],
    correct: 1,
    explanation:
      "SMART tracks attributes such as reallocated sector count, pending sectors, and spin retries, and a warning means one has crossed the manufacturer's threshold. It is a predictive alert, not a current failure, so the machine still works, which is exactly the window to act. Back up, verify the backup restores, then replace the drive. Read the specific attribute values before deciding urgency. Why the others are wrong — A) This hides an early warning and does nothing about the underlying drive condition. C) Defragmentation rearranges files and does not remap failing sectors, while adding wear. D) A bad cable causes errors but does not generate the drive's own SMART threshold warning.",
  },
];

/**
 * Returns all questions for a specific domain (1-9).
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
