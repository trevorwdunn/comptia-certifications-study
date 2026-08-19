// CySA+ CS0-003 Study Guide
// Guides covering all 4 exam domains

export const studyGuide = [
  {
    id: 'cysa-sg1',
    domain: 1,
    title: 'Security Operations',
    summary:
      'The largest domain at 33%: reading logs and network telemetry like an analyst, applying threat intelligence, tuning detections, and knowing which data source answers which question.',
    topics: [
      {
        id: 'cysa-sg1-1',
        title: 'Log & Endpoint Analysis',
        content: `Every investigation starts with choosing the right data source.

| Question | Source |
|----------|--------|
| Which process made this connection? | EDR / Sysmon |
| Who authenticated, from where, and did it succeed? | Authentication logs, domain controller |
| What was requested from this web app? | Web server / WAF logs |
| Which domain did the host resolve? | DNS logs |
| Who changed cloud permissions? | Cloud control plane audit logs |
| What crossed the perimeter? | Firewall / proxy logs |

**Authentication patterns worth recognizing**

| Pattern | Interpretation |
|---------|----------------|
| Many usernames, few passwords each, one source | **Password spraying** |
| One username, many passwords | **Brute force** |
| Valid credentials from unusual geography | **Credential stuffing** or compromise |
| Service account logging on interactively | **Lateral movement** |
| Logon at an hour the user never works | Worth correlating with other signals |

**Key exam points:**
- **Spraying is wide and shallow; brute force is narrow and deep**
- **Firewall logs show connections, not the process behind them** — that requires endpoint telemetry
- **Service accounts should be boringly predictable**; deviation is a strong signal`,
      },
      {
        id: 'cysa-sg1-2',
        title: 'Network Traffic & Beaconing',
        content: `**Beaconing** is the clearest network signal of an active compromise. Look for **regularity** rather than content:
- Consistent intervals, sometimes with small random jitter
- Small, similarly sized payloads
- A destination with little or no other organizational traffic
- Continuing outside working hours when user activity has stopped

**Channels attackers favor**
- **DNS** — rarely blocked, often under-inspected. Long random subdomains and high query volume to one domain suggest **tunneling**
- **HTTPS** — encrypted, blends with normal browsing; analyze metadata such as certificate details and JA3-style fingerprints
- **Legitimate cloud services** — traffic to a well-known SaaS domain looks unremarkable

**Exfiltration signals**
- Outbound volume far exceeding the inbound norm for that host
- Large transfers at unusual hours
- Data moving to a destination the organization has never used before

**Key exam points:**
- **Regular intervals with low variance = beaconing**, regardless of the protocol
- **DNS tunneling shows as unusual query volume and long encoded labels**
- Encryption hides content but **never hides metadata** — timing, volume, and destination remain`,
      },
      {
        id: 'cysa-sg1-3',
        title: 'Threat Intelligence & Frameworks',
        content: `**IoCs vs. TTPs**
- **Indicators of compromise** — hashes, IPs, domains, filenames. Precise but disposable; an attacker rotates them in minutes
- **TTPs** — tactics, techniques, and procedures describing *behavior*. Expensive for an adversary to change, so detections built on them last

The **Pyramid of Pain** formalizes this: detecting a hash barely inconveniences an attacker; detecting a technique forces them to retool.

**Frameworks**

| Framework | Purpose |
|-----------|---------|
| MITRE ATT&CK | Catalog of observed tactics and techniques; map detection coverage |
| Cyber Kill Chain | Linear attack progression; break any link to disrupt |
| Diamond Model | Adversary, capability, infrastructure, victim — pivot between them |

**Intelligence quality** depends on **relevance** (does this adversary target our sector?), **timeliness**, and **accuracy**. A feed of stale indicators generates noise, not protection.

**Key exam points:**
- **TTP-based detection survives infrastructure rotation; IoC-based detection does not**
- **ATT&CK is for mapping coverage and finding blind spots**
- Intelligence must be **actionable and relevant**, or it is just more data`,
      },
      {
        id: 'cysa-sg1-4',
        title: 'Detection Engineering, SIEM & Automation',
        content: `**Correlation is the value of a SIEM.** A failed logon, a new service installation, and an outbound connection are each unremarkable in isolation; joined across sources and time they describe an intrusion.

**Tuning** is continuous work, not a one-off:
- Exclude known-good activity precisely rather than broadly
- Narrow scope to the assets where the behavior is genuinely abnormal
- Add context — asset criticality, user role — so severity reflects real risk
- Measure the false-positive rate per rule and fix the worst offenders

**Untuned rules cause alert fatigue**, and fatigued analysts miss real detections. That is the failure mode, not merely wasted time.

**Automation (SOAR)**

| Automate | Keep human |
|----------|-----------|
| Alert enrichment (reputation, asset owner, history) | Deciding whether to declare an incident |
| Deduplication and grouping | Business impact judgment |
| Routine containment on high-confidence detections | Regulatory notification decisions |
| Ticket creation and evidence collection | Approving emergency changes |

**Threat hunting** assumes existing detections have gaps and searches proactively on a hypothesis. **Every confirmed hunt finding should become a detection rule** — otherwise the same gap is hunted repeatedly.

**Key exam points:**
- **Tune noisy rules; do not delete them and do not ignore them**
- **Automate the deterministic, keep judgment with people**
- **Hunting output feeds detection engineering** — that loop is the point`,
      },
    ],
  },

  {
    id: 'cysa-sg2',
    domain: 2,
    title: 'Vulnerability Management',
    summary:
      'Scanning accurately, interpreting CVSS without mistaking it for risk, prioritizing by real-world exposure and exploitation, and handling what cannot be patched.',
    topics: [
      {
        id: 'cysa-sg2-1',
        title: 'Scanning Approaches',
        content: `| Approach | Strengths | Limitations |
|----------|-----------|-------------|
| Credentialed | Reads actual patch levels and configuration; far fewer false results | Requires managed credentials |
| Uncredentialed | No credentials needed; shows the attacker's external view | Infers from banners; more false positives and negatives |
| Agent-based | Continuous, covers roaming and offline hosts | Requires deployment and maintenance |
| Network-based | No install required | Misses anything powered off or off-network at scan time |

**Scan planning**
- **Timing and intensity** — aggressive scans can destabilize fragile systems, especially OT and legacy devices
- **Authorization** — scanning without approval causes incidents of its own
- **Scope** — driven by the asset inventory, which is why inventory accuracy is foundational
- **Segmented networks** may need scanners positioned inside each segment

**Key exam points:**
- **Credentialed scanning is the accuracy answer** whenever the question mentions false positives
- **Unknown assets are never scanned and never remediated** — inventory is the base layer
- Treat **OT and medical devices** with particular care; a scan can take them offline`,
      },
      {
        id: 'cysa-sg2-2',
        title: 'CVSS & Prioritization',
        content: `**CVSS base metrics**

| Metric | Captures |
|--------|----------|
| Attack Vector | Network / Adjacent / Local / Physical |
| Attack Complexity | How much has to go right for the attacker |
| Privileges Required | None / Low / High |
| User Interaction | Whether a victim must do something |
| Scope | Whether impact crosses a security boundary |
| C / I / A impacts | Confidentiality, Integrity, Availability |

**CVSS measures severity, not risk.** It knows nothing about your environment.

**What turns severity into priority**
- **Exposure** — internet-facing or buried behind three segmentation layers?
- **Asset criticality** — a lab VM or the payment system?
- **Exploit availability** — is there working public exploit code?
- **Active exploitation** — is it in a known-exploited catalog right now?
- **Compensating controls** — does a WAF rule or segmentation already blunt it?

A CVSS 7.5 that is internet-facing and actively exploited outranks an unreachable 9.8 every time.

**Key exam points:**
- **Two identical scores can carry completely different risk** — context decides
- **Active exploitation is the strongest near-term signal**
- **Attack Vector: Network** is what makes something remotely exploitable`,
      },
      {
        id: 'cysa-sg2-3',
        title: 'Validation & Common Vulnerability Classes',
        content: `**Always validate before remediating at scale.** Scanner findings are evidence, not verdicts.

**Backported patches** are the classic false positive: vendors fix a flaw without changing the version string, so version-matching scanners keep flagging patched systems. Confirm against the package changelog rather than the version alone.

**Vulnerability classes worth recognizing on sight**

| Class | Signature | Mitigation |
|-------|-----------|------------|
| SQL injection | Input concatenated into queries | Parameterized queries |
| XSS | Unencoded output reflected to users | Output encoding, CSP |
| SSRF | Server fetches a user-supplied URL | Destination allowlist, block link-local |
| Directory traversal | ../ sequences in a path | Canonicalize and validate paths |
| Insecure deserialization | Untrusted serialized objects | Do not deserialize untrusted input |
| XXE | XML with external entity references | Disable external entity resolution |

**Testing types:** **SAST** (source, static), **DAST** (running app, black box), **SCA** (third-party dependencies), **IAST** (instrumented during testing).

**Key exam points:**
- **Validate before escalating** — false positives destroy credibility with system owners
- **SSRF frequently targets cloud metadata endpoints** to steal instance credentials
- **SCA is what finds the vulnerable library** your own code never wrote`,
      },
      {
        id: 'cysa-sg2-4',
        title: 'Remediation & Risk Handling',
        content: `**When patching is possible:** test, schedule, apply, and verify by rescanning. Verification matters — a "completed" patch task with an unchanged scan result is not remediation.

**When patching is not possible** — a legacy application, a vendor-locked appliance, a system whose downtime is unacceptable:

1. Apply **compensating controls**
   - Segment the system so it is reachable only from where it must be
   - Add WAF or IPS rules targeting the specific vulnerability
   - Tighten access to the minimum set of accounts
   - Increase monitoring on that asset specifically
2. **Document the residual risk** with justification, an accountable owner, and a review date
3. **Revisit on schedule** — accepted risk is a decision with an expiry, not a permanent exemption

**Supply chain**
- An **SBOM** turns "are we affected by this new CVE?" into a query instead of a multi-week hunt
- Dependencies need the same patch discipline as operating systems

**Key exam points:**
- **Cannot patch → compensating controls plus documented acceptance**, never silent omission
- **Risk acceptance requires an owner and a review date** to be meaningful
- **Verify remediation by rescanning**; a closed ticket proves nothing on its own`,
      },
    ],
  },

  {
    id: 'cysa-sg3',
    domain: 3,
    title: 'Incident Response & Management',
    summary:
      'The response lifecycle, containment that preserves evidence, forensic handling that holds up under scrutiny, and post-incident work that actually prevents recurrence.',
    topics: [
      {
        id: 'cysa-sg3-1',
        title: 'The Response Lifecycle',
        content: `**1. Preparation** — everything done before an incident: playbooks, tooling, contact lists, training, retainer agreements, and pre-granted authority to isolate systems. It determines how well every later phase goes.

**2. Detection and Analysis** — confirm the incident is real, establish scope, classify severity, and begin the timeline.

**3. Containment, Eradication and Recovery**
- **Containment** — stop the spread. Short-term isolation first, then a longer-term strategy
- **Eradication** — remove the cause: malware, persistence mechanisms, attacker accounts
- **Recovery** — restore service, but only after confirming the entry point is closed, then monitor closely

**4. Post-incident Activity** — root cause analysis, lessons learned, control improvements, detection updates.

**Severity is set by business impact** — data sensitivity, operational disruption, regulatory exposure — not by alert volume or the notoriety of the malware.

**Key exam points:**
- **Preparation is a phase**, and the one that decides the outcome of the rest
- **Containment precedes eradication** — stop the bleeding before cleaning up
- **Do not restore before closing the initial access vector**, or reinfection is immediate`,
      },
      {
        id: 'cysa-sg3-2',
        title: 'Containment Decisions',
        content: `The recurring exam scenario: a host is compromised — what do you do first?

**Isolate the host from the network while leaving it powered on.**

- **Isolation** stops attacker interaction and lateral movement
- **Leaving it running** preserves RAM: running processes, network connections, injected code, decrypted data, and frequently encryption keys
- **Powering off destroys all volatile evidence** and may trigger anti-forensic or destructive routines
- **Reimaging immediately** destroys the evidence needed to determine scope — including whether other systems are affected

**Containment approaches**
- **Network isolation** — VLAN quarantine, switch port shutdown, EDR network containment
- **Account disablement** — for compromised credentials, though this alerts the attacker
- **Blocking C2** — at the perimeter, useful but easily circumvented with new infrastructure

**Ransomware in progress** is the exception in urgency, not in principle: stop propagation immediately, because every minute expands the scope.

**Key exam points:**
- **Isolate, do not power off** — the single most tested response decision
- **Disabling accounts tips off the attacker**; sequence it with the rest of your containment
- Containment sometimes has business cost — that trade-off belongs to management, decided in advance where possible`,
      },
      {
        id: 'cysa-sg3-3',
        title: 'Digital Forensics',
        content: `**Order of volatility** — collect the most transient first:

1. CPU registers and cache
2. **RAM** — running processes, connections, keys
3. Network state and running sessions
4. Disk
5. Remote logs and backups
6. Physical and printed material

**Sound handling**
- Acquire a **bit-for-bit image**; work only from a copy
- **Hash at acquisition** and again later; matching hashes prove nothing changed
- Use a **write blocker** on original media
- Maintain **chain of custody**: who held the evidence, when, and why — a gap lets its integrity be challenged

**Common artifacts**

| Source | Reveals |
|--------|---------|
| Memory image | Injected code, live connections, keys, unpacked malware |
| Disk image | Files, deleted data, timestamps, persistence entries |
| Registry / autoruns | Persistence mechanisms |
| Browser history and cache | Delivery route |
| Logs | Timeline and lateral movement |

**Key exam points:**
- **RAM before disk**, always
- **Hashing proves integrity; chain of custody proves handling** — you need both
- Analyze the **working copy**, never the original`,
      },
      {
        id: 'cysa-sg3-4',
        title: 'Recovery & Post-incident Activity',
        content: `**Recovery checklist**
- Confirm the **initial access vector is closed** — patched, reconfigured, or blocked
- Rebuild from **known-good media** rather than cleaning in place where compromise was deep
- **Rotate credentials** that may have been exposed, including service accounts and keys
- Restore data from a backup **predating the compromise**
- **Monitor intensively** afterward; attackers routinely attempt to return

**Post-incident review** is where the value is realized:
- What happened, in a clear timeline
- **Root cause** — the control failure, not the individual. A phishing email is a trigger; missing MFA and unrestricted macros are the causes
- What worked and what did not, honestly
- Concrete actions with owners and dates
- New detections written from what was learned

Reviews must be **blameless**. If people fear consequences, they withhold information, and withheld information guarantees a repeat.

**Key exam points:**
- **Rotate credentials** — attackers harvest them long before they are detected
- **Restore from a backup that predates compromise**, or you restore the compromise
- **Root cause is a control failure**; naming a person fixes nothing`,
      },
    ],
  },

  {
    id: 'cysa-sg4',
    domain: 4,
    title: 'Reporting & Communication',
    summary:
      'Writing for the audience you actually have, choosing metrics that describe effectiveness rather than activity, and handling risk acceptance and breach notification properly.',
    topics: [
      {
        id: 'cysa-sg4-1',
        title: 'Audience & Message',
        content: `The same incident requires different documents.

| Audience | Wants | Avoid |
|----------|-------|-------|
| Executives / board | Business impact, status, decisions needed, timeline, cost | Packet captures, tool syntax |
| System owners | Which of their systems, what to do, by when | Undifferentiated raw exports |
| Technical peers | Indicators, TTPs, detection logic, artifacts | Over-summarized narrative |
| Legal / compliance | Data types involved, scope, notification obligations | Speculation about attribution |

**Writing rules that hold across audiences**
- **Lead with impact**, not chronology
- **Separate confirmed fact from assessment** — say which is which
- **Quantify where possible**: 400 records, not "several"
- **State what is still unknown**; silence reads as certainty
- Avoid speculative **attribution** — it is rarely defensible and frequently wrong

**Key exam points:**
- **Executive summaries carry impact and decisions**, not technical artifacts
- **Do not overstate certainty early** — early scope estimates are usually wrong
- Attribution is an intelligence conclusion, not an incident response deliverable`,
      },
      {
        id: 'cysa-sg4-2',
        title: 'Metrics That Mean Something',
        content: `| Metric | Measures | Why it matters |
|--------|----------|----------------|
| **MTTD** | Time from compromise to detection | The window the attacker operates freely |
| **MTTR** | Time from detection to containment or resolution | Response effectiveness |
| Detection coverage | Share of relevant ATT&CK techniques with detections | Where the blind spots are |
| False positive rate per rule | Detection quality | Predicts analyst fatigue |
| Remediation SLA compliance | Vulnerabilities fixed within agreed windows | Process health |
| Recurring finding rate | Same issues returning | Whether root causes are actually fixed |

**Vanity metrics to distrust**
- Alerts closed — rewards volume over accuracy
- Attacks blocked — mostly counts internet background noise
- Total vulnerability count — meaningless without severity and exposure

**Key exam points:**
- **MTTD is the dwell-time metric**; reducing it limits damage more than anything else
- **Counting alerts closed measures activity, not effectiveness**
- **Recurring findings indicate root causes were never addressed**`,
      },
      {
        id: 'cysa-sg4-3',
        title: 'Vulnerability Reporting & Collaboration',
        content: `Findings only matter if someone acts on them.

**Effective reporting is**
- **Prioritized** — by real risk, not raw CVSS ordering
- **Actionable** — a specific fix, not "upgrade the component"
- **Owned** — assigned to a named team or person
- **Time-bound** — against an agreed SLA
- **Tracked** — with verification by rescan, not by ticket closure

**Remediation SLAs by severity**, agreed in advance, replace per-finding argument with a shared standard:

| Severity | Typical target |
|----------|----------------|
| Critical | 7 days or less |
| High | 30 days |
| Medium | 90 days |
| Low | Next maintenance cycle |

**Working with system owners**
- Give **advance notice of scans**, and share results before escalating
- Explain **why** a finding matters in terms of their system, not in generic language
- Offer help with the fix rather than only reporting the problem
- Escalate on **pattern and age**, not on the first missed date

**Key exam points:**
- **Dumping a raw scanner export produces no remediation** — that is the classic failure
- **Pre-agreed SLAs remove negotiation** from every individual finding
- **Verify by rescanning**; a closed ticket is a claim, not evidence`,
      },
      {
        id: 'cysa-sg4-4',
        title: 'Risk Acceptance, Escalation & Notification',
        content: `**Risk acceptance** is legitimate when it is explicit. It requires:
- Documented **justification**
- An **accountable owner** with authority to accept it
- The **residual risk** stated plainly
- Any **compensating controls** listed
- A **review date** — acceptance expires and is reconsidered

Undocumented acceptance is not acceptance; it is an ignored finding with no owner.

**Escalation** should be triggered by defined thresholds — severity, age, or asset criticality — rather than by personality or persistence. Predefined criteria make escalation routine rather than adversarial.

**Breach notification**
- Regulatory regimes impose **hard deadlines** (GDPR's 72 hours being the common example)
- **Legal counsel coordinates** timing, content, and audience
- Notify based on **established scope**; premature public statements that later change cause lasting damage
- Preserve evidence — destroying systems to "stop the loss" eliminates the ability to determine what was taken

**Key exam points:**
- **Accepted risk needs an owner and an expiry date**
- **Legal leads notification decisions**, security supplies the facts
- **Never destroy evidence to contain** — isolation achieves containment without that cost`,
      },
    ],
  },
];
