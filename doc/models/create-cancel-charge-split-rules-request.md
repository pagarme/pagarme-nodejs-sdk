
# Create Cancel Charge Split Rules Request

Creates a refund with split rules

## Structure

`CreateCancelChargeSplitRulesRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | The split rule gateway id |
| `amount` | `number` | Required | The split rule amount |
| `type` | `string` | Required | The amount type (flat ou percentage) |

## Example (as JSON)

```json
{
  "id": "id6",
  "Amount": 222,
  "type": "type6"
}
```

