# Transfers

```ts
const transfersController = new TransfersController(client);
```

## Class Name

`TransfersController`

## Methods

* [Get Transfer by Id](../../doc/controllers/transfers.md#get-transfer-by-id)
* [Create Transfer](../../doc/controllers/transfers.md#create-transfer)
* [Get Transfers](../../doc/controllers/transfers.md#get-transfers)


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

[`GetTransfer`](../../doc/models/get-transfer.md)

## Example Usage

```ts
const transferId = 'transfer_id6';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await transfersController.getTransferById(transferId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

[`GetTransfer`](../../doc/models/get-transfer.md)

## Example Usage

```ts
const request: CreateTransfer = {
  amount: 242,
  sourceId: 'source_id0',
  targetId: 'target_id6',
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await transfersController.createTransfer(request);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

[`ListTransfers`](../../doc/models/list-transfers.md)

## Example Usage

```ts
try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await transfersController.getTransfers();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

