//lesson 8 Кратные на промежутке

function findDivCount(a, b, n) {
    let counter = 0;
    for (let i = a; i <= b; i++) {
        if (i % n === 0) {
            counter += 1;
        }
    }
    return counter;
}