// Security+ SY0-701 Exam Questions
// Domain 1: General Security Concepts (12%)
// Domain 2: Threats, Vulnerabilities & Mitigations (22%)
// Domain 3: Security Architecture (18%)
// Domain 4: Security Operations (28%)
// Domain 5: Security Program Management (20%)

export const questions = [
  // ── DOMAIN 1: General Security Concepts ──────────────────────────────────
  {
    id: 'secplus-q-001',
    domain: 1,
    question: 'A company installs security cameras in the server room to record anyone who enters. Which type of security control is this?',
    options: [
      'Preventive technical control',
      'Corrective operational control',
      'Detective physical control',
      'Compensating managerial control'
    ],
    correct: 2,
    explanation: 'Security cameras are a detective control — they detect and record events after they occur (or are occurring) rather than preventing them. They are also a physical control because they involve physical security hardware. Detective controls identify that a security event has occurred. Preventive controls stop incidents before they happen; corrective controls restore systems after an incident.'
  },
  {
    id: 'secplus-q-002',
    domain: 1,
    question: 'Which component of the CIA triad ensures that data is accessible only to those authorized to view it?',
    options: [
      'Integrity',
      'Availability',
      'Confidentiality',
      'Accountability'
    ],
    correct: 2,
    explanation: 'Confidentiality ensures that information is accessible only to those who are authorized to access it. Controls that enforce confidentiality include encryption, access controls, and data classification. Integrity ensures data has not been altered without authorization. Availability ensures systems and data are accessible when needed. Accountability (sometimes called non-repudiation) is often considered a fourth principle.'
  },
  {
    id: 'secplus-q-003',
    domain: 1,
    question: 'A digital signature on an email ensures that the sender cannot deny sending the message. Which security concept does this represent?',
    options: [
      'Confidentiality',
      'Integrity',
      'Non-repudiation',
      'Availability'
    ],
    correct: 2,
    explanation: 'Non-repudiation prevents someone from denying an action they performed. Digital signatures use asymmetric cryptography: the sender signs with their private key, and anyone can verify with the sender\'s public key. Because only the sender possesses their private key, they cannot credibly deny signing the message. This also provides integrity (the message was not altered after signing).'
  },
  {
    id: 'secplus-q-004',
    domain: 1,
    question: 'A security administrator needs to encrypt data in a database and requires an algorithm that is fast, uses a single shared key, and is approved for government use. Which algorithm is MOST appropriate?',
    options: [
      'RSA-2048',
      'AES-256',
      'MD5',
      'ECC-256'
    ],
    correct: 1,
    explanation: 'AES (Advanced Encryption Standard) is a symmetric algorithm (single shared key) that is extremely fast and is approved by NIST and the U.S. government for protecting sensitive data including classified information (AES-256). RSA is asymmetric (two keys: public and private), used for key exchange and digital signatures, not bulk data encryption. MD5 is a hashing algorithm (one-way, not encryption). ECC is asymmetric, used for key exchange and signatures.'
  },
  {
    id: 'secplus-q-005',
    domain: 1,
    question: 'Which cryptographic concept is described as: "a mathematical one-way function that produces a fixed-length output (digest) from any input, and it is computationally infeasible to find two inputs producing the same output"?',
    options: [
      'Symmetric encryption',
      'Asymmetric encryption',
      'Cryptographic hashing',
      'Digital signature'
    ],
    correct: 2,
    explanation: 'A cryptographic hash function takes any input and produces a fixed-length digest. It must be: one-way (cannot reverse the hash to get original data), deterministic (same input always gives same output), collision-resistant (computationally infeasible to find two inputs with same hash). Common algorithms: SHA-256 (256-bit output, secure), SHA-512, SHA-3. MD5 and SHA-1 are deprecated due to known collisions. Hashing is used for password storage, digital signatures, and file integrity verification.'
  },
  {
    id: 'secplus-q-006',
    domain: 1,
    question: 'A user receives a website certificate issued by an intermediate CA that chains up to a trusted root CA in their browser. Which PKI component allows the browser to verify that this intermediate CA\'s certificate has not been revoked?',
    options: [
      'CRL (Certificate Revocation List) or OCSP (Online Certificate Status Protocol)',
      'CSR (Certificate Signing Request)',
      'The website\'s private key',
      'The browser\'s cookie store'
    ],
    correct: 0,
    explanation: 'Certificate revocation can be checked via two mechanisms: CRL (a periodically-published list of revoked certificate serial numbers) or OCSP (real-time query to a responder for the current status of a specific certificate). OCSP stapling is a modern improvement where the server provides the OCSP response to the client, reducing round-trips. If a CA\'s private key is compromised, all its issued certificates must be revoked — CRL and OCSP are how relying parties learn of this.'
  },
  {
    id: 'secplus-q-007',
    domain: 1,
    question: 'Which security model assumes that no user, device, or network segment should be trusted by default, even if they are inside the corporate network perimeter?',
    options: [
      'Defense in depth',
      'Zero trust architecture',
      'Perimeter security model',
      'Implicit trust model'
    ],
    correct: 1,
    explanation: 'Zero trust architecture (ZTA) rejects the old "castle and moat" assumption that everything inside the network perimeter is trusted. Core principles: "never trust, always verify" — every access request is authenticated, authorized, and continuously validated regardless of source. Microsegmentation limits lateral movement. Key components: strong identity verification (MFA), least-privilege access, device health verification, and continuous monitoring. Driven by the reality that perimeter-based security fails against insider threats and lateral movement after breaches.'
  },
  {
    id: 'secplus-q-008',
    domain: 1,
    question: 'A security architect proposes multiple overlapping security controls so that if one fails, others remain. Which security strategy does this describe?',
    options: [
      'Zero trust',
      'Security through obscurity',
      'Defense in depth',
      'Least privilege'
    ],
    correct: 2,
    explanation: 'Defense in depth (also called layered security) applies multiple security controls at different layers so that if one control fails, attackers must overcome additional controls. Layers may include: perimeter firewall, IDS/IPS, network segmentation, endpoint security, application security, data encryption, user access controls, and monitoring. No single control is relied upon as the only protection. This is analogous to a castle with multiple walls, moats, and guards.'
  },
  {
    id: 'secplus-q-009',
    domain: 1,
    question: 'In the AAA framework for security, what does the second "A" (Authorization) provide?',
    options: [
      'Verifying the identity of a user with credentials',
      'Determining what an authenticated user is permitted to do',
      'Recording what actions a user performed',
      'Allocating network bandwidth to authenticated users'
    ],
    correct: 1,
    explanation: 'The AAA framework: Authentication (who are you? — verify identity with credentials), Authorization (what can you do? — determine access rights and permissions based on authenticated identity), Accounting/Auditing (what did you do? — log actions for accountability). Authorization happens AFTER authentication — you must prove who you are before the system determines what you\'re allowed to access. Authorization is enforced by ACLs, RBAC, and security policies.'
  },
  {
    id: 'secplus-q-010',
    domain: 1,
    question: 'Which type of control is a "compensating control"?',
    options: [
      'A control that prevents a threat from occurring',
      'A control that detects when a threat has occurred',
      'A control used when the ideal control cannot be implemented, providing an alternative safeguard',
      'A control that restores systems after an incident'
    ],
    correct: 2,
    explanation: 'A compensating control is implemented when the primary (ideal) control cannot be deployed due to technical limitations, cost, or operational constraints. It provides an alternative safeguard that achieves a similar security objective. Example: a legacy system cannot be patched — compensating controls might include network isolation, enhanced monitoring, and a WAF. Compensating controls are common in compliance frameworks (PCI DSS uses this concept when standard requirements cannot be met).'
  },

  // ── DOMAIN 2: Threats, Vulnerabilities & Mitigations ─────────────────────
  {
    id: 'secplus-q-011',
    domain: 2,
    question: 'A user receives an email that appears to be from their CEO, urgently requesting them to transfer funds to a new vendor account. The email address closely resembles the CEO\'s but uses a different domain. What type of attack is this?',
    options: [
      'Vishing',
      'Spear phishing (also known as Business Email Compromise when targeting finance)',
      'Smishing',
      'Watering hole attack'
    ],
    correct: 1,
    explanation: 'Spear phishing targets specific individuals with personalized messages, unlike generic phishing sent to thousands of addresses. When it impersonates an executive to trick an employee into transferring money, it\'s also classified as Business Email Compromise (BEC) or "whaling" (targeting executives) depending on who the victim is. The tell-tale sign is a lookalike domain. Vishing is voice phishing (phone calls); smishing is SMS phishing; a watering hole attack compromises a website the target frequently visits.'
  },
  {
    id: 'secplus-q-012',
    domain: 2,
    question: 'Malware is discovered on a server that installs itself into the boot sector, loads before the OS, and hides its presence from the OS and antivirus software. What type of malware is this?',
    options: [
      'Ransomware',
      'Keylogger',
      'Rootkit',
      'Worm'
    ],
    correct: 2,
    explanation: 'A rootkit is malware designed to hide its presence and maintain privileged access to a system. It operates at a low level (boot sector, kernel, hypervisor) to conceal itself from the OS, security software, and administrators. A bootkit is a rootkit that infects the boot sector, loading before the OS. Detection requires offline scanning (boot from clean media) or integrity checking (Secure Boot, UEFI Measured Boot). Rootkits are among the hardest malware to detect and remove.'
  },
  {
    id: 'secplus-q-013',
    domain: 2,
    question: 'An attacker intercepts and modifies network traffic between two parties without their knowledge, reading and altering data in transit. What type of attack is this?',
    options: [
      'Denial of Service (DoS)',
      'SQL Injection',
      'On-path (Man-in-the-Middle) attack',
      'Pass-the-hash attack'
    ],
    correct: 2,
    explanation: 'An on-path attack (formerly called Man-in-the-Middle or MitM) occurs when an attacker positions themselves between two communicating parties, intercepting and potentially modifying the traffic. Techniques: ARP poisoning (redirecting traffic on a local network), DNS poisoning (directing clients to attacker-controlled servers), SSL stripping (downgrading HTTPS to HTTP). Mitigations: TLS with certificate pinning, HTTPS enforcement, HSTS, mutual TLS authentication.'
  },
  {
    id: 'secplus-q-014',
    domain: 2,
    question: 'A web application stores user-submitted data directly in SQL queries without validation. An attacker submits `\' OR 1=1 --` as a username input and bypasses authentication. What vulnerability is being exploited?',
    options: [
      'Cross-Site Scripting (XSS)',
      'SQL Injection',
      'Buffer Overflow',
      'Cross-Site Request Forgery (CSRF)'
    ],
    correct: 1,
    explanation: 'SQL injection occurs when user-supplied input is inserted directly into SQL queries without sanitization. The input `\' OR 1=1 --` breaks out of the intended query, adds a condition that is always true, and comments out the rest of the query — bypassing authentication. Mitigations: parameterized queries/prepared statements (the primary defense), stored procedures with proper permissions, input validation, WAF. SQL injection can also be used for data exfiltration, data destruction, and command execution.'
  },
  {
    id: 'secplus-q-015',
    domain: 2,
    question: 'An attacker compromises a popular software library used by hundreds of companies. When companies update the library, their systems are also compromised. What type of attack is this?',
    options: [
      'Insider threat',
      'Supply chain attack',
      'Zero-day exploit',
      'Advanced Persistent Threat (APT)'
    ],
    correct: 1,
    explanation: 'A supply chain attack targets the software or hardware supply chain to compromise end targets indirectly. By inserting malicious code into a trusted software component, the attacker reaches all consumers of that component. Notable examples: SolarWinds (2020 — trojanized software update), XZ Utils (2024 — backdoor in Linux compression library). Mitigations: software composition analysis (SCA), SBOM (Software Bill of Materials), code signing verification, third-party risk management.'
  },
  {
    id: 'secplus-q-016',
    domain: 2,
    question: 'An attacker floods a web server with millions of HTTP requests from thousands of compromised computers (a botnet), making the service unavailable to legitimate users. What type of attack is this?',
    options: [
      'DoS (Denial of Service)',
      'DDoS (Distributed Denial of Service)',
      'ARP poisoning',
      'DNS amplification only'
    ],
    correct: 1,
    explanation: 'DDoS (Distributed Denial of Service) uses many sources (a botnet of compromised computers) to flood a target, making it unavailable. This differs from DoS (single source) in that the distributed nature makes it harder to block (you cannot simply block one IP). DDoS types: volumetric (bandwidth exhaustion), protocol (SYN flood), application layer (HTTP flood). Mitigations: CDN with DDoS protection (Cloudflare, AWS Shield), rate limiting, BCP38 filtering, anycast routing.'
  },
  {
    id: 'secplus-q-017',
    domain: 2,
    question: 'An attacker captures the hash of a user\'s password from a Windows system and uses it directly to authenticate to other systems on the network without cracking the password. What attack technique is this?',
    options: [
      'Rainbow table attack',
      'Brute force attack',
      'Pass-the-hash attack',
      'Credential stuffing'
    ],
    correct: 2,
    explanation: 'Pass-the-hash exploits how Windows NTLM authentication works: the hash itself is the credential — you don\'t need the plaintext password. An attacker extracts password hashes from memory (using tools like Mimikatz) and presents the hash directly to authenticate to other systems using NTLM. Mitigations: Protected Users security group (disables NTLM), Credential Guard (protects LSA secrets), least-privilege accounts, disabling NTLM where possible, using Kerberos instead.'
  },
  {
    id: 'secplus-q-018',
    domain: 2,
    question: 'Which social engineering technique involves an attacker leaving a USB drive containing malware in a company parking lot, hoping a curious employee will plug it in?',
    options: [
      'Pretexting',
      'Tailgating',
      'Baiting',
      'Quid pro quo'
    ],
    correct: 2,
    explanation: 'Baiting uses physical media (USB drives, CDs) or enticing downloads to lure victims into executing malware. The attacker exploits human curiosity. The USB drop attack is a classic baiting technique. Studies have found high success rates — many people plug in found USB drives. Mitigations: disable USB autorun, endpoint security that blocks unauthorized USB devices, security awareness training. Pretexting creates a fabricated scenario; tailgating follows someone through a door; quid pro quo offers something in exchange for information.'
  },
  {
    id: 'secplus-q-019',
    domain: 2,
    question: 'A software vulnerability exists that the developer is unaware of and for which no patch is available. An attacker has developed an exploit for this vulnerability. What is this called?',
    options: [
      'A logic bomb',
      'A zero-day vulnerability and zero-day exploit',
      'A race condition',
      'A buffer overflow'
    ],
    correct: 1,
    explanation: 'A zero-day vulnerability is one that is unknown to the developer or vendor — so "zero days" have passed to develop a fix. A zero-day exploit is malicious code that takes advantage of this vulnerability before a patch is available. Zero-days are highly valuable (state-level actors pay millions for them) because defenders have no patch to deploy. Mitigations before a patch is available: virtual patching (WAF/IPS rules), network segmentation, least privilege, behavior-based detection rather than signature-based.'
  },
  {
    id: 'secplus-q-020',
    domain: 2,
    question: 'An attacker researches a target executive on LinkedIn and social media, then calls pretending to be IT support to obtain the executive\'s password. Which techniques are being combined?',
    options: [
      'Vishing and OSINT (Open Source Intelligence gathering)',
      'Smishing and spear phishing',
      'Watering hole attack and pretexting',
      'Tailgating and baiting'
    ],
    correct: 0,
    explanation: 'Vishing (voice phishing) is the phone-based social engineering call. OSINT (Open Source Intelligence) is the collection of information from publicly available sources (LinkedIn, Facebook, company websites) to build a profile and make the attack more convincing. Combining OSINT research with vishing is extremely effective — the attacker sounds credible because they know real details about the target. Mitigations: security awareness training, call-back verification procedures, never provide passwords to IT support over phone.'
  },
  {
    id: 'secplus-q-021',
    domain: 2,
    question: 'A cross-site scripting (XSS) attack is classified as reflected XSS. What does this mean?',
    options: [
      'The malicious script is permanently stored in the target website\'s database',
      'The malicious script is included in a URL sent to the victim, and the server immediately reflects it back in the response',
      'The script is stored in the victim\'s browser cache and executes automatically',
      'The attack uses DOM manipulation only, with no server involvement'
    ],
    correct: 1,
    explanation: 'Reflected XSS (non-persistent XSS) embeds the malicious script in a crafted URL or form input. When the victim clicks the link, the server returns the malicious script in its response (reflects it), and the victim\'s browser executes it. The script is not stored on the server. Typically delivered via phishing links. Stored XSS (persistent) stores the script in a database and executes it for every user who views the page. DOM-based XSS manipulates the DOM without server-side reflection. All XSS types can steal cookies, hijack sessions, or redirect users.'
  },
  {
    id: 'secplus-q-022',
    domain: 2,
    question: 'Ransomware encrypts all files on a server and demands payment for the decryption key. The backup server is also encrypted because it was connected to the production network. Which backup strategy would have best protected against this scenario?',
    options: [
      'Daily incremental backups to a NAS on the same network',
      'Immutable, offline, or air-gapped backups following the 3-2-1 rule',
      'Synchronous replication to a secondary server on the same network',
      'Shorter backup retention periods'
    ],
    correct: 1,
    explanation: 'Ransomware spreads to connected systems, including backup servers. Immutable backups (write-once, cannot be modified or deleted) and offline/air-gapped backups are resistant because the ransomware cannot reach or encrypt them. The 3-2-1 rule calls for one copy offsite — a cloud backup or physically separate tape that is disconnected defeats ransomware. Synchronized/connected backups on the same network are equally vulnerable. Immutability can be enforced via WORM (Write Once Read Many) storage, Object Lock (S3), or software-enforced immutability.'
  },

  // ── DOMAIN 3: Security Architecture ──────────────────────────────────────
  {
    id: 'secplus-q-023',
    domain: 3,
    question: 'A company places its public-facing web servers in a network segment that is separated from the internal corporate network by a firewall, while still allowing internet traffic to reach the web servers. What is this network segment called?',
    options: [
      'VLAN',
      'DMZ (Demilitarized Zone)',
      'NAT network',
      'Management VLAN'
    ],
    correct: 1,
    explanation: 'A DMZ (Demilitarized Zone) is a network segment that sits between the internet and the internal corporate network, protected by firewalls on both sides. Public-facing servers (web, email, DNS) are placed in the DMZ. If a DMZ server is compromised, the attacker still faces a firewall before reaching the internal network. Typically implemented with two firewalls (or a three-legged firewall with separate DMZ interface). VLAN provides Layer 2 segmentation but is a broader concept not specifically defining internet-facing isolation.'
  },
  {
    id: 'secplus-q-024',
    domain: 3,
    question: 'Which firewall type can inspect application-layer traffic, identify applications by their content (not just port/protocol), and apply policies based on user identity?',
    options: [
      'Packet-filtering firewall',
      'Stateful inspection firewall',
      'Next-Generation Firewall (NGFW)',
      'Circuit-level gateway'
    ],
    correct: 2,
    explanation: 'A Next-Generation Firewall (NGFW) combines traditional stateful inspection with deep packet inspection (DPI), application identification (AppID), intrusion prevention (IPS), SSL/TLS decryption, user identity integration (LDAP/AD), and URL filtering. It can identify and control applications by their content signatures regardless of port (e.g., YouTube traffic on port 80 vs. web browsing on port 80). Traditional stateful firewalls only track connection state; packet filters only examine headers; NGFWs add application-layer intelligence. Examples: Palo Alto Networks, Cisco Firepower, Fortinet FortiGate.'
  },
  {
    id: 'secplus-q-025',
    domain: 3,
    question: 'An organization wants to allow remote workers to securely access the internal network from the internet. Which solution creates an encrypted tunnel over the internet to securely extend network access?',
    options: [
      'VLAN',
      'Proxy server',
      'VPN (Virtual Private Network)',
      'IDS (Intrusion Detection System)'
    ],
    correct: 2,
    explanation: 'A VPN creates an encrypted tunnel over a public network (internet), allowing remote users or sites to securely communicate as if they were on the internal network. Types: Remote access VPN (individual users connecting to corporate network), Site-to-site VPN (connecting two offices permanently). Protocols: IPsec (IKEv2/IPsec is preferred), SSL/TLS VPN (clientless, browser-based, or client-based like AnyConnect), WireGuard (modern, lightweight). VPNs protect data in transit from eavesdropping and MITM attacks on untrusted networks.'
  },
  {
    id: 'secplus-q-026',
    domain: 3,
    question: 'An enterprise uses SAML 2.0 to allow employees to log into multiple cloud applications with a single set of corporate credentials without re-entering passwords for each application. What is this called?',
    options: [
      'Multi-factor authentication (MFA)',
      'Federated identity / Single Sign-On (SSO)',
      'LDAP directory synchronization',
      'Certificate-based authentication'
    ],
    correct: 1,
    explanation: 'SAML (Security Assertion Markup Language) 2.0 is an XML-based open standard for federated identity and SSO. The Identity Provider (IdP — typically the corporate AD/Azure AD) authenticates the user and issues a SAML assertion (signed XML token). The Service Provider (cloud app) trusts the IdP\'s assertion and grants access without requiring separate credentials. SSO improves user experience and reduces password fatigue. Federated identity extends trust across organizational boundaries. OAuth 2.0/OpenID Connect is a similar modern alternative, especially for mobile/APIs.'
  },
  {
    id: 'secplus-q-027',
    domain: 3,
    question: 'In the cloud shared responsibility model, who is responsible for patching the operating system on a virtual machine in an IaaS (Infrastructure as a Service) deployment?',
    options: [
      'The cloud provider, because they own the infrastructure',
      'The customer, because in IaaS the customer manages the OS and applications',
      'A third-party security vendor',
      'Responsibility is shared equally between provider and customer'
    ],
    correct: 1,
    explanation: 'In the cloud shared responsibility model: IaaS — the provider manages physical hardware, datacenter, and hypervisor; the customer manages OS, middleware, applications, and data (including patching the OS). PaaS — provider also manages OS and runtime; customer manages applications and data. SaaS — provider manages everything from infrastructure to application; customer manages user access and data. This is a critical concept: in IaaS, OS patching is 100% the customer\'s responsibility, not the cloud provider\'s.'
  },
  {
    id: 'secplus-q-028',
    domain: 3,
    question: 'A CASB (Cloud Access Security Broker) is deployed between users and cloud services. What is the primary function of a CASB?',
    options: [
      'Encrypting all network traffic to cloud services',
      'Providing visibility and control over data and threats in cloud services, enforcing security policies',
      'Replacing the need for multi-factor authentication for cloud apps',
      'Acting as a DNS server for cloud service resolution'
    ],
    correct: 1,
    explanation: 'A CASB sits between on-premises users and cloud service providers, providing visibility into cloud usage, enforcing security policies, and protecting data. CASB capabilities: shadow IT discovery (find unauthorized cloud apps), DLP (prevent sensitive data upload to unauthorized cloud), access control, threat protection (malware detection in cloud storage), and compliance enforcement. Deployed in forward proxy, reverse proxy, or API mode. Addresses the visibility gap when corporate traffic goes directly to cloud services, bypassing traditional security controls.'
  },
  {
    id: 'secplus-q-029',
    domain: 3,
    question: 'An IDS generates an alert for a connection that is actually legitimate — a scanner updating its signature database. What type of IDS error is this?',
    options: [
      'False negative — the IDS missed a real attack',
      'True positive — the IDS correctly detected an attack',
      'False positive — the IDS incorrectly flagged benign traffic as malicious',
      'True negative — the IDS correctly ignored benign traffic'
    ],
    correct: 2,
    explanation: 'A false positive occurs when a security system incorrectly identifies benign activity as malicious. False positives waste analyst time and cause alert fatigue, which can lead to analysts ignoring real alerts. A false negative is more dangerous — the IDS fails to detect an actual attack. Security teams tune IDS/IPS systems to reduce false positives while maintaining detection capability. IDS detection methods: signature-based (known attack patterns, low false positives but misses unknowns), anomaly-based (detects deviations from baseline, higher false positives but catches novel attacks).'
  },
  {
    id: 'secplus-q-030',
    domain: 3,
    question: 'A company wants to implement network segmentation to limit the blast radius of a compromised endpoint. Instead of broad VLANs, they want to isolate individual workloads at the workload level using software-defined networking. What is this approach called?',
    options: [
      'Network address translation (NAT)',
      'Microsegmentation',
      'VLAN trunking',
      'Air-gapping'
    ],
    correct: 1,
    explanation: 'Microsegmentation divides the network into small, isolated segments (down to individual workloads or VMs) with security policies enforced between segments. Even if an attacker compromises one workload, they cannot move laterally to adjacent workloads because each segment has its own firewall policy. Implemented using SDN (Software-Defined Networking), hypervisor-based firewalls (VMware NSX), or host-based firewalls with orchestration. Microsegmentation is a key component of zero trust architecture. Traditional VLANs segment at the subnet level — microsegmentation is more granular.'
  },

  // ── DOMAIN 4: Security Operations ─────────────────────────────────────────
  {
    id: 'secplus-q-031',
    domain: 4,
    question: 'A user\'s account is protected with a password and a time-based one-time password (TOTP) generated by an authenticator app on their smartphone. Which authentication categories are being combined?',
    options: [
      'Something you know + something you have',
      'Something you are + something you have',
      'Something you know + something you are',
      'Something you have + somewhere you are'
    ],
    correct: 0,
    explanation: 'MFA (Multi-Factor Authentication) combines two or more authentication factors from different categories: Something you KNOW (password, PIN, security questions), Something you HAVE (smartphone with authenticator app, hardware token, smart card, FIDO2 key), Something you ARE (biometrics: fingerprint, face scan, retina). TOTP from an authenticator app is "something you have" (you must possess the phone). The password is "something you know." Combining these two factors means an attacker needs both to authenticate, even if they steal the password.'
  },
  {
    id: 'secplus-q-032',
    domain: 4,
    question: 'Which identity and access management solution provides centralized privilege management, session recording, and just-in-time access to administrative accounts?',
    options: [
      'SSO (Single Sign-On)',
      'PAM (Privileged Access Management)',
      'LDAP directory service',
      'RADIUS server'
    ],
    correct: 1,
    explanation: 'PAM (Privileged Access Management) solutions (CyberArk, BeyondTrust, Thycotic) manage access to privileged accounts (admin, root, service accounts). Key features: credential vaulting (store and rotate admin passwords), session recording (record admin sessions for audit), just-in-time access (grant elevated access only when needed, auto-revoke after), least privilege enforcement, and dual control (require approval before accessing credentials). PAM mitigates insider threats and limits damage from compromised admin credentials.'
  },
  {
    id: 'secplus-q-033',
    domain: 4,
    question: 'A security team uses a platform that aggregates and correlates logs from firewalls, IDS, servers, and applications, then generates alerts for suspicious patterns. What is this system called?',
    options: [
      'EDR (Endpoint Detection and Response)',
      'SOAR (Security Orchestration, Automation and Response)',
      'SIEM (Security Information and Event Management)',
      'DLP (Data Loss Prevention)'
    ],
    correct: 2,
    explanation: 'A SIEM (Security Information and Event Management) collects, normalizes, and correlates log data from across the IT environment. It applies correlation rules to identify suspicious patterns (e.g., multiple failed logins followed by a success), generates alerts, and provides dashboards for security monitoring. Common SIEMs: Splunk, Microsoft Sentinel, IBM QRadar, LogRhythm. SOAR extends SIEM by automating responses (playbooks). EDR focuses on endpoint threat detection. DLP prevents data exfiltration.'
  },
  {
    id: 'secplus-q-034',
    domain: 4,
    question: 'A malware infection is detected on a workstation. According to the NIST incident response lifecycle, which phase comes AFTER identification/detection and involves stopping the spread of the infection without destroying evidence?',
    options: [
      'Preparation',
      'Eradication',
      'Containment',
      'Recovery'
    ],
    correct: 2,
    explanation: 'The NIST SP 800-61 Incident Response lifecycle: Preparation → Detection & Analysis → Containment → Eradication → Recovery → Post-Incident Activity (lessons learned). Containment (also called "Contain" in some frameworks) stops the spread of the incident without destroying forensic evidence. Actions: isolate infected system from network, preserve memory dumps and logs, disable compromised accounts. Eradication removes the malware. Recovery restores systems. Post-incident activity analyzes what happened and improves defenses.'
  },
  {
    id: 'secplus-q-035',
    domain: 4,
    question: 'An endpoint security product monitors process behavior, detects malicious activity, and can automatically isolate an infected endpoint from the network. What type of tool is this?',
    options: [
      'Traditional antivirus (signature-based)',
      'DLP (Data Loss Prevention)',
      'EDR (Endpoint Detection and Response)',
      'HIDS (Host-based Intrusion Detection System)'
    ],
    correct: 2,
    explanation: 'EDR (Endpoint Detection and Response) solutions go beyond traditional antivirus by: monitoring endpoint behavior continuously, using behavioral analysis and ML to detect novel threats, recording endpoint telemetry (process trees, file modifications, network connections), enabling threat hunting, and providing automated response (isolate endpoint, kill process, quarantine files). Examples: CrowdStrike Falcon, Microsoft Defender for Endpoint, Carbon Black, SentinelOne. Traditional AV uses signature matching; EDR adds behavioral monitoring and response capabilities.'
  },
  {
    id: 'secplus-q-036',
    domain: 4,
    question: 'Which protocol should replace FTP for secure file transfers, as it encrypts both the authentication and the file data in transit?',
    options: [
      'TFTP (Trivial File Transfer Protocol)',
      'SFTP (SSH File Transfer Protocol)',
      'FTP over HTTP',
      'SNMP v1'
    ],
    correct: 1,
    explanation: 'SFTP (SSH File Transfer Protocol) provides secure, encrypted file transfer over an SSH connection. Both credentials and data are encrypted. FTP transmits everything in plaintext. FTPS (FTP Secure) is FTP over TLS — a different approach but also secure. SFTP runs on port 22 (SSH port). TFTP has no authentication and no encryption — used only for firmware updates on internal networks (PXE boot, TFTP server for network booting). SNMP v1 is not a file transfer protocol and has no encryption.'
  },
  {
    id: 'secplus-q-037',
    domain: 4,
    question: 'A vulnerability scanner reports a CVSS base score of 9.8 for a vulnerability in a public-facing web server. Using CVSS scoring, how should this vulnerability be prioritized?',
    options: [
      'Low priority; address in the next annual patching cycle',
      'Medium priority; address within 90 days',
      'Critical severity; address immediately — highest priority',
      'High severity; address within 30 days'
    ],
    correct: 2,
    explanation: 'CVSS (Common Vulnerability Scoring System) v3 severity ratings: 0.0 = None, 0.1–3.9 = Low, 4.0–6.9 = Medium, 7.0–8.9 = High, 9.0–10.0 = Critical. A 9.8 is Critical — the most severe category, indicating that the vulnerability is likely network-exploitable, requires no authentication, has low attack complexity, and could result in complete confidentiality, integrity, and availability loss. For a public-facing server, this is an emergency. Patch immediately or implement compensating controls (WAF rule, disable the service) while awaiting a patch.'
  },
  {
    id: 'secplus-q-038',
    domain: 4,
    question: 'Which version of TLS is the current recommended standard, eliminating older insecure cipher suites and providing improved handshake performance?',
    options: [
      'SSL 3.0',
      'TLS 1.1',
      'TLS 1.2',
      'TLS 1.3'
    ],
    correct: 3,
    explanation: 'TLS 1.3 (RFC 8446, 2018) is the current recommended version. Key improvements over TLS 1.2: removed weak cipher suites (RC4, DES, 3DES, MD5, SHA-1), mandatory forward secrecy (all cipher suites use DHE/ECDHE), 1-RTT handshake (faster than TLS 1.2\'s 2-RTT), 0-RTT resumption for reconnecting clients, simplified cipher suite negotiation. SSL 3.0 (POODLE), TLS 1.0 (BEAST), and TLS 1.1 are all deprecated and should be disabled. TLS 1.2 is still acceptable with proper cipher configuration but TLS 1.3 is preferred.'
  },
  {
    id: 'secplus-q-039',
    domain: 4,
    question: 'An organization uses ABAC (Attribute-Based Access Control) to allow access to a document only when the user\'s clearance level is "SECRET," the document is classified "SECRET," and the time is within business hours. What does ABAC provide that RBAC cannot?',
    options: [
      'Better user experience',
      'Fine-grained, context-aware access control based on multiple attributes simultaneously',
      'Simpler administration',
      'Automatic account provisioning'
    ],
    correct: 1,
    explanation: 'ABAC evaluates policies based on attributes of the user (role, clearance, department, location), resource (classification, owner, type), and environment (time of day, network location, device posture). This enables very fine-grained, context-aware decisions that RBAC cannot achieve — RBAC grants access based solely on role membership, regardless of context. ABAC can express policies like "HR employees can access salary records only from corporate network during business hours." More powerful but more complex to manage.'
  },
  {
    id: 'secplus-q-040',
    domain: 4,
    question: 'A company deploys MDM (Mobile Device Management) to manage employee smartphones that access corporate email. Which MDM capability protects corporate data if a device is lost or stolen?',
    options: [
      'Push notification delivery',
      'App store deployment',
      'Remote wipe and device encryption enforcement',
      'Cellular carrier management'
    ],
    correct: 2,
    explanation: 'MDM enables remote wipe (erase the device remotely) and can enforce device encryption so data is unreadable without the unlock code. Other MDM security capabilities: enforce screen lock/PIN, certificate-based authentication, containerization (separate corporate data from personal data), application whitelisting/blacklisting, jailbreak/root detection, conditional access (only compliant devices access email). BYOD programs often use MAM (Mobile Application Management) to manage only corporate apps rather than the entire device.'
  },

  // ── DOMAIN 5: Security Program Management ────────────────────────────────
  {
    id: 'secplus-q-041',
    domain: 5,
    question: 'An organization decides to purchase cyber liability insurance rather than investing in additional security controls to address a specific risk. Which risk treatment strategy is this?',
    options: [
      'Risk avoidance',
      'Risk mitigation',
      'Risk transference',
      'Risk acceptance'
    ],
    correct: 2,
    explanation: 'Risk treatment options: Mitigation — reduce likelihood or impact of the risk (add controls); Avoidance — stop the activity that creates the risk (don\'t do it); Transference — shift the financial risk to a third party (cyber insurance, outsourcing with SLA); Acceptance — acknowledge the risk and do nothing (appropriate for low-impact/low-probability risks within risk appetite). Cyber insurance is a common form of risk transference. The organization still bears operational impact of a breach, but financial losses are partially offset.'
  },
  {
    id: 'secplus-q-042',
    domain: 5,
    question: 'A healthcare organization must protect patient health information (PHI) under federal law, including implementing technical, administrative, and physical safeguards. Which regulation applies?',
    options: [
      'PCI DSS',
      'HIPAA (Health Insurance Portability and Accountability Act)',
      'GDPR',
      'SOX (Sarbanes-Oxley Act)'
    ],
    correct: 1,
    explanation: 'HIPAA\'s Security Rule requires healthcare organizations (covered entities and business associates) to protect electronic PHI (ePHI) through: technical safeguards (encryption, access controls, audit logs), administrative safeguards (security officer, workforce training, incident procedures), and physical safeguards (facility access controls, workstation security). HIPAA also requires breach notification (HIPAA Breach Notification Rule). PCI DSS protects cardholder data. GDPR is the EU privacy regulation. SOX addresses financial reporting controls for public companies.'
  },
  {
    id: 'secplus-q-043',
    domain: 5,
    question: 'An organization classifies its data into four tiers: Public, Internal, Confidential, and Restricted. A file containing merger negotiation documents is being classified. Which tier is MOST appropriate?',
    options: [
      'Public',
      'Internal',
      'Confidential',
      'Restricted'
    ],
    correct: 3,
    explanation: 'Restricted (also called Top Secret in some schemes) is the highest sensitivity tier — for data where unauthorized disclosure would cause severe harm (trade secrets, merger plans, PII combined with financial data, regulated data). Handling typically requires encryption, need-to-know access only, and strict data loss prevention controls. Confidential is for sensitive business data (financials, HR data) — more people can access it but it\'s not public. Internal is for general business information not meant for public disclosure. Public can be freely shared.'
  },
  {
    id: 'secplus-q-044',
    domain: 5,
    question: 'A company in the European Union processes personal data of EU residents. Under GDPR, which right allows an individual to request that a company delete their personal data under certain circumstances?',
    options: [
      'Right to access',
      'Right to rectification',
      'Right to erasure (right to be forgotten)',
      'Right to data portability'
    ],
    correct: 2,
    explanation: 'GDPR (General Data Protection Regulation) provides several rights to data subjects: Right to access (request a copy of their data), Right to rectification (correct inaccurate data), Right to erasure/right to be forgotten (delete data when no longer needed for original purpose, consent withdrawn, or objection to processing), Right to data portability (receive data in machine-readable format), Right to object (stop certain processing activities), Rights related to automated decision-making. The right to erasure is not absolute — it doesn\'t apply when legal obligations require retention.'
  },
  {
    id: 'secplus-q-045',
    domain: 5,
    question: 'Which NIST framework document provides a voluntary, risk-based cybersecurity framework that organizations use to manage and reduce cybersecurity risk, organized around five core functions?',
    options: [
      'NIST SP 800-53 (Security Controls)',
      'NIST SP 800-61 (Incident Response)',
      'NIST Cybersecurity Framework (CSF)',
      'NIST SP 800-171 (Protecting CUI)'
    ],
    correct: 2,
    explanation: 'The NIST Cybersecurity Framework (CSF) v1.1 (v2.0 released 2024) provides a voluntary risk management framework organized around 5 core functions: Identify (assets, risks), Protect (safeguards), Detect (anomalies and events), Respond (response activities), Recover (restoration). Organizations use the CSF to assess their current cybersecurity posture (Current Profile) and define a target state (Target Profile). It\'s technology-neutral and sector-agnostic. NIST SP 800-53 provides a detailed control catalog (used by federal agencies).'
  },
  {
    id: 'secplus-q-046',
    domain: 5,
    question: 'An organization wants to demonstrate to clients that they have effective controls over data security, availability, and confidentiality. Which audit report type is appropriate for sharing with many customers under NDA?',
    options: [
      'PCI DSS Report on Compliance (RoC)',
      'ISO 27001 Certification audit',
      'SOC 2 Type II report',
      'HIPAA compliance assessment'
    ],
    correct: 2,
    explanation: 'SOC 2 (Service Organization Control 2) is an auditing framework for technology and cloud service providers. SOC 2 Type II reports evaluate whether controls were effective over a period of time (typically 6–12 months), covering the Trust Services Criteria: Security, Availability, Processing Integrity, Confidentiality, and Privacy. Type I reports assess design at a point in time; Type II is preferred as it demonstrates sustained effectiveness. SOC 2 reports are commonly requested by enterprise customers during vendor risk assessment. They are shared under NDA, unlike SOC 3 (public summary).'
  },
  {
    id: 'secplus-q-047',
    domain: 5,
    question: 'A company performs a risk assessment and determines a quantitative risk value. If the Single Loss Expectancy (SLE) is $50,000 and the Annualized Rate of Occurrence (ARO) is 0.25 (once every 4 years), what is the Annualized Loss Expectancy (ALE)?',
    options: [
      '$200,000',
      '$50,000',
      '$12,500',
      '$100,000'
    ],
    correct: 2,
    explanation: 'ALE = SLE × ARO = $50,000 × 0.25 = $12,500 per year. ALE represents the expected annual financial impact of a specific risk. Quantitative risk assessment uses this formula to compare risk exposure against the cost of controls: if a security control costs $3,000/year and reduces ALE from $12,500 to $2,500, the ROI is clear. SLE = Asset Value × Exposure Factor (how much of the asset value is lost per incident). ARO = expected frequency of occurrence per year (0.25 = once every 4 years).'
  },
  {
    id: 'secplus-q-048',
    domain: 5,
    question: 'Which regulation sets security standards for processing, storing, and transmitting payment card data and applies to any organization that accepts credit card payments?',
    options: [
      'HIPAA',
      'GDPR',
      'PCI DSS (Payment Card Industry Data Security Standard)',
      'SOX'
    ],
    correct: 2,
    explanation: 'PCI DSS is a contractual standard (not a law) developed by the PCI Security Standards Council (Visa, Mastercard, Amex, Discover, JCB). Any merchant or service provider that processes, stores, or transmits cardholder data must comply. Key requirements: maintain a secure network (firewalls), protect cardholder data (encryption, tokenization), maintain a vulnerability management program (patching, antivirus), strong access controls, network monitoring, and regular security testing. Non-compliance can result in fines and loss of ability to process card payments.'
  },
  {
    id: 'secplus-q-049',
    domain: 5,
    question: 'A security policy document defines how long different types of data must be retained and when it must be securely destroyed. What type of policy is this?',
    options: [
      'Acceptable Use Policy (AUP)',
      'Data Retention and Destruction Policy',
      'Incident Response Policy',
      'Business Continuity Plan (BCP)'
    ],
    correct: 1,
    explanation: 'A Data Retention Policy (also called Data Retention and Destruction Policy) defines: how long different data types must be kept (based on regulatory requirements, legal holds, and business needs), acceptable storage locations, and how data must be securely destroyed when retention period ends (media sanitization standards: NIST 800-88 for digital media — clear, purge, or destroy). For example: financial records = 7 years (IRS), personnel records = varies by jurisdiction, health records = varies by state. Improper disposal of data that should be retained is a compliance violation; keeping data longer than required increases breach risk.'
  },
  {
    id: 'secplus-q-050',
    domain: 5,
    question: 'Which type of risk assessment uses monetary values, probabilities, and formulas (ALE = SLE × ARO) to express risk in financial terms?',
    options: [
      'Qualitative risk assessment',
      'Quantitative risk assessment',
      'Threat modeling',
      'Vulnerability assessment'
    ],
    correct: 1,
    explanation: 'Quantitative risk assessment expresses risk in objective numerical/financial terms: Asset Value (AV), Exposure Factor (EF), Single Loss Expectancy (SLE = AV × EF), Annualized Rate of Occurrence (ARO), Annualized Loss Expectancy (ALE = SLE × ARO). Pros: objective, financial ROI calculations for security investments. Cons: requires accurate data that is often unavailable; calculating probabilities for rare events is difficult. Qualitative assessment uses subjective ratings (Low/Medium/High) and is faster to perform with less data. Most organizations use a hybrid approach.'
  },
  {
    id: 'secplus-q-051',
    domain: 2,
    question: 'An attacker creates a fake wireless access point with the same SSID as the corporate WiFi network. Employees connect to it, and the attacker captures their credentials. What is this attack called?',
    options: [
      'ARP poisoning',
      'DNS hijacking',
      'Evil twin attack',
      'Deauthentication flood'
    ],
    correct: 2,
    explanation: 'An evil twin attack creates a rogue wireless access point that mimics a legitimate network (same SSID, possibly stronger signal). Users who connect have their traffic routed through the attacker. If the network uses HTTP, credentials are visible in plaintext. Mitigations: 802.1X enterprise WiFi authentication (users connect to a certificate-verified network, defeating evil twins), VPN on untrusted networks, HTTPS everywhere. Certificate-based WiFi authentication is the primary defense — the client can verify the server\'s certificate before connecting.'
  },
  {
    id: 'secplus-q-052',
    domain: 3,
    question: 'What is the primary difference between a forward proxy and a reverse proxy in network security?',
    options: [
      'A forward proxy encrypts traffic; a reverse proxy decrypts traffic',
      'A forward proxy represents clients accessing the internet; a reverse proxy represents servers being accessed by clients',
      'A forward proxy is hardware; a reverse proxy is software',
      'A forward proxy is used for web filtering; a reverse proxy cannot perform filtering'
    ],
    correct: 1,
    explanation: 'A forward proxy (web proxy) sits between internal clients and the internet, representing the clients. It provides: web filtering (block categories), caching (reduce bandwidth), anonymization (hide internal IPs), and SSL inspection. A reverse proxy sits in front of servers, representing the servers to external clients. It provides: load balancing (distribute traffic), SSL termination, DDoS protection, WAF functionality, and caching. Clients communicate with the reverse proxy thinking it\'s the real server. Many web application firewalls (WAF) function as reverse proxies.'
  },
  {
    id: 'secplus-q-053',
    domain: 1,
    question: 'A company uses RSA-2048 encryption for key exchange during a TLS handshake. After the session, the encrypted key exchange data is captured. Years later, when the private key is compromised, an attacker could decrypt the recorded session. Which property does RSA-2048 in key exchange LACK in this scenario?',
    options: [
      'Authentication',
      'Confidentiality',
      'Forward Secrecy (Perfect Forward Secrecy)',
      'Integrity'
    ],
    correct: 2,
    explanation: 'Perfect Forward Secrecy (PFS) ensures that compromise of the server\'s long-term private key does NOT allow decryption of previously recorded sessions. RSA key exchange uses the server\'s private key to decrypt the session key — if the private key is later compromised, ALL past sessions can be decrypted. PFS is achieved using ephemeral Diffie-Hellman (DHE) or elliptic curve DHE (ECDHE) for key exchange — a new, temporary key pair is generated for each session and discarded after use. TLS 1.3 mandates PFS — all cipher suites use ECDHE. TLS 1.2 with ECDHE/DHE cipher suites also provides PFS.'
  },
  {
    id: 'secplus-q-054',
    domain: 4,
    question: 'A security analyst is investigating an alert. They find that a process on an endpoint is making outbound connections to an unknown IP address at regular intervals of exactly 60 seconds. What type of malware behavior does this most likely indicate?',
    options: [
      'Ransomware file encryption',
      'Command and Control (C2) beacon traffic',
      'Port scanning of other internal systems',
      'Brute force authentication attacks'
    ],
    correct: 1,
    explanation: 'C2 (Command and Control) beacon traffic is characteristic of remote access trojans (RATs) and APT malware. The compromised endpoint "beacons" home to the attacker\'s C2 server at regular intervals to check for instructions and exfiltrate data. Regular, periodic connections (beaconing) are a key indicator. Security teams use SIEM and network analysis to detect beaconing patterns. Mitigations: DNS filtering/sinkholing, egress filtering (block outbound connections to unknown IPs), TLS inspection, behavioral detection tools (NDR).'
  },
  {
    id: 'secplus-q-055',
    domain: 5,
    question: 'An employee who was recently terminated still has active VPN credentials and uses them to access company systems. Which security process failure allowed this?',
    options: [
      'Lack of multi-factor authentication',
      'Insufficient network segmentation',
      'Failure to perform timely offboarding and account deprovisioning',
      'Absence of data loss prevention (DLP) tools'
    ],
    correct: 2,
    explanation: 'Account deprovisioning (offboarding) must occur immediately when an employee leaves, is terminated, or changes roles. This includes: disabling AD account, revoking VPN credentials, removing MFA enrollment, recovering company devices, removing from email distribution lists, and revoking access to third-party services. The longer former employee accounts remain active after termination, the greater the risk of unauthorized access — whether by the former employee or attackers who compromised their credentials. This should be an automated, triggered process tied to HR offboarding.'
  },
  {
    id: 'secplus-q-056',
    domain: 2,
    question: 'An attacker registers the domain "microsoft.com" hoping users who mistype "microsoft.com" will land on their malicious site. What is this attack called?',
    options: [
      'DNS poisoning',
      'Domain hijacking',
      'Typosquatting (URL hijacking)',
      'Subdomain enumeration'
    ],
    correct: 2,
    explanation: 'Typosquatting (also called URL hijacking) registers domain names that are common typos or misspellings of legitimate domains. Goals: serve phishing pages, distribute malware, intercept credentials intended for the real site. Related: homograph attacks use similar-looking Unicode characters (e.g., Cyrillic "а" instead of Latin "a") to create visually identical domains. Mitigations: organizations can proactively register common typos of their domain; browsers and security tools detect known typosquatting domains. Users should check URLs carefully and bookmark important sites.'
  },
  {
    id: 'secplus-q-057',
    domain: 4,
    question: 'An organization wants to protect sensitive files from being accidentally emailed outside the organization by employees. Which technology should they implement?',
    options: [
      'IDS (Intrusion Detection System)',
      'SIEM (Security Information and Event Management)',
      'DLP (Data Loss Prevention)',
      'MFA (Multi-Factor Authentication)'
    ],
    correct: 2,
    explanation: 'DLP (Data Loss Prevention) technology monitors and controls data in use (endpoint), in motion (network), and at rest (storage). It can: detect sensitive content (PII, credit card numbers, classified markings) in emails, uploads, and file copies; block transmission of sensitive data outside the organization; alert security teams; encrypt data before transmission. Email DLP can quarantine or block emails containing sensitive content patterns. Endpoint DLP can block copying sensitive files to USB drives or personal cloud storage.'
  },
  {
    id: 'secplus-q-058',
    domain: 3,
    question: 'SD-WAN and SASE are two modern network security approaches. What is the primary security advantage of SASE over traditional SD-WAN?',
    options: [
      'SASE provides higher bandwidth than SD-WAN',
      'SASE converges networking and security functions (NGFW, CASB, ZTNA, SWG) into a cloud-delivered service, providing consistent security at the network edge',
      'SASE eliminates the need for encryption',
      'SASE is only for small businesses; SD-WAN is for enterprises'
    ],
    correct: 1,
    explanation: 'SASE (Secure Access Service Edge) converges SD-WAN with cloud-delivered security services: SWG (Secure Web Gateway), CASB, NGFW/FWaaS, and ZTNA (Zero Trust Network Access). Security is enforced at the edge (cloud PoPs) closest to users rather than hairpinning traffic back to a central datacenter. This is ideal for organizations with distributed workforce (remote users, branch offices) accessing cloud applications. Traditional SD-WAN improves WAN performance and routing but requires separate security stack. SASE integrates both. Vendors: Palo Alto Prisma SASE, Zscaler, Netskope, Cisco+'
  },
  {
    id: 'secplus-q-059',
    domain: 2,
    question: 'Fileless malware is particularly difficult to detect because it does not write traditional executable files to disk. Instead, it executes entirely in memory. Which attack stage does fileless malware most commonly exploit?',
    options: [
      'Initial access via phishing email with a .exe attachment',
      'Living-off-the-land techniques using legitimate OS tools (PowerShell, WMI, mshta.exe) already present on the system',
      'Physical access to install a hardware keylogger',
      'Exploiting database SQL injection vulnerabilities'
    ],
    correct: 1,
    explanation: 'Fileless malware "lives off the land" (LotL) — it uses legitimate, pre-installed system tools (PowerShell, WMI, certutil, mshta.exe, regsvr32.exe) to execute malicious code. Because no new executable is written to disk, traditional file-based antivirus doesn\'t detect it. It typically loads shellcode directly into memory via script commands. Detection requires behavioral monitoring: PowerShell script block logging, EDR solutions that monitor process behavior, AMSI (Antimalware Scan Interface) for script-based threats. Mitigations: PowerShell Constrained Language Mode, WDAC/AppLocker, disable unused scripting interpreters.'
  },
  {
    id: 'secplus-q-060',
    domain: 5,
    question: 'A company publishes an Acceptable Use Policy (AUP) for all employees to sign. What does an AUP define?',
    options: [
      'The specific technical controls used to protect company systems',
      'Permitted and prohibited uses of company technology resources, and consequences for violations',
      'The company\'s incident response procedures',
      'How data is backed up and recovered in a disaster'
    ],
    correct: 1,
    explanation: 'An Acceptable Use Policy (AUP) defines the rules for how employees may use company technology resources (computers, network, internet, email, software, mobile devices). It covers: permitted uses, prohibited activities (personal use limits, visiting inappropriate sites, copyright violations, installing unauthorized software), monitoring notice (employees have no expectation of privacy on company systems), and disciplinary consequences for violations. Employees should sign the AUP upon hire and annually. It sets legal expectations and is referenced during insider threat investigations.'
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
