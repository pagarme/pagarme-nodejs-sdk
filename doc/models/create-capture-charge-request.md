
# Create Capture Charge Request

Request for capturing a charge

## Structure

`CreateCaptureChargeRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | `string` | Required | Code for the charge. Sending this field will update the code send on the charge and order creation. |
| `amount` | `number \| undefined` | Optional | The amount that will be captured |
| `split` | [`CreateSplitRequest[] \| undefined`](../../doc/models/create-split-request.md) | Optional | Splits |
| `operationReference` | `string` | Required | - |

## Example (as JSON)

```json
{
  "code": "code8",
  "amount": 46,
  "split": [
    {
      "type": "type6",
      "amount": 28,
      "recipient_id": "recipient_id6",
      "options": {
        "liable": false,
        "charge_processing_fee": false,
        "charge_remainder_fee": false
      },
      "split_rule_id": "split_rule_id6"
    },
    {
      "type": "type5",
      "amount": 27,
      "recipient_id": "recipient_id5",
      "options": {
        "liable": true,
        "charge_processing_fee": true,
        "charge_remainder_fee": true
      },
      "split_rule_id": "split_rule_id7"
    },
    {
      "type": "type4",
      "amount": 26,
      "recipient_id": "recipient_id4",
      "options": {
        "liable": false,
        "charge_processing_fee": false,
        "charge_remainder_fee": false
      },
      "split_rule_id": "split_rule_id8"
    }
  ],
  "operation_reference": "operation_reference0"
}
```

