
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

## Example (as JSON)

```json
{
  "gateway_id": "gateway_id8",
  "amount": 40,
  "status": "status6",
  "success": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "statement_descriptor": "statement_descriptor6",
  "acquirer_name": "acquirer_name0",
  "acquirer_affiliation_code": "acquirer_affiliation_code2",
  "acquirer_tid": "acquirer_tid4",
  "acquirer_nsu": "acquirer_nsu4"
}
```

