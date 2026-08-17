// Network+ N10-009 Flashcards
// Domains: 1=Networking Concepts, 2=Network Implementation, 3=Network Operations,
//          4=Network Security, 5=Network Troubleshooting

export const flashcards = [
  // ─── DOMAIN 1: NETWORKING CONCEPTS ───────────────────────────────────────

  {
    id: 'nplus-fc-001',
    domain: 1,
    term: 'OSI Model – Layer 1 (Physical)',
    definition:
      'Transmits raw bits over a physical medium. Defines electrical signals, light pulses, radio waves, cables, and connectors. Devices: hubs, repeaters, cables.',
  },
  {
    id: 'nplus-fc-002',
    domain: 1,
    term: 'OSI Model – Layer 2 (Data Link)',
    definition:
      'Provides node-to-node delivery using MAC addresses. Frames data for transmission. Handles error detection (not correction) via CRC. Divided into LLC and MAC sublayers. Devices: switches, bridges.',
  },
  {
    id: 'nplus-fc-003',
    domain: 1,
    term: 'OSI Model – Layer 3 (Network)',
    definition:
      'Handles logical addressing (IP) and routing of packets between networks. Determines best path for data. Devices: routers, Layer 3 switches. Protocol: IP, ICMP, OSPF.',
  },
  {
    id: 'nplus-fc-004',
    domain: 1,
    term: 'OSI Model – Layer 4 (Transport)',
    definition:
      'Provides end-to-end communication, segmentation, flow control, and error recovery. Protocols: TCP (reliable, connection-oriented) and UDP (unreliable, connectionless).',
  },
  {
    id: 'nplus-fc-005',
    domain: 1,
    term: 'OSI Model – Layers 5-7',
    definition:
      'Layer 5 (Session): Manages sessions between applications. Layer 6 (Presentation): Data formatting, encryption, compression. Layer 7 (Application): User-facing protocols like HTTP, FTP, SMTP, DNS.',
  },
  {
    id: 'nplus-fc-006',
    domain: 1,
    term: 'MAC Address',
    definition:
      'A 48-bit (6-byte) hardware address burned into a NIC. Written as 12 hex digits (e.g., 00:1A:2B:3C:4D:5E). First 3 bytes = OUI (manufacturer); last 3 bytes = device ID. Operates at Layer 2.',
  },
  {
    id: 'nplus-fc-007',
    domain: 1,
    term: 'Unicast / Multicast / Broadcast',
    definition:
      'Unicast: One-to-one communication (specific destination MAC/IP). Multicast: One-to-many to a subscribed group (e.g., 224.x.x.x IPv4 range). Broadcast: One-to-all on the local subnet (255.255.255.255 or subnet broadcast).',
  },
  {
    id: 'nplus-fc-008',
    domain: 1,
    term: 'IPv4 Private Address Ranges (RFC 1918)',
    definition:
      '10.0.0.0/8 (Class A): 10.0.0.0 – 10.255.255.255\n172.16.0.0/12 (Class B): 172.16.0.0 – 172.31.255.255\n192.168.0.0/16 (Class C): 192.168.0.0 – 192.168.255.255\nNot routable on the public internet.',
  },
  {
    id: 'nplus-fc-009',
    domain: 1,
    term: 'IPv6 Address Types',
    definition:
      'Global Unicast (2000::/3): Public routable addresses.\nUnique Local (fc00::/7): Private, not internet-routable (like RFC 1918).\nLink-Local (fe80::/10): Non-routable, single link only (auto-assigned).\nMulticast (ff00::/8): One-to-many.\nLoopback: ::1',
  },
  {
    id: 'nplus-fc-010',
    domain: 1,
    term: 'Subnetting & CIDR',
    definition:
      'CIDR (Classless Inter-Domain Routing) notation expresses a subnet as IP/prefix (e.g., 192.168.1.0/24). The prefix length is the number of 1 bits in the subnet mask. /24 = 255.255.255.0, giving 254 usable hosts. Subnetting divides a network into smaller broadcast domains.',
  },
  {
    id: 'nplus-fc-011',
    domain: 1,
    term: 'TCP vs. UDP',
    definition:
      'TCP (Transmission Control Protocol): Connection-oriented, reliable, uses three-way handshake (SYN/SYN-ACK/ACK), flow control, error recovery. Used for HTTP, FTP, SSH, SMTP.\nUDP (User Datagram Protocol): Connectionless, unreliable, low overhead, faster. Used for DNS, DHCP, VoIP, video streaming, SNMP.',
  },
  {
    id: 'nplus-fc-012',
    domain: 1,
    term: 'Well-Known Ports (0-1023)',
    definition:
      'FTP: 20 (data), 21 (control) | SSH: 22 | Telnet: 23 | SMTP: 25 | DNS: 53 | DHCP: 67/68 | HTTP: 80 | POP3: 110 | HTTPS: 443 | SMB: 445 | RDP: 3389 | SNMP: 161/162 | Syslog: 514',
  },
  {
    id: 'nplus-fc-013',
    domain: 1,
    term: 'NAT (Network Address Translation)',
    definition:
      'Translates private IP addresses to public IPs at the router. Types:\n- Static NAT: 1-to-1 permanent mapping.\n- Dynamic NAT: Uses a pool of public IPs.\n- PAT/NAT Overload: Many private IPs share one public IP using different port numbers. Most common in home/SOHO routers.',
  },
  {
    id: 'nplus-fc-014',
    domain: 1,
    term: 'ARP (Address Resolution Protocol)',
    definition:
      'Resolves IPv4 addresses to MAC addresses on the local subnet. A host broadcasts an ARP request ("Who has IP x.x.x.x?"); the owner replies with its MAC address. Results are cached in the ARP table. ARP operates at Layer 2/3 boundary.',
  },
  {
    id: 'nplus-fc-015',
    domain: 1,
    term: 'Cloud Service Models',
    definition:
      'IaaS (Infrastructure as a Service): Raw compute, storage, networking. Customer manages OS and above (e.g., AWS EC2).\nPaaS (Platform as a Service): Provider manages infrastructure + OS; customer manages applications (e.g., Heroku).\nSaaS (Software as a Service): Fully managed application (e.g., Microsoft 365, Google Workspace).',
  },

  // ─── DOMAIN 2: NETWORK IMPLEMENTATION ────────────────────────────────────

  {
    id: 'nplus-fc-016',
    domain: 2,
    term: 'VLAN (Virtual LAN)',
    definition:
      'A logical segmentation of a network at Layer 2, creating separate broadcast domains within a single physical switch. VLANs improve security, reduce broadcast traffic, and simplify management. Tagged using IEEE 802.1Q on trunk links.',
  },
  {
    id: 'nplus-fc-017',
    domain: 2,
    term: '802.1Q VLAN Tagging',
    definition:
      'IEEE standard that inserts a 4-byte tag into the Ethernet frame containing: TPID (0x8100), Priority Code Point (PCP/CoS), Drop Eligible Indicator (DEI), and 12-bit VLAN ID (supporting VLANs 1-4094). Trunk ports carry tagged frames; access ports carry untagged frames for one VLAN.',
  },
  {
    id: 'nplus-fc-018',
    domain: 2,
    term: 'STP – Spanning Tree Protocol',
    definition:
      'IEEE 802.1D protocol that prevents Layer 2 loops by blocking redundant paths. Elects a root bridge (lowest Bridge ID), then calculates best paths. Port states: Blocking → Listening → Learning → Forwarding. RSTP (802.1w) converges much faster (~1-2 seconds vs. 30-50 seconds).',
  },
  {
    id: 'nplus-fc-019',
    domain: 2,
    term: 'OSPF (Open Shortest Path First)',
    definition:
      'A link-state IGP using Dijkstra\'s SPF algorithm. Routers share Link State Advertisements (LSAs) to build a topology map (LSDB). Cost metric based on bandwidth. Supports VLSM, CIDR, and large networks. Uses multicast 224.0.0.5/6 to communicate. Groups routers into Areas (Area 0 = backbone).',
  },
  {
    id: 'nplus-fc-020',
    domain: 2,
    term: 'BGP (Border Gateway Protocol)',
    definition:
      'The de facto standard EGP for routing between autonomous systems (AS) on the internet. Path-vector protocol using AS_PATH and other attributes for routing decisions. Uses TCP port 179. iBGP (within AS) vs. eBGP (between AS). Does not converge quickly — optimized for policy-based routing.',
  },
  {
    id: 'nplus-fc-021',
    domain: 2,
    term: 'EIGRP (Enhanced Interior Gateway Routing Protocol)',
    definition:
      'Cisco-proprietary hybrid routing protocol combining distance-vector and link-state features. Uses DUAL algorithm with bandwidth + delay as the default composite metric. Supports unequal-cost load balancing. Sends partial updates only when topology changes. Uses multicast 224.0.0.10.',
  },
  {
    id: 'nplus-fc-022',
    domain: 2,
    term: '802.11ax (Wi-Fi 6)',
    definition:
      'Latest mainstream Wi-Fi standard. Operates on 2.4 GHz and 5 GHz (Wi-Fi 6E adds 6 GHz). Key features: OFDMA (multi-user channel sharing), MU-MIMO (8x8), BSS Coloring (reduces interference), Target Wake Time (improves battery life for IoT). Up to ~9.6 Gbps theoretical.',
  },
  {
    id: 'nplus-fc-023',
    domain: 2,
    term: 'MU-MIMO',
    definition:
      'Multi-User Multiple Input Multiple Output. Allows a Wi-Fi access point to communicate with multiple clients simultaneously on separate spatial streams. Introduced in 802.11ac (4x4 MU-MIMO downlink) and expanded in 802.11ax (8x8, both uplink and downlink).',
  },
  {
    id: 'nplus-fc-024',
    domain: 2,
    term: 'WPA3',
    definition:
      'Wi-Fi Protected Access 3 (2018). Replaces WPA2. Key features:\n- SAE (Simultaneous Authentication of Equals) replaces PSK, preventing offline dictionary attacks and providing forward secrecy.\n- OWE (Enhanced Open) encrypts open network traffic.\n- 192-bit security mode for enterprise use.\n- Protected Management Frames (PMF) required.',
  },
  {
    id: 'nplus-fc-025',
    domain: 2,
    term: 'Cable Categories',
    definition:
      'Cat 5: 100 Mbps, 100m\nCat 5e: 1 Gbps, 100m\nCat 6: 1 Gbps (100m) / 10 Gbps (55m), reduced crosstalk\nCat 6a: 10 Gbps, 100m (augmented, requires larger conduit)\nCat 7: 10 Gbps, 100m, shielded (not TIA standard)\nCat 8: 25/40 Gbps, up to 30m (data center use)',
  },
  {
    id: 'nplus-fc-026',
    domain: 2,
    term: 'Single-Mode vs. Multimode Fiber',
    definition:
      'Single-Mode Fiber (SMF): 9-micron core, uses laser, long distances (km), used in WAN/campus backbone. Yellow jacket.\nMultimode Fiber (MMF): 50 or 62.5-micron core, uses LED/VCSEL, shorter distances (up to ~550m for OM3/OM4 at 10 Gbps). Orange (OM1/OM2) or Aqua (OM3/OM4) jacket.',
  },
  {
    id: 'nplus-fc-027',
    domain: 2,
    term: 'PoE (Power over Ethernet)',
    definition:
      '802.3af: PoE, up to 15.4W per port (12.95W usable at device).\n802.3at: PoE+, up to 30W per port.\n802.3bt: PoE++ (Type 3: 60W, Type 4: 100W).\nPowers devices such as IP phones, wireless APs, IP cameras, and IoT sensors over Ethernet cabling.',
  },
  {
    id: 'nplus-fc-028',
    domain: 2,
    term: 'LACP / Link Aggregation',
    definition:
      'LACP (Link Aggregation Control Protocol, IEEE 802.3ad/802.1ax) allows multiple physical links to be bundled into a single logical link (port channel/EtherChannel). Increases bandwidth and provides redundancy. LACP dynamically negotiates the bundle between two switches.',
  },
  {
    id: 'nplus-fc-029',
    domain: 2,
    term: 'DHCP (Dynamic Host Configuration Protocol)',
    definition:
      'Automatically assigns IP addresses and configuration (subnet mask, default gateway, DNS servers, lease time). Uses UDP port 67 (server) and 68 (client). Process: DORA – Discover (broadcast), Offer, Request, Acknowledge. Lease renewal occurs at 50% of lease time.',
  },

  // ─── DOMAIN 3: NETWORK OPERATIONS ────────────────────────────────────────

  {
    id: 'nplus-fc-030',
    domain: 3,
    term: 'SNMP (Simple Network Management Protocol)',
    definition:
      'Protocol for monitoring and managing network devices. UDP 161 (queries), UDP 162 (traps).\nComponents: Manager (NMS), Agent (on device), MIB (database of variables).\nv1/v2c: Community strings (cleartext password).\nv3: Authentication (MD5/SHA) + encryption (DES/AES) — use v3 in production.',
  },
  {
    id: 'nplus-fc-031',
    domain: 3,
    term: 'Syslog',
    definition:
      'Standard protocol for sending log messages to a central server (syslog server). Uses UDP 514 (or TCP 514/6514 for reliable/encrypted). Severity levels 0-7:\n0=Emergency, 1=Alert, 2=Critical, 3=Error, 4=Warning, 5=Notice, 6=Info, 7=Debug.\nMnemonic: Every Awesome Cisco Engineer Will Need Daily Donuts',
  },
  {
    id: 'nplus-fc-032',
    domain: 3,
    term: 'NetFlow / IPFIX',
    definition:
      'NetFlow (Cisco-proprietary) and IPFIX (open standard, RFC 7011) export flow records containing metadata about network conversations: source/destination IP, port, protocol, byte/packet count. Used for bandwidth analysis, capacity planning, and security threat detection without capturing payload data.',
  },
  {
    id: 'nplus-fc-033',
    domain: 3,
    term: 'MTBF & MTTR',
    definition:
      'MTBF (Mean Time Between Failures): Average time a device operates without failure. Higher MTBF = more reliable.\nMTTR (Mean Time To Repair): Average time to restore a failed device. Lower MTTR = faster recovery.\nAvailability = MTBF / (MTBF + MTTR)',
  },
  {
    id: 'nplus-fc-034',
    domain: 3,
    term: 'RTO & RPO',
    definition:
      'RTO (Recovery Time Objective): Maximum acceptable downtime — how quickly a system must be restored after a disaster.\nRPO (Recovery Point Objective): Maximum acceptable data loss measured in time — how old the restored data can be.\nLower RTO/RPO = more expensive solution (hot sites, real-time replication).',
  },
  {
    id: 'nplus-fc-035',
    domain: 3,
    term: 'SLA (Service Level Agreement)',
    definition:
      'A formal agreement between a service provider and customer defining the expected level of service, including uptime guarantees (e.g., "five nines" = 99.999% = ~5.26 min downtime/year), response times, penalties for non-compliance, and support obligations.',
  },
  {
    id: 'nplus-fc-036',
    domain: 3,
    term: 'HSRP & VRRP',
    definition:
      'First-Hop Redundancy Protocols (FHRPs) that provide gateway redundancy.\nHSRP (Hot Standby Router Protocol): Cisco-proprietary. Uses Active/Standby roles. Virtual IP and virtual MAC (0000.0C07.ACxx).\nVRRP (Virtual Router Redundancy Protocol): Open standard (RFC 5798). Uses Master/Backup roles.\nBoth allow a virtual IP as the default gateway, so hosts continue working if one router fails.',
  },
  {
    id: 'nplus-fc-037',
    domain: 3,
    term: 'Backup Types',
    definition:
      'Full backup: All selected data; resets archive bit. Slowest backup, fastest restore.\nIncremental: Only data changed since last backup (any type); resets archive bit. Fastest backup, slowest restore.\nDifferential: Only data changed since last FULL backup; does NOT reset archive bit. Medium backup time, faster restore than incremental.',
  },
  {
    id: 'nplus-fc-038',
    domain: 3,
    term: 'Network Documentation',
    definition:
      'Physical diagram: Shows actual device locations, cable runs, rack layouts.\nLogical diagram: Shows IP addressing, VLANs, routing topology, security zones.\nWiring schematic: Pin-level cable mapping.\nBaseline: Normal performance metrics for comparison during troubleshooting.\nAsset inventory: Hardware/software inventory with serial numbers, licenses.',
  },

  // ─── DOMAIN 4: NETWORK SECURITY ──────────────────────────────────────────

  {
    id: 'nplus-fc-039',
    domain: 4,
    term: 'Firewall Types',
    definition:
      'Packet filter: Inspects each packet independently using ACLs (stateless).\nStateful inspection: Tracks connection state; allows established session return traffic automatically.\nProxy/application-layer: Intermediates connections; inspects application-layer content.\nNGFW (Next-Generation): Adds DPI, application awareness, IPS, SSL inspection, identity-based policies.',
  },
  {
    id: 'nplus-fc-040',
    domain: 4,
    term: 'IDS vs. IPS',
    definition:
      'IDS (Intrusion Detection System): Monitors and alerts on malicious traffic but does NOT block it (passive/out-of-band).\nIPS (Intrusion Prevention System): Monitors and actively blocks malicious traffic (inline, in the traffic path).\nBoth use signature-based and anomaly-based detection methods.',
  },
  {
    id: 'nplus-fc-041',
    domain: 4,
    term: 'DMZ (Demilitarized Zone)',
    definition:
      'A semi-trusted network segment that hosts public-facing servers (web, email, DNS). Placed between two firewalls: an outer firewall between the internet and the DMZ, and an inner firewall between the DMZ and the internal network. Limits damage if a public server is compromised.',
  },
  {
    id: 'nplus-fc-042',
    domain: 4,
    term: 'IPsec VPN Components',
    definition:
      'AH (Authentication Header): Provides integrity and authentication but NO encryption.\nESP (Encapsulating Security Payload): Provides encryption + authentication + integrity.\nIKE (Internet Key Exchange): Negotiates security associations (SAs) and manages keys. Two phases: Phase 1 (ISAKMP SA) and Phase 2 (IPsec SA).\nModes: Transport (payload only) vs. Tunnel (entire packet encapsulated).',
  },
  {
    id: 'nplus-fc-043',
    domain: 4,
    term: 'RADIUS vs. TACACS+',
    definition:
      'RADIUS: UDP 1812/1813. Encrypts only the password. Combines authentication and authorization. Open standard. Better for network access (Wi-Fi, VPN).\nTACACS+: TCP 49. Encrypts the ENTIRE packet. Separates authentication, authorization, and accounting (AAA). Cisco-proprietary. Better for device administration (CLI access to routers/switches).',
  },
  {
    id: 'nplus-fc-044',
    domain: 4,
    term: 'Kerberos',
    definition:
      'A ticket-based authentication protocol using a trusted third party (KDC - Key Distribution Center). Provides single sign-on (SSO) within a domain. Uses UDP/TCP port 88. Default authentication protocol in Active Directory. Prevents replay attacks using timestamps. Tickets have limited lifetimes.',
  },
  {
    id: 'nplus-fc-045',
    domain: 4,
    term: '802.1X (Port-Based NAC)',
    definition:
      'IEEE standard for port-based Network Access Control. Prevents unauthorized devices from accessing the LAN before authentication.\nComponents:\n- Supplicant: Client device requesting access.\n- Authenticator: Switch or AP enforcing access control.\n- Authentication Server: RADIUS server validating credentials.\nUses EAP (Extensible Authentication Protocol) for flexible authentication methods.',
  },
  {
    id: 'nplus-fc-046',
    domain: 4,
    term: 'DoS vs. DDoS',
    definition:
      'DoS (Denial of Service): Attack from a single source overwhelming a target to deny legitimate access (e.g., SYN flood, ping of death).\nDDoS (Distributed Denial of Service): Attack coordinated from many systems (botnet), making it harder to block. Amplification attacks (e.g., DNS, NTP amplification) use spoofed IPs and public servers to flood victims.',
  },
  {
    id: 'nplus-fc-047',
    domain: 4,
    term: 'ARP Poisoning (ARP Spoofing)',
    definition:
      'Attacker sends gratuitous ARP replies associating their MAC address with a legitimate IP (e.g., default gateway), redirecting traffic through the attacker (man-in-the-middle). Mitigation: Dynamic ARP Inspection (DAI) on switches validates ARP packets against the DHCP snooping binding table.',
  },
  {
    id: 'nplus-fc-048',
    domain: 4,
    term: 'DHCP Snooping',
    definition:
      'A Layer 2 switch security feature that validates DHCP messages. Classifies ports as trusted (connected to DHCP servers) or untrusted (connected to clients). Builds an IP-MAC-port binding table used by DAI. Prevents rogue DHCP servers from assigning incorrect IP configuration to clients.',
  },
  {
    id: 'nplus-fc-049',
    domain: 4,
    term: 'Dynamic ARP Inspection (DAI)',
    definition:
      'A switch security feature that intercepts ARP packets on untrusted ports and validates them against the DHCP snooping binding table. Discards ARP replies whose MAC-IP mapping does not match the binding table, preventing ARP poisoning attacks.',
  },
  {
    id: 'nplus-fc-050',
    domain: 4,
    term: 'Port Security',
    definition:
      'A switch feature that limits which MAC addresses can communicate on a port. Can specify maximum number of MAC addresses, or specific allowed MACs. Violation actions: Protect (drop), Restrict (drop + SNMP alert), Shutdown (err-disable port). Prevents MAC flooding and unauthorized device connection.',
  },
  {
    id: 'nplus-fc-051',
    domain: 4,
    term: 'Zero Trust Security Model',
    definition:
      '"Never trust, always verify." Every user and device must be authenticated and authorized before accessing any resource, regardless of network location (inside or outside the perimeter). Uses micro-segmentation, MFA, identity-aware proxies, and least-privilege access. Replaces the perimeter-based "castle and moat" model.',
  },

  // ─── DOMAIN 5: NETWORK TROUBLESHOOTING ───────────────────────────────────

  {
    id: 'nplus-fc-052',
    domain: 5,
    term: 'CompTIA 7-Step Troubleshooting Methodology',
    definition:
      '1. Identify the problem (gather information, question users, identify symptoms)\n2. Establish a theory of probable cause (top-down, bottom-up, divide and conquer)\n3. Test the theory to determine the cause\n4. Establish a plan of action and identify potential effects\n5. Implement the solution or escalate\n6. Verify full system functionality and implement preventive measures\n7. Document findings, actions, and outcomes',
  },
  {
    id: 'nplus-fc-053',
    domain: 5,
    term: 'ping',
    definition:
      'Uses ICMP Echo Request and Echo Reply messages to test basic IP connectivity. Reports round-trip time and packet loss. "ping 127.0.0.1" tests the local TCP/IP stack. "ping <gateway>" tests local network connectivity. "ping <external IP>" tests routing. A failed ping could indicate firewall blocking ICMP rather than a connectivity issue.',
  },
  {
    id: 'nplus-fc-054',
    domain: 5,
    term: 'traceroute / tracert',
    definition:
      'Traces the path packets take to a destination by sending packets with incrementing TTL values (starting at 1). Each router that drops a packet (TTL expired) sends back an ICMP "Time Exceeded" message, revealing the router\'s IP. Used to identify where packets are being dropped or routing problems. Linux: traceroute; Windows: tracert.',
  },
  {
    id: 'nplus-fc-055',
    domain: 5,
    term: 'nslookup',
    definition:
      'Command-line tool for querying DNS servers to resolve hostnames to IP addresses (and vice versa). "nslookup hostname" queries the default DNS server. "nslookup hostname server" queries a specific DNS server. Used to diagnose DNS resolution failures. Also shows the DNS server being queried.',
  },
  {
    id: 'nplus-fc-056',
    domain: 5,
    term: 'Wireshark',
    definition:
      'A free, open-source packet/protocol analyzer (sniffer) that captures frames and decodes them from Layer 2 through Layer 7. Used to diagnose network problems, analyze protocols, detect security threats, and debug applications. Supports display filters (e.g., "tcp.port == 443") and capture filters to focus analysis.',
  },
  {
    id: 'nplus-fc-057',
    domain: 5,
    term: 'Cable Tester / Toner Probe',
    definition:
      'Cable tester: Verifies physical continuity, correct wiring order (T568A/B), and identifies opens, shorts, and miswires in copper cabling.\nToner probe (Fox and Hound): A tone generator placed at one end of a cable; an inductive probe traces the cable at the other end by detecting the tone — used to identify which cable/port a run terminates at.',
  },
  {
    id: 'nplus-fc-058',
    domain: 5,
    term: 'OTDR (Optical Time-Domain Reflectometer)',
    definition:
      'A fiber optic test instrument that sends light pulses into a fiber and measures backscattered and reflected light versus time to produce a distance-versus-loss trace. Identifies faults (breaks, bends), connectors, splices, and measures total link loss. Essential for fiber certification and troubleshooting.',
  },
  {
    id: 'nplus-fc-059',
    domain: 5,
    term: 'Crosstalk',
    definition:
      'Interference between adjacent wire pairs in copper cabling caused by electromagnetic induction. NEXT (Near-End CrossTalk): Measured at the same end as the transmitter — the most problematic. FEXT (Far-End CrossTalk): Measured at the far end. Mitigated by proper cable twisting, quality connectors, and cable category selection.',
  },
  {
    id: 'nplus-fc-060',
    domain: 5,
    term: 'Attenuation',
    definition:
      'The reduction in signal strength as it travels along a cable or fiber. Measured in decibels (dB). Caused by cable resistance (copper), absorption and scattering (fiber), and connectors/splices. Increases with cable length. Mitigated by staying within maximum cable length specifications and using repeaters/amplifiers when needed.',
  },
  {
    id: 'nplus-fc-061',
    domain: 5,
    term: 'APIPA (Automatic Private IP Addressing)',
    definition:
      'When a Windows host cannot reach a DHCP server, it self-assigns an address in the 169.254.0.0/16 range (APIPA). APIPA addresses allow communication only with other APIPA-addressed hosts on the same subnet. An APIPA address is a symptom of DHCP failure — check the DHCP server, network connectivity, or firewall rules.',
  },
  {
    id: 'nplus-fc-062',
    domain: 5,
    term: 'Duplex Mismatch',
    definition:
      'Occurs when one end of a link is set to full-duplex and the other to half-duplex (usually due to one side being hard-coded and the other auto-negotiating). The half-duplex side uses CSMA/CD and detects late collisions when the full-duplex side transmits simultaneously. Symptoms: poor throughput, high collision counters, CRC errors. Fix: Set both sides to the same duplex setting (preferably auto-negotiate both).',
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
