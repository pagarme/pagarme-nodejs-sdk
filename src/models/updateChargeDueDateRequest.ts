/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** Request for updating a charge due date */
export interface UpdateChargeDueDateRequest {
  /** The charge's new due date */
  dueAt?: string;
}

export const updateChargeDueDateRequestSchema: Schema<UpdateChargeDueDateRequest> = object(
  { dueAt: ['due_at', optional(string())] }
);
