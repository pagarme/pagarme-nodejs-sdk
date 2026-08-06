
# Update Plan Item Request

Request for updating a plan item

## Structure

`UpdatePlanItemRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | Item name |
| `description` | `string` | Required | Description |
| `status` | `string` | Required | Item status |
| `pricingScheme` | [`UpdatePricingSchemeRequest`](../../doc/models/update-pricing-scheme-request.md) | Required | Pricing scheme |
| `quantity` | `number \| undefined` | Optional | Quantity |
| `cycles` | `number \| undefined` | Optional | Number of cycles that the item will be charged |

## Example

```ts
import { UpdatePlanItemRequest } from 'pagarmeapisdklib';

const updatePlanItemRequest: UpdatePlanItemRequest = {
  name: '',
  description: '',
  status: '',
  pricingScheme: {
    schemeType: '',
    priceBrackets: [
      {}
    ],
    price: 166,
    minimumPrice: 6,
    percentage: 251.76,
  },
  quantity: 174,
  cycles: 194,
};
```

