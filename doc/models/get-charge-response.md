
# Get Charge Response

Response object for getting a charge

## Structure

`GetChargeResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| null \| undefined` | Optional | - |
| `code` | `string \| null \| undefined` | Optional | - |
| `gatewayId` | `string \| null \| undefined` | Optional | - |
| `amount` | `number \| null \| undefined` | Optional | - |
| `status` | `string \| null \| undefined` | Optional | - |
| `currency` | `string \| null \| undefined` | Optional | - |
| `paymentMethod` | `string \| null \| undefined` | Optional | - |
| `dueAt` | `string \| null \| undefined` | Optional | - |
| `createdAt` | `string \| null \| undefined` | Optional | - |
| `updatedAt` | `string \| null \| undefined` | Optional | - |
| `lastTransaction` | [`GetTransactionResponse \| null \| undefined`](../../doc/models/get-transaction-response.md) | Optional | - |
| `invoice` | [`GetInvoiceResponse \| null \| undefined`](../../doc/models/get-invoice-response.md) | Optional | - |
| `order` | [`GetOrderResponse \| null \| undefined`](../../doc/models/get-order-response.md) | Optional | - |
| `customer` | [`GetCustomerResponse \| null \| undefined`](../../doc/models/get-customer-response.md) | Optional | - |
| `metadata` | `Record<string, string> \| null \| undefined` | Optional | - |
| `paidAt` | `string \| null \| undefined` | Optional | - |
| `canceledAt` | `string \| null \| undefined` | Optional | - |
| `canceledAmount` | `number \| null \| undefined` | Optional | Canceled Amount |
| `paidAmount` | `number \| null \| undefined` | Optional | Paid amount |
| `interestAndFinePaid` | `number \| null \| undefined` | Optional | interest and fine paid |
| `recurrencyCycle` | `string \| null \| undefined` | Optional | Defines whether the card has been used one or more times. |
| `paymentOrigin` | [`GetPaymentOriginResponse \| null \| undefined`](../../doc/models/get-payment-origin-response.md) | Optional | - |

## Example (as JSON)

```json
{
  "recurrency_cycle": "\"first\" or \"subsequent\"",
  "id": "id0",
  "code": "code8",
  "gateway_id": "gateway_id0",
  "amount": 164,
  "status": "status2"
}
```

