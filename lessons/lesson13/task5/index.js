'use strict';

// 1.===================ReverseArray

export const reverseArray = num => (Array.isArray(num) ? num.flat().reverse() : null);


// 2.===================Withdraw

export const withdraw = (clients, balances, client, amount) => {
    const sum = clients.indexOf(client);
    if (balances[sum] > amount) {
        balances[sum] -= amount;
        return balances[sum];
    }
    return -1;
};


// 3.===================GetAdults

export const getAdults = obj => {
    let newObj = {};
    for (let key in obj) {
        if (obj[key] < 18) {
            continue;
        }
        newObj[key] = obj[key];
    }
    return newObj;
};