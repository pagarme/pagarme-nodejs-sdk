
# Create Bank Account Refunding DTO

Bank Account

## Structure

`CreateBankAccountRefundingDTO`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `holderName` | `string` | Required | Nome/razão social do favorecido |
| `holderType` | `string` | Required | Tipo de titular (pessoa física ou jurídica) |
| `holderDocument` | `string` | Required | CPF ou CNPJ do favorecido |
| `bank` | `string` | Required | Dígitos que identificam cada banco. |
| `branchNumber` | `string` | Required | Número da agência bancária |
| `branchCheckDigit` | `string` | Required | Dígito da agência bancária |
| `accountNumber` | `string` | Required | Número da conta |
| `accountCheckDigit` | `string` | Required | Dígito verificador da conta |
| `type` | `string` | Required | Tipo de conta |

## Example

```ts
import { CreateBankAccountRefundingDTO } from 'pagarmeapisdklib';

const createBankAccountRefundingDTO: CreateBankAccountRefundingDTO = {
  holderName: 'holder_name4',
  holderType: 'holder_type0',
  holderDocument: 'holder_document8',
  bank: 'bank6',
  branchNumber: 'branch_number4',
  branchCheckDigit: 'branch_check_digit4',
  accountNumber: 'account_number2',
  accountCheckDigit: 'account_check_digit4',
  type: 'type2',
};
```

