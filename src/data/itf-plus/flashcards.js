// ITF+ FC0-U61 Flashcards
// Domains: 1=IT Concepts and Terminology, 2=Infrastructure, 3=Applications and Software,
//          4=Software Development, 5=Database Fundamentals, 6=Security

export const flashcards = [
  // ─── DOMAIN 1: IT CONCEPTS AND TERMINOLOGY ───────────────────────────────

  {
    id: 'itf-fc-001',
    domain: 1,
    term: 'Bit vs. Byte',
    definition:
      'A bit is a single binary digit (0 or 1). A byte is 8 bits and represents 256 possible values. Storage is measured in bytes (KB, MB, GB); transfer rates are measured in bits per second (Mbps, Gbps).',
  },
  {
    id: 'itf-fc-002',
    domain: 1,
    term: 'Binary (base 2)',
    definition:
      'Numbering system using only 0 and 1 — the native language of digital electronics, where each digit represents a power of 2.',
  },
  {
    id: 'itf-fc-003',
    domain: 1,
    term: 'Hexadecimal (base 16)',
    definition:
      'Numbering system using 0-9 and A-F, where A=10 through F=15. Used for MAC addresses, IPv6 addresses, and HTML color codes because it compresses binary compactly — one hex digit equals 4 bits.',
  },
  {
    id: 'itf-fc-004',
    domain: 1,
    term: 'Units of storage',
    definition:
      'KB (kilobyte) → MB (megabyte) → GB (gigabyte) → TB (terabyte) → PB (petabyte). Each step is roughly 1,000 times the previous (1,024 in strict binary terms).',
  },
  {
    id: 'itf-fc-005',
    domain: 1,
    term: 'Throughput vs. capacity',
    definition:
      'Throughput is how fast data moves, measured in bits per second (Mbps/Gbps). Capacity is how much data is stored, measured in bytes (GB/TB). Confusing the two is a classic exam trap.',
  },
  {
    id: 'itf-fc-006',
    domain: 1,
    term: 'Integer',
    definition:
      'Data type holding whole numbers with no fractional part — counts, ages, quantities. Cannot store 19.99.',
  },
  {
    id: 'itf-fc-007',
    domain: 1,
    term: 'Float',
    definition:
      'Floating-point data type holding numbers with a decimal component, such as prices or measurements.',
  },
  {
    id: 'itf-fc-008',
    domain: 1,
    term: 'Boolean',
    definition:
      'Data type with exactly two possible values: true or false. Used for flags and conditions.',
  },
  {
    id: 'itf-fc-009',
    domain: 1,
    term: 'Char vs. String',
    definition:
      'A char stores a single character. A string stores a sequence of characters, such as a name or an address.',
  },
  {
    id: 'itf-fc-010',
    domain: 1,
    term: 'CompTIA troubleshooting methodology',
    definition:
      '1) Identify the problem. 2) Establish a theory of probable cause. 3) Test the theory. 4) Establish a plan of action. 5) Implement the solution or escalate. 6) Verify full functionality and apply preventive measures. 7) Document findings, actions, and outcomes.',
  },
  {
    id: 'itf-fc-011',
    domain: 1,
    term: 'Input-Processing-Output-Storage',
    definition:
      'The basic computing model. Input (keyboard, mouse) → Processing (CPU) → Output (monitor, printer), with Storage (RAM, drives) holding data before and after.',
  },
  {
    id: 'itf-fc-012',
    domain: 1,
    term: 'Intellectual property',
    definition:
      'Proprietary creations — designs, source code, customer data, trade secrets — that hold value and competitive advantage, and are protected by copyright, patent, or trademark.',
  },

  // ─── DOMAIN 2: INFRASTRUCTURE ─────────────────────────────────────────────

  {
    id: 'itf-fc-013',
    domain: 2,
    term: 'CPU (Central Processing Unit)',
    definition:
      'Executes program instructions. Performance depends on clock speed (GHz), core count, and cache size. Often called the "brain" of the computer.',
  },
  {
    id: 'itf-fc-014',
    domain: 2,
    term: 'RAM (Random Access Memory)',
    definition:
      'Fast volatile working memory holding data and programs currently in use. Contents are lost when power is removed. Too little RAM forces swapping to disk and causes slowdowns.',
  },
  {
    id: 'itf-fc-015',
    domain: 2,
    term: 'Volatile vs. non-volatile storage',
    definition:
      'Volatile memory (RAM) loses its contents without power. Non-volatile storage (SSD, HDD, flash drive, optical disc) retains data when powered off.',
  },
  {
    id: 'itf-fc-016',
    domain: 2,
    term: 'HDD vs. SSD',
    definition:
      'An HDD stores data magnetically on spinning platters with a moving head — cheaper per GB, slower, mechanically fragile. An SSD uses flash memory with no moving parts — faster, quieter, more shock resistant.',
  },
  {
    id: 'itf-fc-017',
    domain: 2,
    term: 'Motherboard',
    definition:
      'The main circuit board connecting CPU, RAM, storage, expansion cards, and peripherals, distributing power and data between them.',
  },
  {
    id: 'itf-fc-018',
    domain: 2,
    term: 'GPU (Graphics Processing Unit)',
    definition:
      'Processor specialized for rendering images and video. Handles the parallel math behind graphics, gaming, and video editing.',
  },
  {
    id: 'itf-fc-019',
    domain: 2,
    term: 'RJ-45 vs. RJ-11',
    definition:
      'RJ-45 is the 8-pin connector for twisted-pair Ethernet networking. RJ-11 is the smaller 4- or 6-pin connector for telephone lines and DSL.',
  },
  {
    id: 'itf-fc-020',
    domain: 2,
    term: 'HDMI / DisplayPort',
    definition:
      'Digital display interfaces carrying high-definition video and audio over a single cable. VGA (analog) and DVI are older standards; VGA carries no audio.',
  },
  {
    id: 'itf-fc-021',
    domain: 2,
    term: 'USB (Universal Serial Bus)',
    definition:
      'General-purpose connector for peripherals and charging. USB-A is the classic rectangular plug; USB-C is the smaller reversible connector supporting higher speeds and power delivery.',
  },
  {
    id: 'itf-fc-022',
    domain: 2,
    term: 'IP address',
    definition:
      'Logical address identifying a device on a network. IPv4 uses four decimal octets (192.168.1.10); IPv6 uses eight groups of hexadecimal digits.',
  },
  {
    id: 'itf-fc-023',
    domain: 2,
    term: 'DHCP',
    definition:
      'Dynamic Host Configuration Protocol — automatically leases IP addresses, subnet masks, default gateways, and DNS server addresses to clients, removing the need for manual configuration.',
  },
  {
    id: 'itf-fc-024',
    domain: 2,
    term: 'DNS',
    definition:
      'Domain Name System — resolves human-readable names such as example.com to IP addresses. If sites work by IP but not by name, suspect DNS.',
  },
  {
    id: 'itf-fc-025',
    domain: 2,
    term: 'Router vs. switch',
    definition:
      'A router connects different networks and forwards traffic between them using IP addresses. A switch connects devices within one network and forwards frames using MAC addresses.',
  },
  {
    id: 'itf-fc-026',
    domain: 2,
    term: '2.4 GHz vs. 5 GHz Wi-Fi',
    definition:
      '2.4 GHz travels farther and penetrates walls better but is slower and more congested. 5 GHz is faster with less interference but covers a shorter range.',
  },
  {
    id: 'itf-fc-027',
    domain: 2,
    term: 'Internet service types',
    definition:
      'Fiber — fastest, lowest latency. Cable — fast, shared with neighbors. DSL — over phone lines, distance sensitive. Satellite — available anywhere, high latency. Cellular — mobile broadband.',
  },
  {
    id: 'itf-fc-028',
    domain: 2,
    term: 'LAN vs. WAN',
    definition:
      'A LAN covers a small area such as a home or office. A WAN spans large geographic distances and links multiple LANs — the internet being the largest WAN.',
  },

  // ─── DOMAIN 3: APPLICATIONS AND SOFTWARE ─────────────────────────────────

  {
    id: 'itf-fc-029',
    domain: 3,
    term: 'Operating system',
    definition:
      'Software managing hardware resources — CPU scheduling, memory, storage, devices — and providing a consistent platform and interface for applications.',
  },
  {
    id: 'itf-fc-030',
    domain: 3,
    term: 'Common operating systems',
    definition:
      'Desktop: Windows, macOS, Linux, Chrome OS. Mobile: iOS (Apple), Android (Google and others). Server OSes include Windows Server and various Linux distributions.',
  },
  {
    id: 'itf-fc-031',
    domain: 3,
    term: 'Device driver',
    definition:
      'Software translating operating system requests into commands a specific hardware device understands. Missing or wrong drivers leave hardware unrecognized or partly functional.',
  },
  {
    id: 'itf-fc-032',
    domain: 3,
    term: 'File extension',
    definition:
      'Suffix identifying a file’s format and its associated application — .docx (word processing), .xlsx (spreadsheet), .pdf (document), .jpg (image), .exe (Windows executable).',
  },
  {
    id: 'itf-fc-033',
    domain: 3,
    term: 'File permissions',
    definition:
      'Settings controlling who may read, write, or execute a file. The basis for keeping users out of each other’s data on a shared system.',
  },
  {
    id: 'itf-fc-034',
    domain: 3,
    term: 'Compression vs. encryption',
    definition:
      'Compression shrinks a file to save space or transfer time. Encryption scrambles content so it is unreadable without the key. Different goals, often applied together.',
  },
  {
    id: 'itf-fc-035',
    domain: 3,
    term: 'Productivity software',
    definition:
      'Applications for producing work: word processors, spreadsheets, presentation software, and note-taking tools.',
  },
  {
    id: 'itf-fc-036',
    domain: 3,
    term: 'SaaS (Software as a Service)',
    definition:
      'Software hosted by a vendor and accessed over the internet under a recurring subscription — no local installation or maintenance required.',
  },
  {
    id: 'itf-fc-037',
    domain: 3,
    term: 'Single-use vs. subscription license',
    definition:
      'A single-use (perpetual) license is purchased once and owned indefinitely for a version. A subscription grants use only while payments continue, usually including updates.',
  },
  {
    id: 'itf-fc-038',
    domain: 3,
    term: 'Open source software',
    definition:
      'Software whose source code is published and may be inspected, modified, and redistributed under its license. Often free of charge, though that is not what "open source" means.',
  },
  {
    id: 'itf-fc-039',
    domain: 3,
    term: 'Cookies',
    definition:
      'Small files a website stores in the browser to retain state such as sessions and preferences. They can also enable tracking, so clearing them limits persistence across sessions.',
  },
  {
    id: 'itf-fc-040',
    domain: 3,
    term: 'Patch / update',
    definition:
      'Vendor-supplied fix for a software defect. Security patches close known vulnerabilities that are actively exploited once published, so they should be applied promptly.',
  },
  {
    id: 'itf-fc-041',
    domain: 3,
    term: 'Client-server vs. standalone',
    definition:
      'A client-server application depends on a remote server for data or processing. A standalone application runs entirely on the local machine with no network dependency.',
  },

  // ─── DOMAIN 4: SOFTWARE DEVELOPMENT ──────────────────────────────────────

  {
    id: 'itf-fc-042',
    domain: 4,
    term: 'Variable',
    definition:
      'A named storage location whose value can change while a program runs. A constant is the same idea but its value cannot be reassigned.',
  },
  {
    id: 'itf-fc-043',
    domain: 4,
    term: 'Branching (if/else)',
    definition:
      'Control structure choosing between alternative paths based on whether a condition is true or false.',
  },
  {
    id: 'itf-fc-044',
    domain: 4,
    term: 'Looping',
    definition:
      'Control structure repeating a block of code while a condition holds — for, while, and do-while loops. A loop whose condition never becomes false runs forever.',
  },
  {
    id: 'itf-fc-045',
    domain: 4,
    term: 'Function',
    definition:
      'A named, reusable block of code that can accept inputs and return a result. Avoids duplicating logic and makes programs easier to maintain.',
  },
  {
    id: 'itf-fc-046',
    domain: 4,
    term: 'Array',
    definition:
      'An ordered collection of values stored under one name, with each element reachable by its index position.',
  },
  {
    id: 'itf-fc-047',
    domain: 4,
    term: 'Pseudocode',
    definition:
      'Plain-language description of program logic written before real code. Not executable — it exists so the design can be reviewed and reasoned about.',
  },
  {
    id: 'itf-fc-048',
    domain: 4,
    term: 'Flowchart symbols',
    definition:
      'Oval = start/end. Rectangle = process step. Diamond = decision with branching outcomes. Parallelogram = input/output. Arrows show flow of control.',
  },
  {
    id: 'itf-fc-049',
    domain: 4,
    term: 'Compiled vs. interpreted',
    definition:
      'Compiled languages (C, C++) are translated to machine code ahead of time, producing an executable. Interpreted languages (Python, JavaScript) are translated and run line by line at execution.',
  },
  {
    id: 'itf-fc-050',
    domain: 4,
    term: 'Markup language',
    definition:
      'A language describing the structure and presentation of content rather than logic — HTML and XML. Markup is not programming; it has no control flow.',
  },
  {
    id: 'itf-fc-051',
    domain: 4,
    term: 'Comment',
    definition:
      'Text in source code ignored at execution, written to explain intent to human readers.',
  },
  {
    id: 'itf-fc-052',
    domain: 4,
    term: 'Object-oriented programming',
    definition:
      'Approach organizing code into objects that bundle data (properties) with behavior (methods), created from templates called classes.',
  },

  // ─── DOMAIN 5: DATABASE FUNDAMENTALS ─────────────────────────────────────

  {
    id: 'itf-fc-053',
    domain: 5,
    term: 'Database',
    definition:
      'Organized collection of structured data supporting querying, concurrent multi-user access, and enforced integrity rules — capabilities flat files lack at scale.',
  },
  {
    id: 'itf-fc-054',
    domain: 5,
    term: 'Table, record, field',
    definition:
      'A table stores one kind of entity. A record (row) is one complete entry. A field (column) is one attribute shared across all records.',
  },
  {
    id: 'itf-fc-055',
    domain: 5,
    term: 'Primary key',
    definition:
      'Field uniquely identifying every record in a table. Cannot be null and cannot repeat.',
  },
  {
    id: 'itf-fc-056',
    domain: 5,
    term: 'Foreign key',
    definition:
      'Field referencing the primary key of another table, forming the relationship that makes a relational database relational.',
  },
  {
    id: 'itf-fc-057',
    domain: 5,
    term: 'Relational database',
    definition:
      'Database storing data in tables of rows and columns linked by keys, queried with SQL. Examples: MySQL, PostgreSQL, SQL Server, Oracle.',
  },
  {
    id: 'itf-fc-058',
    domain: 5,
    term: 'Non-relational (NoSQL) database',
    definition:
      'Database storing semi-structured data such as documents or key-value pairs without a fixed schema. Suits data whose shape varies between entries. Examples: MongoDB, Redis.',
  },
  {
    id: 'itf-fc-059',
    domain: 5,
    term: 'SQL CRUD statements',
    definition:
      'SELECT reads data. INSERT creates rows. UPDATE modifies existing rows. DELETE removes rows. Together they are Create, Read, Update, Delete.',
  },
  {
    id: 'itf-fc-060',
    domain: 5,
    term: 'Query',
    definition:
      'A request for data matching stated criteria, returning a result set. The main way users and applications interact with stored data.',
  },
  {
    id: 'itf-fc-061',
    domain: 5,
    term: 'Concurrency control',
    definition:
      'Database mechanisms — transactions and locking — allowing many users to read and write simultaneously without corrupting data or losing updates.',
  },
  {
    id: 'itf-fc-062',
    domain: 5,
    term: 'CSV (comma-separated values)',
    definition:
      'Plain-text format where commas separate field values and each line is a record. Widely used for importing and exporting data between systems.',
  },

  // ─── DOMAIN 6: SECURITY ──────────────────────────────────────────────────

  {
    id: 'itf-fc-063',
    domain: 6,
    term: 'CIA triad',
    definition:
      'Confidentiality (only authorized parties can read data), Integrity (data is accurate and unaltered), Availability (data and systems are reachable when needed).',
  },
  {
    id: 'itf-fc-064',
    domain: 6,
    term: 'Authentication vs. authorization',
    definition:
      'Authentication proves who you are. Authorization determines what you are permitted to do once identified. Authentication always comes first.',
  },
  {
    id: 'itf-fc-065',
    domain: 6,
    term: 'Authentication factors',
    definition:
      'Something you know (password, PIN), something you have (phone, token, smart card), something you are (fingerprint, face). Somewhere you are (location) is sometimes added.',
  },
  {
    id: 'itf-fc-066',
    domain: 6,
    term: 'Multifactor authentication (MFA)',
    definition:
      'Requiring two or more factors of different types. A password plus a phone code qualifies; a password plus a PIN does not, since both are "something you know."',
  },
  {
    id: 'itf-fc-067',
    domain: 6,
    term: 'Phishing',
    definition:
      'Fraudulent message impersonating a trusted party to trick recipients into revealing credentials or opening malware. Spear phishing targets a specific individual.',
  },
  {
    id: 'itf-fc-068',
    domain: 6,
    term: 'Social engineering',
    definition:
      'Manipulating people rather than technology to gain access — phishing, pretexting, tailgating, shoulder surfing. It bypasses technical controls entirely.',
  },
  {
    id: 'itf-fc-069',
    domain: 6,
    term: 'Malware types',
    definition:
      'Virus (attaches to a file, needs a host), worm (self-replicating across networks), Trojan (disguised as legitimate software), ransomware (encrypts data for payment), spyware (covertly collects information).',
  },
  {
    id: 'itf-fc-070',
    domain: 6,
    term: 'Password best practices',
    definition:
      'Use long, unique passphrases per account, store them in a password manager, enable MFA, and never reuse credentials across sites.',
  },
  {
    id: 'itf-fc-071',
    domain: 6,
    term: 'Encryption',
    definition:
      'Converting data into unreadable ciphertext that only a valid key can reverse. Protects data at rest (full-disk encryption) and in transit (HTTPS/TLS, VPN).',
  },
  {
    id: 'itf-fc-072',
    domain: 6,
    term: 'HTTPS',
    definition:
      'HTTP secured with TLS, encrypting traffic between browser and server so it cannot be read or altered in transit. It does not certify that a site’s content is truthful.',
  },
  {
    id: 'itf-fc-073',
    domain: 6,
    term: 'Firewall',
    definition:
      'Hardware or software filtering network traffic against a rule set, blocking unauthorized connections while permitting approved ones.',
  },
  {
    id: 'itf-fc-074',
    domain: 6,
    term: 'Principle of least privilege',
    definition:
      'Granting each account only the access needed for its role, limiting the damage a compromised or misused account can cause.',
  },
  {
    id: 'itf-fc-075',
    domain: 6,
    term: 'Backup best practices',
    definition:
      'Follow 3-2-1: three copies of the data, on two different media types, with one stored offsite. Test restores regularly — an untested backup is an assumption, not a backup.',
  },
  {
    id: 'itf-fc-076',
    domain: 6,
    term: 'Wireless security',
    definition:
      'Use WPA3 where available (WPA2 otherwise), replace default administrator credentials, keep firmware updated, and avoid the deprecated WEP and WPS.',
  },
];

/**
 * Returns all flashcards for a specific domain (1-6).
 * @param {number} domainId
 * @returns {Array}
 */
export function getFlashcardsByDomain(domainId) {
  return flashcards.filter((fc) => fc.domain === domainId);
}
