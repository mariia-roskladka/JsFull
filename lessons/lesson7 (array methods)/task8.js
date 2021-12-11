//lesson8

function cloneArr(arr) {
    return (!Array.isArray(arr)) ? null : arr.slice();
}