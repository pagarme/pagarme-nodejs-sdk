
# Update Transfer Settings Request

## Structure

`UpdateTransferSettingsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transferEnabled` | `string` | Required | - |
| `transferInterval` | `string` | Required | - |
| `transferDay` | `string` | Required | - |

## Example

```ts
import { UpdateTransferSettingsRequest } from 'pagarmeapisdklib';

const updateTransferSettingsRequest: UpdateTransferSettingsRequest = {
  transferEnabled: 'transfer_enabled8',
  transferInterval: 'transfer_interval2',
  transferDay: 'transfer_day2',
};
```

