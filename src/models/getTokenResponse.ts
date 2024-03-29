/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, nullable, object, optional, Schema, string } from '../schema';
import {
  GetCardTokenResponse,
  getCardTokenResponseSchema,
} from './getCardTokenResponse';

/** Token data */
export interface GetTokenResponse {
  id?: string | null;
  type?: string | null;
  createdAt?: string | null;
  expiresAt?: string | null;
  card?: GetCardTokenResponse | null;
}

export const getTokenResponseSchema: Schema<GetTokenResponse> = object({
  id: ['id', optional(nullable(string()))],
  type: ['type', optional(nullable(string()))],
  createdAt: ['created_at', optional(nullable(string()))],
  expiresAt: ['expires_at', optional(nullable(string()))],
  card: ['card', optional(nullable(lazy(() => getCardTokenResponseSchema)))],
});
