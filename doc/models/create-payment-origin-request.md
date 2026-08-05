
# Create Payment Origin Request

Request object for PaymentOrigin

## Structure

`CreatePaymentOriginRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `brandId` | `string \| null \| undefined` | Optional | - |
| `chargeId` | `string \| null \| undefined` | Optional | - |

## Example

```ts
import { CreatePaymentOriginRequest } from 'pagarmeapisdklib';

const createPaymentOriginRequest: CreatePaymentOriginRequest = {
  brandId: 'brand_id8',
  chargeId: 'charge_id2',
};
```

