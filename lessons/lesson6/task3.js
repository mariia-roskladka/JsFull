// //lesson 3 Special numbers
"use strict";

/**
 * @param {number} from
 * @param {number} to
 * @return {number[]}
 */

function getSpecialNumbers(from, to) {
    // put your code here
    let arr = [];
    for (let i = from; i <= to; i++) {
        if (i % 3 === 0) {
            arr.push(i);
        }
    }
    return arr;
}

// examples
getSpecialNumbers(1, 10); // ==> [3, 6, 9]
getSpecialNumbers(-10, 10); // ==> [-9, -6, -3, 0, 3, 6, 9]
getSpecialNumbers(1, 2); // ==> [ ]