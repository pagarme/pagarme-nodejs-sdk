
# Get Invoice Response

Response object for getting an invoice

## Structure

`GetInvoiceResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| null \| undefined` | Optional | - |
| `code` | `string \| null \| undefined` | Optional | - |
| `url` | `string \| null \| undefined` | Optional | - |
| `amount` | `number \| null \| undefined` | Optional | - |
| `status` | `string \| null \| undefined` | Optional | - |
| `paymentMethod` | `string \| null \| undefined` | Optional | - |
| `createdAt` | `string \| null \| undefined` | Optional | - |
| `items` | [`GetInvoiceItemResponse[] \| null \| undefined`](../../doc/models/get-invoice-item-response.md) | Optional | - |
| `customer` | [`GetCustomerResponse \| null \| undefined`](../../doc/models/get-customer-response.md) | Optional | - |
| `charge` | [`GetChargeResponse \| null \| undefined`](../../doc/models/get-charge-response.md) | Optional | - |
| `installments` | `number \| null \| undefined` | Optional | - |
| `billingAddress` | [`GetBillingAddressResponse \| null \| undefined`](../../doc/models/get-billing-address-response.md) | Optional | - |
| `subscription` | [`GetSubscriptionResponse \| null \| undefined`](../../doc/models/get-subscription-response.md) | Optional | - |
| `cycle` | [`GetPeriodResponse \| null \| undefined`](../../doc/models/get-period-response.md) | Optional | - |
| `shipping` | [`GetShippingResponse \| null \| undefined`](../../doc/models/get-shipping-response.md) | Optional | - |
| `metadata` | `Record<string, string> \| null \| undefined` | Optional | - |
| `dueAt` | `string \| null \| undefined` | Optional | - |
| `canceledAt` | `string \| null \| undefined` | Optional | - |
| `billingAt` | `string \| null \| undefined` | Optional | - |
| `seenAt` | `string \| null \| undefined` | Optional | - |
| `totalDiscount` | `number \| null \| undefined` | Optional | Total discounted value |
| `totalIncrement` | `number \| null \| undefined` | Optional | Total discounted value |
| `subscriptionId` | `string \| null \| undefined` | Optional | Subscription Id |

## Example (as JSON)

```json
{
  "id": "id0",
  "code": "code8",
  "url": "url4",
  "amount": 168,
  "status": "status8"
}
```

