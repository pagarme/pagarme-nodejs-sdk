
# Create Location Request

Request for creating a location

## Structure

`CreateLocationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `latitude` | `string` | Required | Latitude |
| `longitude` | `string` | Required | Longitude |

## Example

```ts
import { CreateLocationRequest } from 'pagarmeapisdklib';

const createLocationRequest: CreateLocationRequest = {
  latitude: 'latitude0',
  longitude: 'longitude0',
};
```

