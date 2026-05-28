import 'reflect-metadata';
import axios, { AxiosRequestConfig } from 'axios';
import { injectable } from 'inversify';
import { AxiosAdapter } from './axios-adapter.js';

@injectable()
export class AxiosAdapterImpl implements AxiosAdapter {
    async get(url: string, config?: AxiosRequestConfig): Promise<any> {
        try {
            console.log('requesting url:', url);
            const response = await axios.get(url, config);
            console.log('response:', response);
            return response.data;
        } catch (error) {
            console.error('error:', error);
            throw error;
        }
    }
}