import {Container} from 'inversify';
import {TYPES} from './utils/constants.js';
import {AxiosAdapter} from './http/axios-adapter.js';
import {AxiosAdapterImpl} from './http/axios-adapter-impl.js';
import {getClientAdapter} from './services/get-client-adapter.js';
import {Clients} from './services/get-client-apadter-impl.js';
import {
    LeetCodeRectangleOverlap,
    LeetCodeLargestPerimeterTriangle,
    InterfaceLeetCodeRomanToInt
} from './model/interfaces-leetCode.js';
import {LargestPerimeterTriangle} from '../src/leetCode/largestPerimeterTriangle.js';
import {LargestRectangleOverlap} from '../src/leetCode/rectangleOverlap.js';
import {LeetCodeRomanToInt} from '../src/leetCode/romanToInt.js'

const AppContainer: Container = new Container();
AppContainer.bind<AxiosAdapter>(TYPES.AxiosAdapter).to(AxiosAdapterImpl);
AppContainer.bind<getClientAdapter>(TYPES.getClientAdapter).to(Clients);
AppContainer.bind<LeetCodeRectangleOverlap>(TYPES.LeetCodeRectangleOverlap).to(LargestRectangleOverlap);
AppContainer.bind<LeetCodeLargestPerimeterTriangle>(TYPES.LeetCodeLargestPerimeterTriangle).to(LargestPerimeterTriangle);
AppContainer.bind<InterfaceLeetCodeRomanToInt>(TYPES.LeetCodeRomanToInt).to(LeetCodeRomanToInt)

export {AppContainer};