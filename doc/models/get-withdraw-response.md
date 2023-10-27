
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

## Example (as JSON)

```json
{
  "id": "id6",
  "gateway_id": "gateway_id4",
  "amount": 78,
  "status": "status8",
  "created_at": "2016-03-13T12:52:32.123Z"
}
```

