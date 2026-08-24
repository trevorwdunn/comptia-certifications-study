#!/usr/bin/env bash
#
# Build and publish the site to Cloudflare Pages.
#
# The Pages project is a DIRECT UPLOAD project — it is not connected to GitHub,
# so pushing to main deploys nothing. This script is the deploy.
#
# Run it from anywhere:  ./deploy.sh
# Skip the confirmation: ./deploy.sh --yes
#
set -euo pipefail

PROJECT="comptia-certifications-study"
BRANCH="main"
DOMAINS=(certifications.trevorwdunn.us training.trevorwdunn.us)

cd "$(dirname "$0")"

bold() { printf '\033[1m%s\033[0m\n' "$*"; }
step() { printf '\n\033[1m==> %s\033[0m\n' "$*"; }
warn() { printf '\033[33m%s\033[0m\n' "$*"; }
die()  { printf '\033[31mERROR: %s\033[0m\n' "$*" >&2; exit 1; }

ASSUME_YES=0
[[ "${1:-}" == "--yes" || "${1:-}" == "-y" ]] && ASSUME_YES=1

# ---------------------------------------------------------------------------
step "Checking toolchain"

command -v node >/dev/null || die "node is not installed"
[[ -d node_modules ]] || { echo "node_modules missing — installing…"; npm install; }

WRANGLER="npx wrangler"
[[ -x node_modules/.bin/wrangler ]] && WRANGLER="node_modules/.bin/wrangler"
echo "node      $(node -v)"
echo "wrangler  $($WRANGLER --version 2>/dev/null | tail -1)"

# ---------------------------------------------------------------------------
step "Checking Cloudflare login"

if ! $WRANGLER whoami >/dev/null 2>&1; then
  warn "Not logged in. A browser window will open — approve the request there."
  $WRANGLER login || die "login failed"
fi

WHOAMI="$($WRANGLER whoami 2>&1)"
echo "$WHOAMI" | grep -iE "associated with the email|You are logged in" || true

# Every 32-char hex string in the whoami table is an account ID.
mapfile -t ACCOUNT_IDS < <(echo "$WHOAMI" | grep -oE '\b[0-9a-f]{32}\b' | sort -u)

if [[ "${CLOUDFLARE_ACCOUNT_ID:-}" != "" ]]; then
  echo "Using CLOUDFLARE_ACCOUNT_ID already set in the environment."
elif [[ ${#ACCOUNT_IDS[@]} -eq 1 ]]; then
  export CLOUDFLARE_ACCOUNT_ID="${ACCOUNT_IDS[0]}"
  echo "One account visible: $CLOUDFLARE_ACCOUNT_ID"
elif [[ ${#ACCOUNT_IDS[@]} -eq 0 ]]; then
  die "could not read an account ID from 'wrangler whoami'"
else
  # Wrangler refuses to guess between accounts, so choose deliberately. Set
  # CLOUDFLARE_ACCOUNT_ID in the environment to skip this prompt.
  warn "This login can see ${#ACCOUNT_IDS[@]} accounts:"
  echo "$WHOAMI" | grep -E '[0-9a-f]{32}'
  read -rp "Paste the account ID to deploy to: " CLOUDFLARE_ACCOUNT_ID
  export CLOUDFLARE_ACCOUNT_ID
fi

[[ -n "${CLOUDFLARE_ACCOUNT_ID:-}" ]] || die "no account ID resolved"

# ---------------------------------------------------------------------------
step "Validating content"
# Catches bad answer indices and duplicate IDs — failures the build cannot see.
node validate-content.mjs

# ---------------------------------------------------------------------------
step "Building"
rm -rf dist
npm run build

[[ -f dist/index.html   ]] || die "dist/index.html missing after build"
[[ -f dist/_redirects   ]] || die "dist/_redirects missing — SPA routing would break"
echo "dist/ built: $(find dist -type f | wc -l) files, $(du -sh dist | cut -f1)"

# ---------------------------------------------------------------------------
step "Ready to deploy"
bold "  project  $PROJECT"
bold "  branch   $BRANCH (production)"
bold "  account  $CLOUDFLARE_ACCOUNT_ID"
bold "  goes live on: ${DOMAINS[*]}"

if [[ $ASSUME_YES -eq 0 ]]; then
  read -rp $'\nPublish this to the live site? [y/N] ' reply
  [[ "$reply" =~ ^[Yy]$ ]] || { echo "Aborted. Nothing was deployed."; exit 0; }
fi

# ---------------------------------------------------------------------------
step "Deploying"
# Uploads dist/ and compiles functions/ into the Pages Functions bundle.
$WRANGLER pages deploy dist --project-name "$PROJECT" --branch "$BRANCH"

# ---------------------------------------------------------------------------
step "Verifying"
# The deploy returns before the edge has finished propagating, so poll rather
# than check once. Looks for a string that only exists in the new build.
MARKER="cstudy_theme"
for host in "${DOMAINS[@]}"; do
  printf '%-34s ' "$host"
  ok=0
  for _ in $(seq 1 10); do
    if curl -fsS --max-time 10 -H 'Cache-Control: no-cache' "https://$host/?cb=$RANDOM" \
         | grep -q "$MARKER"; then
      ok=1; break
    fi
    sleep 3
  done
  if [[ $ok -eq 1 ]]; then
    printf '\033[32mOK — serving the new build\033[0m\n'
  else
    printf '\033[31mstill serving the old build\033[0m\n'
  fi
done

printf '\n'
bold "Done. If a domain still shows the old build, wait a minute and re-check —"
bold "edge propagation can lag the deploy."
