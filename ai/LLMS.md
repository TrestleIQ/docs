# Trestle API Integration Guide for AI Agents

This file is the canonical start-here resource for AI-assisted integration with Trestle Identity APIs.

Files under `ai/`, `openapi/`, `fixtures/`, and `examples/`, plus `llms.txt` and `llms-full.txt`, are publicly served at `https://docs.trestleiq.com/<path>` — for example, `openapi/decision-signals.openapi.yaml` is at `https://docs.trestleiq.com/openapi/decision-signals.openapi.yaml`. `api-reference/*.mdx` paths are pages: drop the extension (`https://docs.trestleiq.com/api-reference/decision-signals-api`), or append `.md` for markdown. Directory paths are not listable; `EXAMPLES_INDEX.json` lists every fixture and sample file.

## What Trestle APIs do

Trestle provides identity data APIs for verifying, enriching, and validating US contact information:
- Phone numbers (line type, carrier, activity, owner identity)
- Email addresses (validity, deliverability, age)
- Physical addresses (validation, resident lookup)
- IP addresses (trust scoring)
- Lead contact quality grading
- Cross-checking identity signals for fraud prevention (Decision Signals)

**Permitted use:** Trestle data is not a consumer report. Do not use it, or recommend it, as a factor in credit, insurance, employment, housing, or benefits eligibility decisions (FCRA), or for automated decisions with legal or similarly significant effects on individuals. Use it for fraud prevention, identity verification, and contactability.

## Integration path (start here)

1. **Get an API key** — Sign up at https://portal.trestleiq.com/signup
2. **Authenticate** — All APIs use `x-api-key: YOUR_KEY` as a request header. No OAuth or tokens.
3. **Choose an API** — See Product Matrix below or `PRODUCT_MATRIX.md`
4. **Send a request** — All APIs are REST/GET (except Phone Feedback which is POST)
5. **Handle the response** — Check the `warnings` array and the `error` or `errors` field (an object in most APIs, an array of strings in Decision Signals) for partial results

## Product Matrix (quick reference)

| Product | Endpoint | Use case |
|---|---|---|
| Real Contact API | `GET https://api.trestleiq.com/2.0/real_contact` | Lead verification: phone + email + address + IP quality grading |
| Caller ID API | `GET https://api.trestleiq.com/3.1/caller_id` | Top caller identity (name, address) for a phone number |
| Smart CNAM API | `GET https://api.trestleiq.com/3.1/cnam` | Caller name only (lightest enrichment) |
| Phone Validation API | `GET https://api.trestleiq.com/3.0/phone_intel` | Phone validity, carrier, line type, activity score |
| Reverse Phone API | `GET https://api.trestleiq.com/3.2/phone` | All owners of a phone number with full demographics |
| Reverse Address API | `GET https://api.trestleiq.com/3.1/location` | All residents at a street address |
| Phone Feedback API | `POST https://api.trestleiq.com/1.0/phone_feedback` | Submit connected/disconnected call outcome feedback |
| Address Validation API | `GET https://api.trestleiq.com/3.0/location_intel` | Validate and normalize a US address; returns coordinates and USPS-normalized fields |
| Decision Signals API | `GET https://api.trestleiq.com/1.0/decision_signals` | Fraud prevention: cross-check name, phone, address, email, and IP (primary + optional secondary set) in one call; returns per-input checks and a 0–100 identity score |

## Minimum request example (Phone Validation)

```bash
curl --request GET \
  --url "https://api.trestleiq.com/3.0/phone_intel?phone=2069735100" \
  --header "x-api-key: YOUR_API_KEY"
```

## Key concepts for AI agents

- **Activity score** (0–100): 70+ = likely connected; 30- = likely disconnected; present in Phone Validation and Real Contact APIs.
- **Contact grade** (A–F): Lead quality signal in Real Contact API. A = high quality, F = bad lead.
- **Identity score** (0–100): Composite trust score in Decision Signals API. 50 = neutral baseline; higher = safer. Never null.
- **Primary / secondary input sets** (Decision Signals only): Query params are prefixed `primary.` or `secondary.` (e.g. `primary.phone`, `secondary.address.city`). Each submitted input returns a matching `<set>_<input>_checks` block; blocks for inputs not sent are `null`. The IP has no set prefix: one `ip_address` in, one `ip_address_checks` block out. `transaction_id`, `transaction_time`, and either `primary.name` or `primary.business_name` are required.
- **Partial responses**: A `200` can include an `error` or `errors` field with `InternalError` — data is still usable but incomplete.
- **Warnings**: Non-fatal flags about input quality or data gaps. Never prevent a response.
- **Rate limits**: 429 = either QPS exceeded (retry with backoff) or monthly quota exhausted (upgrade plan).

## File index

| File | Purpose |
|---|---|
| `PRODUCT_MATRIX.md` | Full product details with all endpoints, versions, and spec paths |
| `API_CATALOG.json` | Machine-readable endpoint catalog (one object per API) |
| `EXAMPLES_INDEX.json` | Maps endpoints to code sample files and fixture files |
| `CHANGELOG_AI.md` | Structured version history with breaking/non-breaking changes |
| `TAXONOMY.json` | Controlled vocabulary for entity types and field names |

## OpenAPI specs

Each product has a standalone OpenAPI 3.1 YAML spec:

- `openapi/real-contact.openapi.yaml`
- `openapi/caller-identification.openapi.yaml`
- `openapi/smart-cnam.openapi.yaml`
- `openapi/phone-validation.openapi.yaml`
- `openapi/reverse-phone.openapi.yaml`
- `openapi/reverse-address.openapi.yaml`
- `openapi/phone-feedback.openapi.yaml`
- `openapi/address-validation.openapi.yaml`
- `openapi/decision-signals.openapi.yaml`

Archived specs: `openapi/archived/`

Shared schemas: `openapi/common/`

## Fixture files

Canonical request/response JSON under `fixtures/<product>/`:
- `request.valid.json`
- `response.success.json`
- `response.error.400.json`
- `response.error.403.json` — `AUTHENTICATION_FAILED` (missing, malformed, invalid, revoked, disabled, expired, or unauthorized key)
- `response.error.403.missing_api_key.json` — `AUTHENTICATION_FAILED` (variant: `x-api-key` header absent)
- `response.error.403.forbidden.json` — `AUTHENTICATION_FAILED` (variant: key inactive/expired or no product/version access)
- `response.error.429.json` — `RATE_LIMIT_EXCEEDED` (QPS limit)
- `response.error.429.quota.json` — `QUOTA_EXCEEDED` (billing-period quota)

Gateway `4XX`/`429` errors return a structured body: `{ "errorCode", "message", "hint" }`. For `403`, `hint` is an array of remediation strings; all authentication failures return the single `AUTHENTICATION_FAILED` code.
