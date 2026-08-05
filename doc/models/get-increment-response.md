
# Get Increment Response

Response object for getting a increment

## Structure

`GetIncrementResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| null \| undefined` | Optional | - |
| `value` | `number \| null \| undefined` | Optional | - |
| `incrementType` | `string \| null \| undefined` | Optional | - |
| `status` | `string \| null \| undefined` | Optional | - |
| `createdAt` | `string \| null \| undefined` | Optional | - |
| `cycles` | `number \| null \| undefined` | Optional | - |
| `deletedAt` | `string \| null \| undefined` | Optional | - |
| `description` | `string \| null \| undefined` | Optional | - |
| `subscription` | [`GetSubscriptionResponse \| null \| undefined`](../../doc/models/get-subscription-response.md) | Optional | - |
| `subscriptionItem` | [`GetSubscriptionItemResponse \| null \| undefined`](../../doc/models/get-subscription-item-response.md) | Optional | The Subscription Item |

## Example

```ts
import { GetIncrementResponse } from 'pagarmeapisdklib';

const getIncrementResponse: GetIncrementResponse = {
  id: 'id4',
  value: 191.36,
  incrementType: 'increment_type6',
  status: 'status6',
  createdAt: '2016-03-13T12:52:32.123Z',
};
```

