const singleUseBtn = document.querySelector(".single-use-btn");

const action = () => {
    console.log("clicked");
    singleUseBtn.removeEventListener("click", action);
};
singleUseBtn.addEventListener("click", action);