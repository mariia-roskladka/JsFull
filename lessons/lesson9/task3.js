/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */


/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */
// examples
const user = {
    name: "Sam",
};
const user2 = {
    name: "Sam",
};

const user3 = {
    name: "Sam",
};

const user4 = {
    name: "Sam",
};

function addPropertyV1(userData, userId) {
    // put your code here
    userData.id = userId;
    console.log(userData);
    return userData;
}

// put your code here
function addPropertyV2(userData, userId) {
    Object.assign(userData, { id: userId });
    console.log(userData);
    return Object.assign(userData, { id: userId });
}

// put your code here
function addPropertyV3(userData, userId) {
    const resultObj = Object.assign({}, userData);
    resultObj.id = userId;
    console.log(resultObj);
    return resultObj;
}

// put your code here
function addPropertyV4(userData, userId) {
    const resultObj = {...userData, id: userId };
    console.log(resultObj);
    return resultObj;
}
// examples

addPropertyV1(user, "1234567"); // ==> { name: 'Sam', id: '1234567' }

addPropertyV2(user2, "1234567");

addPropertyV3(user3, "1234567");

addPropertyV4(user4, "1234567");