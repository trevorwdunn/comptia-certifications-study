// Linux+ XK0-005 Practice Questions
// Domains: 1=System Management, 2=Security,
//          3=Scripting, Containers, and Automation, 4=Troubleshooting

export const questions = [
  // ─── DOMAIN 1: SYSTEM MANAGEMENT ─────────────────────────────────────────

  {
    id: 'lxplus-q-001',
    domain: 1,
    topic: 'File Permissions',
    question: 'What permissions does the octal mode 755 grant?',
    options: [
      'Owner: read/write/execute; group and others: read/execute',
      'Owner: read/write; group and others: read only',
      'Owner: full; group: write; others: none',
      'Everyone: read/write/execute',
    ],
    correct: 0,
    explanation:
      'Each digit is the sum of read (4), write (2), and execute (1). 7 = rwx for the owner, and 5 = r-x for both group and others. This is the standard mode for directories and executables.',
  },
  {
    id: 'lxplus-q-002',
    domain: 1,
    topic: 'File Permissions',
    question:
      'Which command changes the owner of a file to the user "deploy" and the group to "www"?',
    options: [
      'chmod deploy:www file',
      'chown deploy:www file',
      'chgrp deploy:www file',
      'setfacl -u deploy -g www file',
    ],
    correct: 1,
    explanation:
      'chown sets ownership and accepts the user:group form. chmod changes permission bits, not ownership, and chgrp changes only the group.',
  },
  {
    id: 'lxplus-q-003',
    domain: 1,
    topic: 'Special Permissions',
    question:
      'A directory is shared by a team, and every file created inside it must inherit the directory’s group. Which special permission accomplishes this?',
    options: ['SUID', 'SGID', 'Sticky bit', 'Immutable attribute'],
    correct: 1,
    explanation:
      'SGID on a directory causes new files and subdirectories to inherit the directory’s group rather than the creator’s primary group. The sticky bit instead restricts deletion to file owners.',
  },
  {
    id: 'lxplus-q-004',
    domain: 1,
    topic: 'Special Permissions',
    question:
      'What does the sticky bit do when set on a world-writable directory such as /tmp?',
    options: [
      'Prevents any user from writing to the directory',
      'Allows only the file owner (or root) to delete or rename files within it',
      'Causes files to inherit the directory group',
      'Runs files with the owner’s privileges',
    ],
    correct: 1,
    explanation:
      'The sticky bit restricts deletion and renaming to each file’s owner, which is why users in /tmp cannot remove each other’s files despite the directory being world-writable.',
  },
  {
    id: 'lxplus-q-005',
    domain: 1,
    topic: 'Package Management',
    question:
      'Which command installs a package on a Debian or Ubuntu system, resolving dependencies?',
    options: ['rpm -i package', 'apt install package', 'yum localinstall package', 'dpkg -i package'],
    correct: 1,
    explanation:
      'apt is the high-level package manager for Debian-based distributions and resolves dependencies. dpkg installs a local .deb file but will not fetch dependencies for you.',
  },
  {
    id: 'lxplus-q-006',
    domain: 1,
    topic: 'Package Management',
    question:
      'Which package manager is native to Red Hat Enterprise Linux and Fedora?',
    options: ['apt', 'dnf', 'zypper', 'portage'],
    correct: 1,
    explanation:
      'dnf (the successor to yum) manages RPM packages on RHEL and Fedora. zypper is SUSE’s tool and portage belongs to Gentoo.',
  },
  {
    id: 'lxplus-q-007',
    domain: 1,
    topic: 'systemd',
    question:
      'Which command enables a service to start automatically at boot without starting it immediately?',
    options: [
      'systemctl start service',
      'systemctl enable service',
      'systemctl restart service',
      'systemctl status service',
    ],
    correct: 1,
    explanation:
      'enable creates the symlinks that start a unit at boot. start runs it now. To do both at once, use systemctl enable --now.',
  },
  {
    id: 'lxplus-q-008',
    domain: 1,
    topic: 'systemd',
    question: 'Which command displays logs for a specific systemd unit?',
    options: [
      'journalctl -u sshd',
      'systemctl logs sshd',
      'dmesg -u sshd',
      'tail /var/log/systemd',
    ],
    correct: 0,
    explanation:
      'journalctl reads the systemd journal, and -u filters by unit. Adding -f follows the log live and -b limits output to the current boot.',
  },
  {
    id: 'lxplus-q-009',
    domain: 1,
    topic: 'Storage',
    question:
      'Which command displays mounted filesystems along with their used and available space?',
    options: ['du -sh', 'df -h', 'lsblk -f', 'free -m'],
    correct: 1,
    explanation:
      'df reports filesystem-level usage, with -h giving human-readable units. du reports the size of directories, and free reports memory rather than disk.',
  },
  {
    id: 'lxplus-q-010',
    domain: 1,
    topic: 'Storage',
    question:
      'In LVM, what is the correct order of components from physical hardware to a usable filesystem?',
    options: [
      'Logical volume → volume group → physical volume',
      'Physical volume → volume group → logical volume',
      'Volume group → physical volume → logical volume',
      'Physical volume → logical volume → volume group',
    ],
    correct: 1,
    explanation:
      'Physical volumes (disks or partitions) are grouped into a volume group, from which logical volumes are carved out and then formatted with a filesystem.',
  },
  {
    id: 'lxplus-q-011',
    domain: 1,
    topic: 'Storage',
    question:
      'Which file defines filesystems to be mounted automatically at boot?',
    options: ['/etc/mtab', '/etc/fstab', '/proc/mounts', '/etc/mounts.conf'],
    correct: 1,
    explanation:
      '/etc/fstab lists filesystems, mount points, and options applied at boot. /etc/mtab and /proc/mounts show what is currently mounted, which is a different question.',
  },
  {
    id: 'lxplus-q-012',
    domain: 1,
    topic: 'Networking',
    question:
      'Which command displays and configures network interfaces on a modern Linux system?',
    options: ['ifconfig', 'ip addr', 'netstat -i', 'route -n'],
    correct: 1,
    explanation:
      'The ip command from iproute2 is the current standard; ip addr shows interface addresses. ifconfig is deprecated and often absent from minimal installations.',
  },
  {
    id: 'lxplus-q-013',
    domain: 1,
    topic: 'Networking',
    question:
      'Which command shows listening TCP ports and the processes bound to them?',
    options: ['ss -tlnp', 'ping -c 4 localhost', 'traceroute localhost', 'ip route show'],
    correct: 0,
    explanation:
      'ss -tlnp lists TCP (-t) listening (-l) sockets numerically (-n) with the owning process (-p). ss has replaced netstat on modern systems.',
  },
  {
    id: 'lxplus-q-014',
    domain: 1,
    topic: 'Users and Groups',
    question:
      'Which file stores local user account information such as UID, home directory, and login shell?',
    options: ['/etc/shadow', '/etc/passwd', '/etc/group', '/etc/login.defs'],
    correct: 1,
    explanation:
      '/etc/passwd holds account attributes and is world-readable. Password hashes live in /etc/shadow, which is readable only by root.',
  },
  {
    id: 'lxplus-q-015',
    domain: 1,
    topic: 'Users and Groups',
    question: 'Which command adds an existing user to a supplementary group without removing their current groups?',
    options: [
      'usermod -G developers alice',
      'usermod -aG developers alice',
      'groupadd developers alice',
      'gpasswd -d alice developers',
    ],
    correct: 1,
    explanation:
      'The -a (append) flag is essential. usermod -G without -a replaces all supplementary group memberships, which is a classic way to lock a user out of sudo.',
  },
  {
    id: 'lxplus-q-016',
    domain: 1,
    topic: 'Processes',
    question: 'Which command displays a real-time, interactive view of running processes?',
    options: ['ps aux', 'top', 'jobs', 'pstree'],
    correct: 1,
    explanation:
      'top refreshes continuously and allows interactive sorting and signaling. ps takes a single snapshot, and jobs lists only the current shell’s background jobs.',
  },
  {
    id: 'lxplus-q-017',
    domain: 1,
    topic: 'Boot Process',
    question:
      'Which systemd target corresponds most closely to a traditional multi-user, networked, non-graphical runlevel?',
    options: ['graphical.target', 'multi-user.target', 'rescue.target', 'emergency.target'],
    correct: 1,
    explanation:
      'multi-user.target provides a networked, multi-user, text-mode environment, equivalent to the old runlevel 3. graphical.target adds a desktop on top of it.',
  },
  {
    id: 'lxplus-q-018',
    domain: 1,
    topic: 'Scheduling',
    question: 'What does the crontab entry "0 3 * * 0 /usr/local/bin/backup.sh" do?',
    options: [
      'Runs the script every 3 hours',
      'Runs the script at 03:00 every Sunday',
      'Runs the script at 00:03 daily',
      'Runs the script on the third day of every month',
    ],
    correct: 1,
    explanation:
      'The fields are minute, hour, day of month, month, day of week. 0 3 * * 0 means minute 0 of hour 3, any day of month, any month, on day-of-week 0 — Sunday.',
  },

  // ─── DOMAIN 2: SECURITY ──────────────────────────────────────────────────

  {
    id: 'lxplus-q-019',
    domain: 2,
    topic: 'SSH',
    question:
      'Which sshd configuration change most effectively reduces exposure to password brute-force attacks?',
    options: [
      'Changing the SSH port to 2222',
      'Setting PermitRootLogin yes',
      'Setting PasswordAuthentication no and using key-based authentication',
      'Increasing MaxAuthTries',
    ],
    correct: 2,
    explanation:
      'Disabling password authentication in favor of keys removes the guessable secret entirely. Changing the port only reduces noise from untargeted scanning.',
  },
  {
    id: 'lxplus-q-020',
    domain: 2,
    topic: 'SSH',
    question:
      'Which file on the server holds the public keys permitted to log in as a given user?',
    options: [
      '~/.ssh/id_rsa',
      '~/.ssh/authorized_keys',
      '~/.ssh/known_hosts',
      '/etc/ssh/ssh_host_rsa_key',
    ],
    correct: 1,
    explanation:
      '~/.ssh/authorized_keys lists the public keys accepted for that account. known_hosts records server keys the client has seen, and id_rsa is a client private key.',
  },
  {
    id: 'lxplus-q-021',
    domain: 2,
    topic: 'sudo',
    question: 'What is the correct way to edit the sudoers file?',
    options: [
      'vi /etc/sudoers',
      'visudo',
      'nano /etc/sudoers.d/../sudoers',
      'sudoedit /etc/passwd',
    ],
    correct: 1,
    explanation:
      'visudo locks the file and validates syntax before saving. A syntax error introduced by editing directly can lock every administrator out of sudo.',
  },
  {
    id: 'lxplus-q-022',
    domain: 2,
    topic: 'SELinux',
    question:
      'Which command displays the current SELinux enforcement mode?',
    options: ['getenforce', 'setenforce 1', 'sestatus -b', 'semanage login -l'],
    correct: 0,
    explanation:
      'getenforce prints Enforcing, Permissive, or Disabled. setenforce changes the mode at runtime, and sestatus gives a fuller report.',
  },
  {
    id: 'lxplus-q-023',
    domain: 2,
    topic: 'SELinux',
    question:
      'A web server cannot read files that appear to have correct Unix permissions, and SELinux is enforcing. What is the most likely cause?',
    options: [
      'The files have an incorrect SELinux context',
      'The kernel needs to be recompiled',
      'The filesystem is mounted read-only',
      'The web server is running as root',
    ],
    correct: 0,
    explanation:
      'SELinux enforces type contexts in addition to Unix permissions. Files moved rather than copied often keep an unexpected context; restorecon resets them to policy defaults.',
  },
  {
    id: 'lxplus-q-024',
    domain: 2,
    topic: 'Firewalls',
    question:
      'Which command permanently allows HTTPS traffic through firewalld?',
    options: [
      'firewall-cmd --add-service=https',
      'firewall-cmd --permanent --add-service=https && firewall-cmd --reload',
      'iptables -A INPUT -p tcp --dport 443 -j ACCEPT',
      'ufw allow 443',
    ],
    correct: 1,
    explanation:
      'Without --permanent the rule is lost at reload or reboot, and --permanent alone does not affect the running configuration — hence the reload.',
  },
  {
    id: 'lxplus-q-025',
    domain: 2,
    topic: 'Firewalls',
    question: 'Which firewall front end is native to Ubuntu?',
    options: ['firewalld', 'ufw', 'nftables-cli', 'shorewall'],
    correct: 1,
    explanation:
      'ufw (Uncomplicated Firewall) is Ubuntu’s default front end to the kernel packet filter. firewalld is typical on RHEL-family systems.',
  },
  {
    id: 'lxplus-q-026',
    domain: 2,
    topic: 'Certificates',
    question:
      'Which file type should never be transmitted or stored with world-readable permissions?',
    options: [
      'A server public certificate (.crt)',
      'A private key (.key)',
      'A certificate signing request (.csr)',
      'A CA bundle',
    ],
    correct: 1,
    explanation:
      'The private key is the secret that proves identity; exposure compromises the certificate entirely. Private keys are typically mode 600 and owned by root.',
  },
  {
    id: 'lxplus-q-027',
    domain: 2,
    topic: 'Authentication',
    question: 'What is the role of PAM on a Linux system?',
    options: [
      'Managing package dependencies',
      'Providing a modular framework for authentication policy',
      'Partitioning storage devices',
      'Compiling kernel modules',
    ],
    correct: 1,
    explanation:
      'Pluggable Authentication Modules let administrators compose authentication, account, session, and password policy without modifying each application.',
  },
  {
    id: 'lxplus-q-028',
    domain: 2,
    topic: 'File Integrity',
    question:
      'Which command sets the immutable attribute so that even root cannot modify or delete a file until it is removed?',
    options: ['chmod 000 file', 'chattr +i file', 'setfacl -m u::--- file', 'chown root:root file'],
    correct: 1,
    explanation:
      'chattr +i sets the immutable attribute on supporting filesystems. The file cannot be modified, renamed, or deleted until the attribute is cleared with chattr -i.',
  },
  {
    id: 'lxplus-q-029',
    domain: 2,
    topic: 'Auditing',
    question:
      'Which log file typically records authentication events on a Debian-based system?',
    options: ['/var/log/auth.log', '/var/log/messages', '/var/log/dmesg', '/var/log/cron'],
    correct: 0,
    explanation:
      'Debian and Ubuntu write authentication events to /var/log/auth.log; RHEL-family systems use /var/log/secure. Both are also available through journalctl.',
  },
  {
    id: 'lxplus-q-030',
    domain: 2,
    topic: 'Access Control',
    question:
      'Which command grants a single additional user read access to a file without changing its group ownership?',
    options: [
      'chmod o+r file',
      'setfacl -m u:bob:r file',
      'usermod -aG filegroup bob',
      'chown bob file',
    ],
    correct: 1,
    explanation:
      'Access control lists grant per-user or per-group permissions beyond the traditional owner/group/other model. chmod o+r would expose the file to everyone.',
  },

  // ─── DOMAIN 3: SCRIPTING, CONTAINERS, AND AUTOMATION ─────────────────────

  {
    id: 'lxplus-q-031',
    domain: 3,
    topic: 'Shell Scripting',
    question: 'What is the purpose of the shebang line at the top of a script?',
    options: [
      'It comments out the first line',
      'It specifies the interpreter used to execute the script',
      'It sets the script’s permissions',
      'It defines environment variables',
    ],
    correct: 1,
    explanation:
      'A line such as #!/bin/bash tells the kernel which interpreter to invoke. Without it the script runs under whatever shell happens to call it, which may behave differently.',
  },
  {
    id: 'lxplus-q-032',
    domain: 3,
    topic: 'Shell Scripting',
    question: 'In a shell script, what does the variable $? contain?',
    options: [
      'The process ID of the current shell',
      'The exit status of the last command',
      'The number of arguments passed',
      'The name of the script',
    ],
    correct: 1,
    explanation:
      '$? holds the exit status of the previous command — 0 for success, non-zero for failure. $$ is the current PID, $# the argument count, and $0 the script name.',
  },
  {
    id: 'lxplus-q-033',
    domain: 3,
    topic: 'Shell Scripting',
    question:
      'Which redirection sends both standard output and standard error to a file, overwriting it?',
    options: [
      'command > file',
      'command 2> file',
      'command &> file',
      'command >> file',
    ],
    correct: 2,
    explanation:
      '&> redirects both streams in bash (equivalently > file 2>&1). A single > captures stdout only, and >> appends rather than overwrites.',
  },
  {
    id: 'lxplus-q-034',
    domain: 3,
    topic: 'Text Processing',
    question:
      'Which command replaces every occurrence of "dev" with "prod" in a file, editing it in place?',
    options: [
      "sed -i 's/dev/prod/g' file",
      "sed 's/dev/prod' file",
      "awk '{gsub(dev,prod)}' file",
      "grep -r 'dev' file",
    ],
    correct: 0,
    explanation:
      '-i edits in place, s/// substitutes, and the trailing g replaces every occurrence on each line rather than only the first.',
  },
  {
    id: 'lxplus-q-035',
    domain: 3,
    topic: 'Text Processing',
    question:
      'Which command prints the third whitespace-separated field of each line?',
    options: ["awk '{print $3}'", "cut -c3", "sed -n '3p'", "head -3"],
    correct: 0,
    explanation:
      'awk splits on whitespace by default and $3 is the third field. sed -n 3p prints the third line, and head -3 prints the first three lines.',
  },
  {
    id: 'lxplus-q-036',
    domain: 3,
    topic: 'Containers',
    question:
      'Which statement about container images and containers is correct?',
    options: [
      'An image is a running instance of a container',
      'A container is a running instance of an image',
      'Images and containers are the same thing',
      'A container persists all changes to its image automatically',
    ],
    correct: 1,
    explanation:
      'An image is the immutable template; a container is a running instance of it. Changes inside a container are lost when it is removed unless written to a volume.',
  },
  {
    id: 'lxplus-q-037',
    domain: 3,
    topic: 'Containers',
    question:
      'Which option makes container data survive the removal of the container?',
    options: [
      'Running the container with --rm',
      'Mounting a volume into the container',
      'Committing the container to a new tag on every write',
      'Increasing the container memory limit',
    ],
    correct: 1,
    explanation:
      'Volumes are stored outside the container’s writable layer and survive its removal. --rm does the opposite, deleting the container as soon as it exits.',
  },
  {
    id: 'lxplus-q-038',
    domain: 3,
    topic: 'Containers',
    question:
      'What is the primary difference between Podman and Docker in default configuration?',
    options: [
      'Podman can run containers rootless without a persistent daemon',
      'Podman cannot use OCI images',
      'Docker cannot map ports',
      'Podman requires a separate kernel module',
    ],
    correct: 0,
    explanation:
      'Podman is daemonless and supports rootless containers by default, which reduces the impact of a container escape. Both use the same OCI image format.',
  },
  {
    id: 'lxplus-q-039',
    domain: 3,
    topic: 'Version Control',
    question:
      'Which git command downloads changes from a remote and merges them into the current branch?',
    options: ['git fetch', 'git pull', 'git clone', 'git status'],
    correct: 1,
    explanation:
      'git pull is fetch followed by merge. git fetch downloads without merging, which is the safer option when you want to inspect changes first.',
  },
  {
    id: 'lxplus-q-040',
    domain: 3,
    topic: 'Automation',
    question:
      'What makes an automation task idempotent?',
    options: [
      'It runs faster on each subsequent execution',
      'Running it repeatedly produces the same end state as running it once',
      'It can only be run by root',
      'It requires no network access',
    ],
    correct: 1,
    explanation:
      'Idempotent operations converge on the desired state without causing additional changes on re-run, which is what makes configuration management safe to apply repeatedly.',
  },
  {
    id: 'lxplus-q-041',
    domain: 3,
    topic: 'Automation',
    question:
      'Which characteristic makes Ansible attractive for managing many Linux hosts?',
    options: [
      'It requires an agent installed on every managed node',
      'It is agentless and connects over SSH',
      'It only works with Red Hat systems',
      'It replaces the need for version control',
    ],
    correct: 1,
    explanation:
      'Ansible pushes configuration over SSH with no persistent agent, which lowers the barrier to managing existing fleets.',
  },
  {
    id: 'lxplus-q-042',
    domain: 3,
    topic: 'Shell Scripting',
    question:
      'Which construct iterates over every .log file in the current directory?',
    options: [
      'for f in *.log; do ... done',
      'while *.log; do ... done',
      'if *.log; then ... fi',
      'case *.log in ... esac',
    ],
    correct: 0,
    explanation:
      'A for loop over a glob is the standard idiom. while tests a condition, if branches once, and case matches patterns against a single value.',
  },

  // ─── DOMAIN 4: TROUBLESHOOTING ───────────────────────────────────────────

  {
    id: 'lxplus-q-043',
    domain: 4,
    topic: 'Disk Space',
    question:
      'df reports a filesystem at 100% but du on the mount point accounts for far less. What is the most likely cause?',
    options: [
      'The filesystem needs defragmenting',
      'A deleted file is still held open by a running process',
      'The disk is failing',
      'du always underreports by design',
    ],
    correct: 1,
    explanation:
      'Space is not released until the last file handle closes. lsof +L1 finds deleted-but-open files; restarting the holding process frees the space.',
  },
  {
    id: 'lxplus-q-044',
    domain: 4,
    topic: 'Disk Space',
    question:
      'A filesystem reports "No space left on device" but df shows free space available. What should be checked next?',
    options: [
      'Inode exhaustion with df -i',
      'The system clock',
      'The default gateway',
      'SELinux contexts',
    ],
    correct: 0,
    explanation:
      'A filesystem can exhaust its inode table while blocks remain free, typically from vast numbers of tiny files. df -i shows inode usage.',
  },
  {
    id: 'lxplus-q-045',
    domain: 4,
    topic: 'Performance',
    question:
      'Which metric in top most directly indicates that processes are waiting on disk?',
    options: ['us (user time)', 'sy (system time)', 'wa (I/O wait)', 'ni (nice time)'],
    correct: 2,
    explanation:
      'High I/O wait means the CPU is idle while waiting for storage to respond, pointing at a disk bottleneck rather than a CPU shortage.',
  },
  {
    id: 'lxplus-q-046',
    domain: 4,
    topic: 'Memory',
    question:
      'The OOM killer terminated a process. What does this indicate?',
    options: [
      'The system ran out of available memory and reclaimed it forcibly',
      'The process exceeded its file descriptor limit',
      'The disk became full',
      'The network connection dropped',
    ],
    correct: 0,
    explanation:
      'The out-of-memory killer terminates processes when memory is exhausted and cannot be reclaimed. Evidence appears in dmesg and the journal.',
  },
  {
    id: 'lxplus-q-047',
    domain: 4,
    topic: 'Networking',
    question:
      'A host resolves names correctly but cannot reach any external address. Which check is most relevant?',
    options: [
      'The default route with ip route',
      'The /etc/hosts file',
      'The DNS server in /etc/resolv.conf',
      'The system hostname',
    ],
    correct: 0,
    explanation:
      'Working name resolution proves DNS is fine, so the failure is in forwarding — most often a missing or wrong default gateway, shown by ip route.',
  },
  {
    id: 'lxplus-q-048',
    domain: 4,
    topic: 'Networking',
    question:
      'A service is running but unreachable from other hosts, while it responds correctly on localhost. What is the most likely cause?',
    options: [
      'The service is bound to 127.0.0.1 only, or a firewall is blocking the port',
      'DNS is misconfigured',
      'The disk is full',
      'The service needs a reboot',
    ],
    correct: 0,
    explanation:
      'Working locally but not remotely points to either a listener bound to loopback (visible in ss -tlnp) or a firewall rule blocking the port.',
  },
  {
    id: 'lxplus-q-049',
    domain: 4,
    topic: 'Boot Issues',
    question:
      'A server fails to boot after an /etc/fstab edit and drops to emergency mode. What is the most likely cause?',
    options: [
      'An invalid or unavailable filesystem entry blocking the mount',
      'A corrupted kernel image',
      'An expired SSL certificate',
      'A missing DNS record',
    ],
    correct: 0,
    explanation:
      'systemd blocks boot when a required fstab entry cannot be mounted. Adding the nofail option to non-critical mounts prevents a missing disk from halting the boot.',
  },
  {
    id: 'lxplus-q-050',
    domain: 4,
    topic: 'Permissions',
    question:
      'A user receives "Permission denied" executing a script they own with mode 644. What is the fix?',
    options: [
      'chmod +x on the script',
      'chown the script to root',
      'Move the script to /tmp',
      'Add the user to the wheel group',
    ],
    correct: 0,
    explanation:
      'Mode 644 grants read and write but no execute bit. Adding execute permission allows the script to run directly rather than only via an explicit interpreter call.',
  },
  {
    id: 'lxplus-q-051',
    domain: 4,
    topic: 'Services',
    question:
      'A systemd service fails to start. Which command sequence best identifies the cause?',
    options: [
      'systemctl status service, then journalctl -u service -b',
      'ps aux | grep service',
      'reboot and retry',
      'chmod 777 on the service binary',
    ],
    correct: 0,
    explanation:
      'status shows the failure summary and exit code; journalctl -u for the current boot shows the messages leading to it. That pair resolves most unit failures.',
  },
  {
    id: 'lxplus-q-052',
    domain: 4,
    topic: 'Processes',
    question:
      'Which signal does kill send by default, allowing a process to terminate gracefully?',
    options: ['SIGKILL (9)', 'SIGTERM (15)', 'SIGHUP (1)', 'SIGSTOP (19)'],
    correct: 1,
    explanation:
      'kill sends SIGTERM by default, which a process can trap to clean up. SIGKILL cannot be caught or ignored and should be the last resort.',
  },
  {
    id: 'lxplus-q-053',
    domain: 4,
    topic: 'Hardware',
    question:
      'Which command displays kernel ring buffer messages, useful for diagnosing hardware and driver problems?',
    options: ['dmesg', 'lsof', 'df -h', 'uptime'],
    correct: 0,
    explanation:
      'dmesg prints kernel messages including device detection, driver errors, and OOM kills. journalctl -k shows the same information on systemd systems.',
  },
  {
    id: 'lxplus-q-054',
    domain: 4,
    topic: 'Performance',
    question:
      'Which command identifies which process is consuming the most memory right now?',
    options: [
      'top sorted by memory, or ps aux --sort=-%mem',
      'df -h',
      'ip addr',
      'crontab -l',
    ],
    correct: 0,
    explanation:
      'Both approaches rank processes by resident memory. df reports disk usage, which is a different resource entirely.',
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
