
# Get Fine Response

Fine Response

## Structure

`GetFineResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `days` | `number \| null \| undefined` | Optional | Days |
| `type` | `string \| null \| undefined` | Optional | Type |
| `amount` | `number \| null \| undefined` | Optional | Amount |

## Example

```ts
import { GetFineResponse } from 'pagarmeapisdklib';

const getFineResponse: GetFineResponse = {
  days: 20,
  type: '"percentage" or "flat"',
  amount: 94,
};
```

