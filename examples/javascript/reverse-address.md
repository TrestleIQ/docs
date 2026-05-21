# Reverse Address API — JavaScript Example

**Endpoint:** `GET https://api.trestleiq.com/3.1/location`

## Fetch API

```javascript
const params = new URLSearchParams({
  street_line_1: "100 Main St",
  city: "Seattle",
  state_code: "WA",
  postal_code: "98101",
});

const response = await fetch(
  `https://api.trestleiq.com/3.1/location?${params}`,
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

const { data } = await axios.get("https://api.trestleiq.com/3.1/location", {
  params: {
    street_line_1: "100 Main St",
    city: "Seattle",
    state_code: "WA",
    postal_code: "98101",
  },
  headers: { "x-api-key": "YOUR_API_KEY" },
});
console.log(data);
```

## See also

- OpenAPI spec: [`openapi/reverse-address.openapi.yaml`](../../openapi/reverse-address.openapi.yaml)
- Fixture: [`fixtures/reverse-address/response.success.json`](../../fixtures/reverse-address/response.success.json)
- Full docs: [`api-reference/reverse-address-api.mdx`](../../api-reference/reverse-address-api.mdx)
