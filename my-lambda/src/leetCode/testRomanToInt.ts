import {AppContainer} from '../inversify.config.js'
import {TYPES} from '../utils/constants.js'
import {InterfaceLeetCodeRomanToInt} from '../model/interfaces-leetCode.js'

const controller = AppContainer.get<InterfaceLeetCodeRomanToInt>(TYPES.LeetCodeRomanToInt);
console.log(controller.romanToInt("L"));
console.log(controller.romanToInt("NB"));
console.log(controller.romanToInt("MM"));
