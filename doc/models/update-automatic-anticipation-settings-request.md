
# Update Automatic Anticipation Settings Request

## Structure

`UpdateAutomaticAnticipationSettingsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enabled` | `boolean \| undefined` | Optional | - |
| `type` | `string \| undefined` | Optional | - |
| `volumePercentage` | `number \| undefined` | Optional | - |
| `delay` | `number \| undefined` | Optional | - |
| `days` | `number \| undefined` | Optional | - |

## Example

```ts
import { UpdateAutomaticAnticipationSettingsRequest } from 'pagarmeapisdklib';

const updateAutomaticAnticipationSettingsRequest: UpdateAutomaticAnticipationSettingsRequest = {
  enabled: false,
  type: 'type4',
  volumePercentage: 178,
  delay: 112,
  days: 20,
};
```

