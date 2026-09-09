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

- `docs.json` - Main Mintlify configuration: navigation structure, versioning (Current/Archived), theming, and API settings
- `api-reference/*.mdx` - Current API endpoint documentation
- `api-reference-archived/*.mdx` - Deprecated/archived API versions
- `guides/*.mdx` - Getting started and overview content
- `style.css` - Custom styling

## Content Conventions

- MDX files require YAML front matter with `title` and `description`
- API reference pages include `api: "METHOD /path"` in front matter
- Use sentence case for titles
- File names use kebab-case matching navigation entries
- 2-space indentation in JSON and MDX

## Site-wide scripts

- Any `.js` file in the repo root's content directory (e.g. `scripts/*.js`)
  auto-loads on every page. This runs **after the page becomes interactive**,
  and with **no guaranteed order** between multiple files — confirmed against
  the live rendered site and Mintlify's own docs/issue tracker
  (mintlify/discussions#5087). Mintlify has no supported mechanism for
  synchronous or load-order-guaranteed `<head>` injection.
- `docs.json`'s `headTags` array does **not** do this — verified it's absent
  entirely from the live page's rendered output/hydration payload. Don't add
  entries there expecting real `<head>` placement; it appears to be inert.
- Because load order can't be guaranteed, any script that must only run under
  certain conditions (e.g. consent) has to gate itself at runtime rather than
  relying on being loaded first — see the comments in `scripts/leadfeeder.js`
  and `scripts/hu-options.js` for the pattern.

## Navigation Updates

Edit the `navigation` section in `docs.json` to add pages. The site uses versioning:
- "Current" version points to `api-reference/`
- "Archived" version points to `api-reference-archived/`

New guide pages go under `guides/` and should be added to the "Get Started" group.

## Deployment

Changes are auto-deployed when pushed to the `main` branch via Mintlify GitHub integration.
