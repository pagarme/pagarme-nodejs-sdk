# Invoices

```ts
const invoicesController = new InvoicesController(client);
```

## Class Name

`InvoicesController`

## Methods

* [Get Invoices](../../doc/controllers/invoices.md#get-invoices)
* [Cancel Invoice](../../doc/controllers/invoices.md#cancel-invoice)
* [Update Invoice Status](../../doc/controllers/invoices.md#update-invoice-status)
* [Update Invoice Metadata](../../doc/controllers/invoices.md#update-invoice-metadata)
* [Get Partial Invoice](../../doc/controllers/invoices.md#get-partial-invoice)
* [Create Invoice](../../doc/controllers/invoices.md#create-invoice)
* [Get Invoice](../../doc/controllers/invoices.md#get-invoice)


# Get Invoices

Gets all invoices

```ts
async getInvoices(
  page?: number,
  size?: number,
  code?: string,
  customerId?: string,
  subscriptionId?: string,
  createdSince?: string,
  createdUntil?: string,
  status?: string,
  dueSince?: string,
  dueUntil?: string,
  customerDocument?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListInvoicesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `page` | `number \| undefined` | Query, Optional | Page number |
| `size` | `number \| undefined` | Query, Optional | Page size |
| `code` | `string \| undefined` | Query, Optional | Filter for Invoice's code |
| `customerId` | `string \| undefined` | Query, Optional | Filter for Invoice's customer id |
| `subscriptionId` | `string \| undefined` | Query, Optional | Filter for Invoice's subscription id |
| `createdSince` | `string \| undefined` | Query, Optional | Filter for Invoice's creation date start range |
| `createdUntil` | `string \| undefined` | Query, Optional | Filter for Invoices creation date end range |
| `status` | `string \| undefined` | Query, Optional | Filter for Invoice's status |
| `dueSince` | `string \| undefined` | Query, Optional | Filter for Invoice's due date start range |
| `dueUntil` | `string \| undefined` | Query, Optional | Filter for Invoice's due date end range |
| `customerDocument` | `string \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [ListInvoicesResponse](../../doc/models/list-invoices-response.md).

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await invoicesController.getInvoices();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Cancel Invoice

Cancels an invoice

```ts
async cancelInvoice(
  invoiceId: string,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetInvoiceResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `invoiceId` | `string` | Template, Required | Invoice id |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetInvoiceResponse](../../doc/models/get-invoice-response.md).

## Example Usage

```ts
const invoiceId = 'invoice_id0';

try {
  const { result, ...httpResponse } = await invoicesController.cancelInvoice(invoiceId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Invoice Status

Updates the status from an invoice

```ts
async updateInvoiceStatus(
  invoiceId: string,
  request: UpdateInvoiceStatusRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetInvoiceResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `invoiceId` | `string` | Template, Required | Invoice Id |
| `request` | [`UpdateInvoiceStatusRequest`](../../doc/models/update-invoice-status-request.md) | Body, Required | Request for updating an invoice's status |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetInvoiceResponse](../../doc/models/get-invoice-response.md).

## Example Usage

```ts
const invoiceId = 'invoice_id0';

const request: UpdateInvoiceStatusRequest = {
  status: 'status8',
};

try {
  const { result, ...httpResponse } = await invoicesController.updateInvoiceStatus(
  invoiceId,
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


# Update Invoice Metadata

Updates the metadata from an invoice

```ts
async updateInvoiceMetadata(
  invoiceId: string,
  request: UpdateMetadataRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetInvoiceResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `invoiceId` | `string` | Template, Required | The invoice id |
| `request` | [`UpdateMetadataRequest`](../../doc/models/update-metadata-request.md) | Body, Required | Request for updating the invoice metadata |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetInvoiceResponse](../../doc/models/get-invoice-response.md).

## Example Usage

```ts
const invoiceId = 'invoice_id0';

const request: UpdateMetadataRequest = {
  metadata: {
    'key0': 'metadata3'
  },
};

try {
  const { result, ...httpResponse } = await invoicesController.updateInvoiceMetadata(
  invoiceId,
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


# Get Partial Invoice

```ts
async getPartialInvoice(
  subscriptionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetInvoiceResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | Subscription Id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetInvoiceResponse](../../doc/models/get-invoice-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

try {
  const { result, ...httpResponse } = await invoicesController.getPartialInvoice(subscriptionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Invoice

Create an Invoice

```ts
async createInvoice(
  subscriptionId: string,
  cycleId: string,
  request?: CreateInvoiceRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetInvoiceResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | Subscription Id |
| `cycleId` | `string` | Template, Required | Cycle Id |
| `request` | [`CreateInvoiceRequest \| undefined`](../../doc/models/create-invoice-request.md) | Body, Optional | - |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetInvoiceResponse](../../doc/models/get-invoice-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const cycleId = 'cycle_id6';

try {
  const { result, ...httpResponse } = await invoicesController.createInvoice(
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


# Get Invoice

Gets an invoice

```ts
async getInvoice(
  invoiceId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetInvoiceResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `invoiceId` | `string` | Template, Required | Invoice Id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetInvoiceResponse](../../doc/models/get-invoice-response.md).

## Example Usage

```ts
const invoiceId = 'invoice_id0';

try {
  const { result, ...httpResponse } = await invoicesController.getInvoice(invoiceId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

