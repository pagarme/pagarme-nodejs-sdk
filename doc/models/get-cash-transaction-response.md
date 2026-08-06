
# Get Cash Transaction Response

Response object for getting a cash transaction

## Structure

`GetCashTransactionResponse`

## Inherits From

[`GetTransactionResponse`](../../doc/models/get-transaction-response.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| null \| undefined` | Optional | Description |

## Example

```ts
import { GetCashTransactionResponse } from 'pagarmeapisdklib';

const getCashTransactionResponse: GetCashTransactionResponse = {
  description: 'description6',
  gatewayId: 'gateway_id8',
  amount: 40,
  status: 'status6',
  success: false,
  createdAt: '2016-03-13T12:52:32.123Z',
};
```

