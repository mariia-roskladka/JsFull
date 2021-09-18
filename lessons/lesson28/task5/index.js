export const shmoment = initialValue => {
    let resultDate = new Date(initialValue);
    // console.log(resultDate);

    const calc = {
        add(digit, value) {
            let timeIncrease = {
                milliseconds: value => resultDate.setMilliseconds(resultDate.getMilliseconds() + value),
                seconds: value => resultDate.setSeconds(resultDate.getSeconds() + value),
                minutes: value => resultDate.setMinutes(resultDate.getMinutes() + value),
                hours: value => resultDate.setHours(resultDate.getHours() + value),
                days: value => resultDate.setDate(resultDate.getDate() + value),
                months: value => resultDate.setMonth(resultDate.getMonth() + value),
                years: value => resultDate.setFullYear(resultDate.getFullYear() + value),
            };
            resultDate = new Date(timeIncrease[digit](value));
            return this;
            // return calc
        },
        subtract(digit, value) {
            let timeDecrease = {
                milliseconds: value => resultDate.setMilliseconds(resultDate.getMilliseconds() - value),
                seconds: value => resultDate.setSeconds(resultDate.getSeconds() - value),
                minutes: value => resultDate.setMinutes(resultDate.getMinutes() - value),
                hours: value => resultDate.setHours(resultDate.getHours() - value),
                days: value => resultDate.setDate(resultDate.getDate() - value),
                months: value => resultDate.setMonth(resultDate.getMonth() - value),
                years: value => resultDate.setFullYear(resultDate.getFullYear() - value),
            };
            resultDate = new Date(timeDecrease[digit](value));
            return this;
            // return calc
        },
        result() {
            return resultDate;
        },
    };

    return calc;
};
const result = shmoment(new Date(2019, 2, 15)).add('days', 3).subtract('months', 3).result();
console.log(result);