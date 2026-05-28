var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import 'reflect-metadata';
import axios from 'axios';
import { injectable } from 'inversify';
let AxiosAdapterImpl = class AxiosAdapterImpl {
    async get(url, config) {
        try {
            console.log('requesting url:', url);
            const response = await axios.get(url, config);
            console.log('response:', response);
            return response.data;
        }
        catch (error) {
            console.error('error:', error);
            throw error;
        }
    }
};
AxiosAdapterImpl = __decorate([
    injectable()
], AxiosAdapterImpl);
export { AxiosAdapterImpl };
