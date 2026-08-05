
# Create Checkout Card Installment Option Request

Options for card installment

## Structure

`CreateCheckoutCardInstallmentOptionRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `number` | `number` | Required | Installment quantity |
| `total` | `number` | Required | Total amount |

## Example

```ts
import { CreateCheckoutCardInstallmentOptionRequest } from 'pagarmeapisdklib';

const createCheckoutCardInstallmentOptionRequest: CreateCheckoutCardInstallmentOptionRequest = {
  number: 68,
  total: 176,
};
```

