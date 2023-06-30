
# Get Payable Response

Response object for getting an payable

## Structure

`GetPayableResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint \| undefined` | Optional | - |
| `status` | `string \| undefined` | Optional | - |
| `amount` | `number \| undefined` | Optional | - |
| `fee` | `number \| undefined` | Optional | - |
| `anticipationFee` | `number \| undefined` | Optional | - |
| `fraudCoverageFee` | `number \| undefined` | Optional | - |
| `installment` | `number \| undefined` | Optional | - |
| `gatewayId` | `number \| undefined` | Optional | - |
| `chargeId` | `string \| undefined` | Optional | - |
| `splitId` | `string \| undefined` | Optional | - |
| `bulkAnticipationId` | `string \| undefined` | Optional | - |
| `anticipationId` | `string \| undefined` | Optional | - |
| `recipientId` | `string \| undefined` | Optional | - |
| `originatorModel` | `string \| undefined` | Optional | - |
| `originatorModelId` | `string \| undefined` | Optional | - |
| `paymentDate` | `string \| undefined` | Optional | - |
| `originalPaymentDate` | `string \| undefined` | Optional | - |
| `type` | `string \| undefined` | Optional | - |
| `paymentMethod` | `string \| undefined` | Optional | - |
| `accrualAt` | `string \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |
| `liquidationArrangementId` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "id": 112,
  "status": "status8",
  "amount": 46,
  "fee": 168,
  "anticipation_fee": 140
}
```

