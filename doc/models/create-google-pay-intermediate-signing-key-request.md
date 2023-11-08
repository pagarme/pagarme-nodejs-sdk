
# Create Google Pay Intermediate Signing Key Request

The GooglePay Intermediate Signing Key Request

## Structure

`CreateGooglePayIntermediateSigningKeyRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `signedKey` | `string \| null \| undefined` | Optional | Uma mensagem codificada em Base64 com a descrição de pagamento da chave. |
| `signatures` | `string[] \| null \| undefined` | Optional | Verifica se a origem da chave de assinatura intermediária é o Google. É codificada em Base64 e criada usando o ECDSA. |

## Example (as JSON)

```json
{
  "signed_key": "signed_key2",
  "signatures": [
    "signatures0",
    "signatures1",
    "signatures2"
  ]
}
```

