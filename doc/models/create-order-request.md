
# Create Order Request

Request for creating an order

## Structure

`CreateOrderRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `items` | [`CreateOrderItemRequest[]`](../../doc/models/create-order-item-request.md) | Required | Items |
| `customer` | [`CreateCustomerRequest`](../../doc/models/create-customer-request.md) | Required | Customer |
| `payments` | [`CreatePaymentRequest[]`](../../doc/models/create-payment-request.md) | Required | Payment data |
| `code` | `string` | Required | The order code |
| `customerId` | `string` | Required | The customer id |
| `shipping` | [`CreateShippingRequest \| undefined`](../../doc/models/create-shipping-request.md) | Optional | Shipping data |
| `metadata` | `Record<string, string>` | Required | Metadata |
| `antifraudEnabled` | `boolean \| undefined` | Optional | Defines whether the order will go through anti-fraud |
| `ip` | `string \| undefined` | Optional | Ip address |
| `sessionId` | `string \| undefined` | Optional | Session id |
| `location` | [`CreateLocationRequest \| undefined`](../../doc/models/create-location-request.md) | Optional | Request's location |
| `device` | [`CreateDeviceRequest \| undefined`](../../doc/models/create-device-request.md) | Optional | Device's informations |
| `closed` | `boolean` | Required | **Default**: `true` |
| `currency` | `string \| undefined` | Optional | Currency |
| `antifraud` | [`CreateAntifraudRequest \| undefined`](../../doc/models/create-antifraud-request.md) | Optional | - |
| `submerchant` | [`CreateSubMerchantRequest \| undefined`](../../doc/models/create-sub-merchant-request.md) | Optional | SubMerchant |

## Example (as JSON)

```json
{
  "items": null,
  "customer": {
    "name": "{\n    \"name\": \"Tony Stark\"\n}",
    "email": null,
    "document": null,
    "type": null,
    "address": null,
    "metadata": null,
    "phones": null,
    "code": null
  },
  "payments": null,
  "code": null,
  "customer_id": null,
  "metadata": null,
  "closed": true
}
```

