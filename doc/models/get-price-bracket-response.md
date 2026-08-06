
# Get Price Bracket Response

Response object for getting a price bracket

## Structure

`GetPriceBracketResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `startQuantity` | `number \| null \| undefined` | Optional | - |
| `price` | `number \| null \| undefined` | Optional | - |
| `endQuantity` | `number \| null \| undefined` | Optional | - |
| `overagePrice` | `number \| null \| undefined` | Optional | - |

## Example

```ts
import { GetPriceBracketResponse } from 'pagarmeapisdklib';

const getPriceBracketResponse: GetPriceBracketResponse = {
  startQuantity: 80,
  price: 18,
  endQuantity: 88,
  overagePrice: 102,
};
```

