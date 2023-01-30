
# Get Gateway Response Response

The Transaction Gateway Response

## Structure

`GetGatewayResponseResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | `string \| null` | Required | The error code |
| `errors` | [`GetGatewayErrorResponse[] \| null`](../../doc/models/get-gateway-error-response.md) | Required | The gateway response errors list |

## Example (as JSON)

```json
{
  "code": "code8",
  "errors": [
    {
      "message": "message5"
    },
    {
      "message": "message6"
    },
    {
      "message": "message7"
    }
  ]
}
```

