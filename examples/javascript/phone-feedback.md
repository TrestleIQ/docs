# Phone Feedback API — JavaScript Example

**Endpoint:** `POST https://api.trestleiq.com/1.0/phone_feedback`

## Fetch API

```javascript
const response = await fetch("https://api.trestleiq.com/1.0/phone_feedback", {
  method: "POST",
  headers: {
    "x-api-key": "YOUR_API_KEY",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    response_id: "T_b5d031b8-e8a3-4eef-8fa8-d87d3b7e386f",
    phone: "2069735100",
    name: "Waidong Syrws",
    phone_status: "Connected",
    phone_right_party_contact: true,
  }),
});
const data = await response.json();
console.log(data);
```

## Node.js (axios)

```javascript
import axios from "axios";

const { data } = await axios.post(
  "https://api.trestleiq.com/1.0/phone_feedback",
  {
    response_id: "T_b5d031b8-e8a3-4eef-8fa8-d87d3b7e386f",
    phone: "2069735100",
    name: "Waidong Syrws",
    phone_status: "Connected",
    phone_right_party_contact: true,
  },
  {
    headers: { "x-api-key": "YOUR_API_KEY" },
  }
);
console.log(data);
```

## See also

- OpenAPI spec: [`openapi/phone-feedback.openapi.yaml`](../../openapi/phone-feedback.openapi.yaml)
- Fixture: [`fixtures/phone-feedback/request.valid.json`](../../fixtures/phone-feedback/request.valid.json)
- Full docs: [`api-reference/phone-feedback-api.mdx`](../../api-reference/phone-feedback-api.mdx)
