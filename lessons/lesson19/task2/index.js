/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-const */
/* eslint-disable no-bitwise */
/* eslint-disable no-prototype-builtins */
export function getOwnProps(obj) {
    const resultArray = [];
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop) & (typeof obj[prop] !== "function")) {
            resultArray.push(prop);
        }
    }
    return resultArray;
}

// testing
export const vehicle = {
    name: "Argo",
    move() {
        console.log(`${this.name} is moving`);
    },
    stop() {
        console.log(`${this.name} stopped`);
    },
};
export const ship = {
    name: "Argo",
    startMachine() {
        console.log(`${this.name} lifting anchor up`);
        this.move();
    },
    stopMachine() {
        console.log(`${this.name} lifting anchor down`);
        this.stop();
    },
    __proto__: vehicle,
};
console.log(getOwnProps(ship));