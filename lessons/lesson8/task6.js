/* eslint-disable no-restricted-syntax */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */


const pickProps = (obj, props) => {
    const resultObj = {};
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            props.map((item) => {
                if (item === key) {
                    resultObj[key] = obj[key];
                }
                return resultObj;
            });
        }
    }
    console.log(resultObj);
    return resultObj;
};

// examples
pickProps({ a: 1, b: 2, c: 3 }, ["a", "c"]); // ==> { a: 1, c: 3 }
pickProps({ a: 1, b: 2, c: 3 }, ["a", "c", "d", "hex"]); // ==> { a: 1, c: 3 }