/**
 * @param {number} num
 * @param {number} prec
 * @return {number[]}
 */

const superRound = (num, prec) => {
    // put your code here
    const multiplayer = 10 ** prec;
    const resultArr = [
        Math.floor(num * multiplayer) / multiplayer,
        Math.trunc(num * multiplayer) / multiplayer,
        Math.ceil(num * multiplayer) / multiplayer,
        Math.round(num * multiplayer) / multiplayer,
        Number(num.toFixed(prec)),
    ];
    return resultArr;
};

// examples
console.log(superRound(-11.12556, 2));
superRound(11.12556, 2); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
superRound(6.11, 3); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]