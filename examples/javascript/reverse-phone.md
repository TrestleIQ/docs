# Reverse Phone API — JavaScript Example

**Endpoint:** `GET https://api.trestleiq.com/3.2/phone`

## Fetch API

```javascript
const response = await fetch(
  "https://api.trestleiq.com/3.2/phone?phone=2069735100",
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

const { data } = await axios.get("https://api.trestleiq.com/3.2/phone", {
  params: { phone: "2069735100" },
  headers: { "x-api-key": "YOUR_API_KEY" },
});
console.log(data);
```

## See also

- OpenAPI spec: [`openapi/reverse-phone.openapi.yaml`](../../openapi/reverse-phone.openapi.yaml)
- Fixture: [`fixtures/reverse-phone/response.success.json`](../../fixtures/reverse-phone/response.success.json)
- Full docs: [`api-reference/reverse-phone-api.mdx`](../../api-reference/reverse-phone-api.mdx)
