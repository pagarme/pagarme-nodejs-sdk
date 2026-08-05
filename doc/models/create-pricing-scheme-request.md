
# Create Pricing Scheme Request

Request for creating a pricing scheme

## Structure

`CreatePricingSchemeRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `schemeType` | `string` | Required | Scheme type |
| `priceBrackets` | [`CreatePriceBracketRequest[] \| undefined`](../../doc/models/create-price-bracket-request.md) | Optional | Price brackets |
| `price` | `number \| undefined` | Optional | Price |
| `minimumPrice` | `number \| undefined` | Optional | Minimum price |
| `percentage` | `number \| undefined` | Optional | percentual value used in pricing_scheme Percent |

## Example

```ts
import { CreatePricingSchemeRequest } from 'pagarmeapisdklib';

const createPricingSchemeRequest: CreatePricingSchemeRequest = {
  schemeType: 'scheme_type8',
  priceBrackets: [
    {},
    {
      startQuantity: 0,
      price: 0,
    }
  ],
  price: 124,
  minimumPrice: 28,
  percentage: 5.66,
};
```

