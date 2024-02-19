
# Get Balance Operation Response

Generic response object for getting a BalanceOperation.

## Structure

`GetBalanceOperationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| null \| undefined` | Optional | - |
| `status` | `string \| null \| undefined` | Optional | - |
| `balanceAmount` | `string \| null \| undefined` | Optional | - |
| `balanceOldAmount` | `string \| null \| undefined` | Optional | - |
| `type` | `string \| null \| undefined` | Optional | - |
| `amount` | `number \| null \| undefined` | Optional | - |
| `fee` | `string \| null \| undefined` | Optional | - |
| `createdAt` | `string \| null \| undefined` | Optional | - |
| `movementObject` | [`GetMovementObjectBaseResponse \| undefined`](../../doc/models/get-movement-object-base-response.md) | Optional | - |

## Example (as JSON)

```json
{
  "id": "id0",
  "status": "status2",
  "balance_amount": "balance_amount0",
  "balance_old_amount": "balance_old_amount8",
  "type": "type0"
}
```

