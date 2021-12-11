//lesson1
function getSpecialNumbers(array) {

    let resultArray = array.filter(function(k) {
            if (k % 3 === 0) {
                return k
            }
        }

    )
    return resultArray;
}
console.log(getSpecialNumbers([1, 2, 3, 4, 5, 1, 2]))