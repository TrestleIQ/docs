# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Mintlify-based documentation site for Trestle Identity APIs. The documentation covers phone lookup, caller identification, address validation, and contact enrichment APIs.

## Development Commands

```bash
# Install Mintlify CLI (one-time)
npm i -g mint

# Run local development server (http://localhost:3000)
mint dev

# Update CLI if issues occur
mint update
```

No automated tests are configured. Validate changes by running `mint dev` and reviewing pages in the browser.

## Architecture

- `docs.json` - Main Mintlify configuration: navigation structure, versioning (Current/Archived), theming, API settings, and `headTags` custom scripts
- `api-reference/*.mdx` - Current API endpoint documentation
- `api-reference-archived/*.mdx` - Deprecated/archived API versions
- `guides/*.mdx` - Getting started and overview content
- `snippets/*.mdx` - Reusable MDX components (e.g., `error-responses.mdx` shared by all API pages)
- `openapi/*.openapi.yaml` - OpenAPI 3.1 specs per product (`common/` holds shared schemas)
- `fixtures/<product>/*.json` - Canonical request/response examples, indexed by `ai/EXAMPLES_INDEX.json`
- `ai/` - AI-readable index files (LLMS.md, API_CATALOG.json, EXAMPLES_INDEX.json)
- `scripts/*.js` - Custom JS injected via `docs.json` headTags (Mintlify inlines file content into page HTML at build; direct URL 404 in prod is expected)
- `operations/` - Local-only runbooks; gitignored and purged from git history. Never re-add to tracking.
- `style.css` - Custom styling

See `context.md` (repo root) for deep architecture (error response model, fixture conventions, deployment flow). Both files are listed in `.mintignore` so Mintlify never publishes them — keep any new internal docs there too.

## Content Conventions

- MDX files require YAML front matter with `title` and `description`
- API reference pages include `api: "METHOD /path"` in front matter
- Use sentence case for titles
- File names use kebab-case matching navigation entries
- 2-space indentation in JSON and MDX
- API reference pages render error documentation via the shared snippet — `import ErrorResponses from '/snippets/error-responses.mdx'` + `<ErrorResponses />`. Never hand-copy error blocks into pages.
- Gateway `4XX`/`429` errors use the structured body `{errorCode, message, hint}` (TRES-4973). The five errorCodes and full bodies are documented in `guides/errors.mdx` — keep it the single source of truth.
- Error fixtures follow `response.error.<status>[.<case>].json` naming (e.g., `response.error.403.json` = INVALID_API_KEY, `response.error.429.quota.json` = QUOTA_EXCEEDED). When adding fixtures, sync `ai/EXAMPLES_INDEX.json` and `ai/LLMS.md`.

## Navigation Updates

Edit the `navigation` section in `docs.json` to add pages. The site uses versioning:
- "Current" version points to `api-reference/`
- "Archived" version points to `api-reference-archived/`

New guide pages go under `guides/` and should be added to the "Get Started" group.

## Deployment

Changes are auto-deployed when pushed to the `main` branch via Mintlify GitHub integration.
