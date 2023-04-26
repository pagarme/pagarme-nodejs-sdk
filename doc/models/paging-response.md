
# Paging Response

Object used for returning lists of objects with pagination

## Structure

`PagingResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `total` | `number \| undefined` | Optional | Total number of pages |
| `previous` | `string \| undefined` | Optional | Previous page |
| `next` | `string \| undefined` | Optional | Next page |

## Example (as JSON)

```json
{
  "total": 10,
  "previous": "previous8",
  "next": "next2"
}
```

