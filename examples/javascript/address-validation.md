# Address Validation API — JavaScript Example

**Endpoint:** `GET https://api.trestleiq.com/3.0/location_intel`

## Fetch API

```javascript
const params = new URLSearchParams({
  street_line_1: "800 Bellevue Way NE",
  city: "Bellevue",
  state_code: "WA",
  postal_code: "98004",
});

const response = await fetch(
  `https://api.trestleiq.com/3.0/location_intel?${params}`,
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
  "https://api.trestleiq.com/3.0/location_intel",
  {
    params: {
      street_line_1: "800 Bellevue Way NE",
      city: "Bellevue",
      state_code: "WA",
      postal_code: "98004",
    },
    headers: { "x-api-key": "YOUR_API_KEY" },
  }
);
console.log(data);
```

## See also

- OpenAPI spec: [`openapi/address-validation.openapi.yaml`](../../openapi/address-validation.openapi.yaml)
- Fixture: [`fixtures/address-validation/response.success.json`](../../fixtures/address-validation/response.success.json)
- Full docs: [`api-reference/address-validation-api.mdx`](../../api-reference/address-validation-api.mdx)
