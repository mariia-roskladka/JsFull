const btn = document.querySelector(".search__btn");
const input = document.querySelector(".search__input");

const result = () => {
    console.log(input.value);
};

btn.addEventListener("click", result);