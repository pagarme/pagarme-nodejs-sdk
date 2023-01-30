
# Create Discount Request

Request for creating a new discount

## Structure

`CreateDiscountRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `value` | `number` | Required | The discount value |
| `discountType` | `string` | Required | Discount type. Can be either flat or percentage. |
| `itemId` | `string` | Required | The item where the discount will be applied |
| `cycles` | `number \| undefined` | Optional | Number of cycles that the discount will be applied |
| `description` | `string \| undefined` | Optional | Description |

## Example (as JSON)

```json
{
  "value": 251.52,
  "discount_type": "discount_type8",
  "item_id": "item_id0",
  "cycles": null,
  "description": null
}
```

