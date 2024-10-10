
# Get Order Response

Response object for getting an Order

## Structure

`GetOrderResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| null \| undefined` | Optional | - |
| `code` | `string \| null \| undefined` | Optional | - |
| `amount` | `number \| null \| undefined` | Optional | - |
| `currency` | `string \| null \| undefined` | Optional | - |
| `closed` | `boolean \| null \| undefined` | Optional | Indicates whether the order is closed |
| `items` | [`GetOrderItemResponse[] \| null \| undefined`](../../doc/models/get-order-item-response.md) | Optional | - |
| `customer` | [`GetCustomerResponse \| null \| undefined`](../../doc/models/get-customer-response.md) | Optional | - |
| `status` | `string \| null \| undefined` | Optional | - |
| `createdAt` | `string \| null \| undefined` | Optional | - |
| `updatedAt` | `string \| null \| undefined` | Optional | - |
| `closedAt` | `string \| null \| undefined` | Optional | - |
| `charges` | [`GetChargeResponse[] \| null \| undefined`](../../doc/models/get-charge-response.md) | Optional | - |
| `invoiceUrl` | `string \| null \| undefined` | Optional | - |
| `shipping` | [`GetShippingResponse \| null \| undefined`](../../doc/models/get-shipping-response.md) | Optional | - |
| `metadata` | `Record<string, string> \| null \| undefined` | Optional | - |
| `checkouts` | [`GetCheckoutPaymentResponse[] \| null \| undefined`](../../doc/models/get-checkout-payment-response.md) | Optional | Checkout Payment Settings Response |
| `ip` | `string \| null \| undefined` | Optional | Ip address |
| `sessionId` | `string \| null \| undefined` | Optional | Session id |
| `location` | [`GetLocationResponse \| null \| undefined`](../../doc/models/get-location-response.md) | Optional | Location |
| `device` | [`GetDeviceResponse \| null \| undefined`](../../doc/models/get-device-response.md) | Optional | Device's informations |
| `integration` | [`GetIntegrationResponse \| null \| undefined`](../../doc/models/get-integration-response.md) | Optional | - |

## Example (as JSON)

```json
{
  "id": "id6",
  "code": "code4",
  "amount": 64,
  "currency": "currency6",
  "closed": false
}
```

