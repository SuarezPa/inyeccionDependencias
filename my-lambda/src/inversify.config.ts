import { Container } from 'inversify';
import { TYPES } from './utils/constants.js';
import { AxiosAdapter } from './http/axios-adapter.js';
import { AxiosAdapterImpl } from './http/axios-adapter-impl.js';
import { getClientAdapter } from './services/get-client-adapter.js';
import { Clients } from './services/get-client-apadter-impl.js';

const AppContainer: Container = new Container();
AppContainer.bind<AxiosAdapter>(TYPES.AxiosAdapter).to(AxiosAdapterImpl);
AppContainer.bind<getClientAdapter>(TYPES.getClientAdapter).to(Clients);

export { AppContainer };