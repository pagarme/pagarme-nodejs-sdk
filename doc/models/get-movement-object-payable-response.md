
# Get Movement Object Payable Response

## Structure

`GetMovementObjectPayableResponse`

## Inherits From

[`GetMovementObjectBaseResponse`](../../doc/models/get-movement-object-base-response.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fee` | `string \| null \| undefined` | Optional | - |
| `anticipationFee` | `string` | Required | - |
| `fraudCoverageFee` | `string` | Required | - |
| `installment` | `string` | Required | - |
| `splitId` | `string` | Required | - |
| `bulkAnticipationId` | `string` | Required | - |
| `anticipationId` | `string` | Required | - |
| `recipientId` | `string` | Required | - |
| `originatorModel` | `string` | Required | - |
| `originatorModelId` | `string` | Required | - |
| `paymentDate` | `string` | Required | - |
| `originalPaymentDate` | `string` | Required | - |
| `paymentMethod` | `string` | Required | - |
| `accrualAt` | `string` | Required | - |
| `liquidationArrangementId` | `string` | Required | - |

## Example

```ts
import { GetMovementObjectPayableResponse } from 'pagarmeapisdklib';

const getMovementObjectPayableResponse: GetMovementObjectPayableResponse = {
  anticipationFee: 'anticipation_fee4',
  fraudCoverageFee: 'fraud_coverage_fee2',
  installment: 'installment2',
  splitId: 'split_id6',
  bulkAnticipationId: 'bulk_anticipation_id0',
  anticipationId: 'anticipation_id6',
  recipientId: 'recipient_id6',
  originatorModel: 'originator_model0',
  originatorModelId: 'originator_model_id0',
  paymentDate: 'payment_date6',
  originalPaymentDate: 'original_payment_date6',
  paymentMethod: 'payment_method4',
  accrualAt: 'accrual_at6',
  liquidationArrangementId: 'liquidation_arrangement_id8',
  fee: 'fee6',
  id: 'id2',
  status: 'status4',
  amount: 'amount4',
  createdAt: 'created_at0',
};
```

