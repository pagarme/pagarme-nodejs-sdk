
# Get Subscription Response

## Structure

`GetSubscriptionResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| null \| undefined` | Optional | - |
| `code` | `string \| null \| undefined` | Optional | - |
| `startAt` | `string \| null \| undefined` | Optional | - |
| `interval` | `string \| null \| undefined` | Optional | - |
| `intervalCount` | `number \| null \| undefined` | Optional | - |
| `billingType` | `string \| null \| undefined` | Optional | - |
| `currentCycle` | [`GetPeriodResponse \| null \| undefined`](../../doc/models/get-period-response.md) | Optional | - |
| `paymentMethod` | `string \| null \| undefined` | Optional | - |
| `currency` | `string \| null \| undefined` | Optional | - |
| `installments` | `number \| null \| undefined` | Optional | - |
| `status` | `string \| null \| undefined` | Optional | - |
| `createdAt` | `string \| null \| undefined` | Optional | - |
| `updatedAt` | `string \| null \| undefined` | Optional | - |
| `customer` | [`GetCustomerResponse \| null \| undefined`](../../doc/models/get-customer-response.md) | Optional | - |
| `card` | [`GetCardResponse \| null \| undefined`](../../doc/models/get-card-response.md) | Optional | - |
| `items` | [`GetSubscriptionItemResponse[] \| null \| undefined`](../../doc/models/get-subscription-item-response.md) | Optional | - |
| `statementDescriptor` | `string \| null \| undefined` | Optional | - |
| `metadata` | `Record<string, string> \| null \| undefined` | Optional | - |
| `setup` | [`GetSetupResponse \| null \| undefined`](../../doc/models/get-setup-response.md) | Optional | - |
| `gatewayAffiliationId` | `string \| null \| undefined` | Optional | Affiliation Code |
| `nextBillingAt` | `string \| null \| undefined` | Optional | - |
| `billingDay` | `number \| null \| undefined` | Optional | - |
| `minimumPrice` | `number \| null \| undefined` | Optional | - |
| `canceledAt` | `string \| null \| undefined` | Optional | - |
| `discounts` | [`GetDiscountResponse[] \| null \| undefined`](../../doc/models/get-discount-response.md) | Optional | Subscription discounts |
| `increments` | [`GetIncrementResponse[] \| null \| undefined`](../../doc/models/get-increment-response.md) | Optional | Subscription increments |
| `boletoDueDays` | `number \| null \| undefined` | Optional | Days until boleto expires |
| `split` | [`GetSubscriptionSplitResponse \| null \| undefined`](../../doc/models/get-subscription-split-response.md) | Optional | Subscription's split response |
| `boleto` | [`GetSubscriptionBoletoResponse \| null \| undefined`](../../doc/models/get-subscription-boleto-response.md) | Optional | - |
| `manualBilling` | `boolean \| null \| undefined` | Optional | - |
| `indirectAcceptor` | `string \| null \| undefined` | Optional | Business model identifier |

## Example (as JSON)

```json
{
  "boleto": {
    "interest": {
      "days": 2,
      "type": "percentage",
      "amount": 20
    },
    "fine": {
      "days": 2,
      "type": "flat",
      "amount": 10
    },
    "max_days_to_pay_past_due": 2
  },
  "id": "id4",
  "code": "code2",
  "start_at": "2016-03-13T12:52:32.123Z",
  "interval": "interval2",
  "interval_count": 224
}
```

