# Subscriptions

```ts
const subscriptionsController = new SubscriptionsController(client);
```

## Class Name

`SubscriptionsController`

## Methods

* [Renew Subscription](../../doc/controllers/subscriptions.md#renew-subscription)
* [Delete Discount](../../doc/controllers/subscriptions.md#delete-discount)
* [Get Subscriptions](../../doc/controllers/subscriptions.md#get-subscriptions)
* [Get Discount by Id](../../doc/controllers/subscriptions.md#get-discount-by-id)
* [Create Subscription](../../doc/controllers/subscriptions.md#create-subscription)
* [Get Increment by Id](../../doc/controllers/subscriptions.md#get-increment-by-id)
* [Update Subscription Metadata](../../doc/controllers/subscriptions.md#update-subscription-metadata)
* [Delete Increment](../../doc/controllers/subscriptions.md#delete-increment)
* [Get Subscription](../../doc/controllers/subscriptions.md#get-subscription)
* [Update Latest Period End At](../../doc/controllers/subscriptions.md#update-latest-period-end-at)
* [Update Current Cycle Status](../../doc/controllers/subscriptions.md#update-current-cycle-status)
* [Get Subscription Items](../../doc/controllers/subscriptions.md#get-subscription-items)
* [Get Subscription Item](../../doc/controllers/subscriptions.md#get-subscription-item)
* [Update Subscription Affiliation Id](../../doc/controllers/subscriptions.md#update-subscription-affiliation-id)
* [Get Discounts](../../doc/controllers/subscriptions.md#get-discounts)
* [Update Subscription Item](../../doc/controllers/subscriptions.md#update-subscription-item)
* [Create Subscription Item](../../doc/controllers/subscriptions.md#create-subscription-item)
* [Get Usages](../../doc/controllers/subscriptions.md#get-usages)
* [Update Subscription Minium Price](../../doc/controllers/subscriptions.md#update-subscription-minium-price)
* [Get Subscription Cycle by Id](../../doc/controllers/subscriptions.md#get-subscription-cycle-by-id)
* [Create an Usage](../../doc/controllers/subscriptions.md#create-an-usage)
* [Cancel Subscription](../../doc/controllers/subscriptions.md#cancel-subscription)
* [Delete Subscription Item](../../doc/controllers/subscriptions.md#delete-subscription-item)
* [Get Increments](../../doc/controllers/subscriptions.md#get-increments)
* [Update Subscription Due Days](../../doc/controllers/subscriptions.md#update-subscription-due-days)
* [Update Subscription Card](../../doc/controllers/subscriptions.md#update-subscription-card)
* [Delete Usage](../../doc/controllers/subscriptions.md#delete-usage)
* [Create Discount](../../doc/controllers/subscriptions.md#create-discount)
* [Update Subscription Payment Method](../../doc/controllers/subscriptions.md#update-subscription-payment-method)
* [Create Increment](../../doc/controllers/subscriptions.md#create-increment)
* [Create Usage](../../doc/controllers/subscriptions.md#create-usage)
* [Get Subscription Cycles](../../doc/controllers/subscriptions.md#get-subscription-cycles)
* [Update Subscription Billing Date](../../doc/controllers/subscriptions.md#update-subscription-billing-date)
* [Update Subscription Start At](../../doc/controllers/subscriptions.md#update-subscription-start-at)
* [Get Usage Report](../../doc/controllers/subscriptions.md#get-usage-report)
* [Update Split Subscription](../../doc/controllers/subscriptions.md#update-split-subscription)


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

[`GetPeriodResponse`](../../doc/models/get-period-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';
try {
  const { result, ...httpResponse } = await subscriptionsController.renewSubscription(subscriptionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
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

[`GetDiscountResponse`](../../doc/models/get-discount-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';
const discountId = 'discount_id8';
try {
  const { result, ...httpResponse } = await subscriptionsController.deleteDiscount(subscriptionId, discountId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
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

[`ListSubscriptionsResponse`](../../doc/models/list-subscriptions-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await subscriptionsController.getSubscriptions();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
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

[`GetDiscountResponse`](../../doc/models/get-discount-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';
const discountId = 'discountId0';
try {
  const { result, ...httpResponse } = await subscriptionsController.getDiscountById(subscriptionId, discountId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
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

[`GetSubscriptionResponse`](../../doc/models/get-subscription-response.md)

## Example Usage

```ts
const bodyCustomerAddressMetadata: Record<string, string> = {'key0' : 'metadata7', 'key1' : 'metadata6' } const bodyCustomerAddress: CreateAddressRequest = {
  street: 'street0',
  number: 'number8',
  zipCode: 'zip_code4',
  neighborhood: 'neighborhood6',
  city: 'city0',
  state: 'state6',
  country: 'country4',
  complement: 'complement6',
  metadata: bodyCustomerAddressMetadata,
  line1: 'line_16',
  line2: 'line_28',
};

const bodyCustomerMetadata: Record<string, string> = {'key0' : 'metadata9', 'key1' : 'metadata0' } const bodyCustomerPhones: CreatePhonesRequest = {};

const bodyCustomer: CreateCustomerRequest = {
  name: '{\n    "name": "Tony Stark"\n}',
  email: 'email2',
  document: 'document2',
  type: 'type6',
  address: bodyCustomerAddress,
  metadata: bodyCustomerMetadata,
  phones: bodyCustomerPhones,
  code: 'code2',
};

const bodyCardBillingAddressMetadata: Record<string, string> = {'key0' : 'metadata5', 'key1' : 'metadata6', 'key2' : 'metadata7' } const bodyCardBillingAddress: CreateAddressRequest = {
  street: 'street8',
  number: 'number4',
  zipCode: 'zip_code2',
  neighborhood: 'neighborhood4',
  city: 'city2',
  state: 'state6',
  country: 'country2',
  complement: 'complement6',
  metadata: bodyCardBillingAddressMetadata,
  line1: 'line_18',
  line2: 'line_26',
};

const bodyCardMetadata: Record<string, string> = {'key0' : 'metadata3', 'key1' : 'metadata4' } const bodyCardOptions: CreateCardOptionsRequest = {
  verifyCard: false,
};

const bodyCard: CreateCardRequest = {
  number: 'number2',
  holderName: 'holder_name6',
  expMonth: 60,
  expYear: 236,
  cvv: 'cvv8',
  billingAddress: bodyCardBillingAddress,
  brand: 'brand4',
  billingAddressId: 'billing_address_id6',
  metadata: bodyCardMetadata,
  type: 'credit',
  options: bodyCardOptions,
  privateLabel: false,
  label: 'label0',
};

const bodyPricingScheme: CreatePricingSchemeRequest = {
  schemeType: 'scheme_type2',
};

const bodyItems: CreateSubscriptionItemRequest[] = [];

const bodyitems0PricingScheme: CreatePricingSchemeRequest = {
  schemeType: 'scheme_type5',
};

const bodyitems0Discounts: CreateDiscountRequest[] = [];

const bodyitems0discounts0: CreateDiscountRequest = {
  value: 65.46,
  discountType: 'discount_type2',
  itemId: 'item_id4',
};

bodyitems0Discounts[0] = bodyitems0discounts0;

const bodyitems0: CreateSubscriptionItemRequest = {
  description: 'description3',
  pricingScheme: bodyitems0PricingScheme,
  id: 'id3',
  planItemId: 'plan_item_id3',
  discounts: bodyitems0Discounts,
  name: 'name3',
};

bodyItems[0] = bodyitems0;

const bodyitems1PricingScheme: CreatePricingSchemeRequest = {
  schemeType: 'scheme_type4',
};

const bodyitems1Discounts: CreateDiscountRequest[] = [];

const bodyitems1discounts0: CreateDiscountRequest = {
  value: 65.47,
  discountType: 'discount_type3',
  itemId: 'item_id5',
};

bodyitems1Discounts[0] = bodyitems1discounts0;

const bodyitems1discounts1: CreateDiscountRequest = {
  value: 65.48,
  discountType: 'discount_type4',
  itemId: 'item_id6',
};

bodyitems1Discounts[1] = bodyitems1discounts1;

const bodyitems1: CreateSubscriptionItemRequest = {
  description: 'description4',
  pricingScheme: bodyitems1PricingScheme,
  id: 'id4',
  planItemId: 'plan_item_id4',
  discounts: bodyitems1Discounts,
  name: 'name4',
};

bodyItems[1] = bodyitems1;

const bodyitems2PricingScheme: CreatePricingSchemeRequest = {
  schemeType: 'scheme_type3',
};

const bodyitems2Discounts: CreateDiscountRequest[] = [];

const bodyitems2discounts0: CreateDiscountRequest = {
  value: 65.48,
  discountType: 'discount_type4',
  itemId: 'item_id6',
};

bodyitems2Discounts[0] = bodyitems2discounts0;

const bodyitems2discounts1: CreateDiscountRequest = {
  value: 65.49,
  discountType: 'discount_type5',
  itemId: 'item_id7',
};

bodyitems2Discounts[1] = bodyitems2discounts1;

const bodyitems2discounts2: CreateDiscountRequest = {
  value: 65.5,
  discountType: 'discount_type6',
  itemId: 'item_id8',
};

bodyitems2Discounts[2] = bodyitems2discounts2;

const bodyitems2: CreateSubscriptionItemRequest = {
  description: 'description5',
  pricingScheme: bodyitems2PricingScheme,
  id: 'id5',
  planItemId: 'plan_item_id5',
  discounts: bodyitems2Discounts,
  name: 'name5',
};

bodyItems[2] = bodyitems2;

const bodyShippingAddressMetadata: Record<string, string> = {'key0' : 'metadata3', 'key1' : 'metadata2' } const bodyShippingAddress: CreateAddressRequest = {
  street: 'street6',
  number: 'number4',
  zipCode: 'zip_code0',
  neighborhood: 'neighborhood2',
  city: 'city6',
  state: 'state2',
  country: 'country0',
  complement: 'complement2',
  metadata: bodyShippingAddressMetadata,
  line1: 'line_10',
  line2: 'line_24',
};

const bodyShipping: CreateShippingRequest = {
  amount: 140,
  description: 'description0',
  recipientName: 'recipient_name8',
  recipientPhone: 'recipient_phone2',
  addressId: 'address_id0',
  address: bodyShippingAddress,
  type: 'type0',
};

const bodyDiscounts: CreateDiscountRequest[] = [];

const bodydiscounts0: CreateDiscountRequest = {
  value: 95.59,
  discountType: 'discount_type5',
  itemId: 'item_id7',
};

bodyDiscounts[0] = bodydiscounts0;

const bodyMetadata: Record<string, string> = {'key0' : 'metadata7', 'key1' : 'metadata8' } const bodyIncrements: CreateIncrementRequest[] = [];

const bodyincrements0: CreateIncrementRequest = {
  value: 38.83,
  incrementType: 'increment_type3',
  itemId: 'item_id9',
};

bodyIncrements[0] = bodyincrements0;

const bodyincrements1: CreateIncrementRequest = {
  value: 38.84,
  incrementType: 'increment_type4',
  itemId: 'item_id8',
};

bodyIncrements[1] = bodyincrements1;

const bodyincrements2: CreateIncrementRequest = {
  value: 38.85,
  incrementType: 'increment_type5',
  itemId: 'item_id7',
};

bodyIncrements[2] = bodyincrements2;

const body: CreateSubscriptionRequest = {
  customer: bodyCustomer,
  card: bodyCard,
  code: 'code4',
  paymentMethod: 'payment_method4',
  billingType: 'billing_type0',
  statementDescriptor: 'statement_descriptor6',
  description: 'description4',
  currency: 'currency6',
  interval: 'interval6',
  intervalCount: 170,
  pricingScheme: bodyPricingScheme,
  items: bodyItems,
  shipping: bodyShipping,
  discounts: bodyDiscounts,
  metadata: bodyMetadata,
  increments: bodyIncrements,
};

try {
  const { result, ...httpResponse } = await subscriptionsController.createSubscription(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
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

[`GetIncrementResponse`](../../doc/models/get-increment-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';
const incrementId = 'increment_id8';
try {
  const { result, ...httpResponse } = await subscriptionsController.getIncrementById(subscriptionId, incrementId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
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

[`GetSubscriptionResponse`](../../doc/models/get-subscription-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';
const requestMetadata: Record<string, string> = {'key0' : 'metadata3' } const request: UpdateMetadataRequest = {
  metadata: requestMetadata,
};

try {
  const { result, ...httpResponse } = await subscriptionsController.updateSubscriptionMetadata(subscriptionId, request);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
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

[`GetIncrementResponse`](../../doc/models/get-increment-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';
const incrementId = 'increment_id8';
try {
  const { result, ...httpResponse } = await subscriptionsController.deleteIncrement(subscriptionId, incrementId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
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

[`GetSubscriptionResponse`](../../doc/models/get-subscription-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';
try {
  const { result, ...httpResponse } = await subscriptionsController.getSubscription(subscriptionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
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

[`GetSubscriptionResponse`](../../doc/models/get-subscription-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';
const request: UpdateCurrentCycleEndDateRequest = {};

try {
  const { result, ...httpResponse } = await subscriptionsController.updateLatestPeriodEndAt(subscriptionId, request);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
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

`void`

## Example Usage

```ts
const subscriptionId = 'subscription_id0';
const request: UpdateCurrentCycleStatusRequest = {
  status: 'status8',
};

try {
  const { result, ...httpResponse } = await subscriptionsController.updateCurrentCycleStatus(subscriptionId, request);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
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

[`ListSubscriptionItemsResponse`](../../doc/models/list-subscription-items-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';
try {
  const { result, ...httpResponse } = await subscriptionsController.getSubscriptionItems(subscriptionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
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

[`GetSubscriptionItemResponse`](../../doc/models/get-subscription-item-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';
const itemId = 'item_id0';
try {
  const { result, ...httpResponse } = await subscriptionsController.getSubscriptionItem(subscriptionId, itemId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
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

[`GetSubscriptionResponse`](../../doc/models/get-subscription-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';
const request: UpdateSubscriptionAffiliationIdRequest = {
  gatewayAffiliationId: 'gateway_affiliation_id2',
};

try {
  const { result, ...httpResponse } = await subscriptionsController.updateSubscriptionAffiliationId(subscriptionId, request);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
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

[`ListDiscountsResponse`](../../doc/models/list-discounts-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';
const page = 30;
const size = 18;
try {
  const { result, ...httpResponse } = await subscriptionsController.getDiscounts(subscriptionId, page, size);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
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

[`GetSubscriptionItemResponse`](../../doc/models/get-subscription-item-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';
const itemId = 'item_id0';
const bodyPricingSchemePriceBrackets: UpdatePriceBracketRequest[] = [];

const bodyPricingSchemepriceBrackets0: UpdatePriceBracketRequest = {
  startQuantity: 31,
  price: 225,
};

bodyPricingSchemePriceBrackets[0] = bodyPricingSchemepriceBrackets0;

const bodyPricingSchemepriceBrackets1: UpdatePriceBracketRequest = {
  startQuantity: 32,
  price: 226,
};

bodyPricingSchemePriceBrackets[1] = bodyPricingSchemepriceBrackets1;

const bodyPricingScheme: UpdatePricingSchemeRequest = {
  schemeType: 'scheme_type2',
  priceBrackets: bodyPricingSchemePriceBrackets,
};

const body: UpdateSubscriptionItemRequest = {
  description: 'description4',
  status: 'status2',
  pricingScheme: bodyPricingScheme,
  name: 'name6',
};

try {
  const { result, ...httpResponse } = await subscriptionsController.updateSubscriptionItem(subscriptionId, itemId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
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

[`GetSubscriptionItemResponse`](../../doc/models/get-subscription-item-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';
const requestPricingScheme: CreatePricingSchemeRequest = {
  schemeType: 'scheme_type2',
};

const requestDiscounts: CreateDiscountRequest[] = [];

const requestdiscounts0: CreateDiscountRequest = {
  value: 199.99,
  discountType: 'discount_type5',
  itemId: 'item_id7',
};

requestDiscounts[0] = requestdiscounts0;

const requestdiscounts1: CreateDiscountRequest = {
  value: 200,
  discountType: 'discount_type6',
  itemId: 'item_id8',
};

requestDiscounts[1] = requestdiscounts1;

const request: CreateSubscriptionItemRequest = {
  description: 'description6',
  pricingScheme: requestPricingScheme,
  id: 'id6',
  planItemId: 'plan_item_id6',
  discounts: requestDiscounts,
  name: 'name6',
};

try {
  const { result, ...httpResponse } = await subscriptionsController.createSubscriptionItem(subscriptionId, request);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
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

[`ListUsagesResponse`](../../doc/models/list-usages-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';
const itemId = 'item_id0';
try {
  const { result, ...httpResponse } = await subscriptionsController.getUsages(subscriptionId, itemId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
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

[`GetSubscriptionResponse`](../../doc/models/get-subscription-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';
const request: UpdateSubscriptionMinimumPriceRequest = {};

try {
  const { result, ...httpResponse } = await subscriptionsController.updateSubscriptionMiniumPrice(subscriptionId, request);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
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

[`GetPeriodResponse`](../../doc/models/get-period-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';
const cycleId = 'cycleId0';
try {
  const { result, ...httpResponse } = await subscriptionsController.getSubscriptionCycleById(subscriptionId, cycleId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
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

[`GetUsageResponse`](../../doc/models/get-usage-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';
const itemId = 'item_id0';
try {
  const { result, ...httpResponse } = await subscriptionsController.createAnUsage(subscriptionId, itemId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
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

[`GetSubscriptionResponse`](../../doc/models/get-subscription-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';
const request: CreateCancelSubscriptionRequest = {
  cancelPendingInvoices: true,
};

try {
  const { result, ...httpResponse } = await subscriptionsController.cancelSubscription(subscriptionId, request);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
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

[`GetSubscriptionItemResponse`](../../doc/models/get-subscription-item-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';
const subscriptionItemId = 'subscription_item_id4';
try {
  const { result, ...httpResponse } = await subscriptionsController.deleteSubscriptionItem(subscriptionId, subscriptionItemId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
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

[`ListIncrementsResponse`](../../doc/models/list-increments-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';
try {
  const { result, ...httpResponse } = await subscriptionsController.getIncrements(subscriptionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
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

[`GetSubscriptionResponse`](../../doc/models/get-subscription-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';
const request: UpdateSubscriptionDueDaysRequest = {
  boletoDueDays: 226,
};

try {
  const { result, ...httpResponse } = await subscriptionsController.updateSubscriptionDueDays(subscriptionId, request);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
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

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | Subscription id |
| `request` | [`UpdateSubscriptionCardRequest`](../../doc/models/update-subscription-card-request.md) | Body, Required | Request for updating a card |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetSubscriptionResponse`](../../doc/models/get-subscription-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';
const requestCardBillingAddressMetadata: Record<string, string> = {'key0' : 'metadata1' } const requestCardBillingAddress: CreateAddressRequest = {
  street: 'street2',
  number: 'number0',
  zipCode: 'zip_code6',
  neighborhood: 'neighborhood8',
  city: 'city8',
  state: 'state2',
  country: 'country6',
  complement: 'complement2',
  metadata: requestCardBillingAddressMetadata,
  line1: 'line_14',
  line2: 'line_20',
};

const requestCardMetadata: Record<string, string> = {'key0' : 'metadata3', 'key1' : 'metadata4', 'key2' : 'metadata5' } const requestCardOptions: CreateCardOptionsRequest = {
  verifyCard: false,
};

const requestCard: CreateCardRequest = {
  number: 'number2',
  holderName: 'holder_name6',
  expMonth: 80,
  expYear: 216,
  cvv: 'cvv8',
  billingAddress: requestCardBillingAddress,
  brand: 'brand4',
  billingAddressId: 'billing_address_id6',
  metadata: requestCardMetadata,
  type: 'credit',
  options: requestCardOptions,
  privateLabel: false,
  label: 'label0',
};

const request: UpdateSubscriptionCardRequest = {
  card: requestCard,
  cardId: 'card_id2',
};

try {
  const { result, ...httpResponse } = await subscriptionsController.updateSubscriptionCard(subscriptionId, request);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
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

[`GetUsageResponse`](../../doc/models/get-usage-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';
const itemId = 'item_id0';
const usageId = 'usage_id0';
try {
  const { result, ...httpResponse } = await subscriptionsController.deleteUsage(subscriptionId, itemId, usageId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
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

[`GetDiscountResponse`](../../doc/models/get-discount-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';
const request: CreateDiscountRequest = {
  value: 185.28,
  discountType: 'discount_type4',
  itemId: 'item_id6',
};

try {
  const { result, ...httpResponse } = await subscriptionsController.createDiscount(subscriptionId, request);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
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

[`GetSubscriptionResponse`](../../doc/models/get-subscription-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';
const requestCardBillingAddressMetadata: Record<string, string> = {'key0' : 'metadata1' } const requestCardBillingAddress: CreateAddressRequest = {
  street: 'street2',
  number: 'number0',
  zipCode: 'zip_code6',
  neighborhood: 'neighborhood8',
  city: 'city8',
  state: 'state2',
  country: 'country6',
  complement: 'complement2',
  metadata: requestCardBillingAddressMetadata,
  line1: 'line_14',
  line2: 'line_20',
};

const requestCardMetadata: Record<string, string> = {'key0' : 'metadata3', 'key1' : 'metadata4', 'key2' : 'metadata5' } const requestCardOptions: CreateCardOptionsRequest = {
  verifyCard: false,
};

const requestCard: CreateCardRequest = {
  number: 'number2',
  holderName: 'holder_name6',
  expMonth: 80,
  expYear: 216,
  cvv: 'cvv8',
  billingAddress: requestCardBillingAddress,
  brand: 'brand4',
  billingAddressId: 'billing_address_id6',
  metadata: requestCardMetadata,
  type: 'credit',
  options: requestCardOptions,
  privateLabel: false,
  label: 'label0',
};

const request: UpdateSubscriptionPaymentMethodRequest = {
  paymentMethod: 'payment_method4',
  cardId: 'card_id2',
  card: requestCard,
};

try {
  const { result, ...httpResponse } = await subscriptionsController.updateSubscriptionPaymentMethod(subscriptionId, request);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
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

[`GetIncrementResponse`](../../doc/models/get-increment-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';
const request: CreateIncrementRequest = {
  value: 185.28,
  incrementType: 'increment_type8',
  itemId: 'item_id6',
};

try {
  const { result, ...httpResponse } = await subscriptionsController.createIncrement(subscriptionId, request);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
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

[`GetUsageResponse`](../../doc/models/get-usage-response.md)

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
  const { result, ...httpResponse } = await subscriptionsController.createUsage(subscriptionId, itemId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
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

[`ListCyclesResponse`](../../doc/models/list-cycles-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';
const page = 'page8';
const size = 'size0';
try {
  const { result, ...httpResponse } = await subscriptionsController.getSubscriptionCycles(subscriptionId, page, size);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
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

[`GetSubscriptionResponse`](../../doc/models/get-subscription-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';
const request: UpdateSubscriptionBillingDateRequest = {
  nextBillingAt: '2016-03-13T12:52:32.123Z',
};

try {
  const { result, ...httpResponse } = await subscriptionsController.updateSubscriptionBillingDate(subscriptionId, request);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
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

[`GetSubscriptionResponse`](../../doc/models/get-subscription-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';
const request: UpdateSubscriptionStartAtRequest = {
  startAt: '2016-03-13T12:52:32.123Z',
};

try {
  const { result, ...httpResponse } = await subscriptionsController.updateSubscriptionStartAt(subscriptionId, request);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
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

[`GetUsageReportResponse`](../../doc/models/get-usage-report-response.md)

## Example Usage

```ts
const subscriptionId = 'subscription_id0';
const periodId = 'period_id0';
try {
  const { result, ...httpResponse } = await subscriptionsController.getUsageReport(subscriptionId, periodId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
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

[`GetSubscriptionResponse`](../../doc/models/get-subscription-response.md)

## Example Usage

```ts
const id = 'id0';
const requestRules: CreateSplitRequest[] = [];

const requestrules0: CreateSplitRequest = {
  type: 'type6',
  amount: 222,
  recipientId: 'recipient_id6',
};

requestRules[0] = requestrules0;

const requestrules1: CreateSplitRequest = {
  type: 'type5',
  amount: 223,
  recipientId: 'recipient_id5',
};

requestRules[1] = requestrules1;

const requestrules2: CreateSplitRequest = {
  type: 'type4',
  amount: 224,
  recipientId: 'recipient_id4',
};

requestRules[2] = requestrules2;

const request: UpdateSubscriptionSplitRequest = {
  enabled: false,
  rules: requestRules,
};

try {
  const { result, ...httpResponse } = await subscriptionsController.updateSplitSubscription(id, request);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

