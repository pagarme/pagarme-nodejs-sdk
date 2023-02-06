
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
  "success_url": null,
  "payment_url": null,
  "accepted_payment_methods": null,
  "status": null,
  "customer": null,
  "amount": null,
  "default_payment_method": null,
  "gateway_affiliation_id": null
}
```

