# Phone Feedback API — cURL Example

**Endpoint:** `POST https://api.trestleiq.com/1.0/phone_feedback`

## Submit feedback

```bash
curl --location --request POST "https://api.trestleiq.com/1.0/phone_feedback" \
  --header "x-api-key: YOUR_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "response_id": "T_b5d031b8-e8a3-4eef-8fa8-d87d3b7e386f",
    "phone": "2069735100",
    "name": "Waidong Syrws",
    "phone_status": "Connected",
    "phone_right_party_contact": true
  }'
```

## Disconnected number example

```bash
curl --location --request POST "https://api.trestleiq.com/1.0/phone_feedback" \
  --header "x-api-key: YOUR_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "response_id": "T_b5d031b8-e8a3-4eef-8fa8-d87d3b7e386f",
    "phone": "2069735100",
    "phone_status": "Disconnected",
    "phone_right_party_contact": false
  }'
```

## See also

- OpenAPI spec: [`openapi/phone-feedback.openapi.yaml`](../../openapi/phone-feedback.openapi.yaml)
- Fixture: [`fixtures/phone-feedback/request.valid.json`](../../fixtures/phone-feedback/request.valid.json)
- Full docs: [`api-reference/phone-feedback-api.mdx`](../../api-reference/phone-feedback-api.mdx)
