
# List Transfer Response

List of paginated transfer objects

## Structure

`ListTransferResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetTransferResponse[] \| undefined`](../../doc/models/get-transfer-response.md) | Optional | Transfers |
| `paging` | [`PagingResponse \| undefined`](../../doc/models/paging-response.md) | Optional | Paging |

## Example (as JSON)

```json
{
  "data": [
    {
      "id": "id5",
      "amount": 121,
      "status": "status7",
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "bank_account": {
        "id": "id9",
        "holder_name": "holder_name5",
        "holder_type": "holder_type1",
        "bank": "bank7",
        "branch_number": "branch_number5",
        "branch_check_digit": "branch_check_digit5",
        "account_number": "account_number9",
        "account_check_digit": "account_check_digit5",
        "type": "type9",
        "status": "status1",
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "deleted_at": "2016-03-13T12:52:32.123Z",
        "recipient": {
          "id": "id1",
          "name": "name1",
          "email": "email5",
          "document": "document5",
          "description": "description1",
          "type": "type1",
          "status": "status3",
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "deleted_at": "2016-03-13T12:52:32.123Z",
          "default_bank_account": {
            "id": "id9",
            "holder_name": "holder_name5",
            "holder_type": "holder_type1",
            "bank": "bank7",
            "branch_number": "branch_number5",
            "branch_check_digit": "branch_check_digit5",
            "account_number": "account_number9",
            "account_check_digit": "account_check_digit5",
            "type": "type9",
            "status": "status1",
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "deleted_at": "2016-03-13T12:52:32.123Z",
            "recipient": {
              "id": "id1",
              "name": "name1",
              "email": "email5",
              "document": "document5",
              "description": "description1",
              "type": "type1",
              "status": "status3",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "deleted_at": "2016-03-13T12:52:32.123Z",
              "default_bank_account": {},
              "gateway_recipients": [
                {
                  "gateway": "gateway5",
                  "status": "status7",
                  "pgid": "pgid1",
                  "created_at": "created_at3",
                  "updated_at": "updated_at1"
                },
                {
                  "gateway": "gateway6",
                  "status": "status8",
                  "pgid": "pgid2",
                  "created_at": "created_at4",
                  "updated_at": "updated_at2"
                },
                {
                  "gateway": "gateway7",
                  "status": "status9",
                  "pgid": "pgid3",
                  "created_at": "created_at5",
                  "updated_at": "updated_at3"
                }
              ],
              "metadata": {
                "key0": "metadata2",
                "key1": "metadata3",
                "key2": "metadata4"
              },
              "automatic_anticipation_settings": {
                "enabled": true,
                "type": "type5",
                "volume_percentage": 173,
                "delay": 207,
                "days": [
                  183,
                  184
                ]
              },
              "transfer_settings": {
                "transfer_enabled": true,
                "transfer_interval": "transfer_interval7",
                "transfer_day": 43
              },
              "code": "code9",
              "payment_mode": "payment_mode5"
            },
            "metadata": {
              "key0": "metadata0",
              "key1": "metadata1",
              "key2": "metadata2"
            },
            "pix_key": "pix_key3"
          },
          "gateway_recipients": [
            {},
            {},
            {}
          ],
          "metadata": {
            "key0": "metadata2",
            "key1": "metadata3",
            "key2": "metadata4"
          },
          "automatic_anticipation_settings": {
            "enabled": true,
            "type": "type5",
            "volume_percentage": 103,
            "delay": 137,
            "days": [
              113,
              114
            ]
          },
          "transfer_settings": {
            "transfer_enabled": true,
            "transfer_interval": "transfer_interval7",
            "transfer_day": 229
          },
          "code": "code9",
          "payment_mode": "payment_mode5"
        },
        "metadata": {
          "key0": "metadata0",
          "key1": "metadata1",
          "key2": "metadata2"
        },
        "pix_key": "pix_key3"
      },
      "metadata": {
        "key0": "metadata4",
        "key1": "metadata3"
      }
    },
    {
      "id": "id6",
      "amount": 122,
      "status": "status8",
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "bank_account": {
        "id": "id0",
        "holder_name": "holder_name6",
        "holder_type": "holder_type2",
        "bank": "bank8",
        "branch_number": "branch_number6",
        "branch_check_digit": "branch_check_digit6",
        "account_number": "account_number0",
        "account_check_digit": "account_check_digit6",
        "type": "type0",
        "status": "status2",
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "deleted_at": "2016-03-13T12:52:32.123Z",
        "recipient": {
          "id": "id2",
          "name": "name2",
          "email": "email6",
          "document": "document6",
          "description": "description2",
          "type": "type2",
          "status": "status4",
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "deleted_at": "2016-03-13T12:52:32.123Z",
          "default_bank_account": {
            "id": "id0",
            "holder_name": "holder_name6",
            "holder_type": "holder_type2",
            "bank": "bank8",
            "branch_number": "branch_number6",
            "branch_check_digit": "branch_check_digit6",
            "account_number": "account_number0",
            "account_check_digit": "account_check_digit6",
            "type": "type0",
            "status": "status2",
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "deleted_at": "2016-03-13T12:52:32.123Z",
            "recipient": {
              "id": "id2",
              "name": "name2",
              "email": "email6",
              "document": "document6",
              "description": "description2",
              "type": "type2",
              "status": "status4",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "deleted_at": "2016-03-13T12:52:32.123Z",
              "default_bank_account": {},
              "gateway_recipients": [
                {
                  "gateway": "gateway6",
                  "status": "status8",
                  "pgid": "pgid2",
                  "created_at": "created_at4",
                  "updated_at": "updated_at2"
                }
              ],
              "metadata": {
                "key0": "metadata3"
              },
              "automatic_anticipation_settings": {
                "enabled": false,
                "type": "type6",
                "volume_percentage": 174,
                "delay": 208,
                "days": [
                  184,
                  185,
                  186
                ]
              },
              "transfer_settings": {
                "transfer_enabled": false,
                "transfer_interval": "transfer_interval8",
                "transfer_day": 44
              },
              "code": "code0",
              "payment_mode": "payment_mode6"
            },
            "metadata": {
              "key0": "metadata1"
            },
            "pix_key": "pix_key4"
          },
          "gateway_recipients": [
            {}
          ],
          "metadata": {
            "key0": "metadata3"
          },
          "automatic_anticipation_settings": {
            "enabled": false,
            "type": "type6",
            "volume_percentage": 104,
            "delay": 138,
            "days": [
              114,
              115,
              116
            ]
          },
          "transfer_settings": {
            "transfer_enabled": false,
            "transfer_interval": "transfer_interval8",
            "transfer_day": 230
          },
          "code": "code0",
          "payment_mode": "payment_mode6"
        },
        "metadata": {
          "key0": "metadata1"
        },
        "pix_key": "pix_key4"
      },
      "metadata": {
        "key0": "metadata3",
        "key1": "metadata2",
        "key2": "metadata1"
      }
    }
  ],
  "paging": {
    "total": 6,
    "previous": "previous2",
    "next": "next8"
  }
}
```

