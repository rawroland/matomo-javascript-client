export type RenamedTrackingParameters = {
  actionName?: string,
  url?: string,
  uniqueUserId?: string,
  randomString?: string,
  apiVersion?: string,
  userInfo?: UserInfo,
};

export type UserInfo = {
  dimensions?: RenamedDimension[],
};

export type RenamedDimension = {
  key: number,
  value: string,
};

export type OriginalTrackingParameters = {
  action_name?: string,
  url?: string,
  _id?: string,
  rand?: string,
  apiv?: string,
} & OriginalDimensions;

export type OriginalDimensions = {
  dimension0?: string,
  dimension1?: string,
  dimension2?: string,
  dimension3?: string,
  dimension4?: string,
  dimension5?: string,
  dimension6?: string,
  dimension7?: string,
  dimension8?: string,
  dimension9?: string,
};
