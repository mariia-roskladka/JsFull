/* eslint-disable arrow-body-style */
export const event = {
    message: "Welcome to the party!",
    guests: [
        { name: "John", age: 15, email: "some1@email.com" },
        { name: "Kek", age: 22, email: "some2@email.com" },
        { name: "Chebyrek", age: 23, email: "some3@email.com" },
    ],
    getInvitations() {
        return this.guests
            .filter(({ age }) => age >= 18)
            .map(({ name, email }) => {
                return {
                    email,
                    message: `Dear ${name}! ${this.message}`,
                };
            });
    },
};

console.log(event.getInvitations());