
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

