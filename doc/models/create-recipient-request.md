
# Create Recipient Request

Request for creating a recipient

## Structure

`CreateRecipientRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| null \| undefined` | Optional | Recipient name. Required if the register_information field isn't populated. |
| `email` | `string \| null \| undefined` | Optional | Recipient email. Required if the register_information field isn't populated. |
| `description` | `string \| null \| undefined` | Optional | Recipient description |
| `document` | `string \| null \| undefined` | Optional | Recipient document number. Required if the register_information field isn't populated. |
| `type` | `string \| null \| undefined` | Optional | Recipient type. Required if the register_information field isn't populated. |
| `defaultBankAccount` | [`CreateBankAccountRequest`](../../doc/models/create-bank-account-request.md) | Required | Bank account |
| `metadata` | `Record<string, string>` | Required | Metadata |
| `transferSettings` | [`CreateTransferSettingsRequest \| undefined`](../../doc/models/create-transfer-settings-request.md) | Optional | Receiver Transfer Information |
| `code` | `string` | Required | Recipient code |
| `paymentMode` | `string` | Required | Payment mode<br><br>**Default**: `'bank_transfer'` |
| `registerInformation` | [`CreateRegisterInformationBaseRequest \| null \| undefined`](../../doc/models/create-register-information-base-request.md) | Optional | Register Information |

## Example

```ts
import { CreateRecipientRequest } from 'pagarmeapisdklib';

const createRecipientRequest: CreateRecipientRequest = {
  defaultBankAccount: {},
  metadata: {},
  code: '',
  paymentMode: 'bank_transfer',
  name: 'name2',
  email: 'email4',
  description: 'description2',
  document: 'document4',
  type: 'type8',
};
```

