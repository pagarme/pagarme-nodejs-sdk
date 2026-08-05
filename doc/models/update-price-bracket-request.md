
# Update Price Bracket Request

Request for updating a price bracket

## Structure

`UpdatePriceBracketRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `startQuantity` | `number` | Required | Start quantity of the bracket |
| `price` | `number` | Required | Price |
| `endQuantity` | `number \| undefined` | Optional | End quantity of the bracket |
| `overagePrice` | `number \| undefined` | Optional | Overage price |

## Example

```ts
import { UpdatePriceBracketRequest } from 'pagarmeapisdklib';

const updatePriceBracketRequest: UpdatePriceBracketRequest = {
  startQuantity: 160,
  price: 98,
  endQuantity: 168,
  overagePrice: 182,
};
```

