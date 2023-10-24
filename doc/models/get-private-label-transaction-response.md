
# Get Private Label Transaction Response

Response object for getting a private label transaction

## Structure

`GetPrivateLabelTransactionResponse`

## Inherits From

[`GetTransactionResponse`](../../doc/models/get-transaction-response.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `statementDescriptor` | `string \| null \| undefined` | Optional | Text that will appear on the credit card's statement |
| `acquirerName` | `string \| null \| undefined` | Optional | Acquirer name |
| `acquirerAffiliationCode` | `string \| null \| undefined` | Optional | Aquirer affiliation code |
| `acquirerTid` | `string \| null \| undefined` | Optional | Acquirer TID |
| `acquirerNsu` | `string \| null \| undefined` | Optional | Acquirer NSU |
| `acquirerAuthCode` | `string \| null \| undefined` | Optional | Acquirer authorization code |
| `operationType` | `string \| null \| undefined` | Optional | Operation type |
| `card` | [`GetCardResponse \| null \| undefined`](../../doc/models/get-card-response.md) | Optional | Card data |
| `acquirerMessage` | `string \| null \| undefined` | Optional | Acquirer message |
| `acquirerReturnCode` | `string \| null \| undefined` | Optional | Acquirer Return Code |
| `installments` | `number \| null \| undefined` | Optional | Number of installments |

## Example (as JSON)

```json
{
  "gateway_id": "gateway_id8",
  "amount": 40,
  "status": "status6",
  "success": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "statement_descriptor": "statement_descriptor4",
  "acquirer_name": "acquirer_name8",
  "acquirer_affiliation_code": "acquirer_affiliation_code6",
  "acquirer_tid": "acquirer_tid6",
  "acquirer_nsu": "acquirer_nsu6"
}
```

