
# Get Withdraw Response

## Structure

`GetWithdrawResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| null \| undefined` | Optional | - |
| `gatewayId` | `string \| null \| undefined` | Optional | - |
| `amount` | `number \| null \| undefined` | Optional | - |
| `status` | `string \| null \| undefined` | Optional | - |
| `createdAt` | `string \| null \| undefined` | Optional | - |
| `updatedAt` | `string \| null \| undefined` | Optional | - |
| `metadata` | `string[] \| null \| undefined` | Optional | - |
| `fee` | `number \| null \| undefined` | Optional | - |
| `fundingDate` | `string \| null \| undefined` | Optional | - |
| `fundingEstimatedDate` | `string \| null \| undefined` | Optional | - |
| `type` | `string \| null \| undefined` | Optional | - |
| `source` | [`GetWithdrawSourceResponse \| null \| undefined`](../../doc/models/get-withdraw-source-response.md) | Optional | - |
| `target` | [`GetWithdrawTargetResponse \| null \| undefined`](../../doc/models/get-withdraw-target-response.md) | Optional | - |

## Example

```ts
import { GetWithdrawResponse } from 'pagarmeapisdklib';

const getWithdrawResponse: GetWithdrawResponse = {
  id: 'id0',
  gatewayId: 'gateway_id0',
  amount: 166,
  status: 'status2',
  createdAt: '2016-03-13T12:52:32.123Z',
};
```

