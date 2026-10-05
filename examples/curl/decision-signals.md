# Decision Signals API — cURL Example

**Endpoint:** `GET https://api.trestleiq.com/1.0/decision_signals`

## Basic request (primary inputs only)

```bash
curl --request GET \
  --url "https://api.trestleiq.com/1.0/decision_signals?transaction_id=txn_123&transaction_time=2026-06-15T10:00&primary.name=John%20Doe&primary.phone=4259853735&primary.address.street_line_1=10%20Main%20St&primary.address.city=Lynden&primary.address.state_code=WA&primary.address.postal_code=98225&primary.email_address=john.doe@example.com&ip_address=192.0.0.1" \
  --header "x-api-key: YOUR_API_KEY"
```

## Primary and secondary inputs

```bash
curl --request GET \
  --url "https://api.trestleiq.com/1.0/decision_signals?transaction_id=txn_123&transaction_time=2026-06-15T10:00&primary.name=John%20Doe&primary.phone=4259853735&primary.address.street_line_1=10%20Main%20St&primary.address.city=Lynden&primary.address.state_code=WA&primary.address.postal_code=98225&primary.email_address=john.doe@example.com&secondary.name=Waidong%20L%20Syrws&secondary.phone=2069735100&secondary.address.street_line_1=100%20Syrws%20St&secondary.address.city=Lynden&secondary.address.state_code=WA&secondary.address.postal_code=98264&secondary.email_address=waidong220@example.com&ip_address=192.0.0.1" \
  --header "x-api-key: YOUR_API_KEY"
```

## Sandbox request

Returns the canned high-trust response in `fixtures/decision-signals/response.success.json` without live enrichment.

```bash
curl --request GET \
  --url "https://api.trestleiq.com/1.0/decision_signals?transaction_id=kushal-pos-1&transaction_time=2026-06-23%2010:00&primary.name=Jon%20Snow&primary.phone=%2B13005550201&primary.address.street_line_1=103%20Main%20Doors&primary.address.city=Kings%20Landing&primary.address.state_code=WA&primary.address.postal_code=98101&primary.email_address=jsnow@got.com&ip_address=192.0.2.1&secondary.name=Arya%20Stark&secondary.phone=%2B13005550202&secondary.address.street_line_1=980%20Kingsroad%20Way&secondary.address.city=Winterfell&secondary.address.state_code=WA&secondary.address.postal_code=99988&secondary.email_address=astark@got.com&is_sandbox=true" \
  --header "x-api-key: YOUR_API_KEY"
```

## See also

- OpenAPI spec: [`openapi/decision-signals.openapi.yaml`](../../openapi/decision-signals.openapi.yaml)
- Fixture: [`fixtures/decision-signals/request.valid.json`](../../fixtures/decision-signals/request.valid.json)
- Full docs: [Decision Signals API](https://docs.trestleiq.com/api-reference/decision-signals-api)
