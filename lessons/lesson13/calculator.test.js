import getSum, { getSquaredArray, getOddNumbers } from "./calculator";

it("should get squared numbers", () => {
    const result = getSquaredArray([2, 3, 4]);

    expect(result).toEqual([4, 9, 16]);
});

it("should keep odd numbers only", () => {
    const result = getOddNumbers([1, 2, 3, 4]);

    expect(result).toEqual([1, 3]);
});

it("should add numbers", () => {
    const result = getSum(1, 2);

    expect(result).toEqual(3);
});