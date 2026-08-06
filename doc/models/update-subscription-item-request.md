
# Update Subscription Item Request

Request for updating a subscription item

## Structure

`UpdateSubscriptionItemRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string` | Required | Description |
| `status` | `string` | Required | Status |
| `pricingScheme` | [`UpdatePricingSchemeRequest`](../../doc/models/update-pricing-scheme-request.md) | Required | Pricing scheme |
| `name` | `string` | Required | Item name |
| `cycles` | `number \| undefined` | Optional | Number of cycles that the item will be charged |
| `quantity` | `number \| undefined` | Optional | Quantity |
| `minimumPrice` | `number \| undefined` | Optional | Minimum price |

## Example

```ts
import { UpdateSubscriptionItemRequest } from 'pagarmeapisdklib';

const updateSubscriptionItemRequest: UpdateSubscriptionItemRequest = {
  description: '',
  status: '',
  pricingScheme: {
    schemeType: '',
    priceBrackets: [
      {}
    ],
    price: 166,
    minimumPrice: 6,
    percentage: 251.76,
  },
  name: '',
  cycles: 64,
  quantity: 44,
  minimumPrice: 56,
};
```

