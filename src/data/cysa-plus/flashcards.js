// CySA+ CS0-003 Flashcards
// Domains: 1=Security Operations, 2=Vulnerability Management,
//          3=Incident Response and Management, 4=Reporting and Communication

export const flashcards = [
  // ─── DOMAIN 1: SECURITY OPERATIONS ───────────────────────────────────────

  {
    id: 'cysa-fc-001',
    domain: 1,
    term: 'Password spraying vs. brute force',
    definition:
      'Spraying tries a few common passwords across many accounts to stay under lockout thresholds. Brute force hammers one account with many passwords. Spraying looks like many usernames, few attempts each.',
  },
  {
    id: 'cysa-fc-002',
    domain: 1,
    term: 'Credential stuffing',
    definition:
      'Replaying username and password pairs stolen from other breaches. Succeeds because of password reuse; defeated by MFA and breached-credential checks.',
  },
  {
    id: 'cysa-fc-003',
    domain: 1,
    term: 'Beaconing',
    definition:
      'Regular, low-variance callbacks from a compromised host to command and control. Detected by looking for consistent intervals and small repeated payloads rather than by content.',
  },
  {
    id: 'cysa-fc-004',
    domain: 1,
    term: 'DNS tunneling',
    definition:
      'Encoding data inside DNS queries and responses to exfiltrate data or carry C2 traffic. Attractive to attackers because DNS is rarely blocked and often under-inspected.',
  },
  {
    id: 'cysa-fc-005',
    domain: 1,
    term: 'IoC vs. TTP',
    definition:
      'Indicators of compromise are artifacts — hashes, IPs, domains — that attackers change trivially. TTPs describe behavior, which is expensive to change, so behavioral detections last longer.',
  },
  {
    id: 'cysa-fc-006',
    domain: 1,
    term: 'MITRE ATT&CK',
    definition:
      'Knowledge base of adversary tactics (the goal) and techniques (the method) observed in the wild. Used to map detection coverage and expose blind spots.',
  },
  {
    id: 'cysa-fc-007',
    domain: 1,
    term: 'Pyramid of Pain',
    definition:
      'Ranks indicator types by how much disruption detecting them causes an adversary. Hashes are trivial to change; TTPs are the most painful, hence the most valuable to detect.',
  },
  {
    id: 'cysa-fc-008',
    domain: 1,
    term: 'SIEM correlation',
    definition:
      'Linking events across sources and time so that individually benign activity — a failed logon, a new service, an outbound connection — is recognized as one attack chain.',
  },
  {
    id: 'cysa-fc-009',
    domain: 1,
    term: 'SOAR',
    definition:
      'Security Orchestration, Automation and Response — automates repetitive workflow such as alert enrichment and containment actions. Automate the deterministic, keep judgment with humans.',
  },
  {
    id: 'cysa-fc-010',
    domain: 1,
    term: 'EDR / Sysmon telemetry',
    definition:
      'Endpoint visibility linking process creation, file writes, registry changes, and network connections. Answers "which process did this?", which network logs cannot.',
  },
  {
    id: 'cysa-fc-011',
    domain: 1,
    term: 'SPF, DKIM, DMARC',
    definition:
      'SPF authorizes sending IPs for a domain. DKIM cryptographically signs messages. DMARC sets policy for failures and provides reporting. Together they address domain spoofing.',
  },
  {
    id: 'cysa-fc-012',
    domain: 1,
    term: 'Email Received headers',
    definition:
      'Added by each mail server in the delivery path, so the earliest trustworthy entries help trace true origin. From and Reply-To are display fields and trivially forged.',
  },
  {
    id: 'cysa-fc-013',
    domain: 1,
    term: 'Static vs. dynamic malware analysis',
    definition:
      'Static inspects the file without running it — strings, imports, hashes — but is defeated by packing. Dynamic detonates it in a sandbox to observe real behavior.',
  },
  {
    id: 'cysa-fc-014',
    domain: 1,
    term: 'Threat hunting',
    definition:
      'Hypothesis-driven proactive search for activity existing detections missed. Assumes compromise; every confirmed finding should become a new detection rule.',
  },
  {
    id: 'cysa-fc-015',
    domain: 1,
    term: 'Alert tuning',
    definition:
      'Narrowing rules and excluding known-good activity to cut false positives without losing coverage. Untuned noise causes analyst fatigue and missed true positives.',
  },
  {
    id: 'cysa-fc-016',
    domain: 1,
    term: 'Network segmentation',
    definition:
      'Restricting east-west traffic so a compromised host cannot reach the rest of the estate. The strongest architectural brake on lateral movement.',
  },
  {
    id: 'cysa-fc-017',
    domain: 1,
    term: 'Cloud control plane logs',
    definition:
      'API audit trails recording who created, changed, or deleted resources and permissions. The authoritative source for detecting unauthorized privilege changes.',
  },
  {
    id: 'cysa-fc-018',
    domain: 1,
    term: 'Service account anomalies',
    definition:
      'Service accounts should behave narrowly and predictably. Interactive logons, new source hosts, or off-schedule activity are strong indicators of credential compromise.',
  },

  // ─── DOMAIN 2: VULNERABILITY MANAGEMENT ──────────────────────────────────

  {
    id: 'cysa-fc-019',
    domain: 2,
    term: 'Credentialed vs. uncredentialed scan',
    definition:
      'Credentialed scans log in and read actual patch levels and configuration — far more accurate. Uncredentialed scans infer from exposed services and produce more false results.',
  },
  {
    id: 'cysa-fc-020',
    domain: 2,
    term: 'Agent-based vs. network scanning',
    definition:
      'Agents report continuously and cover roaming and offline hosts. Network scans need no install but miss anything powered down or off-network at scan time.',
  },
  {
    id: 'cysa-fc-021',
    domain: 2,
    term: 'CVSS base metrics',
    definition:
      'Attack Vector, Attack Complexity, Privileges Required, User Interaction, Scope, and the Confidentiality/Integrity/Availability impacts. Severity only — not risk.',
  },
  {
    id: 'cysa-fc-022',
    domain: 2,
    term: 'CVSS is not risk',
    definition:
      'Base scores ignore exposure, asset criticality, compensating controls, and exploit availability. Two 9.8s can carry wildly different real risk.',
  },
  {
    id: 'cysa-fc-023',
    domain: 2,
    term: 'Known exploited vulnerabilities (KEV)',
    definition:
      'Catalogs of vulnerabilities under active exploitation. Exploitation in the wild is the strongest near-term risk signal and should override raw score ordering.',
  },
  {
    id: 'cysa-fc-024',
    domain: 2,
    term: 'False positive vs. false negative',
    definition:
      'A false positive reports a vulnerability that is not there and wastes effort. A false negative misses a real one and is far more dangerous. Validation addresses both.',
  },
  {
    id: 'cysa-fc-025',
    domain: 2,
    term: 'Backported patches',
    definition:
      'Vendors fix vulnerabilities without changing the version string, so version-based scanners flag patched systems. A classic false positive requiring manual validation.',
  },
  {
    id: 'cysa-fc-026',
    domain: 2,
    term: 'Compensating controls',
    definition:
      'Alternative protections applied when patching is not possible — segmentation, WAF rules, tightened access, enhanced monitoring — with residual risk formally accepted.',
  },
  {
    id: 'cysa-fc-027',
    domain: 2,
    term: 'SAST / DAST / SCA / IAST',
    definition:
      'SAST analyzes source statically. DAST probes a running application from outside. SCA inspects third-party dependencies. IAST instruments the app during testing.',
  },
  {
    id: 'cysa-fc-028',
    domain: 2,
    term: 'Cross-site scripting (XSS)',
    definition:
      'Attacker script executing in another user’s browser due to unencoded output. Types: reflected, stored, and DOM-based. Mitigated by output encoding and CSP.',
  },
  {
    id: 'cysa-fc-029',
    domain: 2,
    term: 'SSRF',
    definition:
      'Server-side request forgery — the server is coerced into fetching attacker-chosen URLs, often internal or cloud metadata endpoints. Mitigated by destination allowlists.',
  },
  {
    id: 'cysa-fc-030',
    domain: 2,
    term: 'Insecure deserialization',
    definition:
      'Processing untrusted serialized objects, which can lead to remote code execution. Avoid deserializing untrusted input; validate and sign where unavoidable.',
  },
  {
    id: 'cysa-fc-031',
    domain: 2,
    term: 'SBOM',
    definition:
      'Software bill of materials — inventory of components and dependencies. Turns "are we affected by this new CVE?" from a multi-week hunt into a query.',
  },
  {
    id: 'cysa-fc-032',
    domain: 2,
    term: 'Asset inventory',
    definition:
      'The foundation of vulnerability management: unknown assets are never scanned and never patched. Shadow IT and forgotten systems are common initial access points.',
  },
  {
    id: 'cysa-fc-033',
    domain: 2,
    term: 'Configuration compliance scanning',
    definition:
      'Measures systems against a hardening benchmark such as CIS. A fully patched host can still be badly misconfigured, which patch scanning will not reveal.',
  },
  {
    id: 'cysa-fc-034',
    domain: 2,
    term: 'Scan scheduling considerations',
    definition:
      'Aggressive scanning can destabilize fragile devices and consume bandwidth. Plan intensity and timing, and treat OT and legacy systems with particular care.',
  },

  // ─── DOMAIN 3: INCIDENT RESPONSE ─────────────────────────────────────────

  {
    id: 'cysa-fc-035',
    domain: 3,
    term: 'Incident response lifecycle',
    definition:
      'Preparation → Detection and Analysis → Containment, Eradication and Recovery → Post-incident Activity. Preparation determines how well every later phase goes.',
  },
  {
    id: 'cysa-fc-036',
    domain: 3,
    term: 'Isolate, do not power off',
    definition:
      'Network isolation stops the attacker while preserving RAM — running processes, network state, injected code, and often keys. Powering off destroys all of it.',
  },
  {
    id: 'cysa-fc-037',
    domain: 3,
    term: 'Order of volatility',
    definition:
      'Collect most transient first: CPU registers and cache → RAM → network state → disk → backups → printed material.',
  },
  {
    id: 'cysa-fc-038',
    domain: 3,
    term: 'Chain of custody',
    definition:
      'Documentation of everyone who handled evidence, when, and why. A gap lets the integrity of the evidence be challenged and can render it unusable.',
  },
  {
    id: 'cysa-fc-039',
    domain: 3,
    term: 'Forensic imaging and hashing',
    definition:
      'Acquire a bit-for-bit image, hash it at acquisition, and analyze only a working copy. Matching hashes later prove nothing was altered.',
  },
  {
    id: 'cysa-fc-040',
    domain: 3,
    term: 'Cyber Kill Chain',
    definition:
      'Reconnaissance → Weaponization → Delivery → Exploitation → Installation → Command and Control → Actions on Objectives. Breaking any link disrupts the attack.',
  },
  {
    id: 'cysa-fc-041',
    domain: 3,
    term: 'Diamond Model',
    definition:
      'Analyzes intrusions across four linked features: adversary, capability, infrastructure, and victim. Pivoting on one often reveals the others.',
  },
  {
    id: 'cysa-fc-042',
    domain: 3,
    term: 'Eradication and recovery',
    definition:
      'Remove the cause, then verify the initial access vector is closed before restoring service. Restoring without closing the entry point invites immediate reinfection.',
  },
  {
    id: 'cysa-fc-043',
    domain: 3,
    term: 'Incident severity',
    definition:
      'Driven by business impact — data sensitivity, operational disruption, regulatory exposure — not by alert volume or malware notoriety.',
  },
  {
    id: 'cysa-fc-044',
    domain: 3,
    term: 'Blameless post-incident review',
    definition:
      'Focuses on systemic control failures rather than individuals. Fear of blame suppresses information, and suppressed information guarantees recurrence.',
  },
  {
    id: 'cysa-fc-045',
    domain: 3,
    term: 'Ransomware response priority',
    definition:
      'Stop propagation first — isolate hosts and cut the spread path. Restoring onto a network the attacker still controls just supplies more to encrypt.',
  },
  {
    id: 'cysa-fc-046',
    domain: 3,
    term: 'Playbooks',
    definition:
      'Pre-written response procedures for common incident types, removing improvisation under pressure and ensuring required steps such as evidence capture are not skipped.',
  },

  // ─── DOMAIN 4: REPORTING AND COMMUNICATION ───────────────────────────────

  {
    id: 'cysa-fc-047',
    domain: 4,
    term: 'Executive vs. technical reporting',
    definition:
      'Executives need impact, status, decisions required, and timeline. Engineers need indicators, affected systems, and specific remediation steps. Same incident, different documents.',
  },
  {
    id: 'cysa-fc-048',
    domain: 4,
    term: 'MTTD / MTTR',
    definition:
      'Mean time to detect measures the window an attacker operates unnoticed. Mean time to respond measures how quickly the team acts once aware. Both should trend down.',
  },
  {
    id: 'cysa-fc-049',
    domain: 4,
    term: 'Vanity metrics',
    definition:
      'Counts such as alerts closed or blocked events that look productive without showing risk reduction. Detection coverage and MTTD describe effectiveness far better.',
  },
  {
    id: 'cysa-fc-050',
    domain: 4,
    term: 'Actionable vulnerability reporting',
    definition:
      'Prioritized findings with clear remediation steps and named owners. Raw scanner exports with thousands of undifferentiated findings reliably produce no action.',
  },
  {
    id: 'cysa-fc-051',
    domain: 4,
    term: 'Remediation SLAs',
    definition:
      'Pre-agreed timelines by severity — for example critical in 7 days, high in 30. Replaces case-by-case negotiation with a shared standard that can be reported against.',
  },
  {
    id: 'cysa-fc-052',
    domain: 4,
    term: 'Risk acceptance',
    definition:
      'A legitimate business decision when documented with justification, an accountable owner, and a review date. Undocumented acceptance is simply an ignored finding.',
  },
  {
    id: 'cysa-fc-053',
    domain: 4,
    term: 'Breach notification',
    definition:
      'Regulatory and affected-party notification carries legal deadlines. Coordinate timing and wording with legal counsel; premature statements before scope is known cause harm.',
  },
  {
    id: 'cysa-fc-054',
    domain: 4,
    term: 'UTC timelines',
    definition:
      'Record incident events in one consistent time zone. Mixed zones and daylight saving shifts corrupt correlation and can invert the apparent order of events.',
  },
  {
    id: 'cysa-fc-055',
    domain: 4,
    term: 'Root cause vs. trigger',
    definition:
      'The phishing email is the trigger; missing MFA and unrestricted macros are the root causes. Fixing controls prevents recurrence — blaming the clicker does not.',
  },
];

/**
 * Returns all flashcards for a specific domain (1-4).
 * @param {number} domainId
 * @returns {Array}
 */
export function getFlashcardsByDomain(domainId) {
  return flashcards.filter((fc) => fc.domain === domainId);
}
