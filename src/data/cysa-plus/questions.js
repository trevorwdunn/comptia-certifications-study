// CySA+ CS0-003 Practice Questions
// Domains: 1=Security Operations, 2=Vulnerability Management,
//          3=Incident Response and Management, 4=Reporting and Communication

export const questions = [
  // ─── DOMAIN 1: SECURITY OPERATIONS ───────────────────────────────────────

  {
    id: 'cysa-q-001',
    domain: 1,
    topic: 'Log Analysis',
    question:
      'An analyst sees hundreds of failed logons for many different usernames from one source IP within a minute. Which attack does this pattern indicate?',
    options: ['Password spraying', 'Credential stuffing', 'Brute force against one account', 'Pass the hash'],
    correct: 0,
    explanation:
      'Password spraying tries a small number of common passwords across many accounts to avoid per-account lockout thresholds. Brute force concentrates many attempts on a single account instead.',
  },
  {
    id: 'cysa-q-002',
    domain: 1,
    topic: 'Log Analysis',
    question:
      'Which log source is most useful for determining which process initiated a suspicious outbound network connection on a Windows host?',
    options: [
      'Endpoint detection and response / Sysmon telemetry',
      'The firewall access log alone',
      'DHCP server logs',
      'Physical badge access records',
    ],
    correct: 0,
    explanation:
      'EDR or Sysmon correlates process creation with network connections on the host. A firewall log shows the connection but not which process on the endpoint created it.',
  },
  {
    id: 'cysa-q-003',
    domain: 1,
    topic: 'Network Analysis',
    question:
      'A host makes DNS requests to a rarely used domain at precise 60-second intervals, with small consistent payloads. What should be suspected?',
    options: [
      'Command-and-control beaconing, possibly DNS tunneling',
      'Normal Windows Update traffic',
      'A misconfigured NTP client',
      'Standard certificate revocation checking',
    ],
    correct: 0,
    explanation:
      'Regular, low-variance intervals are the signature of automated beaconing. DNS is a favored channel because it is rarely blocked outright and often less inspected.',
  },
  {
    id: 'cysa-q-004',
    domain: 1,
    topic: 'Threat Intelligence',
    question:
      'What distinguishes a tactic, technique, and procedure (TTP) from an indicator of compromise (IoC)?',
    options: [
      'TTPs describe adversary behavior and are durable; IoCs are specific artifacts and are easily changed',
      'IoCs describe behavior; TTPs are file hashes',
      'They are two terms for the same thing',
      'TTPs apply only to insider threats',
    ],
    correct: 0,
    explanation:
      'An attacker can trivially change a hash, domain, or IP, but changing behavior is expensive. Detections built on TTPs survive infrastructure rotation, which is why behavioral detection is favored.',
  },
  {
    id: 'cysa-q-005',
    domain: 1,
    topic: 'Threat Intelligence',
    question:
      'Which framework catalogs adversary behaviors as tactics and techniques mapped across the attack lifecycle?',
    options: ['MITRE ATT&CK', 'CVSS', 'OWASP Top 10', 'ISO 27001'],
    correct: 0,
    explanation:
      'MITRE ATT&CK is a knowledge base of observed adversary tactics and techniques, widely used to map detection coverage and identify blind spots.',
  },
  {
    id: 'cysa-q-006',
    domain: 1,
    topic: 'Detection Engineering',
    question:
      'A detection rule generates a large volume of alerts that analysts consistently close as benign. What is the appropriate response?',
    options: [
      'Tune the rule to reduce false positives while preserving true-positive coverage',
      'Delete the rule and stop monitoring that behavior',
      'Ignore the alerts but leave the rule unchanged',
      'Increase the alert severity so analysts pay more attention',
    ],
    correct: 0,
    explanation:
      'Untuned noisy rules cause alert fatigue and real detections get missed. Tuning — narrowing scope, excluding known-good, adding context — preserves coverage while restoring signal.',
  },
  {
    id: 'cysa-q-007',
    domain: 1,
    topic: 'SIEM',
    question:
      'What is the primary advantage of correlating events from multiple sources in a SIEM?',
    options: [
      'Individually benign events can reveal an attack chain when linked together',
      'It reduces the amount of storage required for logs',
      'It removes the need for endpoint protection',
      'It automatically patches vulnerable systems',
    ],
    correct: 0,
    explanation:
      'A failed logon, a new service creation, and an outbound connection are each unremarkable alone. Correlated across sources and time, they describe an intrusion.',
  },
  {
    id: 'cysa-q-008',
    domain: 1,
    topic: 'Email Analysis',
    question:
      'Which email header field is most useful for identifying the actual sending mail server of a suspicious message?',
    options: ['Received', 'Subject', 'Reply-To', 'X-Priority'],
    correct: 0,
    explanation:
      'Received headers record each hop and are added by the receiving servers, making the earliest trustworthy ones useful for tracing origin. Display fields such as From are trivially spoofed.',
  },
  {
    id: 'cysa-q-009',
    domain: 1,
    topic: 'Email Security',
    question:
      'Which combination of controls verifies that an email genuinely originated from the claimed domain?',
    options: [
      'SPF, DKIM, and DMARC',
      'TLS and HTTPS',
      'RAID and clustering',
      'NAT and PAT',
    ],
    correct: 0,
    explanation:
      'SPF authorizes sending IPs, DKIM signs the message cryptographically, and DMARC sets policy for failures and enables reporting. Together they address domain spoofing.',
  },
  {
    id: 'cysa-q-010',
    domain: 1,
    topic: 'Malware Analysis',
    question:
      'What is the primary advantage of dynamic malware analysis over static analysis?',
    options: [
      'It reveals actual runtime behavior, including behavior hidden by packing or obfuscation',
      'It is always faster than static analysis',
      'It never requires an isolated environment',
      'It works only on source code',
    ],
    correct: 0,
    explanation:
      'Detonating a sample in a sandbox exposes what it actually does — files written, processes spawned, network contacted — which packing and obfuscation hide from static inspection.',
  },
  {
    id: 'cysa-q-011',
    domain: 1,
    topic: 'Threat Hunting',
    question:
      'How does threat hunting differ from alert-driven monitoring?',
    options: [
      'Hunting proactively searches for undetected activity based on a hypothesis',
      'Hunting only reviews alerts that have already fired',
      'Hunting is performed exclusively by automated tools',
      'Hunting replaces the need for detection rules',
    ],
    correct: 0,
    explanation:
      'Hunting assumes existing detections have gaps and searches data for evidence of compromise. Findings should then be converted into new detections.',
  },
  {
    id: 'cysa-q-012',
    domain: 1,
    topic: 'Automation',
    question:
      'Which task is the strongest candidate for SOAR automation?',
    options: [
      'Enriching alerts with asset owner, reputation, and prior history before analyst review',
      'Deciding whether to notify regulators of a breach',
      'Determining the business impact of an outage',
      'Approving an emergency change to production',
    ],
    correct: 0,
    explanation:
      'Repetitive, deterministic enrichment is ideal for automation and saves analyst time on every alert. Judgment and legal decisions should stay with humans.',
  },
  {
    id: 'cysa-q-013',
    domain: 1,
    topic: 'Identity Analysis',
    question:
      'A service account that historically only authenticates to one database server suddenly authenticates interactively to several workstations. What does this most likely indicate?',
    options: [
      'Credential compromise and lateral movement',
      'Normal patching activity',
      'A DNS misconfiguration',
      'Expected behavior after a password change',
    ],
    correct: 0,
    explanation:
      'Service accounts should have narrow, predictable behavior. Interactive logons to new hosts are a strong lateral movement signal and warrant immediate investigation.',
  },
  {
    id: 'cysa-q-014',
    domain: 1,
    topic: 'Network Architecture',
    question:
      'Which architectural control most limits an attacker’s ability to move laterally after compromising one workstation?',
    options: [
      'Network segmentation with restricted east-west traffic',
      'A longer password policy',
      'More verbose logging',
      'Disabling the guest wireless network',
    ],
    correct: 0,
    explanation:
      'Segmentation restricts which hosts can talk to which, so a foothold does not grant reach across the estate. Logging aids detection but does not impede movement.',
  },
  {
    id: 'cysa-q-015',
    domain: 1,
    topic: 'Cloud Monitoring',
    question:
      'Which cloud log source is most relevant for detecting unauthorized changes to permissions?',
    options: [
      'Control plane / API audit logs',
      'Application access logs',
      'Container image manifests',
      'CDN cache statistics',
    ],
    correct: 0,
    explanation:
      'Permission changes are control plane operations recorded in the provider’s API audit trail, which is the authoritative source for who changed what.',
  },
  {
    id: 'cysa-q-016',
    domain: 1,
    topic: 'Log Analysis',
    question:
      'A web server log shows requests containing "../../etc/passwd". Which attack is being attempted?',
    options: ['Directory traversal', 'SQL injection', 'Cross-site scripting', 'CSRF'],
    correct: 0,
    explanation:
      'Sequences of ../ attempt to escape the web root and read arbitrary files. Requests targeting /etc/passwd are a canonical traversal probe.',
  },

  // ─── DOMAIN 2: VULNERABILITY MANAGEMENT ──────────────────────────────────

  {
    id: 'cysa-q-017',
    domain: 2,
    topic: 'Scanning',
    question:
      'What is the primary advantage of a credentialed vulnerability scan over an uncredentialed one?',
    options: [
      'It inspects installed patch levels and configuration directly, producing far more accurate results',
      'It runs faster and consumes less bandwidth',
      'It never produces false positives',
      'It does not require authorization',
    ],
    correct: 0,
    explanation:
      'With credentials the scanner enumerates actual installed versions and settings rather than inferring from banners, which sharply reduces both false positives and false negatives.',
  },
  {
    id: 'cysa-q-018',
    domain: 2,
    topic: 'Scanning',
    question:
      'Why might an organization schedule vulnerability scans outside business hours?',
    options: [
      'Scanning can degrade performance or destabilize fragile systems',
      'Vulnerabilities only exist at night',
      'Scanners cannot run during the day',
      'It avoids the need for authorization',
    ],
    correct: 0,
    explanation:
      'Aggressive scanning consumes resources and can disrupt sensitive devices such as legacy or operational technology systems, so timing and scan intensity are planned deliberately.',
  },
  {
    id: 'cysa-q-019',
    domain: 2,
    topic: 'CVSS',
    question:
      'Which CVSS base metric describes whether an attacker needs local access or can attack over a network?',
    options: ['Attack Vector', 'Attack Complexity', 'Privileges Required', 'Scope'],
    correct: 0,
    explanation:
      'Attack Vector ranges from Network (most severe) through Adjacent and Local to Physical. It captures how remotely exploitable a vulnerability is.',
  },
  {
    id: 'cysa-q-020',
    domain: 2,
    topic: 'CVSS',
    question:
      'Two vulnerabilities both score CVSS 9.8. Which factor should most influence which is remediated first?',
    options: [
      'Whether one is internet-facing on a critical asset with known active exploitation',
      'Which was discovered first',
      'Which has the longer CVE description',
      'Which vendor issued the advisory',
    ],
    correct: 0,
    explanation:
      'CVSS base scores ignore context. Exposure, asset criticality, compensating controls, and active exploitation in the wild are what determine real risk and priority.',
  },
  {
    id: 'cysa-q-021',
    domain: 2,
    topic: 'Validation',
    question:
      'A scanner reports a critical vulnerability on a server, but the patch was applied last week. What should the analyst do first?',
    options: [
      'Validate the finding by checking the installed version and any compensating configuration',
      'Immediately reimage the server',
      'Mark the finding as accepted risk',
      'Disable the scanner',
    ],
    correct: 0,
    explanation:
      'False positives are common, particularly with backported patches where the version string does not change. Validation prevents wasted remediation effort and false urgency.',
  },
  {
    id: 'cysa-q-022',
    domain: 2,
    topic: 'Prioritization',
    question:
      'Which additional data source most improves vulnerability prioritization beyond CVSS?',
    options: [
      'Known exploited vulnerability catalogs and exploit availability',
      'The alphabetical order of affected products',
      'The number of characters in the CVE ID',
      'The vendor’s stock price',
    ],
    correct: 0,
    explanation:
      'Whether an exploit exists and is being used in the wild is the strongest predictor of near-term risk, which is why catalogs such as CISA KEV drive remediation deadlines.',
  },
  {
    id: 'cysa-q-023',
    domain: 2,
    topic: 'Remediation',
    question:
      'A critical vulnerability affects a legacy system that cannot be patched without breaking a business process. What is the appropriate next step?',
    options: [
      'Apply compensating controls such as segmentation and monitoring, and document the accepted risk',
      'Ignore the finding since it cannot be patched',
      'Remove the system from the asset inventory',
      'Disable all logging on the system',
    ],
    correct: 0,
    explanation:
      'When remediation is not feasible, risk is reduced through compensating controls and the residual risk is formally documented and accepted by an appropriate owner.',
  },
  {
    id: 'cysa-q-024',
    domain: 2,
    topic: 'Web Vulnerabilities',
    question:
      'An application reflects user input into a page without encoding. Which vulnerability class does this create?',
    options: ['Cross-site scripting', 'SQL injection', 'Directory traversal', 'Race condition'],
    correct: 0,
    explanation:
      'Unencoded reflection of input allows attacker-supplied script to execute in other users’ browsers. Output encoding, plus a content security policy, is the mitigation.',
  },
  {
    id: 'cysa-q-025',
    domain: 2,
    topic: 'Web Vulnerabilities',
    question:
      'An application accepts a user-supplied URL and fetches it server-side, allowing requests to internal addresses. What is this vulnerability?',
    options: [
      'Server-side request forgery (SSRF)',
      'Cross-site request forgery (CSRF)',
      'Clickjacking',
      'Session fixation',
    ],
    correct: 0,
    explanation:
      'SSRF abuses the server as a proxy into internal networks, frequently targeting cloud metadata endpoints to steal credentials. Allowlist destinations and block link-local addresses.',
  },
  {
    id: 'cysa-q-026',
    domain: 2,
    topic: 'Software Supply Chain',
    question:
      'What is the primary purpose of a software bill of materials (SBOM)?',
    options: [
      'To inventory components and dependencies so affected software can be identified when a vulnerability is disclosed',
      'To calculate software licensing costs',
      'To measure application performance',
      'To document user interface requirements',
    ],
    correct: 0,
    explanation:
      'When a widely used library is found vulnerable, an SBOM answers "where do we run this?" in minutes rather than weeks — the lesson organizations learned during Log4Shell.',
  },
  {
    id: 'cysa-q-027',
    domain: 2,
    topic: 'Asset Management',
    question:
      'Why is an accurate asset inventory foundational to vulnerability management?',
    options: [
      'Unknown assets are never scanned and therefore never remediated',
      'It reduces the cost of scanner licenses',
      'It improves network throughput',
      'It is required to calculate CVSS scores',
    ],
    correct: 0,
    explanation:
      'Coverage gaps are invisible by definition. Forgotten or shadow IT systems are frequently the entry point, precisely because nobody was maintaining them.',
  },
  {
    id: 'cysa-q-028',
    domain: 2,
    topic: 'Scanning Types',
    question:
      'Which testing approach analyzes an application while it is running, without access to source code?',
    options: ['DAST', 'SAST', 'SCA', 'Code review'],
    correct: 0,
    explanation:
      'Dynamic application security testing probes a running application from the outside. SAST analyzes source code statically, and SCA examines third-party dependencies.',
  },
  {
    id: 'cysa-q-029',
    domain: 2,
    topic: 'Configuration',
    question:
      'Which finding type would a configuration compliance scan identify that a vulnerability scan might not?',
    options: [
      'A system deviating from the organization’s hardening benchmark despite being fully patched',
      'A missing operating system patch',
      'An expired TLS certificate',
      'An open network port',
    ],
    correct: 0,
    explanation:
      'Compliance scanning measures configuration against a benchmark such as CIS. A fully patched host can still be dangerously misconfigured.',
  },

  // ─── DOMAIN 3: INCIDENT RESPONSE AND MANAGEMENT ──────────────────────────

  {
    id: 'cysa-q-030',
    domain: 3,
    topic: 'IR Lifecycle',
    question:
      'Which phase of the incident response lifecycle includes developing playbooks and establishing communication channels?',
    options: ['Preparation', 'Detection and analysis', 'Containment', 'Post-incident activity'],
    correct: 0,
    explanation:
      'Preparation is everything done before an incident — tooling, playbooks, contact lists, training, and authority to act. It determines how well every later phase goes.',
  },
  {
    id: 'cysa-q-031',
    domain: 3,
    topic: 'Containment',
    question:
      'Which containment action preserves the most forensic evidence on a compromised host?',
    options: [
      'Isolating the host from the network while leaving it powered on',
      'Powering the host off immediately',
      'Reimaging the host at once',
      'Deleting suspicious files found on disk',
    ],
    correct: 0,
    explanation:
      'Network isolation stops the attacker while preserving volatile memory, which contains running processes, network state, injected code, and often encryption keys.',
  },
  {
    id: 'cysa-q-032',
    domain: 3,
    topic: 'Forensics',
    question:
      'Following the order of volatility, which evidence should be collected first?',
    options: [
      'CPU registers, cache, and RAM',
      'Data on hard drives',
      'Archived backups',
      'Printed documentation',
    ],
    correct: 0,
    explanation:
      'The order of volatility collects the most transient data first. Memory contents disappear on power loss; disk contents persist and can be imaged afterward.',
  },
  {
    id: 'cysa-q-033',
    domain: 3,
    topic: 'Forensics',
    question:
      'What is the purpose of maintaining a chain of custody?',
    options: [
      'To document everyone who handled evidence so it remains admissible and defensible',
      'To speed up analysis',
      'To compress evidence files',
      'To determine the CVSS score',
    ],
    correct: 0,
    explanation:
      'Chain of custody records who had the evidence, when, and why. A gap allows the integrity of the evidence to be challenged, which can render it useless in proceedings.',
  },
  {
    id: 'cysa-q-034',
    domain: 3,
    topic: 'Forensics',
    question:
      'Why is a cryptographic hash calculated when a forensic disk image is acquired?',
    options: [
      'To prove the image has not been altered since acquisition',
      'To compress the image',
      'To encrypt the evidence',
      'To speed up the copy',
    ],
    correct: 0,
    explanation:
      'Hashing at acquisition and again later demonstrates integrity — matching hashes prove nothing changed. Analysis is performed on a working copy, never the original.',
  },
  {
    id: 'cysa-q-035',
    domain: 3,
    topic: 'Eradication and Recovery',
    question:
      'After eradicating malware from a compromised server, what is the most important recovery consideration?',
    options: [
      'Verifying the initial access vector is closed before returning the system to service',
      'Restoring the system as quickly as possible regardless of root cause',
      'Deleting all logs from the incident',
      'Disabling monitoring to reduce noise',
    ],
    correct: 0,
    explanation:
      'Restoring without closing the entry point invites immediate reinfection. Recovery includes validating that the root cause is remediated and monitoring closely afterward.',
  },
  {
    id: 'cysa-q-036',
    domain: 3,
    topic: 'Incident Classification',
    question:
      'Which factor is most important when determining incident severity?',
    options: [
      'Business impact, including affected data sensitivity and operational disruption',
      'The number of alerts generated',
      'The time of day it was detected',
      'The name of the malware family',
    ],
    correct: 0,
    explanation:
      'Severity drives escalation and resourcing, and it must reflect impact to the business — what data is at risk and what operations are affected — not raw alert volume.',
  },
  {
    id: 'cysa-q-037',
    domain: 3,
    topic: 'Root Cause Analysis',
    question:
      'What is the primary goal of a post-incident review?',
    options: [
      'Identifying systemic gaps and improving controls and process',
      'Assigning individual blame',
      'Reducing the incident count in reports',
      'Closing the ticket faster next time',
    ],
    correct: 0,
    explanation:
      'Blameless review surfaces the truth about what happened. If people fear consequences, information is withheld and the same failure recurs.',
  },
  {
    id: 'cysa-q-038',
    domain: 3,
    topic: 'Attack Frameworks',
    question:
      'In the Cyber Kill Chain, which stage immediately precedes installation?',
    options: ['Exploitation', 'Delivery', 'Reconnaissance', 'Actions on objectives'],
    correct: 0,
    explanation:
      'The chain runs reconnaissance, weaponization, delivery, exploitation, installation, command and control, and actions on objectives. Exploitation is what enables installation.',
  },
  {
    id: 'cysa-q-039',
    domain: 3,
    topic: 'Containment Strategy',
    question:
      'Ransomware is actively encrypting files across multiple servers. What is the immediate priority?',
    options: [
      'Isolate affected systems and disable the propagation path to stop the spread',
      'Begin restoring from backup on the affected servers',
      'Draft the customer notification',
      'Run a full vulnerability scan',
    ],
    correct: 0,
    explanation:
      'Stopping the spread comes first — every minute of propagation increases scope. Restoration onto a network the attacker still controls simply provides more to encrypt.',
  },

  // ─── DOMAIN 4: REPORTING AND COMMUNICATION ───────────────────────────────

  {
    id: 'cysa-q-040',
    domain: 4,
    topic: 'Stakeholder Communication',
    question:
      'Which content is most appropriate for an executive summary of a security incident?',
    options: [
      'Business impact, current status, decisions needed, and expected timeline',
      'Full packet captures and memory dump offsets',
      'The complete list of firewall rules examined',
      'Raw SIEM query syntax',
    ],
    correct: 0,
    explanation:
      'Executives need impact and decisions, not technical artifacts. Technical detail belongs in an appendix or a separate report for the engineering audience.',
  },
  {
    id: 'cysa-q-041',
    domain: 4,
    topic: 'Metrics',
    question:
      'Which metric best measures how quickly a security team identifies incidents?',
    options: ['Mean time to detect (MTTD)', 'Mean time to respond (MTTR)', 'Number of alerts received', 'Number of firewall rules'],
    correct: 0,
    explanation:
      'MTTD measures the gap between compromise and detection — the window in which an attacker operates freely. MTTR measures how fast the team acts once aware.',
  },
  {
    id: 'cysa-q-042',
    domain: 4,
    topic: 'Metrics',
    question:
      'Why is "number of alerts closed" a poor measure of SOC effectiveness on its own?',
    options: [
      'It rewards volume rather than accurate detection and real risk reduction',
      'It is impossible to measure',
      'Alerts cannot be counted reliably',
      'It only applies to cloud environments',
    ],
    correct: 0,
    explanation:
      'Closing many low-quality alerts can look productive while real intrusions go unnoticed. Detection coverage, MTTD, and false-positive rates describe effectiveness far better.',
  },
  {
    id: 'cysa-q-043',
    domain: 4,
    topic: 'Vulnerability Reporting',
    question:
      'Which reporting practice best supports remediation by system owners?',
    options: [
      'Providing prioritized, actionable findings with clear remediation steps and ownership',
      'Sending the full unfiltered scanner export to all staff',
      'Reporting only the total number of findings',
      'Withholding findings until the quarterly review',
    ],
    correct: 0,
    explanation:
      'Owners act on findings that are prioritized, specific, and assigned. A raw export of thousands of findings with no context reliably produces no action at all.',
  },
  {
    id: 'cysa-q-044',
    domain: 4,
    topic: 'Compliance Reporting',
    question:
      'Following confirmation that regulated personal data was exfiltrated, which action must be coordinated promptly?',
    options: [
      'Regulatory and affected-party notification within required timeframes, coordinated with legal',
      'Publishing full technical indicators publicly',
      'Deleting the affected systems to prevent further loss',
      'Announcing the incident before scope is understood',
    ],
    correct: 0,
    explanation:
      'Breach notification obligations carry legal deadlines. Legal counsel coordinates timing and content; destroying systems would eliminate the evidence needed to scope the breach.',
  },
  {
    id: 'cysa-q-045',
    domain: 4,
    topic: 'Documentation',
    question:
      'Why should incident timelines record events in a consistent time zone, typically UTC?',
    options: [
      'Correlating logs across systems in different zones is otherwise error-prone',
      'UTC logs compress better',
      'It is required by CVSS',
      'Local time is not supported by SIEM tools',
    ],
    correct: 0,
    explanation:
      'Mixed time zones and daylight saving shifts corrupt correlation and produce incorrect sequences of events, which can invert cause and effect in an investigation.',
  },
  {
    id: 'cysa-q-046',
    domain: 4,
    topic: 'Root Cause Reporting',
    question:
      'Which statement best describes a well-written root cause finding?',
    options: [
      'It identifies the underlying control failure that allowed the incident, not just the immediate trigger',
      'It names the employee who made the mistake',
      'It lists every alert generated during the incident',
      'It states that the attacker was sophisticated',
    ],
    correct: 0,
    explanation:
      'A phishing email is a trigger; the absence of MFA and unrestricted macro execution are the control failures. Fixing the control prevents recurrence in a way that blaming a person does not.',
  },
  {
    id: 'cysa-q-047',
    domain: 4,
    topic: 'Collaboration',
    question:
      'Which practice most improves cooperation between the security team and system owners?',
    options: [
      'Agreeing remediation SLAs by severity in advance and reporting against them',
      'Escalating every finding directly to executives immediately',
      'Scanning without notifying owners',
      'Keeping detection logic confidential from all other teams',
    ],
    correct: 0,
    explanation:
      'Pre-agreed timelines by severity replace case-by-case argument with a shared standard, and reporting against them makes progress visible without escalation.',
  },
  {
    id: 'cysa-q-048',
    domain: 4,
    topic: 'Risk Communication',
    question:
      'How should residual risk be handled when a business owner declines to remediate a finding?',
    options: [
      'Document the accepted risk with justification, owner, and review date',
      'Remediate it anyway without informing anyone',
      'Remove the finding from all records',
      'Escalate to law enforcement',
    ],
    correct: 0,
    explanation:
      'Risk acceptance is a legitimate business decision provided it is explicit, attributed to an accountable owner, documented, and revisited on a defined schedule.',
  },
];

/**
 * Returns all questions for a specific domain (1-4).
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
