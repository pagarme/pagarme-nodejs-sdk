
# Get Withdraw Response

## Structure

`GetWithdrawResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| null` | Required | - |
| `gatewayId` | `string \| null` | Required | - |
| `amount` | `number \| null` | Required | - |
| `status` | `string \| null` | Required | - |
| `createdAt` | `string \| null` | Required | - |
| `updatedAt` | `string \| null` | Required | - |
| `metadata` | `string[] \| undefined` | Optional | - |
| `fee` | `number \| undefined` | Optional | - |
| `fundingDate` | `string \| undefined` | Optional | - |
| `fundingEstimatedDate` | `string \| undefined` | Optional | - |
| `type` | `string \| null` | Required | - |
| `source` | [`GetWithdrawSourceResponse \| null`](../../doc/models/get-withdraw-source-response.md) | Required | - |
| `target` | [`GetWithdrawTargetResponse \| null`](../../doc/models/get-withdraw-target-response.md) | Required | - |

## Example (as JSON)

```json
{
  "id": "id0",
  "gateway_id": "gateway_id0",
  "amount": 46,
  "status": "status8",
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "metadata": null,
  "fee": null,
  "funding_date": null,
  "funding_estimated_date": null,
  "type": "type0",
  "source": {
    "source_id": "source_id8",
    "type": "type6"
  },
  "target": {
    "target_id": "target_id2",
    "type": "type8"
  }
}
```

