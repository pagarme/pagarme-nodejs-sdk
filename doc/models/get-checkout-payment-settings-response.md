
# Get Checkout Payment Settings Response

Checkout Payment Settings Response

## Structure

`GetCheckoutPaymentSettingsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `successUrl` | `string \| undefined` | Optional | Success Url |
| `paymentUrl` | `string \| undefined` | Optional | Payment Url |
| `acceptedPaymentMethods` | `string[] \| undefined` | Optional | Accepted Payment Methods |
| `status` | `string \| undefined` | Optional | Status |
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
  "customer": {
    "id": "id0",
    "name": "name0",
    "email": "email6",
    "delinquent": false,
    "created_at": "2016-03-13T12:52:32.123Z"
  }
}
```

