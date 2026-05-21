# Contributing to Trestle API Documentation

This guide covers local development setup, content authoring conventions, and the release process for maintainers.

---

## Local Development

### Prerequisites

- Node.js v14 or higher
- npm or yarn

### Setup

1. Install the Mintlify CLI:

   ```bash
   npm install -g mint
   ```

2. Start the local preview server from the repo root (where `docs.json` lives):

   ```bash
   mint dev
   ```

3. Open [http://localhost:3000](http://localhost:3000)

The dev server hot-reloads on file saves.

### Troubleshooting

- **Server won't start:** Run `mint update` then retry.
- **404 on a page:** Verify the page is listed in `docs.json` and the `.mdx` file exists at the correct path.
- **Changes not appearing:** Hard-refresh the browser (`Cmd+Shift+R` / `Ctrl+Shift+R`).
- **Styling issues:** Check `style.css` and the `styling` block in `docs.json`.

---

## Navigation Updates

Navigation is controlled by the `navigation` section in `docs.json`. The site uses two versions:

- **Current** — points to `api-reference/`
- **Archived** — points to `api-reference-archived/`

To add a new page:

1. Create the `.mdx` file in the correct directory.
2. Add the page path (without `.mdx` extension) to the appropriate group in `docs.json`.
3. Run `mint dev` and verify the page appears and renders correctly.

---

## Authoring Conventions

### MDX front matter

Every `.mdx` file requires a front matter block:

```yaml
---
title: "Page Title"
description: "One-sentence description for SEO and navigation."
---
```

API reference pages also include:

```yaml
api: "GET /version/path"
playground: "none"
```

### Style rules

- Use sentence case for titles.
- File names use kebab-case matching the navigation entry.
- 2-space indentation in JSON and MDX.
- Code block language tags: `bash`, `javascript`, `python`, `csharp`, `go`, `php`, `java`.

### OpenAPI spec authoring

- One YAML file per product under `openapi/`.
- Shared schemas go in `openapi/common/components.schemas.yaml`.
- Shared auth goes in `openapi/common/components.security.yaml`.
- Follow OpenAPI 3.1 specification.

### Fixture files

Add canonical request/response examples under `fixtures/<product>/`:

- `request.valid.json` — a valid request payload or query params object
- `response.success.json` — a full success response body
- `response.error.400.json` — a 400 error response body
- `response.error.429.json` — a 429 error response body

---

## Deployment

Changes are auto-deployed when pushed to the `main` branch via the Mintlify GitHub integration.

### Release process

1. Create a feature branch: `git checkout -b docs/your-change`
2. Make changes and test locally with `mint dev`.
3. Open a pull request against `main`.
4. After review and merge, Mintlify deploys automatically within minutes.

Check deployment status at the [Mintlify dashboard](https://dashboard.mintlify.com).

---

## Changelog

Add an entry to `changelog/` whenever a production API change is documented:

- File name: `YYYY-MM-DD.md`
- Include `breaking` and `non-breaking` sections.
- Mirror the entry in `ai/CHANGELOG_AI.md` for AI discoverability.

---

## GitHub Domain Verification

See [operations/github-domain-verification-runbook.md](operations/github-domain-verification-runbook.md) for the step-by-step process to verify the Trestle domain with the GitHub organization.
