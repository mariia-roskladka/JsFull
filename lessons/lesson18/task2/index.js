export const wallet = {
    transactions: [1, 2, 3, 4],
    getMax() {
        return Math.max(...this.transactions);
    },
    getMin() {
        return Math.min(...this.transactions);
    },
};

console.log(wallet.getMax());
console.log(wallet.getMin());