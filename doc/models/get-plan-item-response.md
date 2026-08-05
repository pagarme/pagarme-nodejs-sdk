
# Get Plan Item Response

Response object for getting a plan item

## Structure

`GetPlanItemResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| null \| undefined` | Optional | - |
| `name` | `string \| null \| undefined` | Optional | - |
| `status` | `string \| null \| undefined` | Optional | - |
| `createdAt` | `string \| null \| undefined` | Optional | - |
| `updatedAt` | `string \| null \| undefined` | Optional | - |
| `pricingScheme` | [`GetPricingSchemeResponse \| null \| undefined`](../../doc/models/get-pricing-scheme-response.md) | Optional | - |
| `description` | `string \| null \| undefined` | Optional | - |
| `plan` | [`GetPlanResponse \| null \| undefined`](../../doc/models/get-plan-response.md) | Optional | - |
| `quantity` | `number \| null \| undefined` | Optional | - |
| `cycles` | `number \| null \| undefined` | Optional | - |
| `deletedAt` | `string \| null \| undefined` | Optional | - |

## Example

```ts
import { GetPlanItemResponse } from 'pagarmeapisdklib';

const getPlanItemResponse: GetPlanItemResponse = {
  id: 'id4',
  name: 'name4',
  status: 'status4',
  createdAt: '2016-03-13T12:52:32.123Z',
  updatedAt: '2016-03-13T12:52:32.123Z',
};
```

