# Address Validation API — cURL Example

**Endpoint:** `GET https://api.trestleiq.com/3.0/location_intel`

## Basic request

```bash
curl --request GET \
  --url "https://api.trestleiq.com/3.0/location_intel?street_line_1=800%20Bellevue%20Way%20NE&city=Bellevue&state_code=WA&postal_code=98004" \
  --header "x-api-key: YOUR_API_KEY"
```

## With all address fields

```bash
curl --request GET \
  --url "https://api.trestleiq.com/3.0/location_intel?street_line_1=800%20Bellevue%20Way%20NE&street_line_2=Ste%20100&city=Bellevue&state_code=WA&postal_code=98004" \
  --header "x-api-key: YOUR_API_KEY"
```

## See also

- OpenAPI spec: [`openapi/address-validation.openapi.yaml`](../../openapi/address-validation.openapi.yaml)
- Fixture: [`fixtures/address-validation/request.valid.json`](../../fixtures/address-validation/request.valid.json)
- Full docs: [`api-reference/address-validation-api.mdx`](../../api-reference/address-validation-api.mdx)
