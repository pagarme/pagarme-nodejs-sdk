
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

## Example (as JSON)

```json
{
  "total": 80,
  "previous": "previous2",
  "next": "next2"
}
```

