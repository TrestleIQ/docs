# Caller Identification API — JavaScript Example

**Endpoint:** `GET https://api.trestleiq.com/3.1/caller_id`

## Fetch API

```javascript
const response = await fetch(
  "https://api.trestleiq.com/3.1/caller_id?phone=2069735100",
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
  "https://api.trestleiq.com/3.1/caller_id",
  {
    params: { phone: "2069735100" },
    headers: { "x-api-key": "YOUR_API_KEY" },
  }
);
console.log(data);
```

## See also

- OpenAPI spec: [`openapi/caller-identification.openapi.yaml`](../../openapi/caller-identification.openapi.yaml)
- Fixture: [`fixtures/caller-identification/response.success.json`](../../fixtures/caller-identification/response.success.json)
- Full docs: [`api-reference/caller-identification-api.mdx`](../../api-reference/caller-identification-api.mdx)
