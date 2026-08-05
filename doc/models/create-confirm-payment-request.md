
# Create Confirm Payment Request

## Structure

`CreateConfirmPaymentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string` | Required | Description |
| `amount` | `number \| undefined` | Optional | Amount |
| `code` | `string` | Required | Code reference |

## Example

```ts
import { CreateConfirmPaymentRequest } from 'pagarmeapisdklib';

const createConfirmPaymentRequest: CreateConfirmPaymentRequest = {
  description: 'description8',
  code: 'Code8',
  amount: 222,
};
```

