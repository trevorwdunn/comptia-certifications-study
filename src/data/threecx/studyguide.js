// 3CX Self-Hosted (v20) Study Guide
// Guides covering all 5 topic areas, including a full deployment runbook.

export const studyGuide = [
  {
    id: 'threecx-sg1',
    domain: 1,
    title: 'Architecture & Planning',
    summary:
      'What self-hosting actually commits you to, how to size the server, the network prerequisites that decide whether the deployment goes smoothly, and the discovery you need from the client before touching anything.',
    topics: [
      {
        id: 'threecx-sg1-1',
        title: 'What Self-Hosting Means',
        content: `3CX offers the same software across deployment models. The difference is who owns the layers beneath it.

| Layer | Self-hosted (on-prem) | 3CX Hosted |
|-------|----------------------|------------|
| Hardware | **You / the client** | 3CX |
| Debian OS and patching | **You** | 3CX |
| Network, firewall, NAT | **You** | Mostly 3CX |
| Backups | **You** | Managed |
| 3CX application updates | **You** (scheduled) | Managed |
| Data location | **Client premises** | Provider datacenter |

**Why clients choose on-prem**
- Data and recordings stay on their premises
- Direct control over the network path to local phones
- Existing hardware, or a preference for capex over recurring hosting
- Integration with on-site systems (door entry, paging, legacy gear)

**What you are signing up for.** Say this to the client explicitly during scoping: self-hosting means **someone must patch Debian, monitor the box, and hold the backups**. That is the real cost difference, and it is better raised at proposal time than discovered six months later.

**Key points:**
- Self-hosting is an **operations commitment**, not just an install
- **The OS is yours** — 3CX does not patch Debian for you
- Get agreement on **who maintains it** before the deployment, in writing`,
      },
      {
        id: 'threecx-sg1-2',
        title: 'Server Sizing & OS',
        content: `**Operating system:** Debian 12 (Bookworm), 64-bit, on a **dedicated** machine.

3CX installs and manages **its own Nginx reverse proxy and PostgreSQL instance**. Sharing the host with another web application causes port 443 conflicts, database collisions, and configuration that gets overwritten on update. Do not co-locate it with anything.

**Baseline resources**

| Resource | Floor | Scale up for |
|----------|-------|--------------|
| CPU | 1 dedicated core / 2 vCPU | Simultaneous calls, recording |
| RAM | 2 GB | Active Web Client sessions, larger user counts |
| Disk | Enough for OS + database | **Call recordings**, voicemail, logs |

**What actually drives load**
- **Call recording** — continuous audio mixing plus sustained disk writes. The single biggest multiplier
- **Active Web Client sessions** — 100 live browser clients are far heavier than 100 desk phones making occasional calls
- **Simultaneous calls** — the direct media load
- **Shared-CPU hosts** — if the hypervisor oversubscribes CPU, allocate at least two cores

**Storage planning.** Recording volume is easy to underestimate. Estimate it from expected recorded minutes per day and retention period, then add margin — a full disk on a PBX is an outage, not a warning.

**Key points:**
- **Debian 12, 64-bit, dedicated box** — no exceptions worth making
- **Recording and Web Client sessions drive sizing**, not extension count
- Size the **disk for recordings and retention**, not just the OS`,
      },
      {
        id: 'threecx-sg1-3',
        title: 'Network Prerequisites',
        content: `Most failed 3CX deployments are network problems, not software problems. Settle these before installing.

**Addressing**
- The PBX gets a **static private IP** on an RFC 1918 network (10.0.0.0/8, 172.16.0.0/12, or 192.168.0.0/16). Provisioned phones and trunks reference it, so DHCP is not acceptable
- A **dedicated public IP** mapped to the PBX for external services

**Why the public IP must be dedicated.** Sharing it with other services behind the same NAT causes port forwarding conflicts and inconsistent translation for SIP and RTP. The symptoms — registrations that drop, one-way audio — are painful to diagnose and trivially avoided by not sharing.

**Firewall requirements** (detailed in the Installation guide):
- SIP signaling, RTP media range, tunnel port, and HTTPS management
- **SIP ALG disabled** on the router. This "helper" rewrites SIP packets and reliably breaks things

**Other network items**
- **Voice VLAN with QoS** — separates call traffic from bulk data and simplifies troubleshooting
- **PoE budget** — confirm the switch can power every phone with headroom
- **Upstream bandwidth** — roughly 100 kbps per concurrent call with G.711 including overhead
- **FQDN and DNS** — decide the name early; it is embedded into provisioning and the TLS certificate

**Key points:**
- **Static private IP plus dedicated public IP** is a hard requirement, not a preference
- **Disable SIP ALG** on the firewall — a standard early step
- The **FQDN is expensive to change later**; choose it deliberately`,
      },
      {
        id: 'threecx-sg1-4',
        title: 'Licensing & Client Discovery',
        content: `**Licensing model.** 3CX licenses **per system, sized by simultaneous calls** — not per extension or per phone. Extensions are effectively unlimited within an edition, so sizing depends on **concurrency**, which is typically a fraction of headcount. A 40-person office rarely needs 40 simultaneous calls.

Editions differ in feature set, and **3CX restructured its licensing during 2026**. Confirm current tiers, limits, and whether the client's intended edition permits self-hosting on the live pricing page rather than relying on any written summary, including this one.

**Discovery checklist — collect before quoting**

| Item | Why it matters |
|------|----------------|
| Current phone system and carrier | Migration path, contract exit |
| **Number inventory and who controls the DIDs** | Porting is the long pole |
| Headcount vs. expected concurrent calls | License sizing |
| Sites and remote workers | SBC or tunnel requirements |
| Existing phones (make, model, firmware) | Reusable or replace |
| Internet connection and static IP availability | Feasibility |
| Existing firewall make/model | SIP ALG, port forwarding capability |
| Call recording requirement + retention | Disk sizing, legal obligations |
| Business hours, holidays, call flow | Configuration scope |
| Who maintains the server after handover | Operational reality |

**Porting drives the schedule.** It is controlled by the losing carrier and cannot be compressed. Start it early and plan the cutover around its confirmed date, not around your install date.

**Key points:**
- **Licensed by simultaneous calls, per system**
- **Verify current editions on the live pricing page** — this area changed in 2026
- **Number porting sets the timeline** for the entire project`,
      },
    ],
  },

  {
    id: 'threecx-sg2',
    domain: 2,
    title: 'Setup Guide: Installing 3CX on Debian 12',
    summary:
      'A step-by-step deployment runbook for a self-hosted v20 install — from a bare Debian 12 server through the configuration wizard, firewall rules, and post-install verification. Follow it in order.',
    topics: [
      {
        id: 'threecx-sg2-1',
        title: 'Step 1 — Prepare the Debian Server',
        content: `**Before you start, have these ready:**
- Debian 12 (Bookworm) 64-bit, minimal install, on a dedicated machine or VM
- The **static private IP**, subnet mask, gateway, and DNS servers
- The **FQDN** you will use, with DNS able to resolve it
- Root or sudo access
- Firewall admin access for the port forwarding step

**Set a static IP.** Configure it in the OS or as a DHCP reservation tied to the MAC — either is acceptable as long as the address never changes. Verify:

    ip addr
    ip route
    ping -c3 1.1.1.1

**Set the hostname and update the system:**

    hostnamectl set-hostname pbx
    apt update && apt upgrade -y

**Confirm time synchronization.** Skewed clocks break TLS validation and misorder call records:

    timedatectl

Ensure the system clock is synchronized and the timezone is correct for the client site.

**Install the few prerequisites:**

    apt install -y gnupg2 wget net-tools dphys-swapfile

**Checkpoint before continuing:** static IP confirmed, hostname set, system updated, time synchronized, internet reachable from the server.

**Key points:**
- **Dedicated machine** — nothing else may be serving web traffic on it
- The IP must be **static**; provisioning depends on it
- **Fix the clock now**, not after certificates fail`,
      },
      {
        id: 'threecx-sg2-2',
        title: 'Step 2 — Install the 3CX Package',
        content: `Add the 3CX repository signing key:

    wget -O- https://repo.3cx.com/key.pub | gpg --dearmor | tee /usr/share/keyrings/3cx-archive-keyring.gpg > /dev/null

Add the repository for Debian 12 (Bookworm):

    echo "deb [arch=amd64 by-hash=yes signed-by=/usr/share/keyrings/3cx-archive-keyring.gpg] http://repo.3cx.com/3cx bookworm main" | tee /etc/apt/sources.list.d/3cxpbx.list

Update the package index and install:

    apt update
    apt install -y 3cxpbx

The installer prepares the application and prints the URL for the **web configuration wizard**, which listens on **port 5015**:

    http://SERVER-IP:5015

**If the wizard page does not load**, reset its state and try again:

    /usr/sbin/3CXWizard --cleanup

Then browse to the port 5015 URL once more.

**Note on the repository vs. the ISO.** 3CX also publishes an ISO that installs Debian and 3CX together. The repository method above is the usual choice when you are building on existing hardware or a VM that already runs Debian — always cross-check the current commands against the official install page, since repository paths do change between releases.

**Key points:**
- Key → repository → **apt update** → install **3cxpbx**
- The wizard is on **port 5015**, reachable from your browser
- **3CXWizard --cleanup** resets a failed or partial wizard run`,
      },
      {
        id: 'threecx-sg2-3',
        title: 'Step 3 — Run the Configuration Wizard',
        content: `Open the port 5015 URL from a machine that can reach the server. The wizard walks through the decisions that shape the install.

**What it asks, and what to answer**

| Prompt | Guidance |
|--------|----------|
| License key | The client's key, or a trial for staging |
| **Public IP** | The dedicated public address mapped to this PBX |
| **FQDN** | The name decided in planning — hard to change later |
| Admin credentials | Strong and unique; store in the client's password manager |
| **Extension length** | 3 or 4 digits; 4 gives room to grow. Fixed afterward |
| Country and timezone | Drives number formatting and office hours |
| Operator extension | Where unrouted calls land |
| Mail server | Required for voicemail-to-email and welcome emails |

**Decisions that are painful to reverse:** the **FQDN** and the **extension number length**. Both propagate into provisioning and user habits. Confirm them with the client before submitting rather than after.

When the wizard finishes it provisions the system and hands you the **management console URL** — HTTPS on 443 or a custom port, commonly **5001**. Log in with the admin credentials you just set.

**Immediately after first login:**
- Confirm the version and apply any available 3CX updates
- Check the license status shows as expected
- Set the system email address and send a test email

**Key points:**
- **FQDN and extension length are effectively permanent** — confirm both first
- Management moves to **HTTPS 443/5001**; the 5015 wizard is finished
- **Test the mail path early** — voicemail-to-email silently fails without it`,
      },
      {
        id: 'threecx-sg2-4',
        title: 'Step 4 — Firewall, Ports & Verification',
        content: `**Ports to forward from the public IP to the PBX**

| Port | Protocol | Purpose |
|------|----------|---------|
| **5060** | UDP | SIP signaling |
| **5060-5061** | TCP | SIP signaling, 5061 for TLS |
| **9000-10999** | UDP | **RTP media (audio)** |
| **5090** | TCP + UDP | 3CX tunnel for remote apps and SBCs |
| **443** or **5001** | TCP | HTTPS management console and Web Client |

**RTP sizing:** each call uses a **pair** of ports, so the open range must comfortably exceed twice the expected simultaneous calls.

**Close port 5015** to the outside once the wizard is complete. It is a setup path that serves no purpose in normal operation.

**Disable SIP ALG** on the router or firewall. This feature rewrites SIP packets and is a leading cause of registration failures and one-way audio.

**Run the Firewall Checker.** 3CX includes a built-in test that validates port forwarding and NAT from outside the network. **Run it before go-live and resolve every failure** — this is the single highest-value verification step in the whole build, because it catches exactly the problems that otherwise surface as one-way audio on day one.

**Post-install verification checklist**
- Firewall Checker passes cleanly
- Management console reachable over HTTPS with a valid certificate
- A test extension registers from a desk phone or the Web Client
- **Internal call** between two extensions — audio both directions
- **Outbound call** to a mobile — audio both directions, correct caller ID
- **Inbound call** to a DID — routes to the intended destination
- Voicemail records and the email notification arrives
- Backup configured and a **test backup completed**

**Key points:**
- **RTP is 9000-10999 UDP** and needs double the ports of expected concurrent calls
- **Firewall Checker before go-live** — do not skip it
- Test **both directions of audio** on internal, outbound, and inbound calls`,
      },
    ],
  },

  {
    id: 'threecx-sg3',
    domain: 3,
    title: 'Trunks, Numbers & Call Flow',
    summary:
      'Connecting the PBX to the outside world and shaping how calls move: SIP trunk setup, inbound DID routing, outbound rules and digit manipulation, emergency calling, and the IVR/ring group/queue building blocks.',
    topics: [
      {
        id: 'threecx-sg3-1',
        title: 'SIP Trunks',
        content: `A **SIP trunk** is the connection to the carrier carrying calls to and from the PSTN.

**Two authentication models**

| Model | How it works | Requires |
|-------|--------------|----------|
| **Registration** | PBX registers with username and password | Credentials from the carrier |
| **IP authentication** | Carrier trusts the PBX public IP | **Static public IP** shared in advance |

**Information to collect from the carrier before configuring**
- SIP server / proxy hostname and port
- Registration credentials, or confirmation your IP is authorized
- Supported codecs
- Expected **outbound number format** (E.164, leading 1, or bare 10-digit)
- Whether they send DIDs in full E.164 or a shortened form
- Concurrent channel limit on the trunk

**After configuring, verify in this order**
1. Trunk shows **registered** (or the carrier confirms the IP is authorized)
2. **Outbound** test call connects with audio both directions
3. Correct **caller ID** is presented — ask the person you called what they saw
4. **Inbound** test call to a DID reaches the intended destination

**The most common trunk fault:** the trunk registers, inbound calls arrive, but nothing rings. That is not a trunk problem — it is a missing or mismatched **inbound rule**, usually because the carrier sends the number in a different format than the rule expects.

**Key points:**
- **IP authentication requires a static public IP** shared with the carrier
- **Confirm the expected number format** — it drives your digit manipulation
- **Registered but not ringing = DID routing**, not authentication`,
      },
      {
        id: 'threecx-sg3-2',
        title: 'Inbound Routing & Outbound Rules',
        content: `**Inbound (DID) rules** map a specific incoming number to a destination:
- An extension
- A ring group or queue
- A Digital Receptionist (IVR)
- Voicemail or an external number

Each DID the client owns needs a rule. Keep a **DID inventory** as part of handover documentation — the mapping of number to purpose is the thing nobody remembers a year later.

**Outbound rules** decide which trunk a call leaves by and how the number is presented. A rule matches on:
- **Number prefix** (for example, calls beginning 011 for international)
- **Number length**
- **Calling extension or group**

Then applies **digit manipulation** — stripping or prepending digits so the carrier receives the format it expects.

**Rule order matters.** Rules are evaluated top down and the first match wins. A broad rule placed above a specific one will swallow calls the specific rule was meant to handle.

**Diagnosing partial outbound failure.** When some numbers work and others fail, the cause is almost always rule matching or digit format — not the trunk, not the network. Compare a working number and a failing number against the rules and the carrier's expected format.

**Restrict international dialing by default.** Create the international rule so it only applies to the extensions or groups that genuinely need it. This is the cheapest toll fraud control available, and it costs nothing to configure at build time.

**Key points:**
- **First matching rule wins** — order broad rules below specific ones
- **Some numbers failing = digit format or rule matching**
- **Deny international by default**, grant by exception`,
      },
      {
        id: 'threecx-sg3-3',
        title: 'Emergency Calling',
        content: `Configure this deliberately, and test it. It carries legal obligations and it is the one call flow that must never be blocked by anything else.

**Requirements**
- An emergency rule that routes out **unconditionally**, regardless of other outbound restrictions or user permissions
- The presented caller ID must be tied to the **physical address** responders will be dispatched to
- **Every site** needs correct location information — a multi-site client using one trunk can send responders to the wrong building
- Remote and home workers are a genuine complication: their calls may present the office address. Discuss it with the client and document the decision

**Test it properly.** Coordinate with the client, and where your jurisdiction and carrier support a test number or a pre-arranged verification, use it rather than dialing emergency services for a live test.

**Document what was configured and verified**, including the address associated with each presented number. This belongs in the handover pack.

**Key points:**
- The emergency rule is **unconditional** — no permission check may block it
- **Caller ID must map to the dispatch address**, per site
- **Remote workers need an explicit, documented decision**`,
      },
      {
        id: 'threecx-sg3-4',
        title: 'Call Flow Building Blocks',
        content: `| Object | Behavior | Use when |
|--------|----------|----------|
| **Digital Receptionist (IVR)** | Plays a menu, routes by digit pressed | "Press 1 for sales" |
| **Ring group** | Rings a set of extensions together or in sequence, then overflows | Small team, no waiting treatment |
| **Call queue** | Holds callers with a strategy, music on hold, position, agent reporting | Callers must wait rather than be dropped |

**Office hours** define business-hours routing and a separate out-of-hours destination. **Holidays are the most commonly forgotten item in the entire build** — configure the client's holiday list during deployment, or expect a complaint on the first public holiday when callers reach a normal greeting.

**Designing the flow with the client**
1. Draw the call path on paper first — inbound number, greeting, options, destinations, and what happens when nobody answers
2. Define the **fallback for every branch**: what happens if the caller presses nothing, or nobody picks up
3. Keep menus shallow. Callers abandon deep IVR trees
4. Record prompts properly — a professional prompt is a small cost with a disproportionate effect on how the client is perceived

**Audio quality issues in call flow.** One-way audio is a **media path** fault: the call connected, so signaling worked. Look at NAT, the RTP forward, and SIP ALG rather than at credentials or routing.

**Key points:**
- **Ring group = simple broadcast; queue = managed waiting with reporting**
- **Configure holidays** during deployment
- **Every branch needs a fallback**, including "caller pressed nothing"`,
      },
    ],
  },

  {
    id: 'threecx-sg4',
    domain: 4,
    title: 'Endpoints, Clients & Users',
    summary:
      'Getting phones and people onto the system: auto-provisioning desk phones, handling remote sites with an SBC, deploying the Web Client and apps, and the user onboarding that determines how the cutover is judged.',
    topics: [
      {
        id: 'threecx-sg4-1',
        title: 'Provisioning Desk Phones',
        content: `**Auto-provisioning** has the phone pull its configuration from the PBX — extension credentials, codecs, time settings, function keys, firmware policy — instead of being configured by hand. It makes deployment repeatable and replacing a dead phone a two-minute job.

**Local provisioning workflow**
1. Phone is on the same network as the PBX and powers up
2. PBX discovers it, or you add it by MAC address
3. Assign the phone to an extension
4. Phone pulls its configuration and registers

**When phones do not appear**
- **VLAN boundaries** — discovery often relies on multicast, which does not cross subnets. A separate voice VLAN needs explicit routing or a manual provisioning URL
- **DHCP options** — some deployments use a DHCP option to point phones at the provisioning server
- **Firmware** — very old or very new firmware may behave differently than expected
- **Factory reset** — a phone previously registered to another PBX frequently needs resetting first

**Standardize firmware.** Pick a known-good version and apply it across the fleet. Mixed firmware produces inconsistent behavior and faults that cannot be reproduced.

**Physical planning**
- Confirm the switch **PoE budget** covers every phone plus headroom
- Label the patching so a phone can be traced to a port
- Have a **spare phone** on site for the cutover

**Key points:**
- **Provisioning breaks across VLANs** without explicit configuration
- **Factory reset second-hand phones** before provisioning
- **One standard firmware version** across the fleet`,
      },
      {
        id: 'threecx-sg4-2',
        title: 'Remote Workers & Multi-Site',
        content: `**A few remote users** — the desktop or mobile app connecting through the **3CX tunnel** (port 5090) is normally sufficient. The tunnel multiplexes SIP and RTP through one port, avoiding wide firewall openings at the far end.

**A branch office with several phones** — deploy a **Session Border Controller (SBC)** at that site. All local phones register through the SBC, which maintains a single connection back to the PBX.

| Approach | Best for | Trade-off |
|----------|----------|-----------|
| Apps over the tunnel | Individual remote workers | Per-device, no local hardware |
| **SBC at the site** | Branch with multiple phones | Small appliance/host to maintain |
| Direct SIP over VPN | Existing site-to-site VPN | VPN performance affects call quality |

**Why the SBC is preferred for branches:** without it, each remote phone needs its own NAT traversal path, and the far-end firewall becomes a per-device configuration problem. The SBC turns that into one tunnel.

**Mobile app considerations**
- **Push notifications** determine whether calls reach a backgrounded app — test this specifically, since a mobile app that only rings when open will be reported as broken
- Cellular-to-WiFi handover mid-call is a common source of complaints
- Set expectations: mobile call quality depends on the user's connection, which you do not control

**Key points:**
- **Tunnel for individual remote users; SBC for a branch**
- **Test mobile push notifications explicitly** before go-live
- Remote quality depends on the far-end connection — say so up front`,
      },
      {
        id: 'threecx-sg4-3',
        title: 'Users, Groups & Permissions',
        content: `**Extension setup essentials**
- Name, extension number, and email address (drives voicemail-to-email and the welcome message)
- **Strong auto-generated SIP credentials** — never patterned on the extension number
- Voicemail with a recorded greeting
- Forwarding rules for busy, no-answer, and out-of-hours

**Departments and groups** let permissions, office hours, and routing be applied to a set of users consistently. Configure policy **by role** rather than per person — it is the difference between a system that can be maintained and one that becomes an archaeology exercise.

**Delegation done correctly.** When a user must answer for a colleague, grant it through **extension rights, line appearances, and pickup permissions**. Never share SIP credentials and never duplicate an extension number across two people — both destroy accountability and produce unpredictable registration behavior.

**Common permission requirements**
- Reception seeing and picking up calls across the organization
- Managers monitoring queue activity
- Restricting who may make international calls
- Controlling who can access recordings — this is frequently a privacy obligation, not a preference

**Key points:**
- **Auto-generated unique SIP credentials** on every extension
- **Delegate with rights**, never with shared credentials
- **Recording access is a privacy control** — restrict it deliberately`,
      },
      {
        id: 'threecx-sg4-4',
        title: 'Cutover & User Onboarding',
        content: `The client will judge the deployment on **the first day users touch it**, not on the elegance of the configuration.

**Cutover planning**
- Schedule around the **confirmed port date**, not your install date
- Run the new system in parallel where possible, with test numbers before the port
- Have a **rollback position** — know how to route numbers back if something fails badly
- Be on site or immediately reachable on cutover morning
- Verify in both directions: internal, outbound, inbound, voicemail, and each IVR branch

**Onboarding that prevents tickets.** Most first-week contacts are usage questions, not faults. A **ten-minute walkthrough** plus a **one-page reference card** covering:
- Making and answering calls
- **Transferring** — blind and attended (the single most-asked question)
- Hold and pickup
- Voicemail: recording a greeting, retrieving messages
- Setting status / presence
- Using the mobile app and what to expect from it

**Handover pack.** Self-hosting means the client owns the outcome, so leave them able to act:
- Network details, static IP, FQDN
- Where admin credentials are stored
- **Trunk and DID inventory** with what each number does
- Backup location, schedule, and how to restore
- Update process and maintenance window expectations
- Who to call, and what is in scope of any support agreement

**Key points:**
- **Cutover follows the port date** — everything else bends around it
- **Ten minutes of training** prevents the majority of first-week tickets
- **Document the DID inventory** — nobody remembers it a year later`,
      },
    ],
  },

  {
    id: 'threecx-sg5',
    domain: 5,
    title: 'Security, Backup & Maintenance',
    summary:
      'Keeping a self-hosted PBX safe and running: toll fraud prevention, hardening an internet-facing SIP service, backup strategy that actually restores, update discipline, and a troubleshooting method that isolates faults quickly.',
    topics: [
      {
        id: 'threecx-sg5-1',
        title: 'Toll Fraud & SIP Hardening',
        content: `An internet-facing PBX is scanned continuously. **Toll fraud** — a compromised extension used to place expensive international calls, typically overnight or over a weekend — is the concrete financial risk, and bills can reach thousands before anyone notices.

**Controls in order of value**

| Control | Effect |
|---------|--------|
| **Deny international dialing by default** | Caps the loss even if credentials leak |
| **Strong unique SIP credentials** | Removes the most common entry path |
| **Anti-hacking thresholds / blacklisting** | Auto-blocks repeated failed authentication |
| **Allowed country / IP restrictions** | Shrinks the attack surface for single-region clients |
| Alerting on unusual call volume or cost | Catches fraud in hours rather than at invoice |
| Strong admin credentials, restricted console access | Protects the configuration itself |

**Credential hygiene is the crux.** Automated scanners find SIP passwords patterned on the extension number within hours of exposure. Use generated credentials, unique per extension, and never reuse them.

**Set the expectation with the client.** International dialing being off by default is a **deliberate design choice**, not an oversight. Explain it during handover so the first request to call abroad is a change request rather than a complaint.

**Key points:**
- **Restrict international dialing by default** — the highest-value control by far
- **Weak SIP credentials are found within hours** of internet exposure
- **Alert on unusual call volume**; fraud is normally detected by the bill otherwise`,
      },
      {
        id: 'threecx-sg5-2',
        title: 'Backup Strategy',
        content: `**A backup stored on the PBX is not a backup.** If the server fails, so does the recovery.

**A workable strategy**
- **Scheduled automated backups**, not manual ones taken before big changes
- Copies stored **off the PBX** — another host, NAS, or object storage
- **Encrypted**, since backups contain credentials and possibly call recordings
- **Retention** appropriate to the client's needs and obligations
- **A periodic test restore**, ideally to a spare VM

**What to include, and the recording problem.** Configuration, extensions, voicemail, and prompts are small. **Call recordings are not** — they dominate backup size and can push a job past its window. Decide deliberately whether recordings belong in the routine backup or in a separate archival process, and check whether retention is legally constrained.

**Before every significant change** — updates, trunk changes, major routing rework — take a manual backup **in addition to** the schedule, and confirm it completed.

**Test restores matter.** Corrupted archives, missing credentials, and undocumented steps only surface when you attempt a restore. A backup you have never restored is an assumption.

**Key points:**
- **Off-box, encrypted, scheduled** — all three
- **Recordings dominate backup size**; handle them separately if needed
- **Test the restore** — otherwise you have a hypothesis, not a backup`,
      },
      {
        id: 'threecx-sg5-3',
        title: 'Updates & Ongoing Maintenance',
        content: `**Two separate update streams**, and self-hosting means both are yours:

**1. 3CX application updates** — features and security fixes for the PBX
**2. Debian OS updates** — security patching for everything underneath

3CX does not patch Debian for you. This should have been agreed during scoping; if it was not, raise it before handover.

**Update procedure**
1. Take a **verified backup**
2. Agree a **maintenance window** — updates restart telephony services and drop active calls
3. Apply **outside business hours**
4. Verify afterward:
   - Trunks re-registered
   - A test call in each direction, with audio both ways
   - Desk phones and clients registered
   - Any integrations still functioning

**Ongoing monitoring.** The highest-value signals:
- **Trunk registration state** — a deregistered trunk means no external calls at all
- **Failed call counts** trending upward
- **Disk space** — recordings fill disks quietly, and a full disk is an outage
- Certificate expiry
- Backup job success

Alert on these rather than discovering them via a phone call from the client.

**Key points:**
- **Both 3CX and Debian need patching** — self-hosting includes the OS
- **Updates restart services** — always in an agreed window, always after a backup
- **Monitor trunk registration and disk space** above everything else`,
      },
      {
        id: 'threecx-sg5-4',
        title: 'Troubleshooting Method',
        content: `**Isolate by symptom before touching configuration.** The pattern of what works tells you where the fault is.

| Symptom | Points to |
|---------|-----------|
| Internal calls fine, **external fail** | Trunk, carrier, or firewall — the boundary |
| **Both fail** | PBX service or LAN |
| **One-way audio** | RTP / NAT / SIP ALG — media path, not signaling |
| Some outbound numbers fail | Outbound rule matching or digit format |
| Inbound arrives but nothing rings | Inbound (DID) rule |
| **Remote users only** affected | Tunnel, SBC, or far-end firewall |
| One extension only | That phone, its registration, or its permissions |

**Investigation order**
1. **What changed?** Updates, firewall edits, carrier work, certificate expiry
2. **Check trunk registration** and the PBX event log
3. **Call detail records** for the specific failing call
4. **SIP trace** when the PBX and carrier accounts disagree — it shows the exact exchange
5. **Firewall Checker** if anything suggests NAT or port forwarding

**Two shortcuts worth internalizing**
- **One-way audio is always media, never signaling.** The call connected, so SIP worked. Go straight to NAT, the RTP forward, and SIP ALG
- **Internal working and external failing puts the fault at the boundary.** Do not start rebuilding extensions

**Escalating to the carrier.** Bring the timestamp, the calling and called numbers, and ideally a SIP trace. "Calls aren't working" gets a slow response; a specific failed call with a trace gets a real one.

**Key points:**
- **Let the symptom pattern locate the fault** before changing anything
- **One-way audio = RTP/NAT/ALG**, every time
- **Escalate with timestamps, numbers, and a trace**, not with a description`,
      },
    ],
  },
];
