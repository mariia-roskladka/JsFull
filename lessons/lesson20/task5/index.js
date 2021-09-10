/* eslint-disable max-classes-per-file */

export class User {
    constructor(id, name, sessionId) {
        this._id = id;
        this._name = name;
        this._sessionId = sessionId;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get sessionId() {
        return this._sessionId;
    }
}

export class UserRepository {
    constructor(users) {
        this._users = Object.freeze(users);
    }

    get users() {
        return this._users;
    }

    getUserNames() {
        return this.users.map((el) => el.name);
    }

    getUserIds() {
        return this.users.map((el) => el._id);
    }

    getUserNameById(id) {
        // eslint-disable-next-line eqeqeq
        return this.users.find((el) => el._id == id).name;
    }
}

// examples
// const user = new User("1", "Tom", "session-id");
// console.log(user);
// получить свойства можем
// console.log(user.id); // ===> '1'
// console.log(user.name); // ===> 'Tom'
// console.log(user.sessionId); // ===> 'session-id'

// но изменить эти свойства нельзя
// user.name = "Bob"; // пытаемся изменить старое значение
// console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует

// const user1 = new User("1", "Name1", "1");
// const user2 = new User("2", "Name2", "2");
// const user3 = new User("3", "Name3", "3");
// const user4 = new User("4", "Name4", "4");
// const user5 = new User("5", "Name5", "5");
// user1._name = "annamese";
// user1._sessionId = "fsf";
// user1._id = "123";

// const newRepo = new UserRepository([user1, user2, user3, user4, user5]);

// console.log(newRepo);
// console.log(newRepo.getUsersNames());
// console.log(newRepo.getUsersId());
// console.log(newRepo.getUserNameById(1));