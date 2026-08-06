
# Get Transfer

## Structure

`GetTransfer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `gatewayId` | `string` | Required | - |
| `amount` | `number` | Required | - |
| `status` | `string` | Required | - |
| `createdAt` | `string` | Required | - |
| `updatedAt` | `string` | Required | - |
| `metadata` | `Record<string, string> \| undefined` | Optional | - |
| `fee` | `number \| undefined` | Optional | - |
| `fundingDate` | `string \| undefined` | Optional | - |
| `fundingEstimatedDate` | `string \| undefined` | Optional | - |
| `type` | `string` | Required | - |
| `source` | [`GetTransferSourceResponse`](../../doc/models/get-transfer-source-response.md) | Required | - |
| `target` | [`GetTransferTargetResponse`](../../doc/models/get-transfer-target-response.md) | Required | - |

## Example

```ts
import { GetTransfer } from 'pagarmeapisdklib';

const getTransfer: GetTransfer = {
  id: 'id6',
  gatewayId: 'gateway_id4',
  amount: 0,
  status: 'status2',
  createdAt: '2016-03-13T12:52:32.123Z',
  updatedAt: '2016-03-13T12:52:32.123Z',
  type: 'type4',
  source: {},
  target: {},
  metadata: {
    'key0': 'metadata7',
    'key1': 'metadata8',
    'key2': 'metadata9'
  },
  fee: 214,
  fundingDate: '2016-03-13T12:52:32.123Z',
  fundingEstimatedDate: '2016-03-13T12:52:32.123Z',
};
```

