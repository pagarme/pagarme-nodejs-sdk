
# Get Pix Transaction Response

Response object when getting a pix transaction

## Structure

`GetPixTransactionResponse`

## Inherits From

[`GetTransactionResponse`](../../doc/models/get-transaction-response.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `qrCode` | `string \| null \| undefined` | Optional | - |
| `qrCodeUrl` | `string \| null \| undefined` | Optional | - |
| `expiresAt` | `string \| null \| undefined` | Optional | - |
| `additionalInformation` | [`PixAdditionalInformation[] \| null \| undefined`](../../doc/models/pix-additional-information.md) | Optional | - |
| `endToEndId` | `string \| null \| undefined` | Optional | - |
| `payer` | [`GetPixPayerResponse \| null \| undefined`](../../doc/models/get-pix-payer-response.md) | Optional | - |
| `pixProviderTid` | `string \| null \| undefined` | Optional | Pix provider TID |

## Example

```ts
import { GetPixTransactionResponse } from 'pagarmeapisdklib';

const getPixTransactionResponse: GetPixTransactionResponse = {
  qrCode: 'qr_code6',
  qrCodeUrl: 'qr_code_url2',
  expiresAt: '2016-03-13T12:52:32.123Z',
  additionalInformation: [
    {},
    {
    }
  ],
  endToEndId: 'end_to_end_id0',
  gatewayId: 'gateway_id8',
  amount: 40,
  status: 'status6',
  success: false,
  createdAt: '2016-03-13T12:52:32.123Z',
};
```

