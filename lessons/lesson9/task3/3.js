const users = {
    'John Doe': 19,
    Tom: 17,
    Bob: 18,
};

function getKeys(obj) {
    Object.keys(obj).forEach(keys => console.log(keys));
}
getKeys(users);