# Plans

```ts
const plansController = new PlansController(client);
```

## Class Name

`PlansController`

## Methods

* [Get Plan](../../doc/controllers/plans.md#get-plan)
* [Update Plan](../../doc/controllers/plans.md#update-plan)
* [Update Plan Metadata](../../doc/controllers/plans.md#update-plan-metadata)
* [Delete Plan Item](../../doc/controllers/plans.md#delete-plan-item)
* [Get Plans](../../doc/controllers/plans.md#get-plans)
* [Get Plan Item](../../doc/controllers/plans.md#get-plan-item)
* [Delete Plan](../../doc/controllers/plans.md#delete-plan)
* [Update Plan Item](../../doc/controllers/plans.md#update-plan-item)
* [Create Plan Item](../../doc/controllers/plans.md#create-plan-item)
* [Create Plan](../../doc/controllers/plans.md#create-plan)


# Get Plan

Gets a plan

```ts
async getPlan(
  planId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetPlanResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `planId` | `string` | Template, Required | Plan id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetPlanResponse`](../../doc/models/get-plan-response.md)

## Example Usage

```ts
const planId = 'plan_id8';
try {
  const { result, ...httpResponse } = await plansController.getPlan(planId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Plan

Updates a plan

```ts
async updatePlan(
  planId: string,
  request: UpdatePlanRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetPlanResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `planId` | `string` | Template, Required | Plan id |
| `request` | [`UpdatePlanRequest`](../../doc/models/update-plan-request.md) | Body, Required | Request for updating a plan |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetPlanResponse`](../../doc/models/get-plan-response.md)

## Example Usage

```ts
const planId = 'plan_id8';
const requestInstallments: number[] = [151, 152];
const requestPaymentMethods: string[] = ['payment_methods1', 'payment_methods0', 'payment_methods9'];
const requestBillingDays: number[] = [115];
const requestMetadata: Record<string, string> = {'key0' : 'metadata3' } const request: UpdatePlanRequest = {
  name: 'name6',
  description: 'description6',
  installments: requestInstallments,
  statementDescriptor: 'statement_descriptor6',
  currency: 'currency6',
  interval: 'interval4',
  intervalCount: 114,
  paymentMethods: requestPaymentMethods,
  billingType: 'billing_type0',
  status: 'status8',
  shippable: false,
  billingDays: requestBillingDays,
  metadata: requestMetadata,
};

try {
  const { result, ...httpResponse } = await plansController.updatePlan(planId, request);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Plan Metadata

Updates the metadata from a plan

```ts
async updatePlanMetadata(
  planId: string,
  request: UpdateMetadataRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetPlanResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `planId` | `string` | Template, Required | The plan id |
| `request` | [`UpdateMetadataRequest`](../../doc/models/update-metadata-request.md) | Body, Required | Request for updating the plan metadata |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetPlanResponse`](../../doc/models/get-plan-response.md)

## Example Usage

```ts
const planId = 'plan_id8';
const requestMetadata: Record<string, string> = {'key0' : 'metadata3' } const request: UpdateMetadataRequest = {
  metadata: requestMetadata,
};

try {
  const { result, ...httpResponse } = await plansController.updatePlanMetadata(planId, request);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete Plan Item

Removes an item from a plan

```ts
async deletePlanItem(
  planId: string,
  planItemId: string,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetPlanItemResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `planId` | `string` | Template, Required | Plan id |
| `planItemId` | `string` | Template, Required | Plan item id |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetPlanItemResponse`](../../doc/models/get-plan-item-response.md)

## Example Usage

```ts
const planId = 'plan_id8';
const planItemId = 'plan_item_id0';
try {
  const { result, ...httpResponse } = await plansController.deletePlanItem(planId, planItemId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Plans

Gets all plans

```ts
async getPlans(
  page?: number,
  size?: number,
  name?: string,
  status?: string,
  billingType?: string,
  createdSince?: string,
  createdUntil?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListPlansResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `page` | `number \| undefined` | Query, Optional | Page number |
| `size` | `number \| undefined` | Query, Optional | Page size |
| `name` | `string \| undefined` | Query, Optional | Filter for Plan's name |
| `status` | `string \| undefined` | Query, Optional | Filter for Plan's status |
| `billingType` | `string \| undefined` | Query, Optional | Filter for plan's billing type |
| `createdSince` | `string \| undefined` | Query, Optional | Filter for plan's creation date start range |
| `createdUntil` | `string \| undefined` | Query, Optional | Filter for plan's creation date end range |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListPlansResponse`](../../doc/models/list-plans-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await plansController.getPlans();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Plan Item

Gets a plan item

```ts
async getPlanItem(
  planId: string,
  planItemId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetPlanItemResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `planId` | `string` | Template, Required | Plan id |
| `planItemId` | `string` | Template, Required | Plan item id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetPlanItemResponse`](../../doc/models/get-plan-item-response.md)

## Example Usage

```ts
const planId = 'plan_id8';
const planItemId = 'plan_item_id0';
try {
  const { result, ...httpResponse } = await plansController.getPlanItem(planId, planItemId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete Plan

Deletes a plan

```ts
async deletePlan(
  planId: string,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetPlanResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `planId` | `string` | Template, Required | Plan id |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetPlanResponse`](../../doc/models/get-plan-response.md)

## Example Usage

```ts
const planId = 'plan_id8';
try {
  const { result, ...httpResponse } = await plansController.deletePlan(planId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Plan Item

Updates a plan item

```ts
async updatePlanItem(
  planId: string,
  planItemId: string,
  body: UpdatePlanItemRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetPlanItemResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `planId` | `string` | Template, Required | Plan id |
| `planItemId` | `string` | Template, Required | Plan item id |
| `body` | [`UpdatePlanItemRequest`](../../doc/models/update-plan-item-request.md) | Body, Required | Request for updating the plan item |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetPlanItemResponse`](../../doc/models/get-plan-item-response.md)

## Example Usage

```ts
const planId = 'plan_id8';
const planItemId = 'plan_item_id0';
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

const body: UpdatePlanItemRequest = {
  name: 'name6',
  description: 'description4',
  status: 'status2',
  pricingScheme: bodyPricingScheme,
};

try {
  const { result, ...httpResponse } = await plansController.updatePlanItem(planId, planItemId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Plan Item

Adds a new item to a plan

```ts
async createPlanItem(
  planId: string,
  request: CreatePlanItemRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetPlanItemResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `planId` | `string` | Template, Required | Plan id |
| `request` | [`CreatePlanItemRequest`](../../doc/models/create-plan-item-request.md) | Body, Required | Request for creating a plan item |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetPlanItemResponse`](../../doc/models/get-plan-item-response.md)

## Example Usage

```ts
const planId = 'plan_id8';
const requestPricingScheme: CreatePricingSchemeRequest = {
  schemeType: 'scheme_type2',
};

const request: CreatePlanItemRequest = {
  name: 'name6',
  pricingScheme: requestPricingScheme,
  id: 'id6',
  description: 'description6',
};

try {
  const { result, ...httpResponse } = await plansController.createPlanItem(planId, request);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Plan

Creates a new plan

```ts
async createPlan(
  body: CreatePlanRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetPlanResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreatePlanRequest`](../../doc/models/create-plan-request.md) | Body, Required | Request for creating a plan |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetPlanResponse`](../../doc/models/get-plan-response.md)

## Example Usage

```ts
const bodyItems: CreatePlanItemRequest[] = [];

const bodyitems0PricingScheme: CreatePricingSchemeRequest = {
  schemeType: 'scheme_type5',
};

const bodyitems0: CreatePlanItemRequest = {
  name: 'name3',
  pricingScheme: bodyitems0PricingScheme,
  id: 'id3',
  description: 'description3',
};

bodyItems[0] = bodyitems0;

const bodyitems1PricingScheme: CreatePricingSchemeRequest = {
  schemeType: 'scheme_type4',
};

const bodyitems1: CreatePlanItemRequest = {
  name: 'name4',
  pricingScheme: bodyitems1PricingScheme,
  id: 'id4',
  description: 'description4',
};

bodyItems[1] = bodyitems1;

const bodyitems2PricingScheme: CreatePricingSchemeRequest = {
  schemeType: 'scheme_type3',
};

const bodyitems2: CreatePlanItemRequest = {
  name: 'name5',
  pricingScheme: bodyitems2PricingScheme,
  id: 'id5',
  description: 'description5',
};

bodyItems[2] = bodyitems2;

const bodyPaymentMethods: string[] = ['payment_methods9'];
const bodyInstallments: number[] = [207];
const bodyBillingDays: number[] = [201, 200];
const bodyPricingScheme: CreatePricingSchemeRequest = {
  schemeType: 'scheme_type2',
};

const bodyMetadata: Record<string, string> = {'key0' : 'metadata7', 'key1' : 'metadata8' } const body: CreatePlanRequest = {
  name: 'name6',
  description: 'description4',
  statementDescriptor: 'statement_descriptor6',
  items: bodyItems,
  shippable: false,
  paymentMethods: bodyPaymentMethods,
  installments: bodyInstallments,
  currency: 'currency6',
  interval: 'interval6',
  intervalCount: 170,
  billingDays: bodyBillingDays,
  billingType: 'billing_type0',
  pricingScheme: bodyPricingScheme,
  metadata: bodyMetadata,
};

try {
  const { result, ...httpResponse } = await plansController.createPlan(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

