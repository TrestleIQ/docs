# Reverse Phone API — cURL Example

**Endpoint:** `GET https://api.trestleiq.com/3.2/phone`

## Basic request

```bash
curl --request GET \
  --url "https://api.trestleiq.com/3.2/phone?phone=2069735100" \
  --header "x-api-key: YOUR_API_KEY"
```

## With ranking hints

```bash
curl --request GET \
  --url "https://api.trestleiq.com/3.2/phone?phone=2069735100&phone.country_hint=US&phone.name_hint=John%20Doe&phone.postal_code_hint=98264" \
  --header "x-api-key: YOUR_API_KEY"
```

## See also

- OpenAPI spec: [`openapi/reverse-phone.openapi.yaml`](../../openapi/reverse-phone.openapi.yaml)
- Fixture: [`fixtures/reverse-phone/request.valid.json`](../../fixtures/reverse-phone/request.valid.json)
- Full docs: [`api-reference/reverse-phone-api.mdx`](../../api-reference/reverse-phone-api.mdx)
