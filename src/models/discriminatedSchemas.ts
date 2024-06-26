/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { discriminatedObject, Schema } from '../schema';
import { getBankTransferTransactionResponseSchema } from './getBankTransferTransactionResponse';
import { getBoletoTransactionResponseSchema } from './getBoletoTransactionResponse';
import { getCashTransactionResponseSchema } from './getCashTransactionResponse';
import { getCreditCardTransactionResponseSchema } from './getCreditCardTransactionResponse';
import { getDebitCardTransactionResponseSchema } from './getDebitCardTransactionResponse';
import { getMovementObjectBaseResponseSchema } from './getMovementObjectBaseResponse';
import { getMovementObjectFeeCollectionResponseSchema } from './getMovementObjectFeeCollectionResponse';
import { getMovementObjectPayableResponseSchema } from './getMovementObjectPayableResponse';
import { getMovementObjectRefundResponseSchema } from './getMovementObjectRefundResponse';
import { getMovementObjectSettlementResponseSchema } from './getMovementObjectSettlementResponse';
import { getMovementObjectTransferResponseSchema } from './getMovementObjectTransferResponse';
import { getPixTransactionResponseSchema } from './getPixTransactionResponse';
import { getPrivateLabelTransactionResponseSchema } from './getPrivateLabelTransactionResponse';
import { getSafetyPayTransactionResponseSchema } from './getSafetyPayTransactionResponse';
import { getTransactionResponseSchema } from './getTransactionResponse';
import { getVoucherTransactionResponseSchema } from './getVoucherTransactionResponse';

export const discriminatedGetTransactionResponseSchema: Schema<any> = discriminatedObject(
  'transactionType',
  'transaction_type',
  {
    'transaction': getTransactionResponseSchema,
    'safetypay': getSafetyPayTransactionResponseSchema,
    'voucher': getVoucherTransactionResponseSchema,
    'bank_transfer': getBankTransferTransactionResponseSchema,
    'boleto': getBoletoTransactionResponseSchema,
    'debit_card': getDebitCardTransactionResponseSchema,
    'cash': getCashTransactionResponseSchema,
    'private_label': getPrivateLabelTransactionResponseSchema,
    'credit_card': getCreditCardTransactionResponseSchema,
    'pix': getPixTransactionResponseSchema,
  },
  'transaction'
);
export const discriminatedGetMovementObjectBaseResponseSchema: Schema<any> = discriminatedObject(
  'object',
  'object',
  {
    'MovementObject': getMovementObjectBaseResponseSchema,
    'feeCollection': getMovementObjectFeeCollectionResponseSchema,
    'payable': getMovementObjectPayableResponseSchema,
    'refund': getMovementObjectRefundResponseSchema,
    'transfer': getMovementObjectTransferResponseSchema,
    'settlement': getMovementObjectSettlementResponseSchema,
  },
  'MovementObject'
);
