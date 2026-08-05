
# Get Split Response

Split response

## Structure

`GetSplitResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string \| null \| undefined` | Optional | Type |
| `amount` | `number \| null \| undefined` | Optional | Amount |
| `recipient` | [`GetRecipientResponse \| null \| undefined`](../../doc/models/get-recipient-response.md) | Optional | Recipient |
| `gatewayId` | `string \| null \| undefined` | Optional | The split rule gateway id |
| `options` | [`GetSplitOptionsResponse \| null \| undefined`](../../doc/models/get-split-options-response.md) | Optional | - |
| `id` | `string \| null \| undefined` | Optional | - |

## Example

```ts
import { GetSplitResponse } from 'pagarmeapisdklib';

const getSplitResponse: GetSplitResponse = {
  type: 'type0',
  amount: 42,
  recipient: null,
  gatewayId: 'gateway_id0',
  options: null,
};
```

