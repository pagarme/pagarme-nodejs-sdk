
# Create Subscription Boleto Request

Information about fines and interest on the "boleto" used from payment

## Structure

`CreateSubscriptionBoletoRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `interest` | [`CreateInterestRequest \| undefined`](../../doc/models/create-interest-request.md) | Optional | - |
| `fine` | [`CreateFineRequest \| undefined`](../../doc/models/create-fine-request.md) | Optional | - |
| `maxDaysToPayPastDue` | `number \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "interest": null,
  "fine": null,
  "max_days_to_pay_past_due": null
}
```

