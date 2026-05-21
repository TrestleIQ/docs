# Trestle API Integration Guide for AI Agents

This file is the canonical start-here resource for AI-assisted integration with Trestle Identity APIs.

## What Trestle APIs do

Trestle provides identity data APIs for verifying, enriching, and validating US contact information:
- Phone numbers (line type, carrier, activity, owner identity)
- Email addresses (validity, deliverability, age)
- Physical addresses (validation, resident lookup)
- IP addresses (trust scoring)
- Lead contact quality grading

## Integration path (start here)

1. **Get an API key** — Sign up at https://portal.trestleiq.com/signup
2. **Authenticate** — All APIs use `x-api-key: YOUR_KEY` as a request header. No OAuth or tokens.
3. **Choose an API** — See Product Matrix below or `PRODUCT_MATRIX.md`
4. **Send a request** — All APIs are REST/GET (except Phone Feedback which is POST)
5. **Handle the response** — Check `warnings` array and `error`/`errors` object for partial results

## Product Matrix (quick reference)

| Product | Endpoint | Use case |
|---|---|---|
| Real Contact API | `GET https://api.trestleiq.com/2.0/real_contact` | Lead verification: phone + email + address + IP quality grading |
| Caller ID API | `GET https://api.trestleiq.com/3.1/caller_id` | Top caller identity (name, address, emails) for a phone number |
| Smart CNAM API | `GET https://api.trestleiq.com/3.1/cnam` | Caller name only (lightest enrichment) |
| Phone Validation API | `GET https://api.trestleiq.com/3.0/phone_intel` | Phone validity, carrier, line type, activity score |
| Reverse Phone API | `GET https://api.trestleiq.com/3.2/phone` | All owners of a phone number with full demographics |
| Reverse Address API | `GET https://api.trestleiq.com/3.1/location` | All residents at a street address |
| Phone Feedback API | `POST https://api.trestleiq.com/1.0/phone_feedback` | Submit connected/disconnected call outcome feedback |

## Minimum request example (Phone Validation)

```bash
curl --request GET \
  --url "https://api.trestleiq.com/3.0/phone_intel?phone=2069735100" \
  --header "x-api-key: YOUR_API_KEY"
```

## Key concepts for AI agents

- **Activity score** (0–100): 70+ = likely connected; 30- = likely disconnected; present in Phone Validation and Real Contact APIs.
- **Contact grade** (A–F): Lead quality signal in Real Contact API. A = high quality, F = bad lead.
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

Shared schemas: `openapi/common/`

## Fixture files

Canonical request/response JSON under `fixtures/<product>/`:
- `request.valid.json`
- `response.success.json`
- `response.error.400.json`
- `response.error.429.json`
