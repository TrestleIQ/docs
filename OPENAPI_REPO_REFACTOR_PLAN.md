# Trestle OpenAPI Repo Refactor Plan (LLM-Readable, UI-Preserving)

## Objective

Create a new OpenAPI-style GitHub repository that answers:

- "How do I integrate with Trestle APIs?"

while preserving the current Mintlify UI patterns in the docs app (same look and navigation style principles), and improving machine discoverability for AI agents.

This plan does not require visual redesign. It focuses on content architecture, file organization, and structured API artifacts.

---

## Scope

### In scope

- New repository structure based on product-first OpenAPI conventions.
- Migration of current docs content into integration-first documentation.
- Creation of AI-readable index/catalog files.
- Clear separation of customer docs vs internal contributor/build docs.
- Domain verification process documentation for GitHub Verified badge.

### Out of scope

- Changing Mintlify theme, branding, colors, fonts, or CSS visual design.
- Rewriting business logic or API behavior.

---

## Phase 1: GitHub Verified badge (Organization/Enterprise)

GitHub "Verified" is controlled at the organization or enterprise account level, not per repository.

## What is required

1. GitHub org owner access (or enterprise owner access if managed centrally).
2. DNS admin access for the company domain.
3. Public domain used in organization profile email/website.

## Verification process

1. In GitHub settings, add domain under:
   - Organization: `Settings -> Verified and approved domains`
   - Enterprise Cloud: `Settings -> Verified and approved domains`
2. GitHub provides a TXT record value.
3. Add TXT record in DNS.
4. Wait for propagation.
5. Return to GitHub and click Verify.
6. Confirm org profile website/email domains match verified domain.

## Deliverables

- Verified domain appears in org settings as verified.
- Verified badge shows on organization profile/repositories where applicable.
- Internal runbook file in repo for repeatability.

## New file to add

- `operations/github-domain-verification-runbook.md`
  - Purpose: owner checklist, DNS record template, rollback notes, troubleshooting.

---

## Target repository architecture (new OpenAPI-style repo)

```text
trestle-openapi/
  README.md
  CONTRIBUTING.md
  docs.json
  style.css
  assets/
  guides/
    overview.mdx
    authentication.mdx
    rate-limits.mdx
    errors.mdx
    pagination.mdx                  # if applicable
    webhooks.mdx                    # if applicable
  api-reference/
    real-contact-api.mdx
    caller-identification-api.mdx
    smart-cnam-api.mdx
    phone-validation-api.mdx
    reverse-phone-api.mdx
    reverse-address-api.mdx
    phone-feedback-api.mdx
  api-reference-archived/
    ...existing archived pages...
  openapi/
    real-contact.openapi.yaml
    caller-identification.openapi.yaml
    smart-cnam.openapi.yaml
    phone-validation.openapi.yaml
    reverse-phone.openapi.yaml
    reverse-address.openapi.yaml
    phone-feedback.openapi.yaml
    common/
      components.schemas.yaml
      components.parameters.yaml
      components.responses.yaml
      components.security.yaml
  examples/
    curl/
      real-contact.md
      caller-identification.md
      ...
    javascript/
      real-contact.md
      ...
    python/
      real-contact.md
      ...
  fixtures/
    real-contact/
      request.valid.json
      response.success.json
      response.error.400.json
      response.error.429.json
    caller-identification/
      ...
  ai/
    LLMS.md
    PRODUCT_MATRIX.md
    API_CATALOG.json
    EXAMPLES_INDEX.json
    CHANGELOG_AI.md
    TAXONOMY.json
  changelog/
    2026-xx-xx.md
  operations/
    github-domain-verification-runbook.md
```

---

## Content pivot requirements (README and docs entry points)

## README.md (replace build-first messaging)

README should become the customer and AI entrypoint:

1. One-paragraph integration-first introduction.
2. Product Matrix table with every API and production endpoint.
3. Quickstart integration steps:
   - get API key
   - choose API
   - send first request
4. Links to guides, OpenAPI specs, and examples.
5. Short "for contributors" pointer to `CONTRIBUTING.md`.

### Product Matrix format (required)

| Product | Version | Production endpoint | Auth header | OpenAPI spec | Status |
|---|---|---|---|---|---|
| Real Contact API | v2.0 | `GET https://api.trestleiq.com/2.0/real_contact` | `x-api-key` | `openapi/real-contact.openapi.yaml` | GA |
| Caller Identification API | v3.1 | `GET https://api.trestleiq.com/3.1/caller_id` | `x-api-key` | `openapi/caller-identification.openapi.yaml` | GA |
| Smart CNAM API | ... | ... | ... | ... | ... |
| Phone Validation API | ... | ... | ... | ... | ... |
| Reverse Phone API | ... | ... | ... | ... | ... |
| Reverse Address API | ... | ... | ... | ... | ... |
| Phone Feedback API | ... | ... | ... | ... | ... |

Note: fill "..." rows from current pages during migration.

## CONTRIBUTING.md (move internal/build instructions)

