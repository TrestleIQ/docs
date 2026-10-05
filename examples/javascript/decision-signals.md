# Decision Signals API — JavaScript Example

**Endpoint:** `GET https://api.trestleiq.com/1.0/decision_signals`

## Fetch API (browser/Deno)

```javascript
const params = new URLSearchParams({
  transaction_id: "txn_123",
  transaction_time: "2026-06-15T10:00",
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
  ip_address: "192.0.0.1",
});

const response = await fetch(
  `https://api.trestleiq.com/1.0/decision_signals?${params}`,
  {
    headers: {
      "x-api-key": "YOUR_API_KEY",
    },
  }
);
const data = await response.json();
console.log(data);
```

## Node.js (axios)

```javascript
import axios from "axios";

const { data } = await axios.get(
  "https://api.trestleiq.com/1.0/decision_signals",
  {
    params: {
      transaction_id: "txn_123",
      transaction_time: "2026-06-15T10:00",
      "primary.name": "John Doe",
      "primary.phone": "4259853735",
      "primary.email_address": "john.doe@example.com",
      ip_address: "192.0.0.1",
    },
    headers: {
      "x-api-key": "YOUR_API_KEY",
    },
  }
);
console.log(data);
```

## See also

- OpenAPI spec: [`openapi/decision-signals.openapi.yaml`](../../openapi/decision-signals.openapi.yaml)
- Fixture: [`fixtures/decision-signals/response.success.json`](../../fixtures/decision-signals/response.success.json)
- Full docs: [Decision Signals API](https://docs.trestleiq.com/api-reference/decision-signals-api)
