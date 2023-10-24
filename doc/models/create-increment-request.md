
# Create Increment Request

Request for creating a new increment

## Structure

`CreateIncrementRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `value` | `number` | Required | The increment value |
| `incrementType` | `string` | Required | Increment type. Can be either flat or percentage. |
| `itemId` | `string` | Required | The item where the increment will be applied |
| `cycles` | `number \| undefined` | Optional | Number of cycles that the increment will be applied |
| `description` | `string \| undefined` | Optional | Description |

## Example (as JSON)

```json
{
  "value": 72.04,
  "increment_type": "increment_type4",
  "item_id": "item_id8",
  "cycles": 196,
  "description": "description8"
}
```

