
# Get Gateway Recipient Response

Information about the recipient on the gateway

## Structure

`GetGatewayRecipientResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `gateway` | `string \| null \| undefined` | Optional | Gateway name |
| `status` | `string \| null \| undefined` | Optional | Status of the recipient on the gateway |
| `pgid` | `string \| null \| undefined` | Optional | Recipient id on the gateway |
| `createdAt` | `string \| null \| undefined` | Optional | Creation date |
| `updatedAt` | `string \| null \| undefined` | Optional | Last update date |

## Example

```ts
import { GetGatewayRecipientResponse } from 'pagarmeapisdklib';

const getGatewayRecipientResponse: GetGatewayRecipientResponse = {
  gateway: 'gateway0',
  status: 'status2',
  pgid: 'pgid6',
  createdAt: 'created_at8',
  updatedAt: 'updated_at6',
};
```

