
# Get Debit Card Transaction Response

Response object for getting a debit card transaction

## Structure

`GetDebitCardTransactionResponse`

## Inherits From

[`GetTransactionResponse`](../../doc/models/get-transaction-response.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `statementDescriptor` | `string \| undefined` | Optional | Text that will appear on the debit card's statement |
| `acquirerName` | `string \| undefined` | Optional | Acquirer name |
| `acquirerAffiliationCode` | `string \| undefined` | Optional | Aquirer affiliation code |
| `acquirerTid` | `string \| undefined` | Optional | Acquirer TID |
| `acquirerNsu` | `string \| undefined` | Optional | Acquirer NSU |
| `acquirerAuthCode` | `string \| undefined` | Optional | Acquirer authorization code |
| `operationType` | `string \| undefined` | Optional | Operation type |
| `card` | [`GetCardResponse \| undefined`](../../doc/models/get-card-response.md) | Optional | Card data |
| `acquirerMessage` | `string \| undefined` | Optional | Acquirer message |
| `acquirerReturnCode` | `string \| undefined` | Optional | Acquirer Return Code |
| `mpi` | `string \| undefined` | Optional | Merchant Plugin |
| `eci` | `string \| undefined` | Optional | Electronic Commerce Indicator (ECI) |
| `authenticationType` | `string \| undefined` | Optional | Authentication type |
| `threedAuthenticationUrl` | `string \| undefined` | Optional | 3D-S Authentication Url |
| `fundingSource` | `string \| undefined` | Optional | Identify when a card is prepaid, credit or debit. |

## Example (as JSON)

```json
{
  "gateway_id": "gateway_id0",
  "amount": 86,
  "status": "status8",
  "success": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "transaction_type": "debit_card",
  "statement_descriptor": "statement_descriptor0",
  "acquirer_name": "acquirer_name4",
  "acquirer_affiliation_code": "acquirer_affiliation_code8",
  "acquirer_tid": "acquirer_tid0",
  "acquirer_nsu": "acquirer_nsu0"
}
```

