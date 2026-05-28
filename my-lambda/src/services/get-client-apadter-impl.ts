import { inject, injectable } from 'inversify';
import { getClientAdapter } from './get-client-adapter.js';
import { TYPES } from '../utils/constants.js';
import { AxiosAdapter } from '../http/axios-adapter.js';

@injectable()
export class Clients implements getClientAdapter {
  constructor(@inject(TYPES.AxiosAdapter) private axiosAdapter: AxiosAdapter) { }

  public async getClient(url: string): Promise<any> {
    try {
      let responseClient = this.axiosAdapter.get(url);
      return responseClient;
    } catch (error) {
      console.error(`Error fetching client data: ${error}`);
      throw error;
    }
  }
}