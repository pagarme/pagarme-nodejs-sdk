
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

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof CustomError) {
    console.log(error.result);
  }
}
```

