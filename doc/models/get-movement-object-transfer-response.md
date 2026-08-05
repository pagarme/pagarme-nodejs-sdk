
# Get Movement Object Transfer Response

## Structure

`GetMovementObjectTransferResponse`

## Inherits From

[`GetMovementObjectBaseResponse`](../../doc/models/get-movement-object-base-response.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `sourceType` | `string \| null \| undefined` | Optional | - |
| `sourceId` | `string \| null \| undefined` | Optional | - |
| `targetType` | `string \| null \| undefined` | Optional | - |
| `targetId` | `string \| null \| undefined` | Optional | - |
| `fee` | `string \| null \| undefined` | Optional | - |
| `fundingDate` | `string \| null \| undefined` | Optional | - |
| `fundingEstimatedDate` | `string \| null \| undefined` | Optional | - |
| `bankAccount` | `string \| null \| undefined` | Optional | - |

## Example

```ts
import { GetMovementObjectTransferResponse } from 'pagarmeapisdklib';

const getMovementObjectTransferResponse: GetMovementObjectTransferResponse = {
  sourceType: 'source_type6',
  sourceId: 'source_id0',
  targetType: 'target_type8',
  targetId: 'target_id4',
  fee: 'fee8',
  id: 'id2',
  status: 'status4',
  amount: 'amount4',
  createdAt: 'created_at0',
};
```

