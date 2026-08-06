
# Get Invoice Item Response

Response object for getting an invoice item

## Structure

`GetInvoiceItemResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | `number \| null \| undefined` | Optional | - |
| `description` | `string \| null \| undefined` | Optional | - |
| `pricingScheme` | [`GetPricingSchemeResponse \| null \| undefined`](../../doc/models/get-pricing-scheme-response.md) | Optional | - |
| `priceBracket` | [`GetPriceBracketResponse \| null \| undefined`](../../doc/models/get-price-bracket-response.md) | Optional | - |
| `quantity` | `number \| null \| undefined` | Optional | - |
| `name` | `string \| null \| undefined` | Optional | - |
| `subscriptionItemId` | `string \| null \| undefined` | Optional | Subscription Item Id |

## Example

```ts
import { GetInvoiceItemResponse } from 'pagarmeapisdklib';

const getInvoiceItemResponse: GetInvoiceItemResponse = {
  amount: 176,
  description: 'description4',
  pricingScheme: null,
  priceBracket: null,
  quantity: 194,
};
```

