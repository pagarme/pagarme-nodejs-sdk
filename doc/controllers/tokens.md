# Tokens

```ts
const tokensController = new TokensController(client);
```

## Class Name

`TokensController`

## Methods

* [Create Token](../../doc/controllers/tokens.md#create-token)
* [Get Token](../../doc/controllers/tokens.md#get-token)


# Create Token

:information_source: **Note** This endpoint does not require authentication.

```ts
async createToken(
  publicKey: string,
  request: CreateTokenRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetTokenResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `publicKey` | `string` | Template, Required | Public key |
| `request` | [`CreateTokenRequest`](../../doc/models/create-token-request.md) | Body, Required | Request for creating a token |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetTokenResponse`](../../doc/models/get-token-response.md)

## Example Usage

```ts
const publicKey = 'public_key6';
const requestCard: CreateCardTokenRequest = {
  number: 'number2',
  holderName: 'holder_name6',
  expMonth: 80,
  expYear: 216,
  cvv: 'cvv8',
  brand: 'brand4',
  label: 'label0',
};

const request: CreateTokenRequest = {
  type: 'card',
  card: requestCard,
};

try {
  const { result, ...httpResponse } = await tokensController.createToken(publicKey, request);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Token

Gets a token from its id

:information_source: **Note** This endpoint does not require authentication.

```ts
async getToken(
  id: string,
  publicKey: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetTokenResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | Token id |
| `publicKey` | `string` | Template, Required | Public key |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetTokenResponse`](../../doc/models/get-token-response.md)

## Example Usage

```ts
const id = 'id0';
const publicKey = 'public_key6';
try {
  const { result, ...httpResponse } = await tokensController.getToken(id, publicKey);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

