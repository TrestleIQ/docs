# Repository Guidelines

## Project Structure & Module Organization
- `docs.json` defines site navigation, theming, and API settings for Mintlify.
- `intro.mdx` and `guides/*.mdx` contain narrative guides and getting-started content.
- `api-reference/*.mdx` holds current API reference pages; `api-reference-archived/*.mdx` contains deprecated reference pages.
- Shared assets live at the repo root (`favicon.svg`, `trestle_logo.png`, `style.css`).

## Build, Test, and Development Commands
- `npm i -g mint`: Install the Mintlify CLI for local preview.
- `mint dev`: Run the docs site locally using `docs.json` as the entry point; defaults to `http://localhost:3000`.
- `mint update`: Refresh the CLI if local preview fails or content renders unexpectedly.

## Coding Style & Naming Conventions
- Use MDX with YAML front matter (`title`, `description`) at the top of each page.
- Prefer sentence case titles and concise section headings.
- Indentation: 2 spaces in JSON (`docs.json`) and consistent 2-space indentation in MDX components.
- File naming: kebab-case paths that mirror navigation entries (**Example:** `guides/authentication.mdx`).

## Testing Guidelines
- No automated tests are configured. Validate changes by running `mint dev` and reviewing pages in the browser.
- For API reference edits, sanity-check sample requests and response schemas in the rendered page.

## Commit & Pull Request Guidelines
- Recent commit messages are short, imperative, and descriptive (**Example:** "Solved logo not displaying issue"). Keep subject lines focused on one change.
- PRs should include a brief summary, linked issue (if any), and screenshots for visible layout or branding changes.

## Configuration & Content Tips
- Update navigation, versioning, and theming in `docs.json`; keep versions in sync with `api-reference` and `api-reference-archived`.
- Place new guide pages under `guides/` and add them to the "Get Started" group in `docs.json`.
