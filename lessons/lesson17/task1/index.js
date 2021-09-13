export const user = {
    firstName: "Name",
    lastName: "lName",
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },
};

console.log(user.getFullName());