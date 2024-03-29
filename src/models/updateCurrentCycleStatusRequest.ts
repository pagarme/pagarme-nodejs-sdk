/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface UpdateCurrentCycleStatusRequest {
  /** Status */
  status: string;
}

export const updateCurrentCycleStatusRequestSchema: Schema<UpdateCurrentCycleStatusRequest> = object(
  { status: ['status', string()] }
);
