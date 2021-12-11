// //lesson 10 Клон массива
function cloneArr(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let resultArr = arr.slice();
    return resultArr;
}