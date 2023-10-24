
# Get Balance Response

Balance

## Structure

`GetBalanceResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string \| null \| undefined` | Optional | Currency |
| `availableAmount` | `bigint \| null \| undefined` | Optional | Amount available for transferring |
| `recipient` | [`GetRecipientResponse \| null \| undefined`](../../doc/models/get-recipient-response.md) | Optional | Recipient |
| `transferredAmount` | `bigint \| null \| undefined` | Optional | - |
| `waitingFundsAmount` | `bigint \| null \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "currency": "currency2",
  "available_amount": 96,
  "recipient": {
    "id": "id8",
    "name": "name8",
    "email": "email8",
    "document": "document8",
    "description": "description2"
  },
  "transferred_amount": 142,
  "waiting_funds_amount": 174
}
```

