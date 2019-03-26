import {TrackingParametersConverter} from '../src/TrackingParametersConverter';
import {bareOriginalParameters, fullOriginalParameters, fullParameters, parametersWithApiVersion} from './fixtures';

describe('Converter', () => {
  it('converts a bare parameter object', () => {
    const convertedParameters = TrackingParametersConverter.convert(parametersWithApiVersion);

    expect(convertedParameters).toEqual(bareOriginalParameters);
  });

  it('converts a full parameter object', () => {
    const convertedParameters = TrackingParametersConverter.convert(fullParameters);

    expect(convertedParameters).toEqual(fullOriginalParameters);
  });
});
