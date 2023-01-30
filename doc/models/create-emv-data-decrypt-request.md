
# Create Emv Data Decrypt Request

## Structure

`CreateEmvDataDecryptRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cipher` | `string` | Required | Emv Decrypt cipher type |
| `dukpt` | [`CreateEmvDataDukptDecryptRequest \| undefined`](../../doc/models/create-emv-data-dukpt-decrypt-request.md) | Optional | Dukpt data request |
| `tags` | [`CreateEmvDataTlvDecryptRequest[]`](../../doc/models/create-emv-data-tlv-decrypt-request.md) | Required | Encrypted tags list |

## Example (as JSON)

```json
{
  "cipher": "cipher4",
  "dukpt": null,
  "tags": [
    {
      "tag": "tag9",
      "lenght": "lenght7",
      "value": "value7"
    },
    {
      "tag": "tag0",
      "lenght": "lenght8",
      "value": "value8"
    }
  ]
}
```

