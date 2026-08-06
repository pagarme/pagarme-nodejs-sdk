
# Update Pricing Scheme Request

Request for updating a pricing scheme

## Structure

`UpdatePricingSchemeRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `schemeType` | `string` | Required | Scheme type |
| `priceBrackets` | [`UpdatePriceBracketRequest[]`](../../doc/models/update-price-bracket-request.md) | Required | Price brackets |
| `price` | `number \| undefined` | Optional | Price |
| `minimumPrice` | `number \| undefined` | Optional | Minimum price |
| `percentage` | `number \| undefined` | Optional | percentual value used in pricing_scheme Percent |

## Example

```ts
import { UpdatePricingSchemeRequest } from 'pagarmeapisdklib';

const updatePricingSchemeRequest: UpdatePricingSchemeRequest = {
  schemeType: '',
  priceBrackets: [
    {}
  ],
  price: 180,
  minimumPrice: 84,
  percentage: 238.06,
};
```

