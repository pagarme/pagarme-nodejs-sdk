
# Get Checkout Payment Settings Response

Checkout Payment Settings Response

## Structure

`GetCheckoutPaymentSettingsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `successUrl` | `string \| null \| undefined` | Optional | Success Url |
| `paymentUrl` | `string \| null \| undefined` | Optional | Payment Url |
| `acceptedPaymentMethods` | `string[] \| null \| undefined` | Optional | Accepted Payment Methods |
| `status` | `string \| null \| undefined` | Optional | Status |
| `customer` | [`GetCustomerResponse \| null \| undefined`](../../doc/models/get-customer-response.md) | Optional | Customer |
| `amount` | `number \| null \| undefined` | Optional | Payment amount |
| `defaultPaymentMethod` | `string \| null \| undefined` | Optional | Default Payment Method |
| `gatewayAffiliationId` | `string \| null \| undefined` | Optional | Gateway Affiliation Id |

## Example (as JSON)

```json
{
  "success_url": "success_url0",
  "payment_url": "payment_url8",
  "accepted_payment_methods": [
    "accepted_payment_methods1",
    "accepted_payment_methods2"
  ],
  "status": "status0",
  "customer": {
    "id": "id0",
    "name": "name0",
    "email": "email6",
    "delinquent": false,
    "created_at": "2016-03-13T12:52:32.123Z"
  }
}
```

