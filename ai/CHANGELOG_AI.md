# Trestle API Changelog (AI-Readable)

This file is structured for deterministic parsing by AI agents. Each version entry includes `breaking` and `non-breaking` sections, migration notes, and replacement endpoints.

Format: ISO 8601 dates. Status: `current` | `deprecated` | `removed`.

---

## 2026-05-19 — Repository refactor (docs only, no API changes)

### non-breaking

- Added OpenAPI 3.1 spec files for all 7 API products under `openapi/`.
- Added canonical fixture JSON files under `fixtures/`.
- Added AI-readable index files under `ai/`.
- Added `guides/rate-limits.mdx` and `guides/errors.mdx`.
- Rewrote `README.md` to be integration-first with Product Matrix.
- Added `CONTRIBUTING.md` with maintainer and build instructions.

---

## Current API versions

| Product | Current Version | Endpoint | Status |
|---|---|---|---|
| Real Contact API | v2.0 | `GET /2.0/real_contact` | current |
| Caller Identification API | v3.1 | `GET /3.1/caller_id` | current |
| Smart CNAM API | v3.1 | `GET /3.1/cnam` | current |
| Phone Validation API | v3.0 | `GET /3.0/phone_intel` | current |
| Reverse Phone API | v3.2 | `GET /3.2/phone` | current |
| Reverse Address API | v3.1 | `GET /3.1/location` | current |
| Phone Feedback API | v1.0 | `POST /1.0/phone_feedback` | current |

---

## Deprecated/archived versions

| Product | Version | Endpoint | Status | Replacement |
|---|---|---|---|---|
| Real Contact API | v1.1 | `GET /1.1/real_contact` | deprecated | `GET /2.0/real_contact` |
| Real Contact API | v1.0 | `GET /1.0/real_contact` | deprecated | `GET /2.0/real_contact` |
| Reverse Phone API | v3.0/v3.1 | `GET /3.0/phone`, `GET /3.1/phone` | deprecated | `GET /3.2/phone` |
| Caller ID API | v2.x | `GET /2.x/caller_id` | deprecated | `GET /3.1/caller_id` |
| Smart CNAM API | v2.x/v3.0 | older paths | deprecated | `GET /3.1/cnam` |
| Phone Validation API | v2.x | older paths | deprecated | `GET /3.0/phone_intel` |
| Reverse Address API | v2.x/v3.0 | older paths | deprecated | `GET /3.1/location` |
| Find Person API | v1.x | `GET /1.x/find_person` | removed | use Reverse Phone or Caller ID |

Archived docs: `api-reference-archived/`

---

## Migration notes

### Real Contact v1.x → v2.0

- **Breaking**: Authentication via query parameter (`api_key=`) removed. Must use `x-api-key` header.
- **Breaking**: Response structure changed — nested `phone`, `email`, `address` objects replace flat fields.
- **Non-breaking**: `ip_address` and `add_ons` parameters added.

### Reverse Phone v3.1 → v3.2

- **Non-breaking**: `owners` array replaces single `belongs_to` object to support multiple owners.
