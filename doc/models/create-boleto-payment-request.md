
# Create Boleto Payment Request

Contains the settings for creating a boleto payment

## Structure

`CreateBoletoPaymentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `retries` | `number` | Required | Number of retries |
| `bank` | `string \| null \| undefined` | Optional | The bank code, containing three characters. The available codes are on the API specification |
| `instructions` | `string` | Required | The instructions field that will be printed on the boleto. |
| `dueAt` | `string \| null \| undefined` | Optional | Boleto due date |
| `billingAddress` | [`CreateAddressRequest`](../../doc/models/create-address-request.md) | Required | Card's billing address |
| `billingAddressId` | `string \| null \| undefined` | Optional | The address id for the billing address |
| `nossoNumero` | `string \| null \| undefined` | Optional | Customer identification number with the bank |
| `documentNumber` | `string` | Required | Boleto identification |
| `statementDescriptor` | `string` | Required | Soft Descriptor |
| `interest` | [`CreateInterestRequest \| null \| undefined`](../../doc/models/create-interest-request.md) | Optional | - |
| `fine` | [`CreateFineRequest \| null \| undefined`](../../doc/models/create-fine-request.md) | Optional | - |
| `maxDaysToPayPastDue` | `number \| null \| undefined` | Optional | - |

## Example

```ts
import { CreateBoletoPaymentRequest } from 'pagarmeapisdklib';

const createBoletoPaymentRequest: CreateBoletoPaymentRequest = {
  retries: 192,
  instructions: 'instructions6',
  billingAddress: {},
  documentNumber: 'document_number2',
  statementDescriptor: 'statement_descriptor8',
  bank: 'bank6',
  dueAt: '2016-03-13T12:52:32.123Z',
  billingAddressId: 'billing_address_id4',
  nossoNumero: 'nosso_numero8',
  interest: null,
};
```

