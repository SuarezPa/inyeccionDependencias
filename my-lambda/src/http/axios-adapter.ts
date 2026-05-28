import {AxiosRequestConfig, AxiosResponse} from 'axios';

export interface AxiosAdapter {
    get(url: string, config?: AxiosRequestConfig): Promise<any>;
}