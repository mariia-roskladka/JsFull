// input array of objects
// input boolean  -- not understandable what it should mean
// return array (sorted)

function sortContacts(array, dir = true) {
    if (!Array.isArray(array)) {
        return null;
    }
    return array.sort((firstElement, secondElement) => {
        if (dir) {
            return firstElement.name.localeCompare(secondElement.name);
        } else {
            return secondElement.name.localeCompare(firstElement.name);
        }
    });
}
const kontakts = [
    { name: "Anton", phoneNumber: "999-99-99" },
    { name: "Bob", phoneNumber: "777-99-99" },
    { name: "Daddy", phoneNumber: "222-99-55" },
    { name: "Endrew", phoneNumber: "223-99-99" },
    { name: "Clint", phoneNumber: "555-99-99" },
    { name: "Frank", phoneNumber: "333-99-99" },
];

console.log(sortContacts(kontakts, true));