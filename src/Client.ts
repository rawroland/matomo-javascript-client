import axios from 'axios';
import {TrackingParametersConverter} from './TrackingParametersConverter';
import {TrackingParameters} from './types';

export class Client {
  private readonly trackingEndpoint: string;
  private readonly rec: number = 1;
  private readonly apiVersion: string = '1';

  constructor(trackingEndpoint: string, siteId: number) {
    this.trackingEndpoint = `${trackingEndpoint}?rec=${this.rec}&idsite=${siteId}`;
  }

  public async track(parameters: TrackingParameters): Promise<void> {
    const postParameters: any = TrackingParametersConverter.convert({
      apiVersion: this.apiVersion,
      ...parameters,
    });
    axios.post(this.trackingEndpoint, postParameters);
  }
}
