# Transactions

```ts
const transactionsController = new TransactionsController(client);
```

## Class Name

`TransactionsController`


# Get Transaction

```ts
async getTransaction(
  transactionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetTransactionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetTransactionResponse](../../doc/models/get-transaction-response.md).

## Example Usage

```ts
const transactionId = 'transaction_id8';

try {
  const { result, ...httpResponse } = await transactionsController.getTransaction(transactionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

