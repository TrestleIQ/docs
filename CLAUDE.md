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

## Navigation Updates

Edit the `navigation` section in `docs.json` to add pages. The site uses versioning:
- "Current" version points to `api-reference/`
- "Archived" version points to `api-reference-archived/`

New guide pages go under `guides/` and should be added to the "Get Started" group.

## Deployment

Changes are auto-deployed when pushed to the `main` branch via Mintlify GitHub integration.
