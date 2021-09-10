//lesson 16

function removeDuplicates(array) {
    if (!Array.isArray(array)) {
        return null
    }
    for (let i = 0; i <= array.length; i++) {
        for (let j = 0; j < i; j++) {
            if (array[i] === array[j]) {
                array.splice(j, 1);
            }
        }
    }
    return array;
}
console.log(removeDuplicates([1, 1, 2, 4, 4]))