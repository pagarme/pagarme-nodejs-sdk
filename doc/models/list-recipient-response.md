
# List Recipient Response

Response for the listing recipient method

## Structure

`ListRecipientResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetRecipientResponse[] \| null \| undefined`](../../doc/models/get-recipient-response.md) | Optional | Recipients |
| `paging` | [`PagingResponse \| null \| undefined`](../../doc/models/paging-response.md) | Optional | Paging |

## Example

```ts
import { ListRecipientResponse } from 'pagarmeapisdklib';

const listRecipientResponse: ListRecipientResponse = {
  data: [
    null,
    {
    }
  ],
  paging: null,
};
```

