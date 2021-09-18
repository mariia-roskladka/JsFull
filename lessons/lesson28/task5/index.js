const shmoment = (date) => {
    const resultDate = new Date(date);
    console.log(resultDate);
    return {
        add(type, value) {
            switch (type) {
                case "years":
                    resultDate.setFullYear(resultDate.getFullYear() + value);
                    return this;
                case "months":
                    resultDate.setMonth(resultDate.getMonth() + value);
                    return this;
                case "days":
                    resultDate.setDate(resultDate.getDate() + value);
                    return this;
                case "hours":
                    resultDate.setHours(resultDate.getHours() + value);
                    return this;
                case "minutes":
                    resultDate.setMinutes(resultDate.getMinutes() + value);
                    return this;
                case "seconds":
                    resultDate.setSeconds(resultDate.getSeconds() + value);
                    return this;
                case "milliseconds":
                    resultDate.setMilliseconds(resultDate.getMilliseconds() + value);
                    return this;
                default:
                    return null;
            }
        },
        subtract(type, value) {
            switch (type) {
                case "years":
                    resultDate.setFullYear(resultDate.getFullYear() - value);
                    return this;
                case "months":
                    resultDate.setMonth(resultDate.getMonth() - value);
                    return this;
                case "days":
                    resultDate.setDate(resultDate.getDate() - value);
                    return this;
                case "hours":
                    resultDate.setHours(resultDate.getHours() - value);
                    return this;
                case "minutes":
                    resultDate.setMinutes(resultDate.getMinutes() - value);
                    return this;
                case "seconds":
                    resultDate.setSeconds(resultDate.getSeconds() - value);
                    return this;
                case "milliseconds":
                    resultDate.setMilliseconds(resultDate.getMilliseconds() - value);
                    return this;
                default:
                    return null;
            }
        },
        result() {
            return resultDate;
        },
    };
};
// const res = shmoment(new Date(2000, 10, 5, 11).add("months", 10).result());
const res = shmoment(new Date(2000, 10, 5, 11)).add("hours", 10).result();
console.log(res);