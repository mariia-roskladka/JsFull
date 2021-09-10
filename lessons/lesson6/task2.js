// //lesson 2 Sum array
'use strict';

/**
 * @param {number[]} arr
 * @return {number}
 */

function getSum(arr) {
    // put your code here
    if (!Array.isArray(arr)) {
        return null;
    }
    let sum = 0;
    for (const value of arr) {
        sum += value;
    }
    return sum;
}

// examples
getSum([1, 10, -10, 4]); // ==> 5
getSum([1]); // ==> 1
getSum([-8, 8]); // ==> 0
getSum(10, 12, 14); // ==> null