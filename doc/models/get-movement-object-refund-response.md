
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

## Example

```ts
import { GetMovementObjectRefundResponse } from 'pagarmeapisdklib';

const getMovementObjectRefundResponse: GetMovementObjectRefundResponse = {
  fraudCoverageFee: 'fraud_coverage_fee2',
  chargeFeeRecipientId: 'charge_fee_recipient_id0',
  bankAccountId: 'bank_account_id4',
  localTransactionId: 'local_transaction_id0',
  updatedAt: 'updated_at0',
  id: 'id2',
  status: 'status4',
  amount: 'amount4',
  createdAt: 'created_at0',
};
```

