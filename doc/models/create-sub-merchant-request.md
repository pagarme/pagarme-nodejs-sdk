
# Create Sub Merchant Request

SubMerchant

## Structure

`CreateSubMerchantRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentFacilitatorCode` | `string` | Required | Payment Facilitator Code |
| `code` | `string` | Required | Code |
| `name` | `string` | Required | Name |
| `merchantCategoryCode` | `string` | Required | Merchant Category Code |
| `document` | `string` | Required | Document number. Only numbers, no special characters. |
| `type` | `string` | Required | Document type. Can be either 'individual' or 'company' |
| `phone` | [`CreatePhoneRequest`](../../doc/models/create-phone-request.md) | Required | Phone |
| `address` | [`CreateAddressRequest`](../../doc/models/create-address-request.md) | Required | Address |
| `legalName` | `string` | Required | Legal name |
| `siteUrl` | `string` | Required | Site Url |

## Example

```ts
import { CreateSubMerchantRequest } from 'pagarmeapisdklib';

const createSubMerchantRequest: CreateSubMerchantRequest = {
  paymentFacilitatorCode: 'payment_facilitator_code2',
  code: 'code2',
  name: 'name4',
  merchantCategoryCode: 'merchant_category_code4',
  document: 'document2',
  type: 'type6',
  phone: {},
  address: {},
  legalName: 'legal_name2',
  siteUrl: 'site_url6',
};
```

