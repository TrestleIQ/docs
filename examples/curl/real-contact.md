# Real Contact API — cURL Example

**Endpoint:** `GET https://api.trestleiq.com/2.0/real_contact`

## Basic request (phone + name)

```bash
curl --request GET \
  --url "https://api.trestleiq.com/2.0/real_contact?name=John%20Doe&phone=4259853735" \
  --header "x-api-key: YOUR_API_KEY"
```

## Full request (all fields)

```bash
curl --request GET \
  --url "https://api.trestleiq.com/2.0/real_contact?name=John%20Doe&phone=4259853735&email=john.doe@example.com&ip_address=192.0.0.1&address.street_line_1=100%20Syrws%20St&address.city=Lynden&address.state_code=WA&address.postal_code=98264&address.country_code=US" \
  --header "x-api-key: YOUR_API_KEY"
```

## With add-ons

```bash
curl --request GET \
  --url "https://api.trestleiq.com/2.0/real_contact?name=John%20Doe&phone=4259853735&add_ons=litigator_checks,email_checks_deliverability" \
  --header "x-api-key: YOUR_API_KEY"
```

## See also

- OpenAPI spec: [`openapi/real-contact.openapi.yaml`](../../openapi/real-contact.openapi.yaml)
- Fixture: [`fixtures/real-contact/request.valid.json`](../../fixtures/real-contact/request.valid.json)
- Full docs: [`api-reference/real-contact-api.mdx`](../../api-reference/real-contact-api.mdx)
