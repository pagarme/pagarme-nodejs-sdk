/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  CreateAnticipationRequest,
  createAnticipationRequestSchema,
} from '../models/createAnticipationRequest';
import {
  CreateKYCLinkResponse,
  createKYCLinkResponseSchema,
} from '../models/createKYCLinkResponse';
import {
  CreateRecipientRequest,
  createRecipientRequestSchema,
} from '../models/createRecipientRequest';
import {
  CreateTransferRequest,
  createTransferRequestSchema,
} from '../models/createTransferRequest';
import {
  CreateWithdrawRequest,
  createWithdrawRequestSchema,
} from '../models/createWithdrawRequest';
import {
  GetAnticipationLimitResponse,
  getAnticipationLimitResponseSchema,
} from '../models/getAnticipationLimitResponse';
import {
  GetAnticipationResponse,
  getAnticipationResponseSchema,
} from '../models/getAnticipationResponse';
import {
  GetBalanceResponse,
  getBalanceResponseSchema,
} from '../models/getBalanceResponse';
import {
  GetRecipientResponse,
  getRecipientResponseSchema,
} from '../models/getRecipientResponse';
import {
  GetTransferResponse,
  getTransferResponseSchema,
} from '../models/getTransferResponse';
import {
  GetWithdrawResponse,
  getWithdrawResponseSchema,
} from '../models/getWithdrawResponse';
import {
  ListAnticipationResponse,
  listAnticipationResponseSchema,
} from '../models/listAnticipationResponse';
import {
  ListRecipientResponse,
  listRecipientResponseSchema,
} from '../models/listRecipientResponse';
import {
  ListTransferResponse,
  listTransferResponseSchema,
} from '../models/listTransferResponse';
import {
  ListWithdrawals,
  listWithdrawalsSchema,
} from '../models/listWithdrawals';
import {
  UpdateAutomaticAnticipationSettingsRequest,
  updateAutomaticAnticipationSettingsRequestSchema,
} from '../models/updateAutomaticAnticipationSettingsRequest';
import {
  UpdateMetadataRequest,
  updateMetadataRequestSchema,
} from '../models/updateMetadataRequest';
import {
  UpdateRecipientBankAccountRequest,
  updateRecipientBankAccountRequestSchema,
} from '../models/updateRecipientBankAccountRequest';
import {
  UpdateRecipientCodeRequest,
  updateRecipientCodeRequestSchema,
} from '../models/updateRecipientCodeRequest';
import {
  UpdateRecipientRequest,
  updateRecipientRequestSchema,
} from '../models/updateRecipientRequest';
import {
  UpdateTransferSettingsRequest,
  updateTransferSettingsRequestSchema,
} from '../models/updateTransferSettingsRequest';
import { number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class RecipientsController extends BaseController {
  /**
   * Updates a recipient
   *
   * @param recipientId     Recipient id
   * @param request         Recipient data
   * @param idempotencyKey
   * @return Response from the API call
   */
  async updateRecipient(
    recipientId: string,
    request: UpdateRecipientRequest,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetRecipientResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      recipientId: [recipientId, string()],
      request: [request, updateRecipientRequestSchema],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.json(mapped.request);
    req.appendTemplatePath`/recipients/${mapped.recipientId}`;
    req.authenticate([{ httpBasic: true }]);
    return req.callAsJson(getRecipientResponseSchema, requestOptions);
  }

  /**
   * Creates an anticipation
   *
   * @param recipientId     Recipient id
   * @param request         Anticipation data
   * @param idempotencyKey
   * @return Response from the API call
   */
  async createAnticipation(
    recipientId: string,
    request: CreateAnticipationRequest,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetAnticipationResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      recipientId: [recipientId, string()],
      request: [request, createAnticipationRequestSchema],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.json(mapped.request);
    req.appendTemplatePath`/recipients/${mapped.recipientId}/anticipations`;
    req.authenticate([{ httpBasic: true }]);
    return req.callAsJson(getAnticipationResponseSchema, requestOptions);
  }

  /**
   * Gets the anticipation limits for a recipient
   *
   * @param recipientId  Recipient id
   * @param timeframe    Timeframe
   * @param paymentDate  Anticipation payment date
   * @return Response from the API call
   */
  async getAnticipationLimits(
    recipientId: string,
    timeframe: string,
    paymentDate: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetAnticipationLimitResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      recipientId: [recipientId, string()],
      timeframe: [timeframe, string()],
      paymentDate: [paymentDate, string()],
    });
    req.query('timeframe', mapped.timeframe);
    req.query('payment_date', mapped.paymentDate);
    req.appendTemplatePath`/recipients/${mapped.recipientId}/anticipation_limits`;
    req.authenticate([{ httpBasic: true }]);
    return req.callAsJson(getAnticipationLimitResponseSchema, requestOptions);
  }

  /**
   * Retrieves paginated recipients information
   *
   * @param page Page number
   * @param size Page size
   * @return Response from the API call
   */
  async getRecipients(
    page?: number,
    size?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListRecipientResponse>> {
    const req = this.createRequest('GET', '/recipients');
    const mapped = req.prepareArgs({
      page: [page, optional(number())],
      size: [size, optional(number())],
    });
    req.query('page', mapped.page);
    req.query('size', mapped.size);
    req.authenticate([{ httpBasic: true }]);
    return req.callAsJson(listRecipientResponseSchema, requestOptions);
  }

  /**
   * @param recipientId
   * @param withdrawalId
   * @return Response from the API call
   */
  async getWithdrawById(
    recipientId: string,
    withdrawalId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetWithdrawResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      recipientId: [recipientId, string()],
      withdrawalId: [withdrawalId, string()],
    });
    req.appendTemplatePath`/recipients/${mapped.recipientId}/withdrawals/${mapped.withdrawalId}`;
    req.authenticate([{ httpBasic: true }]);
    return req.callAsJson(getWithdrawResponseSchema, requestOptions);
  }

  /**
   * Updates the default bank account from a recipient
   *
   * @param recipientId     Recipient id
   * @param request         Bank account data
   * @param idempotencyKey
   * @return Response from the API call
   */
  async updateRecipientDefaultBankAccount(
    recipientId: string,
    request: UpdateRecipientBankAccountRequest,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetRecipientResponse>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      recipientId: [recipientId, string()],
      request: [request, updateRecipientBankAccountRequestSchema],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.json(mapped.request);
    req.appendTemplatePath`/recipients/${mapped.recipientId}/default-bank-account`;
    req.authenticate([{ httpBasic: true }]);
    return req.callAsJson(getRecipientResponseSchema, requestOptions);
  }

  /**
   * Updates recipient metadata
   *
   * @param recipientId     Recipient id
   * @param request         Metadata
   * @param idempotencyKey
   * @return Response from the API call
   */
  async updateRecipientMetadata(
    recipientId: string,
    request: UpdateMetadataRequest,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetRecipientResponse>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      recipientId: [recipientId, string()],
      request: [request, updateMetadataRequestSchema],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.json(mapped.request);
    req.appendTemplatePath`/recipients/${mapped.recipientId}/metadata`;
    req.authenticate([{ httpBasic: true }]);
    return req.callAsJson(getRecipientResponseSchema, requestOptions);
  }

  /**
   * Gets a paginated list of transfers for the recipient
   *
   * @param recipientId   Recipient id
   * @param page          Page number
   * @param size          Page size
   * @param status        Filter for transfer status
   * @param createdSince  Filter for start range of transfer creation date
   * @param createdUntil  Filter for end range of transfer creation date
   * @return Response from the API call
   */
  async getTransfers(
    recipientId: string,
    page?: number,
    size?: number,
    status?: string,
    createdSince?: string,
    createdUntil?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListTransferResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      recipientId: [recipientId, string()],
      page: [page, optional(number())],
      size: [size, optional(number())],
      status: [status, optional(string())],
      createdSince: [createdSince, optional(string())],
      createdUntil: [createdUntil, optional(string())],
    });
    req.query('page', mapped.page);
    req.query('size', mapped.size);
    req.query('status', mapped.status);
    req.query('created_since', mapped.createdSince);
    req.query('created_until', mapped.createdUntil);
    req.appendTemplatePath`/recipients/${mapped.recipientId}/transfers`;
    req.authenticate([{ httpBasic: true }]);
    return req.callAsJson(listTransferResponseSchema, requestOptions);
  }

  /**
   * Gets a transfer
   *
   * @param recipientId  Recipient id
   * @param transferId   Transfer id
   * @return Response from the API call
   */
  async getTransfer(
    recipientId: string,
    transferId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetTransferResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      recipientId: [recipientId, string()],
      transferId: [transferId, string()],
    });
    req.appendTemplatePath`/recipients/${mapped.recipientId}/transfers/${mapped.transferId}`;
    req.authenticate([{ httpBasic: true }]);
    return req.callAsJson(getTransferResponseSchema, requestOptions);
  }

  /**
   * @param recipientId
   * @param request
   * @return Response from the API call
   */
  async createWithdraw(
    recipientId: string,
    request: CreateWithdrawRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetWithdrawResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      recipientId: [recipientId, string()],
      request: [request, createWithdrawRequestSchema],
    });
    req.json(mapped.request);
    req.appendTemplatePath`/recipients/${mapped.recipientId}/withdrawals`;
    req.authenticate([{ httpBasic: true }]);
    return req.callAsJson(getWithdrawResponseSchema, requestOptions);
  }

  /**
   * Updates recipient metadata
   *
   * @param recipientId     Recipient id
   * @param request         Metadata
   * @param idempotencyKey
   * @return Response from the API call
   */
  async updateAutomaticAnticipationSettings(
    recipientId: string,
    request: UpdateAutomaticAnticipationSettingsRequest,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetRecipientResponse>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      recipientId: [recipientId, string()],
      request: [request, updateAutomaticAnticipationSettingsRequestSchema],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.json(mapped.request);
    req.appendTemplatePath`/recipients/${mapped.recipientId}/automatic-anticipation-settings`;
    req.authenticate([{ httpBasic: true }]);
    return req.callAsJson(getRecipientResponseSchema, requestOptions);
  }

  /**
   * Gets an anticipation
   *
   * @param recipientId     Recipient id
   * @param anticipationId  Anticipation id
   * @return Response from the API call
   */
  async getAnticipation(
    recipientId: string,
    anticipationId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetAnticipationResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      recipientId: [recipientId, string()],
      anticipationId: [anticipationId, string()],
    });
    req.appendTemplatePath`/recipients/${mapped.recipientId}/anticipations/${mapped.anticipationId}`;
    req.authenticate([{ httpBasic: true }]);
    return req.callAsJson(getAnticipationResponseSchema, requestOptions);
  }

  /**
   * @param recipientId     Recipient Identificator
   * @param request
   * @param idempotencyKey
   * @return Response from the API call
   */
  async updateRecipientTransferSettings(
    recipientId: string,
    request: UpdateTransferSettingsRequest,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetRecipientResponse>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      recipientId: [recipientId, string()],
      request: [request, updateTransferSettingsRequestSchema],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.json(mapped.request);
    req.appendTemplatePath`/recipients/${mapped.recipientId}/transfer-settings`;
    req.authenticate([{ httpBasic: true }]);
    return req.callAsJson(getRecipientResponseSchema, requestOptions);
  }

  /**
   * Retrieves a paginated list of anticipations from a recipient
   *
   * @param recipientId        Recipient id
   * @param page               Page number
   * @param size               Page size
   * @param status             Filter for anticipation status
   * @param timeframe          Filter for anticipation timeframe
   * @param paymentDateSince   Filter for start range for anticipation payment date
   * @param paymentDateUntil   Filter for end range for anticipation payment date
   * @param createdSince       Filter for start range for anticipation creation date
   * @param createdUntil       Filter for end range for anticipation creation date
   * @return Response from the API call
   */
  async getAnticipations(
    recipientId: string,
    page?: number,
    size?: number,
    status?: string,
    timeframe?: string,
    paymentDateSince?: string,
    paymentDateUntil?: string,
    createdSince?: string,
    createdUntil?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListAnticipationResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      recipientId: [recipientId, string()],
      page: [page, optional(number())],
      size: [size, optional(number())],
      status: [status, optional(string())],
      timeframe: [timeframe, optional(string())],
      paymentDateSince: [paymentDateSince, optional(string())],
      paymentDateUntil: [paymentDateUntil, optional(string())],
      createdSince: [createdSince, optional(string())],
      createdUntil: [createdUntil, optional(string())],
    });
    req.query('page', mapped.page);
    req.query('size', mapped.size);
    req.query('status', mapped.status);
    req.query('timeframe', mapped.timeframe);
    req.query('payment_date_since', mapped.paymentDateSince);
    req.query('payment_date_until', mapped.paymentDateUntil);
    req.query('created_since', mapped.createdSince);
    req.query('created_until', mapped.createdUntil);
    req.appendTemplatePath`/recipients/${mapped.recipientId}/anticipations`;
    req.authenticate([{ httpBasic: true }]);
    return req.callAsJson(listAnticipationResponseSchema, requestOptions);
  }

  /**
   * Retrieves recipient information
   *
   * @param recipientId  Recipiend id
   * @return Response from the API call
   */
  async getRecipient(
    recipientId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetRecipientResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ recipientId: [recipientId, string()] });
    req.appendTemplatePath`/recipients/${mapped.recipientId}`;
    req.authenticate([{ httpBasic: true }]);
    return req.callAsJson(getRecipientResponseSchema, requestOptions);
  }

  /**
   * Get balance information for a recipient
   *
   * @param recipientId  Recipient id
   * @return Response from the API call
   */
  async getBalance(
    recipientId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetBalanceResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ recipientId: [recipientId, string()] });
    req.appendTemplatePath`/recipients/${mapped.recipientId}/balance`;
    req.authenticate([{ httpBasic: true }]);
    return req.callAsJson(getBalanceResponseSchema, requestOptions);
  }

  /**
   * Gets a paginated list of transfers for the recipient
   *
   * @param recipientId
   * @param page
   * @param size
   * @param status
   * @param createdSince
   * @param createdUntil
   * @return Response from the API call
   */
  async getWithdrawals(
    recipientId: string,
    page?: number,
    size?: number,
    status?: string,
    createdSince?: string,
    createdUntil?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListWithdrawals>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      recipientId: [recipientId, string()],
      page: [page, optional(number())],
      size: [size, optional(number())],
      status: [status, optional(string())],
      createdSince: [createdSince, optional(string())],
      createdUntil: [createdUntil, optional(string())],
    });
    req.query('page', mapped.page);
    req.query('size', mapped.size);
    req.query('status', mapped.status);
    req.query('created_since', mapped.createdSince);
    req.query('created_until', mapped.createdUntil);
    req.appendTemplatePath`/recipients/${mapped.recipientId}/withdrawals`;
    req.authenticate([{ httpBasic: true }]);
    return req.callAsJson(listWithdrawalsSchema, requestOptions);
  }

  /**
   * Creates a transfer for a recipient
   *
   * @param recipientId     Recipient Id
   * @param request         Transfer data
   * @param idempotencyKey
   * @return Response from the API call
   */
  async createTransfer(
    recipientId: string,
    request: CreateTransferRequest,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetTransferResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      recipientId: [recipientId, string()],
      request: [request, createTransferRequestSchema],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.json(mapped.request);
    req.appendTemplatePath`/recipients/${mapped.recipientId}/transfers`;
    req.authenticate([{ httpBasic: true }]);
    return req.callAsJson(getTransferResponseSchema, requestOptions);
  }

  /**
   * Creates a new recipient
   *
   * @param request         Recipient data
   * @param idempotencyKey
   * @return Response from the API call
   */
  async createRecipient(
    request: CreateRecipientRequest,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetRecipientResponse>> {
    const req = this.createRequest('POST', '/recipients');
    const mapped = req.prepareArgs({
      request: [request, createRecipientRequestSchema],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.json(mapped.request);
    req.authenticate([{ httpBasic: true }]);
    return req.callAsJson(getRecipientResponseSchema, requestOptions);
  }

  /**
   * Retrieves recipient information
   *
   * @param code Recipient code
   * @return Response from the API call
   */
  async getRecipientByCode(
    code: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetRecipientResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ code: [code, string()] });
    req.appendTemplatePath`/recipients/${mapped.code}`;
    req.authenticate([{ httpBasic: true }]);
    return req.callAsJson(getRecipientResponseSchema, requestOptions);
  }

  /**
   * @return Response from the API call
   */
  async getDefaultRecipient(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetRecipientResponse>> {
    const req = this.createRequest('GET', '/recipients/default');
    req.authenticate([{ httpBasic: true }]);
    return req.callAsJson(getRecipientResponseSchema, requestOptions);
  }

  /**
   * Create a KYC link
   *
   * @param recipientId  Recipient id
   * @return Response from the API call
   */
  async createKYCLink(
    recipientId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CreateKYCLinkResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({ recipientId: [recipientId, string()] });
    req.appendTemplatePath`/recipients/${mapped.recipientId}/kyc_link`;
    req.authenticate([{ httpBasic: true }]);
    return req.callAsJson(createKYCLinkResponseSchema, requestOptions);
  }

  /**
   * Updates recipient code
   *
   * @param recipientId     Recipient id
   * @param request         UpdateRecipientCodeRequest
   * @param idempotencyKey
   * @return Response from the API call
   */
  async updateRecipientCode(
    recipientId: string,
    request: UpdateRecipientCodeRequest,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetRecipientResponse>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      recipientId: [recipientId, string()],
      request: [request, updateRecipientCodeRequestSchema],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.json(mapped.request);
    req.appendTemplatePath`/recipients/${mapped.recipientId}/code`;
    req.authenticate([{ httpBasic: true }]);
    return req.callAsJson(getRecipientResponseSchema, requestOptions);
  }
}
