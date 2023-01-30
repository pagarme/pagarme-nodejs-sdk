
# List Usages Response

Response model for listing the usages from a subscription item

## Structure

`ListUsagesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetUsageResponse[] \| null`](../../doc/models/get-usage-response.md) | Required | The usage objects |
| `paging` | [`PagingResponse \| null`](../../doc/models/paging-response.md) | Required | Paging object |

## Example (as JSON)

```json
{
  "data": [
    {
      "id": "id5",
      "quantity": 235,
      "description": "description5",
      "used_at": "2016-03-13T12:52:32.123Z",
      "created_at": "2016-03-13T12:52:32.123Z",
      "status": "status7",
      "deleted_at": null,
      "subscription_item": {
        "id": "id1",
        "description": "description1",
        "status": "status3",
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "pricing_scheme": {
          "price": 43,
          "scheme_type": "scheme_type3",
          "price_brackets": [
            {
              "start_quantity": 166,
              "price": 104,
              "end_quantity": null,
              "overage_price": null
            },
            {
              "start_quantity": 167,
              "price": 105,
              "end_quantity": null,
              "overage_price": null
            }
          ],
          "minimum_price": null,
          "percentage": null
        },
        "discounts": [
          {
            "id": "id2",
            "value": 180.74,
            "discount_type": "discount_type0",
            "status": "status4",
            "created_at": "2016-03-13T12:52:32.123Z",
            "cycles": null,
            "deleted_at": null,
            "description": null,
            "subscription": null,
            "subscription_item": null
          },
          {
            "id": "id3",
            "value": 180.75,
            "discount_type": "discount_type1",
            "status": "status5",
            "created_at": "2016-03-13T12:52:32.123Z",
            "cycles": null,
            "deleted_at": null,
            "description": null,
            "subscription": null,
            "subscription_item": null
          }
        ],
        "increments": [
          null,
          null,
          null
        ],
        "subscription": null,
        "name": "name1",
        "quantity": null,
        "cycles": null,
        "deleted_at": null
      },
      "code": null,
      "group": null,
      "amount": null
    },
    {
      "id": "id6",
      "quantity": 236,
      "description": "description6",
      "used_at": "2016-03-13T12:52:32.123Z",
      "created_at": "2016-03-13T12:52:32.123Z",
      "status": "status8",
      "deleted_at": null,
      "subscription_item": {
        "id": "id2",
        "description": "description2",
        "status": "status4",
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "pricing_scheme": {
          "price": 42,
          "scheme_type": "scheme_type4",
          "price_brackets": [
            {
              "start_quantity": 167,
              "price": 105,
              "end_quantity": null,
              "overage_price": null
            },
            {
              "start_quantity": 168,
              "price": 106,
              "end_quantity": null,
              "overage_price": null
            },
            {
              "start_quantity": 169,
              "price": 107,
              "end_quantity": null,
              "overage_price": null
            }
          ],
          "minimum_price": null,
          "percentage": null
        },
        "discounts": [
          {
            "id": "id3",
            "value": 180.75,
            "discount_type": "discount_type1",
            "status": "status5",
            "created_at": "2016-03-13T12:52:32.123Z",
            "cycles": null,
            "deleted_at": null,
            "description": null,
            "subscription": null,
            "subscription_item": null
          },
          {
            "id": "id4",
            "value": 180.76,
            "discount_type": "discount_type2",
            "status": "status6",
            "created_at": "2016-03-13T12:52:32.123Z",
            "cycles": null,
            "deleted_at": null,
            "description": null,
            "subscription": null,
            "subscription_item": null
          },
          {
            "id": "id5",
            "value": 180.77,
            "discount_type": "discount_type3",
            "status": "status7",
            "created_at": "2016-03-13T12:52:32.123Z",
            "cycles": null,
            "deleted_at": null,
            "description": null,
            "subscription": null,
            "subscription_item": null
          }
        ],
        "increments": [
          null
        ],
        "subscription": null,
        "name": "name2",
        "quantity": null,
        "cycles": null,
        "deleted_at": null
      },
      "code": null,
      "group": null,
      "amount": null
    }
  ],
  "paging": {
    "total": 6,
    "previous": "previous2",
    "next": "next8"
  }
}
```

