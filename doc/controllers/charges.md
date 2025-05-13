# Charges

```ts
const chargesController = new ChargesController(client);
```

## Class Name

`ChargesController`

## Methods

* [Update Charge Metadata](../../doc/controllers/charges.md#update-charge-metadata)
* [Capture Charge](../../doc/controllers/charges.md#capture-charge)
* [Get Charge](../../doc/controllers/charges.md#get-charge)
* [Confirm Payment](../../doc/controllers/charges.md#confirm-payment)
* [Get Charge Transactions](../../doc/controllers/charges.md#get-charge-transactions)
* [Update Charge Card](../../doc/controllers/charges.md#update-charge-card)
* [Create Charge](../../doc/controllers/charges.md#create-charge)
* [Update Charge Payment Method](../../doc/controllers/charges.md#update-charge-payment-method)
* [Update Charge Due Date](../../doc/controllers/charges.md#update-charge-due-date)
* [Get Charges Summary](../../doc/controllers/charges.md#get-charges-summary)
* [Retry Charge](../../doc/controllers/charges.md#retry-charge)
* [Get Charges](../../doc/controllers/charges.md#get-charges)
* [Cancel Charge](../../doc/controllers/charges.md#cancel-charge)


# Update Charge Metadata

Updates the metadata from a charge

```ts
async updateChargeMetadata(
  chargeId: string,
  request: UpdateMetadataRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetChargeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `chargeId` | `string` | Template, Required | The charge id |
| `request` | [`UpdateMetadataRequest`](../../doc/models/update-metadata-request.md) | Body, Required | Request for updating the charge metadata |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetChargeResponse](../../doc/models/get-charge-response.md).

## Example Usage

```ts
const chargeId = 'charge_id8';

const request: UpdateMetadataRequest = {
  metadata: {
    'key0': 'metadata3'
  },
};

try {
  const { result, ...httpResponse } = await chargesController.updateChargeMetadata(
  chargeId,
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


# Capture Charge

Captures a charge

```ts
async captureCharge(
  chargeId: string,
  request?: CreateCaptureChargeRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetChargeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `chargeId` | `string` | Template, Required | Charge id |
| `request` | [`CreateCaptureChargeRequest \| undefined`](../../doc/models/create-capture-charge-request.md) | Body, Optional | Request for capturing a charge |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetChargeResponse](../../doc/models/get-charge-response.md).

## Example Usage

```ts
const chargeId = 'charge_id8';

try {
  const { result, ...httpResponse } = await chargesController.captureCharge(chargeId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Charge

Get a charge from its id

```ts
async getCharge(
  chargeId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetChargeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `chargeId` | `string` | Template, Required | Charge id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetChargeResponse](../../doc/models/get-charge-response.md).

## Example Usage

```ts
const chargeId = 'charge_id8';

try {
  const { result, ...httpResponse } = await chargesController.getCharge(chargeId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Confirm Payment

```ts
async confirmPayment(
  chargeId: string,
  request?: CreateConfirmPaymentRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetChargeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `chargeId` | `string` | Template, Required | - |
| `request` | [`CreateConfirmPaymentRequest \| undefined`](../../doc/models/create-confirm-payment-request.md) | Body, Optional | Request for confirm payment |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetChargeResponse](../../doc/models/get-charge-response.md).

## Example Usage

```ts
const chargeId = 'charge_id8';

try {
  const { result, ...httpResponse } = await chargesController.confirmPayment(chargeId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Charge Transactions

```ts
async getChargeTransactions(
  chargeId: string,
  page?: number,
  size?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListChargeTransactionsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `chargeId` | `string` | Template, Required | Charge Id |
| `page` | `number \| undefined` | Query, Optional | Page number |
| `size` | `number \| undefined` | Query, Optional | Page size |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [ListChargeTransactionsResponse](../../doc/models/list-charge-transactions-response.md).

## Example Usage

```ts
const chargeId = 'charge_id8';

try {
  const { result, ...httpResponse } = await chargesController.getChargeTransactions(chargeId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Charge Card

Updates the card from a charge

```ts
async updateChargeCard(
  chargeId: string,
  request: UpdateChargeCardRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetChargeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `chargeId` | `string` | Template, Required | Charge id |
| `request` | [`UpdateChargeCardRequest`](../../doc/models/update-charge-card-request.md) | Body, Required | Request for updating a charge's card |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetChargeResponse](../../doc/models/get-charge-response.md).

## Example Usage

```ts
const chargeId = 'charge_id8';

const request: UpdateChargeCardRequest = {
  updateSubscription: false,
  cardId: 'card_id2',
  card: {
    type: 'credit',
  },
  recurrence: false,
};

try {
  const { result, ...httpResponse } = await chargesController.updateChargeCard(
  chargeId,
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


# Create Charge

Creates a new charge

```ts
async createCharge(
  request: CreateChargeRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetChargeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `request` | [`CreateChargeRequest`](../../doc/models/create-charge-request.md) | Body, Required | Request for creating a charge |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetChargeResponse](../../doc/models/get-charge-response.md).

## Example Usage

```ts
const request: CreateChargeRequest = {
  amount: 242,
  payment: {
    paymentMethod: 'payment_method4',
  },
  orderId: 'order_id0',
};

try {
  const { result, ...httpResponse } = await chargesController.createCharge(request);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Charge Payment Method

Updates a charge's payment method

```ts
async updateChargePaymentMethod(
  chargeId: string,
  request: UpdateChargePaymentMethodRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetChargeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `chargeId` | `string` | Template, Required | Charge id |
| `request` | [`UpdateChargePaymentMethodRequest`](../../doc/models/update-charge-payment-method-request.md) | Body, Required | Request for updating the payment method from a charge |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetChargeResponse](../../doc/models/get-charge-response.md).

## Example Usage

```ts
const chargeId = 'charge_id8';

const request: UpdateChargePaymentMethodRequest = {
  updateSubscription: false,
  paymentMethod: 'payment_method4',
  creditCard: {
    installments: 1,
    capture: true,
    recurrencyCycle: '"first" or "subsequent"',
  },
  debitCard: {
  },
  boleto: {
    retries: 226,
    instructions: 'instructions2',
    billingAddress: {
      street: 'street8',
      number: 'number4',
      zipCode: 'zip_code2',
      neighborhood: 'neighborhood4',
      city: 'city2',
      state: 'state6',
      country: 'country2',
      complement: 'complement6',
      line1: 'line_18',
      line2: 'line_26',
    },
    documentNumber: 'document_number6',
    statementDescriptor: 'statement_descriptor0',
  },
  voucher: {
    recurrencyCycle: '"first" or "subsequent"',
  },
  cash: {
    description: 'description0',
    confirm: false,
  },
  bankTransfer: {
    bank: 'bank0',
    retries: 236,
  },
  privateLabel: {
    installments: 1,
    capture: true,
    recurrencyCycle: '"first" or "subsequent"',
  },
};

try {
  const { result, ...httpResponse } = await chargesController.updateChargePaymentMethod(
  chargeId,
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


# Update Charge Due Date

Updates the due date from a charge

```ts
async updateChargeDueDate(
  chargeId: string,
  request: UpdateChargeDueDateRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetChargeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `chargeId` | `string` | Template, Required | Charge Id |
| `request` | [`UpdateChargeDueDateRequest`](../../doc/models/update-charge-due-date-request.md) | Body, Required | Request for updating the due date |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetChargeResponse](../../doc/models/get-charge-response.md).

## Example Usage

```ts
const chargeId = 'charge_id8';

const request: UpdateChargeDueDateRequest = {
};

try {
  const { result, ...httpResponse } = await chargesController.updateChargeDueDate(
  chargeId,
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


# Get Charges Summary

```ts
async getChargesSummary(
  status: string,
  createdSince?: string,
  createdUntil?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetChargesSummaryResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Query, Required | - |
| `createdSince` | `string \| undefined` | Query, Optional | - |
| `createdUntil` | `string \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetChargesSummaryResponse](../../doc/models/get-charges-summary-response.md).

## Example Usage

```ts
const status = 'status8';

try {
  const { result, ...httpResponse } = await chargesController.getChargesSummary(status);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retry Charge

Retries a charge

```ts
async retryCharge(
  chargeId: string,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetChargeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `chargeId` | `string` | Template, Required | Charge id |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetChargeResponse](../../doc/models/get-charge-response.md).

## Example Usage

```ts
const chargeId = 'charge_id8';

try {
  const { result, ...httpResponse } = await chargesController.retryCharge(chargeId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Charges

Lists all charges

```ts
async getCharges(
  page?: number,
  size?: number,
  code?: string,
  status?: string,
  paymentMethod?: string,
  customerId?: string,
  orderId?: string,
  createdSince?: string,
  createdUntil?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListChargesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `page` | `number \| undefined` | Query, Optional | Page number |
| `size` | `number \| undefined` | Query, Optional | Page size |
| `code` | `string \| undefined` | Query, Optional | Filter for charge's code |
| `status` | `string \| undefined` | Query, Optional | Filter for charge's status |
| `paymentMethod` | `string \| undefined` | Query, Optional | Filter for charge's payment method |
| `customerId` | `string \| undefined` | Query, Optional | Filter for charge's customer id |
| `orderId` | `string \| undefined` | Query, Optional | Filter for charge's order id |
| `createdSince` | `string \| undefined` | Query, Optional | Filter for the beginning of the range for charge's creation |
| `createdUntil` | `string \| undefined` | Query, Optional | Filter for the end of the range for charge's creation |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [ListChargesResponse](../../doc/models/list-charges-response.md).

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await chargesController.getCharges();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Cancel Charge

Cancel a charge

```ts
async cancelCharge(
  chargeId: string,
  request?: CreateCancelChargeRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetChargeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `chargeId` | `string` | Template, Required | Charge id |
| `request` | [`CreateCancelChargeRequest \| undefined`](../../doc/models/create-cancel-charge-request.md) | Body, Optional | Request for cancelling a charge |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetChargeResponse](../../doc/models/get-charge-response.md).

## Example Usage

```ts
const chargeId = 'charge_id8';

try {
  const { result, ...httpResponse } = await chargesController.cancelCharge(chargeId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

