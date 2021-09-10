// //lesson 9 Переверните массив

function reverseArray(arr) {
    if (!Array.isArray(arr)) {
        return null
    }
    let resultArr = arr.slice()
    return resultArr.reverse()
}