
# Get Charge Response

Response object for getting a charge

## Structure

`GetChargeResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | - |
| `code` | `string \| undefined` | Optional | - |
| `gatewayId` | `string \| undefined` | Optional | - |
| `amount` | `number \| undefined` | Optional | - |
| `status` | `string \| undefined` | Optional | - |
| `currency` | `string \| undefined` | Optional | - |
| `paymentMethod` | `string \| undefined` | Optional | - |
| `dueAt` | `string \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |
| `updatedAt` | `string \| undefined` | Optional | - |
| `lastTransaction` | [`GetTransactionResponse \| undefined`](../../doc/models/get-transaction-response.md) | Optional | - |
| `invoice` | [`GetInvoiceResponse \| undefined`](../../doc/models/get-invoice-response.md) | Optional | - |
| `order` | [`GetOrderResponse \| undefined`](../../doc/models/get-order-response.md) | Optional | - |
| `customer` | [`GetCustomerResponse \| undefined`](../../doc/models/get-customer-response.md) | Optional | - |
| `metadata` | `Record<string, string> \| undefined` | Optional | - |
| `paidAt` | `string \| undefined` | Optional | - |
| `canceledAt` | `string \| undefined` | Optional | - |
| `canceledAmount` | `number \| undefined` | Optional | Canceled Amount |
| `paidAmount` | `number \| undefined` | Optional | Paid amount |
| `interestAndFinePaid` | `number \| undefined` | Optional | interest and fine paid |
| `recurrencyCycle` | `string \| undefined` | Optional | Defines whether the card has been used one or more times. |

## Example (as JSON)

```json
{
  "id": null,
  "code": null,
  "gateway_id": null,
  "amount": null,
  "status": null,
  "currency": null,
  "payment_method": null,
  "due_at": null,
  "created_at": null,
  "updated_at": null,
  "last_transaction": null,
  "invoice": null,
  "order": null,
  "customer": null,
  "metadata": null,
  "paid_at": null,
  "canceled_at": null,
  "canceled_amount": null,
  "paid_amount": null,
  "interest_and_fine_paid": null,
  "recurrency_cycle": null
}
```

