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
