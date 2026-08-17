// Network+ N10-009 Study Guide
// Guides covering all 5 exam domains

export const studyGuide = [
  {
    id: 'nplus-sg1',
    domain: 1,
    title: 'OSI Model & Network Fundamentals',
    summary:
      'The OSI (Open Systems Interconnection) model is a conceptual framework with 7 layers that standardizes network communication. Understanding each layer\'s role, associated protocols, and devices is fundamental to Network+ success.',
    topics: [
      {
        id: 'nplus-sg1-1',
        title: 'The 7 OSI Layers',
        content: `The OSI model organizes network communication into 7 distinct layers. Remember them with: **"Please Do Not Throw Sausage Pizza Away"** (Physical, Data Link, Network, Transport, Session, Presentation, Application).

| Layer | Name | Data Unit | Key Protocols/Devices |
|-------|------|-----------|----------------------|
| 7 | Application | Data | HTTP, FTP, SMTP, DNS, DHCP |
| 6 | Presentation | Data | SSL/TLS, JPEG, MPEG |
| 5 | Session | Data | NetBIOS, RPC, SQL sessions |
| 4 | Transport | Segment | TCP, UDP |
| 3 | Network | Packet | IP, ICMP, OSPF — Routers |
| 2 | Data Link | Frame | Ethernet, 802.1Q — Switches, Bridges |
| 1 | Physical | Bit | Ethernet cable, fiber — Hubs, Repeaters |

**Key exam points:**
- Routers operate at **Layer 3** using IP addresses
- Switches operate at **Layer 2** using MAC addresses
- Hubs operate at **Layer 1** — they repeat electrical signals (not used in modern networks)
- Encapsulation adds headers as data moves down the layers; decapsulation removes them moving up`,
      },
      {
        id: 'nplus-sg1-2',
        title: 'TCP vs. UDP',
        content: `The two primary Layer 4 protocols serve different purposes:

**TCP (Transmission Control Protocol)**
- Connection-oriented: establishes a connection via three-way handshake (SYN → SYN-ACK → ACK)
- Reliable: guarantees delivery, ordering, and error checking
- Flow control: sliding window mechanism
- Use cases: HTTP/HTTPS, FTP, SSH, SMTP, POP3, IMAP
- Higher overhead than UDP

**UDP (User Datagram Protocol)**
- Connectionless: no handshake, no guarantee of delivery
- Unreliable: packets may arrive out of order, be lost, or duplicated
- Low overhead: faster than TCP
- Use cases: DNS, DHCP, SNMP, VoIP, video streaming, online gaming, TFTP

**Mnemonic for TCP ports (common):**
- \`FTP\` = 20/21 | \`SSH\` = 22 | \`Telnet\` = 23 | \`SMTP\` = 25 | \`DNS\` = 53 | \`HTTP\` = 80 | \`HTTPS\` = 443 | \`RDP\` = 3389`,
      },
      {
        id: 'nplus-sg1-3',
        title: 'Network Topologies',
        content: `**Physical topologies** describe the actual physical layout of cables and devices:

- **Bus**: All devices share a single cable (backbone). One break disrupts the entire network. Legacy (coax). Low cost, hard to troubleshoot.
- **Star**: All devices connect to a central switch/hub. Most common LAN topology. Easy to troubleshoot. Central device is a single point of failure.
- **Ring**: Each device connects to two others forming a ring. Token Ring (legacy). SONET/SDH physical rings still used in WANs. Double ring = fault tolerance.
- **Mesh**: Devices interconnect with multiple paths. **Full mesh**: every device connects to every other (maximum redundancy, expensive). **Partial mesh**: some redundant paths.
- **Hybrid**: Combines multiple topologies (e.g., star-bus, star-ring).

**Logical topologies** describe how data flows, which may differ from physical layout. Ethernet uses a logical bus (CSMA/CD) regardless of star physical layout.`,
      },
      {
        id: 'nplus-sg1-4',
        title: 'Cloud Networking Concepts',
        content: `**Cloud Service Models:**
- **IaaS** (Infrastructure as a Service): Provider manages hardware, networking, virtualization. Customer manages OS, middleware, applications, data. Example: AWS EC2, Azure VMs.
- **PaaS** (Platform as a Service): Provider manages infrastructure + OS + runtime. Customer manages applications and data. Example: Heroku, Google App Engine.
- **SaaS** (Software as a Service): Provider manages everything. Customer just uses the application. Example: Microsoft 365, Salesforce, Dropbox.

**Cloud Deployment Models:**
- **Public cloud**: Resources shared among multiple tenants (AWS, Azure, GCP)
- **Private cloud**: Dedicated infrastructure for one organization
- **Hybrid cloud**: Mix of on-premises and public cloud
- **Community cloud**: Shared among organizations with common concerns (government, healthcare)

**Key cloud networking terms:**
- **VPC** (Virtual Private Cloud): Isolated virtual network in a public cloud
- **SDN** (Software-Defined Networking): Decouples control plane from data plane
- **NFV** (Network Functions Virtualization): Virtualizes network services (firewalls, load balancers)`,
      },
    ],
  },

  {
    id: 'nplus-sg2',
    domain: 1,
    title: 'IP Addressing & Subnetting',
    summary:
      'IP addressing and subnetting are among the most heavily tested topics on Network+. Master binary-to-decimal conversion, private ranges, CIDR notation, and subnet calculations.',
    topics: [
      {
        id: 'nplus-sg2-1',
        title: 'IPv4 Addressing Fundamentals',
        content: `An IPv4 address is a **32-bit** number written as four octets in dotted-decimal notation (e.g., \`192.168.1.100\`).

**Address Classes (legacy, but still tested):**

| Class | First Octet Range | Default Mask | Networks / Hosts |
|-------|-------------------|--------------|-----------------|
| A | 1 – 126 | /8 (255.0.0.0) | 126 networks / 16M+ hosts |
| B | 128 – 191 | /16 (255.255.0.0) | 16,384 networks / 65,534 hosts |
| C | 192 – 223 | /24 (255.255.255.0) | 2M+ networks / 254 hosts |
| D | 224 – 239 | Multicast | N/A |
| E | 240 – 255 | Reserved/Experimental | N/A |

Note: 127.x.x.x is reserved for **loopback** (127.0.0.1 = localhost).

**Private Address Ranges (RFC 1918):**
- \`10.0.0.0/8\` — Class A private (10.0.0.0 – 10.255.255.255)
- \`172.16.0.0/12\` — Class B private (172.16.0.0 – 172.31.255.255)
- \`192.168.0.0/16\` — Class C private (192.168.0.0 – 192.168.255.255)

**Special addresses:**
- \`169.254.0.0/16\` — APIPA (link-local, assigned when DHCP fails)
- \`0.0.0.0\` — This host (used in DHCP discovery)
- \`255.255.255.255\` — Limited broadcast`,
      },
      {
        id: 'nplus-sg2-2',
        title: 'Subnetting Calculations',
        content: `Subnetting divides a network into smaller broadcast domains. The **subnet mask** determines which bits are the network portion vs. host portion.

**Powers of 2 to memorize:**
\`2^1=2, 2^2=4, 2^3=8, 2^4=16, 2^5=32, 2^6=64, 2^7=128, 2^8=256\`

**CIDR Prefix to Subnet Mask:**
| CIDR | Subnet Mask | Block Size | Usable Hosts |
|------|-------------|-----------|--------------|
| /24 | 255.255.255.0 | 256 | 254 |
| /25 | 255.255.255.128 | 128 | 126 |
| /26 | 255.255.255.192 | 64 | 62 |
| /27 | 255.255.255.224 | 32 | 30 |
| /28 | 255.255.255.240 | 16 | 14 |
| /29 | 255.255.255.248 | 8 | 6 |
| /30 | 255.255.255.252 | 4 | 2 |

**Subnetting steps:**
1. Determine block size = 256 - last non-255 octet of subnet mask
2. Network address = first address in the block containing the host IP
3. Broadcast = last address in the block
4. Usable hosts = Block size - 2

**Example:** Host \`192.168.1.200/26\`
- Block size: 256 - 192 = 64
- Subnet boundaries: .0, .64, .128, .192, .256
- Network: 192.168.1.192
- Broadcast: 192.168.1.255
- Usable: .193 – .254 (62 hosts)`,
      },
      {
        id: 'nplus-sg2-3',
        title: 'IPv6 Addressing',
        content: `IPv6 uses **128-bit** addresses written as 8 groups of 4 hexadecimal digits separated by colons.

Example: \`2001:0DB8:0000:0000:0000:0000:0000:0001\`

**Abbreviation rules:**
1. Omit leading zeros in each group: \`2001:DB8:0:0:0:0:0:1\`
2. Replace one consecutive series of all-zero groups with \`::\`: \`2001:DB8::1\`
   (:: can only be used once in an address)

**IPv6 Address Types:**

| Type | Prefix | Description |
|------|--------|-------------|
| Global Unicast | 2000::/3 | Public routable (equivalent to public IPv4) |
| Unique Local | fc00::/7 | Private (equivalent to RFC 1918) |
| Link-Local | fe80::/10 | Non-routable, single link (auto-assigned) |
| Loopback | ::1/128 | Equivalent to 127.0.0.1 |
| Multicast | ff00::/8 | One-to-many |
| Anycast | (from unicast space) | One-to-nearest-of-many |

**IPv6 does NOT use broadcast** — multicast replaces broadcast functions.

**SLAAC** (Stateless Address Autoconfiguration): Host generates its own IPv6 address using the network prefix from Router Advertisements + a 64-bit interface ID (derived from MAC or random). No DHCP server required.

**Transition technologies:** Dual-stack (IPv4 + IPv6 simultaneously), 6to4 tunneling, Teredo, NAT64.`,
      },
    ],
  },

  {
    id: 'nplus-sg3',
    domain: 1,
    title: 'Common Ports & Protocols',
    summary:
      'Memorizing key port numbers and protocol characteristics is essential for the Network+ exam. These appear in questions about firewall rules, troubleshooting, and protocol selection.',
    topics: [
      {
        id: 'nplus-sg3-1',
        title: 'Well-Known Ports Reference',
        content: `**TCP Ports:**

| Port | Protocol | Description |
|------|----------|-------------|
| 20 | FTP-Data | File Transfer (data channel) |
| 21 | FTP-Control | File Transfer (command channel) |
| 22 | SSH | Secure Shell — encrypted remote access |
| 23 | Telnet | Unencrypted remote access (avoid!) |
| 25 | SMTP | Send email (server-to-server) |
| 80 | HTTP | Web traffic (unencrypted) |
| 110 | POP3 | Download email from server (deletes from server) |
| 143 | IMAP | Email access (keeps messages on server) |
| 389 | LDAP | Directory services |
| 443 | HTTPS | Encrypted web traffic (HTTP over TLS) |
| 445 | SMB | Windows file sharing |
| 636 | LDAPS | LDAP over SSL |
| 3389 | RDP | Remote Desktop Protocol |

**UDP Ports:**

| Port | Protocol | Description |
|------|----------|-------------|
| 53 | DNS | Name resolution (also TCP for zone transfers) |
| 67 | DHCP Server | Server listens for client requests |
| 68 | DHCP Client | Client listens for server offers |
| 69 | TFTP | Trivial File Transfer (no auth, simple) |
| 123 | NTP | Network Time Protocol — time sync |
| 161 | SNMP | Network management queries |
| 162 | SNMP Trap | Unsolicited device notifications |
| 514 | Syslog | Log forwarding |`,
      },
      {
        id: 'nplus-sg3-2',
        title: 'Email Protocols',
        content: `**SMTP (Simple Mail Transfer Protocol) — TCP 25:**
Used to send email between mail servers and from email clients to servers. Not designed for retrieving mail.

**POP3 (Post Office Protocol v3) — TCP 110:**
Downloads email from the server and typically deletes it from the server. Best for a single device. Encrypted version: POP3S (TCP 995).

**IMAP (Internet Message Access Protocol) — TCP 143:**
Accesses email stored on the server without deleting it. Supports multiple devices and folder synchronization. Encrypted version: IMAPS (TCP 993).

**Exam tip:** SMTP = **Send**; POP3 = **Pull** (and deletes); IMAP = **Interactive** (leaves on server)`,
      },
      {
        id: 'nplus-sg3-3',
        title: 'DNS Operation',
        content: `**DNS (Domain Name System)** resolves human-readable hostnames to IP addresses.

**Record Types:**
- \`A\` — Maps hostname to IPv4 address
- \`AAAA\` — Maps hostname to IPv6 address
- \`CNAME\` — Alias (Canonical Name) — points one name to another
- \`MX\` — Mail Exchange — identifies mail servers for a domain
- \`NS\` — Name Server — identifies authoritative DNS servers for a zone
- \`PTR\` — Reverse lookup — maps IP to hostname
- \`SOA\` — Start of Authority — zone metadata
- \`TXT\` — Text records — used for SPF, DKIM, domain verification

**DNS Resolution Process:**
1. Client checks local cache (recently resolved)
2. Checks local hosts file
3. Queries configured DNS server (recursive resolver)
4. Resolver checks its cache; if miss, queries root DNS servers
5. Root refers to TLD (.com) nameservers
6. TLD refers to authoritative nameservers for the domain
7. Authoritative server returns the IP address
8. Result cached at resolver and returned to client

**DNS uses UDP 53 for queries; TCP 53 for zone transfers and large responses.**`,
      },
    ],
  },

  {
    id: 'nplus-sg4',
    domain: 2,
    title: 'Switching & VLANs',
    summary:
      'Layer 2 switching, VLANs, and Spanning Tree Protocol are core Network Implementation topics. These concepts appear heavily on the exam and are critical in real-world network administration.',
    topics: [
      {
        id: 'nplus-sg4-1',
        title: 'How Switches Work',
        content: `Switches operate at **Layer 2 (Data Link)** and forward frames based on **MAC addresses**.

**Switch MAC Address Learning Process:**
1. A frame arrives on a port
2. The switch records the **source MAC address** and the **ingress port** in its MAC address table (CAM table)
3. The switch looks up the **destination MAC** in the CAM table:
   - **Found**: Forward the frame out only the correct port (unicast forwarding)
   - **Not found**: **Flood** the frame out all ports except the source port (unknown unicast flooding)
4. If destination is a **broadcast** (FF:FF:FF:FF:FF:FF): Flood all ports except source

**Key switch terms:**
- **CAM table** (Content Addressable Memory): MAC address table
- **Access port**: Port assigned to a single VLAN (connects end devices)
- **Trunk port**: Port carrying multiple VLANs using 802.1Q tagging (connects switches, routers)
- **SVI** (Switched Virtual Interface): Layer 3 interface on a switch for routing between VLANs`,
      },
      {
        id: 'nplus-sg4-2',
        title: 'VLANs & Trunking',
        content: `**VLANs** (Virtual Local Area Networks) logically segment a network at Layer 2, creating separate broadcast domains without requiring separate physical switches.

**Benefits of VLANs:**
- **Security**: Isolate departments (finance, HR, engineering)
- **Reduce broadcast traffic**: Broadcasts stay within the VLAN
- **Flexibility**: Move users between VLANs in software
- **Simplified management**: Group users by function, not location

**802.1Q Trunking:**
Trunk links carry traffic for multiple VLANs between switches. IEEE 802.1Q inserts a **4-byte tag** into the Ethernet frame containing a 12-bit VLAN ID.

- **Tagged frames**: Carry an 802.1Q VLAN tag (trunk port traffic)
- **Untagged frames**: No VLAN tag; placed in the **native VLAN** (default VLAN 1)
- **Native VLAN**: The VLAN assigned to untagged traffic on a trunk. Best practice: change from VLAN 1 to an unused VLAN.

**Inter-VLAN Routing** — Traffic between VLANs requires a Layer 3 device:
- **Router-on-a-stick**: Single router interface with multiple subinterfaces (one per VLAN), each tagged with 802.1Q
- **Layer 3 switch**: Uses SVIs (Switched Virtual Interfaces) to route between VLANs internally — much faster than router-on-a-stick`,
      },
      {
        id: 'nplus-sg4-3',
        title: 'Spanning Tree Protocol (STP)',
        content: `**STP (IEEE 802.1D)** prevents Layer 2 loops that would cause **broadcast storms** (frames circulating forever, consuming all bandwidth).

**STP Operation:**
1. **Root Bridge Election**: The switch with the lowest **Bridge ID** (priority + MAC) becomes root. Default priority = 32768.
2. **Root Port**: Each non-root switch selects one port with the best path (lowest cost) to the root bridge.
3. **Designated Port**: Each network segment has one designated port (the one closest to root). The root bridge's ports are always designated.
4. **Blocked Ports**: All other redundant ports are placed in blocking state.

**STP Port States:**
- \`Blocking\` → \`Listening\` (15 sec) → \`Learning\` (15 sec) → \`Forwarding\`
- Total convergence time: ~30-50 seconds (slow!)

**RSTP (802.1w)** — Rapid Spanning Tree: Converges in ~1-2 seconds. Adds edge ports (like PortFast) and alternate/backup port roles. **Backwards compatible with STP.**

**Key STP features:**
- **PortFast**: Skips listening/learning; immediate forwarding for end-device ports. Never enable on switch-to-switch links!
- **BPDU Guard**: Shuts down a PortFast-enabled port if a BPDU is received (prevents rogue switches)
- **Root Guard**: Prevents a port from becoming a root port (protects root bridge placement)
- **Loop Guard**: Prevents a blocked port from transitioning to forwarding if BPDUs stop`,
      },
    ],
  },

  {
    id: 'nplus-sg5',
    domain: 2,
    title: 'Wireless Networking',
    summary:
      'Wireless networking is a significant Domain 2 topic. Know the 802.11 standards, frequencies, security protocols, and common deployment configurations for the exam.',
    topics: [
      {
        id: 'nplus-sg5-1',
        title: '802.11 Wireless Standards',
        content: `| Standard | Wi-Fi Generation | Frequency | Max Speed | Key Features |
|----------|-----------------|-----------|-----------|--------------|
| 802.11a | (legacy) | 5 GHz | 54 Mbps | First 5 GHz standard; less range |
| 802.11b | (legacy) | 2.4 GHz | 11 Mbps | First widely adopted Wi-Fi |
| 802.11g | (legacy) | 2.4 GHz | 54 Mbps | Backwards compatible with b |
| 802.11n | Wi-Fi 4 | 2.4/5 GHz | 600 Mbps | First MIMO, dual-band |
| 802.11ac | Wi-Fi 5 | 5 GHz only | ~3.5 Gbps | MU-MIMO, wider channels (80/160 MHz) |
| 802.11ax | Wi-Fi 6 | 2.4/5 GHz | ~9.6 Gbps | OFDMA, 8x8 MU-MIMO, BSS Coloring, TWT |
| 802.11ax | Wi-Fi 6E | 2.4/5/6 GHz | ~9.6 Gbps | Adds 6 GHz band |

**2.4 GHz vs. 5 GHz:**
- **2.4 GHz**: Better range, more penetration through walls, but more congested (3 non-overlapping channels: 1, 6, 11)
- **5 GHz**: Shorter range, less interference, more non-overlapping channels (24+), faster

**Key wireless terms:**
- **SSID**: The broadcast name of a wireless network
- **BSS** (Basic Service Set): A single AP and its connected clients
- **ESS** (Extended Service Set): Multiple APs sharing the same SSID (roaming)
- **Ad hoc/IBSS**: Peer-to-peer wireless (no AP)
- **WPS** (Wi-Fi Protected Setup): PIN/button setup — vulnerable, disable when possible`,
      },
      {
        id: 'nplus-sg5-2',
        title: 'Wireless Security',
        content: `**WEP (Wired Equivalent Privacy)** — Legacy, **broken**, never use
- RC4 encryption with static keys; easily cracked in minutes
- Not compliant with current security standards

**WPA (Wi-Fi Protected Access)** — Legacy, use only if WPA2/3 unavailable
- TKIP encryption; RC4 based; considered insecure

**WPA2 (Wi-Fi Protected Access 2)** — Current minimum standard
- Uses **CCMP/AES** encryption (much stronger than TKIP)
- **Personal (PSK)**: Pre-shared key — all users share one password
- **Enterprise (802.1X)**: Each user authenticates individually using RADIUS
- Vulnerable to KRACK attacks and offline dictionary attacks against PSK

**WPA3** — Current best practice (2018+)
- **SAE** (Simultaneous Authentication of Equals): Replaces PSK, prevents offline dictionary attacks, provides **forward secrecy** (compromising one session doesn't expose others)
- **OWE** (Opportunistic Wireless Encryption): Encrypts open networks
- **PMF** (Protected Management Frames): Required — prevents deauthentication attacks
- **192-bit security mode** for WPA3-Enterprise

**Wireless attack types:**
- **Evil twin**: Rogue AP with same SSID as legitimate AP
- **Deauthentication flood**: Sends spoofed deauth frames to disconnect clients
- **War driving**: Driving around discovering wireless networks
- **Disassociation attack**: Forces clients to reconnect (enables sniffing)`,
      },
      {
        id: 'nplus-sg5-3',
        title: 'Wireless Channels & Interference',
        content: `**2.4 GHz Channels:**
The 2.4 GHz band has 11 channels in the US (14 globally). Each channel is 22 MHz wide, but channels are spaced only 5 MHz apart — so most overlap. **Only channels 1, 6, and 11 are non-overlapping.**

**5 GHz Channels:**
The 5 GHz band has many more non-overlapping channels (24+ in the US). More channels allow high-density deployments with less interference.

**Channel bonding:**
- 802.11n: 40 MHz wide channels (two 20 MHz channels bonded)
- 802.11ac: 80 or 160 MHz wide channels
- 802.11ax: 80 or 160 MHz wide channels
- Wider channels = more throughput but fewer non-overlapping channels

**Sources of 2.4 GHz interference:**
- Microwave ovens
- Cordless phones (2.4 GHz models)
- Bluetooth devices
- Baby monitors
- Other Wi-Fi networks (co-channel and adjacent-channel interference)

**Site survey**: Process of measuring signal strength, noise, and interference throughout a coverage area to optimize AP placement and channel selection. Tools: spectrum analyzer, Wi-Fi analyzer apps.`,
      },
    ],
  },

  {
    id: 'nplus-sg6',
    domain: 4,
    title: 'Network Security Fundamentals',
    summary:
      'Network security is Domain 4 and covers a wide range of defensive technologies, attack types, and authentication mechanisms. This guide covers the key concepts tested on the N10-009 exam.',
    topics: [
      {
        id: 'nplus-sg6-1',
        title: 'Firewall Types & ACLs',
        content: `**Packet Filter Firewall (Stateless):**
- Inspects each packet independently using rules (ACLs)
- Matches on source/destination IP, port, and protocol
- Cannot track connection state — must allow return traffic explicitly
- Simple and fast, but provides limited security

**Stateful Inspection Firewall:**
- Maintains a **state table** of active TCP/UDP connections
- Automatically allows return traffic for established sessions
- More intelligent than packet filters — can detect session hijacking
- Most common enterprise firewall type

**Application-Layer / Proxy Firewall:**
- Acts as an intermediary (proxy) between clients and servers
- Terminates and re-establishes connections
- Can inspect application-layer data (HTTP content, URLs, file types)
- Slower than packet filters due to processing overhead

**NGFW (Next-Generation Firewall):**
- Combines stateful inspection + DPI (Deep Packet Inspection)
- Application awareness (identifies apps regardless of port)
- Integrated IPS (Intrusion Prevention)
- SSL/TLS inspection (decrypt, inspect, re-encrypt HTTPS traffic)
- Identity-based policies (user/group-based rules)
- Threat intelligence feeds

**ACLs (Access Control Lists):**
- Rules that permit or deny traffic based on criteria (IP, port, protocol)
- Processed **top-down** — first match wins
- Always end with an implicit **deny all** (deny any any)
- **Standard ACL**: Filters on source IP only
- **Extended ACL**: Filters on source/destination IP, protocol, and ports`,
      },
      {
        id: 'nplus-sg6-2',
        title: 'Authentication & AAA',
        content: `**AAA Framework:**
- **Authentication**: Who are you? (username/password, certificates, biometrics)
- **Authorization**: What are you allowed to do? (access policies, permissions)
- **Accounting**: What did you do? (logs, audit trails)

**RADIUS (Remote Authentication Dial-In User Service):**
- UDP ports 1812 (authentication) and 1813 (accounting)
- Encrypts only the **password** in the packet
- Combines authentication and authorization in one step
- Open standard — supported by almost all vendors
- Best for **network access** (Wi-Fi, VPN authentication)

**TACACS+ (Terminal Access Controller Access Control System Plus):**
- **TCP port 49** — more reliable than UDP
- Encrypts the **entire packet body** — more secure
- Separates authentication, authorization, and accounting (full AAA)
- Cisco-proprietary
- Best for **device administration** (managing routers, switches via CLI)

**Kerberos:**
- Ticket-based SSO authentication using a **KDC** (Key Distribution Center)
- UDP/TCP port 88
- Default authentication in Microsoft Active Directory
- Process: Client → TGT from KDC → Service Ticket → Access resource
- Prevents replay attacks using timestamps

**MFA (Multi-Factor Authentication):**
- Something you know (password)
- Something you have (token, smart card, phone)
- Something you are (biometric: fingerprint, retina)
- Somewhere you are (geo-location)
- Something you do (behavioral biometrics)`,
      },
      {
        id: 'nplus-sg6-3',
        title: 'Common Network Attacks',
        content: `**DoS & DDoS:**
- **DoS** (Denial of Service): Single source overwhelms a target
- **DDoS** (Distributed DoS): Coordinated attack from many sources (botnet)
- **SYN Flood**: Sends many SYN packets without completing handshake, exhausting server connection table. Mitigation: SYN cookies.
- **Amplification attack**: Attacker spoofs victim IP, sends small request to reflectors (DNS/NTP servers) that send large responses to victim

**Man-in-the-Middle (MitM) Attacks:**
- **ARP Poisoning/Spoofing**: Sends fake ARP replies to poison caches; attacker intercepts traffic between two hosts. Mitigation: DAI (Dynamic ARP Inspection).
- **DHCP Spoofing**: Rogue DHCP server assigns incorrect gateway, DNS, leading clients to attacker. Mitigation: DHCP Snooping.

**VLAN Attacks:**
- **VLAN Hopping**: Switch spoofing (attacker forms trunk) or double tagging (nested 802.1Q tags). Mitigation: Disable DTP, change native VLAN, use explicit trunk configuration.
- **MAC Flooding**: Fills CAM table with fake MACs, causing switch to flood all frames. Mitigation: Port security.

**Social Engineering:**
- **Phishing**: Fraudulent emails to steal credentials
- **Vishing**: Voice phishing (phone calls)
- **Smishing**: SMS phishing

**Mitigation strategies:**
- \`DAI\` — Prevents ARP poisoning
- \`DHCP Snooping\` — Prevents rogue DHCP servers
- \`Port Security\` — Limits MACs per port
- \`802.1X\` — Prevents unauthorized device access
- \`ACLs\` — Restricts traffic flows
- \`IPS\` — Detects and blocks known attack signatures`,
      },
      {
        id: 'nplus-sg6-4',
        title: 'VPN Technologies',
        content: `**VPN Types:**
- **Site-to-site VPN**: Connects two network sites (e.g., branch to HQ). Always-on, transparent to users. Uses VPN gateways at each end.
- **Remote access VPN**: Individual user connects securely from remote location. Client software establishes the tunnel.
- **SSL/TLS VPN**: Uses TCP 443; works through firewalls; clientless option (browser-based) available.
- **IPsec VPN**: Most common enterprise VPN standard.

**IPsec Components:**
- **AH** (Authentication Header — Protocol 51): Provides integrity + authentication; **NO encryption**. Cannot traverse NAT.
- **ESP** (Encapsulating Security Payload — Protocol 50): Provides **encryption + authentication + integrity**. Can traverse NAT (NAT-T, UDP 4500).
- **IKE** (Internet Key Exchange): Negotiates security associations (SAs). Phase 1: establishes secure channel (ISAKMP SA). Phase 2: negotiates IPsec SA.

**IPsec Modes:**
- **Transport mode**: Only the payload is encrypted; original IP header preserved. Used for host-to-host VPN.
- **Tunnel mode**: Entire original packet is encrypted and encapsulated in a new IP packet. Used for site-to-site VPN.

**Split tunneling:**
- **Enabled**: Internet traffic goes directly to the internet; only corporate traffic through VPN. Conserves VPN bandwidth.
- **Disabled** (full tunnel): ALL traffic goes through VPN. More secure but uses more VPN bandwidth and may slow internet access.`,
      },
    ],
  },

  {
    id: 'nplus-sg7',
    domain: 5,
    title: 'Network Troubleshooting Methodology',
    summary:
      'Network troubleshooting is the largest domain on the Network+ exam (22%). Know the 7-step CompTIA methodology, common tools, and how to interpret their output.',
    topics: [
      {
        id: 'nplus-sg7-1',
        title: 'CompTIA 7-Step Troubleshooting Methodology',
        content: `**Step 1: Identify the Problem**
- Gather information: Talk to users, review error messages, check logs
- Identify symptoms: What is failing? When did it start? What changed?
- Duplicate the problem if possible
- Identify affected systems and scope

**Step 2: Establish a Theory of Probable Cause**
- Consider multiple theories starting with the most likely
- Approaches:
  - **Top-down**: Start at Application layer and work down to Physical
  - **Bottom-up**: Start at Physical layer and work up
  - **Divide and conquer**: Start at a middle layer based on evidence
- Question the obvious ("Is it plugged in?")

**Step 3: Test the Theory to Determine the Cause**
- Use tools (ping, traceroute, cable tester) to confirm or refute theory
- If theory confirmed: move to Step 4
- If theory NOT confirmed: establish a new theory or escalate

**Step 4: Establish a Plan of Action and Identify Potential Effects**
- Determine how to fix the problem
- Consider impact on other systems
- Plan a rollback if needed
- Schedule maintenance window if appropriate

**Step 5: Implement the Solution or Escalate**
- Apply the fix
- If unable to resolve: escalate to appropriate level (Tier 2, vendor support)

**Step 6: Verify Full System Functionality**
- Confirm the original problem is resolved
- Check that the fix didn't break anything else
- Implement preventive measures

**Step 7: Document Findings, Actions, and Outcomes**
- Update knowledge base / ticketing system
- Record root cause, solution, and lessons learned
- Update network documentation if topology changed`,
      },
      {
        id: 'nplus-sg7-2',
        title: 'Command-Line Troubleshooting Tools',
        content: `**ping**
Tests basic ICMP connectivity. Key options:
- \`ping <IP>\` — Basic test
- \`ping 127.0.0.1\` — Test local TCP/IP stack
- \`ping -t <IP>\` (Windows) — Continuous ping
- \`ping -c 4 <IP>\` (Linux) — Send 4 packets

**traceroute / tracert**
Identifies path and latency to destination hop by hop. A \`* * *\` at a hop means ICMP was blocked at that router (not necessarily a fault).

**nslookup**
Queries DNS. Useful commands:
- \`nslookup hostname\` — Forward lookup
- \`nslookup IP\` — Reverse lookup
- \`nslookup hostname server_IP\` — Query specific DNS server
- \`set type=MX\` — Query mail records

**netstat**
Displays active connections and listening ports:
- \`netstat -an\` — All connections/ports (numeric)
- \`netstat -rn\` — Routing table
- \`netstat -s\` — Statistics per protocol

**ipconfig / ifconfig**
- \`ipconfig\` (Windows): Shows IP, mask, gateway per adapter
- \`ipconfig /all\` — Shows MAC, DNS, DHCP server, lease info
- \`ipconfig /release\` — Releases DHCP lease
- \`ipconfig /renew\` — Requests new DHCP lease
- \`ipconfig /flushdns\` — Clears DNS cache

**arp -a**
Displays the local ARP cache (IP-to-MAC mappings).

**route print / ip route**
Displays the local routing table.`,
      },
      {
        id: 'nplus-sg7-3',
        title: 'Hardware Troubleshooting Tools',
        content: `**Cable Tester:**
Verifies copper cable integrity. Tests for:
- Continuity (all 8 pins connected)
- Correct pin-out (T568A or T568B wiring standard)
- Opens (broken wire)
- Shorts (two wires touching)
- Crossed pairs or split pairs

**TDR (Time-Domain Reflectometer):**
Sends a signal down a copper cable and measures the time for reflections to return. Calculates the **exact distance to a fault** (break, short, impedance mismatch). More advanced than a basic cable tester.

**OTDR (Optical Time-Domain Reflectometer):**
The fiber optic equivalent of a TDR. Measures backscattered light to:
- Locate faults (breaks, bends, bad splices)
- Measure attenuation and insertion loss
- Identify connector locations
- Certify fiber links meet specifications
Output is a graphical trace (distance vs. loss)

**Toner Probe (Fox and Hound):**
A two-piece tool:
1. **Tone generator**: Connected to one end of a cable, emits a tone
2. **Inductive amplifier (probe)**: Held near cables to detect the tone — identifies which cable/port a run terminates at

**Multimeter:**
Measures voltage, current, and resistance. Useful for:
- Checking PoE voltage
- Testing cable continuity (resistance)
- Verifying power at outlets

**Spectrum Analyzer:**
Measures RF signal strength across frequency bands. Essential for wireless site surveys to identify interference sources and channel utilization.

**Wireshark:**
Protocol analyzer that captures and decodes network frames. Key features:
- Display filters: \`ip.addr == 192.168.1.1\`, \`tcp.port == 443\`, \`http\`
- Follow TCP stream: View full conversation in readable form
- Statistics → Protocol Hierarchy: See what protocols are on the wire
- Statistics → IO Graph: Visualize traffic over time`,
      },
      {
        id: 'nplus-sg7-4',
        title: 'Common Troubleshooting Scenarios',
        content: `**APIPA Address (169.254.x.x):**
- Cause: Host failed to receive DHCP lease
- Check: Is the DHCP server running? Is the network path to DHCP server working? Is the DHCP scope exhausted?
- Fix: Restart DHCP service, renew lease (\`ipconfig /renew\`), check scope, check firewall rules

**Duplex Mismatch:**
- Symptoms: Link up but very slow, high collision counters, CRC errors
- Cause: One side hard-coded (e.g., full-duplex), other side auto-negotiates to half-duplex
- Fix: Set both sides to the same speed/duplex (best practice: auto/auto on both ends)

**Wrong Default Gateway:**
- Symptoms: Can reach local subnet hosts but cannot reach remote networks or internet
- Check: \`ipconfig /all\` — verify gateway is correct
- Fix: Correct the gateway configuration (DHCP scope option or static config)

**DNS Resolution Failure:**
- Symptoms: Can ping by IP but not by name
- Check: \`ipconfig /all\` — verify DNS server address; \`nslookup\` to test DNS; \`ipconfig /flushdns\`
- Fix: Correct DNS server address, restart DNS service, check for DNS server reachability

**Physical layer issues:**
- Symptoms: No link light, intermittent connectivity, slow speeds
- Check: Cable, SFP/transceiver, port, interface error counters (CRC, input errors, output drops)
- Tools: Cable tester, TDR, check interface statistics on switch

**Routing issues:**
- Symptoms: Cannot reach specific subnets
- Check: \`tracert\` to see where the path fails; verify routing tables on routers; check ACLs
- Tools: ping, traceroute, \`show ip route\` on Cisco devices`,
      },
    ],
  },
];
