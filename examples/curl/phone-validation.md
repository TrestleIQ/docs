# Phone Validation API — cURL Example

**Endpoint:** `GET https://api.trestleiq.com/3.0/phone_intel`

## Basic request

```bash
curl --request GET \
  --url "https://api.trestleiq.com/3.0/phone_intel?phone=2069735100" \
  --header "x-api-key: YOUR_API_KEY"
```

## With litigator check add-on

```bash
curl --request GET \
  --url "https://api.trestleiq.com/3.0/phone_intel?phone=2069735100&add_ons=litigator_checks" \
  --header "x-api-key: YOUR_API_KEY"
```

## See also

- OpenAPI spec: [`openapi/phone-validation.openapi.yaml`](../../openapi/phone-validation.openapi.yaml)
- Fixture: [`fixtures/phone-validation/request.valid.json`](../../fixtures/phone-validation/request.valid.json)
- Full docs: [`api-reference/phone-validation-api.mdx`](../../api-reference/phone-validation-api.mdx)
