import sortNumbersByFirstRepeated from "../src/repeatedNumbersArray";

describe('Repeated Numbers Array Kata', function () {
    test('should return the only repeated element', function () {
        expect(sortNumbersByFirstRepeated([ 1, 2, 3, 1 ])).toEqual([ 1 ]);
    });

    test('should return the two repeated numbers ordered by proximity', function () {
        expect(sortNumbersByFirstRepeated([ 1, 2, 2, 1 ])).toEqual([ 2, 1 ]);
    });
});
