//lesson 14 Первые n элементов исходного массива

function getSubArray(arr, n) {
    let resultArr = [];
    for (let i = 0; i < n; i++) {
        resultArr.push(arr[i]);
    }
    return resultArr;
}
console.log(getSubArray([11, 4, 8, 3], 2))