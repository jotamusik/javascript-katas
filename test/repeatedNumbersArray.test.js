
import repeatedArray from "../src/repeatedNumbersArray";

describe('Repeated Numbers Array Kata', function () {
    test('should return the only repeated element', function () {
        expect(repeatedArray([ 1, 2, 3, 1 ])).toEqual([1]);
    });
});