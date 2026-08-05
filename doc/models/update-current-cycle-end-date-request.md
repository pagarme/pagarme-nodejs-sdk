
# Update Current Cycle End Date Request

Request to update the end date of the current subscription cycle

## Structure

`UpdateCurrentCycleEndDateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `endAt` | `string \| undefined` | Optional | Current cycle end date |

## Example

```ts
import { UpdateCurrentCycleEndDateRequest } from 'pagarmeapisdklib';

const updateCurrentCycleEndDateRequest: UpdateCurrentCycleEndDateRequest = {
  endAt: '2016-03-13T12:52:32.123Z',
};
```

