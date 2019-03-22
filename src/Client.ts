import axios from 'axios';
import {TrackingParametersConverter} from './TrackingParametersConverter';
import {TrackingParameters} from './types';

export class Client {
  private readonly trackingEndpoint: string;
  private readonly siteId: number;
  private readonly rec: number = 1;

  constructor(trackingEndpoint: string, siteId: number) {
    this.trackingEndpoint = trackingEndpoint;
    this.siteId = siteId;
  }

  public async track(parameters: TrackingParameters): Promise<void> {
    const postParameters: any = TrackingParametersConverter.convert(parameters);
    axios.post(this.trackingEndpoint, {
      idsite: this.siteId,
      rec: this.rec,
      ...postParameters,
    });
  }
}
