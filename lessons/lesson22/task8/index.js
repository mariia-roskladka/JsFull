// put your code here
const input = document.querySelector(".text-input");

const changeAction = (event) => {
    console.log(event.target.value);
};

input.addEventListener("change", changeAction);