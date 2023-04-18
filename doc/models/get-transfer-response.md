
# Get Transfer Response

Transfer response

## Structure

`GetTransferResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | Id |
| `amount` | `number \| undefined` | Optional | Transfer amount |
| `status` | `string \| undefined` | Optional | Transfer status |
| `createdAt` | `string \| undefined` | Optional | Transfer creation date |
| `updatedAt` | `string \| undefined` | Optional | Transfer last update date |
| `bankAccount` | [`GetBankAccountResponse \| undefined`](../../doc/models/get-bank-account-response.md) | Optional | Bank account |
| `metadata` | `Record<string, string> \| undefined` | Optional | Metadata |

## Example (as JSON)

```json
{
  "id": "id0",
  "amount": 46,
  "status": "status8",
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "bank_account": {
    "id": "id4",
    "holder_name": "holder_name0",
    "holder_type": "holder_type6",
    "bank": "bank2",
    "branch_number": "branch_number0",
    "branch_check_digit": "branch_check_digit0",
    "account_number": "account_number4",
    "account_check_digit": "account_check_digit0",
    "type": "type6",
    "status": "status6",
    "created_at": "2016-03-13T12:52:32.123Z",
    "updated_at": "2016-03-13T12:52:32.123Z",
    "deleted_at": "2016-03-13T12:52:32.123Z",
    "recipient": {
      "id": "id6",
      "name": "name6",
      "email": "email0",
      "document": "document0",
      "description": "description6",
      "type": "type4",
      "status": "status2",
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "deleted_at": "2016-03-13T12:52:32.123Z",
      "default_bank_account": {
        "id": "id4",
        "holder_name": "holder_name0",
        "holder_type": "holder_type6",
        "bank": "bank2",
        "branch_number": "branch_number0",
        "branch_check_digit": "branch_check_digit0",
        "account_number": "account_number4",
        "account_check_digit": "account_check_digit0",
        "type": "type4",
        "status": "status6",
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "deleted_at": "2016-03-13T12:52:32.123Z",
        "recipient": {
          "id": "id6",
          "name": "name6",
          "email": "email0",
          "document": "document0",
          "description": "description6",
          "type": "type4",
          "status": "status8",
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "deleted_at": "2016-03-13T12:52:32.123Z",
          "default_bank_account": {},
          "gateway_recipients": [
            {
              "gateway": "gateway0",
              "status": "status2",
              "pgid": "pgid6",
              "created_at": "created_at8",
              "updated_at": "updated_at6"
            },
            {
              "gateway": "gateway1",
              "status": "status3",
              "pgid": "pgid7",
              "created_at": "created_at9",
              "updated_at": "updated_at7"
            },
            {
              "gateway": "gateway2",
              "status": "status4",
              "pgid": "pgid8",
              "created_at": "created_at0",
              "updated_at": "updated_at8"
            }
          ],
          "metadata": {
            "key0": "metadata3",
            "key1": "metadata2"
          },
          "automatic_anticipation_settings": {
            "enabled": false,
            "type": "type0",
            "volume_percentage": 250,
            "delay": 40,
            "days": [
              16,
              17
            ]
          },
          "transfer_settings": {
            "transfer_enabled": false,
            "transfer_interval": "transfer_interval8",
            "transfer_day": 160
          },
          "code": "code4",
          "payment_mode": "payment_mode0"
        },
        "metadata": {
          "key0": "metadata1",
          "key1": "metadata0"
        },
        "pix_key": "pix_key2"
      },
      "gateway_recipients": [
        {},
        {},
        {}
      ],
      "metadata": {
        "key0": "metadata7",
        "key1": "metadata8"
      },
      "automatic_anticipation_settings": {
        "enabled": false,
        "type": "type0",
        "volume_percentage": 64,
        "delay": 226,
        "days": [
          202,
          203
        ]
      },
      "transfer_settings": {
        "transfer_enabled": false,
        "transfer_interval": "transfer_interval8",
        "transfer_day": 230
      },
      "code": "code4",
      "payment_mode": "payment_mode0"
    },
    "metadata": {
      "key0": "metadata1",
      "key1": "metadata0"
    },
    "pix_key": "pix_key2"
  },
  "metadata": {
    "key0": "metadata3",
    "key1": "metadata4",
    "key2": "metadata5"
  }
}
```

