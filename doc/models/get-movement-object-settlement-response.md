
# Get Movement Object Settlement Response

Generic response object for getting a MovementObjectSettlement.

## Structure

`GetMovementObjectSettlementResponse`

## Inherits From

[`GetMovementObjectBaseResponse`](../../doc/models/get-movement-object-base-response.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `product` | `string \| null \| undefined` | Optional | - |
| `brand` | `string \| null \| undefined` | Optional | - |
| `paymentDate` | `string \| null \| undefined` | Optional | - |
| `recipientId` | `string \| null \| undefined` | Optional | - |
| `documentType` | `string \| null \| undefined` | Optional | - |
| `document` | `string \| null \| undefined` | Optional | - |
| `contractObligationId` | `string \| null \| undefined` | Optional | - |
| `liquidationArrangementId` | `string \| null \| undefined` | Optional | - |
| `externalEnginePaymentId` | `string \| null \| undefined` | Optional | - |

## Example

```ts
import { GetMovementObjectSettlementResponse } from 'pagarmeapisdklib';

const getMovementObjectSettlementResponse: GetMovementObjectSettlementResponse = {
  product: 'product2',
  brand: 'brand6',
  paymentDate: 'payment_date4',
  recipientId: 'recipient_id8',
  documentType: 'document_type0',
  id: 'id2',
  status: 'status4',
  amount: 'amount4',
  createdAt: 'created_at0',
};
```

