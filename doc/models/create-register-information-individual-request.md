
# Create Register Information Individual Request

## Structure

`CreateRegisterInformationIndividualRequest`

## Inherits From

[`CreateRegisterInformationBaseRequest`](../../doc/models/create-register-information-base-request.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | - |
| `motherName` | `string \| null \| undefined` | Optional | - |
| `birthdate` | `string` | Required | - |
| `monthlyIncome` | `bigint` | Required | - |
| `professionalOccupation` | `string` | Required | - |
| `address` | [`CreateRegisterInformationAddressRequest`](../../doc/models/create-register-information-address-request.md) | Required | - |

## Example (as JSON)

```json
{
  "email": "email4",
  "document": "document6",
  "type": "type8",
  "site_url": "site_url4",
  "phone_numbers": [
    {
      "ddd": "ddd4",
      "number": "number2",
      "type": "type0"
    },
    {
      "ddd": "ddd4",
      "number": "number2",
      "type": "type0"
    }
  ],
  "name": "name6",
  "mother_name": "mother_name2",
  "birthdate": "birthdate0",
  "monthly_income": 206,
  "professional_occupation": "professional_occupation0",
  "address": {
    "street": "street6",
    "complementary": "complementary8",
    "street_number": "street_number6",
    "neighborhood": "neighborhood2",
    "city": "city6",
    "state": "state2",
    "zip_code": "zip_code0",
    "reference_point": "reference_point0"
  }
}
```

