
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
  "id": null,
  "description": null,
  "status": null,
  "created_at": null,
  "updated_at": null,
  "pricing_scheme": null,
  "discounts": null,
  "increments": null,
  "subscription": null,
  "name": null,
  "quantity": null,
  "cycles": null,
  "deleted_at": null
}
```

