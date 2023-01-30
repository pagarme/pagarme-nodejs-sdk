
# Get Split Response

Split response

## Structure

`GetSplitResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string \| null` | Required | Type |
| `amount` | `number \| null` | Required | Amount |
| `recipient` | [`GetRecipientResponse \| undefined`](../../doc/models/get-recipient-response.md) | Optional | Recipient |
| `gatewayId` | `string \| null` | Required | The split rule gateway id |
| `options` | [`GetSplitOptionsResponse \| undefined`](../../doc/models/get-split-options-response.md) | Optional | - |
| `id` | `string \| null` | Required | - |

## Example (as JSON)

```json
{
  "type": "type0",
  "amount": 46,
  "recipient": null,
  "gateway_id": "gateway_id0",
  "options": null,
  "id": "id0"
}
```

