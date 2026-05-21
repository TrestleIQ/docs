# Phone Validation API — Python Example

**Endpoint:** `GET https://api.trestleiq.com/3.0/phone_intel`

## requests library

```python
import requests

headers = {"x-api-key": "YOUR_API_KEY"}

response = requests.get(
    "https://api.trestleiq.com/3.0/phone_intel",
    params={"phone": "2069735100"},
    headers=headers,
    timeout=30,
)
data = response.json()
print(data)
```

## With litigator check add-on

```python
import requests

headers = {"x-api-key": "YOUR_API_KEY"}

response = requests.get(
    "https://api.trestleiq.com/3.0/phone_intel",
    params={"phone": "2069735100", "add_ons": "litigator_checks"},
    headers=headers,
    timeout=30,
)
data = response.json()
print(data)
```

## See also

- OpenAPI spec: [`openapi/phone-validation.openapi.yaml`](../../openapi/phone-validation.openapi.yaml)
- Fixture: [`fixtures/phone-validation/response.success.json`](../../fixtures/phone-validation/response.success.json)
- Full docs: [`api-reference/phone-validation-api.mdx`](../../api-reference/phone-validation-api.mdx)
