const user = {
    firstName: "fName",
    lastName: "lName",
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(string) {
        const [firstName, lastName] = string.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    },
};
export default user;