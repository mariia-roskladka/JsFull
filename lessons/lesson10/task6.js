// input number - array lenght
// input number - start number
// input number - end number
// output array

// from-to<1 return null
//

const getRandomNumbers = (length, from, to) => {
    // put your code here
    if (to - from < 1) {
        return null;
    }
    const resultArray = [];
    for (let i = 0; i < length; i += 1) {
        resultArray.push(Math.round(Math.random() * (to - from) + from));
    }
    console.log(resultArray);
    return resultArray;
};

// examples
getRandomNumbers(5, 1.4, 3.22); // ==> [2, 2, 2, 3, 2]
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 2, 2, 2, 2]
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 3, 2, 3, 2]