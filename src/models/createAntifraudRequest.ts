/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, string } from '../schema';
import {
  CreateClearSaleRequest,
  createClearSaleRequestSchema,
} from './createClearSaleRequest';

export interface CreateAntifraudRequest {
  type: string;
  clearsale: CreateClearSaleRequest;
}

export const createAntifraudRequestSchema: Schema<CreateAntifraudRequest> = object(
  {
    type: ['type', string()],
    clearsale: ['clearsale', lazy(() => createClearSaleRequestSchema)],
  }
);
