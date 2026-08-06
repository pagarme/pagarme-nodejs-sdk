# Subscriptions

```ts
const subscriptionsController = new SubscriptionsController(client);
```

## Class Name

`SubscriptionsController`

## Methods

* [Cancel Subscription](../../doc/controllers/subscriptions.md#cancel-subscription)
* [Create an Usage](../../doc/controllers/subscriptions.md#create-an-usage)
* [Create Discount](../../doc/controllers/subscriptions.md#create-discount)
* [Create Increment](../../doc/controllers/subscriptions.md#create-increment)
* [Create Subscription](../../doc/controllers/subscriptions.md#create-subscription)
* [Create Subscription Item](../../doc/controllers/subscriptions.md#create-subscription-item)
* [Create Usage](../../doc/controllers/subscriptions.md#create-usage)
* [Delete Discount](../../doc/controllers/subscriptions.md#delete-discount)
* [Delete Increment](../../doc/controllers/subscriptions.md#delete-increment)
* [Delete Subscription Item](../../doc/controllers/subscriptions.md#delete-subscription-item)
* [Delete Usage](../../doc/controllers/subscriptions.md#delete-usage)
* [Get Discount by Id](../../doc/controllers/subscriptions.md#get-discount-by-id)
* [Get Discounts](../../doc/controllers/subscriptions.md#get-discounts)
* [Get Increment by Id](../../doc/controllers/subscriptions.md#get-increment-by-id)
* [Get Increments](../../doc/controllers/subscriptions.md#get-increments)
* [Get Subscription](../../doc/controllers/subscriptions.md#get-subscription)
* [Get Subscription Cycle by Id](../../doc/controllers/subscriptions.md#get-subscription-cycle-by-id)
* [Get Subscription Cycles](../../doc/controllers/subscriptions.md#get-subscription-cycles)
* [Get Subscription Item](../../doc/controllers/subscriptions.md#get-subscription-item)
* [Get Subscription Items](../../doc/controllers/subscriptions.md#get-subscription-items)
* [Get Subscriptions](../../doc/controllers/subscriptions.md#get-subscriptions)
* [Get Usage Report](../../doc/controllers/subscriptions.md#get-usage-report)
* [Get Usages](../../doc/controllers/subscriptions.md#get-usages)
* [Renew Subscription](../../doc/controllers/subscriptions.md#renew-subscription)
* [Update Current Cycle Status](../../doc/controllers/subscriptions.md#update-current-cycle-status)
* [Update Latest Period End At](../../doc/controllers/subscriptions.md#update-latest-period-end-at)
* [Update Split Subscription](../../doc/controllers/subscriptions.md#update-split-subscription)
* [Update Subscription Affiliation Id](../../doc/controllers/subscriptions.md#update-subscription-affiliation-id)
* [Update Subscription Billing Date](../../doc/controllers/subscriptions.md#update-subscription-billing-date)
* [Update Subscription Card](../../doc/controllers/subscriptions.md#update-subscription-card)
* [Update Subscription Due Days](../../doc/controllers/subscriptions.md#update-subscription-due-days)
* [Update Subscription Item](../../doc/controllers/subscriptions.md#update-subscription-item)
* [Update Subscription Metadata](../../doc/controllers/subscriptions.md#update-subscription-metadata)
* [Update Subscription Minium Price](../../doc/controllers/subscriptions.md#update-subscription-minium-price)
* [Update Subscription Payment Method](../../doc/controllers/subscriptions.md#update-subscription-payment-method)
* [Update Subscription Start At](../../doc/controllers/subscriptions.md#update-subscription-start-at)


# Cancel Subscription

Cancels a subscription

```ts
async cancelSubscription(
  subscriptionId: string,
  request?: CreateCancelSubscriptionRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetSubscriptionResponse>>
```

## Authentication

This endpoint requires [httpBasic](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | Subscription id |
| `request` | [`CreateCancelSubscriptionRequest \| undefined`](../../doc/models/create-cancel-subscription-request.md) | Body, Optional | Request for cancelling a subscription |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetSubscriptionResponse`](../../doc/models/get-subscription-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const request: CreateCancelSubscriptionRequest = {
  cancelPendingInvoices: true,
};

try {
  const response = await subscriptionsController.cancelSubscription(
    subscriptionId,
    request
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof CustomError) {
      console.log(error.result);
    }
  }
}
```


# Create an Usage

Create Usage

```ts
async createAnUsage(
  subscriptionId: string,
  itemId: string,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetUsageResponse>>
```

## Authentication

This endpoint requires [httpBasic](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | Subscription id |
| `itemId` | `string` | Template, Required | Item id |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetUsageResponse`](../../doc/models/get-usage-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const itemId = 'item_id0';

try {
  const response = await subscriptionsController.createAnUsage(
    subscriptionId,
    itemId
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof CustomError) {
      console.log(error.result);
    }
  }
}
```


# Create Discount

Creates a discount

```ts
async createDiscount(
  subscriptionId: string,
  request: CreateDiscountRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetDiscountResponse>>
```

## Authentication

This endpoint requires [httpBasic](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | Subscription id |
| `request` | [`CreateDiscountRequest`](../../doc/models/create-discount-request.md) | Body, Required | Request for creating a discount |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetDiscountResponse`](../../doc/models/get-discount-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const request: CreateDiscountRequest = {
  value: 185.28,
  discountType: 'discount_type4',
  itemId: 'item_id6',
};

try {
  const response = await subscriptionsController.createDiscount(
    subscriptionId,
    request
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof CustomError) {
      console.log(error.result);
    }
  }
}
```


# Create Increment

Creates a increment

```ts
async createIncrement(
  subscriptionId: string,
  request: CreateIncrementRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetIncrementResponse>>
```

## Authentication

This endpoint requires [httpBasic](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | Subscription id |
| `request` | [`CreateIncrementRequest`](../../doc/models/create-increment-request.md) | Body, Required | Request for creating a increment |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetIncrementResponse`](../../doc/models/get-increment-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const request: CreateIncrementRequest = {
  value: 185.28,
  incrementType: 'increment_type8',
  itemId: 'item_id6',
};

try {
  const response = await subscriptionsController.createIncrement(
    subscriptionId,
    request
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof CustomError) {
      console.log(error.result);
    }
  }
}
```


# Create Subscription

Creates a new subscription

```ts
async createSubscription(
  body: CreateSubscriptionRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetSubscriptionResponse>>
```

## Authentication

This endpoint requires [httpBasic](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateSubscriptionRequest`](../../doc/models/create-subscription-request.md) | Body, Required | Request for creating a subscription |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetSubscriptionResponse`](../../doc/models/get-subscription-response.md).

## Example Usage

```ts
const body: CreateSubscriptionRequest = {
  customer: {
    name: 'Tony Stark',
    email: '',
    document: '',
    type: '',
    address: {},
    metadata: {},
    phones: {},
    code: '',
  },
  card: {
    type: 'credit',
  },
  code: '',
  paymentMethod: '',
  billingType: '',
  statementDescriptor: '',
  description: '',
  currency: '',
  interval: '',
  intervalCount: 0,
  pricingScheme: {},
  items: [
    {
      description: '',
      pricingScheme: {},
      id: '',
      planItemId: '',
      discounts: [
        {}
      ],
      name: '',
    }
  ],
  shipping: {},
  discounts: [
    {}
  ],
  metadata: {},
  increments: [
    {}
  ],
};

try {
  const response = await subscriptionsController.createSubscription(body);

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof CustomError) {
      console.log(error.result);
    }
  }
}
```


# Create Subscription Item

Creates a new Subscription item

```ts
async createSubscriptionItem(
  subscriptionId: string,
  request: CreateSubscriptionItemRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetSubscriptionItemResponse>>
```

## Authentication

This endpoint requires [httpBasic](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | Subscription id |
| `request` | [`CreateSubscriptionItemRequest`](../../doc/models/create-subscription-item-request.md) | Body, Required | Request for creating a subscription item |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetSubscriptionItemResponse`](../../doc/models/get-subscription-item-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const request: CreateSubscriptionItemRequest = {
  description: '',
  pricingScheme: {},
  id: '',
  planItemId: '',
  discounts: [
    {}
  ],
  name: '',
};

try {
  const response = await subscriptionsController.createSubscriptionItem(
    subscriptionId,
    request
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof CustomError) {
      console.log(error.result);
    }
  }
}
```


# Create Usage

Creates a usage

```ts
async createUsage(
  subscriptionId: string,
  itemId: string,
  body: CreateUsageRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetUsageResponse>>
```

## Authentication

This endpoint requires [httpBasic](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | Subscription Id |
| `itemId` | `string` | Template, Required | Item id |
| `body` | [`CreateUsageRequest`](../../doc/models/create-usage-request.md) | Body, Required | Request for creating a usage |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetUsageResponse`](../../doc/models/get-usage-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const itemId = 'item_id0';

const body: CreateUsageRequest = {
  quantity: 156,
  description: 'description4',
  usedAt: '2016-03-13T12:52:32.123Z',
};

try {
  const response = await subscriptionsController.createUsage(
    subscriptionId,
    itemId,
    body
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof CustomError) {
      console.log(error.result);
    }
  }
}
```


# Delete Discount

Deletes a discount

```ts
async deleteDiscount(
  subscriptionId: string,
  discountId: string,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetDiscountResponse>>
```

## Authentication

This endpoint requires [httpBasic](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | Subscription id |
| `discountId` | `string` | Template, Required | Discount Id |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetDiscountResponse`](../../doc/models/get-discount-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const discountId = 'discount_id8';

try {
  const response = await subscriptionsController.deleteDiscount(
    subscriptionId,
    discountId
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof CustomError) {
      console.log(error.result);
    }
  }
}
```


# Delete Increment

Deletes a increment

```ts
async deleteIncrement(
  subscriptionId: string,
  incrementId: string,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetIncrementResponse>>
```

## Authentication

This endpoint requires [httpBasic](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | Subscription id |
| `incrementId` | `string` | Template, Required | Increment id |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetIncrementResponse`](../../doc/models/get-increment-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const incrementId = 'increment_id8';

try {
  const response = await subscriptionsController.deleteIncrement(
    subscriptionId,
    incrementId
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof CustomError) {
      console.log(error.result);
    }
  }
}
```


# Delete Subscription Item

Deletes a subscription item

```ts
async deleteSubscriptionItem(
  subscriptionId: string,
  subscriptionItemId: string,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetSubscriptionItemResponse>>
```

## Authentication

This endpoint requires [httpBasic](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | Subscription id |
| `subscriptionItemId` | `string` | Template, Required | Subscription item id |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetSubscriptionItemResponse`](../../doc/models/get-subscription-item-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const subscriptionItemId = 'subscription_item_id4';

try {
  const response = await subscriptionsController.deleteSubscriptionItem(
    subscriptionId,
    subscriptionItemId
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof CustomError) {
      console.log(error.result);
    }
  }
}
```


# Delete Usage

Deletes a usage

```ts
async deleteUsage(
  subscriptionId: string,
  itemId: string,
  usageId: string,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetUsageResponse>>
```

## Authentication

This endpoint requires [httpBasic](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | The subscription id |
| `itemId` | `string` | Template, Required | The subscription item id |
| `usageId` | `string` | Template, Required | The usage id |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetUsageResponse`](../../doc/models/get-usage-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const itemId = 'item_id0';

const usageId = 'usage_id0';

try {
  const response = await subscriptionsController.deleteUsage(
    subscriptionId,
    itemId,
    usageId
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof CustomError) {
      console.log(error.result);
    }
  }
}
```


# Get Discount by Id

```ts
async getDiscountById(
  subscriptionId: string,
  discountId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetDiscountResponse>>
```

## Authentication

This endpoint requires [httpBasic](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | The subscription id |
| `discountId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetDiscountResponse`](../../doc/models/get-discount-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const discountId = 'discountId0';

try {
  const response = await subscriptionsController.getDiscountById(
    subscriptionId,
    discountId
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof CustomError) {
      console.log(error.result);
    }
  }
}
```


# Get Discounts

```ts
async getDiscounts(
  subscriptionId: string,
  page: number,
  size: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListDiscountsResponse>>
```

## Authentication

This endpoint requires [httpBasic](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | The subscription id |
| `page` | `number` | Query, Required | Page number |
| `size` | `number` | Query, Required | Page size |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ListDiscountsResponse`](../../doc/models/list-discounts-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const page = 30;

const size = 18;

try {
  const response = await subscriptionsController.getDiscounts(
    subscriptionId,
    page,
    size
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof CustomError) {
      console.log(error.result);
    }
  }
}
```


# Get Increment by Id

```ts
async getIncrementById(
  subscriptionId: string,
  incrementId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetIncrementResponse>>
```

## Authentication

This endpoint requires [httpBasic](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | The subscription Id |
| `incrementId` | `string` | Template, Required | The increment Id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetIncrementResponse`](../../doc/models/get-increment-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const incrementId = 'increment_id8';

try {
  const response = await subscriptionsController.getIncrementById(
    subscriptionId,
    incrementId
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof CustomError) {
      console.log(error.result);
    }
  }
}
```


# Get Increments

```ts
async getIncrements(
  subscriptionId: string,
  page?: number,
  size?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListIncrementsResponse>>
```

## Authentication

This endpoint requires [httpBasic](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | The subscription id |
| `page` | `number \| undefined` | Query, Optional | Page number |
| `size` | `number \| undefined` | Query, Optional | Page size |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ListIncrementsResponse`](../../doc/models/list-increments-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

try {
  const response = await subscriptionsController.getIncrements(subscriptionId);

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof CustomError) {
      console.log(error.result);
    }
  }
}
```


# Get Subscription

Gets a subscription

```ts
async getSubscription(
  subscriptionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetSubscriptionResponse>>
```

## Authentication

This endpoint requires [httpBasic](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | Subscription id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetSubscriptionResponse`](../../doc/models/get-subscription-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

try {
  const response = await subscriptionsController.getSubscription(subscriptionId);

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof CustomError) {
      console.log(error.result);
    }
  }
}
```


# Get Subscription Cycle by Id

```ts
async getSubscriptionCycleById(
  subscriptionId: string,
  cycleId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetPeriodResponse>>
```

## Authentication

This endpoint requires [httpBasic](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | The subscription id |
| `cycleId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetPeriodResponse`](../../doc/models/get-period-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const cycleId = 'cycleId0';

try {
  const response = await subscriptionsController.getSubscriptionCycleById(
    subscriptionId,
    cycleId
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof CustomError) {
      console.log(error.result);
    }
  }
}
```


# Get Subscription Cycles

```ts
async getSubscriptionCycles(
  subscriptionId: string,
  page: string,
  size: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListCyclesResponse>>
```

## Authentication

This endpoint requires [httpBasic](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | Subscription Id |
| `page` | `string` | Query, Required | Page number |
| `size` | `string` | Query, Required | Page size |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ListCyclesResponse`](../../doc/models/list-cycles-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const page = 'page8';

const size = 'size0';

try {
  const response = await subscriptionsController.getSubscriptionCycles(
    subscriptionId,
    page,
    size
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof CustomError) {
      console.log(error.result);
    }
  }
}
```


# Get Subscription Item

Get Subscription Item

```ts
async getSubscriptionItem(
  subscriptionId: string,
  itemId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetSubscriptionItemResponse>>
```

## Authentication

This endpoint requires [httpBasic](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | Subscription Id |
| `itemId` | `string` | Template, Required | Item id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetSubscriptionItemResponse`](../../doc/models/get-subscription-item-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const itemId = 'item_id0';

try {
  const response = await subscriptionsController.getSubscriptionItem(
    subscriptionId,
    itemId
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof CustomError) {
      console.log(error.result);
    }
  }
}
```


# Get Subscription Items

Get Subscription Items

```ts
async getSubscriptionItems(
  subscriptionId: string,
  page?: number,
  size?: number,
  name?: string,
  code?: string,
  status?: string,
  description?: string,
  createdSince?: string,
  createdUntil?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListSubscriptionItemsResponse>>
```

## Authentication

This endpoint requires [httpBasic](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | The subscription id |
| `page` | `number \| undefined` | Query, Optional | Page number |
| `size` | `number \| undefined` | Query, Optional | Page size |
| `name` | `string \| undefined` | Query, Optional | The item name |
| `code` | `string \| undefined` | Query, Optional | Identification code in the client system |
| `status` | `string \| undefined` | Query, Optional | The item statis |
| `description` | `string \| undefined` | Query, Optional | The item description |
| `createdSince` | `string \| undefined` | Query, Optional | Filter for item's creation date start range |
| `createdUntil` | `string \| undefined` | Query, Optional | Filter for item's creation date end range |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ListSubscriptionItemsResponse`](../../doc/models/list-subscription-items-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

try {
  const response = await subscriptionsController.getSubscriptionItems(subscriptionId);

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof CustomError) {
      console.log(error.result);
    }
  }
}
```


# Get Subscriptions

Gets all subscriptions

```ts
async getSubscriptions(
  page?: number,
  size?: number,
  code?: string,
  billingType?: string,
  customerId?: string,
  planId?: string,
  cardId?: string,
  status?: string,
  nextBillingSince?: string,
  nextBillingUntil?: string,
  createdSince?: string,
  createdUntil?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListSubscriptionsResponse>>
```

## Authentication

This endpoint requires [httpBasic](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `page` | `number \| undefined` | Query, Optional | Page number |
| `size` | `number \| undefined` | Query, Optional | Page size |
| `code` | `string \| undefined` | Query, Optional | Filter for subscription's code |
| `billingType` | `string \| undefined` | Query, Optional | Filter for subscription's billing type |
| `customerId` | `string \| undefined` | Query, Optional | Filter for subscription's customer id |
| `planId` | `string \| undefined` | Query, Optional | Filter for subscription's plan id |
| `cardId` | `string \| undefined` | Query, Optional | Filter for subscription's card id |
| `status` | `string \| undefined` | Query, Optional | Filter for subscription's status |
| `nextBillingSince` | `string \| undefined` | Query, Optional | Filter for subscription's next billing date start range |
| `nextBillingUntil` | `string \| undefined` | Query, Optional | Filter for subscription's next billing date end range |
| `createdSince` | `string \| undefined` | Query, Optional | Filter for subscription's creation date start range |
| `createdUntil` | `string \| undefined` | Query, Optional | Filter for subscriptions creation date end range |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ListSubscriptionsResponse`](../../doc/models/list-subscriptions-response.md).

## Example Usage

```ts
try {
  const response = await subscriptionsController.getSubscriptions();

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof CustomError) {
      console.log(error.result);
    }
  }
}
```


# Get Usage Report

```ts
async getUsageReport(
  subscriptionId: string,
  periodId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetUsageReportResponse>>
```

## Authentication

This endpoint requires [httpBasic](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | The subscription Id |
| `periodId` | `string` | Template, Required | The period Id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetUsageReportResponse`](../../doc/models/get-usage-report-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const periodId = 'period_id0';

try {
  const response = await subscriptionsController.getUsageReport(
    subscriptionId,
    periodId
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof CustomError) {
      console.log(error.result);
    }
  }
}
```


# Get Usages

Lists all usages from a subscription item

```ts
async getUsages(
  subscriptionId: string,
  itemId: string,
  page?: number,
  size?: number,
  code?: string,
  group?: string,
  usedSince?: string,
  usedUntil?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListUsagesResponse>>
```

## Authentication

This endpoint requires [httpBasic](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | The subscription id |
| `itemId` | `string` | Template, Required | The subscription item id |
| `page` | `number \| undefined` | Query, Optional | Page number |
| `size` | `number \| undefined` | Query, Optional | Page size |
| `code` | `string \| undefined` | Query, Optional | Identification code in the client system |
| `group` | `string \| undefined` | Query, Optional | Identification group in the client system |
| `usedSince` | `string \| undefined` | Query, Optional | - |
| `usedUntil` | `string \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ListUsagesResponse`](../../doc/models/list-usages-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const itemId = 'item_id0';

try {
  const response = await subscriptionsController.getUsages(
    subscriptionId,
    itemId
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof CustomError) {
      console.log(error.result);
    }
  }
}
```


# Renew Subscription

```ts
async renewSubscription(
  subscriptionId: string,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetPeriodResponse>>
```

## Authentication

This endpoint requires [httpBasic](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | - |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetPeriodResponse`](../../doc/models/get-period-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

try {
  const response = await subscriptionsController.renewSubscription(subscriptionId);

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof CustomError) {
      console.log(error.result);
    }
  }
}
```


# Update Current Cycle Status

```ts
async updateCurrentCycleStatus(
  subscriptionId: string,
  request: UpdateCurrentCycleStatusRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Authentication

This endpoint requires [httpBasic](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | Subscription Id |
| `request` | [`UpdateCurrentCycleStatusRequest`](../../doc/models/update-current-cycle-status-request.md) | Body, Required | Request for updating the end date of the subscription current status |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const request: UpdateCurrentCycleStatusRequest = {
  status: 'status8',
};

try {
  const response = await subscriptionsController.updateCurrentCycleStatus(
    subscriptionId,
    request
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof CustomError) {
      console.log(error.result);
    }
  }
}
```


# Update Latest Period End At

```ts
async updateLatestPeriodEndAt(
  subscriptionId: string,
  request: UpdateCurrentCycleEndDateRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetSubscriptionResponse>>
```

## Authentication

This endpoint requires [httpBasic](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | - |
| `request` | [`UpdateCurrentCycleEndDateRequest`](../../doc/models/update-current-cycle-end-date-request.md) | Body, Required | Request for updating the end date of the current signature cycle |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetSubscriptionResponse`](../../doc/models/get-subscription-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const request: UpdateCurrentCycleEndDateRequest = {
};

try {
  const response = await subscriptionsController.updateLatestPeriodEndAt(
    subscriptionId,
    request
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof CustomError) {
      console.log(error.result);
    }
  }
}
```


# Update Split Subscription

```ts
async updateSplitSubscription(
  id: string,
  request: UpdateSubscriptionSplitRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetSubscriptionResponse>>
```

## Authentication

This endpoint requires [httpBasic](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | Subscription's id |
| `request` | [`UpdateSubscriptionSplitRequest`](../../doc/models/update-subscription-split-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetSubscriptionResponse`](../../doc/models/get-subscription-response.md).

## Example Usage

```ts
const id = 'id0';

const request: UpdateSubscriptionSplitRequest = {
  enabled: false,
  rules: [
    {}
  ],
};

try {
  const response = await subscriptionsController.updateSplitSubscription(
    id,
    request
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof CustomError) {
      console.log(error.result);
    }
  }
}
```


# Update Subscription Affiliation Id

```ts
async updateSubscriptionAffiliationId(
  subscriptionId: string,
  request: UpdateSubscriptionAffiliationIdRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetSubscriptionResponse>>
```

## Authentication

This endpoint requires [httpBasic](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | - |
| `request` | [`UpdateSubscriptionAffiliationIdRequest`](../../doc/models/update-subscription-affiliation-id-request.md) | Body, Required | Request for updating a subscription affiliation id |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetSubscriptionResponse`](../../doc/models/get-subscription-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const request: UpdateSubscriptionAffiliationIdRequest = {
  gatewayAffiliationId: 'gateway_affiliation_id2',
};

try {
  const response = await subscriptionsController.updateSubscriptionAffiliationId(
    subscriptionId,
    request
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof CustomError) {
      console.log(error.result);
    }
  }
}
```


# Update Subscription Billing Date

Updates the billing date from a subscription

```ts
async updateSubscriptionBillingDate(
  subscriptionId: string,
  request: UpdateSubscriptionBillingDateRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetSubscriptionResponse>>
```

## Authentication

This endpoint requires [httpBasic](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | The subscription id |
| `request` | [`UpdateSubscriptionBillingDateRequest`](../../doc/models/update-subscription-billing-date-request.md) | Body, Required | Request for updating the subscription billing date |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetSubscriptionResponse`](../../doc/models/get-subscription-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const request: UpdateSubscriptionBillingDateRequest = {
  nextBillingAt: '2016-03-13T12:52:32.123Z',
};

try {
  const response = await subscriptionsController.updateSubscriptionBillingDate(
    subscriptionId,
    request
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof CustomError) {
      console.log(error.result);
    }
  }
}
```


# Update Subscription Card

Updates the credit card from a subscription

```ts
async updateSubscriptionCard(
  subscriptionId: string,
  request: UpdateSubscriptionCardRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetSubscriptionResponse>>
```

## Authentication

This endpoint requires [httpBasic](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | Subscription id |
| `request` | [`UpdateSubscriptionCardRequest`](../../doc/models/update-subscription-card-request.md) | Body, Required | Request for updating a card |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetSubscriptionResponse`](../../doc/models/get-subscription-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const request: UpdateSubscriptionCardRequest = {
  card: {
    type: 'credit',
  },
  cardId: '',
};

try {
  const response = await subscriptionsController.updateSubscriptionCard(
    subscriptionId,
    request
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof CustomError) {
      console.log(error.result);
    }
  }
}
```


# Update Subscription Due Days

Updates the boleto due days from a subscription

```ts
async updateSubscriptionDueDays(
  subscriptionId: string,
  request: UpdateSubscriptionDueDaysRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetSubscriptionResponse>>
```

## Authentication

This endpoint requires [httpBasic](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | Subscription Id |
| `request` | [`UpdateSubscriptionDueDaysRequest`](../../doc/models/update-subscription-due-days-request.md) | Body, Required | - |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetSubscriptionResponse`](../../doc/models/get-subscription-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const request: UpdateSubscriptionDueDaysRequest = {
  boletoDueDays: 226,
};

try {
  const response = await subscriptionsController.updateSubscriptionDueDays(
    subscriptionId,
    request
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof CustomError) {
      console.log(error.result);
    }
  }
}
```


# Update Subscription Item

Updates a subscription item

```ts
async updateSubscriptionItem(
  subscriptionId: string,
  itemId: string,
  body: UpdateSubscriptionItemRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetSubscriptionItemResponse>>
```

## Authentication

This endpoint requires [httpBasic](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | Subscription Id |
| `itemId` | `string` | Template, Required | Item id |
| `body` | [`UpdateSubscriptionItemRequest`](../../doc/models/update-subscription-item-request.md) | Body, Required | Request for updating a subscription item |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetSubscriptionItemResponse`](../../doc/models/get-subscription-item-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const itemId = 'item_id0';

const body: UpdateSubscriptionItemRequest = {
  description: '',
  status: '',
  pricingScheme: {
    schemeType: '',
    priceBrackets: [
      {}
    ],
  },
  name: '',
};

try {
  const response = await subscriptionsController.updateSubscriptionItem(
    subscriptionId,
    itemId,
    body
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof CustomError) {
      console.log(error.result);
    }
  }
}
```


# Update Subscription Metadata

Updates the metadata from a subscription

```ts
async updateSubscriptionMetadata(
  subscriptionId: string,
  request: UpdateMetadataRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetSubscriptionResponse>>
```

## Authentication

This endpoint requires [httpBasic](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | The subscription id |
| `request` | [`UpdateMetadataRequest`](../../doc/models/update-metadata-request.md) | Body, Required | Request for updating the subscrption metadata |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetSubscriptionResponse`](../../doc/models/get-subscription-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const request: UpdateMetadataRequest = {
  metadata: {
    'key0': 'metadata3'
  },
};

try {
  const response = await subscriptionsController.updateSubscriptionMetadata(
    subscriptionId,
    request
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof CustomError) {
      console.log(error.result);
    }
  }
}
```


# Update Subscription Minium Price

Atualização do valor mínimo da assinatura

```ts
async updateSubscriptionMiniumPrice(
  subscriptionId: string,
  request: UpdateSubscriptionMinimumPriceRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetSubscriptionResponse>>
```

## Authentication

This endpoint requires [httpBasic](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | Subscription Id |
| `request` | [`UpdateSubscriptionMinimumPriceRequest`](../../doc/models/update-subscription-minimum-price-request.md) | Body, Required | Request da requisição com o valor mínimo que será configurado |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetSubscriptionResponse`](../../doc/models/get-subscription-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const request: UpdateSubscriptionMinimumPriceRequest = {
};

try {
  const response = await subscriptionsController.updateSubscriptionMiniumPrice(
    subscriptionId,
    request
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof CustomError) {
      console.log(error.result);
    }
  }
}
```


# Update Subscription Payment Method

Updates the payment method from a subscription

```ts
async updateSubscriptionPaymentMethod(
  subscriptionId: string,
  request: UpdateSubscriptionPaymentMethodRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetSubscriptionResponse>>
```

## Authentication

This endpoint requires [httpBasic](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | Subscription id |
| `request` | [`UpdateSubscriptionPaymentMethodRequest`](../../doc/models/update-subscription-payment-method-request.md) | Body, Required | Request for updating the paymentmethod from a subscription |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetSubscriptionResponse`](../../doc/models/get-subscription-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const request: UpdateSubscriptionPaymentMethodRequest = {
  paymentMethod: '',
  cardId: '',
  card: {
    type: 'credit',
  },
};

try {
  const response = await subscriptionsController.updateSubscriptionPaymentMethod(
    subscriptionId,
    request
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof CustomError) {
      console.log(error.result);
    }
  }
}
```


# Update Subscription Start At

Updates the start at date from a subscription

```ts
async updateSubscriptionStartAt(
  subscriptionId: string,
  request: UpdateSubscriptionStartAtRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetSubscriptionResponse>>
```

## Authentication

This endpoint requires [httpBasic](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | The subscription id |
| `request` | [`UpdateSubscriptionStartAtRequest`](../../doc/models/update-subscription-start-at-request.md) | Body, Required | Request for updating the subscription start date |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetSubscriptionResponse`](../../doc/models/get-subscription-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const request: UpdateSubscriptionStartAtRequest = {
  startAt: '2016-03-13T12:52:32.123Z',
};

try {
  const response = await subscriptionsController.updateSubscriptionStartAt(
    subscriptionId,
    request
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof CustomError) {
      console.log(error.result);
    }
  }
}
```