Move all Mintlify and repo-maintainer instructions from README here:

- Mintlify install (`npm i -g mint`), `mint dev`, troubleshooting.
- Navigation updates in `docs.json`.
- API reference authoring conventions.
- PR checklist and release process.

---

## API documentation minimum standard (per endpoint/product)

For each API product, ensure both MDX and OpenAPI spec include:

1. Endpoint purpose and primary use cases.
2. Method + path + version.
3. Authentication header requirements.
4. Request parameters with required/optional flags and examples.
5. Response schema for success.
6. Error schema for common errors (`400`, `401`, `403`, `404`, `429`, `500`).
7. Language examples (`curl`, JavaScript, Python at minimum).
8. Rate limit/retry expectations.
9. Fixture links for canonical examples.

---

## AI-readable architecture requirements

## New AI files and exact purpose

1. `ai/LLMS.md`
   - Human+LLM navigation doc.
   - "Start here" integration path.
   - Product list with links to MDX + OpenAPI + fixtures.

2. `ai/PRODUCT_MATRIX.md`
   - Canonical matrix of all products/endpoints/versions/status.
   - Must match README matrix.

3. `ai/API_CATALOG.json`
   - Machine-readable index. One object per API:
   - `product`, `version`, `method`, `path`, `base_url`, `auth_header`, `spec_path`, `docs_path`, `fixtures_path`, `status`.

4. `ai/EXAMPLES_INDEX.json`
   - Maps each endpoint to code sample files and fixture files.

5. `ai/CHANGELOG_AI.md`
   - Structured change log with `breaking` and `non-breaking` sections.
   - Include migration notes and replacement endpoints.

6. `ai/TAXONOMY.json`
   - Controlled vocabulary for entities and fields (phone, email, address, risk scores, confidence fields).

---

## Mapping from current repo to new repo artifacts

## Existing source content

- `api-reference/*.mdx`: primary source for endpoint behavior, params, examples.
- `api-reference-archived/*.mdx`: archived version source.
- `snippets/error-responses.mdx`: reusable error format source.
- `guides/overview.mdx`, `guides/authentication.mdx`: base guide source.
- `docs.json`: navigation structure and grouping.

## Migration mapping

1. Keep current MDX pages, but normalize format and cross-link each to corresponding OpenAPI spec.
2. Create one OpenAPI YAML per product under `openapi/`.
3. Extract common auth/response components into `openapi/common/`.
4. Extract sample JSON payloads into `fixtures/<product>/`.
5. Build `ai/*.json` indexes from the above.

---

## docs.json changes required (UI-preserving)

Do not change theming/appearance blocks.

Update only navigation/content paths to include:

- Integration guides (overview/auth/errors/rate limits).
- API reference pages (current + archived as today).
- Optional "OpenAPI Specs" page group if you want browsable spec links.

This keeps the same Mintlify UI but improves content findability.

---

## File-by-file creation checklist

## Root

- `README.md` (rewrite)
  - Add integration-first intro and Product Matrix.
  - Remove local build details.

- `CONTRIBUTING.md` (new)
  - Add all maintainer/build/deployment workflows.

## OpenAPI specs

- `openapi/*.openapi.yaml` (new, 7 files)
  - One per product endpoint.
  - Include `info`, `servers`, `paths`, `components`, `security`.

- `openapi/common/components.*.yaml` (new, 4 files)
  - Shared schemas, parameters, responses, securitySchemes.

## AI docs

- `ai/LLMS.md` (new)
- `ai/PRODUCT_MATRIX.md` (new)
- `ai/API_CATALOG.json` (new)
- `ai/EXAMPLES_INDEX.json` (new)
- `ai/CHANGELOG_AI.md` (new)
- `ai/TAXONOMY.json` (new)

## Examples and fixtures

- `examples/curl/*.md` (new)
- `examples/javascript/*.md` (new)
- `examples/python/*.md` (new)
- `fixtures/<product>/*.json` (new)

## Operations

- `operations/github-domain-verification-runbook.md` (new)

---

## Suggested execution plan

1. Create new repo skeleton and copy existing docs/assets.
2. Rewrite `README.md` and add `CONTRIBUTING.md`.
3. Generate OpenAPI specs from current MDX endpoint pages.
4. Create fixtures from existing response examples and error snippets.
5. Add AI index files (`ai/` folder).
6. Update `docs.json` nav references only (no UI/theme changes).
7. Validate locally with `mint dev`.
8. Complete GitHub domain verification runbook and execute with org owner + DNS admin.

---

## Definition of done

1. Repo homepage immediately answers "How do I integrate with Trestle APIs?"
2. Every production API is listed in Product Matrix with endpoint and spec path.
3. Internal build instructions exist only in `CONTRIBUTING.md`.
4. Each API has MDX page, OpenAPI file, examples, and fixture JSON.
5. AI-readable files in `ai/` allow deterministic endpoint discovery.
6. GitHub domain verification runbook is documented and executable.
7. Mintlify UI/brand remains unchanged.
