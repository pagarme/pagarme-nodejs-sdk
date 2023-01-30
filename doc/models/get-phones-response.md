
# Get Phones Response

## Structure

`GetPhonesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `homePhone` | [`GetPhoneResponse \| null`](../../doc/models/get-phone-response.md) | Required | - |
| `mobilePhone` | [`GetPhoneResponse \| null`](../../doc/models/get-phone-response.md) | Required | - |

## Example (as JSON)

```json
{
  "home_phone": {
    "country_code": null,
    "number": null,
    "area_code": null
  },
  "mobile_phone": {
    "country_code": null,
    "number": null,
    "area_code": null
  }
}
```

