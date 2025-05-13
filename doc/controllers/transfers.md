# Transfers

```ts
const transfersController = new TransfersController(client);
```

## Class Name

`TransfersController`

## Methods

* [Get Transfer by Id](../../doc/controllers/transfers.md#get-transfer-by-id)
* [Get Transfers](../../doc/controllers/transfers.md#get-transfers)
* [Create Transfer](../../doc/controllers/transfers.md#create-transfer)


# Get Transfer by Id

```ts
async getTransferById(
  transferId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetTransfer>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transferId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetTransfer](../../doc/models/get-transfer.md).

## Example Usage

```ts
const transferId = 'transfer_id6';

try {
  const { result, ...httpResponse } = await transfersController.getTransferById(transferId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Transfers

Gets all transfers

```ts
async getTransfers(
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListTransfers>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [ListTransfers](../../doc/models/list-transfers.md).

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await transfersController.getTransfers();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Transfer

```ts
async createTransfer(
  request: CreateTransfer,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetTransfer>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `request` | [`CreateTransfer`](../../doc/models/create-transfer.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetTransfer](../../doc/models/get-transfer.md).

## Example Usage

```ts
const request: CreateTransfer = {
  amount: 242,
  sourceId: 'source_id0',
  targetId: 'target_id6',
};

try {
  const { result, ...httpResponse } = await transfersController.createTransfer(request);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

