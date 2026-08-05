
# Create Emv Data Tlv Decrypt Request

## Structure

`CreateEmvDataTlvDecryptRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tag` | `string` | Required | Emv tag |
| `lenght` | `string` | Required | Emv lenght |
| `value` | `string` | Required | Emv value |

## Example

```ts
import { CreateEmvDataTlvDecryptRequest } from 'pagarmeapisdklib';

const createEmvDataTlvDecryptRequest: CreateEmvDataTlvDecryptRequest = {
  tag: 'tag8',
  lenght: 'lenght4',
  value: 'value6',
};
```

