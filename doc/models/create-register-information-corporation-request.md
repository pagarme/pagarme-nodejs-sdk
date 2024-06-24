
# Create Register Information Corporation Request

## Structure

`CreateRegisterInformationCorporationRequest`

## Inherits From

[`CreateRegisterInformationBaseRequest`](../../doc/models/create-register-information-base-request.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `companyName` | `string` | Required | - |
| `tradingName` | `string` | Required | - |
| `annualRevenue` | `bigint` | Required | - |
| `corporationType` | `string \| null \| undefined` | Optional | - |
| `foundingDate` | `string \| null \| undefined` | Optional | - |
| `cnae` | `string \| null \| undefined` | Optional | - |
| `managingPartners` | [`CreateManagingPartnerRequest[]`](../../doc/models/create-managing-partner-request.md) | Required | - |
| `mainAddress` | [`CreateRegisterInformationAddressRequest`](../../doc/models/create-register-information-address-request.md) | Required | - |

## Example (as JSON)

```json
{
  "email": "email4",
  "document": "document6",
  "type": "type8",
  "phone_numbers": [
    {
      "ddd": "ddd4",
      "number": "number2",
      "type": "type0"
    }
  ],
  "company_name": "company_name8",
  "trading_name": "trading_name0",
  "annual_revenue": 156,
  "managing_partners": [
    {
      "name": "name4",
      "email": "email2",
      "document": "document8",
      "birthdate": "birthdate8",
      "monthly_income": 202,
      "professional_occupation": "professional_occupation8",
      "self_declared_legal_representative": false,
      "address": {
        "street": "street6",
        "complementary": "complementary8",
        "street_number": "street_number6",
        "neighborhood": "neighborhood2",
        "city": "city6",
        "state": "state2",
        "zip_code": "zip_code0",
        "reference_point": "reference_point0"
      },
      "phone_numbers": [
        {
          "ddd": "ddd4",
          "number": "number2",
          "type": "type0"
        }
      ],
      "mother_name": "mother_name0"
    }
  ],
  "main_address": {
    "street": "street8",
    "complementary": "complementary0",
    "street_number": "street_number8",
    "neighborhood": "neighborhood4",
    "city": "city8",
    "state": "state4",
    "zip_code": "zip_code2",
    "reference_point": "reference_point2"
  },
  "site_url": "site_url4",
  "corporation_type": "corporation_type2",
  "founding_date": "founding_date2",
  "cnae": "cnae2"
}
```

