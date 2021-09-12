const checkBox = document.querySelector(".task-status");

const changeEvent = (event) => {
    console.log(event.target.checked);
};

checkBox.addEventListener("change", changeEvent);