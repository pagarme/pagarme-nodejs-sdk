
# Get Balance Operation Response

Generic response object for getting a BalanceOperation.

## Structure

`GetBalanceOperationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | - |
| `status` | `string \| undefined` | Optional | - |
| `balanceAmount` | `string \| undefined` | Optional | - |
| `balanceOldAmount` | `string \| undefined` | Optional | - |
| `type` | `string \| undefined` | Optional | - |
| `amount` | `string \| undefined` | Optional | - |
| `fee` | `string \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |
| `movementObject` | [`GetMovementObjectBaseResponse \| undefined`](../../doc/models/get-movement-object-base-response.md) | Optional | - |

## Example (as JSON)

```json
{
  "id": "id0",
  "status": "status8",
  "balance_amount": "balance_amount0",
  "balance_old_amount": "balance_old_amount2",
  "type": "type0"
}
```

