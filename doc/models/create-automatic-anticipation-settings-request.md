
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
  "type": "type8",
  "volume_percentage": 208,
  "delay": 82,
  "days": [
    58,
    59
  ]
}
```

