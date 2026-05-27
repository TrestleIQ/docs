# Smart CNAM API — JavaScript Example

**Endpoint:** `GET https://api.trestleiq.com/3.1/cnam`

## Fetch API

```javascript
const response = await fetch(
  "https://api.trestleiq.com/3.1/cnam?phone=2069735100&phone.country_hint=US",
  {
    headers: {
      "x-api-key": "YOUR_API_KEY",
      Accept: "application/json",
    },
  }
);
const data = await response.json();
console.log(data);
```

## Node.js (axios)

```javascript
import axios from "axios";

const { data } = await axios.get("https://api.trestleiq.com/3.1/cnam", {
  params: { phone: "2069735100", "phone.country_hint": "US" },
  headers: {
    "x-api-key": "YOUR_API_KEY",
    Accept: "application/json",
  },
});
console.log(data);
```

## See also

- OpenAPI spec: [`openapi/smart-cnam.openapi.yaml`](../../openapi/smart-cnam.openapi.yaml)
- Fixture: [`fixtures/smart-cnam/response.success.json`](../../fixtures/smart-cnam/response.success.json)
- Full docs: [`api-reference/smart-cnam-api.mdx`](../../api-reference/smart-cnam-api.mdx)
