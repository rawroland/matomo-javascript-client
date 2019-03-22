import {TrackingParameters} from './types';

export class TrackingParametersConverter {
  public static  convert(parameters: TrackingParameters) {
    return {
      action_name: parameters.actionName,
      url: parameters.url,
      _id: parameters.uniqueUserId,
      rand: parameters.randomString,
      apiv: parameters.apiVersion,
    };
  }
}
