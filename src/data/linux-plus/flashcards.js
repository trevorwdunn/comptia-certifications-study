// Linux+ XK0-005 Flashcards
// Domains: 1=System Management, 2=Security,
//          3=Scripting, Containers, and Automation, 4=Troubleshooting

export const flashcards = [
  // ─── DOMAIN 1: SYSTEM MANAGEMENT ─────────────────────────────────────────

  {
    id: 'lxplus-fc-001',
    domain: 1,
    term: 'Permission octals',
    definition:
      'read=4, write=2, execute=1, summed per identity (owner, group, other). 755 = rwxr-xr-x, 644 = rw-r--r--, 600 = rw------- (private keys), 777 = fully open and almost always wrong.',
  },
  {
    id: 'lxplus-fc-002',
    domain: 1,
    term: 'chmod / chown / chgrp',
    definition:
      'chmod changes permission bits. chown changes owner (accepts user:group). chgrp changes group only. Ownership and permissions are separate concepts.',
  },
  {
    id: 'lxplus-fc-003',
    domain: 1,
    term: 'SUID',
    definition:
      'Set User ID — an executable runs with the privileges of its owner rather than the caller. Powerful and risky; passwd is the classic example.',
  },
  {
    id: 'lxplus-fc-004',
    domain: 1,
    term: 'SGID',
    definition:
      'Set Group ID — on a directory, new files inherit the directory group rather than the creator’s primary group. The standard tool for shared team directories.',
  },
  {
    id: 'lxplus-fc-005',
    domain: 1,
    term: 'Sticky bit',
    definition:
      'On a world-writable directory such as /tmp, restricts deletion and renaming to each file’s owner (or root). Shows as t in the others-execute position.',
  },
  {
    id: 'lxplus-fc-006',
    domain: 1,
    term: 'umask',
    definition:
      'Mask subtracted from default permissions when files are created. A umask of 022 yields 755 for directories and 644 for files.',
  },
  {
    id: 'lxplus-fc-007',
    domain: 1,
    term: 'apt vs. dnf/yum',
    definition:
      'apt manages .deb packages on Debian and Ubuntu. dnf (successor to yum) manages .rpm packages on RHEL and Fedora. Both resolve dependencies; dpkg and rpm alone do not.',
  },
  {
    id: 'lxplus-fc-008',
    domain: 1,
    term: 'systemctl essentials',
    definition:
      'start / stop / restart act now. enable / disable control boot behavior. status shows current state. enable --now does both at once.',
  },
  {
    id: 'lxplus-fc-009',
    domain: 1,
    term: 'journalctl',
    definition:
      'Reads the systemd journal. -u filters by unit, -b limits to the current boot, -f follows live, -p sets priority, --since accepts human time expressions.',
  },
  {
    id: 'lxplus-fc-010',
    domain: 1,
    term: 'systemd targets',
    definition:
      'Replacements for runlevels. multi-user.target = networked text mode (old runlevel 3). graphical.target = desktop (5). rescue.target = single user. emergency.target = minimal shell.',
  },
  {
    id: 'lxplus-fc-011',
    domain: 1,
    term: 'df vs. du',
    definition:
      'df reports filesystem-level usage and free space. du reports space consumed by files and directories. A large gap between them usually means deleted-but-open files.',
  },
  {
    id: 'lxplus-fc-012',
    domain: 1,
    term: 'LVM layers',
    definition:
      'Physical volume (disk or partition) → volume group (pool) → logical volume (carved out and formatted). Allows resizing without repartitioning.',
  },
  {
    id: 'lxplus-fc-013',
    domain: 1,
    term: '/etc/fstab',
    definition:
      'Defines filesystems mounted at boot: device (ideally by UUID), mount point, type, options, dump, pass. The nofail option prevents a missing disk from blocking boot.',
  },
  {
    id: 'lxplus-fc-014',
    domain: 1,
    term: 'Linux filesystem types',
    definition:
      'ext4 — mature general-purpose default. XFS — high performance at scale, RHEL default, cannot shrink. Btrfs/ZFS — snapshots and checksums built in. swap — paging space.',
  },
  {
    id: 'lxplus-fc-015',
    domain: 1,
    term: 'ip command',
    definition:
      'Modern iproute2 replacement for ifconfig and route. ip addr shows addresses, ip route shows the routing table, ip link manages interface state.',
  },
  {
    id: 'lxplus-fc-016',
    domain: 1,
    term: 'ss -tlnp',
    definition:
      'Lists TCP (-t) listening (-l) sockets numerically (-n) with owning processes (-p). The fastest way to see what is listening and on which address.',
  },
  {
    id: 'lxplus-fc-017',
    domain: 1,
    term: '/etc/passwd vs. /etc/shadow',
    definition:
      '/etc/passwd holds account attributes (UID, GID, home, shell) and is world-readable. /etc/shadow holds password hashes and aging data, readable only by root.',
  },
  {
    id: 'lxplus-fc-018',
    domain: 1,
    term: 'usermod -aG',
    definition:
      'Appends a supplementary group. Omitting -a replaces every supplementary group the user has — the classic way to accidentally remove someone’s sudo access.',
  },
  {
    id: 'lxplus-fc-019',
    domain: 1,
    term: 'cron field order',
    definition:
      'minute hour day-of-month month day-of-week. "0 3 * * 0" runs at 03:00 on Sunday. Special strings include @daily, @reboot, and @hourly.',
  },
  {
    id: 'lxplus-fc-020',
    domain: 1,
    term: 'Filesystem Hierarchy',
    definition:
      '/etc configuration, /var logs and variable data, /home users, /usr installed software, /opt add-on packages, /proc and /sys kernel interfaces, /tmp temporary files.',
  },

  // ─── DOMAIN 2: SECURITY ──────────────────────────────────────────────────

  {
    id: 'lxplus-fc-021',
    domain: 2,
    term: 'SSH key authentication',
    definition:
      'The private key stays on the client; the public key goes in ~/.ssh/authorized_keys on the server. Setting PasswordAuthentication no removes brute-forcing as a threat entirely.',
  },
  {
    id: 'lxplus-fc-022',
    domain: 2,
    term: 'SSH file roles',
    definition:
      '~/.ssh/id_rsa — client private key (mode 600). ~/.ssh/id_rsa.pub — its public half. ~/.ssh/authorized_keys — keys allowed to log into this account. ~/.ssh/known_hosts — server keys the client has accepted.',
  },
  {
    id: 'lxplus-fc-023',
    domain: 2,
    term: 'sshd hardening',
    definition:
      'PermitRootLogin no, PasswordAuthentication no, key-based auth only, AllowUsers or AllowGroups to limit accounts, and fail2ban or equivalent to throttle abuse.',
  },
  {
    id: 'lxplus-fc-024',
    domain: 2,
    term: 'visudo',
    definition:
      'The only safe way to edit sudoers — it locks the file and validates syntax before saving. A syntax error saved directly can lock out every administrator.',
  },
  {
    id: 'lxplus-fc-025',
    domain: 2,
    term: 'SELinux modes',
    definition:
      'Enforcing — policy is applied and violations blocked. Permissive — violations logged only, useful for diagnosis. Disabled — off entirely. getenforce reports, setenforce toggles at runtime.',
  },
  {
    id: 'lxplus-fc-026',
    domain: 2,
    term: 'SELinux contexts',
    definition:
      'Every file and process carries a security context. Files moved rather than copied often keep the wrong context; restorecon resets to policy defaults and chcon sets one manually.',
  },
  {
    id: 'lxplus-fc-027',
    domain: 2,
    term: 'AppArmor',
    definition:
      'Path-based mandatory access control used by Ubuntu and SUSE. Profiles confine what a program may access, serving the same purpose as SELinux with a different model.',
  },
  {
    id: 'lxplus-fc-028',
    domain: 2,
    term: 'firewalld',
    definition:
      'Zone-based firewall front end common on RHEL-family systems. Changes need --permanent plus --reload to survive a restart; without --permanent they are runtime only.',
  },
  {
    id: 'lxplus-fc-029',
    domain: 2,
    term: 'ufw',
    definition:
      'Uncomplicated Firewall, Ubuntu’s default front end. ufw allow 22/tcp, ufw enable, ufw status verbose cover most day-to-day needs.',
  },
  {
    id: 'lxplus-fc-030',
    domain: 2,
    term: 'iptables vs. nftables',
    definition:
      'iptables is the legacy packet filter interface; nftables is its modern replacement with unified syntax. Both are front ends to kernel netfilter.',
  },
  {
    id: 'lxplus-fc-031',
    domain: 2,
    term: 'Private key protection',
    definition:
      'Private keys (.key) must be mode 600 and never shared or transmitted. Certificates (.crt) and CSRs are public by nature. A leaked private key invalidates the certificate.',
  },
  {
    id: 'lxplus-fc-032',
    domain: 2,
    term: 'PAM',
    definition:
      'Pluggable Authentication Modules — a modular framework letting administrators define authentication, account, session, and password policy without changing applications.',
  },
  {
    id: 'lxplus-fc-033',
    domain: 2,
    term: 'chattr +i (immutable)',
    definition:
      'Sets the immutable attribute so a file cannot be modified, renamed, or deleted — even by root — until cleared with chattr -i. lsattr displays current attributes.',
  },
  {
    id: 'lxplus-fc-034',
    domain: 2,
    term: 'Authentication logs',
    definition:
      '/var/log/auth.log on Debian and Ubuntu, /var/log/secure on RHEL-family systems. Both are also queryable through journalctl on systemd hosts.',
  },
  {
    id: 'lxplus-fc-035',
    domain: 2,
    term: 'Access control lists (ACLs)',
    definition:
      'Per-user and per-group permissions beyond owner/group/other. setfacl -m u:bob:r file grants one user access; getfacl displays the full list.',
  },
  {
    id: 'lxplus-fc-036',
    domain: 2,
    term: 'Least privilege on Linux',
    definition:
      'Run services as dedicated unprivileged accounts, grant sudo for specific commands rather than blanket ALL, and avoid logging in as root directly.',
  },

  // ─── DOMAIN 3: SCRIPTING, CONTAINERS, AND AUTOMATION ─────────────────────

  {
    id: 'lxplus-fc-037',
    domain: 3,
    term: 'Shebang',
    definition:
      'First line such as #!/bin/bash specifying the interpreter for the script. Without it, behavior depends on whichever shell invokes the file.',
  },
  {
    id: 'lxplus-fc-038',
    domain: 3,
    term: 'Special shell variables',
    definition:
      '$? exit status of the last command (0 = success). $$ current PID. $# argument count. $0 script name. $1..$9 positional arguments. $@ all arguments.',
  },
  {
    id: 'lxplus-fc-039',
    domain: 3,
    term: 'Redirection operators',
    definition:
      '> overwrite stdout, >> append stdout, 2> stderr, &> both streams, < read from a file, | pipe one command’s output into another.',
  },
  {
    id: 'lxplus-fc-040',
    domain: 3,
    term: 'grep',
    definition:
      'Searches text for patterns. -i ignores case, -r recurses directories, -v inverts the match, -n shows line numbers, -E enables extended regular expressions.',
  },
  {
    id: 'lxplus-fc-041',
    domain: 3,
    term: 'sed',
    definition:
      "Stream editor. sed 's/old/new/g' file substitutes every occurrence per line; -i edits in place. sed -n '5p' prints only line 5.",
  },
  {
    id: 'lxplus-fc-042',
    domain: 3,
    term: 'awk',
    definition:
      "Field-oriented text processor. awk '{print $3}' prints the third whitespace-separated field; -F sets a different delimiter.",
  },
  {
    id: 'lxplus-fc-043',
    domain: 3,
    term: 'Image vs. container',
    definition:
      'An image is the immutable template. A container is a running instance of it. Changes inside a container are lost on removal unless written to a volume.',
  },
  {
    id: 'lxplus-fc-044',
    domain: 3,
    term: 'Container volumes',
    definition:
      'Storage mounted from outside the container’s writable layer so data survives removal and recreation. Containers themselves are ephemeral by design.',
  },
  {
    id: 'lxplus-fc-045',
    domain: 3,
    term: 'Podman vs. Docker',
    definition:
      'Podman is daemonless and rootless by default, reducing the impact of a container escape. Docker uses a persistent daemon that traditionally runs as root. Both use OCI images.',
  },
  {
    id: 'lxplus-fc-046',
    domain: 3,
    term: 'Dockerfile / Containerfile',
    definition:
      'Declarative build recipe: FROM sets the base image, RUN executes build steps, COPY adds files, EXPOSE documents ports, CMD or ENTRYPOINT defines what runs.',
  },
  {
    id: 'lxplus-fc-047',
    domain: 3,
    term: 'git basics',
    definition:
      'clone copies a repository, add stages changes, commit records them, push uploads, fetch downloads without merging, pull fetches and merges, branch and merge manage parallel work.',
  },
  {
    id: 'lxplus-fc-048',
    domain: 3,
    term: 'Idempotency',
    definition:
      'Running an operation repeatedly yields the same end state as running it once. The property that makes configuration management safe to reapply continuously.',
  },
  {
    id: 'lxplus-fc-049',
    domain: 3,
    term: 'Ansible',
    definition:
      'Agentless configuration management driven over SSH. Playbooks written in YAML describe desired state; inventory files list the hosts they apply to.',
  },
  {
    id: 'lxplus-fc-050',
    domain: 3,
    term: 'Shell loops and conditionals',
    definition:
      'for iterates a list, while repeats on a condition, until repeats until a condition is true, if/elif/else branches, case matches patterns against one value.',
  },
  {
    id: 'lxplus-fc-051',
    domain: 3,
    term: 'Environment variables',
    definition:
      'export VAR=value makes a variable available to child processes. env lists the environment; PATH determines where the shell looks for executables.',
  },

  // ─── DOMAIN 4: TROUBLESHOOTING ───────────────────────────────────────────

  {
    id: 'lxplus-fc-052',
    domain: 4,
    term: 'Deleted-but-open files',
    definition:
      'df shows a full filesystem while du accounts for far less because a process still holds a deleted file open. Find with lsof +L1; space returns when the process closes it or restarts.',
  },
  {
    id: 'lxplus-fc-053',
    domain: 4,
    term: 'Inode exhaustion',
    definition:
      '"No space left on device" with free blocks in df means the inode table is full, typically from huge numbers of tiny files. Check with df -i.',
  },
  {
    id: 'lxplus-fc-054',
    domain: 4,
    term: 'I/O wait (wa)',
    definition:
      'Percentage of time the CPU is idle waiting on storage. Sustained high wa means a disk bottleneck, not a CPU shortage. Investigate with iostat or iotop.',
  },
  {
    id: 'lxplus-fc-055',
    domain: 4,
    term: 'Load average',
    definition:
      'Runnable plus uninterruptible processes averaged over 1, 5, and 15 minutes. Compare against core count — a load of 4 is healthy on 8 cores and severe on 1.',
  },
  {
    id: 'lxplus-fc-056',
    domain: 4,
    term: 'OOM killer',
    definition:
      'Kernel mechanism that terminates processes when memory is exhausted and cannot be reclaimed. Evidence appears in dmesg and the journal.',
  },
  {
    id: 'lxplus-fc-057',
    domain: 4,
    term: 'Swap thrashing',
    definition:
      'Constant paging between RAM and swap when the working set exceeds physical memory. Symptoms are high disk activity with poor responsiveness despite modest CPU use.',
  },
  {
    id: 'lxplus-fc-058',
    domain: 4,
    term: 'Default route troubleshooting',
    definition:
      'Names resolve but nothing is reachable → check ip route for a missing or wrong default gateway. Nothing resolves but IPs work → check DNS in /etc/resolv.conf.',
  },
  {
    id: 'lxplus-fc-059',
    domain: 4,
    term: 'Works locally, not remotely',
    definition:
      'Almost always a listener bound to 127.0.0.1 instead of 0.0.0.0 (check ss -tlnp) or a firewall rule blocking the port. Two checks resolve most cases.',
  },
  {
    id: 'lxplus-fc-060',
    domain: 4,
    term: 'Boot failure from fstab',
    definition:
      'systemd halts boot when a required fstab entry cannot mount, dropping to emergency mode. Add nofail to non-critical mounts and reference devices by UUID.',
  },
  {
    id: 'lxplus-fc-061',
    domain: 4,
    term: 'Failed unit diagnosis',
    definition:
      'systemctl status <unit> for the summary and exit code, then journalctl -u <unit> -b for the messages leading up to the failure. That pair resolves most unit problems.',
  },
  {
    id: 'lxplus-fc-062',
    domain: 4,
    term: 'Signals',
    definition:
      'SIGTERM (15) is the default from kill and can be trapped for graceful shutdown. SIGKILL (9) cannot be caught — a last resort. SIGHUP (1) commonly triggers a config reload.',
  },
  {
    id: 'lxplus-fc-063',
    domain: 4,
    term: 'dmesg',
    definition:
      'Prints the kernel ring buffer — device detection, driver errors, filesystem problems, OOM kills. journalctl -k gives the same view on systemd systems.',
  },
  {
    id: 'lxplus-fc-064',
    domain: 4,
    term: 'Permission denied on a script',
    definition:
      'Mode 644 grants read and write but not execute. chmod +x adds the execute bit so the script can be run directly rather than passed to an interpreter.',
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
