/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, object, optional, Schema, string } from '../schema';

export interface GetTransactionReportFileResponse {
  name?: string | null;
  date?: string | null;
}

export const getTransactionReportFileResponseSchema: Schema<GetTransactionReportFileResponse> = object(
  {
    name: ['name', optional(nullable(string()))],
    date: ['date', optional(nullable(string()))],
  }
);
