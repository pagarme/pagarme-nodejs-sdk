
# Get Automatic Anticipation Response

## Structure

`GetAutomaticAnticipationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enabled` | `boolean \| null` | Required | - |
| `type` | `string \| null` | Required | - |
| `volumePercentage` | `number \| null` | Required | - |
| `delay` | `number \| null` | Required | - |
| `days` | `number[] \| null` | Required | - |

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

