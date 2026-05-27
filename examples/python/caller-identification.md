# Caller Identification API — Python Example

**Endpoint:** `GET https://api.trestleiq.com/3.1/caller_id`

## requests library

```python
import requests

headers = {"x-api-key": "YOUR_API_KEY"}

response = requests.get(
    "https://api.trestleiq.com/3.1/caller_id",
    params={"phone": "2069735100"},
    headers=headers,
    timeout=30,
)
data = response.json()
print(data)
```

## With hints

```python
import requests

headers = {"x-api-key": "YOUR_API_KEY"}
params = {
    "phone": "2069735100",
    "phone.country_hint": "US",
    "phone.name_hint": "Waidong Syrws",
    "phone.postal_code_hint": "98264",
}

response = requests.get(
    "https://api.trestleiq.com/3.1/caller_id",
    params=params,
    headers=headers,
    timeout=30,
)
data = response.json()
print(data)
```

## See also

- OpenAPI spec: [`openapi/caller-identification.openapi.yaml`](../../openapi/caller-identification.openapi.yaml)
- Fixture: [`fixtures/caller-identification/response.success.json`](../../fixtures/caller-identification/response.success.json)
- Full docs: [`api-reference/caller-identification-api.mdx`](../../api-reference/caller-identification-api.mdx)
