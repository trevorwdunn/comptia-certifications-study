// ITF+ FC0-U61 Study Guide
// Guides covering all 6 exam domains

export const studyGuide = [
  {
    id: 'itf-sg1',
    domain: 1,
    title: 'IT Concepts & Terminology',
    summary:
      'The vocabulary layer of the exam: how computers represent numbers and data, the units used to measure storage and speed, and the structured method CompTIA expects you to follow when something breaks.',
    topics: [
      {
        id: 'itf-sg1-1',
        title: 'Notational Systems',
        content: `Computers store everything as binary, but humans use other bases to read it more easily.

| System | Base | Digits used | Where you see it |
|--------|------|-------------|------------------|
| Binary | 2 | 0, 1 | Machine-level data, subnet masks |
| Octal | 8 | 0-7 | Linux file permissions (755) |
| Decimal | 10 | 0-9 | Everyday numbers, IPv4 octets |
| Hexadecimal | 16 | 0-9, A-F | MAC addresses, IPv6, color codes |

**Key exam points:**
- One hex digit represents exactly **4 bits**, so two hex digits make one byte
- In hex, **A=10, B=11, C=12, D=13, E=14, F=15**
- A **bit** is one binary digit; a **byte** is 8 bits and holds **256** possible values (0-255)
- Character encoding maps numbers to text: **ASCII** covers basic English, **Unicode** covers virtually every writing system`,
      },
      {
        id: 'itf-sg1-2',
        title: 'Units of Measure',
        content: `The most common exam trap in this domain is mixing up **bits** and **bytes**.

**Storage capacity — measured in bytes:**
- KB → MB → GB → TB → PB, each roughly 1,000× the last
- A photo is a few MB; a movie is a few GB; a large drive is several TB

**Throughput (speed) — measured in bits per second:**
- Kbps → Mbps → Gbps
- Home internet plans are advertised in **Mbps**, not MB

**Processing speed — measured in hertz:**
- MHz → GHz, describing CPU clock cycles per second
- A 3.2 GHz processor completes 3.2 billion cycles per second

**Remember:**
- Capital **B** = bytes (storage). Lowercase **b** = bits (speed)
- Because a byte is 8 bits, a 100 Mbps connection transfers roughly 12.5 MB per second`,
      },
      {
        id: 'itf-sg1-3',
        title: 'Data Types',
        content: `Choosing the right data type is a recurring exam theme. The question usually gives you a sample value and asks which type fits.

| Type | Holds | Example value |
|------|-------|---------------|
| Integer | Whole numbers | 42, -7 |
| Float | Numbers with decimals | 19.99, 3.14 |
| Boolean | True or false only | true |
| Char | A single character | 'A' |
| String | A sequence of characters | "Hello world" |

**Key exam points:**
- A price such as **19.99 requires a float**, never an integer
- A yes/no or on/off flag is a **Boolean**
- Numbers stored as strings cannot be used in arithmetic until converted
- Choosing an oversized type wastes storage; choosing an undersized one loses data`,
      },
      {
        id: 'itf-sg1-4',
        title: 'Troubleshooting Methodology',
        content: `CompTIA tests this exact sequence, and questions often ask what comes **next** from a given point.

1. **Identify the problem** — gather information, question the user, determine what changed, back up before making changes
2. **Establish a theory of probable cause** — question the obvious first
3. **Test the theory** — if it is confirmed, move on; if disproved, form a new theory or escalate
4. **Establish a plan of action** — consider the impact on the user and the business
5. **Implement the solution or escalate**
6. **Verify full system functionality** — and apply preventive measures where possible
7. **Document findings, actions, and outcomes**

**Key exam points:**
- Identification is always **first**; documentation is always **last**
- A **disproved theory** sends you back to step 2 — not forward to implementation
- Verification comes **before** documentation
- "What changed recently?" resolves a surprising share of real incidents`,
      },
    ],
  },

  {
    id: 'itf-sg2',
    domain: 2,
    title: 'Infrastructure',
    summary:
      'The physical and network layer: what the components inside a computer do, which cable goes in which port, and the services that make a network usable.',
    topics: [
      {
        id: 'itf-sg2-1',
        title: 'Internal Components',
        content: `**CPU (Central Processing Unit)** — executes instructions. Performance comes from clock speed (GHz), core count, and cache.

**RAM (Random Access Memory)** — fast, **volatile** working memory. Contents vanish when power is lost. Insufficient RAM forces the system to swap to disk, which is dramatically slower.

**Storage** — non-volatile, retains data without power:

| Type | Mechanism | Characteristics |
|------|-----------|-----------------|
| HDD | Spinning magnetic platters | Cheaper per GB, slower, fragile |
| SSD | Flash memory, no moving parts | Faster, quieter, shock resistant |
| Optical | Laser reads a disc | CD/DVD/Blu-ray, largely legacy |
| Flash drive | Portable flash memory | Convenient, easily lost or stolen |

**Motherboard** — connects everything and distributes power and data.
**GPU** — renders graphics and video.
**Power supply (PSU)** — converts wall AC into the DC voltages components need.

**Key exam points:**
- Slowness with many applications open usually means **not enough RAM**
- RAM is **volatile**; drives are **non-volatile**
- SSDs win on speed and durability, HDDs on cost per gigabyte`,
      },
      {
        id: 'itf-sg2-2',
        title: 'Ports, Connectors & Peripherals',
        content: `| Connector | Carries | Notes |
|-----------|---------|-------|
| RJ-45 | Ethernet networking | 8 pins, twisted pair |
| RJ-11 | Telephone / DSL | Smaller, 4-6 pins |
| USB-A | Peripherals, power | Classic rectangular plug |
| USB-C | Data, video, power | Reversible, high speed |
| HDMI | Digital video **and** audio | Standard on TVs and monitors |
| DisplayPort | Digital video and audio | Common on PC graphics cards |
| VGA | Analog video only | Legacy, blue 15-pin |
| Thunderbolt | Data, video, power | Uses the USB-C connector shape |

**Device classification:**
- **Input** — keyboard, mouse, scanner, microphone, webcam
- **Output** — monitor, printer, speakers
- **Both** — touchscreen, external drive, network card, headset with mic

**Key exam points:**
- **HDMI carries audio; VGA does not**
- **RJ-45 is network, RJ-11 is phone** — easy to confuse by size alone
- Touchscreens are the classic "both input and output" answer`,
      },
      {
        id: 'itf-sg2-3',
        title: 'Networking Essentials',
        content: `**Addressing**
- An **IP address** identifies a device logically. IPv4 looks like 192.168.1.10; IPv6 uses hexadecimal groups
- A **MAC address** is the hardware address burned into a network adapter

**Core services**
- **DHCP** hands out IP addresses, subnet masks, gateways, and DNS servers automatically
- **DNS** resolves names such as example.com to IP addresses

**Devices**
- **Switch** — connects devices inside one network using MAC addresses
- **Router** — connects different networks using IP addresses
- **Access point** — provides wireless connectivity
- **Modem** — converts between your network and the ISP's medium

**Key exam points:**
- Reaching a site by **IP but not by name** points squarely at **DNS**
- No address at all, or a self-assigned 169.254.x.x address, points at **DHCP**
- A **LAN** is local; a **WAN** spans distance — the internet is the largest WAN`,
      },
      {
        id: 'itf-sg2-4',
        title: 'Wireless & Internet Service Types',
        content: `**Wi-Fi bands**

| Band | Range | Speed | Congestion |
|------|-------|-------|------------|
| 2.4 GHz | Longest | Lowest | Crowded — microwaves, Bluetooth |
| 5 GHz | Shorter | Higher | Less crowded |
| 6 GHz (Wi-Fi 6E) | Shortest | Highest | Least crowded |

**Internet service types**

| Type | Speed | Latency | Notes |
|------|-------|---------|-------|
| Fiber | Highest | Lowest | Light over glass |
| Cable | High | Low | Shared with the neighborhood |
| DSL | Moderate | Moderate | Degrades with distance from the CO |
| Satellite | Variable | **High** | Works nearly anywhere |
| Cellular | Variable | Low-moderate | Mobile, may be data capped |

**Key exam points:**
- **2.4 GHz for range, 5 GHz for speed** — the single most tested wireless tradeoff
- **Satellite always loses on latency** because signals travel to orbit and back
- Fiber is the answer whenever a question asks for the fastest, lowest-latency option`,
      },
    ],
  },

  {
    id: 'itf-sg3',
    domain: 3,
    title: 'Applications & Software',
    summary:
      'What an operating system actually does, how files are organized and protected, the licensing models you will be asked to distinguish, and why updates matter.',
    topics: [
      {
        id: 'itf-sg3-1',
        title: 'Operating Systems',
        content: `The OS manages hardware and gives applications a consistent platform. Its responsibilities include CPU scheduling, memory management, file systems, device control through drivers, and the user interface.

| Category | Examples |
|----------|----------|
| Desktop | Windows, macOS, Linux, Chrome OS |
| Mobile | iOS, Android |
| Server | Windows Server, Linux distributions |
| Embedded | Firmware in appliances, routers, IoT devices |

**Drivers** translate OS requests into commands a specific device understands. Missing or incorrect drivers leave hardware unrecognized or only partly working.

**Key exam points:**
- The OS **manages resources and hosts applications** — it is not antivirus, not a compiler, and not a database
- **iOS is Apple's mobile OS**; Android is used by most other manufacturers
- **Firmware** is software stored on hardware itself, such as the BIOS/UEFI`,
      },
      {
        id: 'itf-sg3-2',
        title: 'File Management',
        content: `**File extensions** tell the OS which application handles a file:

| Extension | Type |
|-----------|------|
| .docx / .txt | Documents |
| .xlsx / .csv | Spreadsheets and tabular data |
| .pdf | Portable documents |
| .jpg / .png / .gif | Images |
| .mp3 / .mp4 | Audio and video |
| .zip | Compressed archive |
| .exe / .app | Executable programs |

**Paths** describe location: an **absolute path** starts at the root of the drive, while a **relative path** starts from the current folder.

**Permissions** control who may read, write, or execute a file — the foundation of keeping users out of each other's data.

**Compression vs. encryption** — compression shrinks a file, encryption makes it unreadable without a key. Different goals, frequently combined.

**Key exam points:**
- Changing an extension does **not** convert a file's format
- Executable files (.exe) from unknown sources are a primary malware vector
- Backups matter most for files that cannot be recreated`,
      },
      {
        id: 'itf-sg3-3',
        title: 'Software Types & Licensing',
        content: `**Categories of software**
- **Productivity** — word processors, spreadsheets, presentations
- **Collaboration** — email, messaging, conferencing, shared documents
- **Business** — accounting, CRM, database front ends
- **Utility** — antivirus, backup tools, disk maintenance
- **Development** — editors, compilers, version control

**Licensing models**

| Model | Meaning |
|-------|---------|
| Single-use / perpetual | Bought once, owned indefinitely for that version |
| Subscription (SaaS) | Recurring fee while access continues |
| Concurrent | A fixed number of simultaneous users |
| Open source | Source code published; may be modified and redistributed |
| Freeware | Free to use, source code not provided |

**Key exam points:**
- **SaaS is vendor-hosted and subscription-billed** — no local installation
- **Open source ≠ free of charge**; it refers to source availability and license rights
- Exceeding license terms is a compliance violation even when technically possible`,
      },
      {
        id: 'itf-sg3-4',
        title: 'Web Browsers & Software Management',
        content: `**Browser configuration worth knowing**
- **Cookies** store per-site state; clearing them (or using private browsing) limits tracking across sessions
- **Cache** stores copies of page content for speed; clearing it resolves many "stale page" problems
- **Pop-up blockers** and script settings reduce exposure to malicious content
- **Extensions** add capability but also gain access to page data — install sparingly

**Patching and updates**
- Security patches close **known, published** vulnerabilities that attackers actively exploit
- Automatic updates are the practical default for most users
- Test updates before wide deployment in business environments

**Key exam points:**
- Apply security patches **promptly** — the vulnerability is public the moment the patch ships
- Clearing **cookies** addresses tracking; clearing **cache** addresses stale content
- Downloading software only from trusted sources is a basic, heavily tested habit`,
      },
    ],
  },

  {
    id: 'itf-sg4',
    domain: 4,
    title: 'Software Development',
    summary:
      'Programming concepts at a conceptual level — variables, logic, functions, and how languages get executed. You will not be asked to write code, but you will be asked what each construct does.',
    topics: [
      {
        id: 'itf-sg4-1',
        title: 'Programming Concepts',
        content: `**Variables and constants**
- A **variable** is a named storage location whose value can change during execution
- A **constant** holds a value that must not change, such as a tax rate

**Containers for multiple values**
- An **array** stores an ordered collection under one name, each element reached by index
- A **vector** is a resizable array in some languages

**Functions**
- A named, reusable block of code that may take inputs and return a result
- Avoids duplicating logic and localizes fixes to one place

**Objects**
- Bundle data (**properties**) with behavior (**methods**), created from templates called **classes**

**Key exam points:**
- Variables **change**, constants **do not**
- Arrays are indexed collections, commonly starting at index **0**
- Functions exist for **reuse and maintainability**`,
      },
      {
        id: 'itf-sg4-2',
        title: 'Programming Logic',
        content: `Three control structures cover nearly everything the exam asks:

**Sequence** — instructions execute in order, top to bottom.

**Branching (if / else)** — chooses between paths based on a condition:

    if user is an administrator
        show the admin menu
    else
        show the standard menu

**Looping** — repeats a block while a condition holds:
- **for** — repeat a known number of times
- **while** — repeat as long as a condition remains true
- **do-while** — same, but always executes at least once

**Key exam points:**
- "Do X **or** Y depending on a condition" = **branching**
- "Do X repeatedly **until** something changes" = **looping**
- A loop whose condition never becomes false is an **infinite loop** and hangs the program`,
      },
      {
        id: 'itf-sg4-3',
        title: 'Organizing Logic Before Coding',
        content: `**Pseudocode** describes logic in plain language so a design can be reviewed before implementation. It is not executable and belongs to no specific language.

**Flowcharts** show the same logic visually:

| Symbol | Meaning |
|--------|---------|
| Oval | Start or end |
| Rectangle | Process step |
| Diamond | Decision with branching outcomes |
| Parallelogram | Input or output |
| Arrow | Flow of control |

**Comments** live inside real source code, are ignored at execution, and explain *why* the code does what it does.

**Key exam points:**
- A **diamond is always the decision** symbol
- Pseudocode and flowcharts are **planning** tools — neither runs
- Comments cost nothing at runtime and save enormous time later`,
      },
      {
        id: 'itf-sg4-4',
        title: 'Language Categories',
        content: `| Category | Description | Examples |
|----------|-------------|----------|
| Compiled | Translated to machine code ahead of time, producing an executable | C, C++, Go |
| Interpreted | Translated and executed line by line at runtime | Python, JavaScript, Ruby |
| Assembly | Human-readable form of machine instructions, tied to a CPU architecture | x86 assembly |
| Query | Requests and manipulates data in a database | SQL |
| Markup | Describes structure and presentation, not logic | HTML, XML |

**Key exam points:**
- **Compilers translate first, then run. Interpreters translate as they run**
- **Markup is not programming** — HTML has no control flow
- **SQL is a query language**, not a general-purpose programming language
- Compiled code generally runs faster; interpreted code is generally easier to develop and port`,
      },
    ],
  },

  {
    id: 'itf-sg5',
    domain: 5,
    title: 'Database Fundamentals',
    summary:
      'Why databases exist, how relational tables are structured and linked, and the handful of SQL statements and access concepts the exam expects you to recognize.',
    topics: [
      {
        id: 'itf-sg5-1',
        title: 'Why Databases Exist',
        content: `A flat file such as a spreadsheet works until data grows, several people need it at once, or relationships between records matter.

**What a database provides that a flat file does not:**
- **Structured querying** — ask precise questions and get result sets back
- **Concurrent access** — many users reading and writing safely at once
- **Integrity rules** — constraints preventing invalid or orphaned data
- **Scalability** — performance that holds up as records multiply
- **Security** — permissions applied per user, table, or column

**Key exam points:**
- Databases are not automatically smaller than flat files — the advantage is **structure, integrity, and concurrency**
- **Concurrency control** (transactions and locking) is what stops simultaneous writes from destroying each other
- Databases still require backups like any other system`,
      },
      {
        id: 'itf-sg5-2',
        title: 'Relational Structure & Keys',
        content: `A **relational database** stores data in tables of rows and columns.

- **Table** — one kind of entity, such as Customers
- **Record (row)** — one complete entry, such as a single customer
- **Field (column)** — one attribute, such as Email, shared across all records
- **Schema** — the overall definition of tables, fields, types, and relationships

**Keys**
- A **primary key** uniquely identifies each record. It cannot be null and cannot repeat
- A **foreign key** references another table's primary key, creating the relationship

Example: an Orders table stores a CustomerID foreign key pointing at the Customers table's primary key, so every order is tied to exactly one customer.

**Key exam points:**
- **Rows are records, columns are fields** — questions frequently swap these
- The **primary key is unique and never null**
- **Foreign keys are what make a relational database relational**`,
      },
      {
        id: 'itf-sg5-3',
        title: 'Database Types',
        content: `| Type | Structure | Best for |
|------|-----------|----------|
| Relational (SQL) | Fixed tables, rows, columns, enforced schema | Structured data with clear relationships |
| Non-relational (NoSQL) | Documents, key-value pairs, graphs | Data whose shape varies between entries |
| Flat file | Single table, no relationships | Small, simple, single-user data |

**Relational examples:** MySQL, PostgreSQL, Microsoft SQL Server, Oracle
**Non-relational examples:** MongoDB (documents), Redis (key-value)

**Key exam points:**
- Choose **relational** when relationships and consistency matter
- Choose **non-relational** when structure varies or scale is extreme
- **CSV** is the common interchange format for moving data between systems`,
      },
      {
        id: 'itf-sg5-4',
        title: 'Interfacing with a Database',
        content: `**SQL statements you must recognize**

| Statement | Action |
|-----------|--------|
| SELECT | Retrieve data |
| INSERT | Add new records |
| UPDATE | Modify existing records |
| DELETE | Remove records |
| CREATE | Create a table or database |
| DROP | Delete an entire object |

Together, SELECT/INSERT/UPDATE/DELETE are known as **CRUD** — Create, Read, Update, Delete.

**Access methods**
- **Direct/manual** — a person runs queries in a database tool
- **Programmatic** — an application queries on the user's behalf
- **User interface** — forms and reports hide the query entirely
- **Query builder** — assembles queries visually

**Key exam points:**
- **SELECT reads, UPDATE modifies, DELETE removes rows, DROP removes the object itself**
- An UPDATE or DELETE without a **WHERE clause** affects every row — a classic real-world disaster
- Permissions should follow **least privilege**: read-only access unless writing is genuinely required`,
      },
    ],
  },

  {
    id: 'itf-sg6',
    domain: 6,
    title: 'Security',
    summary:
      'The largest domain after Infrastructure: the CIA triad, how identity is proven, the attacks that target people rather than machines, and the practices that keep data recoverable.',
    topics: [
      {
        id: 'itf-sg6-1',
        title: 'The CIA Triad',
        content: `Every security control supports at least one of three goals:

**Confidentiality** — only authorized parties can read the data
- Achieved with encryption, access controls, and permissions
- Violated by a data breach or an eavesdropper

**Integrity** — data is accurate and has not been altered without authorization
- Achieved with hashing, checksums, and digital signatures
- Violated by tampering or corruption

**Availability** — data and systems are reachable when needed
- Achieved with redundancy, backups, and failover
- Violated by a denial-of-service attack, hardware failure, or ransomware

**Key exam points:**
- A **DoS attack targets availability** — nothing is read or altered
- A **stolen customer list breaks confidentiality**
- **Altered records break integrity**
- Questions often describe a scenario and ask which element was compromised`,
      },
      {
        id: 'itf-sg6-2',
        title: 'Authentication & Access Control',
        content: `**Authentication proves identity. Authorization determines permissions.** Authentication always comes first.

**The factors**

| Factor | Meaning | Examples |
|--------|---------|----------|
| Something you know | Knowledge | Password, PIN, security question |
| Something you have | Possession | Phone, hardware token, smart card |
| Something you are | Inherence | Fingerprint, face, retina |
| Somewhere you are | Location | GPS or network location |

**Multifactor authentication (MFA)** requires factors of **different types**. A password plus a texted code qualifies. A password plus a PIN does **not** — both are knowledge.

**Access control principles**
- **Least privilege** — grant only the access a role requires
- **Separation of duties** — split sensitive tasks so no single person controls a whole process
- **Accounting/auditing** — log who did what, and when

**Key exam points:**
- **Two passwords are not multifactor**
- **Biometrics are "something you are"**
- Least privilege is the default answer when a question describes over-permissioned accounts`,
      },
      {
        id: 'itf-sg6-3',
        title: 'Threats, Malware & Social Engineering',
        content: `**Malware types**

| Type | Behavior |
|------|----------|
| Virus | Attaches to a file and needs a host to spread |
| Worm | Self-replicates across networks without help |
| Trojan | Disguised as legitimate software |
| Ransomware | Encrypts data and demands payment |
| Spyware | Covertly collects information |
| Keylogger | Records keystrokes, capturing credentials |

**Social engineering** attacks people rather than technology, bypassing technical controls entirely:
- **Phishing** — fraudulent message impersonating a trusted party
- **Spear phishing** — phishing aimed at a specific individual
- **Pretexting** — inventing a scenario to justify a request
- **Tailgating** — following an authorized person through a secure door
- **Shoulder surfing** — watching someone enter credentials

**Key exam points:**
- **Legitimate organizations never ask for passwords by email**
- A **worm spreads on its own**; a virus needs a host file
- **Ransomware is defeated by tested, offline backups**, not by paying`,
      },
      {
        id: 'itf-sg6-4',
        title: 'Encryption, Backups & Device Security',
        content: `**Encryption** converts data into ciphertext that only a valid key can reverse:
- **At rest** — full-disk encryption, encrypted files
- **In transit** — HTTPS/TLS, VPN, WPA3 wireless

**HTTPS** encrypts traffic between browser and server so it cannot be read or modified in transit. It does **not** certify that a site's content is truthful.

**Backups — follow 3-2-1:**
- **3** copies of the data
- on **2** different media types
- with **1** stored **offsite**

Offsite copies survive fire, flood, theft, and ransomware that reaches attached storage. **Test restores regularly** — an untested backup is an assumption.

**Device and wireless hardening**
- Replace **default administrator credentials** immediately
- Enable **WPA3** (or WPA2); avoid the deprecated WEP and WPS
- Keep firmware and software patched
- Lock screens, use strong passcodes, enable remote wipe on mobile devices

**Key exam points:**
- **Offsite backup** is the answer whenever a question mentions fire, flood, or site loss
- **Default credentials** are the single most exploited weakness on consumer devices
- Encryption protects confidentiality; **backups protect availability**`,
      },
    ],
  },
];
