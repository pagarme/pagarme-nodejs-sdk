
# List Anticipation Response

Anticipations

## Structure

`ListAnticipationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetAnticipationResponse[] \| undefined`](../../doc/models/get-anticipation-response.md) | Optional | Anticipations |
| `paging` | [`PagingResponse \| undefined`](../../doc/models/paging-response.md) | Optional | Paging |

## Example (as JSON)

```json
{
  "data": [
    {
      "id": "id5",
      "requested_amount": 157,
      "approved_amount": 211,
      "recipient": {
        "id": "id7",
        "name": "name7",
        "email": "email1",
        "document": "document1",
        "description": "description7",
        "type": "type7",
        "status": "status9",
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "deleted_at": "2016-03-13T12:52:32.123Z",
        "default_bank_account": {
          "id": "id5",
          "holder_name": "holder_name1",
          "holder_type": "holder_type7",
          "bank": "bank3",
          "branch_number": "branch_number1",
          "branch_check_digit": "branch_check_digit1",
          "account_number": "account_number5",
          "account_check_digit": "account_check_digit1",
          "type": "type5",
          "status": "status7",
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "deleted_at": "2016-03-13T12:52:32.123Z",
          "recipient": {
            "id": "id7",
            "name": "name7",
            "email": "email1",
            "document": "document1",
            "description": "description7",
            "type": "type7",
            "status": "status9",
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "deleted_at": "2016-03-13T12:52:32.123Z",
            "default_bank_account": {
              "id": "id5",
              "holder_name": "holder_name1",
              "holder_type": "holder_type7",
              "bank": "bank3",
              "branch_number": "branch_number1",
              "branch_check_digit": "branch_check_digit1",
              "account_number": "account_number5",
              "account_check_digit": "account_check_digit1",
              "type": "type5",
              "status": "status7",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "deleted_at": "2016-03-13T12:52:32.123Z",
              "recipient": {},
              "metadata": {
                "key0": "metadata6",
                "key1": "metadata7"
              },
              "pix_key": "pix_key9"
            },
            "gateway_recipients": [
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
              "key0": "metadata8",
              "key1": "metadata9"
            },
            "automatic_anticipation_settings": {
              "enabled": true,
              "type": "type1",
              "volume_percentage": 53,
              "delay": 87,
              "days": [
                63
              ]
            },
            "transfer_settings": {
              "transfer_enabled": true,
              "transfer_interval": "transfer_interval3",
              "transfer_day": 179
            },
            "code": "code5",
            "payment_mode": "payment_mode1"
          },
          "metadata": {
            "key0": "metadata6",
            "key1": "metadata7"
          },
          "pix_key": "pix_key9"
        },
        "gateway_recipients": [
          {},
          {}
        ],
        "metadata": {
          "key0": "metadata2",
          "key1": "metadata1"
        },
        "automatic_anticipation_settings": {
          "enabled": true,
          "type": "type1",
          "volume_percentage": 239,
          "delay": 17,
          "days": [
            249
          ]
        },
        "transfer_settings": {
          "transfer_enabled": true,
          "transfer_interval": "transfer_interval3",
          "transfer_day": 109
        },
        "code": "code5",
        "payment_mode": "payment_mode1"
      },
      "pgid": "pgid1",
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "payment_date": "2016-03-13T12:52:32.123Z",
      "status": "status7",
      "timeframe": "timeframe7"
    },
    {
      "id": "id6",
      "requested_amount": 158,
      "approved_amount": 212,
      "recipient": {
        "id": "id8",
        "name": "name8",
        "email": "email2",
        "document": "document2",
        "description": "description8",
        "type": "type8",
        "status": "status0",
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "deleted_at": "2016-03-13T12:52:32.123Z",
        "default_bank_account": {
          "id": "id6",
          "holder_name": "holder_name2",
          "holder_type": "holder_type8",
          "bank": "bank4",
          "branch_number": "branch_number2",
          "branch_check_digit": "branch_check_digit2",
          "account_number": "account_number6",
          "account_check_digit": "account_check_digit2",
          "type": "type6",
          "status": "status8",
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "deleted_at": "2016-03-13T12:52:32.123Z",
          "recipient": {
            "id": "id8",
            "name": "name8",
            "email": "email2",
            "document": "document2",
            "description": "description8",
            "type": "type8",
            "status": "status0",
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "deleted_at": "2016-03-13T12:52:32.123Z",
            "default_bank_account": {
              "id": "id6",
              "holder_name": "holder_name2",
              "holder_type": "holder_type8",
              "bank": "bank4",
              "branch_number": "branch_number2",
              "branch_check_digit": "branch_check_digit2",
              "account_number": "account_number6",
              "account_check_digit": "account_check_digit2",
              "type": "type6",
              "status": "status8",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "deleted_at": "2016-03-13T12:52:32.123Z",
              "recipient": {},
              "metadata": {
                "key0": "metadata7",
                "key1": "metadata8",
                "key2": "metadata9"
              },
              "pix_key": "pix_key0"
            },
            "gateway_recipients": [
              {
                "gateway": "gateway2",
                "status": "status4",
                "pgid": "pgid8",
                "created_at": "created_at0",
                "updated_at": "updated_at8"
              },
              {
                "gateway": "gateway3",
                "status": "status5",
                "pgid": "pgid9",
                "created_at": "created_at1",
                "updated_at": "updated_at9"
              },
              {
                "gateway": "gateway4",
                "status": "status6",
                "pgid": "pgid0",
                "created_at": "created_at2",
                "updated_at": "updated_at0"
              }
            ],
            "metadata": {
              "key0": "metadata9",
              "key1": "metadata0",
              "key2": "metadata1"
            },
            "automatic_anticipation_settings": {
              "enabled": false,
              "type": "type2",
              "volume_percentage": 54,
              "delay": 88,
              "days": [
                64,
                65
              ]
            },
            "transfer_settings": {
              "transfer_enabled": false,
              "transfer_interval": "transfer_interval4",
              "transfer_day": 180
            },
            "code": "code6",
            "payment_mode": "payment_mode2"
          },
          "metadata": {
            "key0": "metadata7",
            "key1": "metadata8",
            "key2": "metadata9"
          },
          "pix_key": "pix_key0"
        },
        "gateway_recipients": [
          {},
          {},
          {}
        ],
        "metadata": {
          "key0": "metadata1",
          "key1": "metadata0",
          "key2": "metadata9"
        },
        "automatic_anticipation_settings": {
          "enabled": false,
          "type": "type2",
          "volume_percentage": 240,
          "delay": 18,
          "days": [
            250,
            251
          ]
        },
        "transfer_settings": {
          "transfer_enabled": false,
          "transfer_interval": "transfer_interval4",
          "transfer_day": 110
        },
        "code": "code6",
        "payment_mode": "payment_mode2"
      },
      "pgid": "pgid2",
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "payment_date": "2016-03-13T12:52:32.123Z",
      "status": "status8",
      "timeframe": "timeframe8"
    }
  ],
  "paging": {
    "total": 6,
    "previous": "previous2",
    "next": "next8"
  }
}
```

