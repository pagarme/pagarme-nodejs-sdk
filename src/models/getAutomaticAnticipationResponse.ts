/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';

export interface GetAutomaticAnticipationResponse {
  enabled?: boolean | null;
  type?: string | null;
  volumePercentage?: number | null;
  delay?: number | null;
  days?: number[] | null;
}

export const getAutomaticAnticipationResponseSchema: Schema<GetAutomaticAnticipationResponse> = object(
  {
    enabled: ['enabled', optional(nullable(boolean()))],
    type: ['type', optional(nullable(string()))],
    volumePercentage: ['volume_percentage', optional(nullable(number()))],
    delay: ['delay', optional(nullable(number()))],
    days: ['days', optional(nullable(array(number())))],
  }
);
