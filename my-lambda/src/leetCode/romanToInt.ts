import {InterfaceLeetCodeRomanToInt} from '../model/interfaces-leetCode.js'

export class LeetCodeRomanToInt implements InterfaceLeetCodeRomanToInt {
    public romanToInt(s: string): {} {
        return this.getValueRomanNumber(s);
    }

    private getValueRomanNumber(data1: string): number {
        let data: Record<string, number> = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000
        };
        if (data[data1]) {
            return data[data1];
        }
        return 0;
    }
}