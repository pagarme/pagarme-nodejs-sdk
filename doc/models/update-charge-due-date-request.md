
# Update Charge Due Date Request

Request for updating a charge due date

## Structure

`UpdateChargeDueDateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `dueAt` | `string \| undefined` | Optional | The charge's new due date |

## Example

```ts
import { UpdateChargeDueDateRequest } from 'pagarmeapisdklib';

const updateChargeDueDateRequest: UpdateChargeDueDateRequest = {
  dueAt: '2016-03-13T12:52:32.123Z',
};
```

