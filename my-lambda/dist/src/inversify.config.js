import { Container } from 'inversify';
import { TYPES } from './utils/constants.js';
import { AxiosAdapterImpl } from './http/axios-adapter-impl.js';
import { Clients } from './services/get-client-apadter-impl.js';
const AppContainer = new Container();
AppContainer.bind(TYPES.AxiosAdapter).to(AxiosAdapterImpl);
AppContainer.bind(TYPES.getClientAdapter).to(Clients);
export { AppContainer };
