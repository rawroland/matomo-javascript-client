import axios from 'axios';
import {MatomoClient} from '../src';
import {objectToQueryString} from '../src/utils';
import {bareOriginalParameters, baseParameters, parametersWithApiVersion} from './fixtures';

jest.mock('axios');

const siteId = 1;
const trackingEndpoint = `https://example.com/matomo.php`;
const parameterizedEndpoint = `https://example.com/matomo.php?rec=1&idsite=${siteId}`;

describe('Client', () => {
  let client: MatomoClient;
  beforeEach(() => {
    jest.resetModules();

    client = new MatomoClient(trackingEndpoint, siteId);

  });

  it('sends tracking information', async () => {
    await client.track(parametersWithApiVersion);

    expect(axios.get).toHaveBeenCalledWith(buildUrl(bareOriginalParameters));
  });

  it('sets the default api version', async () => {
    await client.track(baseParameters);

    expect(axios.get).toHaveBeenCalledWith(buildUrl(bareOriginalParameters));
  });
});

function buildUrl(parameters) {
  return parameterizedEndpoint + '&' + objectToQueryString(parameters);
}
