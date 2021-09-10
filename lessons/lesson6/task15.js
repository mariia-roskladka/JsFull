//lesson 15 My includes

const includes = (arr, num) => {
    // put your code here
    let x = false;
    arr.forEach((element) => {
        if (element === num) {
            console.log(element, num)
            x = true;
        }
    });
    return x;
};

// examples
console.log(includes([1, 4, 8, 3], 3));
console.log(includes([1, 4, 8, 3], 5));
includes([1, 4, 8, 3], 3); // ==> true
includes([1, 4, 8, 3], 5); // ==> false