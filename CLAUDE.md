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

- `docs.json` - Main Mintlify configuration: navigation structure, versioning (Current/Archived), theming, and API settings (its `headTags` are not rendered — see `scripts/*.js` below)
- `api-reference/*.mdx` - Current API endpoint documentation
- `api-reference-archived/*.mdx` - Deprecated/archived API versions
- `guides/*.mdx` - Getting started and overview content
- `style.css` - Custom styling
- `scripts/*.js` - Custom JS. Mintlify auto-includes **every** `.js` file in the repo on every page (inlined into its Next.js payload). It does **not** render `docs.json` `headTags` — the `headTags` entries are inert. Scripts run after the page is interactive, in no guaranteed order, and may re-run on client-side navigation, so each script must be idempotent (a `window.__trestle*` guard).

## Cookie Consent (Hu-manity) — CRITICAL

- `scripts/hu-options.js` sets `huOptions` and loads `hu-banner.min.js` itself (no `headTags`, no static `<script src>` — neither works on Mintlify). Same appID as portal/www: `trestleiqcom-508b0ac`.
- **`blocking: false` and no `customPatterns` — do not turn autoblocking on.** Mintlify inlines the *source* of these scripts into its `self.__next_f.push(...)` payload scripts, so a pattern like `lfeeder.com` matches them. Hu-manity then blocks and re-runs Next.js payload scripts on consent (`Unexpected server data: missing bootstrap script`), which can break hydration. Autoblocking can't work here anyway without a load-order guarantee.
- **Trackers gate themselves.** `scripts/leadfeeder.js` fires only when `consentData.consent === true` and category 4 is granted — via `window.__hu.getVar("consentData")` at load, or the `read-consent.hu` / `set-consent.hu` events Hu-manity dispatches on `document`. Fails closed. Any new tracker script must follow the same pattern.
- `globalCookie: true` puts `hu-consent` on `.trestleiq.com`, so consent saved on portal/www/docs is shared and the banner isn't re-shown (TRES-6708).
- One-click save: picking "Essential Only"/"Accept All" in the collapsed banner presses `#hu-cookies-save` (the vendor radios only *select* a level). Kept identical to `developer-portal-ui/public/index.html`; keys off vendor ids from an unversioned CDN script, so re-check after Hu-manity updates.

## Content Conventions

- MDX files require YAML front matter with `title` and `description`
- API reference pages include `api: "METHOD /path"` in front matter
- Use sentence case for titles
- File names use kebab-case matching navigation entries
- 2-space indentation in JSON and MDX

## Navigation Updates

Edit the `navigation` section in `docs.json` to add pages. The site uses versioning:
- "Current" version points to `api-reference/`
- "Archived" version points to `api-reference-archived/`

New guide pages go under `guides/` and should be added to the "Get Started" group.

## Deployment

Changes are auto-deployed when pushed to the `main` branch via Mintlify GitHub integration.
