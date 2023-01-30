
# List Cards Response

Response object for listing cards

## Structure

`ListCardsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetCardResponse[] \| null`](../../doc/models/get-card-response.md) | Required | The card objects |
| `paging` | [`PagingResponse \| null`](../../doc/models/paging-response.md) | Required | Paging object |

## Example (as JSON)

```json
{
  "data": [
    {
      "id": "id5",
      "last_four_digits": "last_four_digits1",
      "brand": "brand9",
      "holder_name": "holder_name1",
      "exp_month": 125,
      "exp_year": 165,
      "status": "status7",
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "billing_address": {
        "street": "street7",
        "number": "number5",
        "zip_code": "zip_code1",
        "neighborhood": "neighborhood3",
        "city": "city7",
        "state": "state3",
        "country": "country1",
        "complement": "complement3",
        "line_1": "line_11",
        "line_2": "line_25"
      },
      "customer": null,
      "metadata": {
        "key0": "metadata4",
        "key1": "metadata3"
      },
      "type": "type5",
      "holder_document": "holder_document9",
      "deleted_at": null,
      "first_six_digits": "first_six_digits5",
      "label": "label5"
    },
    {
      "id": "id6",
      "last_four_digits": "last_four_digits2",
      "brand": "brand0",
      "holder_name": "holder_name2",
      "exp_month": 126,
      "exp_year": 166,
      "status": "status8",
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "billing_address": {
        "street": "street8",
        "number": "number6",
        "zip_code": "zip_code2",
        "neighborhood": "neighborhood4",
        "city": "city8",
        "state": "state4",
        "country": "country2",
        "complement": "complement4",
        "line_1": "line_12",
        "line_2": "line_26"
      },
      "customer": null,
      "metadata": {
        "key0": "metadata3",
        "key1": "metadata2",
        "key2": "metadata1"
      },
      "type": "type6",
      "holder_document": "holder_document0",
      "deleted_at": null,
      "first_six_digits": "first_six_digits6",
      "label": "label6"
    }
  ],
  "paging": {
    "total": 6,
    "previous": "previous2",
    "next": "next8"
  }
}
```

