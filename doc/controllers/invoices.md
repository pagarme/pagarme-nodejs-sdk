# Invoices

```ts
const invoicesController = new InvoicesController(client);
```

## Class Name

`InvoicesController`

## Methods

* [Cancel Invoice](../../doc/controllers/invoices.md#cancel-invoice)
* [Create Invoice](../../doc/controllers/invoices.md#create-invoice)
* [Get Invoice](../../doc/controllers/invoices.md#get-invoice)
* [Get Invoices](../../doc/controllers/invoices.md#get-invoices)
* [Get Partial Invoice](../../doc/controllers/invoices.md#get-partial-invoice)
* [Update Invoice Metadata](../../doc/controllers/invoices.md#update-invoice-metadata)
* [Update Invoice Status](../../doc/controllers/invoices.md#update-invoice-status)


# Cancel Invoice

Cancels an invoice

```ts
async cancelInvoice(
  invoiceId: string,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetInvoiceResponse>>
```

## Authentication

This endpoint requires [httpBasic](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `invoiceId` | `string` | Template, Required | Invoice id |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetInvoiceResponse`](../../doc/models/get-invoice-response.md).

## Example Usage

```ts
const invoiceId = 'invoice_id0';

try {
  const response = await invoicesController.cancelInvoice(invoiceId);

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

## Authentication

This endpoint requires [httpBasic](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | Subscription Id |
| `cycleId` | `string` | Template, Required | Cycle Id |
| `request` | [`CreateInvoiceRequest \| undefined`](../../doc/models/create-invoice-request.md) | Body, Optional | - |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetInvoiceResponse`](../../doc/models/get-invoice-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

const cycleId = 'cycle_id6';

try {
  const response = await invoicesController.createInvoice(
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


# Get Invoice

Gets an invoice

```ts
async getInvoice(
  invoiceId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetInvoiceResponse>>
```

## Authentication

This endpoint requires [httpBasic](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `invoiceId` | `string` | Template, Required | Invoice Id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetInvoiceResponse`](../../doc/models/get-invoice-response.md).

## Example Usage

```ts
const invoiceId = 'invoice_id0';

try {
  const response = await invoicesController.getInvoice(invoiceId);

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

## Authentication

This endpoint requires [httpBasic](../../doc/auth/basic-authentication.md)

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

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ListInvoicesResponse`](../../doc/models/list-invoices-response.md).

## Example Usage

```ts
try {
  const response = await invoicesController.getInvoices();

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


# Get Partial Invoice

```ts
async getPartialInvoice(
  subscriptionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetInvoiceResponse>>
```

## Authentication

This endpoint requires [httpBasic](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `string` | Template, Required | Subscription Id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetInvoiceResponse`](../../doc/models/get-invoice-response.md).

## Example Usage

```ts
const subscriptionId = 'subscription_id0';

try {
  const response = await invoicesController.getPartialInvoice(subscriptionId);

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

## Authentication

This endpoint requires [httpBasic](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `invoiceId` | `string` | Template, Required | The invoice id |
| `request` | [`UpdateMetadataRequest`](../../doc/models/update-metadata-request.md) | Body, Required | Request for updating the invoice metadata |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetInvoiceResponse`](../../doc/models/get-invoice-response.md).

## Example Usage

```ts
const invoiceId = 'invoice_id0';

const request: UpdateMetadataRequest = {
  metadata: {
    'key0': 'metadata3'
  },
};

try {
  const response = await invoicesController.updateInvoiceMetadata(
    invoiceId,
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

## Authentication

This endpoint requires [httpBasic](../../doc/auth/basic-authentication.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `invoiceId` | `string` | Template, Required | Invoice Id |
| `request` | [`UpdateInvoiceStatusRequest`](../../doc/models/update-invoice-status-request.md) | Body, Required | Request for updating an invoice's status |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetInvoiceResponse`](../../doc/models/get-invoice-response.md).

## Example Usage

```ts
const invoiceId = 'invoice_id0';

const request: UpdateInvoiceStatusRequest = {
  status: 'status8',
};

try {
  const response = await invoicesController.updateInvoiceStatus(
    invoiceId,
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

