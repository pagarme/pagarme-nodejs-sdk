
# Get Safety Pay Transaction Response

Response object for getting a safety pay transaction

## Structure

`GetSafetyPayTransactionResponse`

## Inherits From

[`GetTransactionResponse`](../../doc/models/get-transaction-response.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `url` | `string \| null \| undefined` | Optional | Payment url |
| `bankTid` | `string \| null \| undefined` | Optional | Transaction identifier on bank |
| `paidAt` | `string \| null \| undefined` | Optional | Payment date |
| `paidAmount` | `number \| null \| undefined` | Optional | Paid amount |

## Example (as JSON)

```json
{
  "gateway_id": "gateway_id8",
  "amount": 40,
  "status": "status6",
  "success": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "url": "url8",
  "bank_tid": "bank_tid8",
  "paid_at": "2016-03-13T12:52:32.123Z",
  "paid_amount": 154
}
```

