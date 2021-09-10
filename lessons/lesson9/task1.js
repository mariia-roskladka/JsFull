function getAdults(obj) {
    const resultArr = [];
    const objKeys = Object.keys(obj);
    const objValues = Object.values(obj);
    objValues.map((item, index) => {
        if (item >= 18) {
            resultArr.push(objKeys[index]);
        }
    });
    console.log(resultArr);
    return resultArr;
}


getAdults({ John: 19, Tom: 17, Bob: 18 });