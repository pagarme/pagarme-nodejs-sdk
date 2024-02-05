
# Get Transaction Response

Generic response object for getting a transaction.

## Structure

`GetTransactionResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `gatewayId` | `string \| null \| undefined` | Optional | Gateway transaction id |
| `amount` | `number \| null \| undefined` | Optional | Amount in cents |
| `status` | `string \| null \| undefined` | Optional | Transaction status |
| `success` | `boolean \| null \| undefined` | Optional | Indicates if the transaction ocurred successfuly |
| `createdAt` | `string \| null \| undefined` | Optional | Creation date |
| `updatedAt` | `string \| null \| undefined` | Optional | Last update date |
| `attemptCount` | `number \| null \| undefined` | Optional | Number of attempts tried |
| `maxAttempts` | `number \| null \| undefined` | Optional | Max attempts |
| `splits` | [`GetSplitResponse[] \| null \| undefined`](../../doc/models/get-split-response.md) | Optional | Splits |
| `nextAttempt` | `string \| null \| undefined` | Optional | Date and time of the next attempt |
| `transactionType` | `string \| undefined` | Optional | - |
| `id` | `string \| null \| undefined` | Optional | Código da transação |
| `gatewayResponse` | [`GetGatewayResponseResponse \| null \| undefined`](../../doc/models/get-gateway-response-response.md) | Optional | The Gateway Response |
| `antifraudResponse` | [`GetAntifraudResponse \| null \| undefined`](../../doc/models/get-antifraud-response.md) | Optional | - |
| `metadata` | `Record<string, string> \| null \| undefined` | Optional | - |
| `split` | [`GetSplitResponse[] \| null \| undefined`](../../doc/models/get-split-response.md) | Optional | - |
| `interest` | [`GetInterestResponse \| null \| undefined`](../../doc/models/get-interest-response.md) | Optional | - |
| `fine` | [`GetFineResponse \| null \| undefined`](../../doc/models/get-fine-response.md) | Optional | - |
| `maxDaysToPayPastDue` | `number \| null \| undefined` | Optional | - |

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

