
# Get Transaction Response

Generic response object for getting a transaction.

## Structure

`GetTransactionResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `gatewayId` | `string \| undefined` | Optional | Gateway transaction id |
| `amount` | `number \| undefined` | Optional | Amount in cents |
| `status` | `string \| undefined` | Optional | Transaction status |
| `success` | `boolean \| undefined` | Optional | Indicates if the transaction ocurred successfuly |
| `createdAt` | `string \| undefined` | Optional | Creation date |
| `updatedAt` | `string \| undefined` | Optional | Last update date |
| `attemptCount` | `number \| undefined` | Optional | Number of attempts tried |
| `maxAttempts` | `number \| undefined` | Optional | Max attempts |
| `splits` | [`GetSplitResponse[] \| undefined`](../../doc/models/get-split-response.md) | Optional | Splits |
| `nextAttempt` | `string \| undefined` | Optional | Date and time of the next attempt |
| `transactionType` | `string \| undefined` | Optional | - |
| `id` | `string \| undefined` | Optional | Código da transação |
| `gatewayResponse` | [`GetGatewayResponseResponse \| undefined`](../../doc/models/get-gateway-response-response.md) | Optional | The Gateway Response |
| `antifraudResponse` | [`GetAntifraudResponse \| undefined`](../../doc/models/get-antifraud-response.md) | Optional | - |
| `metadata` | `Record<string, string> \| undefined` | Optional | - |
| `split` | [`GetSplitResponse[] \| undefined`](../../doc/models/get-split-response.md) | Optional | - |
| `interest` | [`GetInterestResponse \| undefined`](../../doc/models/get-interest-response.md) | Optional | - |
| `fine` | [`GetFineResponse \| undefined`](../../doc/models/get-fine-response.md) | Optional | - |
| `maxDaysToPayPastDue` | `number \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "gateway_id": null,
  "amount": null,
  "status": null,
  "success": null,
  "created_at": null,
  "updated_at": null,
  "attempt_count": null,
  "max_attempts": null,
  "splits": null,
  "next_attempt": null,
  "transaction_type": "transaction",
  "id": null,
  "gateway_response": null,
  "antifraud_response": null,
  "metadata": null,
  "split": null,
  "interest": null,
  "fine": null,
  "max_days_to_pay_past_due": null
}
```

