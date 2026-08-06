
# Create Invoice Request

Request for creating a new Invoice

## Structure

`CreateInvoiceRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `metadata` | `Record<string, string>` | Required | Metadata |

## Example

```ts
import { CreateInvoiceRequest } from 'pagarmeapisdklib';

const createInvoiceRequest: CreateInvoiceRequest = {
  metadata: {
    'key0': 'metadata9',
    'key1': 'metadata8',
    'key2': 'metadata7'
  },
};
```

