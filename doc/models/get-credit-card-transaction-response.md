
# Get Credit Card Transaction Response

Response object for getting a credit card transaction

## Structure

`GetCreditCardTransactionResponse`

## Inherits From

[`GetTransactionResponse`](../../doc/models/get-transaction-response.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `statementDescriptor` | `string \| null \| undefined` | Optional | Text that will appear on the credit card's statement |
| `acquirerName` | `string \| undefined` | Optional | Acquirer name |
| `acquirerAffiliationCode` | `string \| null \| undefined` | Optional | Aquirer affiliation code |
| `acquirerTid` | `string \| undefined` | Optional | Acquirer TID |
| `acquirerNsu` | `string \| undefined` | Optional | Acquirer NSU |
| `acquirerAuthCode` | `string \| null \| undefined` | Optional | Acquirer authorization code |
| `operationType` | `string \| null \| undefined` | Optional | Operation type |
| `card` | [`GetCardResponse \| null \| undefined`](../../doc/models/get-card-response.md) | Optional | Card data |
| `acquirerMessage` | `string \| null \| undefined` | Optional | Acquirer message |
| `acquirerReturnCode` | `string \| null \| undefined` | Optional | Acquirer Return Code |
| `installments` | `number \| null \| undefined` | Optional | Number of installments |
| `threedAuthenticationUrl` | `string \| null \| undefined` | Optional | 3D-S authentication Url |
| `fundingSource` | `string \| null \| undefined` | Optional | Identify when a card is prepaid, credit or debit. |
| `retryInfo` | [`GetRetryTransactionInformationResponse \| null \| undefined`](../../doc/models/get-retry-transaction-information-response.md) | Optional | Retry transaction information |
| `brandId` | `string \| null \| undefined` | Optional | - |
| `indirectAcceptor` | `string \| null \| undefined` | Optional | Business model identifier |

## Example (as JSON)

```json
{
  "gateway_id": "gateway_id8",
  "amount": 40,
  "status": "status6",
  "success": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "statement_descriptor": "statement_descriptor2",
  "acquirer_name": "acquirer_name6",
  "acquirer_affiliation_code": "acquirer_affiliation_code6",
  "acquirer_tid": "acquirer_tid8",
  "acquirer_nsu": "acquirer_nsu8"
}
```

