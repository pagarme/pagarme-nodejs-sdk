/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** Creates a 3D-S authentication payment */
export interface CreateThreeDSecureRequest {
  /** The MPI Vendor (MerchantPlugin) */
  mpi: string;
  /** The Cardholder Authentication Verification value */
  cavv?: string;
  /** The Electronic Commerce Indicator value */
  eci?: string;
  /** The TransactionId value (XID) */
  transactionId?: string;
  /** The success URL after the authentication */
  successUrl?: string;
  /** Directory Service Transaction Identifier */
  dsTransactionId?: string;
  /** ThreeDSecure Version */
  version?: string;
}

export const createThreeDSecureRequestSchema: Schema<CreateThreeDSecureRequest> = object(
  {
    mpi: ['mpi', string()],
    cavv: ['cavv', optional(string())],
    eci: ['eci', optional(string())],
    transactionId: ['transaction_id', optional(string())],
    successUrl: ['success_url', optional(string())],
    dsTransactionId: ['ds_transaction_id', optional(string())],
    version: ['version', optional(string())],
  }
);
