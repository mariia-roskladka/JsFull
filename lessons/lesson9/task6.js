const getTotalRevenue = (transactions) => {
    // put your code here
    let counter = 0;
    transactions.map((item) => {
        counter = item.amount + counter;
        return counter;
    });
    console.log(counter);
    return counter;
};

// examples
const dayTransactions = [
    { userId: 22, amount: 60, operation: "sell" },
    { userId: 22, amount: 160, operation: "buy" },
    { userId: 44, amount: 90, operation: "sell" },
];

const result = getTotalRevenue(dayTransactions); // ==> 310