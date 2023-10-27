
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

## Example (as JSON)

```json
{
  "id": "id0",
  "value": 167.72,
  "increment_type": "increment_type2",
  "status": "status2",
  "created_at": "2016-03-13T12:52:32.123Z"
}
```

