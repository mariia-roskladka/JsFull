//lesson5
function squareArray(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    return arr.map((item) => item * item);
}
const arr = [16, 3, 20, 7];
console.log(squareArray(arr));