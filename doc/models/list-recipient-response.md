
# List Recipient Response

Response for the listing recipient method

## Structure

`ListRecipientResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetRecipientResponse[] \| undefined`](../../doc/models/get-recipient-response.md) | Optional | Recipients |
| `paging` | [`PagingResponse \| undefined`](../../doc/models/paging-response.md) | Optional | Paging |

## Example (as JSON)

```json
{
  "data": [
    {
      "id": "id5",
      "name": "name5",
      "email": "email9",
      "document": "document9",
      "description": "description5",
      "type": "type5",
      "status": "status7",
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "deleted_at": "2016-03-13T12:52:32.123Z",
      "default_bank_account": {
        "id": "id3",
        "holder_name": "holder_name9",
        "holder_type": "holder_type5",
        "bank": "bank1",
        "branch_number": "branch_number9",
        "branch_check_digit": "branch_check_digit9",
        "account_number": "account_number3",
        "account_check_digit": "account_check_digit9",
        "type": "type3",
        "status": "status5",
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "deleted_at": "2016-03-13T12:52:32.123Z",
        "recipient": {
          "id": "id5",
          "name": "name5",
          "email": "email9",
          "document": "document9",
          "description": "description5",
          "type": "type5",
          "status": "status7",
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "deleted_at": "2016-03-13T12:52:32.123Z",
          "default_bank_account": {
            "id": "id3",
            "holder_name": "holder_name9",
            "holder_type": "holder_type5",
            "bank": "bank1",
            "branch_number": "branch_number9",
            "branch_check_digit": "branch_check_digit9",
            "account_number": "account_number3",
            "account_check_digit": "account_check_digit9",
            "type": "type3",
            "status": "status5",
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "deleted_at": "2016-03-13T12:52:32.123Z",
            "recipient": {},
            "metadata": {
              "key0": "metadata4",
              "key1": "metadata5"
            },
            "pix_key": "pix_key7"
          },
          "gateway_recipients": [
            {
              "gateway": "gateway9",
              "status": "status1",
              "pgid": "pgid5",
              "created_at": "created_at7",
              "updated_at": "updated_at5"
            },
            {
              "gateway": "gateway0",
              "status": "status2",
              "pgid": "pgid6",
              "created_at": "created_at8",
              "updated_at": "updated_at6"
            }
          ],
          "metadata": {
            "key0": "metadata6",
            "key1": "metadata7"
          },
          "automatic_anticipation_settings": {
            "enabled": true,
            "type": "type9",
            "volume_percentage": 137,
            "delay": 171,
            "days": [
              147
            ]
          },
          "transfer_settings": {
            "transfer_enabled": true,
            "transfer_interval": "transfer_interval1",
            "transfer_day": 7
          },
          "code": "code3",
          "payment_mode": "payment_mode9"
        },
        "metadata": {
          "key0": "metadata4",
          "key1": "metadata5"
        },
        "pix_key": "pix_key7"
      },
      "gateway_recipients": [
        {},
        {}
      ],
      "metadata": {
        "key0": "metadata4",
        "key1": "metadata3"
      },
      "automatic_anticipation_settings": {
        "enabled": true,
        "type": "type9",
        "volume_percentage": 67,
        "delay": 101,
        "days": [
          77
        ]
      },
      "transfer_settings": {
        "transfer_enabled": true,
        "transfer_interval": "transfer_interval1",
        "transfer_day": 193
      },
      "code": "code3",
      "payment_mode": "payment_mode9"
    },
    {
      "id": "id6",
      "name": "name6",
      "email": "email0",
      "document": "document0",
      "description": "description6",
      "type": "type6",
      "status": "status8",
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
          "type": "type6",
          "status": "status8",
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
            "recipient": {},
            "metadata": {
              "key0": "metadata5",
              "key1": "metadata6",
              "key2": "metadata7"
            },
            "pix_key": "pix_key8"
          },
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
            "key0": "metadata7",
            "key1": "metadata8",
            "key2": "metadata9"
          },
          "automatic_anticipation_settings": {
            "enabled": false,
            "type": "type0",
            "volume_percentage": 138,
            "delay": 172,
            "days": [
              148,
              149
            ]
          },
          "transfer_settings": {
            "transfer_enabled": false,
            "transfer_interval": "transfer_interval2",
            "transfer_day": 8
          },
          "code": "code4",
          "payment_mode": "payment_mode0"
        },
        "metadata": {
          "key0": "metadata5",
          "key1": "metadata6",
          "key2": "metadata7"
        },
        "pix_key": "pix_key8"
      },
      "gateway_recipients": [
        {},
        {},
        {}
      ],
      "metadata": {
        "key0": "metadata3",
        "key1": "metadata2",
        "key2": "metadata1"
      },
      "automatic_anticipation_settings": {
        "enabled": false,
        "type": "type0",
        "volume_percentage": 68,
        "delay": 102,
        "days": [
          78,
          79
        ]
      },
      "transfer_settings": {
        "transfer_enabled": false,
        "transfer_interval": "transfer_interval2",
        "transfer_day": 194
      },
      "code": "code4",
      "payment_mode": "payment_mode0"
    }
  ],
  "paging": {
    "total": 6,
    "previous": "previous2",
    "next": "next8"
  }
}
```

