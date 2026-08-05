
# Create Setup Request

Request for creating a Setup for a subscription. The setup is an order that will be created at the subscription creation.

## Structure

`CreateSetupRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | `number` | Required | Setup amount |
| `description` | `string` | Required | Description |
| `payment` | [`CreatePaymentRequest`](../../doc/models/create-payment-request.md) | Required | Payment data |

## Example

```ts
import { CreateSetupRequest } from 'pagarmeapisdklib';

const createSetupRequest: CreateSetupRequest = {
  amount: 222,
  description: 'description6',
  payment: {},
};
```

