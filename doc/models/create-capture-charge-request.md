
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
  "amount": null,
  "split": null,
  "operation_reference": "operation_reference0"
}
```

