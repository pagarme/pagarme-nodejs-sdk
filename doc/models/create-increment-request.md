
# Create Increment Request

Request for creating a new increment

## Structure

`CreateIncrementRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `value` | `number` | Required | The increment value |
| `incrementType` | `string` | Required | Increment type. Can be either flat or percentage. |
| `itemId` | `string` | Required | The item where the increment will be applied |
| `cycles` | `number \| undefined` | Optional | Number of cycles that the increment will be applied |
| `description` | `string \| undefined` | Optional | Description |

## Example

```ts
import { CreateIncrementRequest } from 'pagarmeapisdklib';

const createIncrementRequest: CreateIncrementRequest = {
  value: 84.78,
  incrementType: 'increment_type8',
  itemId: 'item_id4',
  cycles: 202,
  description: 'description4',
};
```

