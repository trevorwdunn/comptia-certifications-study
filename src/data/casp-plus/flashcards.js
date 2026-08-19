// CASP+ CAS-004 Flashcards
// Domains: 1=Security Architecture, 2=Security Operations,
//          3=Security Engineering and Cryptography, 4=Governance, Risk, and Compliance

export const flashcards = [
  // ─── DOMAIN 1: SECURITY ARCHITECTURE ─────────────────────────────────────

  {
    id: 'casp-fc-001',
    domain: 1,
    term: 'Zero trust',
    definition:
      'Trust is never granted by network location. Every request is authenticated, authorized, and evaluated against identity, device posture, and context — "never trust, always verify."',
  },
  {
    id: 'casp-fc-002',
    domain: 1,
    term: 'Policy enforcement and decision points',
    definition:
      'The enforcement point intercepts the request; the decision point evaluates policy using identity, device, and context signals. Zero trust requires both, plus trustworthy inputs.',
  },
  {
    id: 'casp-fc-003',
    domain: 1,
    term: 'Microsegmentation',
    definition:
      'Segmentation at workload granularity rather than at subnet boundaries, so that reachability is explicitly granted rather than implied by network position.',
  },
  {
    id: 'casp-fc-004',
    domain: 1,
    term: 'Defense in depth',
    definition:
      'Layered independent controls so that no single failure is decisive. Layers should fail differently — duplicating the same control type adds little.',
  },
  {
    id: 'casp-fc-005',
    domain: 1,
    term: 'Threat modeling',
    definition:
      'Structured analysis of data flows and trust boundaries during design to find architectural flaws. Scanners find defects in implementations; threat modeling finds flaws in designs.',
  },
  {
    id: 'casp-fc-006',
    domain: 1,
    term: 'Bulkheads and circuit breakers',
    definition:
      'Resilience patterns that confine failures to one partition and stop cascading retries. Longer timeouts propagate failure by exhausting upstream resources.',
  },
  {
    id: 'casp-fc-007',
    domain: 1,
    term: 'Data sovereignty architecture',
    definition:
      'Constraining where data resides and replicates using region pinning and provider policy controls, validated by audit. A legal requirement addressed by design, not by networking.',
  },
  {
    id: 'casp-fc-008',
    domain: 1,
    term: 'Access broker for legacy systems',
    definition:
      'Mediating access to systems that cannot support modern authentication, so the broker enforces MFA, logging, and session control the legacy system cannot.',
  },
  {
    id: 'casp-fc-009',
    domain: 1,
    term: 'Excessive data exposure (API)',
    definition:
      'An API returning more than the caller is entitled to, with the client hiding the surplus. Only server-side filtering scoped to authorization fixes it.',
  },
  {
    id: 'casp-fc-010',
    domain: 1,
    term: 'Pseudonymization vs. anonymization',
    definition:
      'Pseudonymization replaces identifiers but permits re-identification through separately held data. Anonymization is irreversible and therefore falls outside most privacy regimes.',
  },
  {
    id: 'casp-fc-011',
    domain: 1,
    term: 'Federation token hygiene',
    definition:
      'Short token lifetimes, protected signing keys, audience restriction, and working revocation. Long-lived tokens turn an identity provider compromise into indefinite access.',
  },
  {
    id: 'casp-fc-012',
    domain: 1,
    term: 'Architectural trade-off responsibility',
    definition:
      'The architect quantifies security against availability, cost, and usability, and presents options. The accountable business owner makes the decision, which is then documented.',
  },

  // ─── DOMAIN 2: SECURITY OPERATIONS ───────────────────────────────────────

  {
    id: 'casp-fc-013',
    domain: 2,
    term: 'Detection coverage mapping',
    definition:
      'Assessing which adversary techniques relevant to your threat profile have detections. Directs engineering effort at gaps rather than spreading it thinly across everything.',
  },
  {
    id: 'casp-fc-014',
    domain: 2,
    term: 'Incident commander authority',
    definition:
      'Pre-delegated authority to take containment actions with business impact. Negotiating that authority during an incident costs exactly the time that determines its scope.',
  },
  {
    id: 'casp-fc-015',
    domain: 2,
    term: 'Coordinated eradication',
    definition:
      'For an established intrusion, scope fully and remediate everything at once. Piecemeal cleanup alerts the adversary and drives them to quieter persistence.',
  },
  {
    id: 'casp-fc-016',
    domain: 2,
    term: 'Cloud forensics constraints',
    definition:
      'Evidence depends on provider-held telemetry with fixed retention and defined legal access processes. Physical acquisition is impossible in multi-tenant infrastructure.',
  },
  {
    id: 'casp-fc-017',
    domain: 2,
    term: 'Automated containment risk',
    definition:
      'Automation amplifies detection quality into availability outcomes. Requires high-confidence detections, blast-radius limits, and fast rollback before deployment.',
  },
  {
    id: 'casp-fc-018',
    domain: 2,
    term: 'Risk-based patching',
    definition:
      'Prioritizing by exposure, exploitability, and asset criticality rather than by score alone, with compensating controls and an owned roadmap for what cannot be patched.',
  },
  {
    id: 'casp-fc-019',
    domain: 2,
    term: 'Telemetry retention',
    definition:
      'Hunting and investigation are bounded by how far back the data goes. Dwell times measured in months make short retention a hard limit on what can be discovered.',
  },
  {
    id: 'casp-fc-020',
    domain: 2,
    term: 'SBOM at enterprise scale',
    definition:
      'Maintained component inventories across the portfolio, turning "are we affected?" into a query. Without them, identifying exposure takes the weeks attackers exploit.',
  },
  {
    id: 'casp-fc-021',
    domain: 2,
    term: 'Meaningful operational metrics',
    definition:
      'Declining MTTD with maintained detection coverage indicates real improvement. Alert volumes, blocked connections, and tool counts measure noise and spending.',
  },
  {
    id: 'casp-fc-022',
    domain: 2,
    term: 'Insider threat controls',
    definition:
      'Least privilege plus separation of duties limits what one person can do alone; tamper-resistant logging ensures actions are recorded where they cannot be altered.',
  },
  {
    id: 'casp-fc-023',
    domain: 2,
    term: 'Identity-first recovery',
    definition:
      'After a destructive event, restore a trusted identity foundation before dependent services. Rebuilding onto a compromised directory reconstitutes the compromise.',
  },
  {
    id: 'casp-fc-024',
    domain: 2,
    term: 'Deconfliction',
    definition:
      'A channel distinguishing authorized testing from genuine attacks, preventing wasted incident response and ensuring real intrusions are not dismissed as testing.',
  },

  // ─── DOMAIN 3: SECURITY ENGINEERING AND CRYPTOGRAPHY ─────────────────────

  {
    id: 'casp-fc-025',
    domain: 3,
    term: 'Key scoping and rotation',
    definition:
      'Narrowly scoped keys confine the blast radius of a compromise; defined rotation with re-encryption capability limits exposure duration. One shared master key makes any compromise total.',
  },
  {
    id: 'casp-fc-026',
    domain: 3,
    term: 'Digital signature vs. MAC',
    definition:
      'A MAC uses a shared secret, so either party could have produced it — no non-repudiation. An asymmetric signature could only come from the private key holder.',
  },
  {
    id: 'casp-fc-027',
    domain: 3,
    term: 'Forward secrecy',
    definition:
      'Ephemeral key exchange means session keys cannot be derived from the long-term private key, so previously captured traffic stays protected if that key is later compromised.',
  },
  {
    id: 'casp-fc-028',
    domain: 3,
    term: 'Offline root CA',
    definition:
      'Keeping the root offline with tiered issuing CAs means a compromised issuer can be revoked and replaced without rebuilding every trust relationship.',
  },
  {
    id: 'casp-fc-029',
    domain: 3,
    term: 'Certificate revocation',
    definition:
      'CRLs and OCSP invalidate certificates before expiry. Revocation that is not checked provides no protection, which is why stapling and short lifetimes are preferred.',
  },
  {
    id: 'casp-fc-030',
    domain: 3,
    term: 'Cryptographic agility',
    definition:
      'Designing so algorithms can be replaced without re-engineering. Algorithm lifetimes are shorter than system lifetimes, making agility an architectural requirement.',
  },
  {
    id: 'casp-fc-031',
    domain: 3,
    term: 'Harvest now, decrypt later',
    definition:
      'Capturing encrypted traffic today to decrypt once capability exists. Makes post-quantum planning urgent for data with long confidentiality requirements.',
  },
  {
    id: 'casp-fc-032',
    domain: 3,
    term: 'HSM',
    definition:
      'Tamper-resistant hardware that generates and uses keys internally so they never exist in exportable form. Defeats host compromise that would otherwise yield the key.',
  },
  {
    id: 'casp-fc-033',
    domain: 3,
    term: 'TPM and measured boot',
    definition:
      'Hashes of each boot component are recorded into platform registers, enabling remote attestation of integrity. Detects tampering rather than preventing execution.',
  },
  {
    id: 'casp-fc-034',
    domain: 3,
    term: 'Secrets management',
    definition:
      'Runtime retrieval from a dedicated encrypted service with rotation and audit, enforced by automated pre-commit and pipeline scanning. Policy alone does not prevent leaks.',
  },
  {
    id: 'casp-fc-035',
    domain: 3,
    term: 'SAST / DAST / SCA / IAST',
    definition:
      'SAST analyzes source. DAST probes the running application. SCA covers third-party dependencies — where much modern attack surface lives. IAST instruments during testing.',
  },
  {
    id: 'casp-fc-036',
    domain: 3,
    term: 'Secure by design',
    definition:
      'Security requirements defined with functional requirements, threat modeling during design, and security gates in the pipeline — rather than assessment after the fact.',
  },
  {
    id: 'casp-fc-037',
    domain: 3,
    term: 'Confidential computing',
    definition:
      'Protecting data in use via hardware-enforced trusted execution environments, closing the gap left by encryption at rest and in transit.',
  },

  // ─── DOMAIN 4: GOVERNANCE, RISK, AND COMPLIANCE ──────────────────────────

  {
    id: 'casp-fc-038',
    domain: 4,
    term: 'Inherent vs. residual risk',
    definition:
      'Inherent risk exists before controls; residual risk remains after them. Residual risk requires formal acceptance by an owner with authority to accept it.',
  },
  {
    id: 'casp-fc-039',
    domain: 4,
    term: 'Risk treatment options',
    definition:
      'Avoid (stop the activity), Mitigate (reduce likelihood or impact), Transfer (insurance or contract), Accept (document and own it). Transfer moves cost, not consequence.',
  },
  {
    id: 'casp-fc-040',
    domain: 4,
    term: 'Quantitative risk terms',
    definition:
      'SLE = asset value × exposure factor. ALE = SLE × annual rate of occurrence. Expressing risk financially allows control spend to be compared against loss reduction.',
  },
  {
    id: 'casp-fc-041',
    domain: 4,
    term: 'Risk appetite vs. tolerance',
    definition:
      'Appetite is how much risk the organization is willing to take pursuing objectives. Tolerance is the acceptable variation around that level for a specific risk.',
  },
  {
    id: 'casp-fc-042',
    domain: 4,
    term: 'Third-party assurance',
    definition:
      'Independent audit reports outweigh self-assessment questionnaires — but the scope and exclusions must be validated. A report on a different service proves nothing.',
  },
  {
    id: 'casp-fc-043',
    domain: 4,
    term: 'Contractual security provisions',
    definition:
      'Breach notification timelines, audit rights, subcontractor restrictions, data handling and return, and defined responsibilities. Established before an incident or not at all.',
  },
  {
    id: 'casp-fc-044',
    domain: 4,
    term: 'Fourth-party risk',
    definition:
      'Exposure through your vendors’ own suppliers. Concentration risk emerges when many vendors depend on the same underlying provider.',
  },
  {
    id: 'casp-fc-045',
    domain: 4,
    term: 'Compliance vs. security',
    definition:
      'Compliance is a minimum baseline generalized across many organizations. A compliant organization can remain inadequately protected against the threats specific to it.',
  },
  {
    id: 'casp-fc-046',
    domain: 4,
    term: 'Privacy principles',
    definition:
      'Data minimization (collect only what is needed), purpose limitation (use only as disclosed), storage limitation, accuracy, and accountability for demonstrating compliance.',
  },
  {
    id: 'casp-fc-047',
    domain: 4,
    term: 'Policy hierarchy',
    definition:
      'Policy states intent. Standards are mandatory and measurable. Procedures give step-by-step instructions. Guidelines are recommended, discretionary practice.',
  },
  {
    id: 'casp-fc-048',
    domain: 4,
    term: 'Business impact analysis',
    definition:
      'Identifies critical processes, how quickly their loss becomes damaging, and their dependencies. Provides the basis for defensible RTO and RPO targets.',
  },
  {
    id: 'casp-fc-049',
    domain: 4,
    term: 'Executive sponsorship',
    definition:
      'Enterprise security requires change across business units a security team cannot mandate. Without sponsorship and clear accountability, sound initiatives stall.',
  },
  {
    id: 'casp-fc-050',
    domain: 4,
    term: 'Security exception process',
    definition:
      'A defined route for documented, time-bounded, owned deviations from standards with compensating controls. Without one, exceptions happen anyway — silently and unmanaged.',
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
