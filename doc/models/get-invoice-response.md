
# Get Invoice Response

Response object for getting an invoice

## Structure

`GetInvoiceResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | - |
| `code` | `string \| undefined` | Optional | - |
| `url` | `string \| undefined` | Optional | - |
| `amount` | `number \| undefined` | Optional | - |
| `status` | `string \| undefined` | Optional | - |
| `paymentMethod` | `string \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |
| `items` | [`GetInvoiceItemResponse[] \| undefined`](../../doc/models/get-invoice-item-response.md) | Optional | - |
| `customer` | [`GetCustomerResponse \| undefined`](../../doc/models/get-customer-response.md) | Optional | - |
| `charge` | [`GetChargeResponse \| undefined`](../../doc/models/get-charge-response.md) | Optional | - |
| `installments` | `number \| undefined` | Optional | - |
| `billingAddress` | [`GetBillingAddressResponse \| undefined`](../../doc/models/get-billing-address-response.md) | Optional | - |
| `subscription` | [`GetSubscriptionResponse \| undefined`](../../doc/models/get-subscription-response.md) | Optional | - |
| `cycle` | [`GetPeriodResponse \| undefined`](../../doc/models/get-period-response.md) | Optional | - |
| `shipping` | [`GetShippingResponse \| undefined`](../../doc/models/get-shipping-response.md) | Optional | - |
| `metadata` | `Record<string, string> \| undefined` | Optional | - |
| `dueAt` | `string \| undefined` | Optional | - |
| `canceledAt` | `string \| undefined` | Optional | - |
| `billingAt` | `string \| undefined` | Optional | - |
| `seenAt` | `string \| undefined` | Optional | - |
| `totalDiscount` | `number \| undefined` | Optional | Total discounted value |
| `totalIncrement` | `number \| undefined` | Optional | Total discounted value |
| `subscriptionId` | `string \| undefined` | Optional | Subscription Id |

## Example (as JSON)

```json
{
  "id": "id0",
  "code": "code8",
  "url": "url4",
  "amount": 46,
  "status": "status8"
}
```

