// CASP+ CAS-004 Study Guide
// Guides covering all 4 exam domains

export const studyGuide = [
  {
    id: 'casp-sg1',
    domain: 1,
    title: 'Security Architecture',
    summary:
      'Designing security into enterprise systems: zero trust and segmentation, resilience patterns, integrating what cannot be replaced, and making trade-offs that belong to the business rather than to the architect.',
    topics: [
      {
        id: 'casp-sg1-1',
        title: 'Zero Trust & Modern Access',
        content: `Zero trust removes **implicit trust based on network location**. Being inside the perimeter grants nothing; every request is evaluated on its own merits.

**Required components**

| Component | Role |
|-----------|------|
| Policy enforcement point | Intercepts the request |
| Policy decision point | Evaluates policy and returns allow/deny |
| Identity provider | Establishes who the subject is |
| Device posture source | Establishes whether the endpoint is trustworthy |
| Context signals | Location, time, behavior, sensitivity of the resource |

**Zero trust is not a product.** It is an architectural property that depends on the quality of its inputs — weak identity or absent device posture means the decision point has nothing meaningful to evaluate.

**Practical progression**
1. Strong identity everywhere, with phishing-resistant MFA for privileged access
2. Device inventory and posture assessment
3. Application-level access brokering, replacing broad network access
4. Microsegmentation of workloads
5. Continuous evaluation rather than authentication only at session start

**Key exam points:**
- **Network position confers no trust** — the defining principle
- **Identity and device posture are prerequisites**, not optional enhancements
- Zero trust **complements segmentation**; it does not replace it`,
      },
      {
        id: 'casp-sg1-2',
        title: 'Segmentation & Resilience',
        content: `**Segmentation** is the structural control that limits blast radius. When a question asks how to stop a compromised host reaching a sensitive environment, segmentation with **explicit deny between zones** is the answer — detective controls do not stop traffic.

**Segmentation approaches**
- **Network zones** — traditional, coarse, still valuable
- **Microsegmentation** — per-workload policy, granular
- **Host-based firewalls** — blocks workstation-to-workstation movement
- **Identity-based** — access mediated by application rather than by route

**Resilience patterns**

| Pattern | Purpose |
|---------|---------|
| Bulkhead | Confine failure to one partition |
| Circuit breaker | Stop cascading retries against a failing dependency |
| Graceful degradation | Shed non-essential functionality under load |
| Redundancy across failure domains | Survive the loss of one zone or region |
| Backpressure | Reject work rather than collapse under it |

**Longer timeouts are not resilience** — they propagate failure upstream by exhausting connection pools and threads.

**Key exam points:**
- **Segmentation prevents reachability; monitoring only observes it**
- **Circuit breakers prevent cascading failure**; timeout increases worsen it
- Redundancy only helps when it spans **independent failure domains**`,
      },
      {
        id: 'casp-sg1-3',
        title: 'Integrating Legacy & Third-Party Systems',
        content: `Enterprise architecture is largely the discipline of securing things you cannot change.

**When a system cannot support modern controls**
1. **Mediate access** through a broker that enforces MFA, session recording, and authorization the legacy system cannot
2. **Restrict reachability** so only the broker and required dependencies can reach it
3. **Increase visibility** — richer logging and specific detections for that asset
4. **Document the residual risk** with an owner and a review date
5. **Fund the replacement roadmap** — compensating controls are a bridge, not a destination

**Third-party and SaaS integration**
- **Federate identity** rather than creating separate credential stores
- Prefer **API-based integration** with scoped tokens over broad network access
- Assess **fourth-party dependencies** — the providers your provider relies on
- Establish **exit provisions** before signing: data return, format, deletion evidence

**Key exam points:**
- **Broker access to systems that cannot be fixed** — the standard architectural answer
- **Compensating controls require documented, owned residual risk**
- **Concentration risk** emerges when many vendors depend on one underlying provider`,
      },
      {
        id: 'casp-sg1-4',
        title: 'Data Architecture & Trade-offs',
        content: `**Protecting data by state**

| State | Controls |
|-------|----------|
| At rest | Disk, database, and field-level encryption; key separation |
| In transit | TLS, mutual TLS, IPsec |
| In use | Confidential computing / trusted execution environments |

**Analytics on sensitive data**
- **Pseudonymization** with the re-identification key under separate control retains analytical value while separating identity
- **Anonymization** is irreversible and therefore escapes most privacy regimes — but genuine anonymization is harder than it appears, given re-identification through combination
- **Tokenization** suits well-structured values such as payment cards

**API design considerations**
- **Excessive data exposure** — returning more than the caller is entitled to, with the client hiding the rest. Only **server-side filtering** fixes it
- Authorization enforced **per object**, never inferred from the interface
- Scoped, short-lived tokens with defined audiences

**Trade-offs are business decisions.** The architect's job is to quantify security against availability, cost, and usability, present options, and record the decision. A control that creates unacceptable availability risk on a revenue-critical system is not automatically correct because it is a security control.

**Key exam points:**
- **Confidential computing addresses data in use** — the gap left by rest and transit encryption
- **Client-side filtering is not a control**; it is a display choice
- **The accountable owner decides**; the architect informs and documents`,
      },
    ],
  },

  {
    id: 'casp-sg2',
    domain: 2,
    title: 'Security Operations',
    summary:
      'Running security at enterprise scale: detection strategy, incident command, handling long-dwell intrusions, cloud forensics, and the automation and metrics that make operations improve.',
    topics: [
      {
        id: 'casp-sg2-1',
        title: 'Detection Strategy & Threat Management',
        content: `At enterprise scale, detection is a **portfolio decision**, not a rule count.

**Coverage mapping**
- Map existing detections to adversary techniques relevant to **your** threat profile
- Identify gaps where a technique has **no telemetry**, not merely no rule — a missing data source cannot be detected around
- Prioritize techniques used by adversaries who actually target your sector
- Track coverage over time as an operational metric

**Detection quality over quantity.** A hundred noisy rules produce worse outcomes than twenty precise ones, because analyst attention is the scarce resource and fatigue causes real detections to be dismissed.

**Telemetry retention is a hard constraint.** Dwell times are frequently measured in months; retention shorter than that means the initial compromise cannot be investigated even after detection. Endpoint process and command-line history is the highest-value data to retain.

**Key exam points:**
- **Missing telemetry is a deeper gap than a missing rule**
- **Coverage mapped to a relevant threat profile** beats attempting universal coverage
- **Retention bounds investigation** — you cannot analyze what was never kept`,
      },
      {
        id: 'casp-sg2-2',
        title: 'Incident Command & Long-Dwell Intrusions',
        content: `**Authority must be pre-delegated.** A designated incident commander needs standing authority to isolate systems with business impact. Negotiating that authority mid-incident costs the time that determines final scope.

**Established intrusions require different handling from commodity malware**

| Commodity malware | Established intrusion |
|-------------------|----------------------|
| Contain immediately | **Scope first**, then coordinate |
| Remediate the host | Remediate **everything at once** |
| Standard cleanup | Full **credential rotation** |
| Close and monitor | Extended monitoring for return attempts |

Piecemeal remediation of a capable adversary alerts them and drives them into quieter persistence you have not found. **Coordinated eradication** across all identified footholds, executed together, is the goal — accepting that this means tolerating a known intrusion while scoping completes, which is a decision that requires executive awareness.

**Credential rotation after intrusion** must cover service accounts, keys, certificates, and the directory infrastructure itself — attackers harvest credentials long before detection.

**Key exam points:**
- **Scope before eradicating** an established intrusion
- **Pre-delegated containment authority** is a preparation activity
- **Rotate everything**, including service accounts and signing material`,
      },
      {
        id: 'casp-sg2-3',
        title: 'Cloud Forensics & Automation',
        content: `**Cloud forensics differs fundamentally from on-premises**
- **No physical acquisition** — the hardware is multi-tenant and inaccessible
- Evidence is **provider-held telemetry** with fixed retention windows
- Legal access follows **defined provider processes**, which take time
- **Snapshot and memory capture** must be scripted in advance; ephemeral instances disappear with their evidence
- Control plane logs are the authoritative record of **who changed what**

Preparation determines what is possible: retention settings, log export to independent storage, and pre-built acquisition automation must exist **before** the incident.

**Automation and its risk**

Automation amplifies whatever quality your detections have. A false positive that previously created a ticket now disables an account or isolates a server.

| Safe to automate | Requires human judgment |
|------------------|------------------------|
| Enrichment and correlation | Declaring a major incident |
| Deduplication and grouping | Business-impacting containment |
| Evidence collection | Regulatory notification |
| High-confidence, low-blast-radius containment | Scope and severity assessment |

Prerequisites for automated containment: **high-confidence detection, limited blast radius, fast rollback, and full audit logging**.

**Key exam points:**
- **Cloud evidence is provider-held** with retention limits — configure before you need it
- **Automation converts detection errors into outages** if blast radius is unbounded
- Ephemeral infrastructure means **capture must be automatic**`,
      },
      {
        id: 'casp-sg2-4',
        title: 'Vulnerability Management & Recovery at Scale',
        content: `**Enterprise vulnerability management is a prioritization problem**, not a patching problem. A large estate will never be fully patched; the question is whether the right things are patched first.

Defensible approach:
- Prioritize by **exposure, exploitability, and asset criticality** rather than score alone
- Apply **compensating controls** where patching is not feasible
- Maintain an **owned remediation roadmap** with dates
- Report honestly against SLAs, including where they are being missed and why

**Changing the measurement to improve the metric is not risk management** — excluding legacy systems from scanning to raise compliance percentages is the classic anti-pattern.

**Recovery sequencing after a destructive event**
1. **Trusted identity foundation first** — nearly everything depends on it, and restoring services onto a compromised directory rebuilds the compromise
2. Core infrastructure — DNS, network services, certificate authority
3. Business-critical applications in dependency order
4. Remaining services

Validate integrity **before** reconnecting to wider networks, and monitor intensively afterward.

**Key exam points:**
- **Risk-based prioritization with documented compensating controls** is the defensible answer
- **Never improve metrics by narrowing measurement**
- **Identity is restored first** — the dependency order question appears repeatedly`,
      },
    ],
  },

  {
    id: 'casp-sg3',
    domain: 3,
    title: 'Security Engineering & Cryptography',
    summary:
      'Applied cryptography and the engineering around it: key management, PKI design, agility and post-quantum planning, hardware roots of trust, and building security into the development pipeline.',
    topics: [
      {
        id: 'casp-sg3-1',
        title: 'Key Management',
        content: `**Key management, not algorithm choice, is where cryptographic deployments fail.**

**Principles**
- **Scope keys narrowly** — per environment, per data classification, per tenant. Scope determines blast radius
- **Separate keys from data** — an encrypted volume whose key sits beside it gains little
- **Rotate on a defined schedule**, and ensure re-encryption is actually possible; rotation you cannot execute is a policy, not a control
- **Control access with audit** — every key use recorded
- **Plan for compromise** — how would you revoke, rotate, and re-encrypt under time pressure?
- **Escrow and recovery** — a lost key is lost data, so custody must be deliberate

**Storage hierarchy**

| Option | Protection |
|--------|-----------|
| HSM | Keys generated and used inside tamper-resistant hardware, never exportable |
| Cloud KMS | Managed lifecycle with access control and audit |
| OS keystore | Reasonable, but exposed to host compromise |
| Configuration file | Not protection |

**Key exam points:**
- **One master key everywhere makes any compromise total**
- **An HSM means the key never exists in extractable form** — that is the whole benefit
- **Rotation requires re-encryption capability** to be meaningful`,
      },
      {
        id: 'casp-sg3-2',
        title: 'Applied Cryptography',
        content: `**Choosing the right primitive**

| Goal | Mechanism |
|------|-----------|
| Confidentiality | Symmetric encryption (AES-GCM) |
| Integrity only | Hash (SHA-2/SHA-3) |
| Integrity + authenticity (shared secret) | MAC / HMAC |
| Integrity + authenticity + **non-repudiation** | Digital signature |
| Key agreement | Diffie-Hellman, ECDH |
| Password storage | Salted slow KDF (bcrypt, scrypt, Argon2) |

**The MAC versus signature distinction is heavily tested:** a MAC proves the message came from someone holding the shared key — either party could have made it. Only an asymmetric signature provides **non-repudiation**.

**Forward secrecy** uses ephemeral key exchange so session keys cannot be derived from the long-term private key. Traffic captured today stays protected even if that key is compromised later.

**PKI design**
- **Offline root** with tiered issuing CAs, so a compromised issuer can be revoked without rebuilding all trust
- **Working revocation** — CRL or OCSP, with stapling; unchecked revocation provides nothing
- **Short certificate lifetimes** reduce reliance on revocation entirely
- **Certificate inventory** — expiry-driven outages remain remarkably common

**Key exam points:**
- **Only signatures give non-repudiation**
- **Forward secrecy protects past traffic** against future key compromise
- **Offline root plus tiered issuers** is the resilient PKI pattern`,
      },
      {
        id: 'casp-sg3-3',
        title: 'Agility, Post-Quantum & Hardware Roots of Trust',
        content: `**Cryptographic agility** is an architectural requirement because **algorithm lifetimes are shorter than system lifetimes**. Designs that abstract cryptographic choices behind an interface can migrate; those that hardcode algorithms, key sizes, and formats require expensive re-engineering under time pressure.

**Post-quantum planning** is driven by **harvest now, decrypt later**: adversaries capture encrypted traffic today and decrypt it when capability arrives. Data with long confidentiality requirements — health records, state secrets, long-lived intellectual property — is therefore at risk **now**.

Sensible current steps: inventory where and how cryptography is used, identify long-confidentiality data, prefer larger symmetric keys, and ensure the architecture can accept new algorithms without redesign.

**Hardware roots of trust**

| Technology | Provides |
|------------|----------|
| **TPM** | Platform measurement, sealed storage, attestation |
| **HSM** | Non-exportable key storage and cryptographic operations |
| **Secure enclave / TEE** | Isolated execution protecting data **in use** |
| **Secure boot** | Only signed components load |
| **Measured boot** | Records the component chain for remote attestation |

**Secure boot prevents; measured boot detects and reports.** They complement each other.

**Key exam points:**
- **Harvest-now-decrypt-later makes post-quantum a present concern** for long-lived data
- **Agility must be designed in** — it cannot be retrofitted cheaply
- **Secure boot blocks unsigned components; measured boot enables attestation**`,
      },
      {
        id: 'casp-sg3-4',
        title: 'Secure Development & Supply Chain',
        content: `**Security in the pipeline, not after it**

| Stage | Activity |
|-------|----------|
| Requirements | Security requirements alongside functional ones |
| Design | **Threat modeling** of data flows and trust boundaries |
| Development | Secure coding standards, peer review |
| Build | **SAST**, **SCA**, secret scanning, signed artifacts |
| Test | **DAST**, integration and abuse-case testing |
| Deploy | Configuration validation, immutable artifacts |
| Operate | Runtime monitoring, dependency watch |

**Secrets management.** Policy alone does not prevent hardcoded secrets — **automated pre-commit and pipeline scanning** does, paired with runtime retrieval from a secrets manager. A private repository is not protection: secrets persist in history and are exposed by any later access, and a secret committed once must be **rotated**, not merely deleted.

**Supply chain**
- **SCA** finds vulnerable dependencies — where much of the modern attack surface lives
- **SBOMs** answer "where do we run this component?" in minutes instead of weeks
- **Artifact signing and verification** ensures what was built is what deploys
- **Pipeline security matters** — build systems hold credentials to everything they deploy

**Key exam points:**
- **Threat modeling belongs in design**, where flaws are cheap to fix
- **A committed secret is compromised** — rotate it
- **SCA covers what your team did not write**, which SAST never examines`,
      },
    ],
  },

  {
    id: 'casp-sg4',
    domain: 4,
    title: 'Governance, Risk & Compliance',
    summary:
      'The business layer: risk treatment and quantification, third-party and supply chain assurance, the gap between compliance and security, and the governance structures that let a security program actually function.',
    topics: [
      {
        id: 'casp-sg4-1',
        title: 'Risk Management',
        content: `**Inherent risk** exists before controls. **Residual risk** is what remains after them, and it requires **formal acceptance by an owner with the authority to accept it**.

**Treatment options**

| Option | Meaning | Note |
|--------|---------|------|
| Avoid | Stop the activity | The only option that removes the risk |
| Mitigate | Reduce likelihood or impact | The most common |
| Transfer | Insurance or contractual shift | Moves financial cost, **not** consequence |
| Accept | Document and own it | Legitimate when explicit |

**Insurance does not reduce the chance of a breach**, and reputational and regulatory consequences remain with the organization regardless of who pays.

**Quantitative analysis**
- **SLE** = asset value × exposure factor
- **ALE** = SLE × annual rate of occurrence
- Comparing ALE reduction against control cost supports investment decisions in language executives use

Quantification does not remove uncertainty — inputs remain estimates — but it makes assumptions explicit and debatable, which qualitative colors do not.

**Risk appetite** is how much risk the organization will accept pursuing its objectives; **tolerance** is the acceptable variation for a specific risk.

**Key exam points:**
- **Residual risk needs a named, authorized owner**
- **Transfer moves cost, not consequence** — a recurring exam distinction
- **ALE = SLE × ARO**, and SLE = AV × EF`,
      },
      {
        id: 'casp-sg4-2',
        title: 'Third-Party & Supply Chain Risk',
        content: `**Assurance hierarchy** — strongest to weakest:
1. **Independent audit report** with validated scope
2. Right-to-audit exercised directly
3. Certification against a recognized standard
4. Completed self-assessment questionnaire
5. Vendor marketing material

**Always validate the scope of an attestation.** A report covering a different service, region, or time period tells you nothing about the system you are buying.

**Contractual provisions that matter**
- **Breach notification timelines** — specific hours, not "promptly"
- **Audit rights**
- **Subcontractor restrictions** and notification of change
- **Data handling, return, and deletion evidence**
- **Security requirements** appropriate to the data classification
- **Exit provisions** — format, timeline, proof of destruction

**Fourth-party risk** is exposure through your vendors' suppliers. **Concentration risk** appears when many vendors depend on the same underlying provider, so an apparently diversified portfolio fails together.

**Key exam points:**
- **Independent attestation beats self-assessment** — but check the scope
- **Breach obligations must be contractual**, agreed before an incident
- **Concentration risk hides inside apparent vendor diversity**`,
      },
      {
        id: 'casp-sg4-3',
        title: 'Compliance & Privacy',
        content: `**Compliance is a floor, not a ceiling.** Frameworks define minimums generalized across many organizations; a compliant organization can still be badly protected against the threats specific to it. Equally, a well-secured organization can fail an audit on documentation. **The two overlap but are not the same objective.**

**Common frameworks**

| Framework | Focus |
|-----------|-------|
| ISO 27001 | Information security management system |
| NIST CSF | Identify, Protect, Detect, Respond, Recover |
| SOC 2 | Service organization controls, attestation |
| PCI DSS | Payment card data |
| HIPAA | Protected health information |
| GDPR | EU personal data and individual rights |

**Privacy principles**
- **Data minimization** — collect only what is necessary
- **Purpose limitation** — use only for the disclosed purpose
- **Storage limitation** — retain only as long as needed
- **Accuracy**, **integrity and confidentiality**
- **Accountability** — demonstrate compliance, not merely claim it

**Individual rights** — access, correction, deletion, portability — depend entirely on **data inventory and lineage**. Deletion requests fail on forgotten copies in replicas, warehouses, exports, and backups.

**Key exam points:**
- **Compliance ≠ security**; both matter, for different reasons
- **Data minimization limits collection**; purpose limitation limits use
- **Rights fulfillment requires lineage** — you cannot delete what you cannot locate`,
      },
      {
        id: 'casp-sg4-4',
        title: 'Governance & Program Management',
        content: `**Policy hierarchy**

| Level | Nature |
|-------|--------|
| Policy | Statement of intent, approved by leadership |
| Standard | **Mandatory**, specific, measurable, auditable |
| Procedure | Step-by-step instructions |
| Guideline | **Recommended**, discretionary |

Confusing standards with guidelines is a common exam trap: **standards are mandatory and auditable; guidelines are advice.**

**What makes an enterprise program work**
- **Executive sponsorship** with defined accountability and real authority
- **A functioning exception process** — documented, time-bounded, owned, with compensating controls. Without one, exceptions still happen, just invisibly
- **Metrics that describe risk reduction**, not activity volume
- **Business impact analysis** identifying critical processes and dependencies, which is what makes RTO and RPO targets defensible rather than arbitrary
- **Regular testing** — tabletop exercises, DR tests, and control validation

**The senior practitioner's role** is to translate between technical reality and business consequence in both directions: explaining what a technical risk means in operational and financial terms, and translating business priorities into technical requirements.

**Key exam points:**
- **Standards are mandatory; guidelines are not**
- **An exception process prevents undocumented deviation**, which is the alternative
- **BIA drives RTO and RPO** — targets without it are guesses`,
      },
    ],
  },
];
