// //lesson 7 Проверка суммы

function checkSum(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let sum = 0;
    arr.forEach((element) => {
        sum += element;
    });
    return sum > 100;
}