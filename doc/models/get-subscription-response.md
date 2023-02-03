
# Get Subscription Response

## Structure

`GetSubscriptionResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | - |
| `code` | `string \| undefined` | Optional | - |
| `startAt` | `string \| undefined` | Optional | - |
| `interval` | `string \| undefined` | Optional | - |
| `intervalCount` | `number \| undefined` | Optional | - |
| `billingType` | `string \| undefined` | Optional | - |
| `currentCycle` | [`GetPeriodResponse \| undefined`](../../doc/models/get-period-response.md) | Optional | - |
| `paymentMethod` | `string \| undefined` | Optional | - |
| `currency` | `string \| undefined` | Optional | - |
| `installments` | `number \| undefined` | Optional | - |
| `status` | `string \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |
| `updatedAt` | `string \| undefined` | Optional | - |
| `customer` | [`GetCustomerResponse \| undefined`](../../doc/models/get-customer-response.md) | Optional | - |
| `card` | [`GetCardResponse \| undefined`](../../doc/models/get-card-response.md) | Optional | - |
| `items` | [`GetSubscriptionItemResponse[] \| undefined`](../../doc/models/get-subscription-item-response.md) | Optional | - |
| `statementDescriptor` | `string \| undefined` | Optional | - |
| `metadata` | `Record<string, string> \| undefined` | Optional | - |
| `setup` | [`GetSetupResponse \| undefined`](../../doc/models/get-setup-response.md) | Optional | - |
| `gatewayAffiliationId` | `string \| undefined` | Optional | Affiliation Code |
| `nextBillingAt` | `string \| undefined` | Optional | - |
| `billingDay` | `number \| undefined` | Optional | - |
| `minimumPrice` | `number \| undefined` | Optional | - |
| `canceledAt` | `string \| undefined` | Optional | - |
| `discounts` | [`GetDiscountResponse[] \| undefined`](../../doc/models/get-discount-response.md) | Optional | Subscription discounts |
| `increments` | [`GetIncrementResponse[] \| undefined`](../../doc/models/get-increment-response.md) | Optional | Subscription increments |
| `boletoDueDays` | `number \| undefined` | Optional | Days until boleto expires |
| `split` | [`GetSubscriptionSplitResponse \| undefined`](../../doc/models/get-subscription-split-response.md) | Optional | Subscription's split response |
| `boleto` | [`GetSubscriptionBoletoResponse \| undefined`](../../doc/models/get-subscription-boleto-response.md) | Optional | - |
| `manualBilling` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "id": null,
  "code": null,
  "start_at": null,
  "interval": null,
  "interval_count": null,
  "billing_type": null,
  "current_cycle": null,
  "payment_method": null,
  "currency": null,
  "installments": null,
  "status": null,
  "created_at": null,
  "updated_at": null,
  "customer": null,
  "card": null,
  "items": null,
  "statement_descriptor": null,
  "metadata": null,
  "setup": null,
  "gateway_affiliation_id": null,
  "next_billing_at": null,
  "billing_day": null,
  "minimum_price": null,
  "canceled_at": null,
  "discounts": null,
  "increments": null,
  "boleto_due_days": null,
  "split": null,
  "boleto": null,
  "manual_billing": null
}
```

