
# Create Price Bracket Request

Request for creating a price bracket

## Structure

`CreatePriceBracketRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `startQuantity` | `number` | Required | Start quantity |
| `price` | `number` | Required | Price |
| `endQuantity` | `number \| undefined` | Optional | End quantity |
| `overagePrice` | `number \| undefined` | Optional | Overage price |

## Example

```ts
import { CreatePriceBracketRequest } from 'pagarmeapisdklib';

const createPriceBracketRequest: CreatePriceBracketRequest = {
  startQuantity: 230,
  price: 88,
  endQuantity: 238,
  overagePrice: 252,
};
```

