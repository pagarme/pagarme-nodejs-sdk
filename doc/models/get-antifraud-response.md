
# Get Antifraud Response

## Structure

`GetAntifraudResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string \| null \| undefined` | Optional | - |
| `returnCode` | `string \| null \| undefined` | Optional | - |
| `returnMessage` | `string \| null \| undefined` | Optional | - |
| `providerName` | `string \| null \| undefined` | Optional | - |
| `score` | `string \| null \| undefined` | Optional | - |

## Example

```ts
import { GetAntifraudResponse } from 'pagarmeapisdklib';

const getAntifraudResponse: GetAntifraudResponse = {
  status: 'status0',
  returnCode: 'return_code8',
  returnMessage: 'return_message4',
  providerName: 'provider_name4',
  score: 'score8',
};
```

