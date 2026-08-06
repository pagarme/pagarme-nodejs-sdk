
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
| `customerId` | `string \| null \| undefined` | Optional | The customer id |
| `shipping` | [`CreateShippingRequest \| undefined`](../../doc/models/create-shipping-request.md) | Optional | Shipping data |
| `metadata` | `Record<string, string> \| null \| undefined` | Optional | Metadata |
| `antifraudEnabled` | `boolean \| undefined` | Optional | Defines whether the order will go through anti-fraud |
| `ip` | `string \| undefined` | Optional | Ip address |
| `sessionId` | `string \| undefined` | Optional | Session id |
| `location` | [`CreateLocationRequest \| undefined`](../../doc/models/create-location-request.md) | Optional | Request's location |
| `device` | [`CreateDeviceRequest \| undefined`](../../doc/models/create-device-request.md) | Optional | Device's informations |
| `closed` | `boolean` | Required | **Default**: `true` |
| `currency` | `string \| undefined` | Optional | Currency |
| `antifraud` | [`CreateAntifraudRequest \| undefined`](../../doc/models/create-antifraud-request.md) | Optional | - |
| `submerchant` | [`CreateSubMerchantRequest \| undefined`](../../doc/models/create-sub-merchant-request.md) | Optional | SubMerchant |

## Example

```ts
import { CreateOrderRequest } from 'pagarmeapisdklib';

const createOrderRequest: CreateOrderRequest = {
  items: [
    {}
  ],
  customer: {
    name: 'Tony Stark',
    email: '',
    document: '',
    type: '',
    address: {},
    metadata: {},
    phones: {},
    code: '',
    gender: 'gender6',
    documentType: 'document_type8',
  },
  payments: [
    {}
  ],
  code: '',
  closed: true,
  customerId: 'customer_id0',
  shipping: {},
  metadata: {
    'key0': 'metadata1',
    'key1': 'metadata2'
  },
  antifraudEnabled: false,
  ip: 'ip6',
};
```

