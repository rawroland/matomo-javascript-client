import axios from 'axios';
import {MatomoClient, TrackingParameters} from '../src';

jest.mock('axios');

const trackingEndpoint = 'https://example.com/matomo.php';
const siteId = 1;
describe('Client', () => {
  const parameters: TrackingParameters = {
    actionName: 'push_it',
    url: 'https://example.com',
    uniqueUserId: '3b99e3e0759811e8',
    randomString: '905e6838-4c8e-11e9-8646-d663bd873d93',
  };
  let client: MatomoClient;
  beforeEach(() => {
    jest.resetModules();

    client = new MatomoClient(trackingEndpoint, siteId);

  });
  it('posts tracks', async () => {
    await client.track({apiVersion: '1', ...parameters});

    const expectedPostParameters: any = {
      idsite: siteId,
      rec: 1,
      action_name: 'push_it',
      url: 'https://example.com',
      _id: '3b99e3e0759811e8',
      rand: '905e6838-4c8e-11e9-8646-d663bd873d93',
      apiv: '1',
    };
    expect(axios.post).toHaveBeenCalledWith(trackingEndpoint, expectedPostParameters);
  });

  it('sets the default api version', async () => {
    await client.track(parameters);

    const expectedPostParameters: any = {
      idsite: siteId,
      rec: 1,
      action_name: 'push_it',
      url: 'https://example.com',
      _id: '3b99e3e0759811e8',
      rand: '905e6838-4c8e-11e9-8646-d663bd873d93',
      apiv: '1',
    };
    expect(axios.post).toHaveBeenCalledWith(trackingEndpoint, expectedPostParameters);
  });
});
