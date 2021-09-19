/* здесь мы создаем промис, который резолвит объект { name: 'Tom', age: 17 } через 1 секунду */
const userDataPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve({ name: "Tom", age: 17 });
    }, 1000);
});

/*
 * Выведите в консоль переменную userDataPromise
 * Ответьте себе на вопрос, какой тип данных имеет переменная userDataPromise? object
 */

console.log(userDataPromise);

/*
 * Выведите в консоль переменную userData в обработчике промиса
 * Ответьте себе на вопрос, что находится в переменной userData? обьект который прокинули через resolve в коде выше
 */
userDataPromise.then((userData) => {
    console.log(userData);
});

/*
 * подпишитесь на успешное выполнение промиса userDataPromise
 * используйте метод .then
 * в обработчике промиса (ф-ция внутри .then() ) выведите в консоль строку 'My name is Tom. I am 17 years old'
 * Tom и 17 достаньте с данных, которые приходят в ф-цию onSuccess
 */

userDataPromise.then((userData) => {
    console.log(`My name is ${userData.name}. I am ${userData.age} years old`);
});