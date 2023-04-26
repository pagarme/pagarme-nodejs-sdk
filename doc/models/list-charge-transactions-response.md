
# List Charge Transactions Response

Response object for listing charge transactions

## Structure

`ListChargeTransactionsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetTransactionResponse[] \| undefined`](../../doc/models/get-transaction-response.md) | Optional | The charge transactions objects |
| `paging` | [`PagingResponse \| undefined`](../../doc/models/paging-response.md) | Optional | Paging object |

## Example (as JSON)

```json
{
  "data": [
    {
      "gateway_id": "gateway_id5",
      "amount": 121,
      "status": "status7",
      "success": true,
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "attempt_count": 97,
      "max_attempts": 85,
      "splits": [
        {
          "type": "type7",
          "amount": 53,
          "recipient": {
            "id": "id9",
            "name": "name9",
            "email": "email7",
            "document": "document3",
            "description": "description9",
            "type": "type1",
            "status": "status1",
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "deleted_at": "2016-03-13T12:52:32.123Z",
            "default_bank_account": {
              "id": "id7",
              "holder_name": "holder_name3",
              "holder_type": "holder_type9",
              "bank": "bank5",
              "branch_number": "branch_number3",
              "branch_check_digit": "branch_check_digit3",
              "account_number": "account_number7",
              "account_check_digit": "account_check_digit3",
              "type": "type7",
              "status": "status9",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "deleted_at": "2016-03-13T12:52:32.123Z",
              "recipient": {
                "id": "id9",
                "name": "name9",
                "email": "email7",
                "document": "document3",
                "description": "description9",
                "type": "type9",
                "status": "status1",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "deleted_at": "2016-03-13T12:52:32.123Z",
                "default_bank_account": {
                  "id": "id7",
                  "holder_name": "holder_name3",
                  "holder_type": "holder_type9",
                  "bank": "bank5",
                  "branch_number": "branch_number3",
                  "branch_check_digit": "branch_check_digit3",
                  "account_number": "account_number7",
                  "account_check_digit": "account_check_digit3",
                  "type": "type7",
                  "status": "status9",
                  "created_at": "2016-03-13T12:52:32.123Z",
                  "updated_at": "2016-03-13T12:52:32.123Z",
                  "deleted_at": "2016-03-13T12:52:32.123Z",
                  "recipient": {},
                  "metadata": {
                    "key0": "metadata2",
                    "key1": "metadata1"
                  },
                  "pix_key": "pix_key1"
                },
                "gateway_recipients": [
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
                  "key0": "metadata6",
                  "key1": "metadata5",
                  "key2": "metadata4"
                },
                "automatic_anticipation_settings": {
                  "enabled": true,
                  "type": "type3",
                  "volume_percentage": 241,
                  "delay": 19,
                  "days": [
                    251
                  ]
                },
                "transfer_settings": {
                  "transfer_enabled": true,
                  "transfer_interval": "transfer_interval5",
                  "transfer_day": 181
                },
                "code": "code7",
                "payment_mode": "payment_mode3"
              },
              "metadata": {
                "key0": "metadata2",
                "key1": "metadata1"
              },
              "pix_key": "pix_key1"
            },
            "gateway_recipients": [
              {},
              {}
            ],
            "metadata": {
              "key0": "metadata6",
              "key1": "metadata5",
              "key2": "metadata4"
            },
            "automatic_anticipation_settings": {
              "enabled": true,
              "type": "type7",
              "volume_percentage": 85,
              "delay": 205,
              "days": [
                181
              ]
            },
            "transfer_settings": {
              "transfer_enabled": true,
              "transfer_interval": "transfer_interval5",
              "transfer_day": 251
            },
            "code": "code7",
            "payment_mode": "payment_mode3"
          },
          "gateway_id": "gateway_id3",
          "options": {
            "liable": true,
            "charge_processing_fee": true,
            "charge_remainder_fee": "charge_remainder_fee3"
          },
          "id": "id7"
        },
        {
          "type": "type8",
          "amount": 54,
          "recipient": {
            "id": "id0",
            "name": "name0",
            "email": "email6",
            "document": "document4",
            "description": "description0",
            "type": "type0",
            "status": "status2",
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "deleted_at": "2016-03-13T12:52:32.123Z",
            "default_bank_account": {
              "id": "id8",
              "holder_name": "holder_name4",
              "holder_type": "holder_type0",
              "bank": "bank6",
              "branch_number": "branch_number4",
              "branch_check_digit": "branch_check_digit4",
              "account_number": "account_number8",
              "account_check_digit": "account_check_digit4",
              "type": "type8",
              "status": "status0",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "deleted_at": "2016-03-13T12:52:32.123Z",
              "recipient": {
                "id": "id0",
                "name": "name0",
                "email": "email6",
                "document": "document4",
                "description": "description0",
                "type": "type0",
                "status": "status2",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "deleted_at": "2016-03-13T12:52:32.123Z",
                "default_bank_account": {
                  "id": "id8",
                  "holder_name": "holder_name4",
                  "holder_type": "holder_type0",
                  "bank": "bank6",
                  "branch_number": "branch_number4",
                  "branch_check_digit": "branch_check_digit4",
                  "account_number": "account_number8",
                  "account_check_digit": "account_check_digit4",
                  "type": "type8",
                  "status": "status0",
                  "created_at": "2016-03-13T12:52:32.123Z",
                  "updated_at": "2016-03-13T12:52:32.123Z",
                  "deleted_at": "2016-03-13T12:52:32.123Z",
                  "recipient": {},
                  "metadata": {
                    "key0": "metadata1",
                    "key1": "metadata0",
                    "key2": "metadata9"
                  },
                  "pix_key": "pix_key2"
                },
                "gateway_recipients": [
                  {
                    "gateway": "gateway4",
                    "status": "status6",
                    "pgid": "pgid0",
                    "created_at": "created_at2",
                    "updated_at": "updated_at0"
                  },
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
                  }
                ],
                "metadata": {
                  "key0": "metadata7",
                  "key1": "metadata6"
                },
                "automatic_anticipation_settings": {
                  "enabled": false,
                  "type": "type4",
                  "volume_percentage": 242,
                  "delay": 20,
                  "days": [
                    252,
                    253
                  ]
                },
                "transfer_settings": {
                  "transfer_enabled": false,
                  "transfer_interval": "transfer_interval4",
                  "transfer_day": 180
                },
                "code": "code8",
                "payment_mode": "payment_mode4"
              },
              "metadata": {
                "key0": "metadata1",
                "key1": "metadata0",
                "key2": "metadata9"
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
              "key1": "metadata6"
            },
            "automatic_anticipation_settings": {
              "enabled": false,
              "type": "type6",
              "volume_percentage": 84,
              "delay": 206,
              "days": [
                182,
                183
              ]
            },
            "transfer_settings": {
              "transfer_enabled": false,
              "transfer_interval": "transfer_interval4",
              "transfer_day": 250
            },
            "code": "code8",
            "payment_mode": "payment_mode4"
          },
          "gateway_id": "gateway_id2",
          "options": {
            "liable": false,
            "charge_processing_fee": false,
            "charge_remainder_fee": "charge_remainder_fee4"
          },
          "id": "id8"
        },
        {
          "type": "type9",
          "amount": 55,
          "recipient": {
            "id": "id1",
            "name": "name1",
            "email": "email5",
            "document": "document5",
            "description": "description1",
            "type": "type9",
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
                  "recipient": {},
                  "metadata": {
                    "key0": "metadata0"
                  },
                  "pix_key": "pix_key3"
                },
                "gateway_recipients": [
                  {
                    "gateway": "gateway5",
                    "status": "status7",
                    "pgid": "pgid1",
                    "created_at": "created_at3",
                    "updated_at": "updated_at1"
                  }
                ],
                "metadata": {
                  "key0": "metadata8"
                },
                "automatic_anticipation_settings": {
                  "enabled": true,
                  "type": "type5",
                  "volume_percentage": 243,
                  "delay": 21,
                  "days": [
                    253,
                    254,
                    255
                  ]
                },
                "transfer_settings": {
                  "transfer_enabled": true,
                  "transfer_interval": "transfer_interval3",
                  "transfer_day": 179
                },
                "code": "code9",
                "payment_mode": "payment_mode5"
              },
              "metadata": {
                "key0": "metadata0"
              },
              "pix_key": "pix_key3"
            },
            "gateway_recipients": [
              {}
            ],
            "metadata": {
              "key0": "metadata8"
            },
            "automatic_anticipation_settings": {
              "enabled": true,
              "type": "type5",
              "volume_percentage": 83,
              "delay": 207,
              "days": [
                183,
                184,
                185
              ]
            },
            "transfer_settings": {
              "transfer_enabled": true,
              "transfer_interval": "transfer_interval3",
              "transfer_day": 249
            },
            "code": "code9",
            "payment_mode": "payment_mode5"
          },
          "gateway_id": "gateway_id1",
          "options": {
            "liable": true,
            "charge_processing_fee": true,
            "charge_remainder_fee": "charge_remainder_fee5"
          },
          "id": "id9"
        }
      ],
      "next_attempt": "2016-03-13T12:52:32.123Z",
      "transaction_type": "transaction",
      "id": "id5",
      "gateway_response": {
        "code": "code5",
        "errors": [
          {
            "message": "message2"
          },
          {
            "message": "message3"
          },
          {
            "message": "message4"
          }
        ]
      },
      "antifraud_response": {
        "status": "status5",
        "return_code": "return_code3",
        "return_message": "return_message1",
        "provider_name": "provider_name1",
        "score": "score3"
      },
      "metadata": {
        "key0": "metadata4",
        "key1": "metadata3"
      },
      "split": [
        {},
        {}
      ],
      "interest": {
        "days": 27,
        "type": "type5",
        "amount": 101
      },
      "fine": {
        "days": 45,
        "type": "type7",
        "amount": 119
      },
      "max_days_to_pay_past_due": 33
    },
    {
      "gateway_id": "gateway_id6",
      "amount": 122,
      "status": "status8",
      "success": false,
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "attempt_count": 98,
      "max_attempts": 86,
      "splits": [
        {
          "type": "type8",
          "amount": 54,
          "recipient": {
            "id": "id0",
            "name": "name0",
            "email": "email6",
            "document": "document4",
            "description": "description0",
            "type": "type0",
            "status": "status2",
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "deleted_at": "2016-03-13T12:52:32.123Z",
            "default_bank_account": {
              "id": "id8",
              "holder_name": "holder_name4",
              "holder_type": "holder_type0",
              "bank": "bank6",
              "branch_number": "branch_number4",
              "branch_check_digit": "branch_check_digit4",
              "account_number": "account_number8",
              "account_check_digit": "account_check_digit4",
              "type": "type8",
              "status": "status0",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "deleted_at": "2016-03-13T12:52:32.123Z",
              "recipient": {
                "id": "id0",
                "name": "name0",
                "email": "email6",
                "document": "document4",
                "description": "description0",
                "type": "type0",
                "status": "status2",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "deleted_at": "2016-03-13T12:52:32.123Z",
                "default_bank_account": {
                  "id": "id8",
                  "holder_name": "holder_name4",
                  "holder_type": "holder_type0",
                  "bank": "bank6",
                  "branch_number": "branch_number4",
                  "branch_check_digit": "branch_check_digit4",
                  "account_number": "account_number8",
                  "account_check_digit": "account_check_digit4",
                  "type": "type8",
                  "status": "status0",
                  "created_at": "2016-03-13T12:52:32.123Z",
                  "updated_at": "2016-03-13T12:52:32.123Z",
                  "deleted_at": "2016-03-13T12:52:32.123Z",
                  "recipient": {},
                  "metadata": {
                    "key0": "metadata1",
                    "key1": "metadata0",
                    "key2": "metadata9"
                  },
                  "pix_key": "pix_key2"
                },
                "gateway_recipients": [
                  {
                    "gateway": "gateway4",
                    "status": "status6",
                    "pgid": "pgid0",
                    "created_at": "created_at2",
                    "updated_at": "updated_at0"
                  },
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
                  }
                ],
                "metadata": {
                  "key0": "metadata7",
                  "key1": "metadata6"
                },
                "automatic_anticipation_settings": {
                  "enabled": false,
                  "type": "type4",
                  "volume_percentage": 242,
                  "delay": 20,
                  "days": [
                    252,
                    253
                  ]
                },
                "transfer_settings": {
                  "transfer_enabled": false,
                  "transfer_interval": "transfer_interval4",
                  "transfer_day": 180
                },
                "code": "code8",
                "payment_mode": "payment_mode4"
              },
              "metadata": {
                "key0": "metadata1",
                "key1": "metadata0",
                "key2": "metadata9"
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
              "key1": "metadata6"
            },
            "automatic_anticipation_settings": {
              "enabled": false,
              "type": "type6",
              "volume_percentage": 84,
              "delay": 206,
              "days": [
                182,
                183
              ]
            },
            "transfer_settings": {
              "transfer_enabled": false,
              "transfer_interval": "transfer_interval4",
              "transfer_day": 250
            },
            "code": "code8",
            "payment_mode": "payment_mode4"
          },
          "gateway_id": "gateway_id2",
          "options": {
            "liable": false,
            "charge_processing_fee": false,
            "charge_remainder_fee": "charge_remainder_fee4"
          },
          "id": "id8"
        }
      ],
      "next_attempt": "2016-03-13T12:52:32.123Z",
      "transaction_type": "transaction",
      "id": "id6",
      "gateway_response": {
        "code": "code6",
        "errors": [
          {
            "message": "message3"
          }
        ]
      },
      "antifraud_response": {
        "status": "status6",
        "return_code": "return_code4",
        "return_message": "return_message2",
        "provider_name": "provider_name2",
        "score": "score4"
      },
      "metadata": {
        "key0": "metadata3",
        "key1": "metadata2",
        "key2": "metadata1"
      },
      "split": [
        {},
        {},
        {}
      ],
      "interest": {
        "days": 28,
        "type": "type4",
        "amount": 102
      },
      "fine": {
        "days": 46,
        "type": "type8",
        "amount": 120
      },
      "max_days_to_pay_past_due": 34
    }
  ],
  "paging": {
    "total": 6,
    "previous": "previous2",
    "next": "next8"
  }
}
```

