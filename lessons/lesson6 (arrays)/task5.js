// //lesson 5 Пустой массив
function createEmptyArray(len) {
    let arr = [];
    arr = new Array(len);

    return arr;
}
console.log(createEmptyArray(5));



//lesson 6 square arrays
function squareArray(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let resultArr = [];
    arr.forEach((item) => {
        resultArr.push(item * item)
    });
    return resultArr;
}
console.log(squareArray([1, 2, 3, 4, ]))