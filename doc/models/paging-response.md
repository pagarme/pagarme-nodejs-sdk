
# Paging Response

Object used for returning lists of objects with pagination

## Structure

`PagingResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `total` | `number \| null` | Required | Total number of pages |
| `previous` | `string \| null` | Required | Previous page |
| `next` | `string \| null` | Required | Next page |

## Example (as JSON)

```json
{
  "total": 10,
  "previous": "previous8",
  "next": "next2"
}
```

