
# Get Split Options Response

## Structure

`GetSplitOptionsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `liable` | `boolean \| null \| undefined` | Optional | - |
| `chargeProcessingFee` | `boolean \| null \| undefined` | Optional | - |
| `chargeRemainderFee` | `string \| null \| undefined` | Optional | - |

## Example

```ts
import { GetSplitOptionsResponse } from 'pagarmeapisdklib';

const getSplitOptionsResponse: GetSplitOptionsResponse = {
  liable: false,
  chargeProcessingFee: false,
  chargeRemainderFee: 'charge_remainder_fee6',
};
```

