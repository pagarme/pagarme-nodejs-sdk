
# Get Debit Card Transaction Response

Response object for getting a debit card transaction

## Structure

`GetDebitCardTransactionResponse`

## Inherits From

[`GetTransactionResponse`](../../doc/models/get-transaction-response.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `statementDescriptor` | `string \| null \| undefined` | Optional | Text that will appear on the debit card's statement |
| `acquirerName` | `string \| null \| undefined` | Optional | Acquirer name |
| `acquirerAffiliationCode` | `string \| null \| undefined` | Optional | Aquirer affiliation code |
| `acquirerTid` | `string \| null \| undefined` | Optional | Acquirer TID |
| `acquirerNsu` | `string \| null \| undefined` | Optional | Acquirer NSU |
| `acquirerAuthCode` | `string \| null \| undefined` | Optional | Acquirer authorization code |
| `operationType` | `string \| null \| undefined` | Optional | Operation type |
| `card` | [`GetCardResponse \| null \| undefined`](../../doc/models/get-card-response.md) | Optional | Card data |
| `acquirerMessage` | `string \| null \| undefined` | Optional | Acquirer message |
| `acquirerReturnCode` | `string \| null \| undefined` | Optional | Acquirer Return Code |
| `mpi` | `string \| null \| undefined` | Optional | Merchant Plugin |
| `eci` | `string \| null \| undefined` | Optional | Electronic Commerce Indicator (ECI) |
| `authenticationType` | `string \| null \| undefined` | Optional | Authentication type |
| `threedAuthenticationUrl` | `string \| null \| undefined` | Optional | 3D-S Authentication Url |
| `fundingSource` | `string \| null \| undefined` | Optional | Identify when a card is prepaid, credit or debit. |
| `retryInfo` | [`GetRetryTransactionInformationResponse \| null \| undefined`](../../doc/models/get-retry-transaction-information-response.md) | Optional | Retry transaction information |
| `brandId` | `string \| null \| undefined` | Optional | - |

## Example

```ts
import { GetDebitCardTransactionResponse } from 'pagarmeapisdklib';

const getDebitCardTransactionResponse: GetDebitCardTransactionResponse = {
  statementDescriptor: 'statement_descriptor6',
  acquirerName: 'acquirer_name0',
  acquirerAffiliationCode: 'acquirer_affiliation_code8',
  acquirerTid: 'acquirer_tid4',
  acquirerNsu: 'acquirer_nsu4',
  gatewayId: 'gateway_id8',
  amount: 40,
  status: 'status6',
  success: false,
  createdAt: '2016-03-13T12:52:32.123Z',
};
```

