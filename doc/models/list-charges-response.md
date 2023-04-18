
# List Charges Response

Response object for listing charges

## Structure

`ListChargesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetChargeResponse[] \| undefined`](../../doc/models/get-charge-response.md) | Optional | The charge objects |
| `paging` | [`PagingResponse \| undefined`](../../doc/models/paging-response.md) | Optional | Paging object |

## Example (as JSON)

```json
{
  "data": [
    {
      "id": "id5",
      "code": "code3",
      "gateway_id": "gateway_id5",
      "amount": 121,
      "status": "status7",
      "currency": "currency5",
      "payment_method": "payment_method5",
      "due_at": "2016-03-13T12:52:32.123Z",
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "last_transaction": {
        "gateway_id": "gateway_id7",
        "amount": 179,
        "status": "status9",
        "success": true,
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "attempt_count": 155,
        "max_attempts": 143,
        "splits": [
          {
            "type": "type9",
            "amount": 111,
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
                    "key0": "metadata2"
                  },
                  "automatic_anticipation_settings": {
                    "enabled": true,
                    "type": "type5",
                    "volume_percentage": 43,
                    "delay": 77,
                    "days": [
                      53,
                      54,
                      55
                    ]
                  },
                  "transfer_settings": {
                    "transfer_enabled": true,
                    "transfer_interval": "transfer_interval7",
                    "transfer_day": 169
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
                "volume_percentage": 229,
                "delay": 7,
                "days": [
                  239,
                  240,
                  241
                ]
              },
              "transfer_settings": {
                "transfer_enabled": true,
                "transfer_interval": "transfer_interval7",
                "transfer_day": 99
              },
              "code": "code9",
              "payment_mode": "payment_mode5"
            },
            "gateway_id": "gateway_id9",
            "options": {
              "liable": true,
              "charge_processing_fee": true,
              "charge_remainder_fee": "charge_remainder_fee5"
            },
            "id": "id9"
          },
          {
            "type": "type0",
            "amount": 112,
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
                    "recipient": {},
                    "metadata": {
                      "key0": "metadata1",
                      "key1": "metadata2"
                    },
                    "pix_key": "pix_key4"
                  },
                  "gateway_recipients": [
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
                    "key0": "metadata3",
                    "key1": "metadata4"
                  },
                  "automatic_anticipation_settings": {
                    "enabled": false,
                    "type": "type6",
                    "volume_percentage": 44,
                    "delay": 78,
                    "days": [
                      54
                    ]
                  },
                  "transfer_settings": {
                    "transfer_enabled": false,
                    "transfer_interval": "transfer_interval8",
                    "transfer_day": 170
                  },
                  "code": "code0",
                  "payment_mode": "payment_mode6"
                },
                "metadata": {
                  "key0": "metadata1",
                  "key1": "metadata2"
                },
                "pix_key": "pix_key4"
              },
              "gateway_recipients": [
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
                "volume_percentage": 230,
                "delay": 8,
                "days": [
                  240
                ]
              },
              "transfer_settings": {
                "transfer_enabled": false,
                "transfer_interval": "transfer_interval8",
                "transfer_day": 100
              },
              "code": "code0",
              "payment_mode": "payment_mode6"
            },
            "gateway_id": "gateway_id0",
            "options": {
              "liable": false,
              "charge_processing_fee": false,
              "charge_remainder_fee": "charge_remainder_fee6"
            },
            "id": "id0"
          }
        ],
        "next_attempt": "2016-03-13T12:52:32.123Z",
        "transaction_type": "transaction",
        "id": "id7",
        "gateway_response": {
          "code": "code7",
          "errors": [
            {
              "message": "message4"
            },
            {
              "message": "message5"
            }
          ]
        },
        "antifraud_response": {
          "status": "status7",
          "return_code": "return_code5",
          "return_message": "return_message3",
          "provider_name": "provider_name3",
          "score": "score5"
        },
        "metadata": {
          "key0": "metadata8"
        },
        "split": [
          {}
        ],
        "interest": {
          "days": 85,
          "type": "type7",
          "amount": 159
        },
        "fine": {
          "days": 103,
          "type": "type9",
          "amount": 177
        },
        "max_days_to_pay_past_due": 91
      },
      "invoice": {
        "id": "id9",
        "code": "code7",
        "url": "url3",
        "amount": 67,
        "status": "status1",
        "payment_method": "payment_method9",
        "created_at": "2016-03-13T12:52:32.123Z",
        "items": [
          {
            "amount": 126,
            "description": "description6",
            "pricing_scheme": {
              "price": 230,
              "scheme_type": "scheme_type8",
              "price_brackets": [
                {
                  "start_quantity": 183,
                  "price": 121,
                  "end_quantity": 191,
                  "overage_price": 205
                },
                {
                  "start_quantity": 184,
                  "price": 122,
                  "end_quantity": 192,
                  "overage_price": 206
                },
                {
                  "start_quantity": 185,
                  "price": 123,
                  "end_quantity": 193,
                  "overage_price": 207
                }
              ],
              "minimum_price": 70,
              "percentage": 101.36
            },
            "price_bracket": {},
            "quantity": 240,
            "name": "name6",
            "subscription_item_id": "subscription_item_id0"
          },
          {
            "amount": 127,
            "description": "description7",
            "pricing_scheme": {
              "price": 231,
              "scheme_type": "scheme_type9",
              "price_brackets": [
                {
                  "start_quantity": 184,
                  "price": 122,
                  "end_quantity": 192,
                  "overage_price": 206
                }
              ],
              "minimum_price": 71,
              "percentage": 101.37
            },
            "price_bracket": {},
            "quantity": 241,
            "name": "name7",
            "subscription_item_id": "subscription_item_id1"
          }
        ],
        "customer": {
          "id": "id9",
          "name": "name9",
          "email": "email3",
          "delinquent": true,
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "document": "document3",
          "type": "type9",
          "fb_access_token": "fb_access_token3",
          "address": {
            "id": "id5",
            "street": "street5",
            "number": "number3",
            "complement": "complement1",
            "zip_code": "zip_code9",
            "neighborhood": "neighborhood1",
            "city": "city5",
            "state": "state1",
            "country": "country9",
            "status": "status7",
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "customer": {
              "id": "id5",
              "name": "name5",
              "email": "email9",
              "delinquent": true,
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "document": "document9",
              "type": "type5",
              "fb_access_token": "fb_access_token9",
              "address": {
                "id": "id1",
                "street": "street1",
                "number": "number9",
                "complement": "complement7",
                "zip_code": "zip_code5",
                "neighborhood": "neighborhood7",
                "city": "city1",
                "state": "state7",
                "country": "country5",
                "status": "status3",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "customer": {},
                "metadata": {
                  "key0": "metadata2"
                },
                "line_1": "line_15",
                "line_2": "line_29",
                "deleted_at": "2016-03-13T12:52:32.123Z"
              },
              "metadata": {
                "key0": "metadata6"
              },
              "phones": {
                "home_phone": {
                  "country_code": "country_code7",
                  "number": "number5",
                  "area_code": "area_code7"
                },
                "mobile_phone": {
                  "country_code": "country_code7",
                  "number": "number5",
                  "area_code": "area_code7"
                }
              },
              "fb_id": 149,
              "code": "code3",
              "document_type": "document_type3"
            },
            "metadata": {
              "key0": "metadata6",
              "key1": "metadata7",
              "key2": "metadata8"
            },
            "line_1": "line_19",
            "line_2": "line_23",
            "deleted_at": "2016-03-13T12:52:32.123Z"
          },
          "metadata": {
            "key0": "metadata0",
            "key1": "metadata9",
            "key2": "metadata8"
          },
          "phones": {
            "home_phone": {},
            "mobile_phone": {}
          },
          "fb_id": 99,
          "code": "code7",
          "document_type": "document_type7"
        },
        "charge": {
          "id": "id1",
          "code": "code9",
          "gateway_id": "gateway_id9",
          "amount": 197,
          "status": "status3",
          "currency": "currency1",
          "payment_method": "payment_method9",
          "due_at": "2016-03-13T12:52:32.123Z",
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "last_transaction": {
            "gateway_id": "gateway_id3",
            "amount": 255,
            "status": "status5",
            "success": true,
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "attempt_count": 231,
            "max_attempts": 219,
            "splits": [
              {}
            ],
            "next_attempt": "2016-03-13T12:52:32.123Z",
            "transaction_type": "transaction",
            "id": "id3",
            "gateway_response": {
              "code": "code3",
              "errors": [
                {}
              ]
            },
            "antifraud_response": {
              "status": "status3",
              "return_code": "return_code1",
              "return_message": "return_message9",
              "provider_name": "provider_name9",
              "score": "score1"
            },
            "metadata": {
              "key0": "metadata6",
              "key1": "metadata5",
              "key2": "metadata4"
            },
            "split": [
              {},
              {},
              {}
            ],
            "interest": {
              "days": 161,
              "type": "type7",
              "amount": 235
            },
            "fine": {
              "days": 179,
              "type": "type5",
              "amount": 253
            },
            "max_days_to_pay_past_due": 167
          },
          "invoice": {
            "id": "id5",
            "code": "code3",
            "url": "url9",
            "amount": 143,
            "status": "status7",
            "payment_method": "payment_method5",
            "created_at": "2016-03-13T12:52:32.123Z",
            "items": [
              {}
            ],
            "customer": {},
            "charge": {},
            "installments": 183,
            "billing_address": {
              "street": "street7",
              "number": "number5",
              "zip_code": "zip_code1",
              "neighborhood": "neighborhood3",
              "city": "city3",
              "state": "state7",
              "country": "country1",
              "complement": "complement7",
              "line_1": "line_19",
              "line_2": "line_25"
            },
            "subscription": {
              "id": "id9",
              "code": "code7",
              "start_at": "2016-03-13T12:52:32.123Z",
              "interval": "interval7",
              "interval_count": 45,
              "billing_type": "billing_type7",
              "current_cycle": {
                "start_at": "2016-03-13T12:52:32.123Z",
                "end_at": "2016-03-13T12:52:32.123Z",
                "id": "id7",
                "billing_at": "2016-03-13T12:52:32.123Z",
                "subscription": {
                  "id": "id7",
                  "code": "code5",
                  "start_at": "2016-03-13T12:52:32.123Z",
                  "interval": "interval5",
                  "interval_count": 61,
                  "billing_type": "billing_type9",
                  "current_cycle": {
                    "start_at": "2016-03-13T12:52:32.123Z",
                    "end_at": "2016-03-13T12:52:32.123Z",
                    "id": "id5",
                    "billing_at": "2016-03-13T12:52:32.123Z",
                    "subscription": {},
                    "status": "status7",
                    "duration": 45,
                    "created_at": "created_at3",
                    "updated_at": "updated_at1",
                    "cycle": 241
                  },
                  "payment_method": "payment_method3",
                  "currency": "currency7",
                  "installments": 229,
                  "status": "status1",
                  "created_at": "2016-03-13T12:52:32.123Z",
                  "updated_at": "2016-03-13T12:52:32.123Z",
                  "customer": {},
                  "card": {
                    "id": "id9",
                    "last_four_digits": "last_four_digits5",
                    "brand": "brand3",
                    "holder_name": "holder_name5",
                    "exp_month": 207,
                    "exp_year": 89,
                    "status": "status9",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "updated_at": "2016-03-13T12:52:32.123Z",
                    "billing_address": {
                      "street": "street9",
                      "number": "number3",
                      "zip_code": "zip_code3",
                      "neighborhood": "neighborhood5",
                      "city": "city1",
                      "state": "state5",
                      "country": "country3",
                      "complement": "complement5",
                      "line_1": "line_17",
                      "line_2": "line_27"
                    },
                    "customer": {},
                    "metadata": {
                      "key0": "metadata4",
                      "key1": "metadata5"
                    },
                    "type": "type1",
                    "holder_document": "holder_document7",
                    "deleted_at": "2016-03-13T12:52:32.123Z",
                    "first_six_digits": "first_six_digits9",
                    "label": "label9"
                  },
                  "items": [
                    {
                      "id": "id4",
                      "description": "description4",
                      "status": "status6",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "pricing_scheme": {},
                      "discounts": [
                        {
                          "id": "id5",
                          "value": 166.77,
                          "discount_type": "discount_type3",
                          "status": "status7",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 61,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description5",
                          "subscription": {},
                          "subscription_item": {
                            "id": "id1",
                            "description": "description1",
                            "status": "status3",
                            "created_at": "2016-03-13T12:52:32.123Z",
                            "updated_at": "2016-03-13T12:52:32.123Z",
                            "pricing_scheme": {},
                            "discounts": [
                              {
                                "id": "id2",
                                "value": 201.84,
                                "discount_type": "discount_type0",
                                "status": "status4",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 240,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description2",
                                "subscription": {},
                                "subscription_item": {}
                              },
                              {
                                "id": "id3",
                                "value": 201.85,
                                "discount_type": "discount_type1",
                                "status": "status5",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 241,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description3",
                                "subscription": {},
                                "subscription_item": {}
                              },
                              {
                                "id": "id4",
                                "value": 201.86,
                                "discount_type": "discount_type2",
                                "status": "status6",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 242,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description4",
                                "subscription": {},
                                "subscription_item": {}
                              }
                            ],
                            "increments": [
                              {
                                "id": "id0",
                                "value": 57.12,
                                "increment_type": "increment_type2",
                                "status": "status2",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 104,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description0",
                                "subscription": {},
                                "subscription_item": {}
                              }
                            ],
                            "subscription": {},
                            "name": "name1",
                            "quantity": 29,
                            "cycles": 49,
                            "deleted_at": "2016-03-13T12:52:32.123Z"
                          }
                        }
                      ],
                      "increments": [
                        {},
                        {}
                      ],
                      "subscription": {},
                      "name": "name4",
                      "quantity": 106,
                      "cycles": 130,
                      "deleted_at": "2016-03-13T12:52:32.123Z"
                    },
                    {
                      "id": "id5",
                      "description": "description5",
                      "status": "status7",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "pricing_scheme": {},
                      "discounts": [
                        {
                          "id": "id6",
                          "value": 166.78,
                          "discount_type": "discount_type4",
                          "status": "status8",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 62,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description6",
                          "subscription": {},
                          "subscription_item": {
                            "id": "id2",
                            "description": "description2",
                            "status": "status4",
                            "created_at": "2016-03-13T12:52:32.123Z",
                            "updated_at": "2016-03-13T12:52:32.123Z",
                            "pricing_scheme": {},
                            "discounts": [
                              {
                                "id": "id3",
                                "value": 201.85,
                                "discount_type": "discount_type1",
                                "status": "status5",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 241,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description3",
                                "subscription": {},
                                "subscription_item": {}
                              }
                            ],
                            "increments": [
                              {
                                "id": "id1",
                                "value": 57.13,
                                "increment_type": "increment_type3",
                                "status": "status3",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 105,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description1",
                                "subscription": {},
                                "subscription_item": {}
                              },
                              {
                                "id": "id2",
                                "value": 57.14,
                                "increment_type": "increment_type4",
                                "status": "status4",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 106,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description2",
                                "subscription": {},
                                "subscription_item": {}
                              }
                            ],
                            "subscription": {},
                            "name": "name2",
                            "quantity": 30,
                            "cycles": 50,
                            "deleted_at": "2016-03-13T12:52:32.123Z"
                          }
                        },
                        {
                          "id": "id7",
                          "value": 166.79,
                          "discount_type": "discount_type5",
                          "status": "status9",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 63,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description7",
                          "subscription": {},
                          "subscription_item": {
                            "id": "id3",
                            "description": "description3",
                            "status": "status5",
                            "created_at": "2016-03-13T12:52:32.123Z",
                            "updated_at": "2016-03-13T12:52:32.123Z",
                            "pricing_scheme": {},
                            "discounts": [
                              {
                                "id": "id4",
                                "value": 201.86,
                                "discount_type": "discount_type2",
                                "status": "status6",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 242,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description4",
                                "subscription": {},
                                "subscription_item": {}
                              },
                              {
                                "id": "id5",
                                "value": 201.87,
                                "discount_type": "discount_type3",
                                "status": "status7",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 243,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description5",
                                "subscription": {},
                                "subscription_item": {}
                              }
                            ],
                            "increments": [
                              {
                                "id": "id2",
                                "value": 57.14,
                                "increment_type": "increment_type4",
                                "status": "status4",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 106,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description2",
                                "subscription": {},
                                "subscription_item": {}
                              },
                              {
                                "id": "id3",
                                "value": 57.15,
                                "increment_type": "increment_type5",
                                "status": "status5",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 107,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description3",
                                "subscription": {},
                                "subscription_item": {}
                              },
                              {
                                "id": "id4",
                                "value": 57.16,
                                "increment_type": "increment_type6",
                                "status": "status6",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 108,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description4",
                                "subscription": {},
                                "subscription_item": {}
                              }
                            ],
                            "subscription": {},
                            "name": "name3",
                            "quantity": 31,
                            "cycles": 51,
                            "deleted_at": "2016-03-13T12:52:32.123Z"
                          }
                        }
                      ],
                      "increments": [
                        {},
                        {},
                        {}
                      ],
                      "subscription": {},
                      "name": "name5",
                      "quantity": 107,
                      "cycles": 129,
                      "deleted_at": "2016-03-13T12:52:32.123Z"
                    },
                    {
                      "id": "id6",
                      "description": "description6",
                      "status": "status8",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "pricing_scheme": {},
                      "discounts": [
                        {
                          "id": "id7",
                          "value": 166.79,
                          "discount_type": "discount_type5",
                          "status": "status9",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 63,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description7",
                          "subscription": {},
                          "subscription_item": {
                            "id": "id3",
                            "description": "description3",
                            "status": "status5",
                            "created_at": "2016-03-13T12:52:32.123Z",
                            "updated_at": "2016-03-13T12:52:32.123Z",
                            "pricing_scheme": {},
                            "discounts": [
                              {
                                "id": "id4",
                                "value": 201.86,
                                "discount_type": "discount_type2",
                                "status": "status6",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 242,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description4",
                                "subscription": {},
                                "subscription_item": {}
                              },
                              {
                                "id": "id5",
                                "value": 201.87,
                                "discount_type": "discount_type3",
                                "status": "status7",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 243,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description5",
                                "subscription": {},
                                "subscription_item": {}
                              }
                            ],
                            "increments": [
                              {
                                "id": "id2",
                                "value": 57.14,
                                "increment_type": "increment_type4",
                                "status": "status4",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 106,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description2",
                                "subscription": {},
                                "subscription_item": {}
                              },
                              {
                                "id": "id3",
                                "value": 57.15,
                                "increment_type": "increment_type5",
                                "status": "status5",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 107,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description3",
                                "subscription": {},
                                "subscription_item": {}
                              },
                              {
                                "id": "id4",
                                "value": 57.16,
                                "increment_type": "increment_type6",
                                "status": "status6",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 108,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description4",
                                "subscription": {},
                                "subscription_item": {}
                              }
                            ],
                            "subscription": {},
                            "name": "name3",
                            "quantity": 31,
                            "cycles": 51,
                            "deleted_at": "2016-03-13T12:52:32.123Z"
                          }
                        },
                        {
                          "id": "id8",
                          "value": 166.8,
                          "discount_type": "discount_type6",
                          "status": "status0",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 64,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description8",
                          "subscription": {},
                          "subscription_item": {
                            "id": "id4",
                            "description": "description4",
                            "status": "status6",
                            "created_at": "2016-03-13T12:52:32.123Z",
                            "updated_at": "2016-03-13T12:52:32.123Z",
                            "pricing_scheme": {},
                            "discounts": [
                              {
                                "id": "id5",
                                "value": 201.87,
                                "discount_type": "discount_type3",
                                "status": "status7",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 243,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description5",
                                "subscription": {},
                                "subscription_item": {}
                              },
                              {
                                "id": "id6",
                                "value": 201.88,
                                "discount_type": "discount_type4",
                                "status": "status8",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 244,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description6",
                                "subscription": {},
                                "subscription_item": {}
                              },
                              {
                                "id": "id7",
                                "value": 201.89,
                                "discount_type": "discount_type5",
                                "status": "status9",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 245,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description7",
                                "subscription": {},
                                "subscription_item": {}
                              }
                            ],
                            "increments": [
                              {
                                "id": "id3",
                                "value": 57.15,
                                "increment_type": "increment_type5",
                                "status": "status5",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 107,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description3",
                                "subscription": {},
                                "subscription_item": {}
                              }
                            ],
                            "subscription": {},
                            "name": "name4",
                            "quantity": 32,
                            "cycles": 52,
                            "deleted_at": "2016-03-13T12:52:32.123Z"
                          }
                        },
                        {
                          "id": "id9",
                          "value": 166.81,
                          "discount_type": "discount_type7",
                          "status": "status1",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 65,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description9",
                          "subscription": {},
                          "subscription_item": {
                            "id": "id5",
                            "description": "description5",
                            "status": "status7",
                            "created_at": "2016-03-13T12:52:32.123Z",
                            "updated_at": "2016-03-13T12:52:32.123Z",
                            "pricing_scheme": {},
                            "discounts": [
                              {
                                "id": "id6",
                                "value": 201.88,
                                "discount_type": "discount_type4",
                                "status": "status8",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 244,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description6",
                                "subscription": {},
                                "subscription_item": {}
                              }
                            ],
                            "increments": [
                              {
                                "id": "id4",
                                "value": 57.16,
                                "increment_type": "increment_type6",
                                "status": "status6",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 108,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description4",
                                "subscription": {},
                                "subscription_item": {}
                              },
                              {
                                "id": "id5",
                                "value": 57.17,
                                "increment_type": "increment_type7",
                                "status": "status7",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 109,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description5",
                                "subscription": {},
                                "subscription_item": {}
                              }
                            ],
                            "subscription": {},
                            "name": "name5",
                            "quantity": 33,
                            "cycles": 53,
                            "deleted_at": "2016-03-13T12:52:32.123Z"
                          }
                        }
                      ],
                      "increments": [
                        {}
                      ],
                      "subscription": {},
                      "name": "name6",
                      "quantity": 108,
                      "cycles": 128,
                      "deleted_at": "2016-03-13T12:52:32.123Z"
                    }
                  ],
                  "statement_descriptor": "statement_descriptor7",
                  "metadata": {
                    "key0": "metadata6",
                    "key1": "metadata7"
                  },
                  "setup": {
                    "id": "id1",
                    "description": "description9",
                    "amount": 253,
                    "status": "status7"
                  },
                  "gateway_affiliation_id": "gateway_affiliation_id3",
                  "next_billing_at": "2016-03-13T12:52:32.123Z",
                  "billing_day": 55,
                  "minimum_price": 197,
                  "canceled_at": "2016-03-13T12:52:32.123Z",
                  "discounts": [
                    {}
                  ],
                  "increments": [
                    {},
                    {},
                    {}
                  ],
                  "boleto_due_days": 173,
                  "split": {
                    "enabled": true,
                    "rules": [
                      {},
                      {},
                      {}
                    ]
                  },
                  "boleto": {
                    "interest": {},
                    "fine": {},
                    "max_days_to_pay_past_due": 105
                  },
                  "manual_billing": true
                },
                "status": "status9",
                "duration": 29,
                "created_at": "created_at5",
                "updated_at": "updated_at3",
                "cycle": 225
              },
              "payment_method": "payment_method1",
              "currency": "currency9",
              "installments": 213,
              "status": "status9",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "customer": {},
              "card": {
                "id": "id7",
                "last_four_digits": "last_four_digits3",
                "brand": "brand1",
                "holder_name": "holder_name7",
                "exp_month": 191,
                "exp_year": 105,
                "status": "status1",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "billing_address": {},
                "customer": {},
                "metadata": {
                  "key0": "metadata6",
                  "key1": "metadata7"
                },
                "type": "type3",
                "holder_document": "holder_document9",
                "deleted_at": "2016-03-13T12:52:32.123Z",
                "first_six_digits": "first_six_digits7",
                "label": "label7"
              },
              "items": [
                {},
                {},
                {}
              ],
              "statement_descriptor": "statement_descriptor9",
              "metadata": {
                "key0": "metadata4",
                "key1": "metadata5"
              },
              "setup": {
                "id": "id3",
                "description": "description7",
                "amount": 237,
                "status": "status5"
              },
              "gateway_affiliation_id": "gateway_affiliation_id5",
              "next_billing_at": "2016-03-13T12:52:32.123Z",
              "billing_day": 71,
              "minimum_price": 213,
              "canceled_at": "2016-03-13T12:52:32.123Z",
              "discounts": [
                {}
              ],
              "increments": [
                {},
                {},
                {}
              ],
              "boleto_due_days": 157,
              "split": {
                "enabled": true,
                "rules": [
                  {},
                  {},
                  {}
                ]
              },
              "boleto": {
                "interest": {},
                "fine": {},
                "max_days_to_pay_past_due": 89
              },
              "manual_billing": true
            },
            "cycle": {},
            "shipping": {
              "amount": 241,
              "description": "description9",
              "recipient_name": "recipient_name7",
              "recipient_phone": "recipient_phone1",
              "address": {},
              "max_delivery_date": "2016-03-13T12:52:32.123Z",
              "estimated_delivery_date": "2016-03-13T12:52:32.123Z",
              "type": "type9"
            },
            "metadata": {
              "key0": "metadata2"
            },
            "due_at": "2016-03-13T12:52:32.123Z",
            "canceled_at": "2016-03-13T12:52:32.123Z",
            "billing_at": "2016-03-13T12:52:32.123Z",
            "seen_at": "2016-03-13T12:52:32.123Z",
            "total_discount": 251,
            "total_increment": 67,
            "subscription_id": "subscription_id5"
          },
          "order": {
            "id": "id5",
            "code": "code3",
            "currency": "currency5",
            "items": [
              {
                "id": "id2",
                "amount": 58,
                "description": "description2",
                "quantity": 172,
                "category": "category0",
                "code": "code0"
              },
              {
                "id": "id3",
                "amount": 59,
                "description": "description3",
                "quantity": 173,
                "category": "category1",
                "code": "code1"
              }
            ],
            "customer": {},
            "status": "status3",
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "charges": [
              {},
              {}
            ],
            "invoice_url": "invoice_url7",
            "shipping": {
              "amount": 97,
              "description": "description9",
              "recipient_name": "recipient_name7",
              "recipient_phone": "recipient_phone1",
              "address": {},
              "max_delivery_date": "2016-03-13T12:52:32.123Z",
              "estimated_delivery_date": "2016-03-13T12:52:32.123Z",
              "type": "type1"
            },
            "metadata": {
              "key0": "metadata8",
              "key1": "metadata9",
              "key2": "metadata0"
            },
            "checkouts": [
              {
                "id": "id2",
                "amount": 8,
                "default_payment_method": "default_payment_method2",
                "success_url": "success_url4",
                "payment_url": "payment_url6",
                "gateway_affiliation_id": "gateway_affiliation_id8",
                "accepted_payment_methods": [
                  "accepted_payment_methods5",
                  "accepted_payment_methods6",
                  "accepted_payment_methods7"
                ],
                "status": "status4",
                "skip_checkout_success_page": false,
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "canceled_at": "2016-03-13T12:52:32.123Z",
                "customer_editable": false,
                "customer": {},
                "billingaddress": {},
                "credit_card": {
                  "statementDescriptor": "statementDescriptor6",
                  "installments": [
                    {
                      "number": "number3",
                      "total": 221
                    }
                  ],
                  "authentication": {
                    "type": "type8",
                    "threed_secure": {
                      "mpi": "mpi2",
                      "eci": "eci0",
                      "cavv": "cavv6",
                      "transaction_Id": "transaction_Id4",
                      "success_url": "success_url2"
                    }
                  }
                },
                "boleto": {
                  "due_at": "2016-03-13T12:52:32.123Z",
                  "instructions": "instructions0"
                },
                "billing_address_editable": false,
                "shipping": {},
                "shippable": false,
                "closed_at": "2016-03-13T12:52:32.123Z",
                "expires_at": "2016-03-13T12:52:32.123Z",
                "currency": "currency2",
                "debit_card": {
                  "statement_descriptor": "statement_descriptor6",
                  "authentication": {
                    "type": "type2",
                    "threed_secure": {
                      "mpi": "mpi8",
                      "eci": "eci4",
                      "cavv": "cavv0",
                      "transaction_Id": "transaction_Id0",
                      "success_url": "success_url6"
                    }
                  }
                },
                "bank_transfer": {
                  "bank": [
                    "bank7",
                    "bank8"
                  ]
                },
                "accepted_brands": [
                  "accepted_brands8",
                  "accepted_brands9",
                  "accepted_brands0"
                ],
                "pix": {
                  "expires_at": "2016-03-13T12:52:32.123Z",
                  "additional_information": [
                    {
                      "Name": "Name9",
                      "Value": "Value7"
                    },
                    {
                      "Name": "Name0",
                      "Value": "Value8"
                    },
                    {
                      "Name": "Name1",
                      "Value": "Value9"
                    }
                  ]
                }
              }
            ],
            "ip": "ip9",
            "session_id": "session_id3",
            "location": {
              "latitude": "latitude7",
              "longitude": "longitude3"
            },
            "device": {
              "platform": "platform5"
            },
            "closed": true
          },
          "customer": {},
          "metadata": {
            "key0": "metadata8"
          },
          "paid_at": "2016-03-13T12:52:32.123Z",
          "canceled_at": "2016-03-13T12:52:32.123Z",
          "canceled_amount": 51,
          "paid_amount": 33,
          "interest_and_fine_paid": 37,
          "recurrency_cycle": "recurrency_cycle5"
        },
        "installments": 107,
        "billing_address": {},
        "subscription": {},
        "cycle": {},
        "shipping": {},
        "metadata": {
          "key0": "metadata0",
          "key1": "metadata9"
        },
        "due_at": "2016-03-13T12:52:32.123Z",
        "canceled_at": "2016-03-13T12:52:32.123Z",
        "billing_at": "2016-03-13T12:52:32.123Z",
        "seen_at": "2016-03-13T12:52:32.123Z",
        "total_discount": 175,
        "total_increment": 247,
        "subscription_id": "subscription_id9"
      },
      "order": {
        "id": "id9",
        "code": "code7",
        "currency": "currency9",
        "items": [
          {},
          {},
          {}
        ],
        "customer": {},
        "status": "status1",
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "charges": [
          {}
        ],
        "invoice_url": "invoice_url1",
        "shipping": {},
        "metadata": {
          "key0": "metadata6",
          "key1": "metadata5"
        },
        "checkouts": [
          {},
          {}
        ],
        "ip": "ip3",
        "session_id": "session_id1",
        "location": {
          "latitude": "latitude7",
          "longitude": "longitude7"
        },
        "device": {
          "platform": "platform9"
        },
        "closed": true
      },
      "customer": {},
      "metadata": {
        "key0": "metadata4",
        "key1": "metadata3"
      },
      "paid_at": "2016-03-13T12:52:32.123Z",
      "canceled_at": "2016-03-13T12:52:32.123Z",
      "canceled_amount": 231,
      "paid_amount": 213,
      "interest_and_fine_paid": 217,
      "recurrency_cycle": "recurrency_cycle9"
    },
    {
      "id": "id6",
      "code": "code4",
      "gateway_id": "gateway_id6",
      "amount": 122,
      "status": "status8",
      "currency": "currency6",
      "payment_method": "payment_method6",
      "due_at": "2016-03-13T12:52:32.123Z",
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "last_transaction": {
        "gateway_id": "gateway_id8",
        "amount": 180,
        "status": "status0",
        "success": false,
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "attempt_count": 156,
        "max_attempts": 144,
        "splits": [
          {
            "type": "type0",
            "amount": 112,
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
                    "recipient": {},
                    "metadata": {
                      "key0": "metadata1",
                      "key1": "metadata2"
                    },
                    "pix_key": "pix_key4"
                  },
                  "gateway_recipients": [
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
                    "key0": "metadata3",
                    "key1": "metadata4"
                  },
                  "automatic_anticipation_settings": {
                    "enabled": false,
                    "type": "type6",
                    "volume_percentage": 44,
                    "delay": 78,
                    "days": [
                      54
                    ]
                  },
                  "transfer_settings": {
                    "transfer_enabled": false,
                    "transfer_interval": "transfer_interval8",
                    "transfer_day": 170
                  },
                  "code": "code0",
                  "payment_mode": "payment_mode6"
                },
                "metadata": {
                  "key0": "metadata1",
                  "key1": "metadata2"
                },
                "pix_key": "pix_key4"
              },
              "gateway_recipients": [
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
                "volume_percentage": 230,
                "delay": 8,
                "days": [
                  240
                ]
              },
              "transfer_settings": {
                "transfer_enabled": false,
                "transfer_interval": "transfer_interval8",
                "transfer_day": 100
              },
              "code": "code0",
              "payment_mode": "payment_mode6"
            },
            "gateway_id": "gateway_id0",
            "options": {
              "liable": false,
              "charge_processing_fee": false,
              "charge_remainder_fee": "charge_remainder_fee6"
            },
            "id": "id0"
          },
          {
            "type": "type1",
            "amount": 113,
            "recipient": {
              "id": "id3",
              "name": "name3",
              "email": "email7",
              "document": "document7",
              "description": "description3",
              "type": "type3",
              "status": "status5",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "deleted_at": "2016-03-13T12:52:32.123Z",
              "default_bank_account": {
                "id": "id1",
                "holder_name": "holder_name7",
                "holder_type": "holder_type3",
                "bank": "bank9",
                "branch_number": "branch_number7",
                "branch_check_digit": "branch_check_digit7",
                "account_number": "account_number1",
                "account_check_digit": "account_check_digit7",
                "type": "type1",
                "status": "status3",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "deleted_at": "2016-03-13T12:52:32.123Z",
                "recipient": {
                  "id": "id3",
                  "name": "name3",
                  "email": "email7",
                  "document": "document7",
                  "description": "description3",
                  "type": "type3",
                  "status": "status5",
                  "created_at": "2016-03-13T12:52:32.123Z",
                  "updated_at": "2016-03-13T12:52:32.123Z",
                  "deleted_at": "2016-03-13T12:52:32.123Z",
                  "default_bank_account": {
                    "id": "id1",
                    "holder_name": "holder_name7",
                    "holder_type": "holder_type3",
                    "bank": "bank9",
                    "branch_number": "branch_number7",
                    "branch_check_digit": "branch_check_digit7",
                    "account_number": "account_number1",
                    "account_check_digit": "account_check_digit7",
                    "type": "type1",
                    "status": "status3",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "updated_at": "2016-03-13T12:52:32.123Z",
                    "deleted_at": "2016-03-13T12:52:32.123Z",
                    "recipient": {},
                    "metadata": {
                      "key0": "metadata2",
                      "key1": "metadata3",
                      "key2": "metadata4"
                    },
                    "pix_key": "pix_key5"
                  },
                  "gateway_recipients": [
                    {
                      "gateway": "gateway7",
                      "status": "status9",
                      "pgid": "pgid3",
                      "created_at": "created_at5",
                      "updated_at": "updated_at3"
                    },
                    {
                      "gateway": "gateway8",
                      "status": "status0",
                      "pgid": "pgid4",
                      "created_at": "created_at6",
                      "updated_at": "updated_at4"
                    },
                    {
                      "gateway": "gateway9",
                      "status": "status1",
                      "pgid": "pgid5",
                      "created_at": "created_at7",
                      "updated_at": "updated_at5"
                    }
                  ],
                  "metadata": {
                    "key0": "metadata4",
                    "key1": "metadata5",
                    "key2": "metadata6"
                  },
                  "automatic_anticipation_settings": {
                    "enabled": true,
                    "type": "type7",
                    "volume_percentage": 45,
                    "delay": 79,
                    "days": [
                      55,
                      56
                    ]
                  },
                  "transfer_settings": {
                    "transfer_enabled": true,
                    "transfer_interval": "transfer_interval9",
                    "transfer_day": 171
                  },
                  "code": "code1",
                  "payment_mode": "payment_mode7"
                },
                "metadata": {
                  "key0": "metadata2",
                  "key1": "metadata3",
                  "key2": "metadata4"
                },
                "pix_key": "pix_key5"
              },
              "gateway_recipients": [
                {},
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
                "volume_percentage": 231,
                "delay": 9,
                "days": [
                  241,
                  242
                ]
              },
              "transfer_settings": {
                "transfer_enabled": true,
                "transfer_interval": "transfer_interval9",
                "transfer_day": 101
              },
              "code": "code1",
              "payment_mode": "payment_mode7"
            },
            "gateway_id": "gateway_id1",
            "options": {
              "liable": true,
              "charge_processing_fee": true,
              "charge_remainder_fee": "charge_remainder_fee7"
            },
            "id": "id1"
          },
          {
            "type": "type2",
            "amount": 114,
            "recipient": {
              "id": "id4",
              "name": "name4",
              "email": "email8",
              "document": "document8",
              "description": "description4",
              "type": "type4",
              "status": "status6",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "deleted_at": "2016-03-13T12:52:32.123Z",
              "default_bank_account": {
                "id": "id2",
                "holder_name": "holder_name8",
                "holder_type": "holder_type4",
                "bank": "bank0",
                "branch_number": "branch_number8",
                "branch_check_digit": "branch_check_digit8",
                "account_number": "account_number2",
                "account_check_digit": "account_check_digit8",
                "type": "type2",
                "status": "status4",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "deleted_at": "2016-03-13T12:52:32.123Z",
                "recipient": {
                  "id": "id4",
                  "name": "name4",
                  "email": "email8",
                  "document": "document8",
                  "description": "description4",
                  "type": "type4",
                  "status": "status6",
                  "created_at": "2016-03-13T12:52:32.123Z",
                  "updated_at": "2016-03-13T12:52:32.123Z",
                  "deleted_at": "2016-03-13T12:52:32.123Z",
                  "default_bank_account": {
                    "id": "id2",
                    "holder_name": "holder_name8",
                    "holder_type": "holder_type4",
                    "bank": "bank0",
                    "branch_number": "branch_number8",
                    "branch_check_digit": "branch_check_digit8",
                    "account_number": "account_number2",
                    "account_check_digit": "account_check_digit8",
                    "type": "type2",
                    "status": "status4",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "updated_at": "2016-03-13T12:52:32.123Z",
                    "deleted_at": "2016-03-13T12:52:32.123Z",
                    "recipient": {},
                    "metadata": {
                      "key0": "metadata3"
                    },
                    "pix_key": "pix_key6"
                  },
                  "gateway_recipients": [
                    {
                      "gateway": "gateway8",
                      "status": "status0",
                      "pgid": "pgid4",
                      "created_at": "created_at6",
                      "updated_at": "updated_at4"
                    }
                  ],
                  "metadata": {
                    "key0": "metadata5"
                  },
                  "automatic_anticipation_settings": {
                    "enabled": false,
                    "type": "type8",
                    "volume_percentage": 46,
                    "delay": 80,
                    "days": [
                      56,
                      57,
                      58
                    ]
                  },
                  "transfer_settings": {
                    "transfer_enabled": false,
                    "transfer_interval": "transfer_interval0",
                    "transfer_day": 172
                  },
                  "code": "code2",
                  "payment_mode": "payment_mode8"
                },
                "metadata": {
                  "key0": "metadata3"
                },
                "pix_key": "pix_key6"
              },
              "gateway_recipients": [
                {}
              ],
              "metadata": {
                "key0": "metadata5"
              },
              "automatic_anticipation_settings": {
                "enabled": false,
                "type": "type8",
                "volume_percentage": 232,
                "delay": 10,
                "days": [
                  242,
                  243,
                  244
                ]
              },
              "transfer_settings": {
                "transfer_enabled": false,
                "transfer_interval": "transfer_interval0",
                "transfer_day": 102
              },
              "code": "code2",
              "payment_mode": "payment_mode8"
            },
            "gateway_id": "gateway_id2",
            "options": {
              "liable": false,
              "charge_processing_fee": false,
              "charge_remainder_fee": "charge_remainder_fee8"
            },
            "id": "id2"
          }
        ],
        "next_attempt": "2016-03-13T12:52:32.123Z",
        "transaction_type": "transaction",
        "id": "id8",
        "gateway_response": {
          "code": "code8",
          "errors": [
            {
              "message": "message5"
            },
            {
              "message": "message6"
            },
            {
              "message": "message7"
            }
          ]
        },
        "antifraud_response": {
          "status": "status8",
          "return_code": "return_code6",
          "return_message": "return_message4",
          "provider_name": "provider_name4",
          "score": "score6"
        },
        "metadata": {
          "key0": "metadata9",
          "key1": "metadata0"
        },
        "split": [
          {},
          {}
        ],
        "interest": {
          "days": 86,
          "type": "type8",
          "amount": 160
        },
        "fine": {
          "days": 104,
          "type": "type0",
          "amount": 178
        },
        "max_days_to_pay_past_due": 92
      },
      "invoice": {
        "id": "id0",
        "code": "code8",
        "url": "url4",
        "amount": 68,
        "status": "status2",
        "payment_method": "payment_method0",
        "created_at": "2016-03-13T12:52:32.123Z",
        "items": [
          {
            "amount": 127,
            "description": "description7",
            "pricing_scheme": {
              "price": 231,
              "scheme_type": "scheme_type9",
              "price_brackets": [
                {
                  "start_quantity": 184,
                  "price": 122,
                  "end_quantity": 192,
                  "overage_price": 206
                }
              ],
              "minimum_price": 71,
              "percentage": 101.37
            },
            "price_bracket": {},
            "quantity": 241,
            "name": "name7",
            "subscription_item_id": "subscription_item_id1"
          },
          {
            "amount": 128,
            "description": "description8",
            "pricing_scheme": {
              "price": 232,
              "scheme_type": "scheme_type0",
              "price_brackets": [
                {
                  "start_quantity": 185,
                  "price": 123,
                  "end_quantity": 193,
                  "overage_price": 207
                },
                {
                  "start_quantity": 186,
                  "price": 124,
                  "end_quantity": 194,
                  "overage_price": 208
                }
              ],
              "minimum_price": 72,
              "percentage": 101.38
            },
            "price_bracket": {},
            "quantity": 242,
            "name": "name8",
            "subscription_item_id": "subscription_item_id2"
          },
          {
            "amount": 129,
            "description": "description9",
            "pricing_scheme": {
              "price": 233,
              "scheme_type": "scheme_type1",
              "price_brackets": [
                {
                  "start_quantity": 186,
                  "price": 124,
                  "end_quantity": 194,
                  "overage_price": 208
                },
                {
                  "start_quantity": 187,
                  "price": 125,
                  "end_quantity": 195,
                  "overage_price": 209
                },
                {
                  "start_quantity": 188,
                  "price": 126,
                  "end_quantity": 196,
                  "overage_price": 210
                }
              ],
              "minimum_price": 73,
              "percentage": 101.39
            },
            "price_bracket": {},
            "quantity": 243,
            "name": "name9",
            "subscription_item_id": "subscription_item_id3"
          }
        ],
        "customer": {
          "id": "id0",
          "name": "name0",
          "email": "email4",
          "delinquent": false,
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "document": "document4",
          "type": "type0",
          "fb_access_token": "fb_access_token4",
          "address": {
            "id": "id6",
            "street": "street6",
            "number": "number4",
            "complement": "complement2",
            "zip_code": "zip_code0",
            "neighborhood": "neighborhood2",
            "city": "city6",
            "state": "state2",
            "country": "country0",
            "status": "status8",
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "customer": {
              "id": "id6",
              "name": "name6",
              "email": "email0",
              "delinquent": false,
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "document": "document0",
              "type": "type6",
              "fb_access_token": "fb_access_token0",
              "address": {
                "id": "id2",
                "street": "street2",
                "number": "number0",
                "complement": "complement8",
                "zip_code": "zip_code6",
                "neighborhood": "neighborhood8",
                "city": "city2",
                "state": "state8",
                "country": "country6",
                "status": "status4",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "customer": {},
                "metadata": {
                  "key0": "metadata3",
                  "key1": "metadata4"
                },
                "line_1": "line_16",
                "line_2": "line_20",
                "deleted_at": "2016-03-13T12:52:32.123Z"
              },
              "metadata": {
                "key0": "metadata7",
                "key1": "metadata8"
              },
              "phones": {
                "home_phone": {
                  "country_code": "country_code8",
                  "number": "number6",
                  "area_code": "area_code8"
                },
                "mobile_phone": {
                  "country_code": "country_code8",
                  "number": "number6",
                  "area_code": "area_code8"
                }
              },
              "fb_id": 150,
              "code": "code4",
              "document_type": "document_type4"
            },
            "metadata": {
              "key0": "metadata7"
            },
            "line_1": "line_10",
            "line_2": "line_24",
            "deleted_at": "2016-03-13T12:52:32.123Z"
          },
          "metadata": {
            "key0": "metadata9"
          },
          "phones": {
            "home_phone": {},
            "mobile_phone": {}
          },
          "fb_id": 100,
          "code": "code8",
          "document_type": "document_type8"
        },
        "charge": {
          "id": "id2",
          "code": "code0",
          "gateway_id": "gateway_id8",
          "amount": 198,
          "status": "status4",
          "currency": "currency2",
          "payment_method": "payment_method8",
          "due_at": "2016-03-13T12:52:32.123Z",
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "last_transaction": {
            "gateway_id": "gateway_id4",
            "amount": 0,
            "status": "status6",
            "success": false,
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "attempt_count": 232,
            "max_attempts": 220,
            "splits": [
              {},
              {}
            ],
            "next_attempt": "2016-03-13T12:52:32.123Z",
            "transaction_type": "transaction",
            "id": "id4",
            "gateway_response": {
              "code": "code4",
              "errors": [
                {},
                {}
              ]
            },
            "antifraud_response": {
              "status": "status4",
              "return_code": "return_code2",
              "return_message": "return_message0",
              "provider_name": "provider_name0",
              "score": "score2"
            },
            "metadata": {
              "key0": "metadata5"
            },
            "split": [
              {}
            ],
            "interest": {
              "days": 162,
              "type": "type6",
              "amount": 236
            },
            "fine": {
              "days": 180,
              "type": "type6",
              "amount": 254
            },
            "max_days_to_pay_past_due": 168
          },
          "invoice": {
            "id": "id6",
            "code": "code4",
            "url": "url0",
            "amount": 144,
            "status": "status8",
            "payment_method": "payment_method4",
            "created_at": "2016-03-13T12:52:32.123Z",
            "items": [
              {},
              {}
            ],
            "customer": {},
            "charge": {},
            "installments": 184,
            "billing_address": {
              "street": "street8",
              "number": "number4",
              "zip_code": "zip_code2",
              "neighborhood": "neighborhood4",
              "city": "city2",
              "state": "state6",
              "country": "country2",
              "complement": "complement6",
              "line_1": "line_18",
              "line_2": "line_26"
            },
            "subscription": {
              "id": "id8",
              "code": "code6",
              "start_at": "2016-03-13T12:52:32.123Z",
              "interval": "interval6",
              "interval_count": 44,
              "billing_type": "billing_type8",
              "current_cycle": {
                "start_at": "2016-03-13T12:52:32.123Z",
                "end_at": "2016-03-13T12:52:32.123Z",
                "id": "id6",
                "billing_at": "2016-03-13T12:52:32.123Z",
                "subscription": {
                  "id": "id8",
                  "code": "code6",
                  "start_at": "2016-03-13T12:52:32.123Z",
                  "interval": "interval6",
                  "interval_count": 62,
                  "billing_type": "billing_type8",
                  "current_cycle": {
                    "start_at": "2016-03-13T12:52:32.123Z",
                    "end_at": "2016-03-13T12:52:32.123Z",
                    "id": "id6",
                    "billing_at": "2016-03-13T12:52:32.123Z",
                    "subscription": {},
                    "status": "status8",
                    "duration": 46,
                    "created_at": "created_at4",
                    "updated_at": "updated_at2",
                    "cycle": 242
                  },
                  "payment_method": "payment_method2",
                  "currency": "currency8",
                  "installments": 230,
                  "status": "status0",
                  "created_at": "2016-03-13T12:52:32.123Z",
                  "updated_at": "2016-03-13T12:52:32.123Z",
                  "customer": {},
                  "card": {
                    "id": "id8",
                    "last_four_digits": "last_four_digits4",
                    "brand": "brand2",
                    "holder_name": "holder_name4",
                    "exp_month": 208,
                    "exp_year": 88,
                    "status": "status0",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "updated_at": "2016-03-13T12:52:32.123Z",
                    "billing_address": {
                      "street": "street0",
                      "number": "number2",
                      "zip_code": "zip_code4",
                      "neighborhood": "neighborhood6",
                      "city": "city0",
                      "state": "state4",
                      "country": "country4",
                      "complement": "complement4",
                      "line_1": "line_16",
                      "line_2": "line_28"
                    },
                    "customer": {},
                    "metadata": {
                      "key0": "metadata5",
                      "key1": "metadata6",
                      "key2": "metadata7"
                    },
                    "type": "type2",
                    "holder_document": "holder_document8",
                    "deleted_at": "2016-03-13T12:52:32.123Z",
                    "first_six_digits": "first_six_digits8",
                    "label": "label8"
                  },
                  "items": [
                    {
                      "id": "id5",
                      "description": "description5",
                      "status": "status7",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "pricing_scheme": {},
                      "discounts": [
                        {
                          "id": "id6",
                          "value": 166.78,
                          "discount_type": "discount_type4",
                          "status": "status8",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 62,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description6",
                          "subscription": {},
                          "subscription_item": {
                            "id": "id2",
                            "description": "description2",
                            "status": "status4",
                            "created_at": "2016-03-13T12:52:32.123Z",
                            "updated_at": "2016-03-13T12:52:32.123Z",
                            "pricing_scheme": {},
                            "discounts": [
                              {
                                "id": "id3",
                                "value": 201.85,
                                "discount_type": "discount_type1",
                                "status": "status5",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 241,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description3",
                                "subscription": {},
                                "subscription_item": {}
                              }
                            ],
                            "increments": [
                              {
                                "id": "id1",
                                "value": 57.13,
                                "increment_type": "increment_type3",
                                "status": "status3",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 105,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description1",
                                "subscription": {},
                                "subscription_item": {}
                              },
                              {
                                "id": "id2",
                                "value": 57.14,
                                "increment_type": "increment_type4",
                                "status": "status4",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 106,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description2",
                                "subscription": {},
                                "subscription_item": {}
                              }
                            ],
                            "subscription": {},
                            "name": "name2",
                            "quantity": 30,
                            "cycles": 50,
                            "deleted_at": "2016-03-13T12:52:32.123Z"
                          }
                        },
                        {
                          "id": "id7",
                          "value": 166.79,
                          "discount_type": "discount_type5",
                          "status": "status9",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 63,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description7",
                          "subscription": {},
                          "subscription_item": {
                            "id": "id3",
                            "description": "description3",
                            "status": "status5",
                            "created_at": "2016-03-13T12:52:32.123Z",
                            "updated_at": "2016-03-13T12:52:32.123Z",
                            "pricing_scheme": {},
                            "discounts": [
                              {
                                "id": "id4",
                                "value": 201.86,
                                "discount_type": "discount_type2",
                                "status": "status6",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 242,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description4",
                                "subscription": {},
                                "subscription_item": {}
                              },
                              {
                                "id": "id5",
                                "value": 201.87,
                                "discount_type": "discount_type3",
                                "status": "status7",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 243,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description5",
                                "subscription": {},
                                "subscription_item": {}
                              }
                            ],
                            "increments": [
                              {
                                "id": "id2",
                                "value": 57.14,
                                "increment_type": "increment_type4",
                                "status": "status4",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 106,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description2",
                                "subscription": {},
                                "subscription_item": {}
                              },
                              {
                                "id": "id3",
                                "value": 57.15,
                                "increment_type": "increment_type5",
                                "status": "status5",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 107,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description3",
                                "subscription": {},
                                "subscription_item": {}
                              },
                              {
                                "id": "id4",
                                "value": 57.16,
                                "increment_type": "increment_type6",
                                "status": "status6",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 108,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description4",
                                "subscription": {},
                                "subscription_item": {}
                              }
                            ],
                            "subscription": {},
                            "name": "name3",
                            "quantity": 31,
                            "cycles": 51,
                            "deleted_at": "2016-03-13T12:52:32.123Z"
                          }
                        }
                      ],
                      "increments": [
                        {},
                        {},
                        {}
                      ],
                      "subscription": {},
                      "name": "name5",
                      "quantity": 107,
                      "cycles": 129,
                      "deleted_at": "2016-03-13T12:52:32.123Z"
                    }
                  ],
                  "statement_descriptor": "statement_descriptor8",
                  "metadata": {
                    "key0": "metadata5"
                  },
                  "setup": {
                    "id": "id2",
                    "description": "description8",
                    "amount": 254,
                    "status": "status6"
                  },
                  "gateway_affiliation_id": "gateway_affiliation_id4",
                  "next_billing_at": "2016-03-13T12:52:32.123Z",
                  "billing_day": 54,
                  "minimum_price": 196,
                  "canceled_at": "2016-03-13T12:52:32.123Z",
                  "discounts": [
                    {},
                    {}
                  ],
                  "increments": [
                    {},
                    {}
                  ],
                  "boleto_due_days": 174,
                  "split": {
                    "enabled": false,
                    "rules": [
                      {}
                    ]
                  },
                  "boleto": {
                    "interest": {},
                    "fine": {},
                    "max_days_to_pay_past_due": 106
                  },
                  "manual_billing": false
                },
                "status": "status8",
                "duration": 28,
                "created_at": "created_at4",
                "updated_at": "updated_at2",
                "cycle": 224
              },
              "payment_method": "payment_method2",
              "currency": "currency8",
              "installments": 212,
              "status": "status0",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "customer": {},
              "card": {
                "id": "id8",
                "last_four_digits": "last_four_digits4",
                "brand": "brand2",
                "holder_name": "holder_name6",
                "exp_month": 190,
                "exp_year": 106,
                "status": "status0",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "billing_address": {},
                "customer": {},
                "metadata": {
                  "key0": "metadata5"
                },
                "type": "type2",
                "holder_document": "holder_document8",
                "deleted_at": "2016-03-13T12:52:32.123Z",
                "first_six_digits": "first_six_digits8",
                "label": "label8"
              },
              "items": [
                {},
                {}
              ],
              "statement_descriptor": "statement_descriptor8",
              "metadata": {
                "key0": "metadata5",
                "key1": "metadata6",
                "key2": "metadata7"
              },
              "setup": {
                "id": "id2",
                "description": "description8",
                "amount": 236,
                "status": "status6"
              },
              "gateway_affiliation_id": "gateway_affiliation_id4",
              "next_billing_at": "2016-03-13T12:52:32.123Z",
              "billing_day": 72,
              "minimum_price": 214,
              "canceled_at": "2016-03-13T12:52:32.123Z",
              "discounts": [
                {},
                {},
                {}
              ],
              "increments": [
                {}
              ],
              "boleto_due_days": 156,
              "split": {
                "enabled": false,
                "rules": [
                  {},
                  {}
                ]
              },
              "boleto": {
                "interest": {},
                "fine": {},
                "max_days_to_pay_past_due": 88
              },
              "manual_billing": false
            },
            "cycle": {},
            "shipping": {
              "amount": 242,
              "description": "description0",
              "recipient_name": "recipient_name8",
              "recipient_phone": "recipient_phone2",
              "address": {},
              "max_delivery_date": "2016-03-13T12:52:32.123Z",
              "estimated_delivery_date": "2016-03-13T12:52:32.123Z",
              "type": "type0"
            },
            "metadata": {
              "key0": "metadata3",
              "key1": "metadata2",
              "key2": "metadata1"
            },
            "due_at": "2016-03-13T12:52:32.123Z",
            "canceled_at": "2016-03-13T12:52:32.123Z",
            "billing_at": "2016-03-13T12:52:32.123Z",
            "seen_at": "2016-03-13T12:52:32.123Z",
            "total_discount": 252,
            "total_increment": 68,
            "subscription_id": "subscription_id6"
          },
          "order": {
            "id": "id4",
            "code": "code2",
            "currency": "currency6",
            "items": [
              {
                "id": "id1",
                "amount": 57,
                "description": "description1",
                "quantity": 171,
                "category": "category9",
                "code": "code9"
              }
            ],
            "customer": {},
            "status": "status4",
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "charges": [
              {},
              {},
              {}
            ],
            "invoice_url": "invoice_url6",
            "shipping": {
              "amount": 96,
              "description": "description8",
              "recipient_name": "recipient_name6",
              "recipient_phone": "recipient_phone0",
              "address": {},
              "max_delivery_date": "2016-03-13T12:52:32.123Z",
              "estimated_delivery_date": "2016-03-13T12:52:32.123Z",
              "type": "type2"
            },
            "metadata": {
              "key0": "metadata9"
            },
            "checkouts": [
              {
                "id": "id1",
                "amount": 7,
                "default_payment_method": "default_payment_method1",
                "success_url": "success_url3",
                "payment_url": "payment_url5",
                "gateway_affiliation_id": "gateway_affiliation_id7",
                "accepted_payment_methods": [
                  "accepted_payment_methods4",
                  "accepted_payment_methods5"
                ],
                "status": "status3",
                "skip_checkout_success_page": true,
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "canceled_at": "2016-03-13T12:52:32.123Z",
                "customer_editable": true,
                "customer": {},
                "billingaddress": {},
                "credit_card": {
                  "statementDescriptor": "statementDescriptor5",
                  "installments": [
                    {
                      "number": "number2",
                      "total": 220
                    },
                    {
                      "number": "number3",
                      "total": 221
                    },
                    {
                      "number": "number4",
                      "total": 222
                    }
                  ],
                  "authentication": {
                    "type": "type9",
                    "threed_secure": {
                      "mpi": "mpi3",
                      "eci": "eci9",
                      "cavv": "cavv5",
                      "transaction_Id": "transaction_Id5",
                      "success_url": "success_url1"
                    }
                  }
                },
                "boleto": {
                  "due_at": "2016-03-13T12:52:32.123Z",
                  "instructions": "instructions9"
                },
                "billing_address_editable": true,
                "shipping": {},
                "shippable": true,
                "closed_at": "2016-03-13T12:52:32.123Z",
                "expires_at": "2016-03-13T12:52:32.123Z",
                "currency": "currency1",
                "debit_card": {
                  "statement_descriptor": "statement_descriptor5",
                  "authentication": {
                    "type": "type3",
                    "threed_secure": {
                      "mpi": "mpi7",
                      "eci": "eci5",
                      "cavv": "cavv9",
                      "transaction_Id": "transaction_Id9",
                      "success_url": "success_url7"
                    }
                  }
                },
                "bank_transfer": {
                  "bank": [
                    "bank8",
                    "bank9",
                    "bank0"
                  ]
                },
                "accepted_brands": [
                  "accepted_brands7",
                  "accepted_brands8"
                ],
                "pix": {
                  "expires_at": "2016-03-13T12:52:32.123Z",
                  "additional_information": [
                    {
                      "Name": "Name8",
                      "Value": "Value6"
                    },
                    {
                      "Name": "Name9",
                      "Value": "Value7"
                    }
                  ]
                }
              },
              {
                "id": "id2",
                "amount": 8,
                "default_payment_method": "default_payment_method2",
                "success_url": "success_url4",
                "payment_url": "payment_url6",
                "gateway_affiliation_id": "gateway_affiliation_id8",
                "accepted_payment_methods": [
                  "accepted_payment_methods5",
                  "accepted_payment_methods6",
                  "accepted_payment_methods7"
                ],
                "status": "status4",
                "skip_checkout_success_page": false,
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "canceled_at": "2016-03-13T12:52:32.123Z",
                "customer_editable": false,
                "customer": {},
                "billingaddress": {},
                "credit_card": {
                  "statementDescriptor": "statementDescriptor6",
                  "installments": [
                    {
                      "number": "number3",
                      "total": 221
                    }
                  ],
                  "authentication": {
                    "type": "type8",
                    "threed_secure": {
                      "mpi": "mpi2",
                      "eci": "eci0",
                      "cavv": "cavv6",
                      "transaction_Id": "transaction_Id4",
                      "success_url": "success_url2"
                    }
                  }
                },
                "boleto": {
                  "due_at": "2016-03-13T12:52:32.123Z",
                  "instructions": "instructions0"
                },
                "billing_address_editable": false,
                "shipping": {},
                "shippable": false,
                "closed_at": "2016-03-13T12:52:32.123Z",
                "expires_at": "2016-03-13T12:52:32.123Z",
                "currency": "currency2",
                "debit_card": {
                  "statement_descriptor": "statement_descriptor6",
                  "authentication": {
                    "type": "type2",
                    "threed_secure": {
                      "mpi": "mpi8",
                      "eci": "eci4",
                      "cavv": "cavv0",
                      "transaction_Id": "transaction_Id0",
                      "success_url": "success_url6"
                    }
                  }
                },
                "bank_transfer": {
                  "bank": [
                    "bank7",
                    "bank8"
                  ]
                },
                "accepted_brands": [
                  "accepted_brands8",
                  "accepted_brands9",
                  "accepted_brands0"
                ],
                "pix": {
                  "expires_at": "2016-03-13T12:52:32.123Z",
                  "additional_information": [
                    {
                      "Name": "Name9",
                      "Value": "Value7"
                    },
                    {
                      "Name": "Name0",
                      "Value": "Value8"
                    },
                    {
                      "Name": "Name1",
                      "Value": "Value9"
                    }
                  ]
                }
              },
              {
                "id": "id3",
                "amount": 9,
                "default_payment_method": "default_payment_method3",
                "success_url": "success_url5",
                "payment_url": "payment_url7",
                "gateway_affiliation_id": "gateway_affiliation_id9",
                "accepted_payment_methods": [
                  "accepted_payment_methods6"
                ],
                "status": "status5",
                "skip_checkout_success_page": true,
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "canceled_at": "2016-03-13T12:52:32.123Z",
                "customer_editable": true,
                "customer": {},
                "billingaddress": {},
                "credit_card": {
                  "statementDescriptor": "statementDescriptor7",
                  "installments": [
                    {
                      "number": "number4",
                      "total": 222
                    },
                    {
                      "number": "number5",
                      "total": 223
                    }
                  ],
                  "authentication": {
                    "type": "type7",
                    "threed_secure": {
                      "mpi": "mpi1",
                      "eci": "eci1",
                      "cavv": "cavv7",
                      "transaction_Id": "transaction_Id3",
                      "success_url": "success_url3"
                    }
                  }
                },
                "boleto": {
                  "due_at": "2016-03-13T12:52:32.123Z",
                  "instructions": "instructions1"
                },
                "billing_address_editable": true,
                "shipping": {},
                "shippable": true,
                "closed_at": "2016-03-13T12:52:32.123Z",
                "expires_at": "2016-03-13T12:52:32.123Z",
                "currency": "currency3",
                "debit_card": {
                  "statement_descriptor": "statement_descriptor7",
                  "authentication": {
                    "type": "type1",
                    "threed_secure": {
                      "mpi": "mpi9",
                      "eci": "eci3",
                      "cavv": "cavv1",
                      "transaction_Id": "transaction_Id1",
                      "success_url": "success_url5"
                    }
                  }
                },
                "bank_transfer": {
                  "bank": [
                    "bank6"
                  ]
                },
                "accepted_brands": [
                  "accepted_brands9"
                ],
                "pix": {
                  "expires_at": "2016-03-13T12:52:32.123Z",
                  "additional_information": [
                    {
                      "Name": "Name0",
                      "Value": "Value8"
                    }
                  ]
                }
              }
            ],
            "ip": "ip8",
            "session_id": "session_id4",
            "location": {
              "latitude": "latitude8",
              "longitude": "longitude2"
            },
            "device": {
              "platform": "platform6"
            },
            "closed": false
          },
          "customer": {},
          "metadata": {
            "key0": "metadata9",
            "key1": "metadata8",
            "key2": "metadata7"
          },
          "paid_at": "2016-03-13T12:52:32.123Z",
          "canceled_at": "2016-03-13T12:52:32.123Z",
          "canceled_amount": 52,
          "paid_amount": 34,
          "interest_and_fine_paid": 38,
          "recurrency_cycle": "recurrency_cycle6"
        },
        "installments": 108,
        "billing_address": {},
        "subscription": {},
        "cycle": {},
        "shipping": {},
        "metadata": {
          "key0": "metadata9",
          "key1": "metadata8",
          "key2": "metadata7"
        },
        "due_at": "2016-03-13T12:52:32.123Z",
        "canceled_at": "2016-03-13T12:52:32.123Z",
        "billing_at": "2016-03-13T12:52:32.123Z",
        "seen_at": "2016-03-13T12:52:32.123Z",
        "total_discount": 176,
        "total_increment": 248,
        "subscription_id": "subscription_id0"
      },
      "order": {
        "id": "id0",
        "code": "code8",
        "currency": "currency0",
        "items": [
          {}
        ],
        "customer": {},
        "status": "status2",
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "charges": [
          {},
          {}
        ],
        "invoice_url": "invoice_url2",
        "shipping": {},
        "metadata": {
          "key0": "metadata7"
        },
        "checkouts": [
          {},
          {},
          {}
        ],
        "ip": "ip4",
        "session_id": "session_id2",
        "location": {
          "latitude": "latitude8",
          "longitude": "longitude8"
        },
        "device": {
          "platform": "platform0"
        },
        "closed": false
      },
      "customer": {},
      "metadata": {
        "key0": "metadata3",
        "key1": "metadata2",
        "key2": "metadata1"
      },
      "paid_at": "2016-03-13T12:52:32.123Z",
      "canceled_at": "2016-03-13T12:52:32.123Z",
      "canceled_amount": 232,
      "paid_amount": 214,
      "interest_and_fine_paid": 218,
      "recurrency_cycle": "recurrency_cycle0"
    }
  ],
  "paging": {
    "total": 6,
    "previous": "previous2",
    "next": "next8"
  }
}
```

