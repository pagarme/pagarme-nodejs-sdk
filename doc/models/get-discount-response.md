
# Get Discount Response

Response object for getting a discount

## Structure

`GetDiscountResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | - |
| `value` | `number \| undefined` | Optional | - |
| `discountType` | `string \| undefined` | Optional | - |
| `status` | `string \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |
| `cycles` | `number \| undefined` | Optional | - |
| `deletedAt` | `string \| undefined` | Optional | - |
| `description` | `string \| undefined` | Optional | - |
| `subscription` | [`GetSubscriptionResponse \| undefined`](../../doc/models/get-subscription-response.md) | Optional | - |
| `subscriptionItem` | [`GetSubscriptionItemResponse \| undefined`](../../doc/models/get-subscription-item-response.md) | Optional | The subscription item |

## Example (as JSON)

```json
{
  "id": "id0",
  "value": 251.52,
  "discount_type": "discount_type8",
  "status": "status8",
  "created_at": "2016-03-13T12:52:32.123Z"
}
```

