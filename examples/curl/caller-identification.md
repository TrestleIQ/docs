# Caller Identification API — cURL Example

**Endpoint:** `GET https://api.trestleiq.com/3.1/caller_id`

## Basic request

```bash
curl --request GET \
  --url "https://api.trestleiq.com/3.1/caller_id?phone=2069735100" \
  --header "x-api-key: YOUR_API_KEY"
```

## With hints

```bash
curl --request GET \
  --url "https://api.trestleiq.com/3.1/caller_id?phone=2069735100&phone.country_hint=US&phone.name_hint=Waidong%20Syrws&phone.postal_code_hint=98264" \
  --header "x-api-key: YOUR_API_KEY"
```

## See also

- OpenAPI spec: [`openapi/caller-identification.openapi.yaml`](../../openapi/caller-identification.openapi.yaml)
- Fixture: [`fixtures/caller-identification/request.valid.json`](../../fixtures/caller-identification/request.valid.json)
- Full docs: [`api-reference/caller-identification-api.mdx`](../../api-reference/caller-identification-api.mdx)
