# Subscriptions

```ts
const subscriptionsController = new SubscriptionsController(client);
```

## Class Name

`SubscriptionsController`

## Methods

* [Update Subscription Card](../../doc/controllers/subscriptions.md#update-subscription-card)
* [Create Discount](../../doc/controllers/subscriptions.md#create-discount)
* [Update Subscription Billing Date](../../doc/controllers/subscriptions.md#update-subscription-billing-date)
* [Update Subscription Start At](../../doc/controllers/subscriptions.md#update-subscription-start-at)
* [Get Subscription](../../doc/controllers/subscriptions.md#get-subscription)
* [Get Usages](../../doc/controllers/subscriptions.md#get-usages)
* [Update Latest Period End At](../../doc/controllers/subscriptions.md#update-latest-period-end-at)
* [Delete Discount](../../doc/controllers/subscriptions.md#delete-discount)
* [Update Subscription Payment Method](../../doc/controllers/subscriptions.md#update-subscription-payment-method)
* [Cancel Subscription](../../doc/controllers/subscriptions.md#cancel-subscription)
* [Create Subscription](../../doc/controllers/subscriptions.md#create-subscription)
* [Update Subscription Affiliation Id](../../doc/controllers/subscriptions.md#update-subscription-affiliation-id)
* [Update Subscription Minium Price](../../doc/controllers/subscriptions.md#update-subscription-minium-price)
* [Get Subscription Cycle by Id](../../doc/controllers/subscriptions.md#get-subscription-cycle-by-id)
* [Get Usage Report](../../doc/controllers/subscriptions.md#get-usage-report)
* [Renew Subscription](../../doc/controllers/subscriptions.md#renew-subscription)
* [Delete Usage](../../doc/controllers/subscriptions.md#delete-usage)
* [Create an Usage](../../doc/controllers/subscriptions.md#create-an-usage)
* [Update Current Cycle Status](../../doc/controllers/subscriptions.md#update-current-cycle-status)
* [Get Subscription Item](../../doc/controllers/subscriptions.md#get-subscription-item)
* [Get Increment by Id](../../doc/controllers/subscriptions.md#get-increment-by-id)
* [Delete Increment](../../doc/controllers/subscriptions.md#delete-increment)
* [Get Discounts](../../doc/controllers/subscriptions.md#get-discounts)
* [Update Subscription Due Days](../../doc/controllers/subscriptions.md#update-subscription-due-days)
* [Create Subscription Item](../../doc/controllers/subscriptions.md#create-subscription-item)
* [Update Split Subscription](../../doc/controllers/subscriptions.md#update-split-subscription)
* [Get Subscription Items](../../doc/controllers/subscriptions.md#get-subscription-items)
* [Get Subscriptions](../../doc/controllers/subscriptions.md#get-subscriptions)
* [Create Increment](../../doc/controllers/subscriptions.md#create-increment)
* [Create Usage](../../doc/controllers/subscriptions.md#create-usage)
* [Get Discount by Id](../../doc/controllers/subscriptions.md#get-discount-by-id)
* [Update Subscription Metadata](../../doc/controllers/subscriptions.md#update-subscription-metadata)
* [Get Subscription Cycles](../../doc/controllers/subscriptions.md#get-subscription-cycles)
* [Delete Subscription Item](../../doc/controllers/subscriptions.md#delete-subscription-item)
* [Get Increments](../../doc/controllers/subscriptions.md#get-increments)
* [Update Subscription Item](../../doc/controllers/subscriptions.md#update-subscription-item)


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

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | Subscription id |
| `request` | [`UpdateSubscriptionCardRequest`](../../doc/models/update-subscription-card-request.md) | Body, Required | Request for updating a card |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetSubscriptionResponse](../../doc/models/get-subscription-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const request: UpdateSubscriptionCardRequest = {
  card: {
    type: 'credit',
  },
  cardId: 'card_id2',
};

try {
  const { result, ...httpResponse } = await subscriptionsController.updateSubscriptionCard(
  subscriptionId,
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

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | Subscription id |
| `request` | [`CreateDiscountRequest`](../../doc/models/create-discount-request.md) | Body, Required | Request for creating a discount |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetDiscountResponse](../../doc/models/get-discount-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const request: CreateDiscountRequest = {
  value: 185.28,
  discountType: 'discount_type4',
  itemId: 'item_id6',
};

try {
  const { result, ...httpResponse } = await subscriptionsController.createDiscount(
  subscriptionId,
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

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | The subscription id |
| `request` | [`UpdateSubscriptionBillingDateRequest`](../../doc/models/update-subscription-billing-date-request.md) | Body, Required | Request for updating the subscription billing date |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetSubscriptionResponse](../../doc/models/get-subscription-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const request: UpdateSubscriptionBillingDateRequest = {
  nextBillingAt: '2016-03-13T12:52:32.123Z',
};

try {
  const { result, ...httpResponse } = await subscriptionsController.updateSubscriptionBillingDate(
  subscriptionId,
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

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | The subscription id |
| `request` | [`UpdateSubscriptionStartAtRequest`](../../doc/models/update-subscription-start-at-request.md) | Body, Required | Request for updating the subscription start date |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetSubscriptionResponse](../../doc/models/get-subscription-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const request: UpdateSubscriptionStartAtRequest = {
  startAt: '2016-03-13T12:52:32.123Z',
};

try {
  const { result, ...httpResponse } = await subscriptionsController.updateSubscriptionStartAt(
  subscriptionId,
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


# Get Subscription

Gets a subscription

```ts
async getSubscription(
  subscriptionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetSubscriptionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | Subscription id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetSubscriptionResponse](../../doc/models/get-subscription-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

try {
  const { result, ...httpResponse } = await subscriptionsController.getSubscription(subscriptionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
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

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [ListUsagesResponse](../../doc/models/list-usages-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const itemId = 'item_id0';

try {
  const { result, ...httpResponse } = await subscriptionsController.getUsages(
  subscriptionId,
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


# Update Latest Period End At

```ts
async updateLatestPeriodEndAt(
  subscriptionId: string,
  request: UpdateCurrentCycleEndDateRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetSubscriptionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | - |
| `request` | [`UpdateCurrentCycleEndDateRequest`](../../doc/models/update-current-cycle-end-date-request.md) | Body, Required | Request for updating the end date of the current signature cycle |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetSubscriptionResponse](../../doc/models/get-subscription-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const request: UpdateCurrentCycleEndDateRequest = {
};

try {
  const { result, ...httpResponse } = await subscriptionsController.updateLatestPeriodEndAt(
  subscriptionId,
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

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | Subscription id |
| `discountId` | `string` | Template, Required | Discount Id |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetDiscountResponse](../../doc/models/get-discount-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const discountId = 'discount_id8';

try {
  const { result, ...httpResponse } = await subscriptionsController.deleteDiscount(
  subscriptionId,
  discountId
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

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | Subscription id |
| `request` | [`UpdateSubscriptionPaymentMethodRequest`](../../doc/models/update-subscription-payment-method-request.md) | Body, Required | Request for updating the paymentmethod from a subscription |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetSubscriptionResponse](../../doc/models/get-subscription-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const request: UpdateSubscriptionPaymentMethodRequest = {
  paymentMethod: 'payment_method4',
  cardId: 'card_id2',
  card: {
    type: 'credit',
  },
};

try {
  const { result, ...httpResponse } = await subscriptionsController.updateSubscriptionPaymentMethod(
  subscriptionId,
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

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | Subscription id |
| `request` | [`CreateCancelSubscriptionRequest \| undefined`](../../doc/models/create-cancel-subscription-request.md) | Body, Optional | Request for cancelling a subscription |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetSubscriptionResponse](../../doc/models/get-subscription-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const request: CreateCancelSubscriptionRequest = {
  cancelPendingInvoices: true,
};

try {
  const { result, ...httpResponse } = await subscriptionsController.cancelSubscription(
  subscriptionId,
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


# Create Subscription

Creates a new subscription

```ts
async createSubscription(
  body: CreateSubscriptionRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetSubscriptionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateSubscriptionRequest`](../../doc/models/create-subscription-request.md) | Body, Required | Request for creating a subscription |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetSubscriptionResponse](../../doc/models/get-subscription-response.md).

## Example Usage

```ts
const body: CreateSubscriptionRequest = {
  customer: {
    name: 'Tony Stark',
    email: 'email6',
    document: 'document6',
    type: 'type0',
    address: {
      street: 'street6',
      number: 'number4',
      zipCode: 'zip_code0',
      neighborhood: 'neighborhood2',
      city: 'city6',
      state: 'state2',
      country: 'country0',
      complement: 'complement2',
      line1: 'line_10',
      line2: 'line_24',
    },
    metadata: {
      'key0': 'metadata3'
    },
    phones: {
    },
    code: 'code8',
  },
  card: {
    type: 'credit',
  },
  code: 'code4',
  paymentMethod: 'payment_method4',
  billingType: 'billing_type0',
  statementDescriptor: 'statement_descriptor6',
  description: 'description4',
  currency: 'currency6',
  interval: 'interval6',
  intervalCount: 170,
  pricingScheme: {
    schemeType: 'scheme_type8',
  },
  items: [
    {
      description: 'description2',
      pricingScheme: {
        schemeType: 'scheme_type8',
      },
      id: 'id8',
      planItemId: 'plan_item_id8',
      discounts: [
        {
          value: 90.66,
          discountType: 'discount_type2',
          itemId: 'item_id4',
        }
      ],
      name: 'name8',
    }
  ],
  shipping: {
    amount: 52,
    description: 'description6',
    recipientName: 'recipient_name2',
    recipientPhone: 'recipient_phone6',
    addressId: 'address_id6',
    address: {
      street: 'street6',
      number: 'number4',
      zipCode: 'zip_code0',
      neighborhood: 'neighborhood2',
      city: 'city6',
      state: 'state2',
      country: 'country0',
      complement: 'complement2',
      line1: 'line_10',
      line2: 'line_24',
    },
    type: 'type6',
  },
  discounts: [
    {
      value: 90.66,
      discountType: 'discount_type2',
      itemId: 'item_id4',
    }
  ],
  metadata: {
    'key0': 'metadata7',
    'key1': 'metadata8'
  },
  increments: [
    {
      value: 252.86,
      incrementType: 'increment_type6',
      itemId: 'item_id6',
    }
  ],
};

try {
  const { result, ...httpResponse } = await subscriptionsController.createSubscription(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
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

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | - |
| `request` | [`UpdateSubscriptionAffiliationIdRequest`](../../doc/models/update-subscription-affiliation-id-request.md) | Body, Required | Request for updating a subscription affiliation id |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetSubscriptionResponse](../../doc/models/get-subscription-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const request: UpdateSubscriptionAffiliationIdRequest = {
  gatewayAffiliationId: 'gateway_affiliation_id2',
};

try {
  const { result, ...httpResponse } = await subscriptionsController.updateSubscriptionAffiliationId(
  subscriptionId,
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

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | Subscription Id |
| `request` | [`UpdateSubscriptionMinimumPriceRequest`](../../doc/models/update-subscription-minimum-price-request.md) | Body, Required | Request da requisição com o valor mínimo que será configurado |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetSubscriptionResponse](../../doc/models/get-subscription-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const request: UpdateSubscriptionMinimumPriceRequest = {
};

try {
  const { result, ...httpResponse } = await subscriptionsController.updateSubscriptionMiniumPrice(
  subscriptionId,
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


# Get Subscription Cycle by Id

```ts
async getSubscriptionCycleById(
  subscriptionId: string,
  cycleId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetPeriodResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | The subscription id |
| `cycleId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetPeriodResponse](../../doc/models/get-period-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const cycleId = 'cycleId0';

try {
  const { result, ...httpResponse } = await subscriptionsController.getSubscriptionCycleById(
  subscriptionId,
  cycleId
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


# Get Usage Report

```ts
async getUsageReport(
  subscriptionId: string,
  periodId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetUsageReportResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | The subscription Id |
| `periodId` | `string` | Template, Required | The period Id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetUsageReportResponse](../../doc/models/get-usage-report-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const periodId = 'period_id0';

try {
  const { result, ...httpResponse } = await subscriptionsController.getUsageReport(
  subscriptionId,
  periodId
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


# Renew Subscription

```ts
async renewSubscription(
  subscriptionId: string,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetPeriodResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | - |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetPeriodResponse](../../doc/models/get-period-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

try {
  const { result, ...httpResponse } = await subscriptionsController.renewSubscription(subscriptionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
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

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | The subscription id |
| `itemId` | `string` | Template, Required | The subscription item id |
| `usageId` | `string` | Template, Required | The usage id |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetUsageResponse](../../doc/models/get-usage-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const itemId = 'item_id0';

const usageId = 'usage_id0';

try {
  const { result, ...httpResponse } = await subscriptionsController.deleteUsage(
  subscriptionId,
  itemId,
  usageId
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

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | Subscription id |
| `itemId` | `string` | Template, Required | Item id |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetUsageResponse](../../doc/models/get-usage-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const itemId = 'item_id0';

try {
  const { result, ...httpResponse } = await subscriptionsController.createAnUsage(
  subscriptionId,
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


# Update Current Cycle Status

```ts
async updateCurrentCycleStatus(
  subscriptionId: string,
  request: UpdateCurrentCycleStatusRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | Subscription Id |
| `request` | [`UpdateCurrentCycleStatusRequest`](../../doc/models/update-current-cycle-status-request.md) | Body, Required | Request for updating the end date of the subscription current status |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const request: UpdateCurrentCycleStatusRequest = {
  status: 'status8',
};

try {
  const { result, ...httpResponse } = await subscriptionsController.updateCurrentCycleStatus(
  subscriptionId,
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


# Get Subscription Item

Get Subscription Item

```ts
async getSubscriptionItem(
  subscriptionId: string,
  itemId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetSubscriptionItemResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | Subscription Id |
| `itemId` | `string` | Template, Required | Item id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetSubscriptionItemResponse](../../doc/models/get-subscription-item-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const itemId = 'item_id0';

try {
  const { result, ...httpResponse } = await subscriptionsController.getSubscriptionItem(
  subscriptionId,
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


# Get Increment by Id

```ts
async getIncrementById(
  subscriptionId: string,
  incrementId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetIncrementResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | The subscription Id |
| `incrementId` | `string` | Template, Required | The increment Id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetIncrementResponse](../../doc/models/get-increment-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const incrementId = 'increment_id8';

try {
  const { result, ...httpResponse } = await subscriptionsController.getIncrementById(
  subscriptionId,
  incrementId
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

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | Subscription id |
| `incrementId` | `string` | Template, Required | Increment id |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetIncrementResponse](../../doc/models/get-increment-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const incrementId = 'increment_id8';

try {
  const { result, ...httpResponse } = await subscriptionsController.deleteIncrement(
  subscriptionId,
  incrementId
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


# Get Discounts

```ts
async getDiscounts(
  subscriptionId: string,
  page: number,
  size: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListDiscountsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | The subscription id |
| `page` | `number` | Query, Required | Page number |
| `size` | `number` | Query, Required | Page size |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [ListDiscountsResponse](../../doc/models/list-discounts-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const page = 30;

const size = 18;

try {
  const { result, ...httpResponse } = await subscriptionsController.getDiscounts(
  subscriptionId,
  page,
  size
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

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | Subscription Id |
| `request` | [`UpdateSubscriptionDueDaysRequest`](../../doc/models/update-subscription-due-days-request.md) | Body, Required | - |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetSubscriptionResponse](../../doc/models/get-subscription-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const request: UpdateSubscriptionDueDaysRequest = {
  boletoDueDays: 226,
};

try {
  const { result, ...httpResponse } = await subscriptionsController.updateSubscriptionDueDays(
  subscriptionId,
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

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | Subscription id |
| `request` | [`CreateSubscriptionItemRequest`](../../doc/models/create-subscription-item-request.md) | Body, Required | Request for creating a subscription item |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetSubscriptionItemResponse](../../doc/models/get-subscription-item-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const request: CreateSubscriptionItemRequest = {
  description: 'description6',
  pricingScheme: {
    schemeType: 'scheme_type8',
  },
  id: 'id6',
  planItemId: 'plan_item_id6',
  discounts: [
    {
      value: 90.66,
      discountType: 'discount_type2',
      itemId: 'item_id4',
    }
  ],
  name: 'name6',
};

try {
  const { result, ...httpResponse } = await subscriptionsController.createSubscriptionItem(
  subscriptionId,
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


# Update Split Subscription

```ts
async updateSplitSubscription(
  id: string,
  request: UpdateSubscriptionSplitRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetSubscriptionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | Subscription's id |
| `request` | [`UpdateSubscriptionSplitRequest`](../../doc/models/update-subscription-split-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetSubscriptionResponse](../../doc/models/get-subscription-response.md).

## Example Usage

```ts
const id = 'id0';

const request: UpdateSubscriptionSplitRequest = {
  enabled: false,
  rules: [
    {
      type: 'type2',
      amount: 118,
      recipientId: 'recipient_id2',
    }
  ],
};

try {
  const { result, ...httpResponse } = await subscriptionsController.updateSplitSubscription(
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

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [ListSubscriptionItemsResponse](../../doc/models/list-subscription-items-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

try {
  const { result, ...httpResponse } = await subscriptionsController.getSubscriptionItems(subscriptionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
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

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [ListSubscriptionsResponse](../../doc/models/list-subscriptions-response.md).

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await subscriptionsController.getSubscriptions();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
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

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | Subscription id |
| `request` | [`CreateIncrementRequest`](../../doc/models/create-increment-request.md) | Body, Required | Request for creating a increment |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetIncrementResponse](../../doc/models/get-increment-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const request: CreateIncrementRequest = {
  value: 185.28,
  incrementType: 'increment_type8',
  itemId: 'item_id6',
};

try {
  const { result, ...httpResponse } = await subscriptionsController.createIncrement(
  subscriptionId,
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

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | Subscription Id |
| `itemId` | `string` | Template, Required | Item id |
| `body` | [`CreateUsageRequest`](../../doc/models/create-usage-request.md) | Body, Required | Request for creating a usage |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetUsageResponse](../../doc/models/get-usage-response.md).

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
  const { result, ...httpResponse } = await subscriptionsController.createUsage(
  subscriptionId,
  itemId,
  body
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


# Get Discount by Id

```ts
async getDiscountById(
  subscriptionId: string,
  discountId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetDiscountResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | The subscription id |
| `discountId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetDiscountResponse](../../doc/models/get-discount-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const discountId = 'discountId0';

try {
  const { result, ...httpResponse } = await subscriptionsController.getDiscountById(
  subscriptionId,
  discountId
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

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | The subscription id |
| `request` | [`UpdateMetadataRequest`](../../doc/models/update-metadata-request.md) | Body, Required | Request for updating the subscrption metadata |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetSubscriptionResponse](../../doc/models/get-subscription-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const request: UpdateMetadataRequest = {
  metadata: {
    'key0': 'metadata3'
  },
};

try {
  const { result, ...httpResponse } = await subscriptionsController.updateSubscriptionMetadata(
  subscriptionId,
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


# Get Subscription Cycles

```ts
async getSubscriptionCycles(
  subscriptionId: string,
  page: string,
  size: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListCyclesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | Subscription Id |
| `page` | `string` | Query, Required | Page number |
| `size` | `string` | Query, Required | Page size |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [ListCyclesResponse](../../doc/models/list-cycles-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const page = 'page8';

const size = 'size0';

try {
  const { result, ...httpResponse } = await subscriptionsController.getSubscriptionCycles(
  subscriptionId,
  page,
  size
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

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | Subscription id |
| `subscriptionItemId` | `string` | Template, Required | Subscription item id |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetSubscriptionItemResponse](../../doc/models/get-subscription-item-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const subscriptionItemId = 'subscription_item_id4';

try {
  const { result, ...httpResponse } = await subscriptionsController.deleteSubscriptionItem(
  subscriptionId,
  subscriptionItemId
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


# Get Increments

```ts
async getIncrements(
  subscriptionId: string,
  page?: number,
  size?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListIncrementsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | The subscription id |
| `page` | `number \| undefined` | Query, Optional | Page number |
| `size` | `number \| undefined` | Query, Optional | Page size |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [ListIncrementsResponse](../../doc/models/list-increments-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

try {
  const { result, ...httpResponse } = await subscriptionsController.getIncrements(subscriptionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
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

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | Subscription Id |
| `itemId` | `string` | Template, Required | Item id |
| `body` | [`UpdateSubscriptionItemRequest`](../../doc/models/update-subscription-item-request.md) | Body, Required | Request for updating a subscription item |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetSubscriptionItemResponse](../../doc/models/get-subscription-item-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const itemId = 'item_id0';

const body: UpdateSubscriptionItemRequest = {
  description: 'description4',
  status: 'status2',
  pricingScheme: {
    schemeType: 'scheme_type8',
    priceBrackets: [
      {
        startQuantity: 144,
        price: 174,
      }
    ],
  },
  name: 'name6',
};

try {
  const { result, ...httpResponse } = await subscriptionsController.updateSubscriptionItem(
  subscriptionId,
  itemId,
  body
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

