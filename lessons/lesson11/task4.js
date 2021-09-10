// input string
// input string
// output number


// in first string need find second string
// first string default value = ''
// if second string === '' return null
// count now many 2nd string will be found in 1st string

// if there is str in text get index of it
// slice before it and repeat proces until end
// count how many times we did it
// return count

function countOccurrences(text = "", str) {
    if (str === "") {
        return null;
    }
    let counter = 0;
    let underLine = text;
    while (true) {
        if (text.indexOf(str) === -1) {
            break;
        }

        const index = underLine.indexOf(str);

        underLine = underLine.slice(index + 1);

        counter += 1;

        if (underLine.indexOf(str) < 0) {
            break;
        }
    }
    return counter;
}

console.log(countOccurrences("fesefesfefefddss", "f"));