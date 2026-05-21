# Reverse Phone API — Python Example

**Endpoint:** `GET https://api.trestleiq.com/3.2/phone`

## requests library

```python
import requests

headers = {"x-api-key": "YOUR_API_KEY"}

response = requests.get(
    "https://api.trestleiq.com/3.2/phone",
    params={"phone": "2069735100"},
    headers=headers,
    timeout=30,
)
data = response.json()
print(data)
```

## With ranking hints

```python
import requests

headers = {"x-api-key": "YOUR_API_KEY"}
params = {
    "phone": "2069735100",
    "phone.country_hint": "US",
    "phone.name_hint": "John Doe",
    "phone.postal_code_hint": "98264",
}

response = requests.get(
    "https://api.trestleiq.com/3.2/phone",
    params=params,
    headers=headers,
    timeout=30,
)
data = response.json()
print(data)
```

## See also

- OpenAPI spec: [`openapi/reverse-phone.openapi.yaml`](../../openapi/reverse-phone.openapi.yaml)
- Fixture: [`fixtures/reverse-phone/response.success.json`](../../fixtures/reverse-phone/response.success.json)
- Full docs: [`api-reference/reverse-phone-api.mdx`](../../api-reference/reverse-phone-api.mdx)
