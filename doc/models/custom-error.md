
# Custom Error

Api Error Exception

## Structure

`CustomError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `message` | `string \| null` | Required | - |
| `errors` | `unknown \| null` | Required | - |
| `request` | `unknown \| null` | Required | - |

## Example (as JSON)

```json
{
  "message": "message4",
  "errors": {
    "key1": "val1",
    "key2": "val2"
  },
  "request": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

