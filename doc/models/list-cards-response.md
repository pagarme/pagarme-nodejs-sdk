
# List Cards Response

Response object for listing cards

## Structure

`ListCardsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetCardResponse[] \| null \| undefined`](../../doc/models/get-card-response.md) | Optional | The card objects |
| `paging` | [`PagingResponse \| null \| undefined`](../../doc/models/paging-response.md) | Optional | Paging object |

## Example

```ts
import { ListCardsResponse } from 'pagarmeapisdklib';

const listCardsResponse: ListCardsResponse = {
  data: [
    null,
    {
    },
    {
    }
  ],
  paging: null,
};
```

