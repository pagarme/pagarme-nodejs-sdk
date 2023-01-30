
# List Subscriptions Response

Response object for listing subscriptions

## Structure

`ListSubscriptionsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetSubscriptionResponse[] \| null`](../../doc/models/get-subscription-response.md) | Required | The subscription objects |
| `paging` | [`PagingResponse \| null`](../../doc/models/paging-response.md) | Required | Paging object |

## Example (as JSON)

```json
{
  "data": [
    {
      "id": "id5",
      "code": "code3",
      "start_at": "2016-03-13T12:52:32.123Z",
      "interval": "interval3",
      "interval_count": 249,
      "billing_type": "billing_type9",
      "current_cycle": null,
      "payment_method": "payment_method5",
      "currency": "currency5",
      "installments": 161,
      "status": "status7",
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "customer": null,
      "card": {
        "id": "id9",
        "last_four_digits": "last_four_digits5",
        "brand": "brand3",
        "holder_name": "holder_name5",
        "exp_month": 55,
        "exp_year": 95,
        "status": "status1",
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "billing_address": {
          "street": "street1",
          "number": "number9",
          "zip_code": "zip_code5",
          "neighborhood": "neighborhood7",
          "city": "city1",
          "state": "state7",
          "country": "country5",
          "complement": "complement7",
          "line_1": "line_15",
          "line_2": "line_29"
        },
        "customer": null,
        "metadata": {
          "key0": "metadata0",
          "key1": "metadata9",
          "key2": "metadata8"
        },
        "type": "type9",
        "holder_document": "holder_document3",
        "deleted_at": null,
        "first_six_digits": "first_six_digits9",
        "label": "label9"
      },
      "items": [
        null,
        null
      ],
      "statement_descriptor": "statement_descriptor5",
      "metadata": {
        "key0": "metadata4",
        "key1": "metadata3"
      },
      "setup": {
        "id": "id9",
        "description": "description9",
        "amount": 185,
        "status": "status1"
      },
      "gateway_affiliation_id": "gateway_affiliation_id1",
      "next_billing_at": null,
      "billing_day": null,
      "minimum_price": null,
      "canceled_at": null,
      "discounts": null,
      "increments": [
        null
      ],
      "boleto_due_days": null,
      "split": {
        "enabled": true,
        "rules": [
          null,
          null
        ]
      },
      "boleto": null,
      "manual_billing": true
    },
    {
      "id": "id6",
      "code": "code4",
      "start_at": "2016-03-13T12:52:32.123Z",
      "interval": "interval4",
      "interval_count": 250,
      "billing_type": "billing_type0",
      "current_cycle": null,
      "payment_method": "payment_method6",
      "currency": "currency6",
      "installments": 162,
      "status": "status8",
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "customer": null,
      "card": {
        "id": "id0",
        "last_four_digits": "last_four_digits6",
        "brand": "brand4",
        "holder_name": "holder_name6",
        "exp_month": 56,
        "exp_year": 96,
        "status": "status2",
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "billing_address": {
          "street": "street2",
          "number": "number0",
          "zip_code": "zip_code6",
          "neighborhood": "neighborhood8",
          "city": "city2",
          "state": "state8",
          "country": "country6",
          "complement": "complement8",
          "line_1": "line_16",
          "line_2": "line_20"
        },
        "customer": null,
        "metadata": {
          "key0": "metadata9"
        },
        "type": "type0",
        "holder_document": "holder_document4",
        "deleted_at": null,
        "first_six_digits": "first_six_digits0",
        "label": "label0"
      },
      "items": [
        null,
        null,
        null
      ],
      "statement_descriptor": "statement_descriptor6",
      "metadata": {
        "key0": "metadata3",
        "key1": "metadata2",
        "key2": "metadata1"
      },
      "setup": {
        "id": "id0",
        "description": "description0",
        "amount": 186,
        "status": "status2"
      },
      "gateway_affiliation_id": "gateway_affiliation_id2",
      "next_billing_at": null,
      "billing_day": null,
      "minimum_price": null,
      "canceled_at": null,
      "discounts": null,
      "increments": [
        null,
        null
      ],
      "boleto_due_days": null,
      "split": {
        "enabled": false,
        "rules": [
          null,
          null,
          null
        ]
      },
      "boleto": null,
      "manual_billing": false
    }
  ],
  "paging": {
    "total": 6,
    "previous": "previous2",
    "next": "next8"
  }
}
```

