// Network+ N10-009 Practice Questions
// Domains: 1=Networking Concepts, 2=Network Implementation, 3=Network Operations,
//          4=Network Security, 5=Network Troubleshooting

export const questions = [
  // ─── DOMAIN 1: NETWORKING CONCEPTS ───────────────────────────────────────

  {
    id: 'nplus-q-001',
    domain: 1,
    topic: 'OSI Model',
    question: 'At which OSI layer does a router primarily operate?',
    options: [
      'Layer 1 – Physical',
      'Layer 2 – Data Link',
      'Layer 3 – Network',
      'Layer 4 – Transport',
    ],
    correct: 2,
    explanation:
      'Routers operate at Layer 3 (Network) of the OSI model. They make forwarding decisions based on IP addresses contained in the Layer 3 header. Switches operate at Layer 2, and hubs at Layer 1.',
  },
  {
    id: 'nplus-q-002',
    domain: 1,
    topic: 'OSI Model',
    question:
      'Which OSI layer is responsible for end-to-end error detection and flow control between hosts?',
    options: [
      'Layer 2 – Data Link',
      'Layer 3 – Network',
      'Layer 4 – Transport',
      'Layer 5 – Session',
    ],
    correct: 2,
    explanation:
      'Layer 4 (Transport) provides end-to-end communication services including error detection, flow control, and segmentation. TCP operates here and ensures reliable delivery between hosts.',
  },
  {
    id: 'nplus-q-003',
    domain: 1,
    topic: 'OSI Model',
    question:
      'A technician captures a network frame and identifies a source and destination MAC address. At which OSI layer is this data unit found?',
    options: [
      'Layer 1 – Physical',
      'Layer 2 – Data Link',
      'Layer 3 – Network',
      'Layer 4 – Transport',
    ],
    correct: 1,
    explanation:
      'MAC addresses are Layer 2 (Data Link) addressing. The data unit at Layer 2 is called a frame, and it contains source and destination MAC addresses used for local network delivery.',
  },
  {
    id: 'nplus-q-004',
    domain: 1,
    topic: 'TCP/IP Model',
    question: 'The TCP/IP model\'s "Internet" layer maps most closely to which OSI layer?',
    options: [
      'Data Link',
      'Network',
      'Transport',
      'Session',
    ],
    correct: 1,
    explanation:
      'The TCP/IP Internet layer corresponds to the OSI Network layer (Layer 3). It handles logical addressing (IP) and routing of packets between networks.',
  },
  {
    id: 'nplus-q-005',
    domain: 1,
    topic: 'IP Addressing',
    question:
      'Which of the following is a valid Class B private IP address range?',
    options: [
      '10.0.0.0 – 10.255.255.255',
      '172.16.0.0 – 172.31.255.255',
      '192.168.0.0 – 192.168.255.255',
      '169.254.0.0 – 169.254.255.255',
    ],
    correct: 1,
    explanation:
      'The Class B private range is 172.16.0.0 – 172.31.255.255 (RFC 1918). 10.0.0.0/8 is Class A private, 192.168.0.0/16 is Class C private, and 169.254.0.0/16 is the APIPA link-local range.',
  },
  {
    id: 'nplus-q-006',
    domain: 1,
    topic: 'Subnetting',
    question:
      'A network administrator subnets the 192.168.10.0/24 network using a /26 mask. How many usable host addresses are available per subnet?',
    options: [
      '30',
      '62',
      '64',
      '126',
    ],
    correct: 1,
    explanation:
      'A /26 mask borrows 2 bits from the host portion, leaving 6 host bits. 2^6 = 64 total addresses per subnet, minus 2 (network and broadcast) = 62 usable host addresses.',
  },
  {
    id: 'nplus-q-007',
    domain: 1,
    topic: 'Subnetting',
    question:
      'What is the broadcast address for the subnet 10.0.5.128/25?',
    options: [
      '10.0.5.191',
      '10.0.5.255',
      '10.0.5.129',
      '10.0.5.254',
    ],
    correct: 1,
    explanation:
      'A /25 mask gives a block size of 128. The subnet 10.0.5.128/25 spans .128 to .255. The broadcast address is the last address in the range: 10.0.5.255.',
  },
  {
    id: 'nplus-q-008',
    domain: 1,
    topic: 'IPv6',
    question:
      'Which IPv6 address type is equivalent to a private (RFC 1918) address and is only routable within an organization?',
    options: [
      'Link-local (fe80::/10)',
      'Unique local (fc00::/7)',
      'Global unicast (2000::/3)',
      'Multicast (ff00::/8)',
    ],
    correct: 1,
    explanation:
      'Unique local addresses (fc00::/7, commonly fd00::/8) are the IPv6 equivalent of private IPv4 addresses. They are not routable on the public internet. Link-local addresses (fe80::/10) are non-routable and limited to a single link.',
  },
  {
    id: 'nplus-q-009',
    domain: 1,
    topic: 'IPv6',
    question:
      'Which IPv6 transition mechanism encapsulates IPv6 packets within IPv4 packets to traverse IPv4-only networks?',
    options: [
      'Dual-stack',
      '6to4 tunneling',
      'NAT64',
      'SLAAC',
    ],
    correct: 1,
    explanation:
      '6to4 tunneling encapsulates IPv6 packets inside IPv4 packets (protocol 41) to cross IPv4 networks. Dual-stack runs both protocols natively. NAT64 translates between IPv6 and IPv4. SLAAC is IPv6 address autoconfiguration.',
  },
  {
    id: 'nplus-q-010',
    domain: 1,
    topic: 'Protocols & Ports',
    question:
      'Which protocol and port number does HTTPS use by default?',
    options: [
      'TCP 80',
      'UDP 443',
      'TCP 443',
      'TCP 8443',
    ],
    correct: 2,
    explanation:
      'HTTPS (HTTP Secure) uses TCP port 443. It encrypts HTTP traffic using TLS/SSL. Plain HTTP uses TCP port 80.',
  },
  {
    id: 'nplus-q-011',
    domain: 1,
    topic: 'Protocols & Ports',
    question:
      'A network engineer needs to remotely and securely manage a Cisco router via command line. Which protocol should be used?',
    options: [
      'Telnet (TCP 23)',
      'SSH (TCP 22)',
      'RDP (TCP 3389)',
      'SNMP (UDP 161)',
    ],
    correct: 1,
    explanation:
      'SSH (Secure Shell) on TCP port 22 provides encrypted remote CLI access and is the secure replacement for Telnet (TCP 23), which transmits data in cleartext. RDP is for graphical remote desktop. SNMP is for network management.',
  },
  {
    id: 'nplus-q-012',
    domain: 1,
    topic: 'Protocols & Ports',
    question:
      'Which port does DNS use for standard queries?',
    options: [
      'TCP 53',
      'UDP 53',
      'UDP 67',
      'TCP 110',
    ],
    correct: 1,
    explanation:
      'DNS uses UDP port 53 for standard queries because UDP is faster and DNS responses are typically small. DNS uses TCP port 53 for zone transfers and responses larger than 512 bytes.',
  },
  {
    id: 'nplus-q-013',
    domain: 1,
    topic: 'Network Topologies',
    question:
      'In which network topology does every device connect to a central hub or switch?',
    options: [
      'Bus',
      'Ring',
      'Star',
      'Mesh',
    ],
    correct: 2,
    explanation:
      'In a star topology, all devices connect to a central device (hub or switch). This is the most common LAN topology today. A failure of the central device brings down the entire network, but individual cable failures only affect one host.',
  },
  {
    id: 'nplus-q-014',
    domain: 1,
    topic: 'Network Topologies',
    question:
      'Which topology provides the highest fault tolerance by connecting every device to every other device?',
    options: [
      'Star',
      'Ring',
      'Full mesh',
      'Bus',
    ],
    correct: 2,
    explanation:
      'A full mesh topology connects every node to every other node, providing maximum redundancy and fault tolerance. If one link fails, traffic can take alternate paths. The trade-off is high cost and complexity.',
  },
  {
    id: 'nplus-q-015',
    domain: 1,
    topic: 'Cloud Concepts',
    question:
      'A company uses a cloud service where the provider manages the underlying infrastructure and the customer deploys and manages their own applications. Which cloud service model is this?',
    options: [
      'SaaS',
      'PaaS',
      'IaaS',
      'DaaS',
    ],
    correct: 1,
    explanation:
      'PaaS (Platform as a Service) provides a platform where customers can deploy and manage their own applications without managing the underlying infrastructure (servers, storage, networking). IaaS provides raw compute/storage/networking. SaaS delivers fully managed applications.',
  },
  {
    id: 'nplus-q-016',
    domain: 1,
    topic: 'NAT',
    question:
      'Which type of NAT maps one private IP address to one unique public IP address on a one-to-one basis?',
    options: [
      'Dynamic NAT',
      'PAT (NAT overload)',
      'Static NAT',
      'Hairpin NAT',
    ],
    correct: 2,
    explanation:
      'Static NAT (one-to-one NAT) permanently maps a single private IP to a single public IP. Dynamic NAT uses a pool of public IPs assigned on demand. PAT (Port Address Translation) maps many private IPs to one public IP using different ports.',
  },
  {
    id: 'nplus-q-017',
    domain: 1,
    topic: 'Protocols & Ports',
    question:
      'Which protocol dynamically assigns IP addresses, subnet masks, default gateways, and DNS servers to clients?',
    options: [
      'DNS',
      'ARP',
      'DHCP',
      'ICMP',
    ],
    correct: 2,
    explanation:
      'DHCP (Dynamic Host Configuration Protocol) uses UDP ports 67 (server) and 68 (client) to automatically assign IP configuration to hosts. The four-step process is DORA: Discover, Offer, Request, Acknowledge.',
  },
  {
    id: 'nplus-q-018',
    domain: 1,
    topic: 'TCP/IP',
    question:
      'A client sends a TCP SYN to a server. The server responds with SYN-ACK. What does the client send next to complete the three-way handshake?',
    options: [
      'SYN',
      'ACK',
      'FIN',
      'RST',
    ],
    correct: 1,
    explanation:
      'The TCP three-way handshake is: (1) Client → SYN, (2) Server → SYN-ACK, (3) Client → ACK. After this exchange, the connection is established and data transfer can begin.',
  },

  // ─── DOMAIN 2: NETWORK IMPLEMENTATION ────────────────────────────────────

  {
    id: 'nplus-q-019',
    domain: 2,
    topic: 'VLANs',
    question:
      'Which IEEE standard defines VLAN tagging on Ethernet frames?',
    options: [
      '802.1X',
      '802.1Q',
      '802.3af',
      '802.11ac',
    ],
    correct: 1,
    explanation:
      '802.1Q is the IEEE standard for VLAN tagging. It inserts a 4-byte tag into the Ethernet frame header, including a 12-bit VLAN ID field supporting up to 4094 VLANs (0 and 4095 are reserved).',
  },
  {
    id: 'nplus-q-020',
    domain: 2,
    topic: 'VLANs',
    question:
      'A trunk link between two switches must carry traffic for VLANs 10, 20, and 30. The native VLAN is set to VLAN 1. How is native VLAN traffic handled?',
    options: [
      'It is tagged with VLAN ID 1',
      'It is dropped',
      'It is sent untagged',
      'It is encrypted',
    ],
    correct: 2,
    explanation:
      'On 802.1Q trunk links, the native VLAN is transmitted without a VLAN tag. This allows unmanaged devices connected to the trunk to communicate. Best practice is to change the native VLAN from the default VLAN 1 to an unused VLAN to prevent VLAN hopping attacks.',
  },
  {
    id: 'nplus-q-021',
    domain: 2,
    topic: 'Spanning Tree Protocol',
    question:
      'Which Spanning Tree Protocol (STP) feature allows an access port to transition directly to forwarding state, bypassing listening and learning states?',
    options: [
      'Root guard',
      'BPDU guard',
      'PortFast',
      'Loop guard',
    ],
    correct: 2,
    explanation:
      'PortFast allows a switch port connected to an end device (not another switch) to bypass the STP listening and learning states and immediately transition to forwarding. This is combined with BPDU guard, which shuts the port if a BPDU is received, preventing network loops.',
  },
  {
    id: 'nplus-q-022',
    domain: 2,
    topic: 'Spanning Tree Protocol',
    question:
      'In STP, which bridge is elected as the root bridge?',
    options: [
      'The bridge with the highest MAC address',
      'The bridge with the lowest bridge priority, with MAC address as a tiebreaker',
      'The bridge with the highest bridge priority',
      'The bridge with the most ports',
    ],
    correct: 1,
    explanation:
      'The STP root bridge is elected based on the lowest Bridge ID, which is a combination of bridge priority (default 32768) and MAC address. The switch with the lowest priority wins; if tied, the lowest MAC address wins.',
  },
  {
    id: 'nplus-q-023',
    domain: 2,
    topic: 'Routing Protocols',
    question:
      'Which routing protocol uses bandwidth and delay as its primary composite metric?',
    options: [
      'RIP',
      'OSPF',
      'EIGRP',
      'BGP',
    ],
    correct: 2,
    explanation:
      'EIGRP (Enhanced Interior Gateway Routing Protocol) uses a composite metric calculated from bandwidth and delay by default (load and reliability can optionally be included). OSPF uses cost based on bandwidth. RIP uses hop count. BGP uses path attributes like AS path.',
  },
  {
    id: 'nplus-q-024',
    domain: 2,
    topic: 'Routing Protocols',
    question:
      'Which routing protocol is the standard exterior gateway protocol used to route traffic between autonomous systems on the internet?',
    options: [
      'OSPF',
      'EIGRP',
      'RIP',
      'BGP',
    ],
    correct: 3,
    explanation:
      'BGP (Border Gateway Protocol) is the standard EGP (Exterior Gateway Protocol) that routes traffic between autonomous systems (AS) on the internet. It is a path-vector protocol. OSPF, EIGRP, and RIP are all interior gateway protocols (IGPs) used within a single autonomous system.',
  },
  {
    id: 'nplus-q-025',
    domain: 2,
    topic: 'Routing Protocols',
    question:
      'OSPF is classified as which type of routing protocol?',
    options: [
      'Distance-vector',
      'Path-vector',
      'Link-state',
      'Hybrid',
    ],
    correct: 2,
    explanation:
      'OSPF (Open Shortest Path First) is a link-state routing protocol. Each router builds a complete map (LSDB) of the network topology and uses Dijkstra\'s SPF algorithm to calculate the shortest path to each destination. RIP is distance-vector; BGP is path-vector; EIGRP is hybrid.',
  },
  {
    id: 'nplus-q-026',
    domain: 2,
    topic: 'Wireless Standards',
    question:
      'Which Wi-Fi standard introduced MU-MIMO and operates on both 2.4 GHz and 5 GHz bands with theoretical speeds up to 3.5 Gbps?',
    options: [
      '802.11n (Wi-Fi 4)',
      '802.11ac (Wi-Fi 5)',
      '802.11ax (Wi-Fi 6)',
      '802.11g',
    ],
    correct: 1,
    explanation:
      '802.11ac (Wi-Fi 5) operates exclusively on the 5 GHz band and introduced MU-MIMO (Multi-User Multiple Input Multiple Output) with theoretical speeds up to ~3.5 Gbps. Wi-Fi 6 (802.11ax) is dual-band (2.4/5 GHz) and introduced OFDMA and BSS Coloring.',
  },
  {
    id: 'nplus-q-027',
    domain: 2,
    topic: 'Wireless Standards',
    question:
      'Which 802.11 wireless standard operates only on the 5 GHz band and supports speeds up to 54 Mbps?',
    options: [
      '802.11a',
      '802.11b',
      '802.11g',
      '802.11n',
    ],
    correct: 0,
    explanation:
      '802.11a operates on the 5 GHz band with a maximum speed of 54 Mbps. 802.11b operates on 2.4 GHz at up to 11 Mbps. 802.11g operates on 2.4 GHz at up to 54 Mbps. 802.11n is dual-band and supports up to 600 Mbps.',
  },
  {
    id: 'nplus-q-028',
    domain: 2,
    topic: 'Wireless Security',
    question:
      'Which wireless security protocol replaced WPA2 and introduced Simultaneous Authentication of Equals (SAE) to prevent offline dictionary attacks?',
    options: [
      'WEP',
      'WPA',
      'WPA2-Enterprise',
      'WPA3',
    ],
    correct: 3,
    explanation:
      'WPA3 introduced SAE (Simultaneous Authentication of Equals), also known as Dragonfly handshake, which replaces the PSK handshake in WPA2 and provides forward secrecy, making offline dictionary attacks infeasible.',
  },
  {
    id: 'nplus-q-029',
    domain: 2,
    topic: 'Cabling',
    question:
      'Which cable category supports 10 Gbps Ethernet over distances up to 100 meters?',
    options: [
      'Cat 5',
      'Cat 5e',
      'Cat 6',
      'Cat 6a',
    ],
    correct: 3,
    explanation:
      'Cat 6a (augmented Category 6) supports 10GBase-T (10 Gbps) at up to 100 meters. Cat 6 supports 10 Gbps only up to 55 meters. Cat 5e supports up to 1 Gbps. Cat 5 supports up to 100 Mbps.',
  },
  {
    id: 'nplus-q-030',
    domain: 2,
    topic: 'Cabling',
    question:
      'Which fiber optic cable type uses a much larger core than single-mode fiber and is typically used for shorter distances within a building?',
    options: [
      'Single-mode fiber (SMF)',
      'Multimode fiber (MMF)',
      'Plenum-rated cable',
      'Coaxial cable',
    ],
    correct: 1,
    explanation:
      'Multimode fiber (MMF) has a larger core (50 or 62.5 microns) and is used for shorter distances (up to ~550 meters for OM3/OM4 at 10 Gbps). Single-mode fiber (SMF) has a 9-micron core and supports distances of kilometers, used for WAN/backbone links.',
  },
  {
    id: 'nplus-q-031',
    domain: 2,
    topic: 'DHCP',
    question:
      'A DHCP administrator wants to ensure a specific server always receives the same IP address from DHCP. What should be configured?',
    options: [
      'DHCP exclusion range',
      'DHCP lease time',
      'DHCP reservation',
      'DHCP scope option',
    ],
    correct: 2,
    explanation:
      'A DHCP reservation (also called a static binding) maps a specific MAC address to a fixed IP address, ensuring the device always receives the same IP from DHCP. An exclusion range prevents DHCP from assigning addresses in a range to any device.',
  },
  {
    id: 'nplus-q-032',
    domain: 2,
    topic: 'Wireless Standards',
    question:
      'What technology in 802.11ax (Wi-Fi 6) allows an access point to divide a channel into sub-channels and serve multiple users simultaneously?',
    options: [
      'MIMO',
      'OFDMA',
      'WPA3-SAE',
      'BSS Coloring',
    ],
    correct: 1,
    explanation:
      'OFDMA (Orthogonal Frequency Division Multiple Access) is a key feature of Wi-Fi 6 (802.11ax). It subdivides a channel into smaller resource units (RUs) allowing the AP to serve multiple clients simultaneously, improving efficiency in dense environments.',
  },

  // ─── DOMAIN 3: NETWORK OPERATIONS ────────────────────────────────────────

  {
    id: 'nplus-q-033',
    domain: 3,
    topic: 'Network Monitoring',
    question:
      'Which protocol uses UDP port 161 to poll network devices for statistics and UDP port 162 for trap notifications?',
    options: [
      'Syslog',
      'NetFlow',
      'SNMP',
      'ICMP',
    ],
    correct: 2,
    explanation:
      'SNMP (Simple Network Management Protocol) uses UDP 161 for management queries (GET, SET) and UDP 162 for unsolicited trap messages sent from the managed device to the NMS. SNMPv3 adds authentication and encryption.',
  },
  {
    id: 'nplus-q-034',
    domain: 3,
    topic: 'Network Monitoring',
    question:
      'A network engineer wants to analyze traffic flow data including source/destination IPs, ports, and byte counts without capturing full packet payloads. Which technology should be used?',
    options: [
      'Wireshark',
      'NetFlow',
      'Syslog',
      'SNMP traps',
    ],
    correct: 1,
    explanation:
      'NetFlow (and its open-source equivalent IPFIX) exports flow records containing metadata about network conversations (IPs, ports, protocol, byte count, packet count) without capturing actual payload data. This is used for bandwidth analysis, capacity planning, and security monitoring.',
  },
  {
    id: 'nplus-q-035',
    domain: 3,
    topic: 'High Availability',
    question:
      'Which first-hop redundancy protocol (FHRP) is Cisco-proprietary and allows multiple routers to share a virtual IP address as the default gateway?',
    options: [
      'VRRP',
      'HSRP',
      'GLBP',
      'STP',
    ],
    correct: 1,
    explanation:
      'HSRP (Hot Standby Router Protocol) is Cisco-proprietary and provides gateway redundancy using a virtual IP and MAC address. VRRP (Virtual Router Redundancy Protocol) is the open-standard equivalent. GLBP is also Cisco-proprietary and adds load balancing.',
  },
  {
    id: 'nplus-q-036',
    domain: 3,
    topic: 'Availability Metrics',
    question:
      'An organization\'s SLA states they must achieve an RTO of 4 hours. What does RTO define?',
    options: [
      'The maximum amount of data loss measured in time',
      'The maximum time allowed to restore a system after a failure',
      'The average time between system failures',
      'The average time to repair a failed component',
    ],
    correct: 1,
    explanation:
      'RTO (Recovery Time Objective) defines the maximum acceptable time to restore a system or service after a disruption. RPO (Recovery Point Objective) defines the maximum acceptable data loss measured in time. MTBF is Mean Time Between Failures; MTTR is Mean Time To Repair.',
  },
  {
    id: 'nplus-q-037',
    domain: 3,
    topic: 'Availability Metrics',
    question:
      'A server has an MTBF of 1,000 hours and an MTTR of 10 hours. What is its availability?',
    options: [
      '99.0%',
      '99.5%',
      '99.9%',
      '100%',
    ],
    correct: 0,
    explanation:
      'Availability = MTBF / (MTBF + MTTR) = 1000 / (1000 + 10) = 1000/1010 ≈ 0.99 = 99.0%. Higher MTBF or lower MTTR improves availability.',
  },
  {
    id: 'nplus-q-038',
    domain: 3,
    topic: 'Backup Types',
    question:
      'Which backup type resets the archive bit after backup and only backs up files changed since the last backup of ANY type?',
    options: [
      'Full backup',
      'Differential backup',
      'Incremental backup',
      'Snapshot backup',
    ],
    correct: 2,
    explanation:
      'An incremental backup backs up only files changed since the last backup (any type) and resets the archive bit. This results in faster backups but slower restores (requiring the last full + all incrementals). A differential backup does NOT reset the archive bit and backs up all changes since the last full backup.',
  },
  {
    id: 'nplus-q-039',
    domain: 3,
    topic: 'Network Monitoring',
    question:
      'Syslog messages have severity levels 0-7. Which severity level indicates an emergency condition where the system is unusable?',
    options: [
      'Level 0 – Emergency',
      'Level 1 – Alert',
      'Level 3 – Error',
      'Level 7 – Debug',
    ],
    correct: 0,
    explanation:
      'Syslog severity levels: 0=Emergency, 1=Alert, 2=Critical, 3=Error, 4=Warning, 5=Notice, 6=Informational, 7=Debug. The mnemonic "Every Awesome Cisco Engineer Will Need Daily Donuts" can help remember the order.',
  },
  {
    id: 'nplus-q-040',
    domain: 3,
    topic: 'Documentation',
    question:
      'Which type of network documentation provides a visual representation of the physical layout of network equipment, including rack locations, cable runs, and patch panel connections?',
    options: [
      'Logical network diagram',
      'Physical network diagram',
      'Wiring schematic',
      'Network baseline',
    ],
    correct: 1,
    explanation:
      'A physical network diagram shows the actual physical layout of network infrastructure including device locations, cable paths, and patch panel connections. A logical diagram shows IP addressing, VLANs, routing, and other logical configurations without regard to physical location.',
  },

  // ─── DOMAIN 4: NETWORK SECURITY ──────────────────────────────────────────

  {
    id: 'nplus-q-041',
    domain: 4,
    topic: 'Firewall Types',
    question:
      'Which type of firewall tracks the state of active connections and allows return traffic automatically without requiring explicit rules?',
    options: [
      'Packet filter firewall',
      'Stateful inspection firewall',
      'Proxy firewall',
      'Next-generation firewall (NGFW)',
    ],
    correct: 1,
    explanation:
      'A stateful inspection firewall maintains a connection state table and automatically permits return traffic for established sessions. A packet filter firewall examines each packet independently without context. NGFWs add deep packet inspection, application awareness, and IPS capabilities.',
  },
  {
    id: 'nplus-q-042',
    domain: 4,
    topic: 'VPN',
    question:
      'Which IPsec protocol provides both authentication and encryption of the IP payload?',
    options: [
      'AH (Authentication Header)',
      'ESP (Encapsulating Security Payload)',
      'IKE (Internet Key Exchange)',
      'ISAKMP',
    ],
    correct: 1,
    explanation:
      'ESP (Encapsulating Security Payload) provides confidentiality (encryption), authentication, and integrity for IP packets. AH (Authentication Header) provides only authentication and integrity — it does NOT encrypt the payload. IKE/ISAKMP are used for key exchange and SA negotiation.',
  },
  {
    id: 'nplus-q-043',
    domain: 4,
    topic: 'VPN',
    question:
      'With split tunneling enabled on a VPN, how does a remote user\'s internet traffic behave?',
    options: [
      'All traffic is encrypted and sent through the corporate VPN tunnel',
      'Internet-bound traffic goes directly to the internet; only corporate traffic uses the VPN',
      'No traffic is encrypted',
      'Internet traffic is blocked entirely',
    ],
    correct: 1,
    explanation:
      'Split tunneling allows remote users to access corporate resources through the VPN while internet-bound traffic goes directly to the internet without traversing the VPN. This reduces VPN bandwidth usage but may leave internet traffic less secure.',
  },
  {
    id: 'nplus-q-044',
    domain: 4,
    topic: 'Authentication',
    question:
      'Which AAA protocol encrypts the ENTIRE authentication packet (not just the password) and uses TCP port 49?',
    options: [
      'RADIUS',
      'TACACS+',
      'LDAP',
      'Kerberos',
    ],
    correct: 1,
    explanation:
      'TACACS+ uses TCP port 49 and encrypts the entire packet body. RADIUS uses UDP ports 1812/1813 and only encrypts the password field. TACACS+ is Cisco-proprietary and better suited for device administration. RADIUS is better for network access authentication.',
  },
  {
    id: 'nplus-q-045',
    domain: 4,
    topic: 'Authentication',
    question:
      'Which IEEE standard defines port-based Network Access Control (NAC) used to authenticate devices before granting network access?',
    options: [
      '802.1Q',
      '802.1X',
      '802.3af',
      '802.11i',
    ],
    correct: 1,
    explanation:
      '802.1X is the IEEE standard for port-based Network Access Control. It uses EAP (Extensible Authentication Protocol) and involves a supplicant (client), authenticator (switch/AP), and authentication server (typically RADIUS) to authenticate devices before granting access.',
  },
  {
    id: 'nplus-q-046',
    domain: 4,
    topic: 'Network Attacks',
    question:
      'An attacker sends a large volume of SYN packets to a server with spoofed source IPs, never completing the three-way handshake. What type of attack is this?',
    options: [
      'ARP poisoning',
      'SYN flood (DoS)',
      'VLAN hopping',
      'Smurf attack',
    ],
    correct: 1,
    explanation:
      'A SYN flood is a DoS attack where the attacker sends many TCP SYN packets with spoofed source IPs. The server sends SYN-ACKs and waits for ACKs that never come, exhausting the half-open connection table. SYN cookies are a common mitigation.',
  },
  {
    id: 'nplus-q-047',
    domain: 4,
    topic: 'Network Attacks',
    question:
      'Which attack involves a threat actor sending gratuitous ARP replies to poison the ARP cache of victims and redirect traffic through the attacker\'s device?',
    options: [
      'MAC flooding',
      'VLAN hopping',
      'ARP poisoning (ARP spoofing)',
      'DHCP starvation',
    ],
    correct: 2,
    explanation:
      'ARP poisoning (ARP spoofing) involves sending unsolicited ARP replies that associate the attacker\'s MAC address with a legitimate IP address (such as the default gateway), enabling man-in-the-middle attacks. Mitigation includes Dynamic ARP Inspection (DAI) on switches.',
  },
  {
    id: 'nplus-q-048',
    domain: 4,
    topic: 'Switch Security',
    question:
      'A switch security feature examines DHCP messages and builds a binding table of legitimate IP-to-MAC-to-port mappings. What is this feature?',
    options: [
      'Dynamic ARP Inspection (DAI)',
      'DHCP snooping',
      'Port security',
      '802.1X',
    ],
    correct: 1,
    explanation:
      'DHCP snooping validates DHCP messages and builds a binding table (IP address, MAC address, VLAN, port, lease time). Ports are classified as trusted (connected to DHCP servers/uplinks) or untrusted (connected to clients). DAI uses the DHCP snooping binding table to validate ARP packets.',
  },
  {
    id: 'nplus-q-049',
    domain: 4,
    topic: 'Network Design',
    question:
      'A DMZ is used in network design to host publicly accessible servers. What is the primary security benefit of a DMZ?',
    options: [
      'It encrypts all traffic between internal and external networks',
      'It isolates public-facing servers so that a compromise does not directly expose the internal network',
      'It prevents all inbound connections from the internet',
      'It replaces the need for a firewall',
    ],
    correct: 1,
    explanation:
      'A DMZ (Demilitarized Zone) places public-facing servers (web, email, DNS) in a semi-trusted network segment between two firewalls. If a DMZ server is compromised, the attacker cannot directly reach the internal network without penetrating the second firewall.',
  },
  {
    id: 'nplus-q-050',
    domain: 4,
    topic: 'Network Attacks',
    question:
      'Which VLAN attack technique involves an attacker sending 802.1Q-tagged frames to switch trunk ports to access traffic in VLANs they are not authorized for?',
    options: [
      'MAC flooding',
      'ARP poisoning',
      'VLAN hopping',
      'DHCP snooping',
    ],
    correct: 2,
    explanation:
      'VLAN hopping uses two methods: switch spoofing (attacker mimics a switch to form a trunk) or double tagging (attacker sends doubly-tagged frames to cross VLAN boundaries). Mitigations include disabling DTP, setting trunk ports explicitly, and changing the native VLAN from the default VLAN 1.',
  },

  // ─── DOMAIN 5: NETWORK TROUBLESHOOTING ───────────────────────────────────

  {
    id: 'nplus-q-051',
    domain: 5,
    topic: 'Troubleshooting Methodology',
    question:
      'According to the CompTIA seven-step troubleshooting methodology, what is the correct second step after identifying the problem?',
    options: [
      'Implement the solution',
      'Establish a plan of action',
      'Establish a theory of probable cause',
      'Test the theory to determine the cause',
    ],
    correct: 2,
    explanation:
      'The CompTIA 7-step troubleshooting process is: (1) Identify the problem, (2) Establish a theory of probable cause, (3) Test the theory to determine the cause, (4) Establish a plan of action and identify potential effects, (5) Implement the solution or escalate, (6) Verify full system functionality, (7) Document findings, actions, and outcomes.',
  },
  {
    id: 'nplus-q-052',
    domain: 5,
    topic: 'Troubleshooting Tools',
    question:
      'A technician suspects a network cable run in a wall has a break. Which tool would BEST locate the exact distance to the fault in the cable?',
    options: [
      'Cable toner/probe',
      'Multimeter',
      'Time-domain reflectometer (TDR)',
      'Optical time-domain reflectometer (OTDR)',
    ],
    correct: 2,
    explanation:
      'A TDR (Time-Domain Reflectometer) sends a signal down the cable and measures the time for the reflection to return, calculating the distance to a fault such as a break or short. An OTDR performs the same function for fiber optic cables. A cable toner identifies which cable run corresponds to which port.',
  },
  {
    id: 'nplus-q-053',
    domain: 5,
    topic: 'Troubleshooting Tools',
    question:
      'A host has an IP address of 169.254.45.12. What is the most likely cause?',
    options: [
      'The host is configured with a static IP address',
      'The host failed to receive a DHCP lease and self-assigned an APIPA address',
      'The host is behind a NAT device',
      'IPv6 is enabled and the host is using a link-local address',
    ],
    correct: 1,
    explanation:
      'The 169.254.0.0/16 range is the APIPA (Automatic Private IP Addressing) range. Windows hosts automatically assign themselves an address in this range when they cannot reach a DHCP server. The host will only be able to communicate with other APIPA-addressed hosts on the same subnet.',
  },
  {
    id: 'nplus-q-054',
    domain: 5,
    topic: 'Troubleshooting Tools',
    question:
      'A technician runs "nslookup google.com" and receives an IP address but cannot ping google.com by name. The ping by IP address works. What is the most likely cause?',
    options: [
      'The default gateway is incorrect',
      'The DNS server is returning incorrect results',
      'A firewall is blocking ICMP traffic',
      'The host cannot resolve hostnames — the DNS configuration is mismatched',
    ],
    correct: 3,
    explanation:
      'If nslookup resolves the name and ping by IP works but ping by name fails, the DNS client configuration on the host is likely wrong (pointing to a different DNS server than nslookup uses, or a search domain issue). nslookup may use a different DNS server than the system resolver. Check ipconfig /all to verify the DNS server configured for the adapter.',
  },
  {
    id: 'nplus-q-055',
    domain: 5,
    topic: 'Troubleshooting Tools',
    question:
      'Which command displays the path (list of routers/hops) that packets take to reach a destination host?',
    options: [
      'ping',
      'netstat',
      'traceroute / tracert',
      'nslookup',
    ],
    correct: 2,
    explanation:
      'traceroute (Linux/macOS) or tracert (Windows) displays each router hop along the path to a destination by sending packets with incrementing TTL values. When the TTL reaches 0 at a router, the router returns an ICMP "Time Exceeded" message, revealing its address.',
  },
  {
    id: 'nplus-q-056',
    domain: 5,
    topic: 'Troubleshooting',
    question:
      'Two switches are connected with a cable. One interface is set to 100 Mbps full-duplex; the other is set to auto-negotiate and negotiates 100 Mbps half-duplex. What is the likely result?',
    options: [
      'The link will not come up',
      'The link works but experiences excessive collisions and poor throughput',
      'Both switches will automatically correct to full-duplex',
      'The link operates at 10 Mbps',
    ],
    correct: 1,
    explanation:
      'A duplex mismatch occurs when one side of a link is hard-coded to full-duplex while the other auto-negotiates to half-duplex. The half-duplex side uses CSMA/CD and detects collisions when the full-duplex side sends while it is transmitting, causing errors, retransmissions, and significantly degraded throughput. The link stays up but performs poorly.',
  },
  {
    id: 'nplus-q-057',
    domain: 5,
    topic: 'Troubleshooting',
    question:
      'Crosstalk in copper cabling is caused by which phenomenon?',
    options: [
      'Excessive cable length beyond the specification',
      'Electromagnetic interference from adjacent wire pairs inducing signal on neighboring pairs',
      'Incorrect termination of fiber optic connectors',
      'A break in the cable shield',
    ],
    correct: 1,
    explanation:
      'Crosstalk is the undesired induction of signal from one wire pair into an adjacent pair due to electromagnetic coupling. NEXT (Near-End CrossTalk) occurs near the source; FEXT (Far-End CrossTalk) occurs at the far end. Proper cable twisting and quality connectors reduce crosstalk.',
  },
  {
    id: 'nplus-q-058',
    domain: 5,
    topic: 'Troubleshooting Tools',
    question:
      'A technician needs to identify which patch panel port corresponds to a cable run in a remote wiring closet. Which tool is BEST suited for this task?',
    options: [
      'TDR',
      'OTDR',
      'Cable toner/probe (Fox and Hound)',
      'Wireshark',
    ],
    correct: 2,
    explanation:
      'A cable toner and probe (also called a Fox and Hound or tone generator and inductive amplifier) is used to trace a specific cable run from one end to the other. The toner is connected to one end and generates a signal; the probe is used to identify the cable at the other end by listening for the tone.',
  },
  {
    id: 'nplus-q-059',
    domain: 5,
    topic: 'Troubleshooting Tools',
    question:
      'Which command-line tool displays active TCP/UDP connections, listening ports, and associated process IDs on a local host?',
    options: [
      'ping',
      'arp -a',
      'netstat',
      'nslookup',
    ],
    correct: 2,
    explanation:
      'netstat (network statistics) displays active network connections, listening ports, routing tables, and interface statistics. "netstat -an" shows all connections and listening ports numerically; "netstat -b" (Windows) shows the process name; "netstat -tuln" (Linux) shows TCP/UDP listening ports.',
  },
  {
    id: 'nplus-q-060',
    domain: 5,
    topic: 'Troubleshooting Tools',
    question:
      'A technician runs "arp -a" on a Windows workstation. What information does this command display?',
    options: [
      'DNS name to IP address mappings cached locally',
      'The routing table of the local host',
      'The ARP cache, showing IP-to-MAC address mappings',
      'Active TCP connections and listening ports',
    ],
    correct: 2,
    explanation:
      '"arp -a" displays the ARP (Address Resolution Protocol) cache on the local host, which contains a table of IP addresses and their corresponding MAC addresses learned through ARP requests and replies. This is useful for diagnosing ARP poisoning or connectivity issues at Layer 2.',
  },
  {
    id: 'nplus-q-061',
    domain: 5,
    topic: 'Troubleshooting Tools',
    question:
      'An engineer uses Wireshark to capture traffic. Which OSI layer does Wireshark operate at to capture and analyze frames?',
    options: [
      'Layer 1 only',
      'Layer 3 and above only',
      'It can analyze traffic from Layer 2 (Data Link) through Layer 7 (Application)',
      'Layer 7 (Application) only',
    ],
    correct: 2,
    explanation:
      'Wireshark is a protocol analyzer (packet sniffer) that captures frames at Layer 2 and can decode and analyze all encapsulated headers up through Layer 7 application data. It is used for troubleshooting connectivity issues, security analysis, and protocol education.',
  },
  {
    id: 'nplus-q-062',
    domain: 5,
    topic: 'Troubleshooting Tools',
    question:
      'Which tool is used specifically for testing fiber optic cables to find breaks, splices, and measure loss over distance?',
    options: [
      'TDR',
      'OTDR',
      'Cable toner',
      'Multimeter',
    ],
    correct: 1,
    explanation:
      'An OTDR (Optical Time-Domain Reflectometer) sends light pulses into a fiber and measures reflected light to identify faults, bends, connectors, and splices along the fiber. It provides a distance-versus-loss graph. A TDR performs the same function for copper cables.',
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
