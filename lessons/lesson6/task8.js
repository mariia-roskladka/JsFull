// //lesson 8 Increase evens

const increaseEvenEl = (arr, delta) => {
    if (!Array.isArray(arr)) {
        return null;
    }
    let resultArr = [];
    arr.forEach((item) => {
        if (item % 2 === 0) {
            item += delta;
        }
        resultArr.push(item);
    });
    return resultArr;
};

//example 1:

//input
const arr = [2, 5, 6, 8, 11, 9, 4];
const delta = 20;
increaseEvenEl(arr, delta);

//output
//[22, 5, 26, 28, 11, 9, 24]