const checkBox = document.querySelector(".task-status");

const changeEvent = () => {
    console.log(checkBox.checked);
};

checkBox.addEventListener("change", changeEvent);