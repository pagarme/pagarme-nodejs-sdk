
# Create Subscription Item Request

Request for creating a new subscription item

## Structure

`CreateSubscriptionItemRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string` | Required | Item description |
| `pricingScheme` | [`CreatePricingSchemeRequest`](../../doc/models/create-pricing-scheme-request.md) | Required | Pricing scheme |
| `id` | `string` | Required | Item id |
| `planItemId` | `string` | Required | Plan item id |
| `discounts` | [`CreateDiscountRequest[]`](../../doc/models/create-discount-request.md) | Required | Discounts for the item |
| `name` | `string` | Required | Item name |
| `cycles` | `number \| undefined` | Optional | Number of cycles which the item will be charged |
| `quantity` | `number \| undefined` | Optional | Quantity of items |
| `minimumPrice` | `number \| undefined` | Optional | Minimum price |

## Example

```ts
import { CreateSubscriptionItemRequest } from 'pagarmeapisdklib';

const createSubscriptionItemRequest: CreateSubscriptionItemRequest = {
  description: '',
  pricingScheme: {},
  id: '',
  planItemId: '',
  discounts: [
    {}
  ],
  name: '',
  cycles: 250,
  quantity: 242,
  minimumPrice: 2,
};
```

