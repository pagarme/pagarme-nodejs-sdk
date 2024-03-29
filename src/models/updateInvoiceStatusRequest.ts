/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

/** Invoice Update Status Request */
export interface UpdateInvoiceStatusRequest {
  /** Status */
  status: string;
}

export const updateInvoiceStatusRequestSchema: Schema<UpdateInvoiceStatusRequest> = object(
  { status: ['status', string()] }
);
