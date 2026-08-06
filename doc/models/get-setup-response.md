
# Get Setup Response

Response object for getting the setup from a subscription

## Structure

`GetSetupResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| null \| undefined` | Optional | - |
| `description` | `string \| null \| undefined` | Optional | - |
| `amount` | `number \| null \| undefined` | Optional | - |
| `status` | `string \| null \| undefined` | Optional | - |

## Example

```ts
import { GetSetupResponse } from 'pagarmeapisdklib';

const getSetupResponse: GetSetupResponse = {
  id: 'id6',
  description: 'description6',
  amount: 108,
  status: 'status8',
};
```

