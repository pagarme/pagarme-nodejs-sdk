
# Get Token Response

Token data

## Structure

`GetTokenResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| null` | Required | - |
| `type` | `string \| null` | Required | - |
| `createdAt` | `string \| null` | Required | - |
| `expiresAt` | `string \| null` | Required | - |
| `card` | [`GetCardTokenResponse \| null`](../../doc/models/get-card-token-response.md) | Required | - |

## Example (as JSON)

```json
{
  "id": "id0",
  "type": "type0",
  "created_at": "2016-03-13T12:52:32.123Z",
  "expires_at": "expires_at6",
  "card": {
    "last_four_digits": "last_four_digits2",
    "holder_name": "holder_name2",
    "holder_document": "holder_document0",
    "exp_month": "exp_month0",
    "exp_year": "exp_year2",
    "brand": "brand0",
    "type": "type4",
    "label": "label6"
  }
}
```

