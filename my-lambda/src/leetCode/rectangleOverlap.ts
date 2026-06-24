import { LeetCodeRectangleOverlap } from '../model/interfaces-leetCode.js';

export class LargestRectangleOverlap implements LeetCodeRectangleOverlap {
    rectangleOverlap(rec1: number[], rec2: number[]): boolean {
        const [x1, y1, x2, y2] = rec1;
        const [x3, y3, x4, y4] = rec2;
        // rec1 está completamente a la izquierda de rec2
        if (x2 <= x3) return false;
        // rec1 está completamente a la derecha de rec2
        if (x1 >= x4) return false;
        // rec1 está completamente debajo de rec2
        if (y2 <= y3) return false;
        // rec1 está completamente encima de rec2
        if (y1 >= y4) return false;
        return true;
    }
}