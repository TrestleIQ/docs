# Phone Validation API — JavaScript Example

**Endpoint:** `GET https://api.trestleiq.com/3.0/phone_intel`

## Fetch API

```javascript
const response = await fetch(
  "https://api.trestleiq.com/3.0/phone_intel?phone=2069735100",
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
  "https://api.trestleiq.com/3.0/phone_intel",
  {
    params: { phone: "2069735100" },
    headers: { "x-api-key": "YOUR_API_KEY" },
  }
);
console.log(data);
```

## See also

- OpenAPI spec: [`openapi/phone-validation.openapi.yaml`](../../openapi/phone-validation.openapi.yaml)
- Fixture: [`fixtures/phone-validation/response.success.json`](../../fixtures/phone-validation/response.success.json)
- Full docs: [`api-reference/phone-validation-api.mdx`](../../api-reference/phone-validation-api.mdx)
