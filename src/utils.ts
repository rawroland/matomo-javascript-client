export const objectToQueryString = (object: any) => {
  const keys = Object.keys(object);
  return keys.map((key: string): string => `${key}=${object[key]}`).join('&');
};
