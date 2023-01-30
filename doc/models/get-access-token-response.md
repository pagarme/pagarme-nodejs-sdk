
# Get Access Token Response

Response object for getting a access token

## Structure

`GetAccessTokenResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| null` | Required | - |
| `code` | `string \| null` | Required | - |
| `status` | `string \| null` | Required | - |
| `createdAt` | `string \| null` | Required | - |
| `customer` | [`GetCustomerResponse \| undefined`](../../doc/models/get-customer-response.md) | Optional | - |

## Example (as JSON)

```json
{
  "id": "id0",
  "code": "code8",
  "status": "status8",
  "created_at": "2016-03-13T12:52:32.123Z",
  "customer": null
}
```

