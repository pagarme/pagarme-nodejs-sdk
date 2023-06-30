/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  CreateInvoiceRequest,
  createInvoiceRequestSchema,
} from '../models/createInvoiceRequest';
import {
  GetInvoiceResponse,
  getInvoiceResponseSchema,
} from '../models/getInvoiceResponse';
import {
  ListInvoicesResponse,
  listInvoicesResponseSchema,
} from '../models/listInvoicesResponse';
import {
  UpdateInvoiceStatusRequest,
  updateInvoiceStatusRequestSchema,
} from '../models/updateInvoiceStatusRequest';
import {
  UpdateMetadataRequest,
  updateMetadataRequestSchema,
} from '../models/updateMetadataRequest';
import { number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class InvoicesController extends BaseController {
  /**
   * Create an Invoice
   *
   * @param subscriptionId  Subscription Id
   * @param cycleId         Cycle Id
   * @param request
   * @param idempotencyKey
   * @return Response from the API call
   */
  async createInvoice(
    subscriptionId: string,
    cycleId: string,
    request?: CreateInvoiceRequest,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetInvoiceResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
      cycleId: [cycleId, string()],
      request: [request, optional(createInvoiceRequestSchema)],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.json(mapped.request);
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/cycles/${mapped.cycleId}/pay`;
    return req.callAsJson(getInvoiceResponseSchema, requestOptions);
  }

  /**
   * Gets all invoices
   *
   * @param page              Page number
   * @param size              Page size
   * @param code              Filter for Invoice's code
   * @param customerId        Filter for Invoice's customer id
   * @param subscriptionId    Filter for Invoice's subscription id
   * @param createdSince      Filter for Invoice's creation date start range
   * @param createdUntil      Filter for Invoices creation date end range
   * @param status            Filter for Invoice's status
   * @param dueSince          Filter for Invoice's due date start range
   * @param dueUntil          Filter for Invoice's due date end range
   * @param customerDocument
   * @return Response from the API call
   */
  async getInvoices(
    page?: number,
    size?: number,
    code?: string,
    customerId?: string,
    subscriptionId?: string,
    createdSince?: string,
    createdUntil?: string,
    status?: string,
    dueSince?: string,
    dueUntil?: string,
    customerDocument?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListInvoicesResponse>> {
    const req = this.createRequest('GET', '/invoices');
    const mapped = req.prepareArgs({
      page: [page, optional(number())],
      size: [size, optional(number())],
      code: [code, optional(string())],
      customerId: [customerId, optional(string())],
      subscriptionId: [subscriptionId, optional(string())],
      createdSince: [createdSince, optional(string())],
      createdUntil: [createdUntil, optional(string())],
      status: [status, optional(string())],
      dueSince: [dueSince, optional(string())],
      dueUntil: [dueUntil, optional(string())],
      customerDocument: [customerDocument, optional(string())],
    });
    req.query('page', mapped.page);
    req.query('size', mapped.size);
    req.query('code', mapped.code);
    req.query('customer_id', mapped.customerId);
    req.query('subscription_id', mapped.subscriptionId);
    req.query('created_since', mapped.createdSince);
    req.query('created_until', mapped.createdUntil);
    req.query('status', mapped.status);
    req.query('due_since', mapped.dueSince);
    req.query('due_until', mapped.dueUntil);
    req.query('customer_document', mapped.customerDocument);
    return req.callAsJson(listInvoicesResponseSchema, requestOptions);
  }

  /**
   * Cancels an invoice
   *
   * @param invoiceId       Invoice id
   * @param idempotencyKey
   * @return Response from the API call
   */
  async cancelInvoice(
    invoiceId: string,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetInvoiceResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      invoiceId: [invoiceId, string()],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.appendTemplatePath`/invoices/${mapped.invoiceId}`;
    return req.callAsJson(getInvoiceResponseSchema, requestOptions);
  }

  /**
   * Updates the metadata from an invoice
   *
   * @param invoiceId       The invoice id
   * @param request         Request for updating the invoice metadata
   * @param idempotencyKey
   * @return Response from the API call
   */
  async updateInvoiceMetadata(
    invoiceId: string,
    request: UpdateMetadataRequest,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetInvoiceResponse>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      invoiceId: [invoiceId, string()],
      request: [request, updateMetadataRequestSchema],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.json(mapped.request);
    req.appendTemplatePath`/invoices/${mapped.invoiceId}/metadata`;
    return req.callAsJson(getInvoiceResponseSchema, requestOptions);
  }

  /**
   * @param subscriptionId  Subscription Id
   * @return Response from the API call
   */
  async getPartialInvoice(
    subscriptionId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetInvoiceResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      subscriptionId: [subscriptionId, string()],
    });
    req.appendTemplatePath`/subscriptions/${mapped.subscriptionId}/partial-invoice`;
    return req.callAsJson(getInvoiceResponseSchema, requestOptions);
  }

  /**
   * Updates the status from an invoice
   *
   * @param invoiceId       Invoice Id
   * @param request         Request for updating an invoice's status
   * @param idempotencyKey
   * @return Response from the API call
   */
  async updateInvoiceStatus(
    invoiceId: string,
    request: UpdateInvoiceStatusRequest,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetInvoiceResponse>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      invoiceId: [invoiceId, string()],
      request: [request, updateInvoiceStatusRequestSchema],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.json(mapped.request);
    req.appendTemplatePath`/invoices/${mapped.invoiceId}/status`;
    return req.callAsJson(getInvoiceResponseSchema, requestOptions);
  }

  /**
   * Gets an invoice
   *
   * @param invoiceId  Invoice Id
   * @return Response from the API call
   */
  async getInvoice(
    invoiceId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetInvoiceResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ invoiceId: [invoiceId, string()] });
    req.appendTemplatePath`/invoices/${mapped.invoiceId}`;
    return req.callAsJson(getInvoiceResponseSchema, requestOptions);
  }
}
