# Trestle API Product Matrix

Canonical reference for all Trestle API products. Matches the README.md Product Matrix.

Last updated: 2026-05-19

| Product | Version | Method | Path | Base URL | Auth Header | OpenAPI Spec | Docs Page | Fixtures | Status |
|---|---|---|---|---|---|---|---|---|---|
| Real Contact API | v2.0 | GET | `/2.0/real_contact` | `https://api.trestleiq.com` | `x-api-key` | `openapi/real-contact.openapi.yaml` | `api-reference/real-contact-api.mdx` | `fixtures/real-contact/` | GA |
| Caller Identification API | v3.1 | GET | `/3.1/caller_id` | `https://api.trestleiq.com` | `x-api-key` | `openapi/caller-identification.openapi.yaml` | `api-reference/caller-identification-api.mdx` | `fixtures/caller-identification/` | GA |
| Smart CNAM API | v3.1 | GET | `/3.1/cnam` | `https://api.trestleiq.com` | `x-api-key` | `openapi/smart-cnam.openapi.yaml` | `api-reference/smart-cnam-api.mdx` | `fixtures/smart-cnam/` | GA |
| Phone Validation API | v3.0 | GET | `/3.0/phone_intel` | `https://api.trestleiq.com` | `x-api-key` | `openapi/phone-validation.openapi.yaml` | `api-reference/phone-validation-api.mdx` | `fixtures/phone-validation/` | GA |
| Reverse Phone API | v3.2 | GET | `/3.2/phone` | `https://api.trestleiq.com` | `x-api-key` | `openapi/reverse-phone.openapi.yaml` | `api-reference/reverse-phone-api.mdx` | `fixtures/reverse-phone/` | GA |
| Reverse Address API | v3.1 | GET | `/3.1/location` | `https://api.trestleiq.com` | `x-api-key` | `openapi/reverse-address.openapi.yaml` | `api-reference/reverse-address-api.mdx` | `fixtures/reverse-address/` | GA |
| Phone Feedback API | v1.0 | POST | `/1.0/phone_feedback` | `https://api.trestleiq.com` | `x-api-key` | `openapi/phone-feedback.openapi.yaml` | `api-reference/phone-feedback-api.mdx` | `fixtures/phone-feedback/` | GA |

## Notes

- All endpoints are under base URL `https://api.trestleiq.com`.
- All endpoints authenticate via `x-api-key` header. No query-parameter auth is supported (deprecated in v2.0+).
- Phone Feedback is the only POST endpoint; all others use GET.
- Add-ons (extra charges) are available for Real Contact (litigator_checks, email_checks_age, email_checks_deliverability) and Phone Validation (litigator_checks).
