
# Create Emv Data Decrypt Request

## Structure

`CreateEmvDataDecryptRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cipher` | `string` | Required | Emv Decrypt cipher type |
| `dukpt` | [`CreateEmvDataDukptDecryptRequest \| undefined`](../../doc/models/create-emv-data-dukpt-decrypt-request.md) | Optional | Dukpt data request |
| `tags` | [`CreateEmvDataTlvDecryptRequest[]`](../../doc/models/create-emv-data-tlv-decrypt-request.md) | Required | Encrypted tags list |

## Example

```ts
import { CreateEmvDataDecryptRequest } from 'pagarmeapisdklib';

const createEmvDataDecryptRequest: CreateEmvDataDecryptRequest = {
  cipher: '',
  tags: [
    {}
  ],
  dukpt: {},
};
```

