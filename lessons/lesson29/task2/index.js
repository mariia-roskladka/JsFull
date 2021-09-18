"use strict";

/**
 * @param {number} count
 * @param {number} period
 * @return {undefined}
 */
const pinger = (count, period) => {
    let i = count;
    console.log("Ping");
    const interval = setInterval(() => {
        if (--i > 0) {
            console.log("Ping");
        } else {
            clearInterval(interval);
        }
    }, period);
};

// examples
pinger(5, 100); // makes 5 writes with 100 ms interval

pinger(7, 100); // makes 7 writes with 1500 ms interval