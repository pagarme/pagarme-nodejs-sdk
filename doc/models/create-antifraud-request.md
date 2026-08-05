
# Create Antifraud Request

## Structure

`CreateAntifraudRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | - |
| `clearsale` | [`CreateClearSaleRequest`](../../doc/models/create-clear-sale-request.md) | Required | - |

## Example

```ts
import { CreateAntifraudRequest } from 'pagarmeapisdklib';

const createAntifraudRequest: CreateAntifraudRequest = {
  type: 'type0',
  clearsale: {},
};
```

