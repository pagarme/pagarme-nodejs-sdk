
# Get Card Response

Response object for getting a credit card

## Structure

`GetCardResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| null` | Required | - |
| `lastFourDigits` | `string \| null` | Required | - |
| `brand` | `string \| null` | Required | - |
| `holderName` | `string \| null` | Required | - |
| `expMonth` | `number \| null` | Required | - |
| `expYear` | `number \| null` | Required | - |
| `status` | `string \| null` | Required | - |
| `createdAt` | `string \| null` | Required | - |
| `updatedAt` | `string \| null` | Required | - |
| `billingAddress` | [`GetBillingAddressResponse \| null`](../../doc/models/get-billing-address-response.md) | Required | - |
| `customer` | [`GetCustomerResponse \| undefined`](../../doc/models/get-customer-response.md) | Optional | - |
| `metadata` | `Record<string, string> \| null` | Required | - |
| `type` | `string \| null` | Required | Card type |
| `holderDocument` | `string \| null` | Required | Document number for the card's holder |
| `deletedAt` | `string \| undefined` | Optional | - |
| `firstSixDigits` | `string \| null` | Required | First six digits |
| `label` | `string \| null` | Required | - |

## Example (as JSON)

```json
{
  "id": "id0",
  "last_four_digits": "last_four_digits6",
  "brand": "brand4",
  "holder_name": "holder_name4",
  "exp_month": 42,
  "exp_year": 254,
  "status": "status8",
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "billing_address": {
    "street": "street8",
    "number": "number4",
    "zip_code": "zip_code2",
    "neighborhood": "neighborhood4",
    "city": "city2",
    "state": "state6",
    "country": "country2",
    "complement": "complement6",
    "line_1": "line_18",
    "line_2": "line_26"
  },
  "customer": null,
  "metadata": {
    "key0": "metadata3",
    "key1": "metadata4",
    "key2": "metadata5"
  },
  "type": "type0",
  "holder_document": "holder_document6",
  "deleted_at": null,
  "first_six_digits": "first_six_digits0",
  "label": "label0"
}
```

