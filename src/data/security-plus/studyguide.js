// Security+ SY0-701 Study Guide

export const studyGuide = [
  {
    id: 'secplus-sg-001',
    domain: 1,
    title: "Cryptography Fundamentals",
    summary: "Study notes for Cryptography Fundamentals.",
    topics: [
      {
        id: 'secplus-sg-001-1',
        title: "Why Cryptography?",
        content: `Cryptography provides the mathematical tools to protect data confidentiality, verify integrity, authenticate identities, and ensure non-repudiation. It is the foundation of nearly every security technology: HTTPS, VPNs, email security, disk encryption, digital certificates, and authentication protocols.

---`,
      },
      {
        id: 'secplus-sg-001-2',
        title: "Symmetric Encryption",
        content: `One key is used for both encryption and decryption. Both parties must securely share the key.

**AES (Advanced Encryption Standard)**
The gold standard. Selected by NIST in 2001 through an open competition. Block cipher: operates on 128-bit blocks. Key sizes: 128-bit (10 rounds), 192-bit (12 rounds), 256-bit (14 rounds). AES-256 is approved for U.S. government Top Secret data. Extremely fast in hardware (Intel/AMD have AES-NI instructions). Used in: BitLocker, FileVault, TLS cipher suites, WPA3, IPsec, SSH.

**3DES (Triple DES)**
Applies DES three times: Encrypt-Decrypt-Encrypt with up to three independent 56-bit keys. Effective key strength of 112 or 168 bits. Much slower than AES. Deprecated by NIST in 2023 — do not use in new designs.

**ChaCha20-Poly1305**
Stream cipher (no fixed block size). Used in TLS 1.3 as an alternative to AES-GCM, particularly on mobile devices without AES hardware acceleration. Poly1305 provides the authentication (MAC). Used by WireGuard VPN.

**Key Challenge:** Symmetric encryption requires secure key distribution — how do two parties share a secret key over an untrusted channel? This is solved by asymmetric key exchange (Diffie-Hellman) combined with symmetric encryption (hybrid cryptosystem).

---`,
      },
      {
        id: 'secplus-sg-001-3',
        title: "Asymmetric Encryption (Public Key Cryptography)",
        content: `Uses a mathematically linked key pair: public key (freely distributable) and private key (kept secret by the owner). What one key encrypts, only the other can decrypt.

**Encryption use case:** Encrypt with recipient's PUBLIC key → Only recipient's PRIVATE key can decrypt.
**Digital signature use case:** Sign with sender's PRIVATE key → Anyone with sender's PUBLIC key can verify.

**RSA (Rivest-Shamir-Adleman)**
Based on the mathematical difficulty of factoring large numbers (product of two large primes). Key sizes: minimum 2048-bit (NIST recommends 3072-bit for long-term security). Used for: certificate key exchange (in TLS 1.2 without DHE), digital signatures in certificates, SSH host keys, email encryption. Much slower than ECC at equivalent security levels.

**ECC (Elliptic Curve Cryptography)**
Based on the algebraic structure of elliptic curves. Provides equivalent security to RSA with dramatically shorter keys: ECC-256 ≈ RSA-3072. Advantages: faster operations, smaller certificates, less bandwidth. Used in: TLS 1.3 (ECDHE key exchange), FIDO2/WebAuthn, mobile devices, IoT, Bluetooth pairing, Bitcoin. Common curves: P-256 (secp256r1), P-384, Curve25519 (X25519 for key exchange, Ed25519 for signatures).

**Diffie-Hellman (DH) / ECDH**
A key agreement protocol that allows two parties to establish a shared secret over an insecure channel without ever transmitting the secret. Neither party sends the actual key — they exchange public values and independently derive the same shared secret. Used in TLS for ephemeral key exchange (DHE/ECDHE). Ephemeral = new key pair per session → enables Perfect Forward Secrecy.

**Perfect Forward Secrecy (PFS)**
When ephemeral Diffie-Hellman (DHE/ECDHE) is used for key exchange, compromise of the server's long-term private key does NOT allow decryption of previously recorded sessions. Each session's encryption key is derived from a temporary key pair that is discarded after the session. TLS 1.3 mandates PFS — all cipher suites use ECDHE. Critical for long-term security in threat environments where traffic is recorded for later decryption.

---`,
      },
      {
        id: 'secplus-sg-001-4',
        title: "Hashing",
        content: `One-way mathematical function producing a fixed-length digest. Properties:
- **Deterministic:** Same input always produces same output
- **One-way:** Computationally infeasible to reverse
- **Collision-resistant:** Computationally infeasible to find two inputs producing the same hash
- **Avalanche effect:** Small input change → completely different output

**SHA-256 (SHA-2 family):** 256-bit output. Secure, widely used. TLS certificates, digital signatures, password hashing (as part of Argon2/bcrypt), file integrity.

**SHA-512:** 512-bit output. More resistant to length extension attacks. Used in some PKI and file integrity contexts.

**SHA-3 (Keccak):** Different internal structure than SHA-2. Resistant to attacks that might theoretically affect SHA-2. NIST-approved alternative.

**MD5:** 128-bit output. BROKEN — known collision attacks. Only acceptable for non-security checksums (file transfer verification, not integrity). NEVER use for passwords or security.

**SHA-1:** 160-bit output. DEPRECATED — collision attacks demonstrated (SHAttered, 2017). Removed from TLS 1.3. Never use for new deployments.

**Password Hashing (specialized):** Argon2, bcrypt, scrypt — designed specifically for passwords. Slow by design (to impede brute force), includes built-in salting. Do NOT use SHA-256 alone for passwords — it's too fast. Use Argon2id (winner of Password Hashing Competition, 2015).

---`,
      },
      {
        id: 'secplus-sg-001-5',
        title: "Digital Signatures",
        content: `Combine asymmetric cryptography with hashing to provide authentication, integrity, and non-repudiation.

**Signing process:**
1. Hash the message: H = SHA-256(message)
2. Encrypt hash with sender's PRIVATE key: Signature = RSA_sign(H, private_key)
3. Send message + signature

**Verification process:**
1. Decrypt signature with sender's PUBLIC key: H' = RSA_verify(Signature, public_key)
2. Hash the received message: H = SHA-256(message)
3. Compare H' with H — if equal, signature is valid

Digital signatures prove:
- The message came from the claimed sender (only they have the private key)
- The message was not modified (hash would change)
- The sender cannot deny sending it (non-repudiation)

---`,
      },
      {
        id: 'secplus-sg-001-6',
        title: "PKI (Public Key Infrastructure)",
        content: `The framework that makes asymmetric cryptography practical at scale by providing a trusted way to associate public keys with identities.

**Certificate Hierarchy:**
- **Root CA:** Self-signed certificate. Trust anchor. Offline and heavily protected. Pre-installed in OS/browser trust stores.
- **Intermediate CA:** Signed by root CA. Issues end-entity certificates. If compromised, only a subset of certificates are affected (isolates root from day-to-day operations).
- **End-Entity Certificate:** Issued to a website (SSL/TLS cert), user, device, or code signing entity.

**X.509 Certificate Contents:**
- Subject (Common Name, SAN — Subject Alternative Name, organization)
- Issuer (CA name)
- Validity period (Not Before, Not After)
- Subject Public Key
- CA's Digital Signature
- Extensions (Key Usage, Extended Key Usage, CDP, CRL Distribution Points)

**Certificate Revocation:**
- CRL (Certificate Revocation List): Periodically published signed list of revoked serial numbers. Can be stale between updates.
- OCSP (Online Certificate Status Protocol): Real-time query for specific certificate status.
- OCSP Stapling: Server includes signed OCSP response in TLS handshake — improves performance and privacy.

**Certificate Pinning:**
Application hardcodes expected certificate or public key. If the presented certificate doesn't match the pin, connection is rejected — prevents MITM even with a CA-signed fraudulent certificate. Used in mobile apps. Risk: if the pinned certificate expires or changes, app breaks.

---`,
      },
      {
        id: 'secplus-sg-001-7',
        title: "Mnemonic: Symmetric vs. Asymmetric",
        content: `**"Symmetric = SAME key, SAME direction"** — one key, shared secret, fast, for data.
**"Asymmetric = APART — different keys, PUBLIC encrypts to PRIVATE, PRIVATE signs to PUBLIC"** — key pair, slow, for key exchange and signatures.

**Hybrid approach (how TLS works):**
1. Use asymmetric (ECDHE) to securely agree on a symmetric key
2. Use symmetric (AES) to encrypt the actual data
Best of both worlds: asymmetric solves key distribution; symmetric provides performance.`,
      },
    ],
  },
  {
    id: 'secplus-sg-002',
    domain: 2,
    title: "Common Threats & Attacks",
    summary: "Study notes for Common Threats & Attacks.",
    topics: [
      {
        id: 'secplus-sg-002-1',
        title: "Malware Categories",
        content: `**Ransomware**
Encrypts victim files and demands payment for decryption key. Modern double-extortion ransomware also exfiltrates data before encrypting. Delivered via phishing, RDP compromise (brute-forced or credential-stuffed), and vulnerability exploitation. Notable campaigns: WannaCry (EternalBlue, unpatched SMBv1, 2017), NotPetya (2017 — destructive, not decryptable), Colonial Pipeline (DarkSide, May 2021), REvil, ALPHV/BlackCat. Defense: offline/immutable backups (3-2-1), EDR, email filtering, patch management, MFA on RDP/VPN, network segmentation (limit lateral movement).

**RAT (Remote Access Trojan)**
Provides attacker with covert remote control. Full featured: keylogging, screen capture, webcam, microphone, file operations, lateral movement. C2 communication uses HTTP(S) to blend with normal traffic. Distributed via phishing attachments, drive-by downloads. Examples: njRAT, AsyncRAT, DarkComet, Cobalt Strike (legitimate pentesting tool abused by attackers).

**Rootkit**
Concealment malware designed to hide itself and other malware from OS and security tools. Types:
- Kernel: modifies OS kernel to hide processes/files
- Bootkit: infects MBR/VBR, loads before OS
- Hypervisor rootkit: runs below OS in a rogue hypervisor
Detection: Secure Boot (prevents unauthorized bootloader), measured boot/TPM, offline scanning. Remediation: typically requires full reimaging.

**Worm vs. Virus**
Virus: attaches to legitimate files, requires user action to spread.
Worm: self-propagates autonomously across networks without user interaction. Particularly dangerous: spreads exponentially. Example: WannaCry spread via EternalBlue without any user clicking.

**Logic Bomb:** Malicious code with a trigger condition (date, event). Often planted by disgruntled insiders.

**Fileless Malware:** Executes in memory using legitimate OS tools (PowerShell, WMI). No files to detect. Requires behavioral monitoring (EDR, PowerShell logging).

**Keylogger:** Records keystrokes to capture credentials. Software (hooks API) or hardware (physical device between keyboard and PC).

**Botnet:** Network of compromised systems (bots) controlled by C2 for DDoS, spam, cryptomining.

---`,
      },
      {
        id: 'secplus-sg-002-2',
        title: "Social Engineering",
        content: `Social engineering exploits human psychology rather than technical vulnerabilities. Often easier than technical attacks because humans are the weakest link.

**Phishing Family:**
| Type | Description |
|------|-------------|
| Phishing | Mass emails impersonating trusted entities |
| Spear Phishing | Targeted phishing using personal research/OSINT |
| Whaling | Spear phishing targeting executives |
| Vishing | Voice/phone-based social engineering |
| Smishing | SMS/text-based phishing |
| BEC (Business Email Compromise) | Impersonating executives to authorize fraud |

**Pretexting:** Creating a believable fabricated scenario/identity to extract information.

**Baiting:** Using physical media (USB drives) or enticing downloads to deliver malware.

**Quid Pro Quo:** Offering something (IT help, gift cards) in exchange for information or access.

**Tailgating/Piggybacking:** Following authorized person through secured door without badging in.

**Watering Hole:** Compromising a website the target community visits.

**Typosquatting:** Registering lookalike domains (amaz0n.com) to catch users who mistype URLs.

**Defense against all social engineering:**
1. Security awareness training (recognize and report)
2. Verification procedures (call back using official numbers, not numbers provided by caller)
3. Policy enforcement (IT will never ask for your password)
4. Technical controls (email filtering, MFA, DNSSEC)

---`,
      },
      {
        id: 'secplus-sg-002-3',
        title: "Vulnerability Types",
        content: `**Buffer Overflow:** Writing past the end of a buffer overwrites adjacent memory. Can redirect code execution. Mitigations: ASLR, DEP/NX, stack canaries, safe languages.

**SQL Injection:** Inserting malicious SQL into unsanitized input fields. Primary defense: parameterized queries.

**XSS (Cross-Site Scripting):** Injecting scripts into web pages viewed by others. Defense: output encoding, Content Security Policy.

**CSRF (Cross-Site Request Forgery):** Tricking an authenticated browser into making unauthorized requests. Defense: CSRF tokens, SameSite cookies.

**Privilege Escalation:** Gaining higher privileges than authorized. Vertical: low user → admin. Horizontal: user A → user B. Exploits misconfigurations, OS vulnerabilities, or weak access controls.

**Race Condition (TOCTOU — Time of Check to Time of Use):** Exploiting the window between when a condition is checked and when it is used. Example: between checking if a file exists and opening it, an attacker substitutes a different file (symlink attack).

**Zero-Day:** Vulnerability unknown to the vendor — no patch available.

---`,
      },
      {
        id: 'secplus-sg-002-4',
        title: "Network Attacks",
        content: `**DoS vs. DDoS:**
DoS = single source. DDoS = distributed sources (botnet). DDoS is harder to block because you can't just blacklist one IP. Types: volumetric (bandwidth flood), protocol (SYN flood), application layer (HTTP flood).

**ARP Poisoning:** Sends gratuitous ARP to map attacker's MAC to victim's/gateway's IP on local network. Enables MITM on LAN. Defense: Dynamic ARP Inspection (DAI) on managed switches.

**DNS Poisoning:** Corrupts DNS resolver cache with fraudulent records. Users directed to malicious IPs even when typing correct domain names. Defense: DNSSEC, DoH/DoT.

**On-Path (MITM) Attack:** Attacker intercepts and can modify traffic between two parties. Enabled by ARP poisoning, DNS poisoning, rogue WiFi (evil twin). Defense: TLS with certificate validation, HSTS, mutual TLS.

**Evil Twin:** Rogue AP mimicking legitimate WiFi SSID. Defense: 802.1X WiFi (EAP-TLS), VPN on untrusted networks.

**Password Attacks:**
- Brute force: try every combination. Defense: account lockout, long passwords.
- Dictionary: wordlist of common passwords. Defense: complex/long passwords.
- Rainbow table: precomputed hash lookups. Defense: salted hashes (Argon2/bcrypt).
- Credential stuffing: use breach lists against other sites. Defense: MFA, breach password checking.
- Pass-the-hash: use NTLM hash without cracking. Defense: Credential Guard, protected users.

---`,
      },
      {
        id: 'secplus-sg-002-5',
        title: "Threat Actor Categories",
        content: `| Actor Type | Motivation | Resources | Examples |
|-----------|-----------|-----------|---------|
| Nation-State (APT) | Espionage, disruption | Very high | APT28 (Russia), APT41 (China), Lazarus (DPRK) |
| Organized Crime | Financial gain | High | Ransomware groups (LockBit, ALPHV) |
| Hacktivist | Ideology/publicity | Medium | Anonymous |
| Insider Threat | Revenge, financial, espionage | High (access) | Disgruntled employees |
| Script Kiddie | Curiosity/recognition | Low | Uses existing tools |

**APT Characteristics:** Targeted, stealthy, persistent, multi-stage, well-resourced. Dwell time (time from initial access to detection) has historically been 200+ days.

**Mnemonic for attack types:**
- SPAM = Spear phishing, Pretexting, ARP poisoning, Malware
- Remember: technical attacks exploit software; social engineering exploits HUMANS
- Zero-day: "Zero days to patch it"
- Watering hole: animals gather at water — attackers wait where targets gather online`,
      },
    ],
  },
  {
    id: 'secplus-sg-003',
    domain: 3,
    title: "Network Security Architecture",
    summary: "Study notes for Network Security Architecture.",
    topics: [
      {
        id: 'secplus-sg-003-1',
        title: "Network Segmentation",
        content: `Network segmentation divides the network into smaller, controlled segments to:
- Limit lateral movement if one segment is compromised
- Apply different security policies to different trust levels
- Meet regulatory requirements (PCI DSS requires isolation of cardholder data environment)
- Improve performance (reduce broadcast domains)

**VLAN (Virtual LAN):** Layer 2 segmentation via switches. Separate broadcast domains without separate physical hardware. Traffic between VLANs requires routing through a firewall/router. VLANs isolate end-user workstations from servers, IoT devices, printers, etc. Tag-based (802.1Q) VLANs on trunk ports allow multiple VLANs on one physical link.

**DMZ (Demilitarized Zone):** Segment for public-facing servers (web, email, DNS). Protected by firewalls on both sides — internet and internal network. If DMZ server is compromised, attacker still faces inner firewall to reach internal resources. Classic implementation: two firewalls (outer allows internet → DMZ; inner allows DMZ → internal only for specific return traffic).

**Air Gap:** Complete physical separation — no network connection between the isolated system and other networks. Used for: nuclear control systems, critical infrastructure, top-secret government systems, offline backups. Data transfer only via physical media (USB) with strict controls. Extremely secure but operationally limiting.

**Microsegmentation:** Granular segmentation at the individual workload level (VM, container, application component). East-west traffic (between servers in the same data center) is controlled and inspected. Implemented via SDN (NSX, ACI), host-based firewalls orchestrated centrally, or service mesh (Istio for Kubernetes). Limits lateral movement even within the "trusted" internal network. Core zero trust principle.

---`,
      },
      {
        id: 'secplus-sg-003-2',
        title: "Firewall Types",
        content: `**Packet-Filtering Firewall (Stateless)**
Examines each packet independently against a rule set (source IP, destination IP, source port, destination port, protocol). No memory of connection state. Simple, fast, but limited. Cannot distinguish legitimate TCP responses from unsolicited inbound packets (both look like new packets). Implemented in ACLs on routers.

**Stateful Inspection Firewall**
Tracks the state of network connections (TCP handshake progression, established sessions). Maintains a state table. Can distinguish legitimate responses (ESTABLISHED) from unsolicited inbound packets. Blocks packets that don't match any known connection state. Became the standard firewall type. Understands TCP/UDP but not application-layer content.

**Application-Layer Gateway (Proxy Firewall)**
Intercepts all traffic at the application layer, acting as a proxy (client ↔ proxy ↔ server). Deep understanding of specific protocols (HTTP, FTP, DNS). Can inspect application content, perform authentication, and cache responses. All traffic terminates at the proxy — no direct connection between client and server. Performance overhead.

**NGFW (Next-Generation Firewall)**
Combines stateful inspection with: Deep packet inspection (DPI), Application identification (regardless of port), User identity-based policies (LDAP/AD integration), Integrated IPS, SSL/TLS decryption, URL filtering, and threat intelligence feeds. NGFW can identify Facebook vs. YouTube on port 443 — impossible with traditional stateful firewalls. Industry standard for enterprise networks. Examples: Palo Alto PA-Series, Cisco Firepower, Fortinet FortiGate.

**WAF (Web Application Firewall)**
Specialized reverse proxy protecting web applications from Layer 7 attacks (SQLi, XSS, CSRF, OWASP Top 10). Two modes: learning mode (builds model of normal traffic), protection mode (blocks anomalies). Cloud WAFs (AWS WAF, Cloudflare) protect against DDoS. Required for PCI DSS compliance when applications cannot be patched.

---`,
      },
      {
        id: 'secplus-sg-003-3',
        title: "Intrusion Detection & Prevention",
        content: `**Detection Methods:**
- **Signature-based:** Matches traffic against database of known attack signatures. Low false positives, but misses zero-days and variants. Requires regular signature updates.
- **Anomaly/Behavior-based:** Establishes a baseline of "normal" behavior, alerts on deviations. Catches novel attacks. Higher false positive rate — normal behavior changes can trigger alerts. ML-enhanced anomaly detection is improving this.
- **Heuristic:** Uses rules of thumb about attack behavior patterns.

**Deployment:**
- NIDS/NIPS: Network-based, sees all network traffic flowing through sensor placement.
- HIDS/HIPS: Host-based, installed on endpoint, sees all activity on that system.
- Inline (IPS): Traffic flows through the sensor — can block in real time. Single point of failure if it fails.
- Passive (IDS): Traffic is mirrored to sensor — alerts only, cannot block. No single point of failure.

**Alert Types:**
- True Positive: correctly identified attack
- True Negative: correctly ignored benign traffic
- False Positive: benign traffic flagged as malicious (wastes analyst time → alert fatigue)
- False Negative: real attack not detected (most dangerous)
Tuning IDS/IPS aims to minimize both false positive and false negative rates.

---`,
      },
      {
        id: 'secplus-sg-003-4',
        title: "VPN Types",
        content: `**Remote Access VPN**
Individual users connect from remote locations (home, coffee shop) to corporate network. Client software establishes encrypted tunnel. Protocols: IPsec/IKEv2 (native on most platforms), SSL/TLS VPN (Cisco AnyConnect, Palo Alto GlobalProtect — works through firewalls/NAT), WireGuard (modern, lightweight). Split tunneling: option where only corporate-destined traffic goes through VPN (internet traffic goes directly) vs. full tunneling (all traffic through VPN).

**Site-to-Site VPN**
Permanently connects two or more networks (branch offices, cloud VPC to on-premises). Typically IPsec tunnels between firewall/router devices. Transparent to end users — routing handles traffic. Replaces expensive MPLS for branch connectivity.

**Clientless SSL VPN**
Web browser-based access to specific applications (web apps, RDP via HTML5, file shares). No VPN client needed — good for contractors, BYOD, or limited access scenarios. Less secure than full VPN (limited to browser-accessible resources).

**Zero Trust Network Access (ZTNA)**
Modern alternative to VPN. Instead of granting broad network access, ZTNA provides access only to specific applications based on identity and device health verification. No lateral movement possible — users can't reach the broader network. Part of SASE architecture. Examples: Cloudflare Access, Zscaler Private Access, Palo Alto Prisma Access.

---`,
      },
      {
        id: 'secplus-sg-003-5',
        title: "Identity Federation & SSO",
        content: `**SAML 2.0 (Security Assertion Markup Language)**
XML-based standard for SSO between organizations (federated identity) or between enterprise and SaaS. Roles: Identity Provider (IdP — authenticates users, Azure AD, Okta), Service Provider (SP — the application, Salesforce, ServiceNow). Flow: SP redirects to IdP → IdP authenticates → IdP returns signed SAML assertion → SP grants access. Used for enterprise SSO to web applications.

**OAuth 2.0**
Authorization framework (not authentication). Allows apps to access resources on behalf of users via access tokens without sharing passwords. Grant types: Authorization Code (most secure, for web apps), Implicit (deprecated), Client Credentials (machine-to-machine), Device Code (TVs, IoT). Access tokens can be scoped (limited to specific permissions).

**OpenID Connect (OIDC)**
Authentication layer on top of OAuth 2.0. Adds identity information (ID token in JWT format) to OAuth's authorization. "Log in with Google" uses OIDC. Google authenticates the user and provides an ID token to the app. Modern mobile-friendly alternative to SAML. JWT (JSON Web Token) is the token format: header.payload.signature (base64-encoded, dot-separated).

---`,
      },
      {
        id: 'secplus-sg-003-6',
        title: "Cloud Security",
        content: `**Shared Responsibility Model:**
IaaS (VMs): Provider = hardware/datacenter/hypervisor. Customer = OS, middleware, apps, data.
PaaS (App platform): Provider = OS, runtime, middleware. Customer = apps, data.
SaaS (Software): Provider = everything. Customer = user access, data.
Key exam point: In IaaS, YOU patch the OS. The cloud provider only patches the hypervisor and physical infrastructure.

**Cloud Security Controls:**
- CASB (Cloud Access Security Broker): visibility/control over cloud service usage
- Cloud-native security (AWS Security Hub, Azure Defender) for cloud workload protection
- Identity-first security: strong IAM is the perimeter in the cloud (MFA, least privilege, PAM)
- Encryption: Customer-managed keys (CMK) for sensitive data
- VPC/VNet security groups (cloud-native "firewalls" — stateful packet filtering)
- Cloud WAF, Shield (DDoS) for public-facing cloud resources

**SASE (Secure Access Service Edge):**
Converges SD-WAN + cloud-delivered security (SWG, CASB, NGFW as a Service, ZTNA) into a unified cloud service. Security enforcement moves to the edge (cloud PoPs) close to users. Eliminates the need to hairpin traffic to a central datacenter for inspection. Ideal for distributed organizations with many remote users and cloud applications.`,
      },
    ],
  },
  {
    id: 'secplus-sg-004',
    domain: 4,
    title: "Identity & Access Management",
    summary: "Study notes for Identity & Access Management.",
    topics: [
      {
        id: 'secplus-sg-004-1',
        title: "Authentication Factors",
        content: `MFA (Multi-Factor Authentication) requires two or more factors from different categories:

| Factor | Category | Examples |
|--------|----------|---------|
| Password, PIN, security question | Something you KNOW | Password manager, passphrase |
| Authenticator app, hardware token, smart card, phone | Something you HAVE | TOTP, YubiKey, RSA SecurID |
| Fingerprint, face scan, retina, voice | Something you ARE | Windows Hello, Touch ID, Face ID |
| GPS location, IP geolocation | Somewhere you ARE | Conditional access by location |
| Behavioral patterns (typing speed, mouse movement) | Something you DO | Behavioral biometrics |

**MFA Strengths:**
- TOTP (Google Authenticator, Authy): Time-based OTP, requires possession of enrolled device. Vulnerable to real-time phishing (attacker relays OTP immediately).
- Push Notification (Duo, Microsoft Authenticator): Easier to use. Vulnerable to MFA fatigue attacks (flood user with push requests until they approve).
- Hardware FIDO2 Key (YubiKey): Phishing-resistant — key uses domain binding (only works on registered domains, fake sites can't intercept). Highest security. Requires physical device.
- Passkeys (FIDO2/WebAuthn): Device-based, biometric-protected cryptographic credential. Phishing-resistant. Tied to specific origin (domain). Emerging as replacement for passwords.
- SMS OTP: Convenient but weakest MFA — vulnerable to SIM swapping (attacker ports your phone number) and SS7 interception. Better than no MFA but deprecated by NIST.

---`,
      },
      {
        id: 'secplus-sg-004-2',
        title: "Single Sign-On (SSO) & Federation",
        content: `**Benefits of SSO:**
- Users authenticate once and access multiple applications
- Centralized policy enforcement (MFA requirement, session duration)
- Simplified offboarding (disable one account → all access revoked)
- Reduced password fatigue (fewer passwords → stronger passwords chosen)
- Audit trail for all authentication events in one place

**Risk of SSO:** The IdP (Identity Provider) account becomes the master key. Compromise of the SSO account gives access to all connected applications. **MFA on the IdP is critical.**

**Federation:** Extending SSO across organizational boundaries. Company A trusts Company B's IdP — employees of B can access A's resources without separate credentials. Based on SAML or OIDC trust relationships. Reduces the need for guest accounts or shared credentials.

---`,
      },
      {
        id: 'secplus-sg-004-3',
        title: "Privileged Access Management (PAM)",
        content: `Privileged accounts (Domain Admin, root, service accounts with broad permissions) are the most valuable targets for attackers. A compromised privileged account can be used to escalate the entire breach.

**PAM Core Capabilities:**
- **Credential Vaulting:** Admin passwords stored in encrypted vault. Checked out for use and automatically rotated after each use (or on schedule). Admins never know the actual password — they click to connect and the PAM system injects credentials.
- **Session Recording:** All privileged sessions recorded (keystrokes + screen). Reviewed for suspicious activity. Required for compliance (PCI DSS, SOX).
- **Just-In-Time (JIT) Access:** Privileged access granted only when needed, for a specific time window, for a specific task. Eliminates standing privilege (accounts with persistent admin rights create persistent attack surface).
- **Dual Control (Two-Man Rule):** Critical operations require approval from a second person before the credential is released.
- **Least Privilege Enforcement:** Service accounts have only the permissions their function requires.

---`,
      },
      {
        id: 'secplus-sg-004-4',
        title: "Access Control Models",
        content: `**DAC (Discretionary Access Control)**
Resource owner decides who can access their resources and can grant others access. Most flexible, most common in commercial systems. Example: NTFS file permissions — the file owner can modify the ACL. Risk: permission sprawl (owners keep granting access; no one removes old permissions). Windows, macOS, and Linux all implement DAC for filesystem permissions.

**MAC (Mandatory Access Control)**
A central authority (the system, not users) controls access based on security labels (sensitivity level) and clearances. Users cannot override or delegate access. Used in military/government systems. Example: a file labeled "SECRET" can only be accessed by users with "SECRET" clearance. SELinux and AppArmor implement MAC-like enforcement for Linux. Very rigid but highly secure.

**RBAC (Role-Based Access Control)**
Permissions assigned to roles; users assigned to roles. Simplifies administration: changing a user's access means changing role membership, not individual permissions. Supports separation of duties (some roles are mutually exclusive). Enterprise standard. Example: AD security groups used as roles for file share permissions. Best practice: AGDLP (Accounts → Global groups → Domain Local groups → Permissions).

**ABAC (Attribute-Based Access Control)**
Access decisions based on attributes: user attributes (department, clearance, job title), resource attributes (classification, owner, type), and environmental attributes (time of day, network location, device posture). Can express complex policies: "HR staff can access salary records only from corporate network during business hours using compliant devices." More flexible than RBAC but more complex. Used in zero trust implementations and government environments.

**RBAC vs. ABAC in practice:**
Most organizations start with RBAC for simplicity. ABAC adds context-aware decisions for sensitive resources. Modern identity platforms (Azure AD Conditional Access) implement ABAC for access control decisions.

---`,
      },
      {
        id: 'secplus-sg-004-5',
        title: "LDAP / Active Directory Integration",
        content: `**LDAP (Lightweight Directory Access Protocol)**
Protocol for accessing and modifying directory services. Port 389 (unencrypted), 636 (LDAPS — LDAP over TLS). Used to: query AD for user information, authenticate users (LDAP bind), search for group memberships. Many applications (Linux, network devices, VPNs, SIEMs) use LDAP to authenticate against Active Directory. Always use LDAPS (encrypted) in production. AD extends LDAP with Windows-specific attributes and Kerberos authentication.

**Kerberos Authentication (Active Directory)**
The primary authentication protocol in AD domains. Ticket-based: users get a Kerberos TGT (Ticket-Granting Ticket) from the KDC (Key Distribution Center / Domain Controller) after initial authentication. The TGT is used to request Service Tickets for specific resources without re-entering credentials (enables SSO within the domain). Time-sensitive (tickets expire); all machines must be within 5 minutes of each other (NTP critical for Kerberos). Pass-the-ticket attacks steal Kerberos tickets; Golden Ticket attacks forge a TGT using the KRBTGT account hash.

**NTLM (NT LAN Manager)**
Legacy Windows authentication protocol. Challenge-response mechanism using password hashes. Weaknesses: pass-the-hash, NTLM relay attacks, weaker cryptographic design than Kerberos. Modern guidance: disable NTLM where possible; use Kerberos for domain authentication. Protected Users security group forces Kerberos and prevents NTLM caching. Credential Guard virtualizes LSA to protect against NTLM hash extraction.

---`,
      },
      {
        id: 'secplus-sg-004-6',
        title: "Endpoint Security",
        content: `**EDR (Endpoint Detection and Response):** Continuous behavioral monitoring, threat hunting, automated response. See flashcards.

**DLP (Data Loss Prevention):** Prevents unauthorized data exfiltration from endpoints. Monitors clipboard, email, USB, web uploads, printing for sensitive content patterns.

**Full Disk Encryption:**
- Windows: BitLocker (AES-256, TPM integration for key protection, recovery key stored in AD)
- macOS: FileVault (XTS-AES-128, tied to user password or institutional key)
- Linux: LUKS/dm-crypt (integrated into most distributions)
- Self-encrypting drives (SED) with TCG Opal standard: hardware-based, transparent to OS

TPM (Trusted Platform Module): Hardware chip that stores encryption keys securely, measures system state at boot (platform attestation). BitLocker uses TPM to seal encryption key — can only be unsealed when measured boot matches expected state (ensures no tampering with boot process).

**HIPS (Host-based Intrusion Prevention System):** Monitors processes, file system, registry, and network connections on the host for malicious behavior. Blocks suspicious actions. Integrated into modern EDR solutions.

**Application Whitelisting (WDAC/AppLocker):**
Only explicitly approved applications are allowed to run. All others blocked by default. Highly effective against malware — even zero-day malware usually can't run if it's not on the whitelist. Operational challenge: maintaining whitelist as software needs change. Windows Defender Application Control (WDAC) is the modern enforcement mechanism.`,
      },
    ],
  },
  {
    id: 'secplus-sg-005',
    domain: 4,
    title: "Incident Response",
    summary: "Study notes for Incident Response.",
    topics: [
      {
        id: 'secplus-sg-005-1',
        title: "What Is a Security Incident?",
        content: `A security incident is any event that actually or potentially jeopardizes the CIA (Confidentiality, Integrity, Availability) of information assets. An event is an observable occurrence; an incident is an event with negative security consequences.

**Examples of security incidents:** Malware infection, unauthorized access to systems, data breach, ransomware attack, DDoS making services unavailable, insider data theft, misconfigured cloud storage exposing data.

**Events that are NOT incidents (just events):** Failed login attempt (within normal patterns), port scan from internet (routine background noise), firewall blocking routine traffic.

---`,
      },
      {
        id: 'secplus-sg-005-2',
        title: "NIST SP 800-61 Incident Response Lifecycle",
        content: `**Phase 1: Preparation**
Build the capability to respond BEFORE an incident occurs:
- Create and maintain an Incident Response Plan (IRP) — documented procedures for different incident types
- Build an Incident Response Team (IRT/CSIRT) — define roles (incident manager, technical analysts, legal, communications, executive sponsor)
- Conduct tabletop exercises and simulations — practice makes perfect
- Deploy tools: SIEM, EDR, forensic software, communication channels (out-of-band if systems are compromised)
- Establish contact lists: ISPs, cloud providers, law enforcement, cyber insurance, forensic vendors
- Define severity levels and escalation paths

**Phase 2: Detection & Analysis**
Identify that an incident has occurred and understand its scope:
- Detection sources: SIEM alerts, EDR detection, user reports, threat intelligence, external notification (FBI, vendor, customer)
- Initial analysis: What type of incident? What systems are affected? What is the severity?
- Prioritize: life safety → critical business systems → data integrity → availability
- Preserve evidence from the start: memory dumps, disk images, log captures
- Establish incident timeline: when did it start? (not always when it was detected — dwell time)
- Determine indicators of compromise (IoCs): malicious IP, hash of malware, C2 domain, attacker TTPs

**Phase 3: Containment**
Stop the spread WITHOUT destroying evidence:
- Short-term containment: isolate affected systems from network (network-level isolation, not power-off if possible — memory contains valuable evidence). EDR isolation capability enables rapid network isolation with one click.
- Evidence preservation: memory acquisition (before power off), disk imaging, logs
- Alternative systems: keep business running via workarounds, failover, manual processes if possible
- Identify all affected systems — attackers often have multiple footholds

**Phase 4: Eradication**
Remove the root cause:
- Remove malware (identified by forensic analysis, hash comparison)
- Close the initial access vector (patch vulnerability, reset compromised credentials, disable affected account)
- Remove backdoors and persistence mechanisms (scheduled tasks, registry run keys, rogue local accounts, cron jobs, modified SSH authorized_keys)
- Consider reimaging vs. cleaning: for sophisticated intrusions, reimaging from known-good backups is more reliable than attempting to clean a compromised system

**Phase 5: Recovery**
Restore systems to normal operation:
- Restore from clean backups (verify backup integrity before restore)
- Reimage systems if contaminated
- Reset all compromised credentials (and any with similar access paths)
- Apply patches that remediate the exploited vulnerability
- Phased return to production with enhanced monitoring
- Validate functionality before removing monitoring/enhanced controls
- Notify affected parties if required (breach notification laws: 72 hours for GDPR, 60 days for HIPAA breach notification)

**Phase 6: Post-Incident Activity (Lessons Learned)**
Conducted 1–2 weeks after recovery while details are fresh:
- What happened? Root cause analysis
- What did we do well? What could be improved?
- Update IR plan, playbooks, detection rules
- Share IoCs with threat intelligence community (ISACs)
- Update security controls to prevent recurrence

---`,
      },
      {
        id: 'secplus-sg-005-3',
        title: "SIEM and Log Analysis",
        content: `**SIEM Architecture:**
Log collectors → parsing/normalization → correlation engine → alerting → dashboards/reporting → case management

**Key Log Sources for IR:**
- Windows Security Event Log: 4624 (login success), 4625 (login failure), 4720 (account created), 4740 (lockout), 4688 (process created)
- Firewall/NGFW: allow/deny logs with src/dst IP, port, application
- DNS logs: queries for C2 domains (unusual TLDs, long/encoded domain names are red flags)
- Proxy/web gateway logs: user browsing, file downloads
- EDR telemetry: process trees, file writes, network connections
- Authentication logs: AD DS audit events, VPN logs, cloud SSO logs

**Common Attack Patterns to Detect:**
- Brute force: many 4625 events, then 4624 from same source
- Lateral movement: successful logins from unusual source hosts (use of admin shares C$, ADMIN$, IPC$)
- Data exfiltration: large outbound transfers to cloud storage, unusual high-volume DNS queries (DNS tunneling)
- C2 beaconing: regular periodic outbound connections to uncommon destination, often to cloud hosting providers
- Privilege escalation: account suddenly added to admin group (4728 — member added to global group)
- Persistence: new scheduled task created (4698), new service installed (7045), registry Run key modified

---`,
      },
      {
        id: 'secplus-sg-005-4',
        title: "SOAR (Security Orchestration, Automation and Response)",
        content: `SOAR platforms automate repetitive IR tasks through playbooks, reducing analyst workload and MTTR.

**Example Playbook — Phishing Alert:**
1. Extract sender, subject, URLs, attachments from email
2. Auto-query threat intelligence (VirusTotal, Shodan) for IoCs
3. Check if other users received same email
4. If malicious: automatically quarantine all instances of email across mailboxes
5. Block malicious URL/IP in proxy and firewall
6. Alert security analyst with enriched context
7. Create ticket with all evidence pre-populated

**Metrics:**
- MTTD (Mean Time to Detect): average time from incident start to detection
- MTTR (Mean Time to Respond): average time from detection to containment/resolution
- Alert volume and false positive rate
- Coverage (what % of incident types have playbooks)

---`,
      },
      {
        id: 'secplus-sg-005-5',
        title: "Forensic Principles",
        content: `**Order of Volatility (collect most volatile evidence first):**
1. CPU registers and cache (lost on power off)
2. RAM / memory (lost on power off)
3. Network connections, process table (lost on reboot)
4. Running processes
5. Hard disk contents
6. Remote logging and monitoring data
7. Physical configuration, network topology, archival media

**Chain of Custody:** Document every person who had access to evidence from collection through legal proceedings. Each transfer is logged with timestamps, names, and signatures. Maintaining chain of custody is critical if the incident results in legal action.

**Write Blockers:** Hardware or software that prevents any writes to the evidence disk during imaging — ensures the original evidence is not modified. Forensic images (dd, FTK Imager) are bit-for-bit copies. Hash the original and the image (MD5 or SHA-256) to prove the copy is identical.

**Legal Considerations:**
- Consult legal counsel before conducting investigation
- Determine whether law enforcement should be notified
- Preserve evidence in legally defensible manner
- Be aware of jurisdiction issues for cloud data (EU data may require mutual legal assistance treaty (MLAT) to obtain from US providers)`,
      },
    ],
  },
  {
    id: 'secplus-sg-006',
    domain: 5,
    title: "Risk Management & Compliance",
    summary: "Study notes for Risk Management & Compliance.",
    topics: [
      {
        id: 'secplus-sg-006-1',
        title: "Risk Management Fundamentals",
        content: `**Risk = Threat × Vulnerability × Asset Value (Impact)**

- **Threat:** A potential event that could cause harm (attacker, natural disaster, human error)
- **Vulnerability:** A weakness that a threat can exploit (unpatched software, weak password, unlocked door)
- **Impact:** The consequence if the threat successfully exploits the vulnerability
- **Likelihood/Probability:** How likely is the threat to materialize?
- **Risk:** The combination of likelihood and impact

**Risk Management Process:**
1. Risk Identification — identify what could go wrong (threat modeling, vulnerability scans, security assessments)
2. Risk Analysis — assess likelihood and impact
3. Risk Prioritization — rank risks to focus limited resources
4. Risk Treatment — decide how to handle each risk
5. Risk Monitoring — continuously reassess as environment changes

---`,
      },
      {
        id: 'secplus-sg-006-2',
        title: "Quantitative Risk Assessment",
        content: `Uses objective financial figures. Formulas to memorize for Security+:

**Asset Value (AV):** The financial value of the asset being protected.

**Exposure Factor (EF):** The percentage of the asset value lost if the risk materializes (0.0–1.0).

**Single Loss Expectancy (SLE) = AV × EF**
The expected financial loss per individual incident.
Example: Server worth $100,000, ransomware would destroy 60% of its value → SLE = $100,000 × 0.60 = $60,000

**Annualized Rate of Occurrence (ARO):** Expected number of times the event occurs per year.
ARO = 1: once per year. ARO = 0.25: once every 4 years. ARO = 4: four times per year.

**Annualized Loss Expectancy (ALE) = SLE × ARO**
Expected annual financial impact of a specific risk.
Example: SLE = $60,000, ARO = 0.25 → ALE = $60,000 × 0.25 = $15,000/year

**Using ALE for Security Investment Decisions:**
If a control costs $5,000/year and reduces ALE from $15,000 to $3,000:
- Benefit: $12,000/year reduction in expected loss
- Cost: $5,000/year
- Net value: $7,000/year benefit → worthwhile investment

---`,
      },
      {
        id: 'secplus-sg-006-3',
        title: "Qualitative Risk Assessment",
        content: `Uses descriptive ratings (Low/Medium/High, 1–5 scale, Red/Yellow/Green) rather than dollar amounts. Faster and requires less data than quantitative. Useful when accurate financial data is unavailable. Common output: risk matrix (likelihood vs. impact grid).

**Qualitative vs. Quantitative:**
| Aspect | Qualitative | Quantitative |
|--------|-------------|-------------|
| Output | Ratings (H/M/L) | Financial values |
| Data needed | Expert judgment | Historical data, financial figures |
| Effort | Lower | Higher |
| Communication | Intuitive | Precise |
| Use cases | Initial triage, executive communication | Security investment ROI, insurance |

Most real-world programs use a hybrid approach.

---`,
      },
      {
        id: 'secplus-sg-006-4',
        title: "Risk Treatment Options",
        content: `**Mitigation (Risk Reduction)**
Implement controls to reduce likelihood or impact. Examples: patch software (reduces likelihood of exploitation), add MFA (reduces impact of credential theft), encrypt data (reduces impact of data breach), segment networks (reduces impact of breach). Most active risk management strategy. Cost-benefit analysis: control cost vs. risk reduction value.

**Avoidance**
Eliminate the risk by not conducting the risky activity. Example: don't collect sensitive data you don't need (can't breach what you don't have), don't operate in high-risk geographic areas. Sometimes the only viable option for extreme risks. Opportunity cost: avoiding risk may mean forgoing business opportunities.

**Transference (Risk Sharing)**
Shift financial consequences to a third party. Cyber liability insurance: covers breach response costs (forensics, notification, legal, PR, credit monitoring), regulatory fines (limited), ransomware payments (sometimes), business interruption. Vendor contracts with SLAs and liability clauses. Note: transference only covers financial impact — reputational damage and operational disruption still occur.

**Acceptance**
Acknowledge the risk and decide not to take action. Acceptable when: the cost of mitigation exceeds the potential loss, the probability is extremely low, or the risk is within the organization's defined risk appetite. Must be a conscious, documented decision — not the result of ignoring the risk. **Risk appetite:** the amount of risk an organization is willing to accept in pursuit of its objectives.

---`,
      },
      {
        id: 'secplus-sg-006-5',
        title: "Compliance Frameworks",
        content: `**NIST CSF (Cybersecurity Framework) v2.0**
Voluntary, risk-based framework. Six functions in v2.0: Govern (added in v2.0 — cybersecurity strategy, roles, risk management), Identify, Protect, Detect, Respond, Recover. Used by organizations of all sizes and sectors. Not prescriptive — provides flexible structure to improve cybersecurity posture over time.

**NIST SP 800-53**
Security and Privacy Controls for Information Systems — the comprehensive control catalog used by U.S. federal agencies and contractors. Includes 20 control families (AC: Access Control, AU: Audit, CM: Configuration Management, IA: Identification & Authentication, SI: System and Information Integrity, etc.). NIST SP 800-171 is a subset for protecting CUI (Controlled Unclassified Information) in non-federal systems — relevant for DoD contractors.

**ISO 27001**
International standard for ISMS (Information Security Management System). Risk-based approach: identify risks, implement controls from Annex A (93 controls across 4 themes), certify with accredited auditor. Two-part audit: Stage 1 (documentation review), Stage 2 (implementation verification). Surveillance audits annually, full recertification every 3 years. Globally recognized; shows customers that security is managed systematically.

**SOC 2**
AICPA audit framework for technology/cloud service providers. Trust Services Criteria: Security (mandatory), plus optional: Availability, Processing Integrity, Confidentiality, Privacy. Type I: design at a point in time. Type II: operating effectiveness over 6–12 months — preferred. SOC 2 report shared under NDA. Required by enterprise customers during vendor due diligence. Not a certification — it's an audit opinion.

**PCI DSS**
12 requirements protecting cardholder data. Key areas: network security (firewalls, no default passwords), data protection (don't store sensitive auth data, encrypt CHD at rest and in transit), vulnerability management (patches, antivirus), access control (least privilege, unique IDs, MFA), monitoring (logging, penetration testing, ASV scans), policy (documented information security policy). Merchant levels 1–4 based on transaction volume determine required assessment type (QSA audit vs. self-assessment questionnaire).

**HIPAA**
U.S. healthcare privacy and security law. Security Rule applies to electronic PHI (ePHI). Three safeguard categories: Administrative (security officer, risk analysis, training, incident procedures, business associate agreements), Physical (facility access, workstation controls, media controls), Technical (access control: unique IDs + emergency access + auto logoff + encryption; audit controls; integrity controls; transmission security). Breach Notification Rule: notify HHS and affected individuals within 60 days of discovering breach. State laws may be more stringent.

**GDPR**
EU regulation applying globally to processors of EU resident personal data. Key principles: purpose limitation, data minimization, storage limitation. Data subject rights: access, rectification, erasure, portability, objection. Technical measures required: encryption, pseudonymization, access controls, audit logs. DPA (Data Protection Agreement) required for processors. Breach notification: 72 hours to supervisory authority; without undue delay to data subjects when high risk. Fines: up to 4% of global annual revenue or €20M.

**Other Regulations:**
- **FERPA:** U.S. — protects education records, applies to schools receiving federal funding
- **COPPA:** U.S. — protects children's online privacy (under 13), requires parental consent
- **CCPA/CPRA:** California — consumer privacy rights, similar in some ways to GDPR; businesses must disclose data collection, allow opt-out of data sales, delete personal information on request

---`,
      },
      {
        id: 'secplus-sg-006-6',
        title: "Data Privacy & Classification",
        content: `**Data Lifecycle:** Collection → Storage → Use → Sharing → Archiving → Destruction

**Data Classification (typical enterprise scheme):**
| Level | Description | Examples | Controls |
|-------|-------------|---------|---------|
| Public | Safe for public disclosure | Marketing materials, press releases | Minimal |
| Internal | For employees, not public | Internal memos, org charts | Basic access control |
| Confidential | Sensitive business data | Financial data, contracts, HR records | Encryption, limited access |
| Restricted | Highly sensitive, regulated data | PII, PHI, cardholder data, trade secrets | Strong encryption, MFA, DLP, audit logging |

**Data Handling Requirements by Classification:**
- Storage: appropriate media, encryption requirements
- Transmission: secure protocols (TLS/HTTPS), DLP
- Destruction: NIST 800-88 media sanitization (Clear, Purge, Destroy) — method depends on sensitivity

**Data Minimization:** Collect only what is necessary for the stated purpose. Reduces breach impact and regulatory exposure. "The best way to protect data is not to collect it."

**Privacy by Design:** Incorporate privacy protections into systems from the design phase rather than bolting them on afterward. Default to privacy-preserving settings. Required by GDPR.

---`,
      },
      {
        id: 'secplus-sg-006-7',
        title: "Security Policy Types",
        content: `- **Acceptable Use Policy (AUP):** Defines permitted/prohibited uses of company technology
- **Data Retention Policy:** Defines how long data must be kept and destruction requirements
- **Incident Response Policy:** Defines how security incidents are handled
- **Change Management Policy:** Defines the process for making changes to production systems
- **BYOD Policy:** Rules for using personal devices for work
- **Password Policy:** Requirements for password length, complexity, rotation, reuse
- **Clean Desk Policy:** Requirement to secure sensitive material when leaving workstation
- **Business Continuity Plan (BCP):** Plan for maintaining business operations during/after a disaster
- **Disaster Recovery Plan (DRP):** Technical plan for recovering IT systems after disaster

---`,
      },
      {
        id: 'secplus-sg-006-8',
        title: "Third-Party Risk Management",
        content: `Vendors and partners with access to your systems or data are extension of your attack surface. Supply chain attacks (SolarWinds, Log4Shell mass exploitation) show the importance of third-party risk.

**Due Diligence:**
- Request SOC 2 Type II report or ISO 27001 certification
- Security questionnaire (vendor self-assessment)
- Penetration testing results
- Contract terms: data handling, breach notification obligations, right to audit

**Ongoing Monitoring:**
- Monitor vendor CVEs and breaches (is your vendor in Have I Been Pwned? Did they have a breach?)
- Review vendor access permissions regularly
- Include security requirements in contracts
- Business Associate Agreements (BAAs) required for HIPAA business associates`,
      },
    ],
  },
]
