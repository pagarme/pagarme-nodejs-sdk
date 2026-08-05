
# List Withdrawals

## Structure

`ListWithdrawals`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetWithdrawResponse[]`](../../doc/models/get-withdraw-response.md) | Required | The Increments response |
| `paging` | [`PagingResponse`](../../doc/models/paging-response.md) | Required | Paging object |

## Example

```ts
import { ListWithdrawals } from 'pagarmeapisdklib';

const listWithdrawals: ListWithdrawals = {
  data: [
    {}
  ],
  paging: {},
};
```

