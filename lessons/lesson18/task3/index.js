export function sumOfSquares(a, b, ...anotherNumbers) {
    const result = a * a + b * b + anotherNumbers.reduce((acc, el) => el * el, 0);
    return result;
}

sumOfSquares(1, 2, 3, 4, 5, 6);
console.log(sumOfSquares(1, 2, 3, 4, 5, 6));