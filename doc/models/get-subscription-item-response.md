
# Get Subscription Item Response

## Structure

`GetSubscriptionItemResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | - |
| `description` | `string \| undefined` | Optional | - |
| `status` | `string \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |
| `updatedAt` | `string \| undefined` | Optional | - |
| `pricingScheme` | [`GetPricingSchemeResponse \| undefined`](../../doc/models/get-pricing-scheme-response.md) | Optional | - |
| `discounts` | [`GetDiscountResponse[] \| undefined`](../../doc/models/get-discount-response.md) | Optional | - |
| `increments` | [`GetIncrementResponse[] \| undefined`](../../doc/models/get-increment-response.md) | Optional | - |
| `subscription` | [`GetSubscriptionResponse \| undefined`](../../doc/models/get-subscription-response.md) | Optional | - |
| `name` | `string \| undefined` | Optional | Item name |
| `quantity` | `number \| undefined` | Optional | - |
| `cycles` | `number \| undefined` | Optional | - |
| `deletedAt` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "id": "id0",
  "description": "description0",
  "status": "status8",
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z"
}
```

