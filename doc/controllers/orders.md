# Orders

```ts
const ordersController = new OrdersController(client);
```

## Class Name

`OrdersController`

## Methods

* [Get Orders](../../doc/controllers/orders.md#get-orders)
* [Get Order Item](../../doc/controllers/orders.md#get-order-item)
* [Get Order](../../doc/controllers/orders.md#get-order)
* [Close Order](../../doc/controllers/orders.md#close-order)
* [Create Order](../../doc/controllers/orders.md#create-order)
* [Update Order Item](../../doc/controllers/orders.md#update-order-item)
* [Delete All Order Items](../../doc/controllers/orders.md#delete-all-order-items)
* [Update Order Metadata](../../doc/controllers/orders.md#update-order-metadata)
* [Delete Order Item](../../doc/controllers/orders.md#delete-order-item)
* [Create Order Item](../../doc/controllers/orders.md#create-order-item)


# Get Orders

Gets all orders

```ts
async getOrders(
  page?: number,
  size?: number,
  code?: string,
  status?: string,
  createdSince?: string,
  createdUntil?: string,
  customerId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListOrderResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `page` | `number \| undefined` | Query, Optional | Page number |
| `size` | `number \| undefined` | Query, Optional | Page size |
| `code` | `string \| undefined` | Query, Optional | Filter for order's code |
| `status` | `string \| undefined` | Query, Optional | Filter for order's status |
| `createdSince` | `string \| undefined` | Query, Optional | Filter for order's creation date start range |
| `createdUntil` | `string \| undefined` | Query, Optional | Filter for order's creation date end range |
| `customerId` | `string \| undefined` | Query, Optional | Filter for order's customer id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListOrderResponse`](../../doc/models/list-order-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await ordersController.getOrders();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Order Item

```ts
async getOrderItem(
  orderId: string,
  itemId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetOrderItemResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orderId` | `string` | Template, Required | Order Id |
| `itemId` | `string` | Template, Required | Item Id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetOrderItemResponse`](../../doc/models/get-order-item-response.md)

## Example Usage

```ts
const orderId = 'orderId2';

const itemId = 'itemId8';

try {
  const { result, ...httpResponse } = await ordersController.getOrderItem(
    orderId,
    itemId
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Order

Gets an order

```ts
async getOrder(
  orderId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetOrderResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orderId` | `string` | Template, Required | Order id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetOrderResponse`](../../doc/models/get-order-response.md)

## Example Usage

```ts
const orderId = 'order_id6';

try {
  const { result, ...httpResponse } = await ordersController.getOrder(orderId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Close Order

```ts
async closeOrder(
  id: string,
  request: UpdateOrderStatusRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetOrderResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | Order Id |
| `request` | [`UpdateOrderStatusRequest`](../../doc/models/update-order-status-request.md) | Body, Required | Update Order Model |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetOrderResponse`](../../doc/models/get-order-response.md)

## Example Usage

```ts
const id = 'id0';

const request: UpdateOrderStatusRequest = {
  status: 'status8',
};

try {
  const { result, ...httpResponse } = await ordersController.closeOrder(
    id,
    request
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Order

Creates a new Order

```ts
async createOrder(
  body: CreateOrderRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetOrderResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateOrderRequest`](../../doc/models/create-order-request.md) | Body, Required | Request for creating an order |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetOrderResponse`](../../doc/models/get-order-response.md)

## Example Usage

```ts
const body: CreateOrderRequest = {
  items: [
    {
      amount: 101,
      description: 'description3',
      quantity: 215,
      category: 'category1',
    }
  ],
  customer: {
    name: '{\n    "name": "Tony Stark"\n}',
    email: 'email2',
    document: 'document2',
    type: 'type6',
    address: {
      street: 'street0',
      number: 'number8',
      zipCode: 'zip_code4',
      neighborhood: 'neighborhood6',
      city: 'city0',
      state: 'state6',
      country: 'country4',
      complement: 'complement6',
      metadata: {
        'key0': 'metadata7',
        'key1': 'metadata6'
      },
      line1: 'line_16',
      line2: 'line_28',
    },
    metadata: {
      'key0': 'metadata9',
      'key1': 'metadata0'
    },
    phones: {},
    code: 'code2',
  },
  payments: [
    {
      paymentMethod: 'payment_method0',
    }
  ],
  code: 'code4',
  metadata: {
    'key0': 'metadata7',
    'key1': 'metadata8'
  },
  closed: true,
};

try {
  const { result, ...httpResponse } = await ordersController.createOrder(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Order Item

```ts
async updateOrderItem(
  orderId: string,
  itemId: string,
  request: UpdateOrderItemRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetOrderItemResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orderId` | `string` | Template, Required | Order Id |
| `itemId` | `string` | Template, Required | Item Id |
| `request` | [`UpdateOrderItemRequest`](../../doc/models/update-order-item-request.md) | Body, Required | Item Model |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetOrderItemResponse`](../../doc/models/get-order-item-response.md)

## Example Usage

```ts
const orderId = 'orderId2';

const itemId = 'itemId8';

const request: UpdateOrderItemRequest = {
  amount: 242,
  description: 'description6',
  quantity: 100,
  category: 'category4',
};

try {
  const { result, ...httpResponse } = await ordersController.updateOrderItem(
    orderId,
    itemId,
    request
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete All Order Items

```ts
async deleteAllOrderItems(
  orderId: string,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetOrderResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orderId` | `string` | Template, Required | Order Id |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetOrderResponse`](../../doc/models/get-order-response.md)

## Example Usage

```ts
const orderId = 'orderId2';

try {
  const { result, ...httpResponse } = await ordersController.deleteAllOrderItems(orderId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Order Metadata

Updates the metadata from an order

```ts
async updateOrderMetadata(
  orderId: string,
  request: UpdateMetadataRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetOrderResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orderId` | `string` | Template, Required | The order id |
| `request` | [`UpdateMetadataRequest`](../../doc/models/update-metadata-request.md) | Body, Required | Request for updating the order metadata |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetOrderResponse`](../../doc/models/get-order-response.md)

## Example Usage

```ts
const orderId = 'order_id6';

const request: UpdateMetadataRequest = {
  metadata: {
    'key0': 'metadata3'
  },
};

try {
  const { result, ...httpResponse } = await ordersController.updateOrderMetadata(
    orderId,
    request
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete Order Item

```ts
async deleteOrderItem(
  orderId: string,
  itemId: string,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetOrderItemResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orderId` | `string` | Template, Required | Order Id |
| `itemId` | `string` | Template, Required | Item Id |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetOrderItemResponse`](../../doc/models/get-order-item-response.md)

## Example Usage

```ts
const orderId = 'orderId2';

const itemId = 'itemId8';

try {
  const { result, ...httpResponse } = await ordersController.deleteOrderItem(
    orderId,
    itemId
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Order Item

```ts
async createOrderItem(
  orderId: string,
  request: CreateOrderItemRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetOrderItemResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orderId` | `string` | Template, Required | Order Id |
| `request` | [`CreateOrderItemRequest`](../../doc/models/create-order-item-request.md) | Body, Required | Order Item Model |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetOrderItemResponse`](../../doc/models/get-order-item-response.md)

## Example Usage

```ts
const orderId = 'orderId2';

const request: CreateOrderItemRequest = {
  amount: 242,
  description: 'description6',
  quantity: 100,
  category: 'category4',
};

try {
  const { result, ...httpResponse } = await ordersController.createOrderItem(
    orderId,
    request
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

