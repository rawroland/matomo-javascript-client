import axios from 'axios';
import {TrackingParametersConverter} from './TrackingParametersConverter';
import {RenamedTrackingParameters} from './types';
import {objectToQueryString} from './utils';

export class Client {
  private readonly trackingEndpoint: string;
  private readonly rec: number = 1;
  private readonly apiVersion: string = '1';
  private readonly siteId: number;

  constructor(trackingEndpoint: string, siteId: number) {
    this.trackingEndpoint = trackingEndpoint;
    this.siteId = siteId;
  }

  public async track(parameters: RenamedTrackingParameters): Promise<void> {
    const trackingParameters: any = TrackingParametersConverter.convert({
      apiVersion: this.apiVersion,
      ...parameters,
    });
    const url = this.trackingEndpoint + '?' + objectToQueryString({
      rec: this.rec,
      idsite: this.siteId,
      ...trackingParameters,
    });
    await axios.get(url);
  }
}
