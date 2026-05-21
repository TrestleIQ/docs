# Real Contact API — Python Example

**Endpoint:** `GET https://api.trestleiq.com/2.0/real_contact`

## requests library

```python
import requests

headers = {"x-api-key": "YOUR_API_KEY"}
params = {
    "name": "John Doe",
    "phone": "4259853735",
    "email": "john.doe@example.com",
    "ip_address": "192.0.0.1",
    "address.street_line_1": "100 Syrws St",
    "address.city": "Lynden",
    "address.state_code": "WA",
    "address.postal_code": "98264",
    "address.country_code": "US",
}

response = requests.get(
    "https://api.trestleiq.com/2.0/real_contact",
    params=params,
    headers=headers,
    timeout=30,
)
data = response.json()
print(data)
```

## With add-ons

```python
import requests

headers = {"x-api-key": "YOUR_API_KEY"}
params = {
    "name": "John Doe",
    "phone": "4259853735",
    "add_ons": "litigator_checks,email_checks_deliverability",
}

response = requests.get(
    "https://api.trestleiq.com/2.0/real_contact",
    params=params,
    headers=headers,
    timeout=30,
)
data = response.json()
print(data)
```

## See also

- OpenAPI spec: [`openapi/real-contact.openapi.yaml`](../../openapi/real-contact.openapi.yaml)
- Fixture: [`fixtures/real-contact/response.success.json`](../../fixtures/real-contact/response.success.json)
- Full docs: [`api-reference/real-contact-api.mdx`](../../api-reference/real-contact-api.mdx)
