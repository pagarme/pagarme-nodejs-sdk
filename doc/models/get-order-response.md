
# Get Order Response

Response object for getting an Order

## Structure

`GetOrderResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| null \| undefined` | Optional | - |
| `code` | `string \| null \| undefined` | Optional | - |
| `currency` | `string \| null \| undefined` | Optional | - |
| `items` | [`GetOrderItemResponse[] \| null \| undefined`](../../doc/models/get-order-item-response.md) | Optional | - |
| `customer` | [`GetCustomerResponse \| null \| undefined`](../../doc/models/get-customer-response.md) | Optional | - |
| `status` | `string \| null \| undefined` | Optional | - |
| `createdAt` | `string \| null \| undefined` | Optional | - |
| `updatedAt` | `string \| null \| undefined` | Optional | - |
| `charges` | [`GetChargeResponse[] \| null \| undefined`](../../doc/models/get-charge-response.md) | Optional | - |
| `invoiceUrl` | `string \| null \| undefined` | Optional | - |
| `shipping` | [`GetShippingResponse \| null \| undefined`](../../doc/models/get-shipping-response.md) | Optional | - |
| `metadata` | `Record<string, string> \| null \| undefined` | Optional | - |
| `checkouts` | [`GetCheckoutPaymentResponse[] \| null \| undefined`](../../doc/models/get-checkout-payment-response.md) | Optional | Checkout Payment Settings Response |
| `ip` | `string \| null \| undefined` | Optional | Ip address |
| `sessionId` | `string \| null \| undefined` | Optional | Session id |
| `location` | [`GetLocationResponse \| null \| undefined`](../../doc/models/get-location-response.md) | Optional | Location |
| `device` | [`GetDeviceResponse \| null \| undefined`](../../doc/models/get-device-response.md) | Optional | Device's informations |
| `closed` | `boolean \| null \| undefined` | Optional | Indicates whether the order is closed |

## Example (as JSON)

```json
{
  "id": "id6",
  "code": "code4",
  "currency": "currency6",
  "items": [
    {
      "id": "id8",
      "amount": 164,
      "description": "description2",
      "quantity": 22,
      "category": "category6"
    },
    {
      "id": "id8",
      "amount": 164,
      "description": "description2",
      "quantity": 22,
      "category": "category6"
    },
    {
      "id": "id8",
      "amount": 164,
      "description": "description2",
      "quantity": 22,
      "category": "category6"
    }
  ],
  "customer": {
    "id": "id0",
    "name": "name0",
    "email": "email6",
    "delinquent": false,
    "created_at": "2016-03-13T12:52:32.123Z"
  }
}
```

