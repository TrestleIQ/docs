# Decision Signals API — Python Example

**Endpoint:** `GET https://api.trestleiq.com/1.0/decision_signals`

## requests library

```python
import requests

headers = {"x-api-key": "YOUR_API_KEY"}
params = {
    "transaction_id": "txn_123",
    "transaction_time": "2026-06-15T10:00",
    "primary.name": "John Doe",
    "primary.phone": "4259853735",
    "primary.address.street_line_1": "10 Main St",
    "primary.address.city": "Lynden",
    "primary.address.state_code": "WA",
    "primary.address.postal_code": "98225",
    "primary.email_address": "john.doe@example.com",
    "secondary.name": "Waidong L Syrws",
    "secondary.phone": "2069735100",
    "secondary.address.street_line_1": "100 Syrws St",
    "secondary.address.city": "Lynden",
    "secondary.address.state_code": "WA",
    "secondary.address.postal_code": "98264",
    "secondary.email_address": "waidong220@example.com",
    "ip_address": "192.0.0.1",
}

response = requests.get(
    "https://api.trestleiq.com/1.0/decision_signals",
    params=params,
    headers=headers,
    timeout=30,
)
data = response.json()
print(data)
```

## Business as the primary party

```python
import requests

headers = {"x-api-key": "YOUR_API_KEY"}
params = {
    "transaction_id": "txn_456",
    "transaction_time": "2026-06-15T10:00",
    "primary.business_name": "The Golden Company",
    "primary.phone": "2069735100",
    "secondary.name": "Robin Cooke",
    "secondary.email_address": "robin.cooke@example.com",
}

response = requests.get(
    "https://api.trestleiq.com/1.0/decision_signals",
    params=params,
    headers=headers,
    timeout=30,
)
data = response.json()
print(data)
```

## See also

- OpenAPI spec: [`openapi/decision-signals.openapi.yaml`](../../openapi/decision-signals.openapi.yaml)
- Fixture: [`fixtures/decision-signals/response.success.json`](../../fixtures/decision-signals/response.success.json)
- Full docs: [Decision Signals API](https://docs.trestleiq.com/api-reference/decision-signals-api)
