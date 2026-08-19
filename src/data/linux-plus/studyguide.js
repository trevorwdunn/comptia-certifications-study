// Linux+ XK0-005 Study Guide
// Guides covering all 4 exam domains

export const studyGuide = [
  {
    id: 'lxplus-sg1',
    domain: 1,
    title: 'System Management',
    summary:
      'The largest domain at 32%: permissions, packages, systemd, storage and LVM, networking, users, and scheduling. Most of the commands you will be asked about live here.',
    topics: [
      {
        id: 'lxplus-sg1-1',
        title: 'Permissions & Ownership',
        content: `Permissions are read (**4**), write (**2**), and execute (**1**), summed for each of owner, group, and other.

| Octal | Symbolic | Typical use |
|-------|----------|-------------|
| 755 | rwxr-xr-x | Directories, executables |
| 644 | rw-r--r-- | Regular files |
| 600 | rw------- | Private keys, secrets |
| 700 | rwx------ | Private directories |
| 777 | rwxrwxrwx | Almost always a mistake |

**Commands**

| Command | Purpose |
|---------|---------|
| chmod | Change permission bits |
| chown user:group | Change owner and group |
| chgrp | Change group only |
| umask | Default mask for new files (022 → 755/644) |

**Special permissions**
- **SUID** — executable runs as its owner. Powerful and risky
- **SGID** — on a directory, new files inherit the directory's group. The tool for shared team directories
- **Sticky bit** — on a world-writable directory such as /tmp, only the file's owner may delete or rename it

**Access control lists** extend beyond owner/group/other:

    setfacl -m u:bob:r report.txt
    getfacl report.txt

**Key exam points:**
- **SGID for group inheritance, sticky bit for deletion protection** — do not confuse them
- On a directory, the **execute bit means "may traverse"**
- Use an **ACL** to grant one extra user access rather than opening permissions to everyone`,
      },
      {
        id: 'lxplus-sg1-2',
        title: 'Package Management & systemd',
        content: `**Package managers by family**

| Family | High level | Low level |
|--------|------------|-----------|
| Debian / Ubuntu | apt | dpkg |
| RHEL / Fedora | dnf (formerly yum) | rpm |
| SUSE | zypper | rpm |

High-level tools resolve dependencies; **dpkg and rpm alone do not**.

**systemd essentials**

| Command | Effect |
|---------|--------|
| systemctl start / stop / restart | Act on the unit now |
| systemctl enable / disable | Control whether it starts at boot |
| systemctl enable --now | Enable and start together |
| systemctl status | Current state, recent log lines, exit code |
| systemctl daemon-reload | Reload unit files after editing them |

**Targets** replaced runlevels: **multi-user.target** (networked text mode), **graphical.target** (desktop), **rescue.target** (single user), **emergency.target** (minimal shell).

**journalctl** reads the journal: **-u** by unit, **-b** current boot, **-f** follow, **-p err** by priority, **--since "1 hour ago"**.

**Key exam points:**
- **enable ≠ start** — enable affects boot, start affects now
- Edit a unit file and you must **daemon-reload** before restarting
- **journalctl -u <unit> -b** is the fastest path to a failure's cause`,
      },
      {
        id: 'lxplus-sg1-3',
        title: 'Storage, Filesystems & LVM',
        content: `**Inspecting storage**

| Command | Shows |
|---------|-------|
| df -h | Filesystem usage and free space |
| df -i | Inode usage |
| du -sh dir | Space consumed by a directory |
| lsblk | Block devices and mount points |
| blkid | UUIDs and filesystem types |

**LVM layering**

    physical volume (disk/partition)
        → volume group (pool)
            → logical volume (formatted, mounted)

LVM allows volumes to be resized without repartitioning, and supports snapshots.

**Filesystem types**
- **ext4** — mature, general purpose, shrinkable
- **XFS** — high performance at scale, RHEL default, **cannot be shrunk**
- **Btrfs / ZFS** — built-in snapshots and checksums
- **swap** — paging space, not a normal filesystem

**/etc/fstab fields:** device (prefer UUID), mount point, type, options, dump, pass. The **nofail** option keeps a missing non-critical disk from blocking boot.

**Key exam points:**
- **PV → VG → LV** is the order, and it is regularly tested
- **XFS cannot shrink** — plan sizing accordingly
- Reference devices **by UUID** in fstab; device names can change between boots`,
      },
      {
        id: 'lxplus-sg1-4',
        title: 'Networking, Users & Scheduling',
        content: `**Networking commands**

| Command | Purpose |
|---------|---------|
| ip addr | Show or set interface addresses |
| ip route | Show or set the routing table |
| ip link set eth0 up | Bring an interface up or down |
| ss -tlnp | Listening TCP sockets with owning processes |
| dig / host | DNS lookups |
| nmcli | NetworkManager configuration |

**Users and groups**

| File | Contents |
|------|----------|
| /etc/passwd | UID, GID, home directory, login shell (world-readable) |
| /etc/shadow | Password hashes and aging (root only) |
| /etc/group | Group definitions and members |

Use **useradd** / **usermod** / **userdel**, and remember **usermod -aG** — omitting **-a** wipes every existing supplementary group.

**Scheduling**
- **cron fields:** minute, hour, day-of-month, month, day-of-week
- "0 3 * * 0" runs at 03:00 on Sunday
- **systemd timers** are the modern alternative, with better logging and dependency handling
- **at** schedules a one-off job

**Key exam points:**
- **ip has replaced ifconfig**; **ss has replaced netstat**
- **usermod -aG** — the missing -a is a classic self-inflicted lockout
- Know the **cron field order** cold; day-of-week 0 is Sunday`,
      },
    ],
  },

  {
    id: 'lxplus-sg2',
    domain: 2,
    title: 'Security',
    summary:
      'Hardening SSH, controlling privilege escalation, mandatory access control with SELinux and AppArmor, firewalls, and protecting keys and logs.',
    topics: [
      {
        id: 'lxplus-sg2-1',
        title: 'SSH & Remote Access',
        content: `**Key-based authentication** removes the guessable secret entirely:

    ssh-keygen -t ed25519
    ssh-copy-id user@host

| File | Role |
|------|------|
| ~/.ssh/id_ed25519 | Client private key — mode 600, never shared |
| ~/.ssh/id_ed25519.pub | Public half, safe to distribute |
| ~/.ssh/authorized_keys | Public keys permitted to log into this account |
| ~/.ssh/known_hosts | Server keys the client has accepted |

**Hardening /etc/ssh/sshd_config**
- **PermitRootLogin no**
- **PasswordAuthentication no** once keys are working
- **AllowUsers** or **AllowGroups** to restrict who may connect
- Rate-limit repeated failures with fail2ban or equivalent

**Key exam points:**
- **Disabling password authentication beats changing the port** — the port change only reduces scan noise
- The **private key never leaves the client**
- SSH is picky about permissions: **~/.ssh 700, authorized_keys 600**, or it silently refuses the key`,
      },
      {
        id: 'lxplus-sg2-2',
        title: 'Privilege Escalation & PAM',
        content: `**sudo** grants specific elevated rights with an audit trail, which is why direct root logins are discouraged.

- Always edit with **visudo** — it validates syntax and locks the file
- Prefer per-command grants over blanket **ALL=(ALL) ALL**
- Drop-in files under **/etc/sudoers.d/** keep changes modular
- sudo activity is logged to the authentication log

**PAM (Pluggable Authentication Modules)** provides a modular framework for authentication policy, organized into four management groups:

| Group | Governs |
|-------|---------|
| auth | Proving identity |
| account | Whether the account may be used (expiry, time restrictions) |
| password | Password change rules and complexity |
| session | Setup and teardown around a login |

**Key exam points:**
- **visudo is the only safe editor for sudoers** — a saved syntax error locks everyone out
- PAM changes **apply across applications** without modifying each one
- **Least privilege**: services run as dedicated unprivileged accounts, not root`,
      },
      {
        id: 'lxplus-sg2-3',
        title: 'SELinux & AppArmor',
        content: `Mandatory access control constrains what a process may do **in addition to** Unix permissions. Correct file permissions therefore do not guarantee access.

**SELinux modes**

| Mode | Behavior |
|------|----------|
| Enforcing | Policy applied, violations blocked and logged |
| Permissive | Violations logged only — the diagnostic mode |
| Disabled | Off entirely |

    getenforce          # show current mode
    setenforce 0        # switch to permissive at runtime
    restorecon -Rv /srv # reset contexts to policy defaults

Every file and process carries a **context**. Files that are **moved** rather than copied often retain a context from their old location, which is the classic cause of "permissions look right but access is denied."

**AppArmor** (Ubuntu, SUSE) achieves the same goal with **path-based profiles** rather than labels, and profiles can be set to enforce or complain mode.

**Key exam points:**
- **Correct Unix permissions plus denied access with SELinux enforcing = context problem**
- **Permissive mode is for diagnosis** — it logs what enforcing would have blocked
- **restorecon** fixes contexts; disabling SELinux is not a fix`,
      },
      {
        id: 'lxplus-sg2-4',
        title: 'Firewalls, Keys & Logs',
        content: `**Firewall front ends**

| Tool | Typical on | Notes |
|------|-----------|-------|
| firewalld | RHEL family | Zone-based; needs --permanent plus --reload |
| ufw | Ubuntu | Simple allow/deny syntax |
| nftables | Modern kernels | Successor to iptables |
| iptables | Legacy | Still widely seen |

    firewall-cmd --permanent --add-service=https
    firewall-cmd --reload

Omitting **--permanent** means the rule disappears at reload; using it *without* reloading means the running config is unchanged.

**Certificates and keys**
- **.key** — private, mode 600, never transmitted. A leak invalidates the certificate
- **.crt** — public certificate, safe to distribute
- **.csr** — certificate signing request sent to the CA

**File integrity and logs**
- **chattr +i** makes a file immutable even to root until cleared with **chattr -i**
- Authentication events: **/var/log/auth.log** (Debian) or **/var/log/secure** (RHEL)
- Centralize logs off the host so an intruder cannot simply erase them

**Key exam points:**
- **--permanent and --reload go together** in firewalld
- **Private keys are the crown jewels** — 600, root-owned, never copied around
- **Immutable files resist even root**, which surprises people mid-incident`,
      },
    ],
  },

  {
    id: 'lxplus-sg3',
    domain: 3,
    title: 'Scripting, Containers & Automation',
    summary:
      'Bash scripting fundamentals, the text-processing trio of grep/sed/awk, container concepts with Docker and Podman, version control, and configuration management.',
    topics: [
      {
        id: 'lxplus-sg3-1',
        title: 'Shell Scripting Fundamentals',
        content: `Every script starts with a **shebang** naming its interpreter:

    #!/bin/bash

**Special variables**

| Variable | Meaning |
|----------|---------|
| $? | Exit status of the last command (0 = success) |
| $$ | PID of the current shell |
| $# | Number of arguments |
| $0 | Script name |
| $1 … $9 | Positional arguments |
| $@ | All arguments |

**Redirection**

| Operator | Effect |
|----------|--------|
| > | Overwrite stdout to a file |
| >> | Append stdout |
| 2> | Redirect stderr |
| &> | Redirect both streams |
| \\| | Pipe stdout into another command |

**Control structures**

    for f in *.log; do
        gzip "$f"
    done

    if [ -f /etc/config ]; then
        echo "present"
    fi

**Key exam points:**
- **$? is the exit status**, and 0 means success — the reverse of most intuitions
- **&> captures both stdout and stderr**; a plain > misses errors
- Quote variables ("$f") so filenames containing spaces do not break the script`,
      },
      {
        id: 'lxplus-sg3-2',
        title: 'Text Processing: grep, sed & awk',
        content: `**grep** — find lines matching a pattern

| Flag | Effect |
|------|--------|
| -i | Case insensitive |
| -r | Recurse directories |
| -v | Invert — show non-matching lines |
| -n | Show line numbers |
| -E | Extended regular expressions |

**sed** — stream editing

    sed 's/dev/prod/g' file      # substitute every occurrence per line
    sed -i 's/dev/prod/g' file   # edit the file in place
    sed -n '5p' file             # print only line 5

**awk** — field-oriented processing

    awk '{print $3}' file            # third whitespace-separated field
    awk -F: '{print $1}' /etc/passwd # split on colons instead

**Key exam points:**
- **grep finds, sed edits, awk extracts fields** — match the tool to the verb in the question
- **sed needs -i to modify the file**; without it output only goes to the terminal
- The trailing **g** in a sed substitution replaces every match on the line, not just the first`,
      },
      {
        id: 'lxplus-sg3-3',
        title: 'Containers',
        content: `An **image** is an immutable template; a **container** is a running instance of one. Anything written inside a container is lost on removal unless it goes to a **volume**.

**Common operations**

    podman pull nginx:latest
    podman run -d --name web -p 8080:80 -v /srv/data:/data nginx
    podman ps
    podman logs web
    podman exec -it web /bin/sh

**Docker vs. Podman**

| | Docker | Podman |
|---|--------|--------|
| Daemon | Persistent, traditionally root | None |
| Rootless | Possible, not default | Default |
| Image format | OCI | OCI (interchangeable) |

**Containerfile / Dockerfile directives:** FROM (base image), RUN (build step), COPY (add files), EXPOSE (document a port), CMD or ENTRYPOINT (what runs).

**Key exam points:**
- **Containers are ephemeral** — persistent data belongs on a volume
- **Podman is daemonless and rootless by default**, which limits the blast radius of an escape
- Containers **share the host kernel**; they are not virtual machines`,
      },
      {
        id: 'lxplus-sg3-4',
        title: 'Version Control & Automation',
        content: `**git essentials**

| Command | Effect |
|---------|--------|
| git clone | Copy a repository locally |
| git add / commit | Stage and record changes |
| git push / pull | Upload / download and merge |
| git fetch | Download without merging |
| git branch / merge | Manage parallel lines of work |
| git log | Review history |

**Configuration management**

**Ansible** is agentless and drives hosts over SSH:
- **Playbooks** in YAML describe the desired state
- **Inventory** lists the hosts
- **Modules** perform the actual work

**Idempotency** is the central property: running a playbook repeatedly converges on the same state without making further changes. That is what makes reapplying configuration safe.

**Key exam points:**
- **fetch downloads, pull downloads and merges** — fetch first when you want to inspect
- **Ansible needs no agent**, only SSH and Python on the target
- **Idempotent operations can be re-run safely**, which is why declarative tooling is preferred over ad-hoc scripts`,
      },
    ],
  },

  {
    id: 'lxplus-sg4',
    domain: 4,
    title: 'Troubleshooting',
    summary:
      'At 28%, the second-largest domain. Storage and inode problems, CPU and memory pressure, network reachability, boot failures, and the systematic use of logs.',
    topics: [
      {
        id: 'lxplus-sg4-1',
        title: 'Storage Problems',
        content: `**Filesystem full, but du disagrees with df**

A deleted file still held open by a running process continues to occupy space until the last handle closes.

    lsof +L1        # list open files with zero links (deleted)

Restarting the holding process releases the space. Truncating the file (: > /proc/PID/fd/N) works when a restart is not possible.

**"No space left on device" while df shows free space**

The **inode table** is exhausted — typically from millions of tiny files.

    df -i           # inode usage per filesystem

**Read-only filesystem**

Usually the kernel remounting read-only after detecting errors. Check **dmesg** for I/O errors, then run a filesystem check on an unmounted volume.

**Key exam points:**
- **df/du mismatch = deleted-but-open file**, found with lsof +L1
- **Space free but writes fail = inode exhaustion**, checked with df -i
- A filesystem that flips read-only is a **hardware or corruption signal**, not a permissions problem`,
      },
      {
        id: 'lxplus-sg4-2',
        title: 'CPU & Memory Pressure',
        content: `**Reading top**

| Field | Meaning |
|-------|---------|
| us | User process time |
| sy | Kernel time |
| wa | **I/O wait** — CPU idle waiting on storage |
| ni | Time on niced processes |
| si / hi | Software / hardware interrupts |

**Load average** shows runnable plus uninterruptible processes over 1, 5, and 15 minutes. Interpret it against core count: 4.0 is comfortable on 8 cores and severe on 1.

**Memory**
- **free -h** shows used, free, and cached. Cached memory is available, not wasted
- Sustained **swap** activity means the working set exceeds RAM — thrashing
- The **OOM killer** terminates processes when memory cannot be reclaimed; evidence lands in dmesg and the journal

**Useful tools:** top, htop, vmstat, iostat, iotop, sar, ps aux --sort=-%mem

**Key exam points:**
- **High wa means a disk bottleneck**, not a CPU shortage
- **Cached memory is not a leak** — Linux uses free RAM for cache deliberately
- **OOM kills are a memory-sizing problem**, and the journal records exactly which process was chosen`,
      },
      {
        id: 'lxplus-sg4-3',
        title: 'Network Troubleshooting',
        content: `Work up the stack, and let the symptom narrow the layer:

| Symptom | Likely cause | Check |
|---------|--------------|-------|
| Nothing resolves, IPs work | DNS | /etc/resolv.conf, dig |
| Names resolve, nothing reachable | Routing | ip route — missing default gateway |
| Works on localhost, not remotely | Bind address or firewall | ss -tlnp, firewall rules |
| Intermittent loss | Physical or saturation | ping over time, interface error counters |

**Command sequence**

    ip addr             # do we have an address?
    ip route            # is there a default gateway?
    ping 8.8.8.8        # is anything reachable by IP?
    dig example.com     # does resolution work?
    ss -tlnp            # what is listening, and on which address?

**Key exam points:**
- **A service on 127.0.0.1 is invisible remotely** — bind to 0.0.0.0 or the specific address
- **Names failing but IPs working isolates DNS immediately**
- Always confirm the **firewall** before rebuilding anything`,
      },
      {
        id: 'lxplus-sg4-4',
        title: 'Boot, Service & Permission Failures',
        content: `**Boot failures**
- A bad **/etc/fstab** entry drops the system to emergency mode, because systemd will not proceed without a required mount. Add **nofail** to non-critical mounts
- GRUB problems present before any kernel messages appear
- Boot into **rescue.target** or a live environment to repair

**Service failures**

    systemctl status sshd        # state, exit code, recent lines
    journalctl -u sshd -b        # full messages for this boot
    systemctl cat sshd           # the effective unit file

**Permission failures**
- "Permission denied" running a script → missing **execute bit**, fixed with chmod +x
- Permissions look correct but access is refused → check **SELinux context** or an ACL
- A service cannot write its own directory → check **ownership**, not just the mode

**Signals**

| Signal | Number | Behavior |
|--------|--------|----------|
| SIGTERM | 15 | Default from kill; can be trapped for clean shutdown |
| SIGKILL | 9 | Cannot be caught — last resort |
| SIGHUP | 1 | Often triggers a configuration reload |

**Key exam points:**
- **status then journalctl -u** resolves most service failures
- **fstab typos block boot** — and nofail is the preventive measure
- **Try SIGTERM before SIGKILL**; killing with -9 skips cleanup and can corrupt state`,
      },
    ],
  },
];
