
# Update Metadata Request

Request for updating an metadata

## Structure

`UpdateMetadataRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `metadata` | `Record<string, string>` | Required | Metadata |

## Example

```ts
import { UpdateMetadataRequest } from 'pagarmeapisdklib';

const updateMetadataRequest: UpdateMetadataRequest = {
  metadata: {
    'key0': 'metadata5',
    'key1': 'metadata6',
    'key2': 'metadata7'
  },
};
```

