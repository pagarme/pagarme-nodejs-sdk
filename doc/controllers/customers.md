# Customers

```ts
const customersController = new CustomersController(client);
```

## Class Name

`CustomersController`

## Methods

* [Update Card](../../doc/controllers/customers.md#update-card)
* [Update Address](../../doc/controllers/customers.md#update-address)
* [Delete Access Token](../../doc/controllers/customers.md#delete-access-token)
* [Create Customer](../../doc/controllers/customers.md#create-customer)
* [Create Address](../../doc/controllers/customers.md#create-address)
* [Delete Access Tokens](../../doc/controllers/customers.md#delete-access-tokens)
* [Get Address](../../doc/controllers/customers.md#get-address)
* [Delete Address](../../doc/controllers/customers.md#delete-address)
* [Create Card](../../doc/controllers/customers.md#create-card)
* [Get Customers](../../doc/controllers/customers.md#get-customers)
* [Update Customer](../../doc/controllers/customers.md#update-customer)
* [Create Access Token](../../doc/controllers/customers.md#create-access-token)
* [Get Access Tokens](../../doc/controllers/customers.md#get-access-tokens)
* [Get Cards](../../doc/controllers/customers.md#get-cards)
* [Renew Card](../../doc/controllers/customers.md#renew-card)
* [Get Access Token](../../doc/controllers/customers.md#get-access-token)
* [Update Customer Metadata](../../doc/controllers/customers.md#update-customer-metadata)
* [Delete Card](../../doc/controllers/customers.md#delete-card)
* [Get Addresses](../../doc/controllers/customers.md#get-addresses)
* [Get Customer](../../doc/controllers/customers.md#get-customer)
* [Get Card](../../doc/controllers/customers.md#get-card)


# Update Card

Updates a card

```ts
async updateCard(
  customerId: string,
  cardId: string,
  request: UpdateCardRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetCardResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | Customer Id |
| `cardId` | `string` | Template, Required | Card id |
| `request` | [`UpdateCardRequest`](../../doc/models/update-card-request.md) | Body, Required | Request for updating a card |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetCardResponse`](../../doc/models/get-card-response.md)

## Example Usage

```ts
const customerId = 'customer_id8';
const cardId = 'card_id4';
const requestBillingAddressMetadata: Record<string, string> = {'key0' : 'metadata5', 'key1' : 'metadata6' } const requestBillingAddress: CreateAddressRequest = {
  street: 'street8',
  number: 'number4',
  zipCode: 'zip_code2',
  neighborhood: 'neighborhood4',
  city: 'city8',
  state: 'state4',
  country: 'country2',
  complement: 'complement6',
  metadata: requestBillingAddressMetadata,
  line1: 'line_18',
  line2: 'line_26',
};

const requestMetadata: Record<string, string> = {'key0' : 'metadata3' } const request: UpdateCardRequest = {
  holderName: 'holder_name2',
  expMonth: 10,
  expYear: 30,
  billingAddress: requestBillingAddress,
  metadata: requestMetadata,
  label: 'label6',
};

try {
  const { result, ...httpResponse } = await customersController.updateCard(customerId, cardId, request);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Address

Updates an address

```ts
async updateAddress(
  customerId: string,
  addressId: string,
  request: UpdateAddressRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetAddressResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | Customer Id |
| `addressId` | `string` | Template, Required | Address Id |
| `request` | [`UpdateAddressRequest`](../../doc/models/update-address-request.md) | Body, Required | Request for updating an address |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetAddressResponse`](../../doc/models/get-address-response.md)

## Example Usage

```ts
const customerId = 'customer_id8';
const addressId = 'address_id0';
const requestMetadata: Record<string, string> = {'key0' : 'metadata3' } const request: UpdateAddressRequest = {
  number: 'number4',
  complement: 'complement2',
  metadata: requestMetadata,
  line2: 'line_24',
};

try {
  const { result, ...httpResponse } = await customersController.updateAddress(customerId, addressId, request);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete Access Token

Delete a customer's access token

```ts
async deleteAccessToken(
  customerId: string,
  tokenId: string,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetAccessTokenResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | Customer Id |
| `tokenId` | `string` | Template, Required | Token Id |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetAccessTokenResponse`](../../doc/models/get-access-token-response.md)

## Example Usage

```ts
const customerId = 'customer_id8';
const tokenId = 'token_id6';
try {
  const { result, ...httpResponse } = await customersController.deleteAccessToken(customerId, tokenId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Customer

Creates a new customer

```ts
async createCustomer(
  request: CreateCustomerRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetCustomerResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `request` | [`CreateCustomerRequest`](../../doc/models/create-customer-request.md) | Body, Required | Request for creating a customer |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetCustomerResponse`](../../doc/models/get-customer-response.md)

## Example Usage

```ts
const requestAddressMetadata: Record<string, string> = {'key0' : 'metadata7' } const requestAddress: CreateAddressRequest = {
  street: 'street2',
  number: 'number0',
  zipCode: 'zip_code6',
  neighborhood: 'neighborhood8',
  city: 'city2',
  state: 'state8',
  country: 'country6',
  complement: 'complement8',
  metadata: requestAddressMetadata,
  line1: 'line_16',
  line2: 'line_20',
};

const requestMetadata: Record<string, string> = {'key0' : 'metadata3' } const requestPhones: CreatePhonesRequest = {};

const request: CreateCustomerRequest = {
  name: '{\n    "name": "Tony Stark"\n}',
  email: 'email0',
  document: 'document0',
  type: 'type4',
  address: requestAddress,
  metadata: requestMetadata,
  phones: requestPhones,
  code: 'code4',
};

try {
  const { result, ...httpResponse } = await customersController.createCustomer(request);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Address

Creates a new address for a customer

```ts
async createAddress(
  customerId: string,
  request: CreateAddressRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetAddressResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | Customer Id |
| `request` | [`CreateAddressRequest`](../../doc/models/create-address-request.md) | Body, Required | Request for creating an address |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetAddressResponse`](../../doc/models/get-address-response.md)

## Example Usage

```ts
const customerId = 'customer_id8';
const requestMetadata: Record<string, string> = {'key0' : 'metadata3' } const request: CreateAddressRequest = {
  street: 'street6',
  number: 'number4',
  zipCode: 'zip_code0',
  neighborhood: 'neighborhood2',
  city: 'city6',
  state: 'state2',
  country: 'country0',
  complement: 'complement2',
  metadata: requestMetadata,
  line1: 'line_10',
  line2: 'line_24',
};

try {
  const { result, ...httpResponse } = await customersController.createAddress(customerId, request);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete Access Tokens

Delete a Customer's access tokens

```ts
async deleteAccessTokens(
  customerId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListAccessTokensResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | Customer Id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListAccessTokensResponse`](../../doc/models/list-access-tokens-response.md)

## Example Usage

```ts
const customerId = 'customer_id8';
try {
  const { result, ...httpResponse } = await customersController.deleteAccessTokens(customerId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Address

Get a customer's address

```ts
async getAddress(
  customerId: string,
  addressId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetAddressResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | Customer id |
| `addressId` | `string` | Template, Required | Address Id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetAddressResponse`](../../doc/models/get-address-response.md)

## Example Usage

```ts
const customerId = 'customer_id8';
const addressId = 'address_id0';
try {
  const { result, ...httpResponse } = await customersController.getAddress(customerId, addressId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete Address

Delete a Customer's address

```ts
async deleteAddress(
  customerId: string,
  addressId: string,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetAddressResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | Customer Id |
| `addressId` | `string` | Template, Required | Address Id |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetAddressResponse`](../../doc/models/get-address-response.md)

## Example Usage

```ts
const customerId = 'customer_id8';
const addressId = 'address_id0';
try {
  const { result, ...httpResponse } = await customersController.deleteAddress(customerId, addressId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Card

Creates a new card for a customer

```ts
async createCard(
  customerId: string,
  request: CreateCardRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetCardResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | Customer id |
| `request` | [`CreateCardRequest`](../../doc/models/create-card-request.md) | Body, Required | Request for creating a card |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetCardResponse`](../../doc/models/get-card-response.md)

## Example Usage

```ts
const customerId = 'customer_id8';
const request: CreateCardRequest = {};
request.type = 'credit';

try {
  const { result, ...httpResponse } = await customersController.createCard(customerId, request);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Customers

Get all Customers

```ts
async getCustomers(
  name?: string,
  document?: string,
  page?: number,
  size?: number,
  email?: string,
  code?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListCustomersResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Query, Optional | Name of the Customer |
| `document` | `string \| undefined` | Query, Optional | Document of the Customer |
| `page` | `number \| undefined` | Query, Optional | Current page the the search<br>**Default**: `1` |
| `size` | `number \| undefined` | Query, Optional | Quantity pages of the search<br>**Default**: `10` |
| `email` | `string \| undefined` | Query, Optional | Customer's email |
| `code` | `string \| undefined` | Query, Optional | Customer's code |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListCustomersResponse`](../../doc/models/list-customers-response.md)

## Example Usage

```ts
const page = 1;
const size = 10;
try {
  const { result, ...httpResponse } = await customersController.getCustomers(None, None, page, size);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Customer

Updates a customer

```ts
async updateCustomer(
  customerId: string,
  request: UpdateCustomerRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetCustomerResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | Customer id |
| `request` | [`UpdateCustomerRequest`](../../doc/models/update-customer-request.md) | Body, Required | Request for updating a customer |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetCustomerResponse`](../../doc/models/get-customer-response.md)

## Example Usage

```ts
const customerId = 'customer_id8';
const request: UpdateCustomerRequest = {};

try {
  const { result, ...httpResponse } = await customersController.updateCustomer(customerId, request);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Access Token

Creates a access token for a customer

```ts
async createAccessToken(
  customerId: string,
  request: CreateAccessTokenRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetAccessTokenResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | Customer Id |
| `request` | [`CreateAccessTokenRequest`](../../doc/models/create-access-token-request.md) | Body, Required | Request for creating a access token |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetAccessTokenResponse`](../../doc/models/get-access-token-response.md)

## Example Usage

```ts
const customerId = 'customer_id8';
const request: CreateAccessTokenRequest = {};

try {
  const { result, ...httpResponse } = await customersController.createAccessToken(customerId, request);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Access Tokens

Get all access tokens from a customer

```ts
async getAccessTokens(
  customerId: string,
  page?: number,
  size?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListAccessTokensResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | Customer Id |
| `page` | `number \| undefined` | Query, Optional | Page number |
| `size` | `number \| undefined` | Query, Optional | Page size |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListAccessTokensResponse`](../../doc/models/list-access-tokens-response.md)

## Example Usage

```ts
const customerId = 'customer_id8';
try {
  const { result, ...httpResponse } = await customersController.getAccessTokens(customerId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Cards

Get all cards from a customer

```ts
async getCards(
  customerId: string,
  page?: number,
  size?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListCardsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | Customer Id |
| `page` | `number \| undefined` | Query, Optional | Page number |
| `size` | `number \| undefined` | Query, Optional | Page size |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListCardsResponse`](../../doc/models/list-cards-response.md)

## Example Usage

```ts
const customerId = 'customer_id8';
try {
  const { result, ...httpResponse } = await customersController.getCards(customerId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Renew Card

Renew a card

```ts
async renewCard(
  customerId: string,
  cardId: string,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetCardResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | Customer id |
| `cardId` | `string` | Template, Required | Card Id |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetCardResponse`](../../doc/models/get-card-response.md)

## Example Usage

```ts
const customerId = 'customer_id8';
const cardId = 'card_id4';
try {
  const { result, ...httpResponse } = await customersController.renewCard(customerId, cardId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Access Token

Get a Customer's access token

```ts
async getAccessToken(
  customerId: string,
  tokenId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetAccessTokenResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | Customer Id |
| `tokenId` | `string` | Template, Required | Token Id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetAccessTokenResponse`](../../doc/models/get-access-token-response.md)

## Example Usage

```ts
const customerId = 'customer_id8';
const tokenId = 'token_id6';
try {
  const { result, ...httpResponse } = await customersController.getAccessToken(customerId, tokenId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Customer Metadata

Updates the metadata a customer

```ts
async updateCustomerMetadata(
  customerId: string,
  request: UpdateMetadataRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetCustomerResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | The customer id |
| `request` | [`UpdateMetadataRequest`](../../doc/models/update-metadata-request.md) | Body, Required | Request for updating the customer metadata |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetCustomerResponse`](../../doc/models/get-customer-response.md)

## Example Usage

```ts
const customerId = 'customer_id8';
const requestMetadata: Record<string, string> = {'key0' : 'metadata3' } const request: UpdateMetadataRequest = {
  metadata: requestMetadata,
};

try {
  const { result, ...httpResponse } = await customersController.updateCustomerMetadata(customerId, request);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete Card

Delete a customer's card

```ts
async deleteCard(
  customerId: string,
  cardId: string,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetCardResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | Customer Id |
| `cardId` | `string` | Template, Required | Card Id |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetCardResponse`](../../doc/models/get-card-response.md)

## Example Usage

```ts
const customerId = 'customer_id8';
const cardId = 'card_id4';
try {
  const { result, ...httpResponse } = await customersController.deleteCard(customerId, cardId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Addresses

Gets all adressess from a customer

```ts
async getAddresses(
  customerId: string,
  page?: number,
  size?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListAddressesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | Customer id |
| `page` | `number \| undefined` | Query, Optional | Page number |
| `size` | `number \| undefined` | Query, Optional | Page size |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListAddressesResponse`](../../doc/models/list-addresses-response.md)

## Example Usage

```ts
const customerId = 'customer_id8';
try {
  const { result, ...httpResponse } = await customersController.getAddresses(customerId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Customer

Get a customer

```ts
async getCustomer(
  customerId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetCustomerResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | Customer Id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetCustomerResponse`](../../doc/models/get-customer-response.md)

## Example Usage

```ts
const customerId = 'customer_id8';
try {
  const { result, ...httpResponse } = await customersController.getCustomer(customerId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Card

Get a customer's card

```ts
async getCard(
  customerId: string,
  cardId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetCardResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Template, Required | Customer id |
| `cardId` | `string` | Template, Required | Card id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetCardResponse`](../../doc/models/get-card-response.md)

## Example Usage

```ts
const customerId = 'customer_id8';
const cardId = 'card_id4';
try {
  const { result, ...httpResponse } = await customersController.getCard(customerId, cardId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

