# Payables

```ts
const payablesController = new PayablesController(client);
```

## Class Name

`PayablesController`


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

## Authentication

This endpoint requires [httpBasic](../../doc/auth/basic-authentication.md)

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

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ListPayablesResponse`](../../doc/models/list-payables-response.md).

## Example Usage

```ts
try {
  const response = await payablesController.getPayables();

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

