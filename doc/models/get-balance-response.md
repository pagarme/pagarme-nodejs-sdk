
# Get Balance Response

Balance

## Structure

`GetBalanceResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string \| null` | Required | Currency |
| `availableAmount` | `bigint \| null` | Required | Amount available for transferring |
| `recipient` | [`GetRecipientResponse \| undefined`](../../doc/models/get-recipient-response.md) | Optional | Recipient |
| `transferredAmount` | `bigint \| null` | Required | - |
| `waitingFundsAmount` | `bigint \| null` | Required | - |

## Example (as JSON)

```json
{
  "currency": "currency0",
  "available_amount": 182,
  "recipient": null,
  "transferred_amount": 228,
  "waiting_funds_amount": 252
}
```

