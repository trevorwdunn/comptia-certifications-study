// ITF+ FC0-U61 Practice Questions
// Domains: 1=IT Concepts and Terminology, 2=Infrastructure, 3=Applications and Software,
//          4=Software Development, 5=Database Fundamentals, 6=Security

export const questions = [
  // ─── DOMAIN 1: IT CONCEPTS AND TERMINOLOGY ───────────────────────────────

  {
    id: 'itf-q-001',
    domain: 1,
    topic: 'Notational Systems',
    question: 'How many distinct values can a single byte represent?',
    options: ['8', '16', '128', '256'],
    correct: 3,
    explanation:
      'A byte is 8 bits, and each bit has 2 possible states, so a byte represents 2^8 = 256 distinct values (0 through 255). The common wrong answer, 8, is the number of bits rather than the number of values.',
  },
  {
    id: 'itf-q-002',
    domain: 1,
    topic: 'Notational Systems',
    question: 'Which numbering system uses the digits 0-9 plus the letters A-F?',
    options: ['Binary', 'Octal', 'Decimal', 'Hexadecimal'],
    correct: 3,
    explanation:
      'Hexadecimal is base 16, so it needs 16 symbols: 0-9 supply the first ten and A-F supply the remaining six (A=10 through F=15). Hex is common in MAC addresses, IPv6 addresses, and color codes.',
  },
  {
    id: 'itf-q-003',
    domain: 1,
    topic: 'Units of Measure',
    question: 'Which unit is used to measure network throughput?',
    options: ['Gigabytes (GB)', 'Megabits per second (Mbps)', 'Gigahertz (GHz)', 'Terabytes (TB)'],
    correct: 1,
    explanation:
      'Throughput is a rate of data transfer over time, measured in bits per second — Mbps or Gbps. Bytes (GB, TB) measure storage capacity, and hertz (GHz) measures clock frequency.',
  },
  {
    id: 'itf-q-004',
    domain: 1,
    topic: 'Units of Measure',
    question: 'Which of the following represents the largest amount of storage?',
    options: ['1,000 MB', '1 GB', '1 TB', '900 KB'],
    correct: 2,
    explanation:
      'A terabyte is roughly 1,000 GB, making it far larger than the others. Note that 1,000 MB and 1 GB are approximately equal, which is why the question includes both.',
  },
  {
    id: 'itf-q-005',
    domain: 1,
    topic: 'Data Types',
    question:
      'A field must store the value 19.99. Which data type is the most appropriate?',
    options: ['Integer', 'Boolean', 'Float', 'Char'],
    correct: 2,
    explanation:
      'A float (floating-point) stores numbers with a fractional component. Integers store whole numbers only, Boolean stores true/false, and char stores a single character.',
  },
  {
    id: 'itf-q-006',
    domain: 1,
    topic: 'Data Types',
    question: 'Which data type stores only one of two possible values?',
    options: ['String', 'Boolean', 'Integer', 'Float'],
    correct: 1,
    explanation:
      'A Boolean holds exactly one of two values — true or false (sometimes represented as 1 or 0). It is the natural choice for flags such as "is the account active?"',
  },
  {
    id: 'itf-q-007',
    domain: 1,
    topic: 'Value of Data',
    question:
      'A company treats its customer list as an asset that gives it an advantage over competitors. This is best described as which of the following?',
    options: [
      'Data-driven business decisions',
      'Intellectual property',
      'Data correlation',
      'Digital products',
    ],
    correct: 1,
    explanation:
      'Proprietary information that provides competitive advantage is intellectual property. Data-driven decision making describes using data to guide choices, which is a separate concept.',
  },
  {
    id: 'itf-q-008',
    domain: 1,
    topic: 'Troubleshooting Methodology',
    question:
      'Which step comes FIRST in the CompTIA troubleshooting methodology?',
    options: [
      'Establish a theory of probable cause',
      'Identify the problem',
      'Test the theory to determine the cause',
      'Document findings, actions, and outcomes',
    ],
    correct: 1,
    explanation:
      'The methodology begins with identifying the problem — gathering information, questioning users, and determining what changed. Documentation is always the final step.',
  },
  {
    id: 'itf-q-009',
    domain: 1,
    topic: 'Troubleshooting Methodology',
    question:
      'A technician tests a theory about a failing printer and the test disproves the theory. What should be done NEXT?',
    options: [
      'Implement the solution anyway',
      'Document the findings and close the ticket',
      'Establish a new theory or escalate',
      'Perform a full system restore',
    ],
    correct: 2,
    explanation:
      'When a theory is disproved, the methodology directs you to establish a new theory or escalate. You only move on to a plan of action once a theory has been confirmed.',
  },
  {
    id: 'itf-q-010',
    domain: 1,
    topic: 'Computing Basics',
    question:
      'In the input-processing-output-storage model, which component performs the processing?',
    options: ['RAM', 'CPU', 'Hard drive', 'Monitor'],
    correct: 1,
    explanation:
      'The CPU processes instructions. RAM and the hard drive are storage, a keyboard is input, and a monitor is output.',
  },

  // ─── DOMAIN 2: INFRASTRUCTURE ─────────────────────────────────────────────

  {
    id: 'itf-q-011',
    domain: 2,
    topic: 'Internal Components',
    question: 'What happens to the contents of RAM when a computer loses power?',
    options: [
      'It is written to the hard drive automatically',
      'It is retained indefinitely',
      'It is lost because RAM is volatile',
      'It is moved to the CPU cache',
    ],
    correct: 2,
    explanation:
      'RAM is volatile memory — its contents are lost without power. This is why unsaved work disappears during an unexpected shutdown, and why permanent data must be written to non-volatile storage.',
  },
  {
    id: 'itf-q-012',
    domain: 2,
    topic: 'Internal Components',
    question:
      'A user reports the computer is slow when many applications are open at once, though the CPU is not heavily loaded. Which upgrade will most likely help?',
    options: ['Additional RAM', 'A faster GPU', 'A larger monitor', 'A new keyboard'],
    correct: 0,
    explanation:
      'Running out of RAM forces the system to swap to much slower disk storage, which shows up as sluggishness with many applications open. Adding RAM addresses the bottleneck directly.',
  },
  {
    id: 'itf-q-013',
    domain: 2,
    topic: 'Storage',
    question: 'Which storage device has no moving parts?',
    options: ['HDD', 'SSD', 'Optical drive', 'Tape drive'],
    correct: 1,
    explanation:
      'An SSD uses flash memory with no mechanical components, which makes it faster and more resistant to physical shock than an HDD, which spins platters under a moving read/write head.',
  },
  {
    id: 'itf-q-014',
    domain: 2,
    topic: 'Ports and Connectors',
    question: 'Which connector is used for a wired Ethernet network connection?',
    options: ['RJ-11', 'RJ-45', 'USB-C', 'HDMI'],
    correct: 1,
    explanation:
      'RJ-45 is the 8-pin connector on twisted-pair Ethernet cable. RJ-11 is the smaller telephone connector, and HDMI carries audio and video.',
  },
  {
    id: 'itf-q-015',
    domain: 2,
    topic: 'Ports and Connectors',
    question: 'Which interface carries both high-definition video and audio over one cable?',
    options: ['VGA', 'DVI-D', 'HDMI', 'PS/2'],
    correct: 2,
    explanation:
      'HDMI carries digital video and audio together. VGA is analog video only, standard DVI-D carries digital video without audio, and PS/2 is a legacy keyboard and mouse connector.',
  },
  {
    id: 'itf-q-016',
    domain: 2,
    topic: 'Networking',
    question: 'What is the primary purpose of DHCP on a network?',
    options: [
      'Resolving domain names to IP addresses',
      'Automatically assigning IP addresses to clients',
      'Encrypting wireless traffic',
      'Blocking malicious websites',
    ],
    correct: 1,
    explanation:
      'DHCP automatically leases IP addresses and related settings such as subnet mask, gateway, and DNS servers. Name resolution is the job of DNS.',
  },
  {
    id: 'itf-q-017',
    domain: 2,
    topic: 'Networking',
    question:
      'A user can reach websites by IP address but not by name. Which service is most likely failing?',
    options: ['DHCP', 'DNS', 'SMTP', 'NAT'],
    correct: 1,
    explanation:
      'Connectivity by IP proves the network path works, so the failure is in name resolution — DNS. If DHCP were the problem, the client would likely have no working address at all.',
  },
  {
    id: 'itf-q-018',
    domain: 2,
    topic: 'Wireless',
    question: 'Which wireless frequency band generally offers the longest range?',
    options: ['2.4 GHz', '5 GHz', '6 GHz', 'All bands have identical range'],
    correct: 0,
    explanation:
      '2.4 GHz signals travel farther and penetrate walls better, but the band is more crowded and offers lower throughput. 5 GHz and 6 GHz are faster over shorter distances.',
  },
  {
    id: 'itf-q-019',
    domain: 2,
    topic: 'Internet Service Types',
    question:
      'Which internet connection type typically provides the highest speeds and lowest latency?',
    options: ['Satellite', 'DSL', 'Fiber optic', 'Dial-up'],
    correct: 2,
    explanation:
      'Fiber transmits data as light over glass, delivering the highest bandwidth and lowest latency. Satellite suffers high latency from the distance signals travel, and dial-up is the slowest option.',
  },
  {
    id: 'itf-q-020',
    domain: 2,
    topic: 'Peripherals',
    question: 'Which device is an example of both an input and an output device?',
    options: ['Mouse', 'Touchscreen monitor', 'Printer', 'Microphone'],
    correct: 1,
    explanation:
      'A touchscreen monitor displays output and accepts touch input. A mouse and microphone are input only; a standard printer is output only.',
  },

  // ─── DOMAIN 3: APPLICATIONS AND SOFTWARE ─────────────────────────────────

  {
    id: 'itf-q-021',
    domain: 3,
    topic: 'Operating Systems',
    question: 'Which of the following is the primary role of an operating system?',
    options: [
      'Providing antivirus protection',
      'Managing hardware resources and providing a platform for applications',
      'Compiling source code into machine code',
      'Storing data in relational tables',
    ],
    correct: 1,
    explanation:
      'The OS manages CPU time, memory, storage, and devices, and gives applications a consistent interface to them. The other options describe security software, a compiler, and a database.',
  },
  {
    id: 'itf-q-022',
    domain: 3,
    topic: 'Operating Systems',
    question: 'Which operating system is most commonly found on Apple mobile devices?',
    options: ['Android', 'iOS', 'Chrome OS', 'Windows Mobile'],
    correct: 1,
    explanation:
      'iOS runs on iPhones and iPads. Android is the mobile OS used by many other manufacturers, and Chrome OS runs on Chromebooks.',
  },
  {
    id: 'itf-q-023',
    domain: 3,
    topic: 'File Management',
    question: 'What does a file extension such as .docx indicate?',
    options: [
      'The size of the file',
      'The file type and the application associated with it',
      'The date the file was created',
      'The permissions applied to the file',
    ],
    correct: 1,
    explanation:
      'The extension identifies the file format so the OS can associate it with the right application. It says nothing about size, dates, or permissions, which are stored as metadata.',
  },
  {
    id: 'itf-q-024',
    domain: 3,
    topic: 'File Management',
    question:
      'Which of the following describes the difference between compression and encryption?',
    options: [
      'Compression reduces file size; encryption makes content unreadable without a key',
      'Compression makes content unreadable; encryption reduces file size',
      'They are two names for the same operation',
      'Compression applies only to images; encryption applies only to text',
    ],
    correct: 0,
    explanation:
      'Compression reduces the space a file occupies. Encryption transforms content so it cannot be read without the correct key. The two are often combined but solve different problems.',
  },
  {
    id: 'itf-q-025',
    domain: 3,
    topic: 'Software Types',
    question: 'Which of the following is an example of productivity software?',
    options: ['A word processor', 'A device driver', 'A firewall', 'A BIOS update'],
    correct: 0,
    explanation:
      'Productivity software helps users create output — word processors, spreadsheets, and presentation software. Drivers, firewalls, and firmware are system or security software.',
  },
  {
    id: 'itf-q-026',
    domain: 3,
    topic: 'Software Licensing',
    question:
      'A company pays a recurring monthly fee to use software hosted by the vendor over the internet. What licensing model is this?',
    options: [
      'Perpetual open source license',
      'Single-use license',
      'Subscription / SaaS',
      'Public domain',
    ],
    correct: 2,
    explanation:
      'Recurring payment for vendor-hosted software is a subscription, commonly delivered as Software as a Service. A perpetual license is bought once and owned indefinitely.',
  },
  {
    id: 'itf-q-027',
    domain: 3,
    topic: 'Web Browsing',
    question:
      'Which browser configuration option would best prevent sites from storing tracking information between sessions?',
    options: [
      'Enabling pop-ups',
      'Clearing cookies and cache',
      'Disabling the firewall',
      'Increasing the download folder size',
    ],
    correct: 1,
    explanation:
      'Cookies store per-site state that can be used for tracking, so clearing them (or using private browsing) limits persistence. The other options do not address tracking.',
  },
  {
    id: 'itf-q-028',
    domain: 3,
    topic: 'Application Architecture',
    question:
      'An application runs entirely on the local computer with no network dependency. This is best described as which architecture model?',
    options: ['Client-server', 'Standalone / single-platform', 'Web application', 'Peer-to-peer'],
    correct: 1,
    explanation:
      'A standalone application installs and executes locally without needing a server. Client-server and web applications depend on a remote system to function.',
  },
  {
    id: 'itf-q-029',
    domain: 3,
    topic: 'Software Management',
    question: 'Why should software patches be applied promptly?',
    options: [
      'They always add new features users request',
      'They frequently fix security vulnerabilities',
      'They reduce the size of the installation',
      'They are required to keep a license valid',
    ],
    correct: 1,
    explanation:
      'Patches commonly close known security holes, and published vulnerabilities are actively exploited. Feature additions may appear in updates, but the security fix is the urgent reason.',
  },
  {
    id: 'itf-q-030',
    domain: 3,
    topic: 'Operating Systems',
    question: 'Which term describes software that directly controls a specific hardware device?',
    options: ['Driver', 'Utility', 'Compiler', 'Macro'],
    correct: 0,
    explanation:
      'A driver translates OS instructions into commands a particular device understands. Without a correct driver, hardware may be unrecognized or only partly functional.',
  },

  // ─── DOMAIN 4: SOFTWARE DEVELOPMENT ──────────────────────────────────────

  {
    id: 'itf-q-031',
    domain: 4,
    topic: 'Programming Concepts',
    question: 'What is a variable in programming?',
    options: [
      'A fixed value that never changes',
      'A named storage location whose value can change',
      'A section of code that runs repeatedly',
      'An error raised at runtime',
    ],
    correct: 1,
    explanation:
      'A variable is a named container for a value that can be reassigned as the program runs. A value that cannot change is a constant.',
  },
  {
    id: 'itf-q-032',
    domain: 4,
    topic: 'Programming Logic',
    question:
      'Which programming construct repeats a block of code while a condition remains true?',
    options: ['Branch', 'Loop', 'Function', 'Constant'],
    correct: 1,
    explanation:
      'A loop (while, for, do-while) repeats until its condition is no longer true. A branch chooses between paths, and a function groups reusable code.',
  },
  {
    id: 'itf-q-033',
    domain: 4,
    topic: 'Programming Logic',
    question:
      'A program must take one action if a user is an administrator and a different action otherwise. Which construct is required?',
    options: ['Loop', 'Branch (if/else)', 'Array', 'Comment'],
    correct: 1,
    explanation:
      'Branching with if/else selects between alternative paths based on a condition. Loops repeat code rather than choosing between options.',
  },
  {
    id: 'itf-q-034',
    domain: 4,
    topic: 'Programming Concepts',
    question: 'What is the purpose of a function in a program?',
    options: [
      'To permanently store user data',
      'To group reusable code that can be called by name',
      'To encrypt the source code',
      'To define the color scheme of an interface',
    ],
    correct: 1,
    explanation:
      'Functions package logic so it can be invoked repeatedly without duplicating code, which reduces errors and makes programs easier to maintain.',
  },
  {
    id: 'itf-q-035',
    domain: 4,
    topic: 'Programming Organization',
    question: 'What is pseudocode used for?',
    options: [
      'Executing programs faster',
      'Describing program logic in plain language before writing real code',
      'Encrypting an application',
      'Testing network throughput',
    ],
    correct: 1,
    explanation:
      'Pseudocode expresses logic in readable, language-neutral terms so the design can be reviewed before implementation. It is not executable.',
  },
  {
    id: 'itf-q-036',
    domain: 4,
    topic: 'Programming Organization',
    question: 'In a flowchart, what does a diamond shape normally represent?',
    options: ['A process step', 'A decision point', 'The start or end', 'Stored data'],
    correct: 1,
    explanation:
      'A diamond marks a decision with multiple possible outputs, typically yes/no. Rectangles are process steps and ovals mark start and end points.',
  },
  {
    id: 'itf-q-037',
    domain: 4,
    topic: 'Language Categories',
    question: 'Which of the following is an interpreted scripting language?',
    options: ['C', 'Assembly', 'Python', 'Machine code'],
    correct: 2,
    explanation:
      'Python is interpreted — the code is executed by an interpreter rather than compiled to a standalone binary first. C is compiled, and assembly maps closely to machine instructions.',
  },
  {
    id: 'itf-q-038',
    domain: 4,
    topic: 'Language Categories',
    question: 'What does a compiler do?',
    options: [
      'Translates source code into machine code before execution',
      'Runs source code line by line at execution time',
      'Stores program output in a database',
      'Removes unused files from a disk',
    ],
    correct: 0,
    explanation:
      'A compiler converts the entire source file into machine code ahead of time, producing an executable. An interpreter instead translates and runs code line by line.',
  },
  {
    id: 'itf-q-039',
    domain: 4,
    topic: 'Data Structures',
    question: 'Which structure stores an ordered collection of values under a single name?',
    options: ['Array', 'Boolean', 'Constant', 'Comment'],
    correct: 0,
    explanation:
      'An array holds multiple values in order, each reachable by index. A Boolean holds one true/false value and a constant holds a single unchanging value.',
  },
  {
    id: 'itf-q-040',
    domain: 4,
    topic: 'Programming Concepts',
    question: 'Why do developers add comments to source code?',
    options: [
      'To make the program run faster',
      'To explain intent to human readers without affecting execution',
      'To compress the file',
      'To grant users additional permissions',
    ],
    correct: 1,
    explanation:
      'Comments are ignored when the program runs; they exist to explain why code does what it does, which matters when someone returns to it later.',
  },

  // ─── DOMAIN 5: DATABASE FUNDAMENTALS ─────────────────────────────────────

  {
    id: 'itf-q-041',
    domain: 5,
    topic: 'Database Concepts',
    question: 'What is the primary advantage of a database over a flat file?',
    options: [
      'Databases always use less disk space',
      'Databases support structured querying, concurrent access, and enforced relationships',
      'Databases never require backups',
      'Databases do not need any software to read',
    ],
    correct: 1,
    explanation:
      'Databases are built for structured queries, multi-user access, and integrity rules across related data. Flat files offer none of that as data volume grows.',
  },
  {
    id: 'itf-q-042',
    domain: 5,
    topic: 'Database Structures',
    question: 'In a relational database table, what does a record (row) represent?',
    options: [
      'A single attribute of the data',
      'One complete entry with values for each field',
      'The name of the table',
      'The permissions on the table',
    ],
    correct: 1,
    explanation:
      'A row is one entity instance — for example one customer — with a value in each column. A column represents a single attribute across all rows.',
  },
  {
    id: 'itf-q-043',
    domain: 5,
    topic: 'Database Structures',
    question: 'What is the purpose of a primary key?',
    options: [
      'To encrypt the contents of a table',
      'To uniquely identify each record in a table',
      'To sort records alphabetically',
      'To connect the database to a network',
    ],
    correct: 1,
    explanation:
      'A primary key uniquely identifies every row and cannot be null or duplicated. It is what a foreign key in another table points to.',
  },
  {
    id: 'itf-q-044',
    domain: 5,
    topic: 'Database Structures',
    question: 'What does a foreign key do?',
    options: [
      'Stores passwords for database users',
      'References the primary key of another table to link related data',
      'Translates the database into another language',
      'Prevents the database from being backed up',
    ],
    correct: 1,
    explanation:
      'A foreign key creates the relationship between tables by referencing another table’s primary key, which is what makes a relational database relational.',
  },
  {
    id: 'itf-q-045',
    domain: 5,
    topic: 'Database Methods',
    question: 'Which SQL statement retrieves data from a database?',
    options: ['INSERT', 'SELECT', 'DELETE', 'UPDATE'],
    correct: 1,
    explanation:
      'SELECT queries and returns data. INSERT adds rows, UPDATE modifies existing rows, and DELETE removes rows.',
  },
  {
    id: 'itf-q-046',
    domain: 5,
    topic: 'Database Methods',
    question: 'Which SQL statement changes values in existing records?',
    options: ['SELECT', 'UPDATE', 'CREATE', 'DROP'],
    correct: 1,
    explanation:
      'UPDATE modifies existing rows, normally with a WHERE clause limiting which ones. DROP removes an entire object such as a table.',
  },
  {
    id: 'itf-q-047',
    domain: 5,
    topic: 'Database Types',
    question:
      'Which type of database stores data in flexible documents rather than fixed rows and columns?',
    options: ['Relational', 'Non-relational (NoSQL)', 'Flat file', 'Spreadsheet'],
    correct: 1,
    explanation:
      'Non-relational or NoSQL databases store semi-structured data such as documents or key-value pairs, which suits data whose shape varies between entries.',
  },
  {
    id: 'itf-q-048',
    domain: 5,
    topic: 'Database Access',
    question:
      'Several users must read and write the same database at the same time without overwriting each other. Which database feature addresses this?',
    options: [
      'Concurrency control',
      'File compression',
      'Screen resolution settings',
      'Disk defragmentation',
    ],
    correct: 0,
    explanation:
      'Concurrency control, typically through transactions and locking, keeps simultaneous operations from corrupting data. It is a core reason to choose a database over shared files.',
  },
  {
    id: 'itf-q-049',
    domain: 5,
    topic: 'Database Concepts',
    question: 'What does importing data into a database as a CSV file require?',
    options: [
      'That the file contains comma-separated values mapped to table fields',
      'That the file is encrypted',
      'That the database is offline',
      'That the file has no header row under any circumstances',
    ],
    correct: 0,
    explanation:
      'CSV is a plain-text format where commas separate field values, and each column must map to a field in the destination table. Header rows are common and usually optional to skip.',
  },
  {
    id: 'itf-q-050',
    domain: 5,
    topic: 'Database Methods',
    question: 'What is a query in database terms?',
    options: [
      'A request for specific data matching stated criteria',
      'A physical storage device',
      'A user account with administrator rights',
      'A backup schedule',
    ],
    correct: 0,
    explanation:
      'A query asks the database for data meeting particular conditions and returns a result set. Queries are the main way applications and users interact with stored data.',
  },

  // ─── DOMAIN 6: SECURITY ──────────────────────────────────────────────────

  {
    id: 'itf-q-051',
    domain: 6,
    topic: 'CIA Triad',
    question: 'Which element of the CIA triad ensures data has not been altered without authorization?',
    options: ['Confidentiality', 'Integrity', 'Availability', 'Accountability'],
    correct: 1,
    explanation:
      'Integrity ensures data remains accurate and unmodified except by authorized changes, often verified with hashing. Confidentiality restricts who can read data; availability ensures access when needed.',
  },
  {
    id: 'itf-q-052',
    domain: 6,
    topic: 'CIA Triad',
    question:
      'A denial-of-service attack that takes a website offline primarily affects which part of the CIA triad?',
    options: ['Confidentiality', 'Integrity', 'Availability', 'Non-repudiation'],
    correct: 2,
    explanation:
      'A DoS attack prevents legitimate users from reaching a resource, which is an availability failure. Nothing is necessarily read or altered.',
  },
  {
    id: 'itf-q-053',
    domain: 6,
    topic: 'Authentication',
    question: 'Which of the following is an example of multifactor authentication?',
    options: [
      'A password and a PIN',
      'A password and a code from a phone app',
      'Two different passwords',
      'A username and a password',
    ],
    correct: 1,
    explanation:
      'Multifactor authentication requires factors of different types — something you know plus something you have. A password and a PIN are both "something you know," so they are a single factor used twice.',
  },
  {
    id: 'itf-q-054',
    domain: 6,
    topic: 'Authentication',
    question: 'A fingerprint reader is an example of which authentication factor?',
    options: ['Something you know', 'Something you have', 'Something you are', 'Somewhere you are'],
    correct: 2,
    explanation:
      'Biometrics such as fingerprints, facial recognition, and retina scans are "something you are." A token or phone is "something you have."',
  },
  {
    id: 'itf-q-055',
    domain: 6,
    topic: 'Social Engineering',
    question:
      'A user receives an email that appears to be from their bank asking them to confirm their password via a link. What is this attack called?',
    options: ['Phishing', 'Denial of service', 'SQL injection', 'Brute force'],
    correct: 0,
    explanation:
      'Phishing impersonates a trusted party to trick users into revealing credentials. Legitimate organizations do not ask for passwords by email.',
  },
  {
    id: 'itf-q-056',
    domain: 6,
    topic: 'Password Best Practices',
    question: 'Which practice most improves password security?',
    options: [
      'Reusing one strong password everywhere',
      'Using a long, unique passphrase for each account',
      'Writing passwords on a sticky note at the desk',
      'Changing a single character each month',
    ],
    correct: 1,
    explanation:
      'Length and uniqueness matter most: a breach of one site cannot then unlock the others. Password managers make unique passphrases practical.',
  },
  {
    id: 'itf-q-057',
    domain: 6,
    topic: 'Encryption',
    question: 'What does HTTPS provide that HTTP does not?',
    options: [
      'Faster page loading',
      'Encryption of data in transit between browser and server',
      'Automatic virus scanning of downloads',
      'Guaranteed website accuracy',
    ],
    correct: 1,
    explanation:
      'HTTPS wraps HTTP in TLS so traffic cannot be read or modified in transit. It does not vouch for the truthfulness of a site’s content.',
  },
  {
    id: 'itf-q-058',
    domain: 6,
    topic: 'Device Security',
    question:
      'Which configuration change most improves the security of a home wireless router?',
    options: [
      'Leaving the default administrator password in place',
      'Enabling WPA3 (or WPA2) encryption and changing default credentials',
      'Disabling all firmware updates',
      'Broadcasting the SSID with the owner’s name',
    ],
    correct: 1,
    explanation:
      'Strong wireless encryption plus replacing default administrator credentials closes the two most commonly exploited weaknesses on consumer routers.',
  },
  {
    id: 'itf-q-059',
    domain: 6,
    topic: 'Backups',
    question: 'Why should backups be stored in a separate physical location?',
    options: [
      'To make restores faster',
      'To protect against events that destroy the primary site, such as fire or flood',
      'To reduce the size of the backup',
      'Because local storage cannot hold backups',
    ],
    correct: 1,
    explanation:
      'Offsite copies survive site-wide disasters and ransomware that reaches attached storage. Local backups alone share the fate of the primary system.',
  },
  {
    id: 'itf-q-060',
    domain: 6,
    topic: 'Access Control',
    question:
      'A user is given only the permissions needed to perform their job and nothing more. Which principle is being applied?',
    options: [
      'Least privilege',
      'Implicit allow',
      'Separation of duties',
      'Defense in depth',
    ],
    correct: 0,
    explanation:
      'Least privilege limits each account to the minimum access required, which reduces the damage a compromised or misused account can do.',
  },
];

/**
 * Returns all questions for a specific domain (1-6).
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
