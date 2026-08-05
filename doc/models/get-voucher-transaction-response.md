
# Get Voucher Transaction Response

Response for voucher transactions

## Structure

`GetVoucherTransactionResponse`

## Inherits From

[`GetTransactionResponse`](../../doc/models/get-transaction-response.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `statementDescriptor` | `string \| null \| undefined` | Optional | Text that will appear on the voucher's statement |
| `acquirerName` | `string \| null \| undefined` | Optional | Acquirer name |
| `acquirerAffiliationCode` | `string \| null \| undefined` | Optional | Acquirer affiliation code |
| `acquirerTid` | `string \| null \| undefined` | Optional | Acquirer TID |
| `acquirerNsu` | `string \| null \| undefined` | Optional | Acquirer NSU |
| `acquirerAuthCode` | `string \| null \| undefined` | Optional | Acquirer authorization code |
| `acquirerMessage` | `string \| null \| undefined` | Optional | acquirer_message |
| `acquirerReturnCode` | `string \| null \| undefined` | Optional | Acquirer return code |
| `operationType` | `string \| null \| undefined` | Optional | Operation type |
| `card` | [`GetCardResponse \| null \| undefined`](../../doc/models/get-card-response.md) | Optional | Card data |

## Example

```ts
import { GetVoucherTransactionResponse } from 'pagarmeapisdklib';

const getVoucherTransactionResponse: GetVoucherTransactionResponse = {
  statementDescriptor: 'statement_descriptor4',
  acquirerName: 'acquirer_name8',
  acquirerAffiliationCode: 'acquirer_affiliation_code4',
  acquirerTid: 'acquirer_tid6',
  acquirerNsu: 'acquirer_nsu6',
  gatewayId: 'gateway_id8',
  amount: 40,
  status: 'status6',
  success: false,
  createdAt: '2016-03-13T12:52:32.123Z',
};
```

