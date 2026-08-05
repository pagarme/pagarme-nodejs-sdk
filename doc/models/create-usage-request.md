
# Create Usage Request

Request for creating a usage

## Structure

`CreateUsageRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `quantity` | `number` | Required | - |
| `description` | `string` | Required | - |
| `usedAt` | `string` | Required | - |
| `code` | `string \| undefined` | Optional | Identification code in the client system |
| `group` | `string \| undefined` | Optional | identification group in the client system |
| `amount` | `number \| undefined` | Optional | Field used in item scheme type 'Percent' |

## Example

```ts
import { CreateUsageRequest } from 'pagarmeapisdklib';

const createUsageRequest: CreateUsageRequest = {
  quantity: 254,
  description: 'description6',
  usedAt: '2016-03-13T12:52:32.123Z',
  code: 'code4',
  group: 'group4',
  amount: 140,
};
```

