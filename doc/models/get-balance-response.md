
# Get Balance Response

Balance

## Structure

`GetBalanceResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string \| undefined` | Optional | Currency |
| `availableAmount` | `bigint \| undefined` | Optional | Amount available for transferring |
| `recipient` | [`GetRecipientResponse \| undefined`](../../doc/models/get-recipient-response.md) | Optional | Recipient |
| `transferredAmount` | `bigint \| undefined` | Optional | - |
| `waitingFundsAmount` | `bigint \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "currency": "currency0",
  "available_amount": 182,
  "recipient": {
    "id": "id8",
    "name": "name8",
    "email": "email8",
    "document": "document8",
    "description": "description2"
  },
  "transferred_amount": 228,
  "waiting_funds_amount": 252
}
```

