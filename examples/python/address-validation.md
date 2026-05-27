# Address Validation API — Python Example

**Endpoint:** `GET https://api.trestleiq.com/3.0/location_intel`

## requests library

```python
import requests

headers = {"x-api-key": "YOUR_API_KEY"}
params = {
    "street_line_1": "800 Bellevue Way NE",
    "city": "Bellevue",
    "state_code": "WA",
    "postal_code": "98004",
}

response = requests.get(
    "https://api.trestleiq.com/3.0/location_intel",
    params=params,
    headers=headers,
    timeout=30,
)
data = response.json()
print(data)
```

## See also

- OpenAPI spec: [`openapi/address-validation.openapi.yaml`](../../openapi/address-validation.openapi.yaml)
- Fixture: [`fixtures/address-validation/response.success.json`](../../fixtures/address-validation/response.success.json)
- Full docs: [`api-reference/address-validation-api.mdx`](../../api-reference/address-validation-api.mdx)
