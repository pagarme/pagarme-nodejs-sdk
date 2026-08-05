
# List Payables Response

Response object for listing payable objects

## Structure

`ListPayablesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetPayableResponse[] \| null \| undefined`](../../doc/models/get-payable-response.md) | Optional | The payable object |
| `paging` | [`CursorPagingResponse`](../../doc/models/cursor-paging-response.md) | Required | Cursor paging response |

## Example

```ts
import { ListPayablesResponse } from 'pagarmeapisdklib';

const listPayablesResponse: ListPayablesResponse = {
  paging: {
    forwardCursor: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYWxhcGlDdXJzb3IiOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFlYUWlPaUl4TnpnMU9UTXpNVGN6SWl3aVpYaHdJam94TnpnMU9UTTJOemN6TENKcFpDSTZJalF6TWpVeU1ETXhOREFpZlEuTmtrUk85Slg3eC1YMVFLZ0ZIYkw3VGw4ZVV0NkR1ZWVQVlk5a0pHNXhxNCIsImlhdCI6MTc4NTkzMzE3MywiZXhwIjoxNzg1OTM2NzczfQ.5qM-BQbArZKXbfen5NnEXq6gbhyP-DrgsG1SMrpF4Y4',
  },
  data: [
    {
      id: '5b71f2a8b472ef521b224b75fd13c14e09d37822fd100f2cd425ef5aea02f5bf',
      status: 'paid',
      amount: 1100,
      gatewayId: null,
      chargeId: 'ch_123',
      splitId: null,
      bulkAnticipationId: null,
      recipientId: 're_cixm61j7e00doin6de8ocgttb',
      originatorModel: 'ownership_assignment',
      originatorModelId: null,
      originalPaymentDate: '2025-08-21T03:00:00Z',
      paymentMethod: 'credit_card',
      createdAt: '2025-08-20T10:30:00Z',
      settlementId: '03002e00-edde-6d4c-dd9e-ffaaafac08de',
      paymentProfileId: 'pp_03gd2e0o5kj37ujs38zgw9s9v',
      fee: 0,
      anticipationFee: 0,
      fraudCoverageFee: 0,
      installment: 44,
      anticipationId: 'anticipation_id0',
      paymentDate: '2025-08-18T03:00:00Z',
      type: 'credit',
      accrualAt: '2023-08-21T12:51:28Z',
      liquidationArrangementId: null,
    }
  ],
};
```

