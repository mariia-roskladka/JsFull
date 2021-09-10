// input: array
// return: array ?

// use method filter if item.isFinite return item to new array return array

function getFiniteNumbers(array) {
    return array.filter((item) => Number.isFinite(item));
}


function getFiniteNumbersV2(array) {
    return array.filter((item) => isFinite(item));
}

function getNaN(array) {
    return array.filter((item) => Number.isNaN(item));
}

function getNaNV2(array) {
    return array.filter((item) => isNaN(item));
}

function getIntegers(array) {
    return array.filter((item) => Number.isInteger(item));
}

console.log(getFiniteNumbers([1, 2, "ff", Infinity, "1b2d", NaN, 15]));
console.log(getFiniteNumbersV2([1, 2, "ff", Infinity, "1b2d", NaN, 15]));

console.log(getNaN([1, 2, "ff", Infinity, "1b2d", NaN, 15]));
console.log(getNaNV2([1, 2, "ff", Infinity, "1b2d", NaN, 15]));
console.log(getIntegers([1, 2, "ff", Infinity, "1b2d", NaN, 15]));