
# Get Discount Response

Response object for getting a discount

## Structure

`GetDiscountResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| null \| undefined` | Optional | - |
| `value` | `number \| null \| undefined` | Optional | - |
| `discountType` | `string \| null \| undefined` | Optional | - |
| `status` | `string \| null \| undefined` | Optional | - |
| `createdAt` | `string \| null \| undefined` | Optional | - |
| `cycles` | `number \| null \| undefined` | Optional | - |
| `deletedAt` | `string \| null \| undefined` | Optional | - |
| `description` | `string \| null \| undefined` | Optional | - |
| `subscription` | [`GetSubscriptionResponse \| null \| undefined`](../../doc/models/get-subscription-response.md) | Optional | - |
| `subscriptionItem` | [`GetSubscriptionItemResponse \| null \| undefined`](../../doc/models/get-subscription-item-response.md) | Optional | The subscription item |

## Example

```ts
import { GetDiscountResponse } from 'pagarmeapisdklib';

const getDiscountResponse: GetDiscountResponse = {
  id: 'id0',
  value: 135.12,
  discountType: 'discount_type8',
  status: 'status2',
  createdAt: '2016-03-13T12:52:32.123Z',
};
```

