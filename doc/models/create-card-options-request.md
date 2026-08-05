
# Create Card Options Request

Options for creating the card

## Structure

`CreateCardOptionsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `verifyCard` | `boolean` | Required | Indicates if the card should be verified before creation. If true, executes an authorization before saving the card. |

## Example

```ts
import { CreateCardOptionsRequest } from 'pagarmeapisdklib';

const createCardOptionsRequest: CreateCardOptionsRequest = {
  verifyCard: false,
};
```

