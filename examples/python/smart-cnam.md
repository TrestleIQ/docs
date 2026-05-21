# Smart CNAM API — Python Example

**Endpoint:** `GET https://api.trestleiq.com/3.1/cnam`

## requests library

```python
import requests

headers = {
    "x-api-key": "YOUR_API_KEY",
    "Accept": "application/json",
}

response = requests.get(
    "https://api.trestleiq.com/3.1/cnam",
    params={"phone": "2069735100", "phone.country_hint": "US"},
    headers=headers,
    timeout=30,
)
data = response.json()
print(data)
```

## See also

- OpenAPI spec: [`openapi/smart-cnam.openapi.yaml`](../../openapi/smart-cnam.openapi.yaml)
- Fixture: [`fixtures/smart-cnam/response.success.json`](../../fixtures/smart-cnam/response.success.json)
- Full docs: [`api-reference/smart-cnam-api.mdx`](../../api-reference/smart-cnam-api.mdx)
