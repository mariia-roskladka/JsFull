const calc = str => {
    const [firstNum, operator, secondNum] = str.split(' ');
    switch (operator) {
        case '+':
            return `${str} = ${Number(firstNum) + Number(secondNum)}`;
        case '-':
            return `${str} = ${Number(firstNum) - Number(secondNum)}`;
        case '*':
            return `${str} = ${Number(firstNum) * Number(secondNum)}`;
        case '/':
            return `${str} = ${Number(firstNum) / Number(secondNum)}`;
    }
};
console.log(calc('1 + 2'));
console.log(calc('-1 + 2'));
console.log(calc('-1 + -2'));
console.log(calc('-1 - -2'));
console.log(calc('1 - 2'));
console.log(calc('3 * 2.5'));
console.log(calc('3 * 0'));
console.log(calc('1.25 / 2'));
console.log(calc('0 / 1'));
console.log(calc('1 / 0'));
console.log(calc('24 / 5'));