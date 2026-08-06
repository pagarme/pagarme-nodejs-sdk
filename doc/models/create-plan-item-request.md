
# Create Plan Item Request

Request for creating a plan item

## Structure

`CreatePlanItemRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | Item name |
| `pricingScheme` | [`CreatePricingSchemeRequest`](../../doc/models/create-pricing-scheme-request.md) | Required | Item's pricing scheme |
| `id` | `string` | Required | Item's id |
| `description` | `string` | Required | Item's description |
| `cycles` | `number \| undefined` | Optional | Number of cycles where the item will be charged |
| `quantity` | `number \| undefined` | Optional | Quantity |

## Example

```ts
import { CreatePlanItemRequest } from 'pagarmeapisdklib';

const createPlanItemRequest: CreatePlanItemRequest = {
  name: 'name8',
  pricingScheme: {},
  id: 'id8',
  description: 'description8',
  cycles: 78,
  quantity: 158,
};
```

