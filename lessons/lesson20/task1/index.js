export class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHi() {
        console.log(`Hi, I am ${this.name}`);
    }

    requestNewPhoto() {
        console.log(`New photo request was sent for ${this.name}`);
    }

    setAge(number) {
        if (number < 0) {
            return false;
        }
        const AGE_FOR_NEW_PHOTO = 25;
        this.age = number;
        if (number >= AGE_FOR_NEW_PHOTO) {
            this.requestNewPhoto();
        }
        return this.age;
    }

    static createEmpty() {
        return new User("", null);
    }
}