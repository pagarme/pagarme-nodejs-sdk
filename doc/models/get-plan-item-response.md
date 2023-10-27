
# Get Plan Item Response

Response object for getting a plan item

## Structure

`GetPlanItemResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| null \| undefined` | Optional | - |
| `name` | `string \| null \| undefined` | Optional | - |
| `status` | `string \| null \| undefined` | Optional | - |
| `createdAt` | `string \| null \| undefined` | Optional | - |
| `updatedAt` | `string \| null \| undefined` | Optional | - |
| `pricingScheme` | [`GetPricingSchemeResponse \| null \| undefined`](../../doc/models/get-pricing-scheme-response.md) | Optional | - |
| `description` | `string \| null \| undefined` | Optional | - |
| `plan` | [`GetPlanResponse \| null \| undefined`](../../doc/models/get-plan-response.md) | Optional | - |
| `quantity` | `number \| null \| undefined` | Optional | - |
| `cycles` | `number \| null \| undefined` | Optional | - |
| `deletedAt` | `string \| null \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "id": "id8",
  "name": "name8",
  "status": "status0",
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z"
}
```

