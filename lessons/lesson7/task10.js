//lesson10

const sum = (arr) => {
    if (!Array.isArray(arr)) {
        return null;
    }
    return arr.reduce((acc, num) => acc + num);
};

const arr = [2, 5, 6, 3, 0, 3, -1];
console.log(sum(arr));