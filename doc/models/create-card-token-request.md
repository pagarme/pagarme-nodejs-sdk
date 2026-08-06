
# Create Card Token Request

Card token data

## Structure

`CreateCardTokenRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `number` | `string` | Required | Credit card number |
| `holderName` | `string` | Required | Holder name, as written on the card |
| `expMonth` | `number` | Required | The expiration month |
| `expYear` | `number` | Required | The expiration year, that can be informed with 2 or 4 digits |
| `cvv` | `string` | Required | The card's security code |
| `brand` | `string` | Required | Card brand |
| `label` | `string` | Required | - |

## Example

```ts
import { CreateCardTokenRequest } from 'pagarmeapisdklib';

const createCardTokenRequest: CreateCardTokenRequest = {
  number: 'number8',
  holderName: 'holder_name0',
  expMonth: 182,
  expYear: 114,
  cvv: 'cvv2',
  brand: 'brand8',
  label: 'label4',
};
```

