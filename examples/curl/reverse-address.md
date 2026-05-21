# Reverse Address API — cURL Example

**Endpoint:** `GET https://api.trestleiq.com/3.1/location`

## Basic request

```bash
curl --request GET \
  --url "https://api.trestleiq.com/3.1/location?street_line_1=100%20Main%20St&city=Seattle&state_code=WA&postal_code=98101" \
  --header "x-api-key: YOUR_API_KEY"
```

## With all address fields

```bash
curl --request GET \
  --url "https://api.trestleiq.com/3.1/location?street_line_1=100%20Main%20St&street_line_2=Ste%201&city=Seattle&state_code=WA&postal_code=98101&country_code=US" \
  --header "x-api-key: YOUR_API_KEY"
```

## See also

- OpenAPI spec: [`openapi/reverse-address.openapi.yaml`](../../openapi/reverse-address.openapi.yaml)
- Fixture: [`fixtures/reverse-address/request.valid.json`](../../fixtures/reverse-address/request.valid.json)
- Full docs: [`api-reference/reverse-address-api.mdx`](../../api-reference/reverse-address-api.mdx)
