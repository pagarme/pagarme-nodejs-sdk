
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

## Example (as JSON)

```json
{
  "gateway_id": "gateway_id8",
  "amount": 40,
  "status": "status6",
  "success": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "statement_descriptor": "statement_descriptor0",
  "acquirer_name": "acquirer_name4",
  "acquirer_affiliation_code": "acquirer_affiliation_code8",
  "acquirer_tid": "acquirer_tid0",
  "acquirer_nsu": "acquirer_nsu0"
}
```

