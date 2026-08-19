// 3CX Self-Hosted (v20) Practice Questions
// Domains: 1=Architecture & Planning, 2=Installation & Initial Setup,
//          3=Trunks, Numbers & Call Flow, 4=Endpoints, Clients & Users,
//          5=Security, Backup & Maintenance
//
// Written for on-premise / bring-your-own-hardware deployments on Debian 12.

export const questions = [
  // ─── DOMAIN 1: ARCHITECTURE & PLANNING ───────────────────────────────────

  {
    id: 'threecx-q-001',
    domain: 1,
    topic: 'Deployment Models',
    question:
      'A client insists on keeping their PBX on hardware in their own server room. Which 3CX deployment model applies?',
    options: [
      'Self-hosted on-premise, where the customer supplies and maintains the OS and hardware',
      '3CX Hosted, where 3CX runs the instance',
      'StartUP, which is always vendor-hosted',
      'SBC-only deployment with no PBX',
    ],
    correct: 0,
    explanation:
      'Self-hosting means you provide the Debian machine, the network, and the ongoing maintenance. 3CX supplies the software and licensing; everything below the application is yours.',
  },
  {
    id: 'threecx-q-002',
    domain: 1,
    topic: 'Operating System',
    question:
      'Which operating system is supported for a current self-hosted 3CX v20 installation?',
    options: ['Debian 12 (Bookworm), 64-bit', 'Windows Server 2019', 'Ubuntu 18.04 LTS', 'CentOS 7'],
    correct: 0,
    explanation:
      'v20 targets Debian 12 on 64-bit hardware. Windows is no longer a supported platform for new installations, and older Debian releases are out of support.',
  },
  {
    id: 'threecx-q-003',
    domain: 1,
    topic: 'Sizing',
    question:
      'Which factor increases CPU and RAM requirements the most on a 3CX server?',
    options: [
      'Call recording and a high count of active Web Client sessions',
      'The number of extensions that exist but are rarely used',
      'The number of outbound rules configured',
      'The length of the extension numbering plan',
    ],
    correct: 0,
    explanation:
      'Recording forces audio mixing and continuous disk writes, and active Web Client sessions are far more demanding than idle desk phones. Configured-but-unused objects cost almost nothing.',
  },
  {
    id: 'threecx-q-004',
    domain: 1,
    topic: 'Server Prerequisites',
    question:
      'Why does 3CX require a dedicated server rather than sharing one with other web applications?',
    options: [
      'It manages its own Nginx reverse proxy and PostgreSQL instance, which conflict with existing services',
      'It requires exclusive use of the network card',
      'Licensing forbids other software on the host',
      'It only runs when no other process is active',
    ],
    correct: 0,
    explanation:
      '3CX installs and controls its own web server and database. Another service already bound to port 443 or running PostgreSQL will collide with it, and 3CX updates can overwrite shared configuration.',
  },
  {
    id: 'threecx-q-005',
    domain: 1,
    topic: 'Network Design',
    question:
      'An on-premise 3CX server is being placed on the client network. Which addressing arrangement is correct?',
    options: [
      'A static private RFC 1918 address, with a dedicated public IP mapped to it for external services',
      'A DHCP-assigned address, changed as needed',
      'A public IP assigned directly to the server NIC on the LAN',
      'A link-local address with no gateway',
    ],
    correct: 0,
    explanation:
      'On-premise installs are supported on properly configured RFC 1918 networks. The address must be static — provisioned phones and trunks reference it — and external access requires a dedicated public IP.',
  },
  {
    id: 'threecx-q-006',
    domain: 1,
    topic: 'Network Design',
    question:
      'Why should the 3CX server not share its public IP address with other services behind the same NAT?',
    options: [
      'SIP and RTP port forwarding conflicts and NAT translation issues break call audio and registration',
      'Public IP addresses can only ever serve one device',
      'It would double the licensing cost',
      'The web client requires an unshared certificate authority',
    ],
    correct: 0,
    explanation:
      '3CX expects predictable, dedicated port mappings. Sharing the public address with other services causes port conflicts and inconsistent NAT behavior, which typically shows up as one-way audio or failed registrations.',
  },
  {
    id: 'threecx-q-007',
    domain: 1,
    topic: 'FQDN and Certificates',
    question:
      'What is the role of the FQDN chosen during 3CX setup?',
    options: [
      'It is the address clients, apps, and phones use, and the name the TLS certificate is issued for',
      'It is only a label shown in the admin console',
      'It determines the SIP trunk provider',
      'It sets the internal extension length',
    ],
    correct: 0,
    explanation:
      'The FQDN is baked into provisioning, client configuration, and the certificate. Changing it later means re-provisioning endpoints, so it is worth getting right the first time.',
  },
  {
    id: 'threecx-q-008',
    domain: 1,
    topic: 'Licensing',
    question:
      'What is 3CX licensing primarily sized by?',
    options: [
      'Simultaneous calls, licensed per system',
      'The number of extensions created',
      'The number of physical desk phones',
      'Gigabytes of call recording storage',
    ],
    correct: 0,
    explanation:
      'The license is per system and scales with simultaneous calls, not with extension count. Sizing therefore depends on concurrent call volume — commonly a fraction of headcount.',
  },
  {
    id: 'threecx-q-009',
    domain: 1,
    topic: 'Planning',
    question:
      'Which discovery item most affects the design of a client cutover?',
    options: [
      'Existing number inventory, porting timelines, and who currently controls the DIDs',
      'The color scheme of the client’s desk phones',
      'The brand of the client’s office printer',
      'How many people work remotely on Fridays',
    ],
    correct: 0,
    explanation:
      'Number porting is the long pole in almost every PBX migration. It is controlled by the losing carrier and cannot be compressed, so it drives the whole schedule.',
  },

  // ─── DOMAIN 2: INSTALLATION & INITIAL SETUP ──────────────────────────────

  {
    id: 'threecx-q-010',
    domain: 2,
    topic: 'Installation',
    question:
      'On a fresh Debian 12 server, what must be done before the 3CX package can be installed with apt?',
    options: [
      'Add the 3CX signing key and repository to the apt sources',
      'Compile the kernel with SIP support',
      'Install Apache and MySQL first',
      'Disable systemd',
    ],
    correct: 0,
    explanation:
      'The 3CX package lives in a vendor repository. The signing key is added to the keyring and a sources entry created, after which apt update makes the package available.',
  },
  {
    id: 'threecx-q-011',
    domain: 2,
    topic: 'Installation',
    question:
      'After the 3CX package installs on Debian, how is the initial configuration wizard reached?',
    options: [
      'By browsing to the server IP on port 5015',
      'By running a graphical installer on the console',
      'By editing a text configuration file directly',
      'By connecting over SSH on port 22 only',
    ],
    correct: 0,
    explanation:
      'The installer prints a URL using port 5015 for the web-based configuration wizard. That port must be reachable from the workstation running the browser.',
  },
  {
    id: 'threecx-q-012',
    domain: 2,
    topic: 'Installation',
    question:
      'The configuration wizard page fails to load after installation. Which recovery step is appropriate?',
    options: [
      'Run the 3CXWizard cleanup command to reset the wizard state, then retry',
      'Reinstall Debian from scratch',
      'Change the server hostname and reboot twice',
      'Disable the network interface and re-enable it',
    ],
    correct: 0,
    explanation:
      'The wizard can be reset with its cleanup option, which clears partial state so the setup process can start again without rebuilding the machine.',
  },
  {
    id: 'threecx-q-013',
    domain: 2,
    topic: 'Firewall',
    question:
      'Which port range must be open inbound for RTP audio on a self-hosted 3CX server?',
    options: ['9000-10999 UDP', '5060-5061 TCP only', '443 TCP only', '3389 TCP'],
    correct: 0,
    explanation:
      'RTP carries the audio and uses UDP 9000-10999. Each call consumes a pair of ports, so the range must comfortably exceed twice the expected simultaneous call count.',
  },
  {
    id: 'threecx-q-014',
    domain: 2,
    topic: 'Firewall',
    question:
      'Which ports are used for SIP signaling to a 3CX server?',
    options: [
      '5060 UDP and 5060-5061 TCP',
      '9000-10999 UDP',
      '5015 TCP only',
      '25 and 110 TCP',
    ],
    correct: 0,
    explanation:
      'SIP signaling uses 5060 over UDP and 5060 to 5061 over TCP, with 5061 carrying TLS-secured signaling. Signaling sets up the call; RTP carries the audio separately.',
  },
  {
    id: 'threecx-q-015',
    domain: 2,
    topic: 'Firewall',
    question:
      'What is port 5090 used for in a 3CX deployment?',
    options: [
      'The 3CX tunnel, allowing remote apps and SBCs to connect through a single port',
      'Database replication between PBX nodes',
      'Provisioning of desk phones on the LAN',
      'Fax transmission',
    ],
    correct: 0,
    explanation:
      'The tunnel multiplexes SIP and RTP through one port, which avoids opening a wide RTP range toward remote sites and simplifies firewall rules for remote clients.',
  },
  {
    id: 'threecx-q-016',
    domain: 2,
    topic: 'Firewall',
    question:
      'Which port typically serves the 3CX management console and Web Client over HTTPS?',
    options: ['443 or 5001 TCP', '5015 TCP', '9000 UDP', '5060 UDP'],
    correct: 0,
    explanation:
      'Secure web access uses 443 or the custom HTTPS port, commonly 5001. Port 5015 is only the initial setup wizard and should not remain exposed afterward.',
  },
  {
    id: 'threecx-q-017',
    domain: 2,
    topic: 'Post-Install Verification',
    question:
      'Which built-in tool should be run after installation to confirm the firewall and NAT are correctly configured?',
    options: [
      'The 3CX Firewall Checker',
      'The extension import wizard',
      'The call recording report',
      'The voicemail greeting editor',
    ],
    correct: 0,
    explanation:
      'The Firewall Checker validates port forwarding and NAT behavior from outside the network. Running it before going live catches the misconfigurations that otherwise appear as one-way audio on day one.',
  },
  {
    id: 'threecx-q-018',
    domain: 2,
    topic: 'Post-Install Verification',
    question:
      'Why should the setup wizard port be closed once installation is complete?',
    options: [
      'It exposes an unauthenticated setup path that is unnecessary during normal operation',
      'It conflicts with RTP media',
      'It slows down the database',
      'It prevents phones from provisioning',
    ],
    correct: 0,
    explanation:
      'Setup interfaces are only needed once. Leaving them reachable enlarges the attack surface for no operational benefit — the same reasoning applies to any installer endpoint.',
  },
  {
    id: 'threecx-q-019',
    domain: 2,
    topic: 'Time and DNS',
    question:
      'Why is accurate time synchronization important on a PBX host?',
    options: [
      'Call detail records, TLS certificate validation, and log correlation all depend on it',
      'It determines the RTP port range',
      'It sets the maximum number of extensions',
      'It controls the codec selection order',
    ],
    correct: 0,
    explanation:
      'Skewed clocks break certificate validation, corrupt the ordering of call records, and make troubleshooting across systems unreliable. NTP is a standard part of the build.',
  },

  // ─── DOMAIN 3: TRUNKS, NUMBERS & CALL FLOW ───────────────────────────────

  {
    id: 'threecx-q-020',
    domain: 3,
    topic: 'SIP Trunks',
    question:
      'A SIP trunk registers successfully but inbound calls do not reach any extension. Which configuration should be checked first?',
    options: [
      'Inbound rules / DID routing mapping the number to a destination',
      'The RTP port range',
      'The extension password policy',
      'The voicemail retention period',
    ],
    correct: 0,
    explanation:
      'Registration proves the trunk is authenticated. If calls arrive but go nowhere, the DID is not mapped to a destination — or the provider is sending a number that does not match the configured rule.',
  },
  {
    id: 'threecx-q-021',
    domain: 3,
    topic: 'SIP Trunks',
    question:
      'Which trunk authentication method requires the provider to send calls to a known static IP rather than using credentials?',
    options: ['IP-based authentication', 'Register-based authentication', 'SIP digest with nonce', 'OAuth device flow'],
    correct: 0,
    explanation:
      'IP authentication trusts the source address, so the PBX public IP must be static and shared with the provider. Registration-based trunks authenticate with a username and password instead.',
  },
  {
    id: 'threecx-q-022',
    domain: 3,
    topic: 'Call Flow',
    question:
      'What determines which trunk an outbound call uses and how the dialed number is presented?',
    options: [
      'Outbound rules, which match on criteria and can strip or prepend digits',
      'The extension’s voicemail settings',
      'The codec priority list',
      'The Web Client theme',
    ],
    correct: 0,
    explanation:
      'Outbound rules match calls by prefix, extension group, or number length, select the route, and apply digit manipulation so the number is presented in the format the carrier expects.',
  },
  {
    id: 'threecx-q-023',
    domain: 3,
    topic: 'Call Flow',
    question:
      'Users report that some outbound calls fail while others succeed. Which cause is most likely?',
    options: [
      'An outbound rule not matching those numbers, or digit manipulation producing a format the carrier rejects',
      'The server needs more RAM',
      'The RTP range is too wide',
      'Voicemail is full',
    ],
    correct: 0,
    explanation:
      'Partial failure by number pattern points squarely at rule matching or digit formatting. Carriers differ on whether they expect E.164, a leading 1, or a bare 10-digit number.',
  },
  {
    id: 'threecx-q-024',
    domain: 3,
    topic: 'Emergency Calling',
    question:
      'Why must emergency number routing be configured and tested explicitly during a deployment?',
    options: [
      'Emergency calls must always route out regardless of other rules, and must present the correct location-identifying number',
      'It is only needed when the client requests it',
      'Emergency calls use the tunnel port',
      'It reduces licensing cost',
    ],
    correct: 0,
    explanation:
      'An emergency rule must be unconditional and present a caller ID tied to the physical address the responders will be sent to. This carries legal obligations and must be verified, not assumed.',
  },
  {
    id: 'threecx-q-025',
    domain: 3,
    topic: 'Digital Receptionist',
    question:
      'Which object plays a recorded menu and routes callers based on the digit they press?',
    options: ['Digital Receptionist (IVR)', 'Ring group', 'Call queue', 'Bridge'],
    correct: 0,
    explanation:
      'The Digital Receptionist is 3CX’s IVR. Ring groups ring several extensions simultaneously or in sequence, and queues hold callers until an agent is available.',
  },
  {
    id: 'threecx-q-026',
    domain: 3,
    topic: 'Ring Groups vs. Queues',
    question:
      'What is the key operational difference between a ring group and a call queue?',
    options: [
      'A queue holds waiting callers with position and music on hold; a ring group simply rings members and overflows if unanswered',
      'A ring group requires a license and a queue does not',
      'A queue can only contain one member',
      'A ring group records all calls automatically',
    ],
    correct: 0,
    explanation:
      'Queues manage waiting callers with strategies, hold treatment, and reporting. Ring groups are a simpler broadcast to a set of extensions with an overflow destination.',
  },
  {
    id: 'threecx-q-027',
    domain: 3,
    topic: 'Call Flow',
    question:
      'A client wants calls answered by reception during business hours and sent to voicemail overnight. Which feature accomplishes this?',
    options: [
      'Office hours configuration with separate in-hours and out-of-hours routing',
      'A second SIP trunk',
      'A dedicated RTP range for nights',
      'Call recording rules',
    ],
    correct: 0,
    explanation:
      'Office hours define business and holiday schedules, with a different destination outside them. Holiday handling is frequently forgotten and produces complaints on the first public holiday.',
  },
  {
    id: 'threecx-q-028',
    domain: 3,
    topic: 'Audio Quality',
    question:
      'Callers report one-way audio: the internal user hears the caller but the caller hears nothing. What is the most likely cause?',
    options: [
      'RTP is not traversing NAT or the firewall correctly in one direction',
      'The SIP trunk password is wrong',
      'The extension has no voicemail configured',
      'The IVR prompt is missing',
    ],
    correct: 0,
    explanation:
      'One-way audio is a media path problem, not signaling — the call connected, so SIP worked. It almost always traces to NAT handling or an incomplete RTP port forward.',
  },
  {
    id: 'threecx-q-029',
    domain: 3,
    topic: 'Codecs',
    question:
      'Which consideration matters most when selecting codecs for a site with constrained upstream bandwidth?',
    options: [
      'A compressed codec such as G.729 reduces bandwidth per call at some cost to audio quality',
      'Codec choice has no effect on bandwidth',
      'Only video codecs affect bandwidth',
      'Codecs are selected automatically and cannot be configured',
    ],
    correct: 0,
    explanation:
      'G.711 gives the best quality at roughly 64 kbps of payload per direction; compressed codecs cut that substantially. Both ends and the carrier must support whatever is chosen.',
  },

  // ─── DOMAIN 4: ENDPOINTS, CLIENTS & USERS ────────────────────────────────

  {
    id: 'threecx-q-030',
    domain: 4,
    topic: 'Provisioning',
    question:
      'What does auto-provisioning of a supported desk phone accomplish?',
    options: [
      'The phone pulls its configuration from the PBX automatically rather than being configured by hand',
      'It upgrades the phone hardware',
      'It assigns the phone a public IP address',
      'It licenses the phone individually',
    ],
    correct: 0,
    explanation:
      'Provisioning delivers extension credentials, codecs, time settings, and firmware policy automatically, which makes deployments repeatable and replacements quick.',
  },
  {
    id: 'threecx-q-031',
    domain: 4,
    topic: 'Provisioning',
    question:
      'A newly plugged-in desk phone does not appear for provisioning on the LAN. Which check is most useful first?',
    options: [
      'Whether the phone is on the same VLAN/subnet as the PBX and can reach it',
      'Whether the phone supports Bluetooth',
      'The color depth of the phone display',
      'The PBX license expiry date',
    ],
    correct: 0,
    explanation:
      'Local provisioning depends on network reachability and often on multicast discovery, both of which break across VLAN boundaries without explicit routing or a manual provisioning URL.',
  },
  {
    id: 'threecx-q-032',
    domain: 4,
    topic: 'Remote Extensions',
    question:
      'What is the recommended way to connect a remote worker’s desk phone at a branch office with several phones?',
    options: [
      'Deploy an SBC at the remote site so all phones tunnel back over a single connection',
      'Forward the full RTP range to each phone individually',
      'Assign each phone a public IP',
      'Disable the firewall at the remote site',
    ],
    correct: 0,
    explanation:
      'The Session Border Controller aggregates remote endpoints through the tunnel, avoiding per-phone firewall rules and the NAT problems that come with them.',
  },
  {
    id: 'threecx-q-033',
    domain: 4,
    topic: 'Clients',
    question:
      'Which statement about the 3CX Web Client is correct?',
    options: [
      'It provides calling, chat, and presence from a browser without a desk phone',
      'It requires a desk phone to place calls',
      'It only works on the local LAN',
      'It replaces the need for a SIP trunk',
    ],
    correct: 0,
    explanation:
      'The Web Client is a full softphone with presence and messaging. Remote use depends on the PBX being reachable — normally through the tunnel and a valid certificate.',
  },
  {
    id: 'threecx-q-034',
    domain: 4,
    topic: 'User Setup',
    question:
      'What is the practical benefit of organizing users into departments or groups?',
    options: [
      'Permissions, office hours, and routing can be applied consistently to a set of users',
      'It reduces the license cost per user',
      'It increases the RTP port range',
      'It enables call recording only',
    ],
    correct: 0,
    explanation:
      'Grouping lets policy be applied and audited by role rather than per person, which matters as soon as the client grows past a handful of users.',
  },
  {
    id: 'threecx-q-035',
    domain: 4,
    topic: 'User Setup',
    question:
      'A user must see and answer calls for a colleague. Which configuration achieves this?',
    options: [
      'Grant the appropriate extension rights, such as shared line appearance or call pickup permissions',
      'Give the user the colleague’s SIP password',
      'Assign both users the same extension number',
      'Disable the colleague’s voicemail',
    ],
    correct: 0,
    explanation:
      'Delegation is handled through rights and line appearances. Sharing credentials or duplicating extension numbers breaks accountability and produces unpredictable registration behavior.',
  },
  {
    id: 'threecx-q-036',
    domain: 4,
    topic: 'Onboarding',
    question:
      'Which onboarding step most reduces support calls in the first week after cutover?',
    options: [
      'A short live walkthrough of the client apps plus a one-page reference for common tasks',
      'Emailing the full administrator manual to all staff',
      'Disabling voicemail until users request it',
      'Waiting for users to discover features themselves',
    ],
    correct: 0,
    explanation:
      'Most post-cutover tickets are "how do I transfer a call" rather than faults. Ten minutes of training and a one-page card prevent the large majority of them.',
  },
  {
    id: 'threecx-q-037',
    domain: 4,
    topic: 'Endpoints',
    question:
      'Why should desk phone firmware be standardized during a deployment?',
    options: [
      'Mixed firmware produces inconsistent behavior and hard-to-reproduce faults',
      'Firmware determines the license tier',
      'It changes the SIP port used',
      'It is required to enable voicemail',
    ],
    correct: 0,
    explanation:
      'Provisioning behavior and feature support vary between firmware versions. A known-good standard version makes faults reproducible and support tractable.',
  },

  // ─── DOMAIN 5: SECURITY, BACKUP & MAINTENANCE ────────────────────────────

  {
    id: 'threecx-q-038',
    domain: 5,
    topic: 'Toll Fraud',
    question:
      'Which control most directly limits financial loss from toll fraud on a new PBX?',
    options: [
      'Restricting outbound international dialing to the users who need it, with limits and alerting',
      'Increasing the RTP port range',
      'Enabling call recording',
      'Extending voicemail retention',
    ],
    correct: 0,
    explanation:
      'Toll fraud converts a compromised extension into expensive international calls, usually overnight. Denying international dialing by default caps the loss even if credentials leak.',
  },
  {
    id: 'threecx-q-039',
    domain: 5,
    topic: 'Extension Security',
    question:
      'Which practice most reduces the risk of an extension being compromised?',
    options: [
      'Strong, unique, auto-generated SIP credentials that are never reused across extensions',
      'Setting extension passwords to match the extension number for easy support',
      'Allowing SIP registration from any source address',
      'Disabling the PBX event log',
    ],
    correct: 0,
    explanation:
      'Weak or patterned SIP credentials are found quickly by automated scanners. Generated credentials plus restricting where registrations may originate closes the most common attack path.',
  },
  {
    id: 'threecx-q-040',
    domain: 5,
    topic: 'Anti-Hacking',
    question:
      'What is the purpose of the PBX blacklist and anti-hacking thresholds?',
    options: [
      'Automatically blocking source addresses that generate repeated failed authentication attempts',
      'Preventing users from dialing internal extensions',
      'Blocking specific codecs',
      'Limiting the number of voicemail messages',
    ],
    correct: 0,
    explanation:
      'Internet-facing SIP attracts constant automated registration attempts. Threshold-based blacklisting stops the scanning before it succeeds and keeps the logs readable.',
  },
  {
    id: 'threecx-q-041',
    domain: 5,
    topic: 'Backups',
    question:
      'What should a 3CX backup schedule for a client production system include?',
    options: [
      'Automated scheduled backups stored off the PBX, with a periodic test restore',
      'A manual backup taken only before major changes',
      'Backups stored only on the PBX itself',
      'No backups, since the configuration can be rebuilt',
    ],
    correct: 0,
    explanation:
      'A backup on the failed server is no backup at all. Scheduled off-box copies plus an occasional verified restore is the difference between an outage and a disaster.',
  },
  {
    id: 'threecx-q-042',
    domain: 5,
    topic: 'Backups',
    question:
      'Which consideration applies when including call recordings in the backup set?',
    options: [
      'Recordings grow large quickly and may carry retention and privacy obligations',
      'Recordings cannot be backed up',
      'Recordings must always be retained indefinitely',
      'Recordings are stored in the license file',
    ],
    correct: 0,
    explanation:
      'Recording volume dominates backup size and can push a job past its window. Retention is also a legal question — many jurisdictions regulate how long call audio may be kept.',
  },
  {
    id: 'threecx-q-043',
    domain: 5,
    topic: 'Updates',
    question:
      'What is the safest approach to applying a 3CX version update on a client production system?',
    options: [
      'Take a verified backup, schedule a maintenance window, and update outside business hours',
      'Update immediately during peak hours to get it done',
      'Skip backups because updates are reversible',
      'Update only after a fault occurs',
    ],
    correct: 0,
    explanation:
      'Updates restart telephony services, so calls drop. A verified backup and an agreed window make the change safe and give a rollback path if something regresses.',
  },
  {
    id: 'threecx-q-044',
    domain: 5,
    topic: 'Monitoring',
    question:
      'Which monitoring signal most reliably indicates a developing problem on a PBX?',
    options: [
      'Trunk registration state and failed call counts trending abnormally',
      'The number of extensions defined',
      'The size of the admin console page',
      'The number of configured outbound rules',
    ],
    correct: 0,
    explanation:
      'A trunk that drops registration takes the phone system with it, and rising failed-call counts precede user complaints. Both are worth alerting on rather than discovering by phone call.',
  },
  {
    id: 'threecx-q-045',
    domain: 5,
    topic: 'Troubleshooting',
    question:
      'Which data source is most useful for determining why a specific call failed?',
    options: [
      'The call detail records and PBX logs for that call, plus a SIP trace if needed',
      'The Debian package list',
      'The desk phone’s display brightness setting',
      'The web client theme configuration',
    ],
    correct: 0,
    explanation:
      'CDRs establish what the PBX believed happened, logs supply the surrounding detail, and a SIP trace shows the exact exchange with the carrier when the two disagree.',
  },
  {
    id: 'threecx-q-046',
    domain: 5,
    topic: 'Troubleshooting',
    question:
      'Calls worked yesterday and now all outbound calls fail while internal calls work. Which area should be investigated first?',
    options: [
      'The SIP trunk — registration status, carrier-side changes, or an expired credential',
      'The extension provisioning templates',
      'The voicemail greeting files',
      'The Web Client browser cache',
    ],
    correct: 0,
    explanation:
      'Internal calls working proves the PBX and LAN media path are healthy. The fault is at the boundary, so the trunk and the carrier relationship are where to look.',
  },
  {
    id: 'threecx-q-047',
    domain: 5,
    topic: 'Handover',
    question:
      'Which documentation matters most when handing a self-hosted system over to a client or another engineer?',
    options: [
      'Network details, FQDN, credentials location, trunk and DID inventory, backup location, and update process',
      'A copy of the vendor marketing brochure',
      'Screenshots of the login page',
      'The installer’s personal notes only',
    ],
    correct: 0,
    explanation:
      'Self-hosting means the client owns the outcome. Without documented addressing, number inventory, and recovery steps, the next person is reverse-engineering the system during an outage.',
  },
  {
    id: 'threecx-q-048',
    domain: 5,
    topic: 'OS Maintenance',
    question:
      'Who is responsible for Debian security patching on a self-hosted 3CX server?',
    options: [
      'The party operating the server — self-hosting includes OS maintenance',
      '3CX, automatically as part of the license',
      'The SIP trunk provider',
      'Nobody; the OS does not require patching',
    ],
    correct: 0,
    explanation:
      'Self-hosting means the underlying OS is yours to maintain. This is the operational cost that distinguishes it from a hosted instance and should be stated plainly to the client.',
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
