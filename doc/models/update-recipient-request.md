
# Update Recipient Request

Request for updating a Recipient

## Structure

`UpdateRecipientRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | Name |
| `email` | `string` | Required | Email |
| `description` | `string` | Required | Description |
| `type` | `string` | Required | Type |
| `status` | `string` | Required | Status |
| `metadata` | `Record<string, string>` | Required | Metadata |

## Example (as JSON)

```json
{
  "name": "name0",
  "email": "email6",
  "description": "description0",
  "type": "type0",
  "status": "status8",
  "metadata": {
    "key0": "metadata3",
    "key1": "metadata4"
  }
}
```

