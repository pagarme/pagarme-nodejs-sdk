
# Get Order Response

Response object for getting an Order

## Structure

`GetOrderResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | - |
| `code` | `string \| undefined` | Optional | - |
| `currency` | `string \| undefined` | Optional | - |
| `items` | [`GetOrderItemResponse[] \| undefined`](../../doc/models/get-order-item-response.md) | Optional | - |
| `customer` | [`GetCustomerResponse \| undefined`](../../doc/models/get-customer-response.md) | Optional | - |
| `status` | `string \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |
| `updatedAt` | `string \| undefined` | Optional | - |
| `charges` | [`GetChargeResponse[] \| undefined`](../../doc/models/get-charge-response.md) | Optional | - |
| `invoiceUrl` | `string \| undefined` | Optional | - |
| `shipping` | [`GetShippingResponse \| undefined`](../../doc/models/get-shipping-response.md) | Optional | - |
| `metadata` | `Record<string, string> \| undefined` | Optional | - |
| `checkouts` | [`GetCheckoutPaymentResponse[] \| undefined`](../../doc/models/get-checkout-payment-response.md) | Optional | Checkout Payment Settings Response |
| `ip` | `string \| undefined` | Optional | Ip address |
| `sessionId` | `string \| undefined` | Optional | Session id |
| `location` | [`GetLocationResponse \| undefined`](../../doc/models/get-location-response.md) | Optional | Location |
| `device` | [`GetDeviceResponse \| undefined`](../../doc/models/get-device-response.md) | Optional | Device's informations |
| `closed` | `boolean \| undefined` | Optional | Indicates whether the order is closed |

## Example (as JSON)

```json
{
  "id": null,
  "code": null,
  "currency": null,
  "items": null,
  "customer": null,
  "status": null,
  "created_at": null,
  "updated_at": null,
  "charges": null,
  "invoice_url": null,
  "shipping": null,
  "metadata": null,
  "checkouts": null,
  "ip": null,
  "session_id": null,
  "location": null,
  "device": null,
  "closed": null
}
```

