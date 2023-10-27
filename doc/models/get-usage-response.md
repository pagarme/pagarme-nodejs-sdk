
# Get Usage Response

Response object for getting a usage

## Structure

`GetUsageResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| null \| undefined` | Optional | Id |
| `quantity` | `number \| null \| undefined` | Optional | Quantity |
| `description` | `string \| null \| undefined` | Optional | Description |
| `usedAt` | `string \| null \| undefined` | Optional | Used at |
| `createdAt` | `string \| null \| undefined` | Optional | Creation date |
| `status` | `string \| null \| undefined` | Optional | Status |
| `deletedAt` | `string \| null \| undefined` | Optional | - |
| `subscriptionItem` | [`GetSubscriptionItemResponse \| null \| undefined`](../../doc/models/get-subscription-item-response.md) | Optional | Subscription item |
| `code` | `string \| null \| undefined` | Optional | Identification code in the client system |
| `group` | `string \| null \| undefined` | Optional | Identification group in the client system |
| `amount` | `number \| null \| undefined` | Optional | Field used in item scheme type 'Percent' |

## Example (as JSON)

```json
{
  "id": "id2",
  "quantity": 34,
  "description": "description2",
  "used_at": "2016-03-13T12:52:32.123Z",
  "created_at": "2016-03-13T12:52:32.123Z"
}
```

