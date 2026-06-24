import { LeetCodeLargestPerimeterTriangle } from '../../src/model/interfaces-leetCode.js';

export class LargestPerimeterTriangle implements LeetCodeLargestPerimeterTriangle {

    public largestPerimeterTriangle = (nums: number[]): number => {
        let order: number[] = nums.sort((a, b) => a - b);
        let lastNumber: number = 0;
        let l1: number = 0;
        let l2: number = 0;
        // console.log("order: ", order);
        // console.log("lastNumber: ", lastNumber);
        // console.log("lastNumber -1 : ", l1);
        // console.log("lastNumber -2 : ", l2);
        let counter = nums.length - 1;
        console.log('counter: ', counter);
        for (counter; counter >= 2; counter--) {
            lastNumber = order[counter];
            console.log('lastNumber: ', lastNumber);
            l1 = order[counter - 1];
            l2 = order[counter - 2];
            // console.log("counter: ", nums[counter]);
            if (l1 + l2 > lastNumber) {
                console.log(l1 + l2 + lastNumber);
                return l1 + l2 + lastNumber;
            }
            console.log('NO APPLY');
        }
        console.log(0);
        return 0;
    }
}