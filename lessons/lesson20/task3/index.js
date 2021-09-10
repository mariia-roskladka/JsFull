export class Wallet {
    constructor() {
        this.balance = 0;
    }

    getBalance() {
        return this.balance;
    }

    deposit(number) {
        this.balance += number;
    }

    withdraw(number) {
        if (this.balance - number < 0) {
            console.log(`No enough funds`);
            return -1;
        }
        this.balance -= number;
        return this.balance;
    }
}