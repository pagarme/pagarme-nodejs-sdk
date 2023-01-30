
# Create Setup Request

Request for creating a Setup for a subscription. The setup is an order that will be created at the subscription creation.

## Structure

`CreateSetupRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | `number` | Required | Setup amount |
| `description` | `string` | Required | Description |
| `payment` | [`CreatePaymentRequest`](../../doc/models/create-payment-request.md) | Required | Payment data |

## Example (as JSON)

```json
{
  "amount": 46,
  "description": "description0",
  "payment": {
    "payment_method": "payment_method4",
    "credit_card": null,
    "debit_card": null,
    "boleto": null,
    "currency": null,
    "voucher": null,
    "split": null,
    "bank_transfer": null,
    "gateway_affiliation_id": null,
    "amount": null,
    "checkout": null,
    "customer_id": null,
    "customer": null,
    "metadata": null,
    "cash": null,
    "private_label": null,
    "pix": null
  }
}
```

