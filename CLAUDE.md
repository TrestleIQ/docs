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

## Cookie Consent (Cookiebot) — CRITICAL

- `scripts/cookiebot.js` injects `https://consent.cookiebot.com/uc.js` itself (no `headTags`, no static `<script src>` — neither works on Mintlify). Same cbid as portal/www: `344f6781-6477-4999-8eb5-75ae87b4b5b8`. Which hosts get a banner is set by the domain list in Cookiebot Manager — `docs.trestleiq.com` must be registered there.
- **No `data-blockingmode="auto"` — do not turn it on.** Mintlify inlines the *source* of these scripts into its `self.__next_f.push(...)` payload scripts, and auto-blocking rewrites matching scripts to `text/plain`. Under Hu-manity that blocked Next.js payload scripts (`Unexpected server data: missing bootstrap script`) and broke hydration; Cookiebot's auto mode does the same rewrite, so assume the same risk. It can't work here anyway without a load-order guarantee.
- **Trackers gate themselves.** `scripts/leadfeeder.js` fires only when `Cookiebot.consent.marketing === true` and `Cookiebot.consent.method === "explicit"` — checked at load, and again on the `CookiebotOnConsentReady` / `CookiebotOnAccept` events on `window`. Fails closed (implied consent in opt-out regions does not count). Any new tracker script must follow the same pattern.
- Consent is per-host. Sharing it with portal/www needs **Cross-domain Consent Sharing** (Domain Group) in Cookiebot Manager — not a script attribute; there is no `globalCookie` equivalent (TRES-6708 used one under Hu-manity).

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
