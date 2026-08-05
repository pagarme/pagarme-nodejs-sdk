
# Get Transfer Settings Response

## Structure

`GetTransferSettingsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transferEnabled` | `boolean \| null \| undefined` | Optional | - |
| `transferInterval` | `string \| null \| undefined` | Optional | - |
| `transferDay` | `number \| null \| undefined` | Optional | - |

## Example

```ts
import { GetTransferSettingsResponse } from 'pagarmeapisdklib';

const getTransferSettingsResponse: GetTransferSettingsResponse = {
  transferEnabled: false,
  transferInterval: 'transfer_interval4',
  transferDay: 156,
};
```

