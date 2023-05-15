
# Get Withdraw Response

## Structure

`GetWithdrawResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | - |
| `gatewayId` | `string \| undefined` | Optional | - |
| `amount` | `number \| undefined` | Optional | - |
| `status` | `string \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |
| `updatedAt` | `string \| undefined` | Optional | - |
| `metadata` | `string[] \| undefined` | Optional | - |
| `fee` | `number \| undefined` | Optional | - |
| `fundingDate` | `string \| undefined` | Optional | - |
| `fundingEstimatedDate` | `string \| undefined` | Optional | - |
| `type` | `string \| undefined` | Optional | - |
| `source` | [`GetWithdrawSourceResponse \| undefined`](../../doc/models/get-withdraw-source-response.md) | Optional | - |
| `target` | [`GetWithdrawTargetResponse \| undefined`](../../doc/models/get-withdraw-target-response.md) | Optional | - |

## Example (as JSON)

```json
{
  "id": "id0",
  "gateway_id": "gateway_id0",
  "amount": 46,
  "status": "status8",
  "created_at": "2016-03-13T12:52:32.123Z"
}
```

