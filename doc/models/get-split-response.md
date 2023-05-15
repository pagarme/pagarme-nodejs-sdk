
# Get Split Response

Split response

## Structure

`GetSplitResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string \| undefined` | Optional | Type |
| `amount` | `number \| undefined` | Optional | Amount |
| `recipient` | [`GetRecipientResponse \| undefined`](../../doc/models/get-recipient-response.md) | Optional | Recipient |
| `gatewayId` | `string \| undefined` | Optional | The split rule gateway id |
| `options` | [`GetSplitOptionsResponse \| undefined`](../../doc/models/get-split-options-response.md) | Optional | - |
| `id` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "type": "type0",
  "amount": 46,
  "recipient": {
    "id": "id8",
    "name": "name8",
    "email": "email8",
    "document": "document8",
    "description": "description2"
  },
  "gateway_id": "gateway_id0",
  "options": {
    "liable": false,
    "charge_processing_fee": false,
    "charge_remainder_fee": "charge_remainder_fee0"
  }
}
```

