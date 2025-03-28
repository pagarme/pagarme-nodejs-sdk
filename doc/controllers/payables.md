# Payables

```ts
const payablesController = new PayablesController(client);
```

## Class Name

`PayablesController`

## Methods

* [Get Payables](../../doc/controllers/payables.md#get-payables)
* [Get Payable by Id](../../doc/controllers/payables.md#get-payable-by-id)


# Get Payables

```ts
async getPayables(
  type?: string,
  splitId?: string,
  bulkAnticipationId?: string,
  installment?: number,
  status?: string,
  recipientId?: string,
  amount?: number,
  chargeId?: string,
  paymentDateUntil?: string,
  paymentDateSince?: string,
  updatedUntil?: string,
  updatedSince?: string,
  createdUntil?: string,
  createdSince?: string,
  liquidationArrangementId?: string,
  page?: number,
  size?: number,
  gatewayId?: bigint,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListPayablesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string \| undefined` | Query, Optional | - |
| `splitId` | `string \| undefined` | Query, Optional | - |
| `bulkAnticipationId` | `string \| undefined` | Query, Optional | - |
| `installment` | `number \| undefined` | Query, Optional | - |
| `status` | `string \| undefined` | Query, Optional | - |
| `recipientId` | `string \| undefined` | Query, Optional | - |
| `amount` | `number \| undefined` | Query, Optional | - |
| `chargeId` | `string \| undefined` | Query, Optional | - |
| `paymentDateUntil` | `string \| undefined` | Query, Optional | - |
| `paymentDateSince` | `string \| undefined` | Query, Optional | - |
| `updatedUntil` | `string \| undefined` | Query, Optional | - |
| `updatedSince` | `string \| undefined` | Query, Optional | - |
| `createdUntil` | `string \| undefined` | Query, Optional | - |
| `createdSince` | `string \| undefined` | Query, Optional | - |
| `liquidationArrangementId` | `string \| undefined` | Query, Optional | - |
| `page` | `number \| undefined` | Query, Optional | - |
| `size` | `number \| undefined` | Query, Optional | - |
| `gatewayId` | `bigint \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [ListPayablesResponse](../../doc/models/list-payables-response.md).

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await payablesController.getPayables();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Payable by Id

```ts
async getPayableById(
  id: bigint,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetPayableResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetPayableResponse](../../doc/models/get-payable-response.md).

## Example Usage

```ts
const id = BigInt(112);

try {
  const { result, ...httpResponse } = await payablesController.getPayableById(id);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

