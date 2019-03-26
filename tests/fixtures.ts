import {OriginalTrackingParameters, RenamedTrackingParameters} from '../src/types';

export const baseParameters: RenamedTrackingParameters = {
  actionName: 'push_it',
  url: 'https://example.com',
  uniqueUserId: '3b99e3e0759811e8',
  randomString: '905e6838-4c8e-11e9-8646-d663bd873d93',
};

export const parametersWithApiVersion: RenamedTrackingParameters = {
  apiVersion: '1',
  ...baseParameters,
};

export const fullParameters: RenamedTrackingParameters = {
  ...parametersWithApiVersion,
  userInfo: {
    dimensions: [
      {key: 0, value: 'English'},
      {key: 3, value: 'Cologne'},
    ],
  },
};

export const bareOriginalParameters: OriginalTrackingParameters = {
  action_name: 'push_it',
  url: 'https://example.com',
  _id: '3b99e3e0759811e8',
  rand: '905e6838-4c8e-11e9-8646-d663bd873d93',
  apiv: '1',
};

export const fullOriginalParameters: OriginalTrackingParameters = {
  ...bareOriginalParameters,
  dimension0: fullParameters.userInfo.dimensions[0].value,
  dimension3: fullParameters.userInfo.dimensions[1].value,
};
