import {OriginalTrackingParameters, RenamedTrackingParameters} from './types';

export class TrackingParametersConverter {
  public static  convert(parameters: RenamedTrackingParameters): OriginalTrackingParameters {
    return {
      action_name: parameters.actionName,
      url: parameters.url,
      _id: parameters.uniqueUserId,
      rand: parameters.randomString,
      apiv: parameters.apiVersion,
    };
  }
}
