const inputField = document.querySelector(".text-input");

const result = () => {
    console.log(inputField.value);
};

inputField.addEventListener("change", result);