
# Create Emv Decrypt Request

## Structure

`CreateEmvDecryptRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `iccData` | `string` | Required | - |
| `cardSequenceNumber` | `string` | Required | - |
| `data` | [`CreateEmvDataDecryptRequest`](../../doc/models/create-emv-data-decrypt-request.md) | Required | - |
| `poi` | [`CreateCardPaymentContactlessPOIRequest \| undefined`](../../doc/models/create-card-payment-contactless-poi-request.md) | Optional | - |

## Example

```ts
import { CreateEmvDecryptRequest } from 'pagarmeapisdklib';

const createEmvDecryptRequest: CreateEmvDecryptRequest = {
  iccData: '',
  cardSequenceNumber: '',
  data: {
    cipher: '',
    tags: [
      {}
    ],
    dukpt: {},
  },
  poi: {},
};
```

