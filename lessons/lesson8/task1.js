const transformToObject = (arr) => {
    // put your code here
    const returnObj = {};
    arr.forEach((item) => {
        returnObj[item] = item;
    });
    return returnObj;
};


// examples
console.log(transformToObject(["a", 17.1, "John Doe"]));
transformToObject(["a", 17.1, "John Doe"]); // ==> { a: 'a', '17.1': 17.1, 'John Doe': 'John Doe' }