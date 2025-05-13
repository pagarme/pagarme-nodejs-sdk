# Recipients

```ts
const recipientsController = new RecipientsController(client);
```

## Class Name

`RecipientsController`

## Methods

* [Update Recipient](../../doc/controllers/recipients.md#update-recipient)
* [Get Withdraw by Id](../../doc/controllers/recipients.md#get-withdraw-by-id)
* [Get Recipient](../../doc/controllers/recipients.md#get-recipient)
* [Get Balance](../../doc/controllers/recipients.md#get-balance)
* [Get Recipients](../../doc/controllers/recipients.md#get-recipients)
* [Update Recipient Default Bank Account](../../doc/controllers/recipients.md#update-recipient-default-bank-account)
* [Get Transfers](../../doc/controllers/recipients.md#get-transfers)
* [Get Transfer](../../doc/controllers/recipients.md#get-transfer)
* [Create Withdraw](../../doc/controllers/recipients.md#create-withdraw)
* [Get Anticipation](../../doc/controllers/recipients.md#get-anticipation)
* [Update Recipient Transfer Settings](../../doc/controllers/recipients.md#update-recipient-transfer-settings)
* [Get Recipient by Code](../../doc/controllers/recipients.md#get-recipient-by-code)
* [Update Automatic Anticipation Settings](../../doc/controllers/recipients.md#update-automatic-anticipation-settings)
* [Create Transfer](../../doc/controllers/recipients.md#create-transfer)
* [Create Recipient](../../doc/controllers/recipients.md#create-recipient)
* [Get Default Recipient](../../doc/controllers/recipients.md#get-default-recipient)
* [Create Anticipation](../../doc/controllers/recipients.md#create-anticipation)
* [Get Anticipation Limits](../../doc/controllers/recipients.md#get-anticipation-limits)
* [Update Recipient Metadata](../../doc/controllers/recipients.md#update-recipient-metadata)
* [Get Anticipations](../../doc/controllers/recipients.md#get-anticipations)
* [Get Withdrawals](../../doc/controllers/recipients.md#get-withdrawals)
* [Create KYC Link](../../doc/controllers/recipients.md#create-kyc-link)
* [Update Recipient Code](../../doc/controllers/recipients.md#update-recipient-code)


# Update Recipient

Updates a recipient

```ts
async updateRecipient(
  recipientId: string,
  request: UpdateRecipientRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetRecipientResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `recipientId` | `string` | Template, Required | Recipient id |
| `request` | [`UpdateRecipientRequest`](../../doc/models/update-recipient-request.md) | Body, Required | Recipient data |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetRecipientResponse](../../doc/models/get-recipient-response.md).

## Example Usage

```ts
const recipientId = 'recipient_id0';

const request: UpdateRecipientRequest = {
  name: 'name6',
  email: 'email0',
  description: 'description6',
  type: 'type4',
  status: 'status8',
  metadata: {
    'key0': 'metadata3'
  },
};

try {
  const { result, ...httpResponse } = await recipientsController.updateRecipient(
  recipientId,
  request
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Withdraw by Id

```ts
async getWithdrawById(
  recipientId: string,
  withdrawalId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetWithdrawResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `recipientId` | `string` | Template, Required | - |
| `withdrawalId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetWithdrawResponse](../../doc/models/get-withdraw-response.md).

## Example Usage

```ts
const recipientId = 'recipient_id0';

const withdrawalId = 'withdrawal_id2';

try {
  const { result, ...httpResponse } = await recipientsController.getWithdrawById(
  recipientId,
  withdrawalId
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Recipient

Retrieves recipient information

```ts
async getRecipient(
  recipientId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetRecipientResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `recipientId` | `string` | Template, Required | Recipiend id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetRecipientResponse](../../doc/models/get-recipient-response.md).

## Example Usage

```ts
const recipientId = 'recipient_id0';

try {
  const { result, ...httpResponse } = await recipientsController.getRecipient(recipientId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Balance

Get balance information for a recipient

```ts
async getBalance(
  recipientId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetBalanceResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `recipientId` | `string` | Template, Required | Recipient id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetBalanceResponse](../../doc/models/get-balance-response.md).

## Example Usage

```ts
const recipientId = 'recipient_id0';

try {
  const { result, ...httpResponse } = await recipientsController.getBalance(recipientId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Recipients

Retrieves paginated recipients information

```ts
async getRecipients(
  page?: number,
  size?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListRecipientResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `page` | `number \| undefined` | Query, Optional | Page number |
| `size` | `number \| undefined` | Query, Optional | Page size |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [ListRecipientResponse](../../doc/models/list-recipient-response.md).

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await recipientsController.getRecipients();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Recipient Default Bank Account

Updates the default bank account from a recipient

```ts
async updateRecipientDefaultBankAccount(
  recipientId: string,
  request: UpdateRecipientBankAccountRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetRecipientResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `recipientId` | `string` | Template, Required | Recipient id |
| `request` | [`UpdateRecipientBankAccountRequest`](../../doc/models/update-recipient-bank-account-request.md) | Body, Required | Bank account data |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetRecipientResponse](../../doc/models/get-recipient-response.md).

## Example Usage

```ts
const recipientId = 'recipient_id0';

const request: UpdateRecipientBankAccountRequest = {
  bankAccount: {
    holderName: 'holder_name0',
    holderType: 'holder_type6',
    holderDocument: 'holder_document8',
    bank: 'bank2',
    branchNumber: 'branch_number0',
    accountNumber: 'account_number4',
    accountCheckDigit: 'account_check_digit0',
    type: 'type6',
    metadata: {
      'key0': 'metadata1',
      'key1': 'metadata0'
    },
  },
  paymentMode: 'bank_transfer',
};

try {
  const { result, ...httpResponse } = await recipientsController.updateRecipientDefaultBankAccount(
  recipientId,
  request
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Transfers

Gets a paginated list of transfers for the recipient

```ts
async getTransfers(
  recipientId: string,
  page?: number,
  size?: number,
  status?: string,
  createdSince?: string,
  createdUntil?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListTransferResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `recipientId` | `string` | Template, Required | Recipient id |
| `page` | `number \| undefined` | Query, Optional | Page number |
| `size` | `number \| undefined` | Query, Optional | Page size |
| `status` | `string \| undefined` | Query, Optional | Filter for transfer status |
| `createdSince` | `string \| undefined` | Query, Optional | Filter for start range of transfer creation date |
| `createdUntil` | `string \| undefined` | Query, Optional | Filter for end range of transfer creation date |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [ListTransferResponse](../../doc/models/list-transfer-response.md).

## Example Usage

```ts
const recipientId = 'recipient_id0';

try {
  const { result, ...httpResponse } = await recipientsController.getTransfers(recipientId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Transfer

Gets a transfer

```ts
async getTransfer(
  recipientId: string,
  transferId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetTransferResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `recipientId` | `string` | Template, Required | Recipient id |
| `transferId` | `string` | Template, Required | Transfer id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetTransferResponse](../../doc/models/get-transfer-response.md).

## Example Usage

```ts
const recipientId = 'recipient_id0';

const transferId = 'transfer_id6';

try {
  const { result, ...httpResponse } = await recipientsController.getTransfer(
  recipientId,
  transferId
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Withdraw

```ts
async createWithdraw(
  recipientId: string,
  request: CreateWithdrawRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetWithdrawResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `recipientId` | `string` | Template, Required | - |
| `request` | [`CreateWithdrawRequest`](../../doc/models/create-withdraw-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetWithdrawResponse](../../doc/models/get-withdraw-response.md).

## Example Usage

```ts
const recipientId = 'recipient_id0';

const request: CreateWithdrawRequest = {
  amount: 242,
};

try {
  const { result, ...httpResponse } = await recipientsController.createWithdraw(
  recipientId,
  request
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Anticipation

Gets an anticipation

```ts
async getAnticipation(
  recipientId: string,
  anticipationId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetAnticipationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `recipientId` | `string` | Template, Required | Recipient id |
| `anticipationId` | `string` | Template, Required | Anticipation id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetAnticipationResponse](../../doc/models/get-anticipation-response.md).

## Example Usage

```ts
const recipientId = 'recipient_id0';

const anticipationId = 'anticipation_id0';

try {
  const { result, ...httpResponse } = await recipientsController.getAnticipation(
  recipientId,
  anticipationId
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Recipient Transfer Settings

```ts
async updateRecipientTransferSettings(
  recipientId: string,
  request: UpdateTransferSettingsRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetRecipientResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `recipientId` | `string` | Template, Required | Recipient Identificator |
| `request` | [`UpdateTransferSettingsRequest`](../../doc/models/update-transfer-settings-request.md) | Body, Required | - |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetRecipientResponse](../../doc/models/get-recipient-response.md).

## Example Usage

```ts
const recipientId = 'recipient_id0';

const request: UpdateTransferSettingsRequest = {
  transferEnabled: 'transfer_enabled2',
  transferInterval: 'transfer_interval6',
  transferDay: 'transfer_day6',
};

try {
  const { result, ...httpResponse } = await recipientsController.updateRecipientTransferSettings(
  recipientId,
  request
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Recipient by Code

Retrieves recipient information

```ts
async getRecipientByCode(
  code: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetRecipientResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | `string` | Template, Required | Recipient code |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetRecipientResponse](../../doc/models/get-recipient-response.md).

## Example Usage

```ts
const code = 'code8';

try {
  const { result, ...httpResponse } = await recipientsController.getRecipientByCode(code);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Automatic Anticipation Settings

Updates recipient metadata

```ts
async updateAutomaticAnticipationSettings(
  recipientId: string,
  request: UpdateAutomaticAnticipationSettingsRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetRecipientResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `recipientId` | `string` | Template, Required | Recipient id |
| `request` | [`UpdateAutomaticAnticipationSettingsRequest`](../../doc/models/update-automatic-anticipation-settings-request.md) | Body, Required | Metadata |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetRecipientResponse](../../doc/models/get-recipient-response.md).

## Example Usage

```ts
const recipientId = 'recipient_id0';

const request: UpdateAutomaticAnticipationSettingsRequest = {
};

try {
  const { result, ...httpResponse } = await recipientsController.updateAutomaticAnticipationSettings(
  recipientId,
  request
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Transfer

Creates a transfer for a recipient

```ts
async createTransfer(
  recipientId: string,
  request: CreateTransferRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetTransferResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `recipientId` | `string` | Template, Required | Recipient Id |
| `request` | [`CreateTransferRequest`](../../doc/models/create-transfer-request.md) | Body, Required | Transfer data |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetTransferResponse](../../doc/models/get-transfer-response.md).

## Example Usage

```ts
const recipientId = 'recipient_id0';

const request: CreateTransferRequest = {
  amount: 242,
  metadata: {
    'key0': 'metadata3'
  },
};

try {
  const { result, ...httpResponse } = await recipientsController.createTransfer(
  recipientId,
  request
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Recipient

Creates a new recipient

```ts
async createRecipient(
  request: CreateRecipientRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetRecipientResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `request` | [`CreateRecipientRequest`](../../doc/models/create-recipient-request.md) | Body, Required | Recipient data |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetRecipientResponse](../../doc/models/get-recipient-response.md).

## Example Usage

```ts
const request: CreateRecipientRequest = {
  defaultBankAccount: {
    holderName: 'holder_name4',
    holderType: 'holder_type0',
    holderDocument: 'holder_document2',
    bank: 'bank6',
    branchNumber: 'branch_number4',
    accountNumber: 'account_number8',
    accountCheckDigit: 'account_check_digit4',
    type: 'type2',
    metadata: {
      'key0': 'metadata5',
      'key1': 'metadata4',
      'key2': 'metadata3'
    },
  },
  metadata: {
    'key0': 'metadata3'
  },
  code: 'code4',
  paymentMode: 'bank_transfer',
};

try {
  const { result, ...httpResponse } = await recipientsController.createRecipient(request);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Default Recipient

```ts
async getDefaultRecipient(
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetRecipientResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetRecipientResponse](../../doc/models/get-recipient-response.md).

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await recipientsController.getDefaultRecipient();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Anticipation

Creates an anticipation

```ts
async createAnticipation(
  recipientId: string,
  request: CreateAnticipationRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetAnticipationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `recipientId` | `string` | Template, Required | Recipient id |
| `request` | [`CreateAnticipationRequest`](../../doc/models/create-anticipation-request.md) | Body, Required | Anticipation data |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetAnticipationResponse](../../doc/models/get-anticipation-response.md).

## Example Usage

```ts
const recipientId = 'recipient_id0';

const request: CreateAnticipationRequest = {
  amount: 242,
  timeframe: 'timeframe8',
  paymentDate: '2016-03-13T12:52:32.123Z',
};

try {
  const { result, ...httpResponse } = await recipientsController.createAnticipation(
  recipientId,
  request
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Anticipation Limits

Gets the anticipation limits for a recipient

```ts
async getAnticipationLimits(
  recipientId: string,
  timeframe: string,
  paymentDate: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetAnticipationLimitResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `recipientId` | `string` | Template, Required | Recipient id |
| `timeframe` | `string` | Query, Required | Timeframe |
| `paymentDate` | `string` | Query, Required | Anticipation payment date |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetAnticipationLimitResponse](../../doc/models/get-anticipation-limit-response.md).

## Example Usage

```ts
const recipientId = 'recipient_id0';

const timeframe = 'timeframe2';

const paymentDate = '2016-03-13T12:52:32.123Z';

try {
  const { result, ...httpResponse } = await recipientsController.getAnticipationLimits(
  recipientId,
  timeframe,
  paymentDate
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Recipient Metadata

Updates recipient metadata

```ts
async updateRecipientMetadata(
  recipientId: string,
  request: UpdateMetadataRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetRecipientResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `recipientId` | `string` | Template, Required | Recipient id |
| `request` | [`UpdateMetadataRequest`](../../doc/models/update-metadata-request.md) | Body, Required | Metadata |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetRecipientResponse](../../doc/models/get-recipient-response.md).

## Example Usage

```ts
const recipientId = 'recipient_id0';

const request: UpdateMetadataRequest = {
  metadata: {
    'key0': 'metadata3'
  },
};

try {
  const { result, ...httpResponse } = await recipientsController.updateRecipientMetadata(
  recipientId,
  request
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Anticipations

Retrieves a paginated list of anticipations from a recipient

```ts
async getAnticipations(
  recipientId: string,
  page?: number,
  size?: number,
  status?: string,
  timeframe?: string,
  paymentDateSince?: string,
  paymentDateUntil?: string,
  createdSince?: string,
  createdUntil?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListAnticipationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `recipientId` | `string` | Template, Required | Recipient id |
| `page` | `number \| undefined` | Query, Optional | Page number |
| `size` | `number \| undefined` | Query, Optional | Page size |
| `status` | `string \| undefined` | Query, Optional | Filter for anticipation status |
| `timeframe` | `string \| undefined` | Query, Optional | Filter for anticipation timeframe |
| `paymentDateSince` | `string \| undefined` | Query, Optional | Filter for start range for anticipation payment date |
| `paymentDateUntil` | `string \| undefined` | Query, Optional | Filter for end range for anticipation payment date |
| `createdSince` | `string \| undefined` | Query, Optional | Filter for start range for anticipation creation date |
| `createdUntil` | `string \| undefined` | Query, Optional | Filter for end range for anticipation creation date |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [ListAnticipationResponse](../../doc/models/list-anticipation-response.md).

## Example Usage

```ts
const recipientId = 'recipient_id0';

try {
  const { result, ...httpResponse } = await recipientsController.getAnticipations(recipientId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Withdrawals

Gets a paginated list of transfers for the recipient

```ts
async getWithdrawals(
  recipientId: string,
  page?: number,
  size?: number,
  status?: string,
  createdSince?: string,
  createdUntil?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListWithdrawals>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `recipientId` | `string` | Template, Required | - |
| `page` | `number \| undefined` | Query, Optional | - |
| `size` | `number \| undefined` | Query, Optional | - |
| `status` | `string \| undefined` | Query, Optional | - |
| `createdSince` | `string \| undefined` | Query, Optional | - |
| `createdUntil` | `string \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [ListWithdrawals](../../doc/models/list-withdrawals.md).

## Example Usage

```ts
const recipientId = 'recipient_id0';

try {
  const { result, ...httpResponse } = await recipientsController.getWithdrawals(recipientId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create KYC Link

Create a KYC link

```ts
async createKYCLink(
  recipientId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateKYCLinkResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `recipientId` | `string` | Template, Required | Recipient id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [CreateKYCLinkResponse](../../doc/models/create-kyc-link-response.md).

## Example Usage

```ts
const recipientId = 'recipient_id0';

try {
  const { result, ...httpResponse } = await recipientsController.createKYCLink(recipientId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Recipient Code

Updates recipient code

```ts
async updateRecipientCode(
  recipientId: string,
  request: UpdateRecipientCodeRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetRecipientResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `recipientId` | `string` | Template, Required | Recipient id |
| `request` | [`UpdateRecipientCodeRequest`](../../doc/models/update-recipient-code-request.md) | Body, Required | UpdateRecipientCodeRequest |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [GetRecipientResponse](../../doc/models/get-recipient-response.md).

## Example Usage

```ts
const recipientId = 'recipient_id0';

const request: UpdateRecipientCodeRequest = {
  code: 'code4',
};

try {
  const { result, ...httpResponse } = await recipientsController.updateRecipientCode(
  recipientId,
  request
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

