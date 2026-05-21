# Phone Feedback API — Python Example

**Endpoint:** `POST https://api.trestleiq.com/1.0/phone_feedback`

## requests library

```python
import requests

headers = {
    "x-api-key": "YOUR_API_KEY",
    "Content-Type": "application/json",
}

payload = {
    "response_id": "T_b5d031b8-e8a3-4eef-8fa8-d87d3b7e386f",
    "phone": "2069735100",
    "name": "Waidong Syrws",
    "phone_status": "Connected",
    "phone_right_party_contact": True,
}

response = requests.post(
    "https://api.trestleiq.com/1.0/phone_feedback",
    json=payload,
    headers=headers,
    timeout=30,
)
data = response.json()
print(data)
```

## Disconnected number example

```python
import requests

headers = {
    "x-api-key": "YOUR_API_KEY",
    "Content-Type": "application/json",
}

payload = {
    "response_id": "T_b5d031b8-e8a3-4eef-8fa8-d87d3b7e386f",
    "phone": "2069735100",
    "phone_status": "Disconnected",
    "phone_right_party_contact": False,
}

response = requests.post(
    "https://api.trestleiq.com/1.0/phone_feedback",
    json=payload,
    headers=headers,
    timeout=30,
)
data = response.json()
print(data)
```

## See also

- OpenAPI spec: [`openapi/phone-feedback.openapi.yaml`](../../openapi/phone-feedback.openapi.yaml)
- Fixture: [`fixtures/phone-feedback/request.valid.json`](../../fixtures/phone-feedback/request.valid.json)
- Full docs: [`api-reference/phone-feedback-api.mdx`](../../api-reference/phone-feedback-api.mdx)
