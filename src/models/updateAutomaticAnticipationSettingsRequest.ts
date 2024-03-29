/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, number, object, optional, Schema, string } from '../schema';

export interface UpdateAutomaticAnticipationSettingsRequest {
  enabled?: boolean;
  type?: string;
  volumePercentage?: number;
  delay?: number;
  days?: number;
}

export const updateAutomaticAnticipationSettingsRequestSchema: Schema<UpdateAutomaticAnticipationSettingsRequest> = object(
  {
    enabled: ['enabled', optional(boolean())],
    type: ['type', optional(string())],
    volumePercentage: ['volume_percentage', optional(number())],
    delay: ['delay', optional(number())],
    days: ['days', optional(number())],
  }
);
