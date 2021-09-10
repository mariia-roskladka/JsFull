// input array
// output array

// getting array with numbers, with map use parseint for everyelement

function getParsedIntegers(array) {
    return array.map((item) => Number.parseInt(item, 10));
}


function getParsedIntegersV2(array) {
    return array.map((item) => parseInt(item, 10));
}

function getParsedFloats(array) {
    return array.map((item) => Number.parseFloat(item));
}

function getParsedFloatsV2(array) {
    return array.map((item) => parseFloat(item));
}

console.log(getParsedIntegers([1.22, 1.34, 0.15, "text"]));

console.log(getParsedIntegersV2([1.22, 1.34, 0.15, "text"]));
console.log(getParsedFloats([1.22, 1.34, 0.15, "text"]));
console.log(getParsedFloats([1.22, 1.34, 0.15, "text"]));