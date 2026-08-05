
# Create Apple Pay Header Request

The ApplePay header request

## Structure

`CreateApplePayHeaderRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `publicKeyHash` | `string \| undefined` | Optional | SHA–256 hash, Base64 string codified |
| `ephemeralPublicKey` | `string` | Required | X.509 encoded key bytes, Base64 encoded as a string |
| `transactionId` | `string \| undefined` | Optional | Transaction identifier, generated on Device |

## Example

```ts
import { CreateApplePayHeaderRequest } from 'pagarmeapisdklib';

const createApplePayHeaderRequest: CreateApplePayHeaderRequest = {
  ephemeralPublicKey: 'ephemeral_public_key0',
  publicKeyHash: 'public_key_hash8',
  transactionId: 'transaction_id8',
};
```

