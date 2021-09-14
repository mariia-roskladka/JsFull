export const getDiff = (startDate, endDate) => {
    let totalSec = '';
    if (startDate < endDate) {
        totalSec = new Date(endDate - startDate) / 1000;
    } else {
        totalSec = new Date(startDate - endDate) / 1000;
    }

    return `${Math.floor(totalSec / 3600 / 24)}d ${Math.floor(totalSec / 3600) % 24}h ${Math.floor(totalSec / 60) % 60}m ${Math.floor(totalSec) % 60}s`;
};

console.log(getDiff(new Date(2020, 1, 14), new Date(2021, 3, 4)));
console.log(getDiff(new Date(2021, 3, 4), new Date(2020, 1, 14)));