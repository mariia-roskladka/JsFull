// input array
// output number

// use math.abs(x) in each element of array to make all positive
// find max number
// max= 1st element
// if 2nd element > max then max=2nd element and so on


function getMaxAbsoluteNumber(array) {
    if (!Array.isArray(array)) {
        return null;
    }
    if (array[0] === undefined) {
        return null;
    }

    const positiveArray = array.map((el) => Math.abs(el));

    return Math.max(...positiveArray);
}

getMaxAbsoluteNumber(3);
console.log(getMaxAbsoluteNumber([3, -777, 1, 45, -20]));