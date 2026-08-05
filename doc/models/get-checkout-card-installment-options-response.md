
# Get Checkout Card Installment Options Response

## Structure

`GetCheckoutCardInstallmentOptionsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `number` | `bigint \| null` | Required | Número de parcelas |
| `total` | `number \| null` | Required | Valor total da compra |

## Example

```ts
import { GetCheckoutCardInstallmentOptionsResponse } from 'pagarmeapisdklib';

const getCheckoutCardInstallmentOptionsResponse: GetCheckoutCardInstallmentOptionsResponse = {
  number: BigInt(40),
  total: 188,
};
```

