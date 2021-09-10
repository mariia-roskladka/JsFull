//lesson2

function sortDesc(array) {
    let resultArray = array.slice()
    return resultArray.sort(function(a, b) {
        return a - b
    }).reverse()
}
console.log(sortDesc([1, 25, 64, 3]))