# Smart CNAM API — cURL Example

**Endpoint:** `GET https://api.trestleiq.com/3.1/cnam`

## Basic request

```bash
curl --request GET \
  --url "https://api.trestleiq.com/3.1/cnam?phone=2069735100" \
  --header "x-api-key: YOUR_API_KEY" \
  --header "Accept: application/json"
```

## With country hint

```bash
curl --request GET \
  --url "https://api.trestleiq.com/3.1/cnam?phone=2069735100&phone.country_hint=US" \
  --header "x-api-key: YOUR_API_KEY" \
  --header "Accept: application/json"
```

## See also

- OpenAPI spec: [`openapi/smart-cnam.openapi.yaml`](../../openapi/smart-cnam.openapi.yaml)
- Fixture: [`fixtures/smart-cnam/request.valid.json`](../../fixtures/smart-cnam/request.valid.json)
- Full docs: [`api-reference/smart-cnam-api.mdx`](../../api-reference/smart-cnam-api.mdx)
