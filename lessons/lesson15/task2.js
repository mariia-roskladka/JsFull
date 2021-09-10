/* eslint-disable no-return-assign */
export const createCalculator = () => {
    let result = 0;
    const add = (number) => (result = number + result);
    const decrease = (number) => (result -= number);
    const reset = () => (result = 0);
    const getMemo = () => result;
    return {
        add,
        decrease,
        reset,
        getMemo,
    };
};