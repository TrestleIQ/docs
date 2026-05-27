# Real Contact API — JavaScript Example

**Endpoint:** `GET https://api.trestleiq.com/2.0/real_contact`

## Fetch API (browser/Deno)

```javascript
const params = new URLSearchParams({
  name: "John Doe",
  phone: "4259853735",
  email: "john.doe@example.com",
  ip_address: "192.0.0.1",
  "address.street_line_1": "100 Syrws St",
  "address.city": "Lynden",
  "address.state_code": "WA",
  "address.postal_code": "98264",
  "address.country_code": "US",
});

const response = await fetch(
  `https://api.trestleiq.com/2.0/real_contact?${params}`,
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
  "https://api.trestleiq.com/2.0/real_contact",
  {
    params: {
      name: "John Doe",
      phone: "4259853735",
      email: "john.doe@example.com",
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

- OpenAPI spec: [`openapi/real-contact.openapi.yaml`](../../openapi/real-contact.openapi.yaml)
- Fixture: [`fixtures/real-contact/response.success.json`](../../fixtures/real-contact/response.success.json)
- Full docs: [`api-reference/real-contact-api.mdx`](../../api-reference/real-contact-api.mdx)
