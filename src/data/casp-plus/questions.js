// CASP+ CAS-004 Practice Questions
// Domains: 1=Security Architecture, 2=Security Operations,
//          3=Security Engineering and Cryptography, 4=Governance, Risk, and Compliance

export const questions = [
  // ─── DOMAIN 1: SECURITY ARCHITECTURE ─────────────────────────────────────

  {
    id: 'casp-q-001',
    domain: 1,
    topic: 'Zero Trust',
    question:
      'Which principle most fundamentally distinguishes a zero trust architecture from a traditional perimeter model?',
    options: [
      'Trust is never granted based on network location; every request is authenticated and authorized',
      'The perimeter firewall is replaced with a more capable model',
      'All traffic is routed through a single inspection point',
      'Internal traffic is exempted from inspection for performance',
    ],
    correct: 0,
    explanation:
      'Zero trust removes implicit trust from network position. Being "inside" grants nothing; each request is evaluated on identity, device posture, and context.',
  },
  {
    id: 'casp-q-002',
    domain: 1,
    topic: 'Zero Trust',
    question:
      'Which capability is a prerequisite for enforcing meaningful zero trust access decisions?',
    options: [
      'Strong identity with device posture and context signals',
      'A larger address space for internal subnets',
      'Removing all network segmentation',
      'Disabling encryption for inspection',
    ],
    correct: 0,
    explanation:
      'Policy decisions require reliable inputs: who the subject is, the health and compliance of the device, and contextual signals. Without them, "verify" cannot be enforced.',
  },
  {
    id: 'casp-q-003',
    domain: 1,
    topic: 'Segmentation',
    question:
      'An organization must ensure a compromised workstation cannot reach the payment processing environment. Which control most directly achieves this?',
    options: [
      'Network segmentation with explicit deny between zones',
      'Longer password requirements for all users',
      'Increased log retention',
      'A larger security awareness budget',
    ],
    correct: 0,
    explanation:
      'Segmentation with default-deny between zones structurally prevents reachability. Detective and administrative controls do not stop the traffic itself.',
  },
  {
    id: 'casp-q-004',
    domain: 1,
    topic: 'Cloud Architecture',
    question:
      'A multinational must ensure customer data for EU residents never leaves the EU while using a global cloud provider. Which design element is essential?',
    options: [
      'Region-pinned storage and processing with replication restrictions enforced by policy',
      'A faster inter-region network link',
      'Enabling autoscaling in all regions',
      'Using a single global load balancer',
    ],
    correct: 0,
    explanation:
      'Data sovereignty is addressed by constraining where data resides and replicates, enforced through provider policy controls and validated by audit — not by network design.',
  },
  {
    id: 'casp-q-005',
    domain: 1,
    topic: 'Resilience',
    question:
      'Which architectural approach best limits the impact of a single failed component in a distributed system?',
    options: [
      'Bulkheads and circuit breakers isolating failures between services',
      'Increasing the timeout on every call',
      'Consolidating services onto fewer hosts',
      'Removing health checks to avoid false failures',
    ],
    correct: 0,
    explanation:
      'Bulkheads confine failures to one partition and circuit breakers stop cascading retries. Longer timeouts actually propagate failure by exhausting upstream resources.',
  },
  {
    id: 'casp-q-006',
    domain: 1,
    topic: 'Secure Design',
    question:
      'During architecture review, which activity most effectively identifies design-level security flaws before implementation?',
    options: [
      'Threat modeling against the proposed data flows and trust boundaries',
      'Running a vulnerability scan on the development environment',
      'Reviewing the vendor’s marketing documentation',
      'Increasing unit test coverage',
    ],
    correct: 0,
    explanation:
      'Threat modeling examines trust boundaries and data flows to find flaws that scanning cannot see, because a design flaw is not a software defect.',
  },
  {
    id: 'casp-q-007',
    domain: 1,
    topic: 'Integration',
    question:
      'A legacy system cannot support modern authentication and must remain in service for two years. What is the most defensible architectural approach?',
    options: [
      'Isolate it behind a controlled access broker with strict segmentation and enhanced monitoring',
      'Expose it directly and accept the risk without further action',
      'Disable logging to reduce overhead',
      'Grant broad access so users are not inconvenienced',
    ],
    correct: 0,
    explanation:
      'When the system cannot be fixed, the architecture must compensate: mediate access through a broker that can enforce modern controls, restrict reachability, and increase visibility.',
  },
  {
    id: 'casp-q-008',
    domain: 1,
    topic: 'Data Architecture',
    question:
      'Which approach best supports analytics on sensitive data while limiting exposure of identifiable information?',
    options: [
      'Pseudonymization with the re-identification key held under separate control',
      'Granting analysts direct production database access',
      'Copying production data unmodified into a shared analytics environment',
      'Disabling audit logging in the analytics platform',
    ],
    correct: 0,
    explanation:
      'Pseudonymization retains analytical utility while separating identity. Holding the mapping under separate control means an analytics compromise does not re-identify individuals.',
  },
  {
    id: 'casp-q-009',
    domain: 1,
    topic: 'API Security',
    question:
      'Which control most directly addresses excessive data exposure by an internal API consumed by a mobile application?',
    options: [
      'Server-side response filtering scoped to the caller’s authorization',
      'Obfuscating the mobile application binary',
      'Rate limiting the endpoint',
      'Pinning the TLS certificate',
    ],
    correct: 0,
    explanation:
      'Excessive data exposure occurs when the API returns more than the caller should see and the client hides it. Only server-side filtering fixes it; client-side controls are bypassed trivially.',
  },
  {
    id: 'casp-q-010',
    domain: 1,
    topic: 'Architecture Trade-offs',
    question:
      'A proposed control would reduce a moderate risk but introduce significant availability risk to a revenue-critical system. What is the appropriate architectural response?',
    options: [
      'Present the trade-off with alternatives and let the accountable business owner decide',
      'Implement the control regardless, since security takes precedence',
      'Abandon the control without documenting the decision',
      'Implement it silently during a maintenance window',
    ],
    correct: 0,
    explanation:
      'At this level the role is informing risk decisions, not making unilateral ones. The architect quantifies the trade-off and offers options; the accountable owner decides.',
  },
  {
    id: 'casp-q-011',
    domain: 1,
    topic: 'Identity Architecture',
    question:
      'Which federation design consideration most reduces the impact of an identity provider compromise?',
    options: [
      'Short token lifetimes with strong signing key protection and revocation capability',
      'Longer session durations to reduce authentication load',
      'Sharing signing keys across all relying parties',
      'Disabling token expiration for trusted applications',
    ],
    correct: 0,
    explanation:
      'Short-lived tokens limit the window a stolen assertion is useful, and protected keys with revocation limit forgery. Long-lived tokens extend an attacker’s access indefinitely.',
  },

  // ─── DOMAIN 2: SECURITY OPERATIONS ───────────────────────────────────────

  {
    id: 'casp-q-012',
    domain: 2,
    topic: 'Threat Management',
    question:
      'Which approach best prioritizes detection engineering effort across a large enterprise?',
    options: [
      'Mapping current coverage to adversary techniques relevant to the organization’s threat profile',
      'Writing a detection for every technique in the framework',
      'Prioritizing techniques with the shortest rule syntax',
      'Deploying only vendor default rules',
    ],
    correct: 0,
    explanation:
      'Coverage mapping against techniques a relevant adversary actually uses directs effort where it reduces risk. Attempting universal coverage produces shallow, noisy detections.',
  },
  {
    id: 'casp-q-013',
    domain: 2,
    topic: 'Incident Response',
    question:
      'During a major incident, who should hold authority to disconnect a revenue-critical system?',
    options: [
      'A pre-designated incident commander with delegated authority agreed in advance',
      'Whichever analyst first identifies the issue',
      'The vendor support representative',
      'Nobody — such systems should never be disconnected',
    ],
    correct: 0,
    explanation:
      'Containment decisions with business impact must have pre-delegated authority. Negotiating authority during an incident wastes the time that determines its scope.',
  },
  {
    id: 'casp-q-014',
    domain: 2,
    topic: 'Incident Response',
    question:
      'An enterprise discovers an intrusion that has persisted for several months across multiple systems. What should drive the containment strategy?',
    options: [
      'Coordinated eradication after scoping, to avoid alerting the adversary prematurely',
      'Immediately reimaging the first system discovered',
      'Blocking the currently known C2 domain and closing the incident',
      'Notifying all staff by email before scoping is complete',
    ],
    correct: 0,
    explanation:
      'For an established intrusion, piecemeal remediation tips off the adversary and drives them deeper. Scope first, then execute coordinated eradication and credential rotation.',
  },
  {
    id: 'casp-q-015',
    domain: 2,
    topic: 'Forensics',
    question:
      'Which consideration is most important when collecting evidence from a cloud environment?',
    options: [
      'Understanding what the provider retains, for how long, and how to obtain it legally',
      'Physically seizing the underlying hardware',
      'Disabling the provider’s logging to prevent tampering',
      'Assuming the same acquisition process as on-premises systems',
    ],
    correct: 0,
    explanation:
      'Cloud forensics depends on provider-held telemetry with defined retention and legal access processes. Physical seizure is impossible in a multi-tenant environment.',
  },
  {
    id: 'casp-q-016',
    domain: 2,
    topic: 'Automation',
    question:
      'Which risk must be managed when automating containment actions?',
    options: [
      'A false positive triggering automated action could cause a self-inflicted outage',
      'Automation always runs too slowly to be useful',
      'Automated actions cannot be logged',
      'Automation removes the need for detection tuning',
    ],
    correct: 0,
    explanation:
      'Automated containment amplifies detection quality problems into availability incidents. High-confidence detections, blast-radius limits, and rapid rollback are prerequisites.',
  },
  {
    id: 'casp-q-017',
    domain: 2,
    topic: 'Vulnerability Management',
    question:
      'An enterprise cannot meet its patching SLA for a large legacy estate. Which response is most defensible?',
    options: [
      'Risk-based prioritization with compensating controls and a documented, owned remediation roadmap',
      'Adjusting the SLA to match current performance without further analysis',
      'Excluding legacy systems from scanning to improve metrics',
      'Reporting only systems that are already compliant',
    ],
    correct: 0,
    explanation:
      'Prioritizing by real exposure, applying compensating controls, and committing to an owned roadmap addresses the risk honestly. Hiding the gap by changing measurement does not.',
  },
  {
    id: 'casp-q-018',
    domain: 2,
    topic: 'Threat Hunting',
    question:
      'Which data gap most undermines an enterprise threat hunting capability?',
    options: [
      'Insufficient endpoint process and command-line telemetry retention',
      'Lack of marketing analytics data',
      'Short DHCP lease durations',
      'Absence of a corporate wiki',
    ],
    correct: 0,
    explanation:
      'Hunting depends on rich historical endpoint telemetry. Without adequate retention of process and command-line data, activity predating the retention window cannot be investigated.',
  },
  {
    id: 'casp-q-019',
    domain: 2,
    topic: 'Supply Chain',
    question:
      'Which control most improves the ability to respond when a widely used third-party library is found vulnerable?',
    options: [
      'Maintained SBOMs across the application portfolio',
      'A longer vendor contract term',
      'More frequent penetration tests of the network perimeter',
      'Additional endpoint antivirus licenses',
    ],
    correct: 0,
    explanation:
      'An SBOM answers "where do we run this?" immediately. Without one, identifying affected systems takes weeks — the interval during which exploitation occurs.',
  },
  {
    id: 'casp-q-020',
    domain: 2,
    topic: 'Monitoring',
    question:
      'Which measure best indicates that a security operations capability is improving?',
    options: [
      'Declining mean time to detect alongside stable or improving detection coverage',
      'An increasing number of alerts generated per day',
      'A growing count of blocked perimeter connections',
      'More security tools deployed',
    ],
    correct: 0,
    explanation:
      'Reduced dwell time with maintained coverage indicates genuine improvement. Alert and block counts largely measure environmental noise rather than capability.',
  },
  {
    id: 'casp-q-021',
    domain: 2,
    topic: 'Insider Threat',
    question:
      'Which control combination best addresses the risk of a privileged insider exfiltrating sensitive data?',
    options: [
      'Least privilege with separation of duties, tamper-resistant logging, and data loss monitoring',
      'Longer password complexity requirements',
      'More frequent security awareness posters',
      'Blocking personal email on the guest wireless network',
    ],
    correct: 0,
    explanation:
      'Insider risk is addressed by limiting what one person can do alone, ensuring their actions are recorded where they cannot alter them, and monitoring data movement.',
  },
  {
    id: 'casp-q-022',
    domain: 2,
    topic: 'Business Continuity',
    question:
      'Following a destructive ransomware event affecting the directory service, what should recovery sequencing prioritize?',
    options: [
      'Restoring a trusted identity foundation before dependent services',
      'Restoring end-user file shares first to reduce complaints',
      'Restoring all systems simultaneously to save time',
      'Reconnecting to the internet before validating integrity',
    ],
    correct: 0,
    explanation:
      'Nearly everything depends on identity. Restoring dependent services onto an untrusted directory rebuilds the compromise, so a clean identity foundation comes first.',
  },

  // ─── DOMAIN 3: SECURITY ENGINEERING AND CRYPTOGRAPHY ─────────────────────

  {
    id: 'casp-q-023',
    domain: 3,
    topic: 'Key Management',
    question:
      'Which key management practice most limits the impact of a compromised encryption key?',
    options: [
      'Scoped keys with defined rotation and the ability to re-encrypt affected data',
      'Using one master key across all systems for simplicity',
      'Storing keys alongside the encrypted data for availability',
      'Extending key lifetimes to avoid rotation outages',
    ],
    correct: 0,
    explanation:
      'Narrowly scoped keys confine the blast radius, and rotation with re-encryption capability limits exposure duration. A single shared key makes any compromise total.',
  },
  {
    id: 'casp-q-024',
    domain: 3,
    topic: 'Cryptography',
    question:
      'Which property does a digital signature provide that symmetric message authentication codes do not?',
    options: [
      'Non-repudiation, since only the holder of the private key could have produced it',
      'Faster verification',
      'Smaller output size',
      'Protection against replay attacks',
    ],
    correct: 0,
    explanation:
      'A MAC proves the message came from someone holding the shared key, so either party could have created it. Only asymmetric signatures support non-repudiation.',
  },
  {
    id: 'casp-q-025',
    domain: 3,
    topic: 'Cryptography',
    question:
      'What does forward secrecy protect against?',
    options: [
      'Decryption of previously captured traffic if the long-term private key is later compromised',
      'Downgrade to a weaker cipher suite',
      'Certificate authority compromise',
      'Denial-of-service attacks on the handshake',
    ],
    correct: 0,
    explanation:
      'Ephemeral key exchange means session keys are not recoverable from the long-term key, so recorded traffic stays protected even if that key is later exposed.',
  },
  {
    id: 'casp-q-026',
    domain: 3,
    topic: 'PKI',
    question:
      'Which practice most reduces the impact of a compromised issuing certificate authority?',
    options: [
      'An offline root with tiered issuing CAs and functioning revocation',
      'Issuing certificates with ten-year validity',
      'Using a single CA for all purposes',
      'Disabling revocation checking to improve performance',
    ],
    correct: 0,
    explanation:
      'An offline root allows a compromised issuing CA to be revoked and replaced without rebuilding all trust. Long validity and absent revocation checking both worsen the impact.',
  },
  {
    id: 'casp-q-027',
    domain: 3,
    topic: 'Cryptographic Agility',
    question:
      'Why is cryptographic agility an architectural requirement rather than an implementation detail?',
    options: [
      'Algorithms weaken over time, and systems that hardcode them cannot be migrated affordably',
      'It improves encryption performance',
      'It removes the need for key management',
      'It is required for TLS to function',
    ],
    correct: 0,
    explanation:
      'Algorithm lifetimes are shorter than system lifetimes. Designs that abstract cryptographic choices can migrate; hardcoded ones require costly re-engineering under time pressure.',
  },
  {
    id: 'casp-q-028',
    domain: 3,
    topic: 'Post-Quantum',
    question:
      'What is the primary near-term risk that motivates planning for post-quantum cryptography?',
    options: [
      'Harvest-now-decrypt-later collection of encrypted data with long confidentiality requirements',
      'Immediate breaking of all current encryption',
      'Increased key sizes causing storage exhaustion',
      'Loss of hashing capability',
    ],
    correct: 0,
    explanation:
      'Adversaries can capture encrypted traffic today and decrypt it once capability exists. Data requiring decades of confidentiality is therefore at risk now, not later.',
  },
  {
    id: 'casp-q-029',
    domain: 3,
    topic: 'Secure Development',
    question:
      'Which secure development practice most reliably prevents secrets from reaching production repositories?',
    options: [
      'Automated pre-commit and pipeline secret scanning combined with a secrets manager',
      'A policy document prohibiting hardcoded secrets',
      'Periodic manual code review',
      'Making repositories private',
    ],
    correct: 0,
    explanation:
      'Automated enforcement catches what policy and review miss. A private repository is not protection — secrets remain in history and are exposed by any later access.',
  },
  {
    id: 'casp-q-030',
    domain: 3,
    topic: 'Hardware Security',
    question:
      'What security benefit does a hardware security module provide over software key storage?',
    options: [
      'Keys are generated and used inside tamper-resistant hardware and cannot be exported',
      'It makes cryptographic operations faster in all cases',
      'It eliminates the need for access control',
      'It removes the requirement for key rotation',
    ],
    correct: 0,
    explanation:
      'An HSM performs operations internally so the private key never exists in an extractable form, which defeats a host compromise that would otherwise yield the key.',
  },
  {
    id: 'casp-q-031',
    domain: 3,
    topic: 'Trusted Computing',
    question:
      'What does measured boot with a TPM provide?',
    options: [
      'Cryptographic evidence of the boot component chain that can be attested remotely',
      'Encryption of all network traffic',
      'Prevention of all malware execution',
      'Automatic patching of firmware',
    ],
    correct: 0,
    explanation:
      'Measured boot records hashes of each boot component into TPM registers, enabling remote attestation of platform integrity. It detects tampering rather than preventing execution.',
  },
  {
    id: 'casp-q-032',
    domain: 3,
    topic: 'Secure Development',
    question:
      'Which activity best addresses security defects introduced by third-party dependencies?',
    options: [
      'Software composition analysis integrated into the build pipeline',
      'Static analysis of first-party source code only',
      'Perimeter intrusion detection',
      'Annual penetration testing',
    ],
    correct: 0,
    explanation:
      'SCA identifies vulnerable and unmaintained dependencies, which is where much of the modern application attack surface lives. SAST examines only code the team wrote.',
  },

  // ─── DOMAIN 4: GOVERNANCE, RISK, AND COMPLIANCE ──────────────────────────

  {
    id: 'casp-q-033',
    domain: 4,
    topic: 'Risk Management',
    question:
      'Which statement best describes residual risk?',
    options: [
      'The risk that remains after controls have been applied',
      'The risk before any controls are considered',
      'Risk transferred to an insurer',
      'Risk that has been eliminated entirely',
    ],
    correct: 0,
    explanation:
      'Inherent risk exists before controls; residual risk remains after them. Residual risk must be formally accepted by an owner with the authority to do so.',
  },
  {
    id: 'casp-q-034',
    domain: 4,
    topic: 'Risk Management',
    question:
      'An organization purchases cyber insurance covering breach response costs. Which risk treatment is this?',
    options: ['Transfer', 'Avoidance', 'Mitigation', 'Acceptance'],
    correct: 0,
    explanation:
      'Insurance transfers financial consequence to another party. It does not reduce the likelihood of the event, and reputational and regulatory consequences remain with the organization.',
  },
  {
    id: 'casp-q-035',
    domain: 4,
    topic: 'Risk Quantification',
    question:
      'Which advantage does quantitative risk analysis offer over purely qualitative rating?',
    options: [
      'It expresses risk in financial terms that support investment comparison',
      'It removes all uncertainty from estimates',
      'It requires no input data',
      'It is faster to perform in every case',
    ],
    correct: 0,
    explanation:
      'Expressing exposure in monetary terms allows control spending to be compared against loss reduction. It does not eliminate uncertainty — inputs remain estimates.',
  },
  {
    id: 'casp-q-036',
    domain: 4,
    topic: 'Third-Party Risk',
    question:
      'Which assessment activity provides the strongest assurance about a critical vendor’s control environment?',
    options: [
      'Reviewing an independent audit report and validating scope against your requirements',
      'Accepting the vendor’s completed self-assessment questionnaire',
      'Reviewing the vendor’s marketing security page',
      'Confirming the vendor has an information security policy document',
    ],
    correct: 0,
    explanation:
      'Independent attestation carries far more weight than self-assertion, but the scope and exclusions must be checked — a report covering a different service tells you nothing.',
  },
  {
    id: 'casp-q-037',
    domain: 4,
    topic: 'Third-Party Risk',
    question:
      'Which contractual provision most improves an organization’s position when a vendor suffers a breach affecting its data?',
    options: [
      'Defined notification timelines, audit rights, and breach responsibilities',
      'A longer contract term at a fixed price',
      'A clause requiring annual account reviews',
      'A preferred-customer support tier',
    ],
    correct: 0,
    explanation:
      'Breach obligations must be established before the incident. Without contractual notification timelines and audit rights, the customer learns late and cannot verify anything.',
  },
  {
    id: 'casp-q-038',
    domain: 4,
    topic: 'Compliance',
    question:
      'Which statement best describes the relationship between compliance and security?',
    options: [
      'Compliance establishes a minimum baseline; it does not by itself constitute adequate security',
      'Compliance and security are equivalent',
      'Achieving compliance eliminates the need for a risk program',
      'Security requirements are always a subset of compliance requirements',
    ],
    correct: 0,
    explanation:
      'Frameworks define minimums applicable across many organizations. A compliant organization can still be inadequately protected against the threats specific to it.',
  },
  {
    id: 'casp-q-039',
    domain: 4,
    topic: 'Privacy',
    question:
      'Which principle requires collecting only the personal data necessary for a stated purpose?',
    options: ['Data minimization', 'Data portability', 'Purpose limitation', 'Accountability'],
    correct: 0,
    explanation:
      'Data minimization limits collection to what is necessary. Purpose limitation is related but restricts using data for purposes beyond those disclosed.',
  },
  {
    id: 'casp-q-040',
    domain: 4,
    topic: 'Governance',
    question:
      'Which factor most determines whether a security program succeeds at enterprise scale?',
    options: [
      'Executive sponsorship with clear accountability and authority',
      'The number of security tools deployed',
      'The size of the security team',
      'The technical depth of individual analysts',
    ],
    correct: 0,
    explanation:
      'Enterprise security requires changes across business units that a security team cannot mandate alone. Without sponsorship and defined accountability, initiatives stall regardless of technical quality.',
  },
  {
    id: 'casp-q-041',
    domain: 4,
    topic: 'Business Impact',
    question:
      'What is the primary purpose of a business impact analysis?',
    options: [
      'Identifying critical processes and the consequences of their disruption over time',
      'Listing the organization’s technical vulnerabilities',
      'Selecting security products',
      'Documenting network topology',
    ],
    correct: 0,
    explanation:
      'A BIA establishes which processes matter, how quickly their loss becomes damaging, and their dependencies — which is what sets defensible RTO and RPO targets.',
  },
  {
    id: 'casp-q-042',
    domain: 4,
    topic: 'Policy',
    question:
      'What distinguishes a standard from a guideline in a policy framework?',
    options: [
      'Standards are mandatory and measurable; guidelines are recommended practice',
      'Guidelines are mandatory; standards are optional',
      'They are interchangeable terms',
      'Standards apply only to vendors',
    ],
    correct: 0,
    explanation:
      'Policy states intent, standards specify mandatory requirements that can be audited, procedures give step-by-step instructions, and guidelines offer discretionary advice.',
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
