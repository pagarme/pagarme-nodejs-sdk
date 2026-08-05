
# Create Discount Request

Request for creating a new discount

## Structure

`CreateDiscountRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `value` | `number` | Required | The discount value |
| `discountType` | `string` | Required | Discount type. Can be either flat or percentage. |
| `itemId` | `string` | Required | The item where the discount will be applied |
| `cycles` | `number \| undefined` | Optional | Number of cycles that the discount will be applied |
| `description` | `string \| undefined` | Optional | Description |

## Example

```ts
import { CreateDiscountRequest } from 'pagarmeapisdklib';

const createDiscountRequest: CreateDiscountRequest = {
  value: 66.94,
  discountType: 'discount_type0',
  itemId: 'item_id8',
  cycles: 194,
  description: 'description8',
};
```

