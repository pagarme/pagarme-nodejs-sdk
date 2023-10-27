
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

## Example (as JSON)

```json
{
  "holder_name": "holder_name2",
  "holder_type": "holder_type8",
  "holder_document": "holder_document0",
  "bank": "bank4",
  "branch_number": "branch_number2",
  "branch_check_digit": "branch_check_digit2",
  "account_number": "account_number6",
  "account_check_digit": "account_check_digit2",
  "type": "type4"
}
```

