
# Get Subscription Item Response

## Structure

`GetSubscriptionItemResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| null \| undefined` | Optional | - |
| `description` | `string \| null \| undefined` | Optional | - |
| `status` | `string \| null \| undefined` | Optional | - |
| `createdAt` | `string \| null \| undefined` | Optional | - |
| `updatedAt` | `string \| null \| undefined` | Optional | - |
| `pricingScheme` | [`GetPricingSchemeResponse \| null \| undefined`](../../doc/models/get-pricing-scheme-response.md) | Optional | - |
| `discounts` | [`GetDiscountResponse[] \| null \| undefined`](../../doc/models/get-discount-response.md) | Optional | - |
| `increments` | [`GetIncrementResponse[] \| null \| undefined`](../../doc/models/get-increment-response.md) | Optional | - |
| `subscription` | [`GetSubscriptionResponse \| null \| undefined`](../../doc/models/get-subscription-response.md) | Optional | - |
| `name` | `string \| null \| undefined` | Optional | Item name |
| `quantity` | `number \| null \| undefined` | Optional | - |
| `cycles` | `number \| null \| undefined` | Optional | - |
| `deletedAt` | `string \| null \| undefined` | Optional | - |

## Example

```ts
import { GetSubscriptionItemResponse } from 'pagarmeapisdklib';

const getSubscriptionItemResponse: GetSubscriptionItemResponse = {
  id: 'id2',
  description: 'description2',
  status: 'status4',
  createdAt: '2016-03-13T12:52:32.123Z',
  updatedAt: '2016-03-13T12:52:32.123Z',
};
```

