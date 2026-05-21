# Reverse Address API — Python Example

**Endpoint:** `GET https://api.trestleiq.com/3.1/location`

## requests library

```python
import requests

headers = {"x-api-key": "YOUR_API_KEY"}
params = {
    "street_line_1": "100 Main St",
    "city": "Seattle",
    "state_code": "WA",
    "postal_code": "98101",
    "country_code": "US",
}

response = requests.get(
    "https://api.trestleiq.com/3.1/location",
    params=params,
    headers=headers,
    timeout=30,
)
data = response.json()
print(data)
```

## See also

- OpenAPI spec: [`openapi/reverse-address.openapi.yaml`](../../openapi/reverse-address.openapi.yaml)
- Fixture: [`fixtures/reverse-address/response.success.json`](../../fixtures/reverse-address/response.success.json)
- Full docs: [`api-reference/reverse-address-api.mdx`](../../api-reference/reverse-address-api.mdx)
