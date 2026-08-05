
# Create Address Request

Request for creating a new Address

## Structure

`CreateAddressRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `street` | `string` | Required | Street |
| `number` | `string` | Required | Number |
| `zipCode` | `string` | Required | The zip code containing only numbers. No special characters or spaces. |
| `neighborhood` | `string` | Required | Neighborhood |
| `city` | `string` | Required | City |
| `state` | `string` | Required | State |
| `country` | `string` | Required | Country. Must be entered using ISO 3166-1 alpha-2 format. See https://pt.wikipedia.org/wiki/ISO_3166-1_alfa-2 |
| `complement` | `string` | Required | Complement |
| `metadata` | `Record<string, string> \| null \| undefined` | Optional | Metadata |
| `line1` | `string` | Required | Line 1 for address |
| `line2` | `string` | Required | Line 2 for address |

## Example

```ts
import { CreateAddressRequest } from 'pagarmeapisdklib';

const createAddressRequest: CreateAddressRequest = {
  street: 'street6',
  number: 'number6',
  zipCode: 'zip_code0',
  neighborhood: 'neighborhood2',
  city: 'city6',
  state: 'state2',
  country: 'country0',
  complement: 'complement8',
  line1: 'line_10',
  line2: 'line_24',
  metadata: {
    'key0': 'metadata7'
  },
};
```

