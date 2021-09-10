//lesson12

const arrAverage = (arr) => {
    if (!Array.isArray(arr)) {
        return null;
    }
    return arr.reduce((acc, num) => acc + num) / arr.length;
};
const arr = [2, 5, 6, 3];
console.log(arrAverage(arr));