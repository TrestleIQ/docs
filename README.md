# Trestle Identity APIs

Trestle provides identity data APIs that validate, verify, and enrich contact data. Our APIs help businesses confirm phone numbers are active, match contacts to real identities, and enrich records with current demographic and contact information.

All Trestle APIs are RESTful and return responses in JSON format. API calls are made via `https://api.trestleiq.com`. All APIs use a single `x-api-key` header for authentication.

**Base URL:** `https://api.trestleiq.com`

**Get an API key:** [Sign up at the Developer Portal](https://portal.trestleiq.com/signup)

---

## What you can do with Trestle APIs

- Validate phone numbers and identify disconnected or inactive lines before dialing
- Verify that a phone number, email, or address belongs to the expected contact
- Enrich partial contact records with names, addresses, emails, and demographics
- Identify inbound callers in real-time for routing and personalization
- Flag phone line types and carrier information

---

## Product Matrix

| Product | Version | Method | Production Endpoint | Auth Header | OpenAPI Spec | Status |
|---|---|---|---|---|---|---|
| Real Contact API | v2.0 | GET | `https://api.trestleiq.com/2.0/real_contact` | `x-api-key` | [openapi/real-contact.openapi.yaml](openapi/real-contact.openapi.yaml) | GA |
| Caller Identification API | v3.1 | GET | `https://api.trestleiq.com/3.1/caller_id` | `x-api-key` | [openapi/caller-identification.openapi.yaml](openapi/caller-identification.openapi.yaml) | GA |
| Smart CNAM API | v3.1 | GET | `https://api.trestleiq.com/3.1/cnam` | `x-api-key` | [openapi/smart-cnam.openapi.yaml](openapi/smart-cnam.openapi.yaml) | GA |
| Phone Validation API | v3.0 | GET | `https://api.trestleiq.com/3.0/phone_intel` | `x-api-key` | [openapi/phone-validation.openapi.yaml](openapi/phone-validation.openapi.yaml) | GA |
| Reverse Phone API | v3.2 | GET | `https://api.trestleiq.com/3.2/phone` | `x-api-key` | [openapi/reverse-phone.openapi.yaml](openapi/reverse-phone.openapi.yaml) | GA |
| Reverse Address API | v3.1 | GET | `https://api.trestleiq.com/3.1/location` | `x-api-key` | [openapi/reverse-address.openapi.yaml](openapi/reverse-address.openapi.yaml) | GA |
| Phone Feedback API | v1.0 | POST | `https://api.trestleiq.com/1.0/phone_feedback` | `x-api-key` | [openapi/phone-feedback.openapi.yaml](openapi/phone-feedback.openapi.yaml) | GA |

---

## Quickstart

### 1. Get an API key

[Sign up at portal.trestleiq.com](https://portal.trestleiq.com/signup). After account verification, your API key is available in the portal dashboard.

### 2. Choose an API

| Use case | API |
|---|---|
| Verify a lead's phone, email, and address quality | Real Contact API |
| Look up all owners of a phone number | Reverse Phone API |
| Get the top caller identity for an incoming call | Caller Identification API |
| Get just a caller's name | Smart CNAM API |
| Validate a phone and get carrier/line type metadata | Phone Validation API |
| Look up residents at a street address | Reverse Address API |
| Submit live-call feedback about a phone number | Phone Feedback API |

### 3. Send your first request

```bash
curl --request GET \
  --url "https://api.trestleiq.com/3.0/phone_intel?phone=2069735100" \
  --header "x-api-key: YOUR_API_KEY"
```

---

## Common use cases

- Verifying and prioritizing leads
- Enriching contact data
- Optimizing AI voice agents
- Identifying and routing inbound callers
- Boosting outbound connection rates
- Reducing signup and onboarding risk
- Cleaning CRM or database
- Detecting and preventing fraud
- Mitigating TCPA compliance risk

---

## Repository Structure

```
docs/
  guides/              # Integration guides (overview, auth, rate limits, errors)
  api-reference/       # Current API endpoint documentation (MDX)
  api-reference-archived/  # Deprecated API versions
  openapi/             # OpenAPI 3.1 specs (one YAML per product)
    common/            # Shared schemas, parameters, responses, security
  fixtures/            # Canonical request/response JSON examples per product
  ai/                  # AI-readable index files (LLMS.md, API_CATALOG.json, etc.)
  changelog/           # Versioned changelog entries
  operations/          # Runbooks for operational tasks
  assets/              # Logos and static assets
```

### Key files for integrators

- **[ai/LLMS.md](ai/LLMS.md)** — Start here for AI-assisted integration
- **[ai/API_CATALOG.json](ai/API_CATALOG.json)** — Machine-readable endpoint catalog
- **[openapi/](openapi/)** — OpenAPI 3.1 specs for all products
- **[fixtures/](fixtures/)** — Canonical JSON examples for testing

---

## Documentation

Full documentation is published at [https://docs.trestleiq.com](https://trestleiq.com).

- [Guides](guides/) — Authentication, rate limits, error handling
- [API Reference](api-reference/) — Endpoint parameters and response schemas
- [Changelog](changelog/) — API version history and breaking changes

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for local development setup, navigation updates, and PR process.

## Support

- API questions: [support@trestleiq.com](mailto:support@trestleiq.com)
- Status page: [status.trestleiq.com](https://status.trestleiq.com/)
- Developer Portal: [portal.trestleiq.com](https://portal.trestleiq.com)
