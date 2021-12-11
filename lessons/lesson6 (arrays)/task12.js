//lesson 12

function sortAsc(array) {
    if (!Array.isArray(array)) {
        return null;
    }

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j + 1] < array[j]) {
                let t = array[j + 1];
                array[j + 1] = array[j];
                array[j] = t;
            }
        }
    }
    return array;
}

function sortDesc(array) {
    if (!Array.isArray(array)) {
        return null;
    }

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j + 1] > array[j]) {
                let t = array[j + 1];
                array[j + 1] = array[j];
                array[j] = t;
            }
        }
    }
    return array
}
/*are you insane give that type of exercise without explaination? */
sortDesc([3, 2, 1, 4, 5]);