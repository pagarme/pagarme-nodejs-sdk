
# Create Charge Request

Request for creating a new charge

## Structure

`CreateChargeRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | `string \| null \| undefined` | Optional | Code |
| `amount` | `number` | Required | The amount of the charge, in cents |
| `customerId` | `string \| null \| undefined` | Optional | The customer's id |
| `customer` | [`CreateCustomerRequest \| null \| undefined`](../../doc/models/create-customer-request.md) | Optional | Customer data |
| `payment` | [`CreatePaymentRequest`](../../doc/models/create-payment-request.md) | Required | Payment data |
| `metadata` | `Record<string, string> \| null \| undefined` | Optional | Metadata |
| `dueAt` | `string \| null \| undefined` | Optional | The charge due date |
| `antifraud` | [`CreateAntifraudRequest \| null \| undefined`](../../doc/models/create-antifraud-request.md) | Optional | - |
| `orderId` | `string` | Required | Order Id |

## Example

```ts
import { CreateChargeRequest } from 'pagarmeapisdklib';

const createChargeRequest: CreateChargeRequest = {
  amount: 160,
  payment: {},
  orderId: 'order_id8',
  code: 'code2',
  customerId: 'customer_id2',
  customer: null,
  metadata: {
    'key0': 'metadata1',
    'key1': 'metadata0',
    'key2': 'metadata9'
  },
  dueAt: '2016-03-13T12:52:32.123Z',
};
```

