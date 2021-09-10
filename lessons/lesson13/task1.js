const filterNames = (arr, text) =>
    arr.filter((names) => names.includes(text) && names.length > 5);
console.log(
    filterNames(
        ["John", "Olivya", "Oleksandr", "Emanuel", "Vanya", "Nastya", "Sanya"],
        "ya"
    )
);