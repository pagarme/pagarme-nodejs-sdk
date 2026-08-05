
# Create Transfer Settings Request

Informações de transferência do recebedor

## Structure

`CreateTransferSettingsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transferEnabled` | `boolean` | Required | - |
| `transferInterval` | `string` | Required | - |
| `transferDay` | `number` | Required | - |

## Example

```ts
import { CreateTransferSettingsRequest } from 'pagarmeapisdklib';

const createTransferSettingsRequest: CreateTransferSettingsRequest = {
  transferEnabled: false,
  transferInterval: 'transfer_interval2',
  transferDay: 128,
};
```

