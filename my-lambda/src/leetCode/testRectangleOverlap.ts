import { AppContainer } from '../inversify.config.js'
import { TYPES } from '../utils/constants.js'
import { LeetCodeRectangleOverlap } from '../model/interfaces-leetCode.js'

const controller = AppContainer.get<LeetCodeRectangleOverlap>(TYPES.LeetCodeRectangleOverlap);
console.log(controller.rectangleOverlap([0, 0, 2, 2], [1, 1, 3, 3])); // true