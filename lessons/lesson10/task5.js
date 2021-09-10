// input number 2x
// return string '$number with 2 numbers after coma

// number *100 for bether round
// sum numbers adn /100
// convert to string


function getTotalPrice(array) {
    let result = 0;
    array.forEach((element) => {
        console.log(Math.floor(element * 100));
        result += Math.floor(element * 100);
    });
    return '$${result / 100}';
}

console.log(getTotalPrice([1, 1.2485, 1.22, 1]));