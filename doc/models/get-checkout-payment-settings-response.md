
# Get Checkout Payment Settings Response

Checkout Payment Settings Response

## Structure

`GetCheckoutPaymentSettingsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `successUrl` | `string \| null` | Required | Success Url |
| `paymentUrl` | `string \| null` | Required | Payment Url |
| `acceptedPaymentMethods` | `string[] \| null` | Required | Accepted Payment Methods |
| `status` | `string \| null` | Required | Status |
| `customer` | [`GetCustomerResponse \| undefined`](../../doc/models/get-customer-response.md) | Optional | Customer |
| `amount` | `number \| undefined` | Optional | Payment amount |
| `defaultPaymentMethod` | `string \| undefined` | Optional | Default Payment Method |
| `gatewayAffiliationId` | `string \| undefined` | Optional | Gateway Affiliation Id |

## Example (as JSON)

```json
{
  "success_url": "success_url2",
  "payment_url": "payment_url6",
  "accepted_payment_methods": [
    "accepted_payment_methods3",
    "accepted_payment_methods4",
    "accepted_payment_methods5"
  ],
  "status": "status8",
  "customer": null,
  "amount": null,
  "default_payment_method": null,
  "gateway_affiliation_id": null
}
```

