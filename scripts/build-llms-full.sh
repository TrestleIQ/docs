#!/usr/bin/env bash
# Regenerate llms-full.txt from the current repo content.
#
# llms-full.txt is the one-file aggregated reference for LLM agents — it
# concatenates the AI integration guide, product matrix, taxonomy, endpoint
# catalog, examples index, all four user-facing guides, and pointers to
# OpenAPI specs and fixtures.
#
# Run from the repo root:
#   bash scripts/build-llms-full.sh
#
# The output `llms-full.txt` is intended to be served at
# https://docs.trestleiq.com/llms-full.txt and is committed to the repo.

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_ROOT"

OUT="llms-full.txt"
RAW="https://raw.githubusercontent.com/TrestleIQ/docs/main"

{
  echo "# Trestle Identity APIs — Full LLM Reference"
  echo
  echo "> One-file aggregated reference for AI agents. Includes guides, AI integration notes, product matrix, taxonomy, and pointers to OpenAPI specs and fixtures."
  echo
  echo "Last assembled from the repository at \`https://github.com/TrestleIQ/docs\` (branch: main)."
  echo
  echo "---"
  echo
  echo "## 1. Start-Here Guide (ai/LLMS.md)"
  echo
  sed '/^---$/,/^---$/d' ai/LLMS.md
  echo
  echo "---"
  echo
  echo "## 2. Product Matrix (ai/PRODUCT_MATRIX.md)"
  echo
  sed '/^---$/,/^---$/d' ai/PRODUCT_MATRIX.md
  echo
  echo "---"
  echo
  echo "## 3. Taxonomy (ai/TAXONOMY.json)"
  echo
  echo '```json'
  cat ai/TAXONOMY.json
  echo
  echo '```'
  echo
  echo "---"
  echo
  echo "## 4. API Catalog (ai/API_CATALOG.json)"
  echo
  echo '```json'
  cat ai/API_CATALOG.json
  echo
  echo '```'
  echo
  echo "---"
  echo
  echo "## 5. Examples Index (ai/EXAMPLES_INDEX.json)"
  echo
  echo '```json'
  cat ai/EXAMPLES_INDEX.json
  echo
  echo '```'
  echo
  echo "---"
  echo
  echo "## 6. Guides"
  echo
  for g in guides/overview.mdx guides/authentication.mdx guides/rate-limits.mdx guides/errors.mdx; do
    echo "### $(basename "$g" .mdx)"
    echo
    awk '/^---$/{c++; next} c>=2 || c==0' "$g"
    echo
  done
  echo "---"
  echo
  echo "## 7. OpenAPI specs (fetch raw YAML for each product)"
  echo
  for f in openapi/*.openapi.yaml; do
    name=$(basename "$f" .openapi.yaml)
    echo "- $name: $RAW/$f"
  done
  echo
  echo "Shared components: https://github.com/TrestleIQ/docs/tree/main/openapi/common"
  echo
  echo "---"
  echo
  echo "## 8. Fixtures (canonical request/response JSON per product)"
  echo
  for d in fixtures/*/; do
    p=$(basename "$d")
    echo "### $p"
    for f in "$d"*.json; do
      echo "- $(basename "$f"): $RAW/$f"
    done
    echo
  done
  echo "---"
  echo
  echo "## 9. Code samples"
  echo
  echo "- curl: https://github.com/TrestleIQ/docs/tree/main/examples/curl"
  echo "- JavaScript: https://github.com/TrestleIQ/docs/tree/main/examples/javascript"
  echo "- Python: https://github.com/TrestleIQ/docs/tree/main/examples/python"
  echo
  echo "---"
  echo
  echo "## 10. Changelog (ai/CHANGELOG_AI.md)"
  echo
  cat ai/CHANGELOG_AI.md
  echo
} > "$OUT"

lines=$(wc -l < "$OUT")
bytes=$(wc -c < "$OUT")
echo "Wrote $OUT ($lines lines, $bytes bytes)"
