
# List Invoices Response

Response object for listing invoices

## Structure

`ListInvoicesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetInvoiceResponse[] \| null`](../../doc/models/get-invoice-response.md) | Required | The Invoice objects |
| `paging` | [`PagingResponse \| null`](../../doc/models/paging-response.md) | Required | Paging object |

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
                "end_quantity": null,
                "overage_price": null
              },
              {
                "start_quantity": 238,
                "price": 176,
                "end_quantity": null,
                "overage_price": null
              },
              {
                "start_quantity": 239,
                "price": 177,
                "end_quantity": null,
                "overage_price": null
              }
            ],
            "minimum_price": null,
            "percentage": null
          },
          "price_bracket": {
            "start_quantity": 154,
            "price": 92,
            "end_quantity": null,
            "overage_price": null
          },
          "quantity": null,
          "name": null,
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
                "end_quantity": null,
                "overage_price": null
              }
            ],
            "minimum_price": null,
            "percentage": null
          },
          "price_bracket": {
            "start_quantity": 155,
            "price": 93,
            "end_quantity": null,
            "overage_price": null
          },
          "quantity": null,
          "name": null,
          "subscription_item_id": "subscription_item_id7"
        }
      ],
      "customer": null,
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
              "recipient": null,
              "gateway_id": "gateway_id1",
              "options": null,
              "id": "id1"
            }
          ],
          "next_attempt": null,
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
          "metadata": null,
          "split": [
            {
              "type": "type7",
              "amount": 255,
              "recipient": null,
              "gateway_id": "gateway_id7",
              "options": null,
              "id": "id7"
            },
            {
              "type": "type8",
              "amount": 0,
              "recipient": null,
              "gateway_id": "gateway_id8",
              "options": null,
              "id": "id8"
            },
            {
              "type": "type9",
              "amount": 1,
              "recipient": null,
              "gateway_id": "gateway_id9",
              "options": null,
              "id": "id9"
            }
          ],
          "interest": null,
          "fine": null,
          "max_days_to_pay_past_due": null
        },
        "invoice": null,
        "order": null,
        "customer": null,
        "metadata": {
          "key0": "metadata4"
        },
        "paid_at": null,
        "canceled_at": null,
        "canceled_amount": 105,
        "paid_amount": 87,
        "interest_and_fine_paid": null,
        "recurrency_cycle": null
      },
      "installments": 161,
      "billing_address": null,
      "subscription": null,
      "cycle": null,
      "shipping": null,
      "metadata": {
        "key0": "metadata4",
        "key1": "metadata3"
      },
      "due_at": null,
      "canceled_at": null,
      "billing_at": null,
      "seen_at": null,
      "total_discount": null,
      "total_increment": null,
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
                "end_quantity": null,
                "overage_price": null
              }
            ],
            "minimum_price": null,
            "percentage": null
          },
          "price_bracket": {
            "start_quantity": 155,
            "price": 93,
            "end_quantity": null,
            "overage_price": null
          },
          "quantity": null,
          "name": null,
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
                "end_quantity": null,
                "overage_price": null
              },
              {
                "start_quantity": 240,
                "price": 178,
                "end_quantity": null,
                "overage_price": null
              }
            ],
            "minimum_price": null,
            "percentage": null
          },
          "price_bracket": {
            "start_quantity": 156,
            "price": 94,
            "end_quantity": null,
            "overage_price": null
          },
          "quantity": null,
          "name": null,
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
                "end_quantity": null,
                "overage_price": null
              },
              {
                "start_quantity": 241,
                "price": 179,
                "end_quantity": null,
                "overage_price": null
              },
              {
                "start_quantity": 242,
                "price": 180,
                "end_quantity": null,
                "overage_price": null
              }
            ],
            "minimum_price": null,
            "percentage": null
          },
          "price_bracket": {
            "start_quantity": 157,
            "price": 95,
            "end_quantity": null,
            "overage_price": null
          },
          "quantity": null,
          "name": null,
          "subscription_item_id": "subscription_item_id9"
        }
      ],
      "customer": null,
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
              "recipient": null,
              "gateway_id": "gateway_id2",
              "options": null,
              "id": "id2"
            },
            {
              "type": "type3",
              "amount": 243,
              "recipient": null,
              "gateway_id": "gateway_id3",
              "options": null,
              "id": "id3"
            }
          ],
          "next_attempt": null,
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
          "metadata": null,
          "split": [
            {
              "type": "type8",
              "amount": 0,
              "recipient": null,
              "gateway_id": "gateway_id8",
              "options": null,
              "id": "id8"
            }
          ],
          "interest": null,
          "fine": null,
          "max_days_to_pay_past_due": null
        },
        "invoice": null,
        "order": null,
        "customer": null,
        "metadata": {
          "key0": "metadata5",
          "key1": "metadata4",
          "key2": "metadata3"
        },
        "paid_at": null,
        "canceled_at": null,
        "canceled_amount": 106,
        "paid_amount": 88,
        "interest_and_fine_paid": null,
        "recurrency_cycle": null
      },
      "installments": 162,
      "billing_address": null,
      "subscription": null,
      "cycle": null,
      "shipping": null,
      "metadata": {
        "key0": "metadata3",
        "key1": "metadata2",
        "key2": "metadata1"
      },
      "due_at": null,
      "canceled_at": null,
      "billing_at": null,
      "seen_at": null,
      "total_discount": null,
      "total_increment": null,
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

