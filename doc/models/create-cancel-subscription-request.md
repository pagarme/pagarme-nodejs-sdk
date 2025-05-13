
# Create Cancel Subscription Request

Request for canceling a subscription

## Structure

`CreateCancelSubscriptionRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cancelPendingInvoices` | `boolean` | Required | Indicates if the pending invoices must also be canceled.<br><br>**Default**: `true` |

## Example (as JSON)

```json
{
  "cancel_pending_invoices": true
}
```

