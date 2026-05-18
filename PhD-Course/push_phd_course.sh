#!/usr/bin/env bash
set -euo pipefail

repo_path="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

cd "$repo_path"

git add README.md push_phd_course.sh book .github/workflows/call-deploy-book.yml requirements.txt
git commit -m "Auto-sync: $(date '+%Y-%m-%d %H:%M:%S')"
git push origin main
