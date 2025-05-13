# Balance Operations

```ts
const balanceOperationsController = new BalanceOperationsController(client);
```

## Class Name

`BalanceOperationsController`

## Methods

* [Get Balance Operation by Id](../../doc/controllers/balance-operations.md#get-balance-operation-by-id)
* [Get Balance Operations](../../doc/controllers/balance-operations.md#get-balance-operations)


# Get Balance Operation by Id

```ts
async getBalanceOperationById(
  id: bigint,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetBalanceOperationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetBalanceOperationResponse](../../doc/models/get-balance-operation-response.md).

## Example Usage

```ts
const id = BigInt(112);

try {
  const { result, ...httpResponse } = await balanceOperationsController.getBalanceOperationById(id);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Balance Operations

```ts
async getBalanceOperations(
  status?: string,
  createdSince?: string,
  createdUntil?: string,
  recipientId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListBalanceOperationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string \| undefined` | Query, Optional | - |
| `createdSince` | `string \| undefined` | Query, Optional | - |
| `createdUntil` | `string \| undefined` | Query, Optional | - |
| `recipientId` | `string \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [ListBalanceOperationResponse](../../doc/models/list-balance-operation-response.md).

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await balanceOperationsController.getBalanceOperations();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

