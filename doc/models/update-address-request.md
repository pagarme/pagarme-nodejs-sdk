
# Update Address Request

Request for updating an address

## Structure

`UpdateAddressRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `number` | `string` | Required | Number |
| `complement` | `string` | Required | Complement |
| `metadata` | `Record<string, string>` | Required | Metadata |
| `line2` | `string` | Required | Line 2 for address |

## Example

```ts
import { UpdateAddressRequest } from 'pagarmeapisdklib';

const updateAddressRequest: UpdateAddressRequest = {
  number: 'number8',
  complement: 'complement0',
  metadata: {
    'key0': 'metadata9'
  },
  line2: 'line_22',
};
```

