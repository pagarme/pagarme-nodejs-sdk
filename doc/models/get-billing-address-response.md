
# Get Billing Address Response

Response object for getting a billing address

## Structure

`GetBillingAddressResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `street` | `string \| null \| undefined` | Optional | - |
| `number` | `string \| null \| undefined` | Optional | - |
| `zipCode` | `string \| null \| undefined` | Optional | - |
| `neighborhood` | `string \| null \| undefined` | Optional | - |
| `city` | `string \| null \| undefined` | Optional | - |
| `state` | `string \| null \| undefined` | Optional | - |
| `country` | `string \| null \| undefined` | Optional | - |
| `complement` | `string \| null \| undefined` | Optional | - |
| `line1` | `string \| null \| undefined` | Optional | Line 1 for address |
| `line2` | `string \| null \| undefined` | Optional | Line 2 for address |

## Example

```ts
import { GetBillingAddressResponse } from 'pagarmeapisdklib';

const getBillingAddressResponse: GetBillingAddressResponse = {
  street: 'street8',
  number: 'number4',
  zipCode: 'zip_code2',
  neighborhood: 'neighborhood4',
  city: 'city8',
};
```

