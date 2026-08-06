
# Get Automatic Anticipation Response

## Structure

`GetAutomaticAnticipationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enabled` | `boolean \| null \| undefined` | Optional | - |
| `type` | `string \| null \| undefined` | Optional | - |
| `volumePercentage` | `number \| null \| undefined` | Optional | - |
| `delay` | `number \| null \| undefined` | Optional | - |
| `days` | `number[] \| null \| undefined` | Optional | - |

## Example

```ts
import { GetAutomaticAnticipationResponse } from 'pagarmeapisdklib';

const getAutomaticAnticipationResponse: GetAutomaticAnticipationResponse = {
  enabled: false,
  type: 'type4',
  volumePercentage: 86,
  delay: 204,
  days: [
    180,
    181,
    182
  ],
};
```

