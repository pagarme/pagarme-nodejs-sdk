
# Get Movement Object Refund Response

Generic response object for getting a MovementObjectRefund.

## Structure

`GetMovementObjectRefundResponse`

## Inherits From

[`GetMovementObjectBaseResponse`](../../doc/models/get-movement-object-base-response.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fraudCoverageFee` | `string \| null \| undefined` | Optional | - |
| `chargeFeeRecipientId` | `string \| null \| undefined` | Optional | - |
| `bankAccountId` | `string \| null \| undefined` | Optional | - |
| `localTransactionId` | `string \| null \| undefined` | Optional | - |
| `updatedAt` | `string \| null \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "id": "id2",
  "status": "status4",
  "amount": "amount4",
  "created_at": "created_at0",
  "fraud_coverage_fee": "fraud_coverage_fee0",
  "charge_fee_recipient_id": "charge_fee_recipient_id2",
  "bank_account_id": "bank_account_id2",
  "local_transaction_id": "local_transaction_id8",
  "updated_at": "updated_at8"
}
```

