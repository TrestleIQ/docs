# Deep Architecture — Trestle Docs

Context for changes that touch cross-cutting structure. Read `CLAUDE.md` first for day-to-day conventions.

## Error response model (TRES-4973)

AWS API Gateway returns structured JSON for `4XX`/`429` errors:

```json
{ "errorCode": "...", "message": "...", "hint": "..." }
```

| errorCode | Status | Fires when |
|---|---|---|
| `INVALID_API_KEY` | 403 | Key invalid, revoked, **or missing** (AWS limitation — see below) |
| `MISSING_API_KEY` | 403 | Non-existent route or unsupported HTTP method only |
| `FORBIDDEN` | 403 (default 4XX) | Key disabled, expired, or no product access |
| `RATE_LIMIT_EXCEEDED` | 429 | QPS limit |
| `QUOTA_EXCEEDED` | 429 | Billing-period quota |

AWS limitation: a missing `x-api-key` header fires `INVALID_API_KEY`, not
`MISSING_API_KEY` — Gateway cannot distinguish missing from invalid keys.
`MISSING_AUTHENTICATION_TOKEN` (rendered as `MISSING_API_KEY`) only fires for
unknown routes/methods. Document actual behavior, not the aspirational mapping.

`400` errors come from the API backend (validation layer), not the gateway —
different body shape, see `fixtures/<product>/response.error.400.json`.

### Documentation layering

1. `guides/errors.mdx` — full reference: format section, errorCode table, per-status detail. Single source of truth.
2. `snippets/error-responses.mdx` — lean summary embedded at the bottom of every API reference page via `<ErrorResponses />` import. Text-only (no JSON examples by team preference); links to the guide.
3. `fixtures/<product>/response.error.*.json` — canonical bodies, identical across products (gateway-level). Five per product. Indexed in `ai/EXAMPLES_INDEX.json` and listed in `ai/LLMS.md` — sync both when fixtures change.

## Custom scripts

`scripts/*.js` are injected via `docs.json` `headTags`. Mintlify **inlines the
file content into page HTML at build time** — the script URL returning 404 in
production is expected and harmless. Current scripts:

- `scripts/leadfeeder.js` — Dealfront/Leadfeeder visitor tracking (owner: marketing, Joe Qiu). Do not remove without checking.
- `scripts/jsonld.js` — schema.org JSON-LD structured data injection.

## Deployment

- Merge to `main` auto-deploys https://docs.trestleiq.com via Mintlify GitHub integration. There is no staging gate — treat every main merge as a production release.
- Normal flow: feature branch → `devlopment` → `main`.

## Git history note (June 2026)

`operations/` was purged from git history with `git filter-repo` (all commit
SHAs changed). Every branch was force-pushed with rewritten history **except
`main`** (force-push protected; pending an org admin). Consequences until the
admin force-pushes the prepared rewritten main:

- `devlopment` → `main` PRs show "no changes" (no common ancestor). Workaround used for PR #48: a bridge branch based on main carrying devlopment's exact tree.
- Never merge `main` *into* a rewritten branch — it reintroduces the old history.
- `operations/` is gitignored; runbooks live on local disks only. Never re-add to tracking.

Remove this section once main has been force-pushed with the rewritten history.
