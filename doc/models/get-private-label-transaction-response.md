
# Get Private Label Transaction Response

Response object for getting a private label transaction

## Structure

`GetPrivateLabelTransactionResponse`

## Inherits From

[`GetTransactionResponse`](../../doc/models/get-transaction-response.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `statementDescriptor` | `string \| undefined` | Optional | Text that will appear on the credit card's statement |
| `acquirerName` | `string \| undefined` | Optional | Acquirer name |
| `acquirerAffiliationCode` | `string \| undefined` | Optional | Aquirer affiliation code |
| `acquirerTid` | `string \| undefined` | Optional | Acquirer TID |
| `acquirerNsu` | `string \| undefined` | Optional | Acquirer NSU |
| `acquirerAuthCode` | `string \| undefined` | Optional | Acquirer authorization code |
| `operationType` | `string \| undefined` | Optional | Operation type |
| `card` | [`GetCardResponse \| undefined`](../../doc/models/get-card-response.md) | Optional | Card data |
| `acquirerMessage` | `string \| undefined` | Optional | Acquirer message |
| `acquirerReturnCode` | `string \| undefined` | Optional | Acquirer Return Code |
| `installments` | `number \| undefined` | Optional | Number of installments |

## Example (as JSON)

```json
{
  "gateway_id": "gateway_id6",
  "amount": 20,
  "status": "status6",
  "success": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "transaction_type": "private_label",
  "statement_descriptor": "statement_descriptor0",
  "acquirer_name": "acquirer_name4",
  "acquirer_affiliation_code": "acquirer_affiliation_code8",
  "acquirer_tid": "acquirer_tid0",
  "acquirer_nsu": "acquirer_nsu0"
}
```

