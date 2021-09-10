//lesson 13 Withdraw
/* eslint-disable no-param-reassign */

function withdraw(clients, balances, client, amount) {

    for (let i = 0; i <= 3; i++) {

        if (client === clients[i]) {
            if (balances[i] - amount > 0) {
                balances[i] -= amount;
                return balances[i];
                // eslint-disable-next-line no-else-return
            } else {

                return -1;
            }
        }

    }
}

withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50);
//37 [1400,37,-6]
console.log(withdraw(["Ann", "John", "User"], [1400, 87, -6], "User", 10))
withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);
//-1 [1400,87,-6]