//lesson6

function reverseArray(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    const resultArr = arr.slice();
    return resultArr.reverse();
}