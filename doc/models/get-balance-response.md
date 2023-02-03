
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
  "currency": null,
  "available_amount": null,
  "recipient": null,
  "transferred_amount": null,
  "waiting_funds_amount": null
}
```

