const buttons = document.querySelectorAll(".pagination__page");

const handleClick = (event) => {
    console.log(event.target.getAttribute("data-page-number"));
};

buttons[0].addEventListener("click", handleClick);
buttons[1].addEventListener("click", handleClick);
buttons[2].addEventListener("click", handleClick);