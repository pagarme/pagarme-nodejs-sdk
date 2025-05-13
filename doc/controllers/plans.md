# Plans

```ts
const plansController = new PlansController(client);
```

## Class Name

`PlansController`

## Methods

* [Get Plan](../../doc/controllers/plans.md#get-plan)
* [Delete Plan Item](../../doc/controllers/plans.md#delete-plan-item)
* [Update Plan Metadata](../../doc/controllers/plans.md#update-plan-metadata)
* [Create Plan](../../doc/controllers/plans.md#create-plan)
* [Update Plan](../../doc/controllers/plans.md#update-plan)
* [Delete Plan](../../doc/controllers/plans.md#delete-plan)
* [Get Plans](../../doc/controllers/plans.md#get-plans)
* [Update Plan Item](../../doc/controllers/plans.md#update-plan-item)
* [Create Plan Item](../../doc/controllers/plans.md#create-plan-item)
* [Get Plan Item](../../doc/controllers/plans.md#get-plan-item)


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

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetPlanResponse](../../doc/models/get-plan-response.md).

## Example Usage

```ts
const planId = 'plan_id8';

try {
  const { result, ...httpResponse } = await plansController.getPlan(planId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
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

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetPlanItemResponse](../../doc/models/get-plan-item-response.md).

## Example Usage

```ts
const planId = 'plan_id8';

const planItemId = 'plan_item_id0';

try {
  const { result, ...httpResponse } = await plansController.deletePlanItem(
  planId,
  planItemId
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

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetPlanResponse](../../doc/models/get-plan-response.md).

## Example Usage

```ts
const planId = 'plan_id8';

const request: UpdateMetadataRequest = {
  metadata: {
    'key0': 'metadata3'
  },
};

try {
  const { result, ...httpResponse } = await plansController.updatePlanMetadata(
  planId,
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

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetPlanResponse](../../doc/models/get-plan-response.md).

## Example Usage

```ts
const body: CreatePlanRequest = {
  name: 'name6',
  description: 'description4',
  statementDescriptor: 'statement_descriptor6',
  items: [
    {
      name: 'name8',
      pricingScheme: {
        schemeType: 'scheme_type8',
      },
      id: 'id8',
      description: 'description2',
    }
  ],
  shippable: false,
  paymentMethods: [
    'payment_methods9'
  ],
  installments: [
    207
  ],
  currency: 'currency6',
  interval: 'interval6',
  intervalCount: 170,
  billingDays: [
    201,
    200
  ],
  billingType: 'billing_type0',
  pricingScheme: {
    schemeType: 'scheme_type8',
  },
  metadata: {
    'key0': 'metadata7',
    'key1': 'metadata8'
  },
};

try {
  const { result, ...httpResponse } = await plansController.createPlan(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
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

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetPlanResponse](../../doc/models/get-plan-response.md).

## Example Usage

```ts
const planId = 'plan_id8';

const request: UpdatePlanRequest = {
  name: 'name6',
  description: 'description6',
  installments: [
    151,
    152
  ],
  statementDescriptor: 'statement_descriptor6',
  currency: 'currency6',
  interval: 'interval4',
  intervalCount: 114,
  paymentMethods: [
    'payment_methods1',
    'payment_methods0',
    'payment_methods9'
  ],
  billingType: 'billing_type0',
  status: 'status8',
  shippable: false,
  billingDays: [
    115
  ],
  metadata: {
    'key0': 'metadata3'
  },
};

try {
  const { result, ...httpResponse } = await plansController.updatePlan(
  planId,
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

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetPlanResponse](../../doc/models/get-plan-response.md).

## Example Usage

```ts
const planId = 'plan_id8';

try {
  const { result, ...httpResponse } = await plansController.deletePlan(planId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
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

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [ListPlansResponse](../../doc/models/list-plans-response.md).

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await plansController.getPlans();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
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

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetPlanItemResponse](../../doc/models/get-plan-item-response.md).

## Example Usage

```ts
const planId = 'plan_id8';

const planItemId = 'plan_item_id0';

const body: UpdatePlanItemRequest = {
  name: 'name6',
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
};

try {
  const { result, ...httpResponse } = await plansController.updatePlanItem(
  planId,
  planItemId,
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

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetPlanItemResponse](../../doc/models/get-plan-item-response.md).

## Example Usage

```ts
const planId = 'plan_id8';

const request: CreatePlanItemRequest = {
  name: 'name6',
  pricingScheme: {
    schemeType: 'scheme_type8',
  },
  id: 'id6',
  description: 'description6',
};

try {
  const { result, ...httpResponse } = await plansController.createPlanItem(
  planId,
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

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetPlanItemResponse](../../doc/models/get-plan-item-response.md).

## Example Usage

```ts
const planId = 'plan_id8';

const planItemId = 'plan_item_id0';

try {
  const { result, ...httpResponse } = await plansController.getPlanItem(
  planId,
  planItemId
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

