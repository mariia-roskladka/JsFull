/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */


const concatProps = (obj) => {
    // put your code here
    const resultArr = []; // creating array before cycle
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const element = obj[key]; // mint be deleted, created for qality of life

            resultArr.push(element); // adding element to array
        }
    }
    return resultArr;
};

// examples
console.log(concatProps({ name: "John Doe", age: 17, interest: "football" }));
concatProps({ name: "John Doe", age: 17, interest: "football" }); // ==> ['John Doe', 17, 'football']