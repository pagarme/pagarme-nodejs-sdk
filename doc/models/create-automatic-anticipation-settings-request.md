
# Create Automatic Anticipation Settings Request

## Structure

`CreateAutomaticAnticipationSettingsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enabled` | `boolean` | Required | - |
| `type` | `string` | Required | - |
| `volumePercentage` | `number` | Required | - |
| `delay` | `number` | Required | - |
| `days` | `number[]` | Required | - |

## Example (as JSON)

```json
{
  "enabled": false,
  "type": "type0",
  "volume_percentage": 62,
  "delay": 228,
  "days": [
    188,
    189,
    190
  ]
}
```

