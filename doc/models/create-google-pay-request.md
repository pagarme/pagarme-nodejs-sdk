
# Create Google Pay Request

The GooglePay Token Payment Request

## Structure

`CreateGooglePayRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `version` | `string \| null \| undefined` | Optional | Informação sobre a versão do token. Único valor aceito é EC_v2 |
| `data` | `string \| null \| undefined` | Optional | Dados de pagamento criptografados. Corresponde ao encryptedMessage do token Google. |
| `intermediateSigningKey` | [`CreateGooglePayIntermediateSigningKeyRequest \| null \| undefined`](../../doc/models/create-google-pay-intermediate-signing-key-request.md) | Optional | The GooglePay intermediate signing key request |
| `signature` | `string \| null \| undefined` | Optional | Assinatura dos dados de pagamento. Verifica se a origem da mensagem é o Google. Corresponde ao signature do token Google. |
| `signedMessage` | `string \| null \| undefined` | Optional | - |
| `merchantIdentifier` | `string \| null \| undefined` | Optional | - |

## Example

```ts
import { CreateGooglePayRequest } from 'pagarmeapisdklib';

const createGooglePayRequest: CreateGooglePayRequest = {
  version: 'version2',
  data: 'data6',
  intermediateSigningKey: null,
  signature: 'signature4',
  signedMessage: 'signed_message2',
};
```

