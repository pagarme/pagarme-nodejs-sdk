/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { discriminatedGetTransactionResponseSchema } from '../models/discriminatedSchemas';
import { GetTransactionResponse } from '../models/getTransactionResponse';
import { string } from '../schema';
import { BaseController } from './baseController';

export class TransactionsController extends BaseController {
  /**
   * @param transactionId
   * @return Response from the API call
   */
  async getTransaction(
    transactionId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetTransactionResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      transactionId: [transactionId, string()],
    });
    req.appendTemplatePath`/transactions/${mapped.transactionId}`;
    req.authenticate([{ httpBasic: true }]);
    return req.callAsJson(
      discriminatedGetTransactionResponseSchema,
      requestOptions
    );
  }
}
