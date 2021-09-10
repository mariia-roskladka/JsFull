//lesson7

function increaseEvenEl(arr, delta) {
    if (!Array.isArray(arr)) {
        return null;
    }
    return arr.map((item) => (item % 2 === 0) ? item + delta : item)

}

console.log(increaseEvenEl([1, 2, 3, 4, 5], 2));