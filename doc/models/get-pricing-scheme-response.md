
# Get Pricing Scheme Response

Response object for getting a pricing scheme

## Structure

`GetPricingSchemeResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `price` | `number \| null \| undefined` | Optional | - |
| `schemeType` | `string \| null \| undefined` | Optional | - |
| `priceBrackets` | [`GetPriceBracketResponse[] \| null \| undefined`](../../doc/models/get-price-bracket-response.md) | Optional | - |
| `minimumPrice` | `number \| null \| undefined` | Optional | - |
| `percentage` | `number \| null \| undefined` | Optional | percentual value used in pricing_scheme Percent |

## Example

```ts
import { GetPricingSchemeResponse } from 'pagarmeapisdklib';

const getPricingSchemeResponse: GetPricingSchemeResponse = {
  price: 34,
  schemeType: 'scheme_type2',
  priceBrackets: [
    null
  ],
  minimumPrice: 130,
  percentage: 35.4,
};
```

