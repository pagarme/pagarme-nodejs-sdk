
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

## Example

```ts
import { GetCheckoutPaymentSettingsResponse } from 'pagarmeapisdklib';

const getCheckoutPaymentSettingsResponse: GetCheckoutPaymentSettingsResponse = {
  successUrl: 'success_url8',
  paymentUrl: 'payment_url0',
  acceptedPaymentMethods: [
    'accepted_payment_methods9',
    'accepted_payment_methods0',
    'accepted_payment_methods1'
  ],
  status: 'status8',
  customer: null,
};
```

