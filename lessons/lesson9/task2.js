function copyObj(obj) {
    const resultObj = Object.assign({}, obj);
    obj.a = 3;
    console.log(resultObj);
    return resultObj;
}


copyObj({ a: 1, b: 2, c: 3 });