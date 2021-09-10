export const makeCounter = () => {
    let counter = -1;
    return function counterF() {
        counter += 1;
        return counter;
    };
};

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter2());