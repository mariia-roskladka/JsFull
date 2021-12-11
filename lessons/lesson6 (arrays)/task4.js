//lesson 4 Spread and destructuring
'use strict';

/*
 * @param {number[]} numbers
 * @return {number[]}
 */
function swap(numbers) {
    const [start, ...rest] = numbers;
    return [...rest, start];
}


/*
 * @param {number[]} numbers
 * @return {number[]}
 */
function swapManual(numbers) {
    let newMas = numbers.slice();
    const end = newMas.shift();
    newMas.push(end);
    return newMas;
}

// examples
swap([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
swapManual([1, 10, 9, 11]); // ==> [10, 9, 11, 1]