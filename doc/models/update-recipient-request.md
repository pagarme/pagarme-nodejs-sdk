
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

## Example

```ts
import { UpdateRecipientRequest } from 'pagarmeapisdklib';

const updateRecipientRequest: UpdateRecipientRequest = {
  name: 'name4',
  email: 'email2',
  description: 'description4',
  type: 'type4',
  status: 'status6',
  metadata: {
    'key0': 'metadata1',
    'key1': 'metadata0'
  },
};
```

