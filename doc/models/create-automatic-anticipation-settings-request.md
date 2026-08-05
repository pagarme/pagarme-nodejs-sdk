
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

## Example

```ts
import { CreateAutomaticAnticipationSettingsRequest } from 'pagarmeapisdklib';

const createAutomaticAnticipationSettingsRequest: CreateAutomaticAnticipationSettingsRequest = {
  enabled: false,
  type: 'type4',
  volumePercentage: 24,
  delay: 10,
  days: [
    242,
    243
  ],
};
```

