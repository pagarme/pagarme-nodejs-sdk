
# Get Gateway Recipient Response

Information about the recipient on the gateway

## Structure

`GetGatewayRecipientResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `gateway` | `string \| null` | Required | Gateway name |
| `status` | `string \| null` | Required | Status of the recipient on the gateway |
| `pgid` | `string \| null` | Required | Recipient id on the gateway |
| `createdAt` | `string \| null` | Required | Creation date |
| `updatedAt` | `string \| null` | Required | Last update date |

## Example (as JSON)

```json
{
  "gateway": "gateway0",
  "status": "status8",
  "pgid": "pgid4",
  "created_at": "created_at2",
  "updated_at": "updated_at4"
}
```

