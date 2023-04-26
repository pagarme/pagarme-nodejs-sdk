
# List Invoices Response

Response object for listing invoices

## Structure

`ListInvoicesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetInvoiceResponse[] \| undefined`](../../doc/models/get-invoice-response.md) | Optional | The Invoice objects |
| `paging` | [`PagingResponse \| undefined`](../../doc/models/paging-response.md) | Optional | Paging object |

## Example (as JSON)

```json
{
  "data": [
    {
      "id": "id5",
      "code": "code3",
      "url": "url9",
      "amount": 121,
      "status": "status7",
      "payment_method": "payment_method5",
      "created_at": "2016-03-13T12:52:32.123Z",
      "items": [
        {
          "amount": 180,
          "description": "description2",
          "pricing_scheme": {
            "price": 28,
            "scheme_type": "scheme_type4",
            "price_brackets": [
              {
                "start_quantity": 237,
                "price": 175,
                "end_quantity": 245,
                "overage_price": 3
              },
              {
                "start_quantity": 238,
                "price": 176,
                "end_quantity": 246,
                "overage_price": 4
              },
              {
                "start_quantity": 239,
                "price": 177,
                "end_quantity": 247,
                "overage_price": 5
              }
            ],
            "minimum_price": 124,
            "percentage": 132.62
          },
          "price_bracket": {},
          "quantity": 38,
          "name": "name2",
          "subscription_item_id": "subscription_item_id6"
        },
        {
          "amount": 181,
          "description": "description3",
          "pricing_scheme": {
            "price": 29,
            "scheme_type": "scheme_type5",
            "price_brackets": [
              {
                "start_quantity": 238,
                "price": 176,
                "end_quantity": 246,
                "overage_price": 4
              }
            ],
            "minimum_price": 125,
            "percentage": 132.63
          },
          "price_bracket": {},
          "quantity": 39,
          "name": "name3",
          "subscription_item_id": "subscription_item_id7"
        }
      ],
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
          "customer": {
            "id": "id1",
            "name": "name1",
            "email": "email5",
            "delinquent": true,
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "document": "document5",
            "type": "type1",
            "fb_access_token": "fb_access_token5",
            "address": {
              "id": "id7",
              "street": "street7",
              "number": "number5",
              "complement": "complement3",
              "zip_code": "zip_code1",
              "neighborhood": "neighborhood3",
              "city": "city7",
              "state": "state3",
              "country": "country1",
              "status": "status9",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "customer": {},
              "metadata": {
                "key0": "metadata8"
              },
              "line_1": "line_11",
              "line_2": "line_25",
              "deleted_at": "2016-03-13T12:52:32.123Z"
            },
            "metadata": {
              "key0": "metadata2"
            },
            "phones": {
              "home_phone": {
                "country_code": "country_code3",
                "number": "number1",
                "area_code": "area_code3"
              },
              "mobile_phone": {
                "country_code": "country_code3",
                "number": "number1",
                "area_code": "area_code3"
              }
            },
            "fb_id": 203,
            "code": "code9",
            "document_type": "document_type9"
          },
          "metadata": {
            "key0": "metadata2",
            "key1": "metadata3",
            "key2": "metadata4"
          },
          "line_1": "line_15",
          "line_2": "line_29",
          "deleted_at": "2016-03-13T12:52:32.123Z"
        },
        "metadata": {
          "key0": "metadata4",
          "key1": "metadata3",
          "key2": "metadata2"
        },
        "phones": {
          "home_phone": {},
          "mobile_phone": {}
        },
        "fb_id": 153,
        "code": "code3",
        "document_type": "document_type3"
      },
      "charge": {
        "id": "id7",
        "code": "code5",
        "gateway_id": "gateway_id3",
        "amount": 251,
        "status": "status9",
        "currency": "currency7",
        "payment_method": "payment_method3",
        "due_at": "2016-03-13T12:52:32.123Z",
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "last_transaction": {
          "gateway_id": "gateway_id9",
          "amount": 53,
          "status": "status1",
          "success": true,
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "attempt_count": 29,
          "max_attempts": 17,
          "splits": [
            {
              "type": "type1",
              "amount": 241,
              "recipient": {
                "id": "id3",
                "name": "name3",
                "email": "email3",
                "document": "document7",
                "description": "description3",
                "type": "type7",
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
                    "email": "email3",
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
                        "key0": "metadata8",
                        "key1": "metadata7",
                        "key2": "metadata6"
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
                      "key0": "metadata0",
                      "key1": "metadata9"
                    },
                    "automatic_anticipation_settings": {
                      "enabled": true,
                      "type": "type7",
                      "volume_percentage": 173,
                      "delay": 207,
                      "days": [
                        183,
                        184
                      ]
                    },
                    "transfer_settings": {
                      "transfer_enabled": true,
                      "transfer_interval": "transfer_interval9",
                      "transfer_day": 43
                    },
                    "code": "code1",
                    "payment_mode": "payment_mode7"
                  },
                  "metadata": {
                    "key0": "metadata8",
                    "key1": "metadata7",
                    "key2": "metadata6"
                  },
                  "pix_key": "pix_key5"
                },
                "gateway_recipients": [
                  {},
                  {},
                  {}
                ],
                "metadata": {
                  "key0": "metadata0",
                  "key1": "metadata9"
                },
                "automatic_anticipation_settings": {
                  "enabled": true,
                  "type": "type3",
                  "volume_percentage": 153,
                  "delay": 137,
                  "days": [
                    113,
                    114
                  ]
                },
                "transfer_settings": {
                  "transfer_enabled": true,
                  "transfer_interval": "transfer_interval1",
                  "transfer_day": 63
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
            }
          ],
          "next_attempt": "2016-03-13T12:52:32.123Z",
          "transaction_type": "transaction",
          "id": "id9",
          "gateway_response": {
            "code": "code9",
            "errors": [
              {
                "message": "message6"
              }
            ]
          },
          "antifraud_response": {
            "status": "status9",
            "return_code": "return_code7",
            "return_message": "return_message5",
            "provider_name": "provider_name5",
            "score": "score7"
          },
          "metadata": {
            "key0": "metadata0",
            "key1": "metadata9",
            "key2": "metadata8"
          },
          "split": [
            {},
            {},
            {}
          ],
          "interest": {
            "days": 215,
            "type": "type1",
            "amount": 33
          },
          "fine": {
            "days": 233,
            "type": "type1",
            "amount": 51
          },
          "max_days_to_pay_past_due": 221
        },
        "invoice": {
          "id": "id1",
          "code": "code9",
          "url": "url5",
          "amount": 197,
          "status": "status3",
          "payment_method": "payment_method9",
          "created_at": "2016-03-13T12:52:32.123Z",
          "items": [
            {}
          ],
          "customer": {},
          "charge": {
            "id": "id7",
            "code": "code5",
            "gateway_id": "gateway_id3",
            "amount": 93,
            "status": "status1",
            "currency": "currency3",
            "payment_method": "payment_method3",
            "due_at": "2016-03-13T12:52:32.123Z",
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "last_transaction": {
              "gateway_id": "gateway_id9",
              "amount": 151,
              "status": "status1",
              "success": true,
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "attempt_count": 127,
              "max_attempts": 115,
              "splits": [
                {}
              ],
              "next_attempt": "2016-03-13T12:52:32.123Z",
              "transaction_type": "transaction",
              "id": "id9",
              "gateway_response": {
                "code": "code9",
                "errors": [
                  {}
                ]
              },
              "antifraud_response": {
                "status": "status9",
                "return_code": "return_code7",
                "return_message": "return_message5",
                "provider_name": "provider_name5",
                "score": "score7"
              },
              "metadata": {
                "key0": "metadata6",
                "key1": "metadata5"
              },
              "split": [
                {},
                {},
                {}
              ],
              "interest": {
                "days": 215,
                "type": "type9",
                "amount": 33
              },
              "fine": {
                "days": 75,
                "type": "type1",
                "amount": 149
              },
              "max_days_to_pay_past_due": 63
            },
            "invoice": {},
            "order": {
              "id": "id9",
              "code": "code7",
              "currency": "currency9",
              "items": [
                {
                  "id": "id6",
                  "amount": 162,
                  "description": "description6",
                  "quantity": 20,
                  "category": "category4",
                  "code": "code4"
                },
                {
                  "id": "id7",
                  "amount": 163,
                  "description": "description7",
                  "quantity": 21,
                  "category": "category5",
                  "code": "code5"
                }
              ],
              "customer": {},
              "status": "status1",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "charges": [
                {},
                {},
                {}
              ],
              "invoice_url": "invoice_url1",
              "shipping": {
                "amount": 201,
                "description": "description3",
                "recipient_name": "recipient_name1",
                "recipient_phone": "recipient_phone5",
                "address": {},
                "max_delivery_date": "2016-03-13T12:52:32.123Z",
                "estimated_delivery_date": "2016-03-13T12:52:32.123Z",
                "type": "type3"
              },
              "metadata": {
                "key0": "metadata6",
                "key1": "metadata5",
                "key2": "metadata4"
              },
              "checkouts": [
                {
                  "id": "id6",
                  "amount": 112,
                  "default_payment_method": "default_payment_method6",
                  "success_url": "success_url8",
                  "payment_url": "payment_url0",
                  "gateway_affiliation_id": "gateway_affiliation_id2",
                  "accepted_payment_methods": [
                    "accepted_payment_methods9",
                    "accepted_payment_methods0",
                    "accepted_payment_methods1"
                  ],
                  "status": "status8",
                  "skip_checkout_success_page": false,
                  "created_at": "2016-03-13T12:52:32.123Z",
                  "updated_at": "2016-03-13T12:52:32.123Z",
                  "canceled_at": "2016-03-13T12:52:32.123Z",
                  "customer_editable": false,
                  "customer": {},
                  "billingaddress": {},
                  "credit_card": {
                    "statementDescriptor": "statementDescriptor0",
                    "installments": [
                      {
                        "number": "number7",
                        "total": 69
                      }
                    ],
                    "authentication": {
                      "type": "type6",
                      "threed_secure": {
                        "mpi": "mpi2",
                        "eci": "eci4",
                        "cavv": "cavv0",
                        "transaction_Id": "transaction_Id0",
                        "success_url": "success_url6"
                      }
                    }
                  },
                  "boleto": {
                    "due_at": "2016-03-13T12:52:32.123Z",
                    "instructions": "instructions4"
                  },
                  "billing_address_editable": false,
                  "shipping": {
                    "amount": 210,
                    "description": "description0",
                    "recipient_name": "recipient_name8",
                    "recipient_phone": "recipient_phone2",
                    "address": {},
                    "max_delivery_date": "2016-03-13T12:52:32.123Z",
                    "estimated_delivery_date": "2016-03-13T12:52:32.123Z",
                    "type": "type0"
                  },
                  "shippable": false,
                  "closed_at": "2016-03-13T12:52:32.123Z",
                  "expires_at": "2016-03-13T12:52:32.123Z",
                  "currency": "currency6",
                  "debit_card": {
                    "statement_descriptor": "statement_descriptor0",
                    "authentication": {
                      "type": "type2",
                      "threed_secure": {
                        "mpi": "mpi8",
                        "eci": "eci0",
                        "cavv": "cavv6",
                        "transaction_Id": "transaction_Id6",
                        "success_url": "success_url2"
                      }
                    }
                  },
                  "bank_transfer": {
                    "bank": [
                      "bank1",
                      "bank2",
                      "bank3"
                    ]
                  },
                  "accepted_brands": [
                    "accepted_brands2",
                    "accepted_brands3",
                    "accepted_brands4"
                  ],
                  "pix": {
                    "expires_at": "2016-03-13T12:52:32.123Z",
                    "additional_information": [
                      {
                        "Name": "Name3",
                        "Value": "Value1"
                      },
                      {
                        "Name": "Name4",
                        "Value": "Value2"
                      },
                      {
                        "Name": "Name5",
                        "Value": "Value3"
                      }
                    ]
                  }
                }
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
              "key0": "metadata6"
            },
            "paid_at": "2016-03-13T12:52:32.123Z",
            "canceled_at": "2016-03-13T12:52:32.123Z",
            "canceled_amount": 203,
            "paid_amount": 71,
            "interest_and_fine_paid": 189,
            "recurrency_cycle": "recurrency_cycle1"
          },
          "installments": 237,
          "billing_address": {
            "street": "street3",
            "number": "number9",
            "zip_code": "zip_code7",
            "neighborhood": "neighborhood9",
            "city": "city3",
            "state": "state9",
            "country": "country7",
            "complement": "complement1",
            "line_1": "line_13",
            "line_2": "line_21"
          },
          "subscription": {
            "id": "id3",
            "code": "code1",
            "start_at": "2016-03-13T12:52:32.123Z",
            "interval": "interval1",
            "interval_count": 247,
            "billing_type": "billing_type3",
            "current_cycle": {
              "start_at": "2016-03-13T12:52:32.123Z",
              "end_at": "2016-03-13T12:52:32.123Z",
              "id": "id1",
              "billing_at": "2016-03-13T12:52:32.123Z",
              "subscription": {
                "id": "id3",
                "code": "code1",
                "start_at": "2016-03-13T12:52:32.123Z",
                "interval": "interval1",
                "interval_count": 115,
                "billing_type": "billing_type3",
                "current_cycle": {
                  "start_at": "2016-03-13T12:52:32.123Z",
                  "end_at": "2016-03-13T12:52:32.123Z",
                  "id": "id1",
                  "billing_at": "2016-03-13T12:52:32.123Z",
                  "subscription": {},
                  "status": "status3",
                  "duration": 99,
                  "created_at": "created_at9",
                  "updated_at": "updated_at7",
                  "cycle": 39
                },
                "payment_method": "payment_method7",
                "currency": "currency3",
                "installments": 27,
                "status": "status5",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "customer": {},
                "card": {
                  "id": "id3",
                  "last_four_digits": "last_four_digits9",
                  "brand": "brand7",
                  "holder_name": "holder_name1",
                  "exp_month": 5,
                  "exp_year": 35,
                  "status": "status5",
                  "created_at": "2016-03-13T12:52:32.123Z",
                  "updated_at": "2016-03-13T12:52:32.123Z",
                  "billing_address": {
                    "street": "street5",
                    "number": "number7",
                    "zip_code": "zip_code9",
                    "neighborhood": "neighborhood1",
                    "city": "city5",
                    "state": "state9",
                    "country": "country9",
                    "complement": "complement9",
                    "line_1": "line_11",
                    "line_2": "line_23"
                  },
                  "customer": {},
                  "metadata": {
                    "key0": "metadata0",
                    "key1": "metadata1"
                  },
                  "type": "type7",
                  "holder_document": "holder_document3",
                  "deleted_at": "2016-03-13T12:52:32.123Z",
                  "first_six_digits": "first_six_digits3",
                  "label": "label3"
                },
                "items": [
                  {
                    "id": "id0",
                    "description": "description0",
                    "status": "status2",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "updated_at": "2016-03-13T12:52:32.123Z",
                    "pricing_scheme": {},
                    "discounts": [
                      {
                        "id": "id1",
                        "value": 198.03,
                        "discount_type": "discount_type9",
                        "status": "status3",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 115,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description1",
                        "subscription": {},
                        "subscription_item": {
                          "id": "id7",
                          "description": "description7",
                          "status": "status9",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "updated_at": "2016-03-13T12:52:32.123Z",
                          "pricing_scheme": {},
                          "discounts": [
                            {
                              "id": "id8",
                              "value": 233.1,
                              "discount_type": "discount_type6",
                              "status": "status0",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 38,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description8",
                              "subscription": {},
                              "subscription_item": {}
                            },
                            {
                              "id": "id9",
                              "value": 233.11,
                              "discount_type": "discount_type7",
                              "status": "status1",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 39,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description9",
                              "subscription": {},
                              "subscription_item": {}
                            },
                            {
                              "id": "id0",
                              "value": 233.12,
                              "discount_type": "discount_type8",
                              "status": "status2",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 40,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description0",
                              "subscription": {},
                              "subscription_item": {}
                            }
                          ],
                          "increments": [
                            {
                              "id": "id6",
                              "value": 88.38,
                              "increment_type": "increment_type8",
                              "status": "status8",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 158,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description6",
                              "subscription": {},
                              "subscription_item": {}
                            }
                          ],
                          "subscription": {},
                          "name": "name7",
                          "quantity": 83,
                          "cycles": 103,
                          "deleted_at": "2016-03-13T12:52:32.123Z"
                        }
                      }
                    ],
                    "increments": [
                      {},
                      {}
                    ],
                    "subscription": {},
                    "name": "name0",
                    "quantity": 160,
                    "cycles": 76,
                    "deleted_at": "2016-03-13T12:52:32.123Z"
                  },
                  {
                    "id": "id1",
                    "description": "description1",
                    "status": "status3",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "updated_at": "2016-03-13T12:52:32.123Z",
                    "pricing_scheme": {},
                    "discounts": [
                      {
                        "id": "id2",
                        "value": 198.04,
                        "discount_type": "discount_type0",
                        "status": "status4",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 116,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description2",
                        "subscription": {},
                        "subscription_item": {
                          "id": "id8",
                          "description": "description8",
                          "status": "status0",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "updated_at": "2016-03-13T12:52:32.123Z",
                          "pricing_scheme": {},
                          "discounts": [
                            {
                              "id": "id9",
                              "value": 233.11,
                              "discount_type": "discount_type7",
                              "status": "status1",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 39,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description9",
                              "subscription": {},
                              "subscription_item": {}
                            }
                          ],
                          "increments": [
                            {
                              "id": "id7",
                              "value": 88.39,
                              "increment_type": "increment_type9",
                              "status": "status9",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 159,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description7",
                              "subscription": {},
                              "subscription_item": {}
                            },
                            {
                              "id": "id8",
                              "value": 88.4,
                              "increment_type": "increment_type0",
                              "status": "status0",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 160,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description8",
                              "subscription": {},
                              "subscription_item": {}
                            }
                          ],
                          "subscription": {},
                          "name": "name8",
                          "quantity": 84,
                          "cycles": 104,
                          "deleted_at": "2016-03-13T12:52:32.123Z"
                        }
                      },
                      {
                        "id": "id3",
                        "value": 198.05,
                        "discount_type": "discount_type1",
                        "status": "status5",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 117,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description3",
                        "subscription": {},
                        "subscription_item": {
                          "id": "id9",
                          "description": "description9",
                          "status": "status1",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "updated_at": "2016-03-13T12:52:32.123Z",
                          "pricing_scheme": {},
                          "discounts": [
                            {
                              "id": "id0",
                              "value": 233.12,
                              "discount_type": "discount_type8",
                              "status": "status2",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 40,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description0",
                              "subscription": {},
                              "subscription_item": {}
                            },
                            {
                              "id": "id1",
                              "value": 233.13,
                              "discount_type": "discount_type9",
                              "status": "status3",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 41,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description1",
                              "subscription": {},
                              "subscription_item": {}
                            }
                          ],
                          "increments": [
                            {
                              "id": "id8",
                              "value": 88.4,
                              "increment_type": "increment_type0",
                              "status": "status0",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 160,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description8",
                              "subscription": {},
                              "subscription_item": {}
                            },
                            {
                              "id": "id9",
                              "value": 88.41,
                              "increment_type": "increment_type1",
                              "status": "status1",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 161,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description9",
                              "subscription": {},
                              "subscription_item": {}
                            },
                            {
                              "id": "id0",
                              "value": 88.42,
                              "increment_type": "increment_type2",
                              "status": "status2",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 162,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description0",
                              "subscription": {},
                              "subscription_item": {}
                            }
                          ],
                          "subscription": {},
                          "name": "name9",
                          "quantity": 85,
                          "cycles": 105,
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
                    "name": "name1",
                    "quantity": 161,
                    "cycles": 75,
                    "deleted_at": "2016-03-13T12:52:32.123Z"
                  },
                  {
                    "id": "id2",
                    "description": "description2",
                    "status": "status4",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "updated_at": "2016-03-13T12:52:32.123Z",
                    "pricing_scheme": {},
                    "discounts": [
                      {
                        "id": "id3",
                        "value": 198.05,
                        "discount_type": "discount_type1",
                        "status": "status5",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 117,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description3",
                        "subscription": {},
                        "subscription_item": {
                          "id": "id9",
                          "description": "description9",
                          "status": "status1",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "updated_at": "2016-03-13T12:52:32.123Z",
                          "pricing_scheme": {},
                          "discounts": [
                            {
                              "id": "id0",
                              "value": 233.12,
                              "discount_type": "discount_type8",
                              "status": "status2",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 40,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description0",
                              "subscription": {},
                              "subscription_item": {}
                            },
                            {
                              "id": "id1",
                              "value": 233.13,
                              "discount_type": "discount_type9",
                              "status": "status3",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 41,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description1",
                              "subscription": {},
                              "subscription_item": {}
                            }
                          ],
                          "increments": [
                            {
                              "id": "id8",
                              "value": 88.4,
                              "increment_type": "increment_type0",
                              "status": "status0",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 160,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description8",
                              "subscription": {},
                              "subscription_item": {}
                            },
                            {
                              "id": "id9",
                              "value": 88.41,
                              "increment_type": "increment_type1",
                              "status": "status1",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 161,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description9",
                              "subscription": {},
                              "subscription_item": {}
                            },
                            {
                              "id": "id0",
                              "value": 88.42,
                              "increment_type": "increment_type2",
                              "status": "status2",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 162,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description0",
                              "subscription": {},
                              "subscription_item": {}
                            }
                          ],
                          "subscription": {},
                          "name": "name9",
                          "quantity": 85,
                          "cycles": 105,
                          "deleted_at": "2016-03-13T12:52:32.123Z"
                        }
                      },
                      {
                        "id": "id4",
                        "value": 198.06,
                        "discount_type": "discount_type2",
                        "status": "status6",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 118,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description4",
                        "subscription": {},
                        "subscription_item": {
                          "id": "id0",
                          "description": "description0",
                          "status": "status2",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "updated_at": "2016-03-13T12:52:32.123Z",
                          "pricing_scheme": {},
                          "discounts": [
                            {
                              "id": "id1",
                              "value": 233.13,
                              "discount_type": "discount_type9",
                              "status": "status3",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 41,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description1",
                              "subscription": {},
                              "subscription_item": {}
                            },
                            {
                              "id": "id2",
                              "value": 233.14,
                              "discount_type": "discount_type0",
                              "status": "status4",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 42,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description2",
                              "subscription": {},
                              "subscription_item": {}
                            },
                            {
                              "id": "id3",
                              "value": 233.15,
                              "discount_type": "discount_type1",
                              "status": "status5",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 43,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description3",
                              "subscription": {},
                              "subscription_item": {}
                            }
                          ],
                          "increments": [
                            {
                              "id": "id9",
                              "value": 88.41,
                              "increment_type": "increment_type1",
                              "status": "status1",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 161,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description9",
                              "subscription": {},
                              "subscription_item": {}
                            }
                          ],
                          "subscription": {},
                          "name": "name0",
                          "quantity": 86,
                          "cycles": 106,
                          "deleted_at": "2016-03-13T12:52:32.123Z"
                        }
                      },
                      {
                        "id": "id5",
                        "value": 198.07,
                        "discount_type": "discount_type3",
                        "status": "status7",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 119,
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
                              "value": 233.14,
                              "discount_type": "discount_type0",
                              "status": "status4",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 42,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description2",
                              "subscription": {},
                              "subscription_item": {}
                            }
                          ],
                          "increments": [
                            {
                              "id": "id0",
                              "value": 88.42,
                              "increment_type": "increment_type2",
                              "status": "status2",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 162,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description0",
                              "subscription": {},
                              "subscription_item": {}
                            },
                            {
                              "id": "id1",
                              "value": 88.43,
                              "increment_type": "increment_type3",
                              "status": "status3",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 163,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description1",
                              "subscription": {},
                              "subscription_item": {}
                            }
                          ],
                          "subscription": {},
                          "name": "name1",
                          "quantity": 87,
                          "cycles": 107,
                          "deleted_at": "2016-03-13T12:52:32.123Z"
                        }
                      }
                    ],
                    "increments": [
                      {}
                    ],
                    "subscription": {},
                    "name": "name2",
                    "quantity": 162,
                    "cycles": 74,
                    "deleted_at": "2016-03-13T12:52:32.123Z"
                  }
                ],
                "statement_descriptor": "statement_descriptor3",
                "metadata": {
                  "key0": "metadata0",
                  "key1": "metadata1"
                },
                "setup": {
                  "id": "id7",
                  "description": "description3",
                  "amount": 51,
                  "status": "status1"
                },
                "gateway_affiliation_id": "gateway_affiliation_id9",
                "next_billing_at": "2016-03-13T12:52:32.123Z",
                "billing_day": 1,
                "minimum_price": 143,
                "canceled_at": "2016-03-13T12:52:32.123Z",
                "discounts": [
                  {}
                ],
                "increments": [
                  {},
                  {},
                  {}
                ],
                "boleto_due_days": 227,
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
                  "max_days_to_pay_past_due": 159
                },
                "manual_billing": true
              },
              "status": "status3",
              "duration": 231,
              "created_at": "created_at9",
              "updated_at": "updated_at7",
              "cycle": 171
            },
            "payment_method": "payment_method7",
            "currency": "currency3",
            "installments": 159,
            "status": "status5",
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "customer": {},
            "card": {
              "id": "id3",
              "last_four_digits": "last_four_digits9",
              "brand": "brand7",
              "holder_name": "holder_name9",
              "exp_month": 137,
              "exp_year": 159,
              "status": "status5",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "billing_address": {},
              "customer": {},
              "metadata": {
                "key0": "metadata0",
                "key1": "metadata1"
              },
              "type": "type7",
              "holder_document": "holder_document3",
              "deleted_at": "2016-03-13T12:52:32.123Z",
              "first_six_digits": "first_six_digits3",
              "label": "label3"
            },
            "items": [
              {},
              {},
              {}
            ],
            "statement_descriptor": "statement_descriptor3",
            "metadata": {
              "key0": "metadata0",
              "key1": "metadata1"
            },
            "setup": {
              "id": "id7",
              "description": "description3",
              "amount": 183,
              "status": "status1"
            },
            "gateway_affiliation_id": "gateway_affiliation_id9",
            "next_billing_at": "2016-03-13T12:52:32.123Z",
            "billing_day": 125,
            "minimum_price": 11,
            "canceled_at": "2016-03-13T12:52:32.123Z",
            "discounts": [
              {}
            ],
            "increments": [
              {},
              {},
              {}
            ],
            "boleto_due_days": 103,
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
              "max_days_to_pay_past_due": 35
            },
            "manual_billing": true
          },
          "cycle": {},
          "shipping": {},
          "metadata": {
            "key0": "metadata8"
          },
          "due_at": "2016-03-13T12:52:32.123Z",
          "canceled_at": "2016-03-13T12:52:32.123Z",
          "billing_at": "2016-03-13T12:52:32.123Z",
          "seen_at": "2016-03-13T12:52:32.123Z",
          "total_discount": 49,
          "total_increment": 121,
          "subscription_id": "subscription_id1"
        },
        "order": {
          "id": "id9",
          "code": "code7",
          "currency": "currency1",
          "items": [
            {},
            {}
          ],
          "customer": {},
          "status": "status9",
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "charges": [
            {},
            {}
          ],
          "invoice_url": "invoice_url1",
          "shipping": {},
          "metadata": {
            "key0": "metadata4",
            "key1": "metadata5",
            "key2": "metadata6"
          },
          "checkouts": [
            {}
          ],
          "ip": "ip3",
          "session_id": "session_id9",
          "location": {
            "latitude": "latitude3",
            "longitude": "longitude7"
          },
          "device": {
            "platform": "platform1"
          },
          "closed": true
        },
        "customer": {},
        "metadata": {
          "key0": "metadata4"
        },
        "paid_at": "2016-03-13T12:52:32.123Z",
        "canceled_at": "2016-03-13T12:52:32.123Z",
        "canceled_amount": 105,
        "paid_amount": 87,
        "interest_and_fine_paid": 91,
        "recurrency_cycle": "recurrency_cycle1"
      },
      "installments": 161,
      "billing_address": {},
      "subscription": {},
      "cycle": {},
      "shipping": {},
      "metadata": {
        "key0": "metadata4",
        "key1": "metadata3"
      },
      "due_at": "2016-03-13T12:52:32.123Z",
      "canceled_at": "2016-03-13T12:52:32.123Z",
      "billing_at": "2016-03-13T12:52:32.123Z",
      "seen_at": "2016-03-13T12:52:32.123Z",
      "total_discount": 229,
      "total_increment": 45,
      "subscription_id": "subscription_id5"
    },
    {
      "id": "id6",
      "code": "code4",
      "url": "url0",
      "amount": 122,
      "status": "status8",
      "payment_method": "payment_method6",
      "created_at": "2016-03-13T12:52:32.123Z",
      "items": [
        {
          "amount": 181,
          "description": "description3",
          "pricing_scheme": {
            "price": 29,
            "scheme_type": "scheme_type5",
            "price_brackets": [
              {
                "start_quantity": 238,
                "price": 176,
                "end_quantity": 246,
                "overage_price": 4
              }
            ],
            "minimum_price": 125,
            "percentage": 132.63
          },
          "price_bracket": {},
          "quantity": 39,
          "name": "name3",
          "subscription_item_id": "subscription_item_id7"
        },
        {
          "amount": 182,
          "description": "description4",
          "pricing_scheme": {
            "price": 30,
            "scheme_type": "scheme_type6",
            "price_brackets": [
              {
                "start_quantity": 239,
                "price": 177,
                "end_quantity": 247,
                "overage_price": 5
              },
              {
                "start_quantity": 240,
                "price": 178,
                "end_quantity": 248,
                "overage_price": 6
              }
            ],
            "minimum_price": 126,
            "percentage": 132.64
          },
          "price_bracket": {},
          "quantity": 40,
          "name": "name4",
          "subscription_item_id": "subscription_item_id8"
        },
        {
          "amount": 183,
          "description": "description5",
          "pricing_scheme": {
            "price": 31,
            "scheme_type": "scheme_type7",
            "price_brackets": [
              {
                "start_quantity": 240,
                "price": 178,
                "end_quantity": 248,
                "overage_price": 6
              },
              {
                "start_quantity": 241,
                "price": 179,
                "end_quantity": 249,
                "overage_price": 7
              },
              {
                "start_quantity": 242,
                "price": 180,
                "end_quantity": 250,
                "overage_price": 8
              }
            ],
            "minimum_price": 127,
            "percentage": 132.65
          },
          "price_bracket": {},
          "quantity": 41,
          "name": "name5",
          "subscription_item_id": "subscription_item_id9"
        }
      ],
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
          "customer": {
            "id": "id2",
            "name": "name2",
            "email": "email6",
            "delinquent": false,
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "document": "document6",
            "type": "type2",
            "fb_access_token": "fb_access_token6",
            "address": {
              "id": "id8",
              "street": "street8",
              "number": "number6",
              "complement": "complement4",
              "zip_code": "zip_code2",
              "neighborhood": "neighborhood4",
              "city": "city8",
              "state": "state4",
              "country": "country2",
              "status": "status0",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "customer": {},
              "metadata": {
                "key0": "metadata9",
                "key1": "metadata0"
              },
              "line_1": "line_12",
              "line_2": "line_26",
              "deleted_at": "2016-03-13T12:52:32.123Z"
            },
            "metadata": {
              "key0": "metadata3",
              "key1": "metadata4"
            },
            "phones": {
              "home_phone": {
                "country_code": "country_code4",
                "number": "number2",
                "area_code": "area_code4"
              },
              "mobile_phone": {
                "country_code": "country_code4",
                "number": "number2",
                "area_code": "area_code4"
              }
            },
            "fb_id": 204,
            "code": "code0",
            "document_type": "document_type0"
          },
          "metadata": {
            "key0": "metadata3"
          },
          "line_1": "line_16",
          "line_2": "line_20",
          "deleted_at": "2016-03-13T12:52:32.123Z"
        },
        "metadata": {
          "key0": "metadata3"
        },
        "phones": {
          "home_phone": {},
          "mobile_phone": {}
        },
        "fb_id": 154,
        "code": "code4",
        "document_type": "document_type4"
      },
      "charge": {
        "id": "id8",
        "code": "code6",
        "gateway_id": "gateway_id2",
        "amount": 252,
        "status": "status0",
        "currency": "currency8",
        "payment_method": "payment_method2",
        "due_at": "2016-03-13T12:52:32.123Z",
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "last_transaction": {
          "gateway_id": "gateway_id0",
          "amount": 54,
          "status": "status2",
          "success": false,
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "attempt_count": 30,
          "max_attempts": 18,
          "splits": [
            {
              "type": "type2",
              "amount": 242,
              "recipient": {
                "id": "id4",
                "name": "name4",
                "email": "email2",
                "document": "document8",
                "description": "description4",
                "type": "type6",
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
                    "email": "email2",
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
                        "key0": "metadata7"
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
                      "key0": "metadata1"
                    },
                    "automatic_anticipation_settings": {
                      "enabled": false,
                      "type": "type8",
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
                      "transfer_interval": "transfer_interval0",
                      "transfer_day": 44
                    },
                    "code": "code2",
                    "payment_mode": "payment_mode8"
                  },
                  "metadata": {
                    "key0": "metadata7"
                  },
                  "pix_key": "pix_key6"
                },
                "gateway_recipients": [
                  {}
                ],
                "metadata": {
                  "key0": "metadata1"
                },
                "automatic_anticipation_settings": {
                  "enabled": false,
                  "type": "type2",
                  "volume_percentage": 152,
                  "delay": 138,
                  "days": [
                    114,
                    115,
                    116
                  ]
                },
                "transfer_settings": {
                  "transfer_enabled": false,
                  "transfer_interval": "transfer_interval0",
                  "transfer_day": 62
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
            },
            {
              "type": "type3",
              "amount": 243,
              "recipient": {
                "id": "id5",
                "name": "name5",
                "email": "email1",
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
                    "email": "email1",
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
                        "key0": "metadata6",
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
                      "key0": "metadata2",
                      "key1": "metadata1",
                      "key2": "metadata0"
                    },
                    "automatic_anticipation_settings": {
                      "enabled": true,
                      "type": "type9",
                      "volume_percentage": 175,
                      "delay": 209,
                      "days": [
                        185
                      ]
                    },
                    "transfer_settings": {
                      "transfer_enabled": true,
                      "transfer_interval": "transfer_interval1",
                      "transfer_day": 45
                    },
                    "code": "code3",
                    "payment_mode": "payment_mode9"
                  },
                  "metadata": {
                    "key0": "metadata6",
                    "key1": "metadata5"
                  },
                  "pix_key": "pix_key7"
                },
                "gateway_recipients": [
                  {},
                  {}
                ],
                "metadata": {
                  "key0": "metadata2",
                  "key1": "metadata1",
                  "key2": "metadata0"
                },
                "automatic_anticipation_settings": {
                  "enabled": true,
                  "type": "type1",
                  "volume_percentage": 151,
                  "delay": 139,
                  "days": [
                    115
                  ]
                },
                "transfer_settings": {
                  "transfer_enabled": true,
                  "transfer_interval": "transfer_interval9",
                  "transfer_day": 61
                },
                "code": "code3",
                "payment_mode": "payment_mode9"
              },
              "gateway_id": "gateway_id3",
              "options": {
                "liable": true,
                "charge_processing_fee": true,
                "charge_remainder_fee": "charge_remainder_fee9"
              },
              "id": "id3"
            }
          ],
          "next_attempt": "2016-03-13T12:52:32.123Z",
          "transaction_type": "transaction",
          "id": "id0",
          "gateway_response": {
            "code": "code0",
            "errors": [
              {
                "message": "message7"
              },
              {
                "message": "message8"
              }
            ]
          },
          "antifraud_response": {
            "status": "status0",
            "return_code": "return_code8",
            "return_message": "return_message6",
            "provider_name": "provider_name6",
            "score": "score8"
          },
          "metadata": {
            "key0": "metadata9"
          },
          "split": [
            {}
          ],
          "interest": {
            "days": 216,
            "type": "type0",
            "amount": 34
          },
          "fine": {
            "days": 234,
            "type": "type2",
            "amount": 52
          },
          "max_days_to_pay_past_due": 222
        },
        "invoice": {
          "id": "id2",
          "code": "code0",
          "url": "url6",
          "amount": 198,
          "status": "status4",
          "payment_method": "payment_method8",
          "created_at": "2016-03-13T12:52:32.123Z",
          "items": [
            {},
            {}
          ],
          "customer": {},
          "charge": {
            "id": "id6",
            "code": "code4",
            "gateway_id": "gateway_id4",
            "amount": 92,
            "status": "status2",
            "currency": "currency4",
            "payment_method": "payment_method4",
            "due_at": "2016-03-13T12:52:32.123Z",
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "last_transaction": {
              "gateway_id": "gateway_id8",
              "amount": 150,
              "status": "status0",
              "success": false,
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "attempt_count": 126,
              "max_attempts": 114,
              "splits": [
                {},
                {},
                {}
              ],
              "next_attempt": "2016-03-13T12:52:32.123Z",
              "transaction_type": "transaction",
              "id": "id8",
              "gateway_response": {
                "code": "code8",
                "errors": [
                  {},
                  {},
                  {}
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
                "key0": "metadata5",
                "key1": "metadata4",
                "key2": "metadata3"
              },
              "split": [
                {},
                {}
              ],
              "interest": {
                "days": 216,
                "type": "type8",
                "amount": 34
              },
              "fine": {
                "days": 74,
                "type": "type0",
                "amount": 148
              },
              "max_days_to_pay_past_due": 62
            },
            "invoice": {},
            "order": {
              "id": "id0",
              "code": "code8",
              "currency": "currency0",
              "items": [
                {
                  "id": "id7",
                  "amount": 163,
                  "description": "description7",
                  "quantity": 21,
                  "category": "category5",
                  "code": "code5"
                },
                {
                  "id": "id8",
                  "amount": 164,
                  "description": "description8",
                  "quantity": 22,
                  "category": "category6",
                  "code": "code6"
                },
                {
                  "id": "id9",
                  "amount": 165,
                  "description": "description9",
                  "quantity": 23,
                  "category": "category7",
                  "code": "code7"
                }
              ],
              "customer": {},
              "status": "status2",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "charges": [
                {}
              ],
              "invoice_url": "invoice_url2",
              "shipping": {
                "amount": 202,
                "description": "description4",
                "recipient_name": "recipient_name2",
                "recipient_phone": "recipient_phone6",
                "address": {},
                "max_delivery_date": "2016-03-13T12:52:32.123Z",
                "estimated_delivery_date": "2016-03-13T12:52:32.123Z",
                "type": "type4"
              },
              "metadata": {
                "key0": "metadata7",
                "key1": "metadata6"
              },
              "checkouts": [
                {
                  "id": "id7",
                  "amount": 113,
                  "default_payment_method": "default_payment_method7",
                  "success_url": "success_url9",
                  "payment_url": "payment_url1",
                  "gateway_affiliation_id": "gateway_affiliation_id3",
                  "accepted_payment_methods": [
                    "accepted_payment_methods0"
                  ],
                  "status": "status9",
                  "skip_checkout_success_page": true,
                  "created_at": "2016-03-13T12:52:32.123Z",
                  "updated_at": "2016-03-13T12:52:32.123Z",
                  "canceled_at": "2016-03-13T12:52:32.123Z",
                  "customer_editable": true,
                  "customer": {},
                  "billingaddress": {},
                  "credit_card": {
                    "statementDescriptor": "statementDescriptor1",
                    "installments": [
                      {
                        "number": "number8",
                        "total": 70
                      },
                      {
                        "number": "number9",
                        "total": 71
                      }
                    ],
                    "authentication": {
                      "type": "type7",
                      "threed_secure": {
                        "mpi": "mpi3",
                        "eci": "eci5",
                        "cavv": "cavv1",
                        "transaction_Id": "transaction_Id1",
                        "success_url": "success_url7"
                      }
                    }
                  },
                  "boleto": {
                    "due_at": "2016-03-13T12:52:32.123Z",
                    "instructions": "instructions5"
                  },
                  "billing_address_editable": true,
                  "shipping": {
                    "amount": 211,
                    "description": "description1",
                    "recipient_name": "recipient_name9",
                    "recipient_phone": "recipient_phone3",
                    "address": {},
                    "max_delivery_date": "2016-03-13T12:52:32.123Z",
                    "estimated_delivery_date": "2016-03-13T12:52:32.123Z",
                    "type": "type1"
                  },
                  "shippable": true,
                  "closed_at": "2016-03-13T12:52:32.123Z",
                  "expires_at": "2016-03-13T12:52:32.123Z",
                  "currency": "currency7",
                  "debit_card": {
                    "statement_descriptor": "statement_descriptor1",
                    "authentication": {
                      "type": "type3",
                      "threed_secure": {
                        "mpi": "mpi9",
                        "eci": "eci1",
                        "cavv": "cavv7",
                        "transaction_Id": "transaction_Id7",
                        "success_url": "success_url3"
                      }
                    }
                  },
                  "bank_transfer": {
                    "bank": [
                      "bank2"
                    ]
                  },
                  "accepted_brands": [
                    "accepted_brands3"
                  ],
                  "pix": {
                    "expires_at": "2016-03-13T12:52:32.123Z",
                    "additional_information": [
                      {
                        "Name": "Name4",
                        "Value": "Value2"
                      }
                    ]
                  }
                },
                {
                  "id": "id8",
                  "amount": 114,
                  "default_payment_method": "default_payment_method8",
                  "success_url": "success_url0",
                  "payment_url": "payment_url2",
                  "gateway_affiliation_id": "gateway_affiliation_id4",
                  "accepted_payment_methods": [
                    "accepted_payment_methods1",
                    "accepted_payment_methods2"
                  ],
                  "status": "status0",
                  "skip_checkout_success_page": false,
                  "created_at": "2016-03-13T12:52:32.123Z",
                  "updated_at": "2016-03-13T12:52:32.123Z",
                  "canceled_at": "2016-03-13T12:52:32.123Z",
                  "customer_editable": false,
                  "customer": {},
                  "billingaddress": {},
                  "credit_card": {
                    "statementDescriptor": "statementDescriptor2",
                    "installments": [
                      {
                        "number": "number9",
                        "total": 71
                      },
                      {
                        "number": "number0",
                        "total": 72
                      },
                      {
                        "number": "number1",
                        "total": 73
                      }
                    ],
                    "authentication": {
                      "type": "type8",
                      "threed_secure": {
                        "mpi": "mpi4",
                        "eci": "eci6",
                        "cavv": "cavv2",
                        "transaction_Id": "transaction_Id2",
                        "success_url": "success_url8"
                      }
                    }
                  },
                  "boleto": {
                    "due_at": "2016-03-13T12:52:32.123Z",
                    "instructions": "instructions6"
                  },
                  "billing_address_editable": false,
                  "shipping": {
                    "amount": 212,
                    "description": "description2",
                    "recipient_name": "recipient_name0",
                    "recipient_phone": "recipient_phone4",
                    "address": {},
                    "max_delivery_date": "2016-03-13T12:52:32.123Z",
                    "estimated_delivery_date": "2016-03-13T12:52:32.123Z",
                    "type": "type2"
                  },
                  "shippable": false,
                  "closed_at": "2016-03-13T12:52:32.123Z",
                  "expires_at": "2016-03-13T12:52:32.123Z",
                  "currency": "currency8",
                  "debit_card": {
                    "statement_descriptor": "statement_descriptor2",
                    "authentication": {
                      "type": "type4",
                      "threed_secure": {
                        "mpi": "mpi0",
                        "eci": "eci2",
                        "cavv": "cavv8",
                        "transaction_Id": "transaction_Id8",
                        "success_url": "success_url4"
                      }
                    }
                  },
                  "bank_transfer": {
                    "bank": [
                      "bank3",
                      "bank4"
                    ]
                  },
                  "accepted_brands": [
                    "accepted_brands4",
                    "accepted_brands5"
                  ],
                  "pix": {
                    "expires_at": "2016-03-13T12:52:32.123Z",
                    "additional_information": [
                      {
                        "Name": "Name5",
                        "Value": "Value3"
                      },
                      {
                        "Name": "Name6",
                        "Value": "Value4"
                      }
                    ]
                  }
                }
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
              "key0": "metadata7",
              "key1": "metadata8"
            },
            "paid_at": "2016-03-13T12:52:32.123Z",
            "canceled_at": "2016-03-13T12:52:32.123Z",
            "canceled_amount": 202,
            "paid_amount": 72,
            "interest_and_fine_paid": 188,
            "recurrency_cycle": "recurrency_cycle0"
          },
          "installments": 238,
          "billing_address": {
            "street": "street4",
            "number": "number8",
            "zip_code": "zip_code8",
            "neighborhood": "neighborhood0",
            "city": "city4",
            "state": "state0",
            "country": "country8",
            "complement": "complement0",
            "line_1": "line_12",
            "line_2": "line_22"
          },
          "subscription": {
            "id": "id2",
            "code": "code0",
            "start_at": "2016-03-13T12:52:32.123Z",
            "interval": "interval0",
            "interval_count": 246,
            "billing_type": "billing_type4",
            "current_cycle": {
              "start_at": "2016-03-13T12:52:32.123Z",
              "end_at": "2016-03-13T12:52:32.123Z",
              "id": "id0",
              "billing_at": "2016-03-13T12:52:32.123Z",
              "subscription": {
                "id": "id4",
                "code": "code2",
                "start_at": "2016-03-13T12:52:32.123Z",
                "interval": "interval2",
                "interval_count": 116,
                "billing_type": "billing_type2",
                "current_cycle": {
                  "start_at": "2016-03-13T12:52:32.123Z",
                  "end_at": "2016-03-13T12:52:32.123Z",
                  "id": "id2",
                  "billing_at": "2016-03-13T12:52:32.123Z",
                  "subscription": {},
                  "status": "status4",
                  "duration": 100,
                  "created_at": "created_at0",
                  "updated_at": "updated_at8",
                  "cycle": 40
                },
                "payment_method": "payment_method6",
                "currency": "currency4",
                "installments": 28,
                "status": "status4",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "customer": {},
                "card": {
                  "id": "id2",
                  "last_four_digits": "last_four_digits8",
                  "brand": "brand6",
                  "holder_name": "holder_name2",
                  "exp_month": 6,
                  "exp_year": 34,
                  "status": "status6",
                  "created_at": "2016-03-13T12:52:32.123Z",
                  "updated_at": "2016-03-13T12:52:32.123Z",
                  "billing_address": {
                    "street": "street6",
                    "number": "number6",
                    "zip_code": "zip_code0",
                    "neighborhood": "neighborhood2",
                    "city": "city4",
                    "state": "state8",
                    "country": "country0",
                    "complement": "complement8",
                    "line_1": "line_10",
                    "line_2": "line_24"
                  },
                  "customer": {},
                  "metadata": {
                    "key0": "metadata1",
                    "key1": "metadata2",
                    "key2": "metadata3"
                  },
                  "type": "type8",
                  "holder_document": "holder_document4",
                  "deleted_at": "2016-03-13T12:52:32.123Z",
                  "first_six_digits": "first_six_digits2",
                  "label": "label2"
                },
                "items": [
                  {
                    "id": "id1",
                    "description": "description1",
                    "status": "status3",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "updated_at": "2016-03-13T12:52:32.123Z",
                    "pricing_scheme": {},
                    "discounts": [
                      {
                        "id": "id2",
                        "value": 198.04,
                        "discount_type": "discount_type0",
                        "status": "status4",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 116,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description2",
                        "subscription": {},
                        "subscription_item": {
                          "id": "id8",
                          "description": "description8",
                          "status": "status0",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "updated_at": "2016-03-13T12:52:32.123Z",
                          "pricing_scheme": {},
                          "discounts": [
                            {
                              "id": "id9",
                              "value": 233.11,
                              "discount_type": "discount_type7",
                              "status": "status1",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 39,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description9",
                              "subscription": {},
                              "subscription_item": {}
                            }
                          ],
                          "increments": [
                            {
                              "id": "id7",
                              "value": 88.39,
                              "increment_type": "increment_type9",
                              "status": "status9",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 159,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description7",
                              "subscription": {},
                              "subscription_item": {}
                            },
                            {
                              "id": "id8",
                              "value": 88.4,
                              "increment_type": "increment_type0",
                              "status": "status0",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 160,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description8",
                              "subscription": {},
                              "subscription_item": {}
                            }
                          ],
                          "subscription": {},
                          "name": "name8",
                          "quantity": 84,
                          "cycles": 104,
                          "deleted_at": "2016-03-13T12:52:32.123Z"
                        }
                      },
                      {
                        "id": "id3",
                        "value": 198.05,
                        "discount_type": "discount_type1",
                        "status": "status5",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 117,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description3",
                        "subscription": {},
                        "subscription_item": {
                          "id": "id9",
                          "description": "description9",
                          "status": "status1",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "updated_at": "2016-03-13T12:52:32.123Z",
                          "pricing_scheme": {},
                          "discounts": [
                            {
                              "id": "id0",
                              "value": 233.12,
                              "discount_type": "discount_type8",
                              "status": "status2",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 40,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description0",
                              "subscription": {},
                              "subscription_item": {}
                            },
                            {
                              "id": "id1",
                              "value": 233.13,
                              "discount_type": "discount_type9",
                              "status": "status3",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 41,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description1",
                              "subscription": {},
                              "subscription_item": {}
                            }
                          ],
                          "increments": [
                            {
                              "id": "id8",
                              "value": 88.4,
                              "increment_type": "increment_type0",
                              "status": "status0",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 160,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description8",
                              "subscription": {},
                              "subscription_item": {}
                            },
                            {
                              "id": "id9",
                              "value": 88.41,
                              "increment_type": "increment_type1",
                              "status": "status1",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 161,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description9",
                              "subscription": {},
                              "subscription_item": {}
                            },
                            {
                              "id": "id0",
                              "value": 88.42,
                              "increment_type": "increment_type2",
                              "status": "status2",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 162,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description0",
                              "subscription": {},
                              "subscription_item": {}
                            }
                          ],
                          "subscription": {},
                          "name": "name9",
                          "quantity": 85,
                          "cycles": 105,
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
                    "name": "name1",
                    "quantity": 161,
                    "cycles": 75,
                    "deleted_at": "2016-03-13T12:52:32.123Z"
                  }
                ],
                "statement_descriptor": "statement_descriptor4",
                "metadata": {
                  "key0": "metadata9"
                },
                "setup": {
                  "id": "id8",
                  "description": "description2",
                  "amount": 52,
                  "status": "status0"
                },
                "gateway_affiliation_id": "gateway_affiliation_id0",
                "next_billing_at": "2016-03-13T12:52:32.123Z",
                "billing_day": 0,
                "minimum_price": 142,
                "canceled_at": "2016-03-13T12:52:32.123Z",
                "discounts": [
                  {},
                  {}
                ],
                "increments": [
                  {},
                  {}
                ],
                "boleto_due_days": 228,
                "split": {
                  "enabled": false,
                  "rules": [
                    {}
                  ]
                },
                "boleto": {
                  "interest": {},
                  "fine": {},
                  "max_days_to_pay_past_due": 160
                },
                "manual_billing": false
              },
              "status": "status2",
              "duration": 230,
              "created_at": "created_at8",
              "updated_at": "updated_at6",
              "cycle": 170
            },
            "payment_method": "payment_method8",
            "currency": "currency2",
            "installments": 158,
            "status": "status6",
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "customer": {},
            "card": {
              "id": "id4",
              "last_four_digits": "last_four_digits0",
              "brand": "brand8",
              "holder_name": "holder_name0",
              "exp_month": 136,
              "exp_year": 160,
              "status": "status4",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "billing_address": {},
              "customer": {},
              "metadata": {
                "key0": "metadata9"
              },
              "type": "type6",
              "holder_document": "holder_document2",
              "deleted_at": "2016-03-13T12:52:32.123Z",
              "first_six_digits": "first_six_digits4",
              "label": "label4"
            },
            "items": [
              {},
              {}
            ],
            "statement_descriptor": "statement_descriptor2",
            "metadata": {
              "key0": "metadata1",
              "key1": "metadata2",
              "key2": "metadata3"
            },
            "setup": {
              "id": "id6",
              "description": "description4",
              "amount": 182,
              "status": "status2"
            },
            "gateway_affiliation_id": "gateway_affiliation_id8",
            "next_billing_at": "2016-03-13T12:52:32.123Z",
            "billing_day": 126,
            "minimum_price": 12,
            "canceled_at": "2016-03-13T12:52:32.123Z",
            "discounts": [
              {},
              {},
              {}
            ],
            "increments": [
              {}
            ],
            "boleto_due_days": 102,
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
              "max_days_to_pay_past_due": 34
            },
            "manual_billing": false
          },
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
          "total_discount": 50,
          "total_increment": 122,
          "subscription_id": "subscription_id2"
        },
        "order": {
          "id": "id8",
          "code": "code6",
          "currency": "currency2",
          "items": [
            {}
          ],
          "customer": {},
          "status": "status0",
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "charges": [
            {},
            {},
            {}
          ],
          "invoice_url": "invoice_url0",
          "shipping": {},
          "metadata": {
            "key0": "metadata5"
          },
          "checkouts": [
            {},
            {},
            {}
          ],
          "ip": "ip2",
          "session_id": "session_id0",
          "location": {
            "latitude": "latitude4",
            "longitude": "longitude6"
          },
          "device": {
            "platform": "platform2"
          },
          "closed": false
        },
        "customer": {},
        "metadata": {
          "key0": "metadata5",
          "key1": "metadata4",
          "key2": "metadata3"
        },
        "paid_at": "2016-03-13T12:52:32.123Z",
        "canceled_at": "2016-03-13T12:52:32.123Z",
        "canceled_amount": 106,
        "paid_amount": 88,
        "interest_and_fine_paid": 92,
        "recurrency_cycle": "recurrency_cycle2"
      },
      "installments": 162,
      "billing_address": {},
      "subscription": {},
      "cycle": {},
      "shipping": {},
      "metadata": {
        "key0": "metadata3",
        "key1": "metadata2",
        "key2": "metadata1"
      },
      "due_at": "2016-03-13T12:52:32.123Z",
      "canceled_at": "2016-03-13T12:52:32.123Z",
      "billing_at": "2016-03-13T12:52:32.123Z",
      "seen_at": "2016-03-13T12:52:32.123Z",
      "total_discount": 230,
      "total_increment": 46,
      "subscription_id": "subscription_id6"
    }
  ],
  "paging": {
    "total": 6,
    "previous": "previous2",
    "next": "next8"
  }
}
```

