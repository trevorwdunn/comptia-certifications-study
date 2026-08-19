// 3CX Self-Hosted (v20) Flashcards
// Domains: 1=Architecture & Planning, 2=Installation & Initial Setup,
//          3=Trunks, Numbers & Call Flow, 4=Endpoints, Clients & Users,
//          5=Security, Backup & Maintenance

export const flashcards = [
  // ─── DOMAIN 1: ARCHITECTURE & PLANNING ───────────────────────────────────

  {
    id: 'threecx-fc-001',
    domain: 1,
    term: 'Self-hosted vs. 3CX Hosted',
    definition:
      'Self-hosted means you supply the hardware, Debian OS, network, and ongoing maintenance; 3CX supplies software and licensing. Hosted means 3CX runs the instance. Self-hosting trades operational work for control and data locality.',
  },
  {
    id: 'threecx-fc-002',
    domain: 1,
    term: 'Supported OS (v20)',
    definition:
      'Debian 12 (Bookworm), 64-bit, on a dedicated machine. Windows is no longer a platform for new installs, and older Debian releases are unsupported.',
  },
  {
    id: 'threecx-fc-003',
    domain: 1,
    term: 'Minimum sizing',
    definition:
      'Roughly 2 vCPU and 2 GB RAM as a floor, scaled up for simultaneous calls, active Web Client sessions, and call recording. On shared-CPU hosts, allocate at least two cores.',
  },
  {
    id: 'threecx-fc-004',
    domain: 1,
    term: 'Why a dedicated server',
    definition:
      '3CX installs and manages its own Nginx reverse proxy and PostgreSQL. Sharing the host with other web applications causes port and database conflicts, and updates can overwrite shared configuration.',
  },
  {
    id: 'threecx-fc-005',
    domain: 1,
    term: 'Network prerequisites (on-prem)',
    definition:
      'A properly configured RFC 1918 private network (10/8, 172.16/12, 192.168/16), a static private IP for the PBX, and a dedicated public IP mapped to it for external services.',
  },
  {
    id: 'threecx-fc-006',
    domain: 1,
    term: 'Why a dedicated public IP',
    definition:
      'Sharing the public address forces port conflicts and inconsistent NAT translation for SIP and RTP, which surfaces as failed registration or one-way audio. 3CX expects predictable, dedicated mappings.',
  },
  {
    id: 'threecx-fc-007',
    domain: 1,
    term: 'FQDN',
    definition:
      'The fully qualified name clients, apps, and phones connect to, and the name on the TLS certificate. It is embedded in provisioning, so changing it later means re-provisioning endpoints.',
  },
  {
    id: 'threecx-fc-008',
    domain: 1,
    term: 'Licensing model',
    definition:
      'Licensed per system and sized by simultaneous calls rather than by extension count. Editions differ in features; confirm current tiers on the 3CX pricing page, which changed in 2026.',
  },
  {
    id: 'threecx-fc-009',
    domain: 1,
    term: 'Simultaneous calls vs. users',
    definition:
      'Extensions are effectively unlimited within an edition; the license caps how many calls run at once. Sizing therefore depends on concurrency, commonly a fraction of headcount.',
  },
  {
    id: 'threecx-fc-010',
    domain: 1,
    term: 'Number porting lead time',
    definition:
      'Porting is controlled by the losing carrier and cannot be rushed. It is the long pole in nearly every migration, so it drives the cutover schedule and must be started early.',
  },

  // ─── DOMAIN 2: INSTALLATION & INITIAL SETUP ──────────────────────────────

  {
    id: 'threecx-fc-011',
    domain: 2,
    term: 'Install sequence (Debian)',
    definition:
      'Prepare Debian 12 with a static IP → add the 3CX signing key and repository → apt update → install the 3cxpbx package → run the web configuration wizard on port 5015.',
  },
  {
    id: 'threecx-fc-012',
    domain: 2,
    term: 'Port 5015',
    definition:
      'The initial web configuration wizard. Needed only during setup, and should be closed to the outside world once installation is complete.',
  },
  {
    id: 'threecx-fc-013',
    domain: 2,
    term: '3CXWizard cleanup',
    definition:
      'Running the wizard binary with its cleanup option resets partial setup state so the configuration wizard can be started again without rebuilding the server.',
  },
  {
    id: 'threecx-fc-014',
    domain: 2,
    term: 'SIP signaling ports',
    definition:
      '5060 UDP and 5060-5061 TCP, with 5061 used for TLS-secured signaling. Signaling establishes the call; it does not carry audio.',
  },
  {
    id: 'threecx-fc-015',
    domain: 2,
    term: 'RTP port range',
    definition:
      'UDP 9000-10999 carries the audio. Each call consumes a pair of ports, so the open range must exceed twice the expected simultaneous call count.',
  },
  {
    id: 'threecx-fc-016',
    domain: 2,
    term: 'Port 5090 (tunnel)',
    definition:
      'The 3CX tunnel multiplexes SIP and RTP through a single port for remote apps and SBCs, avoiding a wide RTP range toward remote sites.',
  },
  {
    id: 'threecx-fc-017',
    domain: 2,
    term: 'Management / Web Client port',
    definition:
      'HTTPS on 443 or a custom port, commonly 5001. This is the ongoing admin and user access path — distinct from the one-time setup wizard on 5015.',
  },
  {
    id: 'threecx-fc-018',
    domain: 2,
    term: 'Firewall Checker',
    definition:
      'Built-in test that validates port forwarding and NAT from outside the network. Run it before go-live — it catches the misconfigurations that otherwise appear as one-way audio on day one.',
  },
  {
    id: 'threecx-fc-019',
    domain: 2,
    term: 'SIP ALG',
    definition:
      'A router "helper" that rewrites SIP packets and routinely breaks registration and audio. Disabling SIP ALG is a standard step on consumer and small-business firewalls.',
  },
  {
    id: 'threecx-fc-020',
    domain: 2,
    term: 'Time synchronization',
    definition:
      'NTP is required: skewed clocks break TLS certificate validation, misorder call detail records, and make cross-system troubleshooting unreliable.',
  },

  // ─── DOMAIN 3: TRUNKS, NUMBERS & CALL FLOW ───────────────────────────────

  {
    id: 'threecx-fc-021',
    domain: 3,
    term: 'SIP trunk',
    definition:
      'The connection to the carrier that carries calls to and from the PSTN. Authenticated either by registration credentials or by the PBX public IP address.',
  },
  {
    id: 'threecx-fc-022',
    domain: 3,
    term: 'Registration vs. IP authentication',
    definition:
      'Registration trunks authenticate with a username and password. IP-authenticated trunks trust the source address, which requires a static public IP shared with the carrier in advance.',
  },
  {
    id: 'threecx-fc-023',
    domain: 3,
    term: 'DID / inbound rule',
    definition:
      'Maps a specific inbound number to a destination — extension, ring group, queue, or IVR. A registered trunk with calls going nowhere almost always means a missing or mismatched DID rule.',
  },
  {
    id: 'threecx-fc-024',
    domain: 3,
    term: 'Outbound rule',
    definition:
      'Matches calls by prefix, group, or number length, selects the trunk, and applies digit manipulation so the number is presented in the format the carrier expects.',
  },
  {
    id: 'threecx-fc-025',
    domain: 3,
    term: 'Digit manipulation',
    definition:
      'Stripping or prepending digits on a route. Carriers differ on E.164, a leading 1, or bare 10-digit format — mismatches show up as some numbers failing while others work.',
  },
  {
    id: 'threecx-fc-026',
    domain: 3,
    term: 'Emergency call routing',
    definition:
      'Must route out unconditionally and present a caller ID tied to the physical address responders will be sent to. Configure it deliberately and test it — this carries legal weight.',
  },
  {
    id: 'threecx-fc-027',
    domain: 3,
    term: 'Digital Receptionist (IVR)',
    definition:
      'Plays a recorded menu and routes callers by the digit pressed. Supports time-based variants and fallback destinations for callers who press nothing.',
  },
  {
    id: 'threecx-fc-028',
    domain: 3,
    term: 'Ring group',
    definition:
      'Rings a set of extensions simultaneously or in sequence, with an overflow destination when nobody answers. Simpler than a queue and with no waiting treatment.',
  },
  {
    id: 'threecx-fc-029',
    domain: 3,
    term: 'Call queue',
    definition:
      'Holds waiting callers with a distribution strategy, music on hold, position announcements, and agent reporting. Used where callers must wait rather than be dropped to voicemail.',
  },
  {
    id: 'threecx-fc-030',
    domain: 3,
    term: 'Office hours and holidays',
    definition:
      'Business-hours schedule with separate out-of-hours routing, plus a holiday list. Holidays are the most commonly forgotten item and generate complaints on the first public holiday.',
  },
  {
    id: 'threecx-fc-031',
    domain: 3,
    term: 'One-way audio',
    definition:
      'A media path fault, not signaling — the call connected, so SIP worked. Look at NAT handling, the RTP port forward, and SIP ALG rather than at credentials.',
  },
  {
    id: 'threecx-fc-032',
    domain: 3,
    term: 'Codec bandwidth',
    definition:
      'G.711 gives best quality at roughly 64 kbps payload per direction, plus overhead. Compressed codecs such as G.729 cut bandwidth at some quality cost and must be supported end to end.',
  },

  // ─── DOMAIN 4: ENDPOINTS, CLIENTS & USERS ────────────────────────────────

  {
    id: 'threecx-fc-033',
    domain: 4,
    term: 'Auto-provisioning',
    definition:
      'The phone pulls its configuration — credentials, codecs, time, firmware policy — from the PBX rather than being configured by hand. Makes deployment repeatable and replacements fast.',
  },
  {
    id: 'threecx-fc-034',
    domain: 4,
    term: 'Provisioning across VLANs',
    definition:
      'Local discovery often depends on multicast, which does not cross VLAN boundaries. Phones on a separate voice VLAN need explicit routing or a manual provisioning URL.',
  },
  {
    id: 'threecx-fc-035',
    domain: 4,
    term: 'Session Border Controller (SBC)',
    definition:
      'Deployed at a remote site so all local phones tunnel back to the PBX over a single connection, removing per-phone firewall rules and NAT problems.',
  },
  {
    id: 'threecx-fc-036',
    domain: 4,
    term: 'Web Client',
    definition:
      'Browser-based softphone with calling, chat, and presence — no desk phone required. Remote use depends on the PBX being reachable with a valid certificate.',
  },
  {
    id: 'threecx-fc-037',
    domain: 4,
    term: 'Desktop and mobile apps',
    definition:
      'Windows softphone and iOS/Android apps register to the PBX, typically through the tunnel when off-network. Push notification behavior matters for mobile call delivery.',
  },
  {
    id: 'threecx-fc-038',
    domain: 4,
    term: 'Departments / groups',
    definition:
      'Apply permissions, office hours, and routing consistently to sets of users, so policy is managed by role rather than per person.',
  },
  {
    id: 'threecx-fc-039',
    domain: 4,
    term: 'Delegation and shared lines',
    definition:
      'Answering for a colleague is granted through extension rights, line appearances, and pickup permissions — never by sharing SIP credentials or duplicating extension numbers.',
  },
  {
    id: 'threecx-fc-040',
    domain: 4,
    term: 'Firmware standardization',
    definition:
      'Provisioning behavior and features vary between phone firmware versions. A known-good standard version keeps faults reproducible and support tractable.',
  },
  {
    id: 'threecx-fc-041',
    domain: 4,
    term: 'Voice VLAN and QoS',
    definition:
      'Separating voice traffic onto its own VLAN with QoS marking protects call quality from bulk data traffic and simplifies troubleshooting.',
  },
  {
    id: 'threecx-fc-042',
    domain: 4,
    term: 'PoE planning',
    definition:
      'Desk phones typically draw power over Ethernet. Confirm switch PoE budget covers every phone plus headroom, or plan for individual power supplies.',
  },
  {
    id: 'threecx-fc-043',
    domain: 4,
    term: 'User onboarding',
    definition:
      'A ten-minute walkthrough plus a one-page reference for transfers, hold, and voicemail prevents the majority of first-week support tickets, which are usage questions rather than faults.',
  },

  // ─── DOMAIN 5: SECURITY, BACKUP & MAINTENANCE ────────────────────────────

  {
    id: 'threecx-fc-044',
    domain: 5,
    term: 'Toll fraud',
    definition:
      'A compromised extension used to place expensive international calls, usually overnight or on weekends. Deny international dialing by default and grant it only where needed.',
  },
  {
    id: 'threecx-fc-045',
    domain: 5,
    term: 'SIP credential hygiene',
    definition:
      'Strong, unique, auto-generated extension credentials — never patterned on the extension number. Automated scanners find weak SIP passwords within hours of exposure.',
  },
  {
    id: 'threecx-fc-046',
    domain: 5,
    term: 'Anti-hacking / blacklist',
    definition:
      'Threshold-based automatic blocking of sources generating repeated failed authentication attempts, which stops the constant background scanning that internet-facing SIP attracts.',
  },
  {
    id: 'threecx-fc-047',
    domain: 5,
    term: 'Allowed country / IP restrictions',
    definition:
      'Limiting where registrations and calls may originate shrinks the attack surface substantially for clients who only operate in one region.',
  },
  {
    id: 'threecx-fc-048',
    domain: 5,
    term: 'Backup strategy',
    definition:
      'Scheduled automated backups stored off the PBX, with a periodic test restore. A backup living only on the failed server is not a backup.',
  },
  {
    id: 'threecx-fc-049',
    domain: 5,
    term: 'Recordings in backups',
    definition:
      'Call recordings dominate backup size and can push a job past its window. Retention is also a legal question in many jurisdictions, so decide policy deliberately.',
  },
  {
    id: 'threecx-fc-050',
    domain: 5,
    term: 'Update procedure',
    definition:
      'Verified backup → agreed maintenance window → update outside business hours → verify trunks, a test call in each direction, and client registration. Updates restart telephony services.',
  },
  {
    id: 'threecx-fc-051',
    domain: 5,
    term: 'OS patching responsibility',
    definition:
      'Self-hosting includes Debian security patching. This is the operational cost that distinguishes it from a hosted instance and should be stated plainly to the client up front.',
  },
  {
    id: 'threecx-fc-052',
    domain: 5,
    term: 'Monitoring signals',
    definition:
      'Trunk registration state and failed call counts are the highest-value alerts — a deregistered trunk takes the phone system down, and rising failures precede user complaints.',
  },
  {
    id: 'threecx-fc-053',
    domain: 5,
    term: 'CDRs and SIP traces',
    definition:
      'Call detail records establish what the PBX believed happened; logs add context; a SIP trace shows the exact exchange with the carrier when the two accounts disagree.',
  },
  {
    id: 'threecx-fc-054',
    domain: 5,
    term: 'Fault isolation shortcut',
    definition:
      'Internal calls working while external calls fail places the fault at the boundary — trunk, carrier, or firewall. Both failing points at the PBX or the LAN.',
  },
  {
    id: 'threecx-fc-055',
    domain: 5,
    term: 'Handover documentation',
    definition:
      'Network and addressing, FQDN, where credentials are stored, trunk and DID inventory, backup location and schedule, and the update process. Without it the next engineer reverse-engineers during an outage.',
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
