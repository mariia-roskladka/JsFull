//lesson 5 Cумма четных чисел в заданном промежутке

function getSum(firstNumber, secondNumber) {
    let sum = 0;
    for (let i = firstNumber; i <= secondNumber; i++) {
        if (i % 2 === 0) {
            console.log(i)
            sum += i;
        }
    }
    return sum;
}