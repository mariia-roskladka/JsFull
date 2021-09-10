//lesson9

"use strict";
const withdraw = (clients, balances, names, amount) => {
    let result = 0;
    clients.forEach(function(client, index) {
        if (client.includes(names) && balances[index] >= amount) {
            result = balances[index] - amount;
        } else if (client.includes(names) && balances[index] < amount) {
            result = -1;
        }
    });
    return result;
};

//example 1:

//input
console.log(withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50));
console.log(`shoul be: 37 + массив balances должен быть [1400, 37, -6]`);

//output
//37
//и массив balances должен быть [1400, 37, -6]

//example 2:

//input
withdraw(["Ann", "John", "User"], [1400, 87, -6], "User", 10);

//output
//-1
//и массив balances должен быть [1400, 87, -6]