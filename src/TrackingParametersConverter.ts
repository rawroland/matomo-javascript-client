import {
  OriginalDimensions,
  OriginalTrackingParameters,
  RenamedDimension,
  RenamedTrackingParameters,
  UserInfo,
} from './types';

export class TrackingParametersConverter {
  public static convert(parameters: RenamedTrackingParameters): OriginalTrackingParameters {
    const userInfo: UserInfo = parameters.userInfo || {};
    const dimensions: RenamedDimension[] = userInfo.dimensions || [];
    return {
      action_name: parameters.actionName,
      url: parameters.url,
      _id: parameters.uniqueUserId,
      rand: parameters.randomString,
      apiv: parameters.apiVersion,
      ...dimensions.reduce(this.toDimensionKeys, {}),
    };
  }

  private static toDimensionKeys(converted: OriginalDimensions, current: RenamedDimension): OriginalDimensions {
    return {
      ...converted,
      [`dimension${current.key}`]: current.value,
    };
  }
}
