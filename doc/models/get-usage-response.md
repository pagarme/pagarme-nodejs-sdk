
# Get Usage Response

Response object for getting a usage

## Structure

`GetUsageResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | Id |
| `quantity` | `number \| undefined` | Optional | Quantity |
| `description` | `string \| undefined` | Optional | Description |
| `usedAt` | `string \| undefined` | Optional | Used at |
| `createdAt` | `string \| undefined` | Optional | Creation date |
| `status` | `string \| undefined` | Optional | Status |
| `deletedAt` | `string \| undefined` | Optional | - |
| `subscriptionItem` | [`GetSubscriptionItemResponse \| undefined`](../../doc/models/get-subscription-item-response.md) | Optional | Subscription item |
| `code` | `string \| undefined` | Optional | Identification code in the client system |
| `group` | `string \| undefined` | Optional | Identification group in the client system |
| `amount` | `number \| undefined` | Optional | Field used in item scheme type 'Percent' |

## Example (as JSON)

```json
{
  "id": "id0",
  "quantity": 68,
  "description": "description0",
  "used_at": "2016-03-13T12:52:32.123Z",
  "created_at": "2016-03-13T12:52:32.123Z"
}
```

