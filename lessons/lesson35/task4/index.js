const test1 = JSON.stringify({ name: "Tom" });
const test2 = { name: "Tom" };

export const parseUser = (userObj) => {
    try {
        return JSON.parse(userObj);
    } catch (err) {
        return null;
    }
};

console.log(parseUser(test1));
console.log(parseUser(test2));