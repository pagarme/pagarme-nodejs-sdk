
# Get Movement Object Payable Response

## Structure

`GetMovementObjectPayableResponse`

## Inherits From

[`GetMovementObjectBaseResponse`](../../doc/models/get-movement-object-base-response.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fee` | `string \| undefined` | Optional | - |
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

## Example (as JSON)

```json
{
  "object": "payable",
  "id": "id0",
  "status": "status2",
  "amount": "amount2",
  "created_at": "created_at8",
  "fee": "fee2",
  "anticipation_fee": "anticipation_fee8",
  "fraud_coverage_fee": "fraud_coverage_fee2",
  "installment": "installment8",
  "split_id": "split_id2",
  "bulk_anticipation_id": "bulk_anticipation_id4",
  "anticipation_id": "anticipation_id0",
  "recipient_id": "recipient_id0",
  "originator_model": "originator_model4",
  "originator_model_id": "originator_model_id4",
  "payment_date": "payment_date8",
  "original_payment_date": "original_payment_date8",
  "payment_method": "payment_method0",
  "accrual_at": "accrual_at8",
  "liquidation_arrangement_id": "liquidation_arrangement_id6"
}
```

