
# Create Transaction Report File Request

## Structure

`CreateTransactionReportFileRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | - |
| `startAt` | `string \| undefined` | Optional | - |
| `endAt` | `string \| undefined` | Optional | - |

## Example

```ts
import { CreateTransactionReportFileRequest } from 'pagarmeapisdklib';

const createTransactionReportFileRequest: CreateTransactionReportFileRequest = {
  name: 'name2',
  startAt: '2016-03-13T12:52:32.123Z',
  endAt: 'end_at8',
};
```

