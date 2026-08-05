
# Paging Response

Object used for returning lists of objects with pagination

## Structure

`PagingResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `total` | `number \| null \| undefined` | Optional | Total number of pages |
| `previous` | `string \| null \| undefined` | Optional | Previous page |
| `next` | `string \| null \| undefined` | Optional | Next page |

## Example

```ts
import { PagingResponse } from 'pagarmeapisdklib';

const pagingResponse: PagingResponse = {
  total: 66,
  previous: 'previous0',
  next: 'next0',
};
```

