
# Cursor Paging Response

Paggin response by foward cursor model (Pagging by foward cursor (https://docs.pagar.me/reference/pagina%C3%A7%C3%A3o-1#forward-cursor)

## Structure

`CursorPagingResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `forwardCursor` | `string \| null` | Required | Pagging by foward cursor (https://docs.pagar.me/reference/pagina%C3%A7%C3%A3o-1#forward-cursor)<br><br>**Default**: `'null'` |

## Example

```ts
import { CursorPagingResponse } from 'pagarmeapisdklib';

const cursorPagingResponse: CursorPagingResponse = {
  forwardCursor: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYWxhcGlDdXJzb3IiOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFlYUWlPaUl4TnpnMU9UTXpNVGN6SWl3aVpYaHdJam94TnpnMU9UTTJOemN6TENKcFpDSTZJalF6TWpVeU1ETXhOREFpZlEuTmtrUk85Slg3eC1YMVFLZ0ZIYkw3VGw4ZVV0NkR1ZWVQVlk5a0pHNXhxNCIsImlhdCI6MTc4NTkzMzE3MywiZXhwIjoxNzg1OTM2NzczfQ.5qM-BQbArZKXbfen5NnEXq6gbhyP-DrgsG1SMrpF4Y4',
};
```

