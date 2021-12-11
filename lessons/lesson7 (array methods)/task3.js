//lesson3

const flatArray = (arr) => {
    let resultArr = arr.flat(2)
    return resultArr.sort(function(a, b) {
        return a - b;
    });;
};
let inputArr = [1, [1, 3],
    [
        [1, 3],
        [4, 5]
    ]
];
console.log(flatArray(inputArr));