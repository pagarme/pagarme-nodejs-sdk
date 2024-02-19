
# Get Register Information Response

Response object for getting an RegisterInformationResponse

## Structure

`GetRegisterInformationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string \| null \| undefined` | Optional | - |
| `document` | `string \| null \| undefined` | Optional | - |
| `type` | `string \| null \| undefined` | Optional | - |
| `siteUrl` | `string \| null \| undefined` | Optional | - |
| `phoneNumbers` | [`GetPhoneNumberResponse[] \| null \| undefined`](../../doc/models/get-phone-number-response.md) | Optional | - |
| `name` | `string \| null \| undefined` | Optional | - |
| `motherName` | `string \| null \| undefined` | Optional | - |
| `birthdate` | `string \| null \| undefined` | Optional | - |
| `monthlyIncome` | `string \| null \| undefined` | Optional | - |
| `professionalOccupation` | `string \| null \| undefined` | Optional | - |
| `address` | [`GetRegisterInformationAddressResponse \| null \| undefined`](../../doc/models/get-register-information-address-response.md) | Optional | - |
| `companyName` | `string \| null \| undefined` | Optional | - |
| `tradingName` | `string \| null \| undefined` | Optional | - |
| `annualRevenue` | `string \| null \| undefined` | Optional | - |
| `corporationType` | `string \| null \| undefined` | Optional | - |
| `foundingDate` | `string \| null \| undefined` | Optional | - |
| `cnae` | `string \| null \| undefined` | Optional | - |
| `mainAddress` | [`GetRegisterInformationAddressResponse \| null \| undefined`](../../doc/models/get-register-information-address-response.md) | Optional | - |
| `managingPartners` | [`GetManagingPartnerResponse[] \| null \| undefined`](../../doc/models/get-managing-partner-response.md) | Optional | - |

## Example (as JSON)

```json
{
  "email": "email2",
  "document": "document2",
  "type": "type6",
  "site_url": "site_url6",
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
  ]
}
```

