
# List Addresses Response

Response object for listing addresses

## Structure

`ListAddressesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetAddressResponse[] \| null`](../../doc/models/get-address-response.md) | Required | The address objects |
| `paging` | [`PagingResponse \| null`](../../doc/models/paging-response.md) | Required | Paging object |

## Example (as JSON)

```json
{
  "data": [
    {
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
      "customer": null,
      "metadata": {
        "key0": "metadata4",
        "key1": "metadata3"
      },
      "line_1": "line_19",
      "line_2": "line_23",
      "deleted_at": null
    },
    {
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
      "customer": null,
      "metadata": {
        "key0": "metadata3",
        "key1": "metadata2",
        "key2": "metadata1"
      },
      "line_1": "line_10",
      "line_2": "line_24",
      "deleted_at": null
    }
  ],
  "paging": {
    "total": 6,
    "previous": "previous2",
    "next": "next8"
  }
}
```

