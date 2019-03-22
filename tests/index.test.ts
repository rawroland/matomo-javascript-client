import axios from 'axios';
import {MatomoClient, TrackingParameters} from '../src';

jest.mock('axios');

const trackingEndpoint = 'https://example.com/matomo.php';
const siteId = 1;
describe('Client', () => {
  let client: MatomoClient;
  beforeEach(() => {
    jest.resetModules();
    client = new MatomoClient(trackingEndpoint, siteId);

  });

  it('posts tracks', async () => {
    const parameters: TrackingParameters = {
      actionName: 'push_it',
      url: 'https://example.com',
      uniqueUserId: '3b99e3e0759811e8',
      randomString: '905e6838-4c8e-11e9-8646-d663bd873d93',
      apiVersion: '1',
    };

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
