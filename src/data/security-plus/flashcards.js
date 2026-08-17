// Security+ SY0-701 Flashcards
// 60+ key term flashcards covering all five domains

export const flashcards = [
  // ── DOMAIN 1: General Security Concepts ──────────────────────────────────
  {
    id: 'secplus-fc-001',
    domain: 1,
    term: 'CIA Triad',
    definition: 'The three foundational principles of information security: Confidentiality (data is accessible only to authorized parties), Integrity (data has not been altered without authorization), Availability (data and systems are accessible when needed). Every security control can be mapped to one or more of these principles. Threats attack one or more CIA components (e.g., ransomware attacks availability; data theft attacks confidentiality).'
  },
  {
    id: 'secplus-fc-002',
    domain: 1,
    term: 'AAA Framework',
    definition: 'Authentication, Authorization, and Accounting/Auditing. Authentication: verify identity (who are you?). Authorization: determine what the authenticated user can do (what are you allowed to do?). Accounting/Auditing: log what the user did (what did you do?). These three functions are required for secure access control. Implemented in RADIUS, TACACS+, and modern IAM platforms.'
  },
  {
    id: 'secplus-fc-003',
    domain: 1,
    term: 'Non-Repudiation',
    definition: 'The security property that prevents a party from denying an action they performed. Achieved through digital signatures (proves the sender signed with their private key), audit logs (timestamped records), and chain of custody documentation. Example: a digitally signed contract — the signer cannot claim they didn\'t sign it because only they possess the private key used to create the signature.'
  },
  {
    id: 'secplus-fc-004',
    domain: 1,
    term: 'Symmetric Encryption',
    definition: 'Encryption that uses a single shared secret key for both encryption and decryption. Fast — suitable for encrypting large amounts of data. Challenge: securely distributing the shared key to all parties. Examples: AES (128, 192, 256-bit), 3DES (deprecated), ChaCha20. Contrast with asymmetric encryption, which uses a public/private key pair. In practice, symmetric encryption encrypts data while asymmetric encrypts the symmetric key (hybrid approach in TLS).'
  },
  {
    id: 'secplus-fc-005',
    domain: 1,
    term: 'Asymmetric Encryption (Public Key Cryptography)',
    definition: 'Encryption that uses a mathematically linked key pair: a public key (freely shared) and a private key (kept secret). Encrypted with the public key → only the private key can decrypt. Signed with the private key → anyone with the public key can verify the signature. Slower than symmetric encryption — used for key exchange, digital signatures, and certificate verification, not bulk data encryption. Examples: RSA, ECC, Diffie-Hellman.'
  },
  {
    id: 'secplus-fc-006',
    domain: 1,
    term: 'AES (Advanced Encryption Standard)',
    definition: 'The gold standard symmetric encryption algorithm. Selected by NIST in 2001 via public competition. Block cipher operating on 128-bit blocks with key sizes of 128, 192, or 256 bits. AES-256 is approved for U.S. government TOP SECRET data. Extremely fast in hardware (AES-NI CPU instructions). Used for: full disk encryption (BitLocker, FileVault), TLS cipher suites, VPNs, file encryption. Considered computationally secure for the foreseeable future.'
  },
  {
    id: 'secplus-fc-007',
    domain: 1,
    term: 'RSA (Rivest–Shamir–Adleman)',
    definition: 'The most widely used asymmetric encryption algorithm. Security based on the difficulty of factoring large composite numbers. Common key sizes: 2048-bit (minimum recommended), 3072-bit, 4096-bit. Used for: TLS certificate key exchange, email encryption (S/MIME, PGP), digital signatures, SSH key authentication. Slower than ECC for equivalent security levels. RSA-2048 is roughly equivalent in security to ECC-224.'
  },
  {
    id: 'secplus-fc-008',
    domain: 1,
    term: 'ECC (Elliptic Curve Cryptography)',
    definition: 'Asymmetric cryptography based on elliptic curve mathematics. Provides equivalent security to RSA with much shorter key lengths: ECC-256 ≈ RSA-3072 in security strength. Advantages: smaller key sizes = faster operations, less processing power, less bandwidth. Used in: TLS 1.3 (ECDHE for key exchange), mobile devices, IoT, FIDO2/passkeys, blockchain. Common curves: P-256 (secp256r1), P-384, Curve25519 (used in TLS 1.3 and WireGuard).'
  },
  {
    id: 'secplus-fc-009',
    domain: 1,
    term: 'SHA-256 (Secure Hash Algorithm 256-bit)',
    definition: 'A widely used cryptographic hash function producing a 256-bit (32-byte) digest. Part of the SHA-2 family. Properties: deterministic, fast to compute, collision-resistant, pre-image resistant (cannot reverse), small input changes produce completely different output (avalanche effect). Used for: TLS certificates, digital signatures (signed with RSA/ECDSA), password hashing (with salting in Argon2/bcrypt), file integrity verification, blockchain. SHA-1 and MD5 are deprecated due to known collision attacks.'
  },
  {
    id: 'secplus-fc-010',
    domain: 1,
    term: 'PKI (Public Key Infrastructure)',
    definition: 'The framework of hardware, software, policies, and procedures used to create, manage, distribute, store, and revoke digital certificates. Components: Certificate Authority (CA) — issues and signs certificates; Registration Authority (RA) — verifies identity before certificate issuance; Certificate Revocation List (CRL) — list of revoked certificates; OCSP — real-time revocation checking; Certificate Store — where trusted root CA certs are stored. PKI enables SSL/TLS, S/MIME, code signing, and smart card authentication.'
  },
  {
    id: 'secplus-fc-011',
    domain: 1,
    term: 'CA (Certificate Authority)',
    definition: 'An entity that issues digital certificates after verifying the identity of the certificate subject. A Root CA is the trust anchor — its certificate is self-signed and pre-installed in OS/browser trust stores. Intermediate CAs are signed by the root and issue end-entity certificates (creating a certificate chain). Public CAs (DigiCert, Let\'s Encrypt, Comodo) are trusted by default. Private/internal CAs issue certificates for internal use only — clients must be configured to trust the internal root CA.'
  },
  {
    id: 'secplus-fc-012',
    domain: 1,
    term: 'CRL (Certificate Revocation List)',
    definition: 'A signed list published by a CA containing serial numbers of certificates that have been revoked before their expiration date. Reasons for revocation: private key compromise, CA compromise, subject changed affiliation, certificate issued incorrectly. CRLs are periodically updated and downloaded by relying parties. Limitation: CRLs can be large and become stale between updates. OCSP provides real-time alternative. CRL Distribution Points (CDP) in certificates tell clients where to download the CRL.'
  },
  {
    id: 'secplus-fc-013',
    domain: 1,
    term: 'OCSP (Online Certificate Status Protocol)',
    definition: 'A real-time certificate revocation checking protocol. Instead of downloading a full CRL, clients query an OCSP responder with the specific certificate serial number and receive a signed response: good, revoked, or unknown. OCSP Stapling: the web server obtains and caches the OCSP response, including it in the TLS handshake — saves the client a separate round-trip and improves privacy. OCSP Must-Staple: certificate extension requiring the server to always provide a stapled OCSP response.'
  },
  {
    id: 'secplus-fc-014',
    domain: 1,
    term: 'Digital Signature',
    definition: 'A cryptographic mechanism that proves: (1) the data was created by a specific sender (authenticity), (2) the data has not been altered since signing (integrity), and (3) the sender cannot deny signing it (non-repudiation). Process: sender hashes the message with SHA-256, then encrypts the hash with their private key → this is the signature. Recipient decrypts the signature with sender\'s public key, hashes the message independently, and compares hashes. Used in email (S/MIME), code signing, certificates, and legal documents.'
  },
  {
    id: 'secplus-fc-015',
    domain: 1,
    term: 'Zero Trust Architecture',
    definition: 'A security model that assumes no user, device, or network segment is inherently trustworthy — even inside the corporate network. Guiding principle: "Never trust, always verify." Key tenets: verify identity with strong authentication (MFA) for every request; enforce least-privilege access; assume breach (segment networks, minimize blast radius); validate device health; continuously monitor and log. Replaces the perimeter "castle and moat" model. Driven by cloud adoption, remote work, and insider threat concerns.'
  },
  {
    id: 'secplus-fc-016',
    domain: 1,
    term: 'Defense in Depth',
    definition: 'A layered security strategy where multiple independent security controls are stacked so that if one fails, others provide continued protection. Layers include: physical security → network perimeter (firewall) → network segmentation → endpoint security → application security → data encryption → user access controls → monitoring. No single control is a complete solution. Based on the military concept of multiple defensive lines. Reduces the probability that an attacker can succeed even if they breach one layer.'
  },

  // ── DOMAIN 2: Threats, Vulnerabilities & Mitigations ─────────────────────
  {
    id: 'secplus-fc-017',
    domain: 2,
    term: 'Ransomware',
    definition: 'Malware that encrypts victim files or systems and demands payment (usually cryptocurrency) for the decryption key. Modern ransomware uses "double extortion" — also exfiltrating data and threatening to publish it if ransom is not paid. Delivery: phishing emails, RDP brute-force, vulnerability exploitation. Defense: immutable offline backups (3-2-1 rule), EDR, email filtering, least privilege, MFA on RDP/VPN, patch management. Notable examples: WannaCry (exploited EternalBlue), Colonial Pipeline (DarkSide), REvil.'
  },
  {
    id: 'secplus-fc-018',
    domain: 2,
    term: 'RAT (Remote Access Trojan)',
    definition: 'Malware that provides an attacker with covert remote control of a victim\'s system. Capabilities: keylogging, screen capture, webcam/microphone access, file upload/download, command execution, lateral movement. RATs communicate with C2 (command and control) servers using HTTP/HTTPS or DNS to blend with normal traffic. Installed via phishing emails, drive-by downloads, or bundled with legitimate software. Detection: behavioral analysis, C2 network traffic detection, EDR.'
  },
  {
    id: 'secplus-fc-019',
    domain: 2,
    term: 'Rootkit',
    definition: 'Malware designed to conceal its presence and maintain persistent, privileged access to a system. Operates at deep levels: kernel rootkits modify the OS kernel, bootloader rootkits (bootkits) execute before the OS loads, hypervisor rootkits (virtual machine-based) run below the OS. Hides processes, files, network connections, and registry entries from the OS. Detection requires out-of-band tools (boot from clean media, integrity checking via TPM/Secure Boot). Extremely difficult to remove — reimaging is typically required.'
  },
  {
    id: 'secplus-fc-020',
    domain: 2,
    term: 'Keylogger',
    definition: 'Malware (or hardware device) that records keystrokes, capturing passwords, credit card numbers, and other sensitive input. Software keyloggers hook into OS APIs to capture keystrokes before encryption. Hardware keyloggers are physical devices inserted between keyboard and computer. Detection: EDR behavioral monitoring, physical security inspections. Countermeasures: on-screen keyboards, password managers (that auto-fill without keystrokes being recorded), MFA (even if password is captured, second factor is still needed).'
  },
  {
    id: 'secplus-fc-021',
    domain: 2,
    term: 'Botnet',
    definition: 'A network of compromised computers (bots or zombies) controlled by an attacker (botmaster) through C2 (command and control) infrastructure. Uses: DDoS attacks, spam campaigns, credential stuffing, click fraud, cryptocurrency mining, ransomware distribution. Bots communicate with C2 via HTTP, IRC, or peer-to-peer protocols. Takedown efforts target the C2 infrastructure. Defense: patch management, EDR, network monitoring for C2 traffic, DNS sinkholes.'
  },
  {
    id: 'secplus-fc-022',
    domain: 2,
    term: 'Logic Bomb',
    definition: 'Malicious code inserted into legitimate software that executes when a specific condition is met (trigger). Triggers: a specific date/time, a user action, a file being deleted, or an admin account being disabled. Often planted by disgruntled insiders. Example: delete all data on a specific date, or when the employee\'s name disappears from payroll. Defense: code reviews, separation of duties, monitoring admin account activity, software integrity checking.'
  },
  {
    id: 'secplus-fc-023',
    domain: 2,
    term: 'Fileless Malware',
    definition: 'Malware that executes entirely in memory without writing traditional executable files to disk, evading file-based antivirus. Uses legitimate OS tools (PowerShell, WMI, mshta.exe, certutil) — "living off the land" (LotL). Common delivery: malicious macro in Office document that runs PowerShell, which downloads and executes shellcode in memory. Detection: PowerShell script block logging, AMSI (Antimalware Scan Interface), EDR behavioral monitoring. Mitigations: PowerShell Constrained Language Mode, AppLocker/WDAC.'
  },
  {
    id: 'secplus-fc-024',
    domain: 2,
    term: 'APT (Advanced Persistent Threat)',
    definition: 'A sophisticated, long-term cyberattack conducted by well-resourced threat actors (typically nation-states or organized crime groups) with specific objectives. Characteristics: targeted at specific organizations, use custom malware and zero-days, patient (can remain undetected for months/years), use multiple attack vectors, and live off the land to avoid detection. APT lifecycle: reconnaissance → initial access → establish foothold → escalate privileges → lateral movement → exfiltration → maintain persistence. Examples: APT28 (Fancy Bear/Russia), APT41 (China).'
  },
  {
    id: 'secplus-fc-025',
    domain: 2,
    term: 'Phishing / Spear Phishing / Whaling',
    definition: 'Phishing: mass-distributed fraudulent emails impersonating trusted entities to steal credentials or deliver malware. Spear Phishing: targeted phishing using personalized information about the victim (from OSINT/LinkedIn). Whaling: spear phishing targeting executives (CEOs, CFOs) for high-value fraud (wire transfers, credential access to financial systems). Business Email Compromise (BEC): spear phishing impersonating an executive to trick employees. Defense: email filtering, SPF/DKIM/DMARC, security awareness training, MFA, verify unusual financial requests via phone.'
  },
  {
    id: 'secplus-fc-026',
    domain: 2,
    term: 'Vishing / Smishing',
    definition: 'Vishing (Voice Phishing): social engineering attacks conducted over telephone calls. Attacker impersonates IT support, IRS, bank fraud department, or tech support to steal credentials or information. Smishing (SMS Phishing): phishing attacks delivered via text message. Contain malicious links or requests for sensitive information. Often impersonate banks, delivery services, or government agencies. Defense: hang up and call back using official numbers, never provide credentials over phone, security awareness training.'
  },
  {
    id: 'secplus-fc-027',
    domain: 2,
    term: 'Pretexting',
    definition: 'A social engineering technique where the attacker creates a fabricated scenario (pretext) to manipulate a target into revealing information or taking an action. The attacker builds a believable false identity and situation. Example: call a help desk pretending to be a new employee who forgot their password, or impersonate an auditor requesting financial records. More sophisticated than generic phishing — requires research and a convincing backstory. Defense: strict identity verification procedures, call-back verification protocols.'
  },
  {
    id: 'secplus-fc-028',
    domain: 2,
    term: 'Watering Hole Attack',
    definition: 'An attack where the attacker compromises a website frequently visited by the target audience (like a trade association site or forum) rather than attacking the targets directly. When targets visit the compromised "watering hole," their systems are infected. Named after predators waiting at water sources in nature. Targets: industry professionals, government employees, researchers. Defense: web filtering, browser isolation, timely patching of browsers and plugins (Flash, Java are common vectors), EDR.'
  },
  {
    id: 'secplus-fc-029',
    domain: 2,
    term: 'Typosquatting',
    definition: 'Registering domain names that are typographical variations of legitimate popular domains (e.g., "gooogle.com", "amazon.co" instead of "amazon.com"). When users mistype URLs, they land on attacker-controlled sites for: credential phishing, malware distribution, ad revenue. Also: homograph attacks use visually identical Unicode characters. Defense: organizations proactively register typo variants; browser safe browsing lists; user education to verify URLs; bookmark important sites.'
  },
  {
    id: 'secplus-fc-030',
    domain: 2,
    term: 'Buffer Overflow',
    definition: 'A vulnerability where a program writes more data to a buffer than it can hold, overwriting adjacent memory. Can overwrite the return address on the stack to redirect execution to attacker-controlled code (stack overflow) or corrupt heap data structures (heap overflow). Historically one of the most exploited vulnerability classes. Examples: EternalBlue (SMB), Heartbleed (OpenSSL). Mitigations: ASLR (Address Space Layout Randomization), DEP/NX (non-executable memory), stack canaries, safe coding (bounds checking), using memory-safe languages.'
  },
  {
    id: 'secplus-fc-031',
    domain: 2,
    term: 'SQL Injection',
    definition: 'A code injection attack where malicious SQL code is inserted into input fields that are processed by a database without proper sanitization. Allows attackers to: bypass authentication, extract database contents, modify/delete data, execute OS commands (via xp_cmdshell in SQL Server). Input like `\' OR 1=1 --` closes the string, adds an always-true condition, and comments out the rest. Primary defense: parameterized queries/prepared statements. Also: stored procedures, input validation, WAF, least-privilege DB accounts, disable xp_cmdshell.'
  },
  {
    id: 'secplus-fc-032',
    domain: 2,
    term: 'XSS (Cross-Site Scripting)',
    definition: 'A web vulnerability where attacker-controlled scripts are injected into web pages viewed by other users. Three types: Stored (persistent) — script is saved to database and served to all visitors; Reflected (non-persistent) — script is embedded in URL and reflected in response when victim clicks crafted link; DOM-based — script executes via client-side DOM manipulation without server involvement. Impact: session cookie theft, keylogging, page defacement, redirect to malicious sites. Defense: output encoding, Content Security Policy (CSP), HTTPOnly cookies, input validation.'
  },
  {
    id: 'secplus-fc-033',
    domain: 2,
    term: 'CSRF (Cross-Site Request Forgery)',
    definition: 'An attack that tricks an authenticated user\'s browser into making unauthorized requests to a web application. The victim visits an attacker-controlled page containing a hidden request to a site where the victim is logged in. The browser automatically includes the session cookie. Example: a hidden form that transfers money when the page loads. Defense: CSRF tokens (unique per-request tokens that the attacker cannot predict), SameSite cookie attribute, verifying Origin/Referer headers, double-submit cookie pattern.'
  },
  {
    id: 'secplus-fc-034',
    domain: 2,
    term: 'Zero-Day Vulnerability',
    definition: 'A software vulnerability unknown to the developer/vendor (or for which no patch exists). "Zero-day" because the developer has had zero days to address it. A zero-day exploit is active malware exploiting the vulnerability. Particularly dangerous because: signature-based defenses may not detect it, no patch is available. Mitigation before patch: virtual patching (WAF/IPS rules), network segmentation, disable the vulnerable component, behavioral detection. Zero-days are highly valued on black markets and by nation-state actors.'
  },
  {
    id: 'secplus-fc-035',
    domain: 2,
    term: 'Brute Force / Dictionary / Rainbow Table Attacks',
    definition: 'Brute Force: systematically trying every possible password combination. Slow but guaranteed to succeed eventually. Defense: account lockout, long passwords, rate limiting. Dictionary: trying words from a wordlist of common passwords. Faster than pure brute force. Rainbow Table: precomputed hash-to-password lookup tables to rapidly crack unsalted hashes. Defense against rainbow tables: salted hashes (adding a unique random value per password before hashing, stored with the hash — salt makes rainbow tables infeasible). Argon2/bcrypt/scrypt are designed password hashing algorithms that include salting and are intentionally slow.'
  },
  {
    id: 'secplus-fc-036',
    domain: 2,
    term: 'Credential Stuffing',
    definition: 'An attack that uses large lists of username/password pairs (stolen from breaches of OTHER services) to automate login attempts against target services. Exploits password reuse — many users use the same credentials across multiple sites. Differs from brute force (which guesses passwords) — stuffing uses real credentials. Defense: MFA (even correct credentials require second factor), breach password checks (reject passwords found in breach databases), CAPTCHA, rate limiting, impossible travel detection, device fingerprinting.'
  },
  {
    id: 'secplus-fc-037',
    domain: 2,
    term: 'Pass-the-Hash',
    definition: 'An attack where an attacker extracts NTLM password hashes from Windows memory (using tools like Mimikatz, accessing LSASS process) and uses them to authenticate to other systems without knowing the plaintext password. Works because NTLM uses the hash directly as the authentication credential. Enables lateral movement without cracking passwords. Defense: Protected Users security group (disables NTLM caching), Credential Guard (virtualizes LSA to protect hashes), network segmentation, disabling NTLM where possible, privileged access workstations (PAWs).'
  },
  {
    id: 'secplus-fc-038',
    domain: 2,
    term: 'DoS / DDoS',
    definition: 'DoS (Denial of Service): attack from a single source that overwhelms a target, making it unavailable to legitimate users. DDoS (Distributed DoS): same goal but using thousands/millions of sources (botnet). Types: Volumetric (bandwidth exhaustion — UDP/ICMP floods), Protocol (SYN flood exploiting TCP handshake — fill connection tables), Application Layer (HTTP flood targeting web application — harder to distinguish from legitimate traffic). Defense: CDN with DDoS scrubbing, rate limiting, anycast routing, over-provisioning, cloud-based DDoS protection (AWS Shield, Cloudflare).'
  },
  {
    id: 'secplus-fc-039',
    domain: 2,
    term: 'ARP Poisoning / DNS Poisoning',
    definition: 'ARP Poisoning: attacker sends gratuitous ARP replies mapping their MAC address to a victim\'s or gateway\'s IP, redirecting traffic through the attacker (enables MITM). Works only on local network segments. Defense: Dynamic ARP Inspection (DAI) on managed switches. DNS Poisoning (Cache Poisoning): corrupting a DNS resolver\'s cache with fraudulent records, redirecting users to attacker-controlled IP addresses. Defense: DNSSEC (cryptographically signs DNS records), randomizing source ports/transaction IDs, using encrypted DNS (DoH/DoT).'
  },
  {
    id: 'secplus-fc-040',
    domain: 2,
    term: 'Evil Twin Attack',
    definition: 'Creating a rogue wireless access point (AP) with the same SSID (and possibly stronger signal) as a legitimate network to trick users into connecting. Once connected, all traffic routes through the attacker — enables credential capture (HTTPS is protected; HTTP is not) and malware injection. Often combined with a deauthentication attack to force devices off the legitimate AP. Defense: 802.1X enterprise WiFi authentication (certificates verify the legitimate AP), VPN on untrusted networks, HTTPS everywhere.'
  },
  {
    id: 'secplus-fc-041',
    domain: 2,
    term: 'Insider Threat',
    definition: 'Security risks originating from current or former employees, contractors, or partners with legitimate access. Types: Malicious (intentional data theft, sabotage), Negligent (accidental data loss, misconfiguration), Compromised (credential theft — attacker using legitimate user\'s access). Most dangerous because insiders already have authorized access and know where valuable data resides. Defense: least privilege, separation of duties, DLP, UEBA (User and Entity Behavior Analytics), background checks, mandatory vacation, swift offboarding.'
  },
  {
    id: 'secplus-fc-042',
    domain: 2,
    term: 'Supply Chain Attack',
    definition: 'Compromising a target by attacking a trusted third-party supplier (software vendor, hardware manufacturer, managed service provider) in the supply chain. Examples: SolarWinds (2020) — trojanized software update distributed to 18,000+ organizations; XZ Utils backdoor (2024) — backdoor inserted into an open-source library. Defense: software composition analysis (SCA), SBOM (Software Bill of Materials) tracking, code signing verification, third-party risk management, least-privilege for vendor access, monitoring for unexpected network behavior after updates.'
  },

  // ── DOMAIN 3: Security Architecture ──────────────────────────────────────
  {
    id: 'secplus-fc-043',
    domain: 3,
    term: 'DMZ (Demilitarized Zone)',
    definition: 'A network segment that separates public-facing servers from both the internet and the internal corporate network, protected by firewalls on both sides. Hosts publicly accessible servers (web, email, DNS). If a DMZ server is compromised, the attacker still faces a second firewall before reaching internal systems. Typically implemented with two firewalls (screened subnet architecture) or a single firewall with a third interface. Reduces the risk of an internet-facing server compromise leading to full internal network access.'
  },
  {
    id: 'secplus-fc-044',
    domain: 3,
    term: 'Microsegmentation',
    definition: 'Dividing the network into very small, isolated segments (down to individual workloads, VMs, or containers) with security policies enforced between each segment. Limits lateral movement — even if an attacker compromises one segment, they cannot freely reach adjacent systems. Implemented via SDN (Software-Defined Networking), hypervisor-based firewalls (VMware NSX), or host-based firewalls with policy orchestration. A key component of zero trust architecture. More granular than traditional VLAN segmentation.'
  },
  {
    id: 'secplus-fc-045',
    domain: 3,
    term: 'NGFW (Next-Generation Firewall)',
    definition: 'A firewall combining traditional stateful packet inspection with application-layer intelligence: Deep Packet Inspection (DPI) identifies applications regardless of port/protocol; Application Control blocks/allows specific apps (e.g., YouTube but not Dropbox); User Identity Integration (via LDAP/AD) applies policies per-user rather than per-IP; Integrated IPS for threat detection/prevention; SSL/TLS Inspection (decrypts and inspects HTTPS); URL Filtering. Examples: Palo Alto Networks, Cisco Firepower (FTD), Fortinet FortiGate, Check Point.'
  },
  {
    id: 'secplus-fc-046',
    domain: 3,
    term: 'WAF (Web Application Firewall)',
    definition: 'A security device that filters, monitors, and blocks HTTP/HTTPS traffic to and from web applications. Protects against web-layer attacks: SQL injection, XSS, CSRF, path traversal, remote file inclusion. Deployed as a reverse proxy in front of web servers. Can use signature-based detection (known attack patterns) and positive security model (whitelist only expected input). Cloud-based WAFs (AWS WAF, Cloudflare WAF) provide DDoS protection too. WAF does not replace secure coding practices but provides an important additional defense layer.'
  },
  {
    id: 'secplus-fc-047',
    domain: 3,
    term: 'IDS / IPS (Intrusion Detection/Prevention System)',
    definition: 'IDS (Intrusion Detection System): monitors network or host activity for malicious patterns, generates alerts but does not block. IPS (Intrusion Prevention System): actively blocks detected threats inline. Detection methods: Signature-based (matches known attack patterns — low false positives, misses new attacks), Anomaly-based (detects deviations from baseline — catches novel attacks, higher false positives), Behavior-based (monitors for malicious behaviors regardless of signature). HIDS/HIPS: host-based (monitors one system). NIDS/NIPS: network-based (monitors network traffic). Modern EDR and NGFW integrate IPS functionality.'
  },
  {
    id: 'secplus-fc-048',
    domain: 3,
    term: 'Forward Proxy / Reverse Proxy',
    definition: 'Forward Proxy: sits between internal clients and the internet. Represents clients to external servers. Functions: web filtering (content categories), caching, SSL inspection, anonymization (hides internal IPs). Clients configure their browser/OS to use the proxy. Reverse Proxy: sits in front of servers, representing servers to external clients. Functions: load balancing, SSL termination, WAF, DDoS protection, caching, and hiding server infrastructure. Clients connect to the reverse proxy believing it\'s the actual server. Examples: Nginx, HAProxy, F5 BIG-IP.'
  },
  {
    id: 'secplus-fc-049',
    domain: 3,
    term: 'SASE (Secure Access Service Edge)',
    definition: 'A cloud-delivered architecture that converges networking (SD-WAN) with security services (SWG, CASB, NGFW/FWaaS, ZTNA) into a unified platform. Security is enforced at cloud PoPs (Points of Presence) globally rather than being backhauled through a central datacenter. Benefits: consistent security for distributed users/offices, cloud-native scalability, reduced complexity vs. multiple point solutions, low-latency access to cloud apps. Gartner coined the term. Vendors: Palo Alto Prisma SASE, Zscaler, Netskope, Cisco+. Often paired with SD-WAN for branch connectivity.'
  },
  {
    id: 'secplus-fc-050',
    domain: 3,
    term: 'SAML (Security Assertion Markup Language)',
    definition: 'An XML-based open standard for exchanging authentication and authorization data between an Identity Provider (IdP) and a Service Provider (SP). Enables SSO for web applications. Flow: User accesses SP → SP redirects to IdP → User authenticates to IdP → IdP returns signed SAML assertion to SP → SP grants access. The SAML assertion is a signed XML document stating who the user is and their attributes. Used for enterprise SSO (Microsoft AD FS, Azure AD, Okta connecting to SaaS apps like Salesforce, ServiceNow).'
  },
  {
    id: 'secplus-fc-051',
    domain: 3,
    term: 'OAuth 2.0 / OpenID Connect (OIDC)',
    definition: 'OAuth 2.0: an authorization framework that allows third-party applications to access resources on behalf of a user without sharing credentials. Uses access tokens (not passwords). Example: "Log in with Google" — the app gets an OAuth token to access your Google profile, not your Google password. OpenID Connect (OIDC): an authentication layer built on top of OAuth 2.0 that provides user identity information (ID token in JWT format). OAuth = authorization (what can the app do?); OIDC = authentication (who is the user?). Modern replacement for SAML in mobile/API contexts.'
  },
  {
    id: 'secplus-fc-052',
    domain: 3,
    term: 'CASB (Cloud Access Security Broker)',
    definition: 'A security tool that sits between on-premises users and cloud service providers, providing visibility and control over cloud usage. Functions: Shadow IT Discovery (find unsanctioned cloud apps), DLP (block sensitive data from being uploaded to unauthorized cloud services), Access Control (conditional access to cloud apps), Threat Protection (detect malware in cloud storage like OneDrive/SharePoint), Compliance (enforce data residency and handling requirements). Deployed as forward proxy (for managed devices), reverse proxy (for unmanaged devices), or API (direct integration with cloud service API). Examples: Microsoft Defender for Cloud Apps, Netskope, Palo Alto CASB.'
  },

  // ── DOMAIN 4: Security Operations ─────────────────────────────────────────
  {
    id: 'secplus-fc-053',
    domain: 4,
    term: 'MFA (Multi-Factor Authentication)',
    definition: 'Authentication requiring two or more factors from different categories: Something you KNOW (password, PIN), Something you HAVE (smartphone/authenticator app/hardware token/smart card), Something you ARE (biometric: fingerprint, face, retina), Somewhere you ARE (location/geofencing). MFA dramatically reduces credential-based attacks — even if a password is stolen, the attacker lacks the second factor. TOTP (Time-based One-Time Password) is the most common "have" factor (Google Authenticator, Authy, Microsoft Authenticator). FIDO2/WebAuthn hardware keys (YubiKey) are phishing-resistant MFA.'
  },
  {
    id: 'secplus-fc-054',
    domain: 4,
    term: 'TOTP (Time-Based One-Time Password)',
    definition: 'A temporary, periodically-changing code generated by combining a shared secret key with the current time (RFC 6238). The authenticator app and the server both calculate the TOTP using the same seed and current 30-second time window — if they match, authentication succeeds. TOTP is the "something you have" factor in MFA. Resistant to password replay attacks (codes expire). Vulnerable to real-time phishing (attacker relays code to legitimate site before it expires) and SIM swapping (SMS-based OTPs, not TOTP). FIDO2 keys are stronger but TOTP is widely deployed.'
  },
  {
    id: 'secplus-fc-055',
    domain: 4,
    term: 'SSO (Single Sign-On)',
    definition: 'A centralized authentication mechanism allowing users to log in once and access multiple applications without re-entering credentials for each. Implemented via SAML, OAuth/OIDC, or Kerberos tickets. Benefits: better user experience, fewer passwords to manage, centralized authentication policy enforcement (MFA, account lockout), faster offboarding (disable one IdP account, access to all applications revoked). Risk: compromise of the SSO/IdP account gives access to all connected applications — makes MFA on the IdP critical. Examples: Azure AD SSO, Okta, OneLogin, Ping Identity.'
  },
  {
    id: 'secplus-fc-056',
    domain: 4,
    term: 'PAM (Privileged Access Management)',
    definition: 'Solutions for managing, monitoring, and controlling access to privileged accounts (admin, root, service accounts). Key capabilities: Credential Vaulting (store admin passwords in encrypted vault, auto-rotate on schedule), Just-In-Time Access (grant elevated access only when needed, time-limited), Session Recording (record/playback admin sessions for audit), Dual Control (require two-person authorization for critical access), Least Privilege Enforcement. Examples: CyberArk PAM, BeyondTrust, Delinea (formerly Thycotic). Critical for insider threat mitigation and regulatory compliance.'
  },
  {
    id: 'secplus-fc-057',
    domain: 4,
    term: 'RBAC / ABAC',
    definition: 'RBAC (Role-Based Access Control): permissions assigned to roles; users assigned to roles. Simple, easy to manage, great for most organizations. Limitation: cannot make fine-grained, context-aware decisions. ABAC (Attribute-Based Access Control): access decisions based on attributes of user (department, clearance), resource (classification, owner), and environment (time, location, device posture). Much more flexible and granular than RBAC but more complex to manage. Used in zero trust and government/defense environments. NGAC (Next-Generation Access Control) is an emerging NIST standard that extends these concepts.'
  },
  {
    id: 'secplus-fc-058',
    domain: 4,
    term: 'EDR (Endpoint Detection and Response)',
    definition: 'Security software that continuously monitors endpoint activity (process creation, network connections, file modifications, registry changes), detects threats using behavioral analysis and ML, and enables rapid response. Beyond traditional AV (signature-only): EDR detects fileless malware, lateral movement, and novel threats. Features: threat hunting (proactive search for hidden threats), timeline view (reconstruct attack sequence), automated response (isolate endpoint, kill process, quarantine file), integration with SIEM/SOAR. Examples: CrowdStrike Falcon, Microsoft Defender for Endpoint (MDE), SentinelOne, Carbon Black.'
  },
  {
    id: 'secplus-fc-059',
    domain: 4,
    term: 'DLP (Data Loss Prevention)',
    definition: 'Technology that monitors, detects, and prevents unauthorized transmission of sensitive data. Three modes: DLP in Use (endpoint — blocks copy/paste to personal USB/email, screen capture), DLP in Motion (network — monitors email/web traffic for sensitive content), DLP at Rest (storage — scans repositories for misplaced sensitive data). Can detect: credit card numbers (PCI), SSNs, health records (HIPAA keywords), classified document markings, source code. Actions: block, quarantine, encrypt, alert, or log. Requires data classification to be effective. Examples: Microsoft Purview DLP, Forcepoint, Symantec DLP.'
  },
  {
    id: 'secplus-fc-060',
    domain: 4,
    term: 'Incident Response Lifecycle',
    definition: 'NIST SP 800-61 defines four phases: 1) Preparation (IR plan, team, tools, training), 2) Detection & Analysis (identify the incident, determine scope/severity), 3) Containment, Eradication & Recovery (stop the spread, remove malware, restore systems), 4) Post-Incident Activity (lessons learned, update defenses). PICERL mnemonic: Prepare → Identify → Contain → Eradicate → Recover → Lessons Learned. Key principle: preserve evidence (chain of custody) before containment when possible. Time-sensitive: contain quickly to limit damage; document everything.'
  },
  {
    id: 'secplus-fc-061',
    domain: 4,
    term: 'SIEM (Security Information and Event Management)',
    definition: 'Platform that aggregates, normalizes, and correlates log data from across the IT environment (firewalls, IDS/IPS, servers, endpoints, applications, cloud). Provides: real-time alerting on correlated events (e.g., multiple failed logins + successful login from new location = brute force success), dashboards, compliance reporting, threat hunting, and long-term log storage. Key capabilities: log collection and parsing, event correlation (rules and ML), alert triage, case management integration. Examples: Splunk, Microsoft Sentinel, IBM QRadar, LogRhythm. Requires tuning to reduce false positives.'
  },
  {
    id: 'secplus-fc-062',
    domain: 4,
    term: 'SOAR (Security Orchestration, Automation and Response)',
    definition: 'Platform that automates and orchestrates security operations workflows, reducing mean time to respond (MTTR) to incidents. Uses playbooks (automated workflows) to: gather threat intelligence, enrich alerts (query asset database, user info, threat feeds), execute containment actions (isolate endpoint, block IP, disable user account), notify stakeholders, and create tickets. Integrates with SIEM, EDR, firewalls, IAM, ticketing systems via APIs. Examples: Splunk SOAR (Phantom), Palo Alto XSOAR, Microsoft Sentinel playbooks. Addresses alert volume challenge facing SOC analysts.'
  },
  {
    id: 'secplus-fc-063',
    domain: 4,
    term: 'CVSS (Common Vulnerability Scoring System)',
    definition: 'A standardized scoring system (0.0–10.0) for rating the severity of vulnerabilities. Base Score metrics: Attack Vector (how exploited — network/adjacent/local/physical), Attack Complexity (low/high), Privileges Required, User Interaction, Scope, and CIA Impact. Severity ranges: Critical (9.0–10.0), High (7.0–8.9), Medium (4.0–6.9), Low (0.1–3.9). Temporal Score adjusts for exploit availability and patch status. Environmental Score customizes for specific environments. Used to prioritize vulnerability remediation. CVSSv3.1 is current standard; CVSSv4.0 released 2023.'
  },
  {
    id: 'secplus-fc-064',
    domain: 4,
    term: 'TLS 1.3',
    definition: 'The current recommended version of Transport Layer Security (RFC 8446, 2018). Key improvements over TLS 1.2: mandatory forward secrecy (all suites use ECDHE), removed weak algorithms (RSA key exchange, RC4, DES, 3DES, MD5, SHA-1, export ciphers), 1-RTT handshake (faster than TLS 1.2\'s 2-RTT), 0-RTT session resumption (with replay protection caveats), simplified 5-cipher-suite negotiation. Cipher suites: TLS_AES_256_GCM_SHA384, TLS_AES_128_GCM_SHA256, TLS_CHACHA20_POLY1305_SHA256. TLS 1.0 and 1.1 are deprecated by RFC 8996. SSL 3.0, 2.0 have been deprecated for decades.'
  },
  {
    id: 'secplus-fc-065',
    domain: 4,
    term: 'DNSSEC',
    definition: 'DNS Security Extensions — adds cryptographic authentication to DNS responses, preventing DNS cache poisoning and response spoofing. DNSSEC signs DNS records with asymmetric cryptography; resolvers verify signatures using public keys stored in the DNS hierarchy. Key record types: RRSIG (resource record signature), DNSKEY (public key), DS (delegation signer — links parent to child zone). DNSSEC guarantees authenticity and integrity of DNS data but NOT confidentiality (DNS over HTTPS/DoH or DNS over TLS/DoT provide encryption). Not universally deployed — requires zone signing and resolver support.'
  },
  {
    id: 'secplus-fc-066',
    domain: 4,
    term: 'S/MIME (Secure/Multipurpose Internet Mail Extensions)',
    definition: 'A standard for email encryption and digital signing using PKI certificates. Two functions: Digital Signature — proves the email came from the claimed sender and was not modified (uses sender\'s private key); Encryption — ensures only the intended recipient can read the email (uses recipient\'s public key). Requires each user to have an S/MIME certificate. Certificate exchange: users must first exchange unencrypted signed emails to share public keys. Used primarily in enterprise environments (healthcare, legal, government). Alternative: PGP/GPG (web-of-trust model, no formal CA requirement).'
  },
  {
    id: 'secplus-fc-067',
    domain: 4,
    term: 'MDM (Mobile Device Management)',
    definition: 'Software solution for managing, monitoring, and securing mobile devices (smartphones, tablets) accessing corporate resources. Security capabilities: enforce device encryption and screen lock PIN, remote wipe (lost/stolen devices), certificate-based authentication for Wi-Fi/VPN/email, application management (push, update, restrict apps), jailbreak/root detection (deny access to compromised devices), conditional access (compliant devices only). BYOD environments often use MAM (Mobile Application Management) to manage only corporate apps while preserving personal data privacy. Examples: Microsoft Intune, VMware Workspace ONE, Jamf.'
  },

  // ── DOMAIN 5: Security Program Management ────────────────────────────────
  {
    id: 'secplus-fc-068',
    domain: 5,
    term: 'Risk Treatment Options',
    definition: 'Four strategies for handling identified risks: Mitigation (Accept) — reduce likelihood or impact by implementing controls (patch systems, add MFA); Avoidance — eliminate the risk by stopping the activity (don\'t collect data you don\'t need); Transference — shift financial consequences to a third party (cyber insurance, vendor contracts with liability clauses); Acceptance — acknowledge the risk and decide to live with it, typically for low-impact/low-probability risks or when cost of mitigation exceeds potential loss. Most risk management programs use a combination of all four.'
  },
  {
    id: 'secplus-fc-069',
    domain: 5,
    term: 'NIST Cybersecurity Framework (CSF)',
    definition: 'A voluntary, risk-based cybersecurity framework by NIST, widely adopted across industries. Five core functions: Identify (asset management, risk assessment), Protect (access control, training, data security, maintenance), Detect (anomalies/events, continuous monitoring), Respond (response planning, communications, analysis), Recover (recovery planning, improvements). Organizations use CSF to assess current state (Current Profile) against desired state (Target Profile) and prioritize improvements. Technology-neutral, works alongside ISO 27001 and other frameworks. Version 2.0 (2024) adds Govern function and expands supply chain guidance.'
  },
  {
    id: 'secplus-fc-070',
    domain: 5,
    term: 'ISO 27001',
    definition: 'An international standard for Information Security Management Systems (ISMS). Defines requirements for establishing, implementing, maintaining, and improving an ISMS. Organizations can be formally certified by accredited auditors. Structure: Context (understanding organization and interested parties) → Leadership → Planning (risk treatment) → Support → Operation → Performance Evaluation → Improvement. Annex A contains 93 controls across 4 themes (Organizational, People, Physical, Technological). Recognized globally; demonstrates to customers and partners that information security is managed systematically.'
  },
  {
    id: 'secplus-fc-071',
    domain: 5,
    term: 'SOC 2',
    definition: 'An auditing framework by the AICPA for technology/cloud service providers, assessing controls relevant to the Trust Services Criteria: Security (mandatory), Availability, Processing Integrity, Confidentiality, and Privacy. Type I: assesses design of controls at a point in time. Type II: assesses operational effectiveness of controls over a period (typically 6–12 months) — preferred by customers. SOC 2 reports are shared under NDA. Commonly required by enterprise procurement. Differs from SOC 1 (financial reporting controls) and SOC 3 (public version). Provides assurance that a vendor\'s security controls are effective.'
  },
  {
    id: 'secplus-fc-072',
    domain: 5,
    term: 'PCI DSS (Payment Card Industry Data Security Standard)',
    definition: 'A contractual security standard mandated by payment card brands (Visa, Mastercard, Amex) for any entity that processes, stores, or transmits cardholder data. 12 requirements including: firewalls, no default passwords, protect stored cardholder data (encryption/tokenization), encrypt transmission of cardholder data, antivirus, secure systems/applications (patching), restrict access to cardholder data (least privilege), assign unique user IDs, restrict physical access, log and monitor, regular security testing (ASV scans, penetration testing), maintain an information security policy. Non-compliance: fines, increased transaction fees, or loss of ability to accept card payments.'
  },
  {
    id: 'secplus-fc-073',
    domain: 5,
    term: 'HIPAA (Health Insurance Portability and Accountability Act)',
    definition: 'U.S. federal law protecting Protected Health Information (PHI). Security Rule: requires covered entities and business associates to implement administrative safeguards (security officer, training, incident procedures), physical safeguards (facility access control, workstation security, device controls), and technical safeguards (access control, audit controls, integrity controls, transmission security/encryption). Privacy Rule: governs use and disclosure of PHI. Breach Notification Rule: notify affected individuals, HHS, and media within 60 days of discovering a breach of unsecured PHI. Penalties: up to $1.9M per violation category per year.'
  },
  {
    id: 'secplus-fc-074',
    domain: 5,
    term: 'GDPR (General Data Protection Regulation)',
    definition: 'EU regulation governing collection and processing of personal data of EU residents (applies globally if you serve EU residents). Key principles: lawfulness, fairness, transparency; purpose limitation; data minimization; accuracy; storage limitation; integrity and confidentiality; accountability. Data subject rights: access, rectification, erasure (right to be forgotten), portability, object. Requirements: privacy by design/default, DPO (Data Protection Officer) for certain organizations, breach notification within 72 hours to supervisory authority. Penalties: up to €20M or 4% of global annual revenue (whichever is higher). Also applies to post-Brexit UK via UK GDPR.'
  },
  {
    id: 'secplus-fc-075',
    domain: 5,
    term: 'Data Classification',
    definition: 'The process of organizing data into categories based on sensitivity and the potential impact of unauthorized disclosure. Common schemes: Public (freely shareable), Internal/Private (not public, general employees), Confidential (sensitive business data — limited access), Restricted/Top Secret (most sensitive — need-to-know, encryption required). Government: Unclassified, CUI (Controlled Unclassified Information), Secret, Top Secret. Data classification drives: access control decisions, encryption requirements, handling procedures, retention policies, and DLP rules. Proper classification requires training and is often the first step in a data governance program.'
  }
];

export function getFlashcardsByDomain(domainId) {
  return flashcards.filter(fc => fc.domain === domainId);
}
