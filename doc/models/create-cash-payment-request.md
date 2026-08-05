
# Create Cash Payment Request

## Structure

`CreateCashPaymentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string` | Required | Description |
| `confirm` | `boolean` | Required | Indicates whether cash collection will be confirmed in the act of creation |

## Example

```ts
import { CreateCashPaymentRequest } from 'pagarmeapisdklib';

const createCashPaymentRequest: CreateCashPaymentRequest = {
  description: 'description4',
  confirm: false,
};
```

