
# Get Interest Response

Interest Response

## Structure

`GetInterestResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `days` | `number \| null \| undefined` | Optional | Days |
| `type` | `string \| null \| undefined` | Optional | Type |
| `amount` | `number \| null \| undefined` | Optional | Amount |

## Example

```ts
import { GetInterestResponse } from 'pagarmeapisdklib';

const getInterestResponse: GetInterestResponse = {
  days: 82,
  type: '"percentage" or "flat"',
  amount: 156,
};
```

