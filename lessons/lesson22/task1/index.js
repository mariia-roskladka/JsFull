const divElement = document.querySelector(".rect_div");
const pElement = document.querySelector(".rect_p");
const spanElement = document.querySelector(".rect_span");
const clearBtn = document.querySelector(".clear-btn");
const removeBtn = document.querySelector(".remove-handlers-btn");
const addBtn = document.querySelector(".attach-handlers-btn");
const eventsListElem = document.querySelector(".events-list");

const logTarget = (text, color) => {
    const createSpanElement = document.createElement("span");
    createSpanElement.style = `color: ${color}; margin-left: 8px;`;
    createSpanElement.textContent = text;
    eventsListElem.appendChild(createSpanElement);
};

const clearField = () => {
    eventsListElem.innerHTML = "";
};

const logGreenDiv = logTarget.bind(null, "DIV", "green");
const logGreenP = logTarget.bind(null, "P", "green");
const logGreenSpan = logTarget.bind(null, "SPAN", "green");

const logGreyDiv = logTarget.bind(null, "DIV", "grey");
const logGrayP = logTarget.bind(null, "P", "grey");
const logGraySpan = logTarget.bind(null, "SPAN", "grey");

const removeHandlers = () => {
    divElement.removeEventListener("click", logGreenDiv);
    pElement.removeEventListener("click", logGreenP);
    spanElement.removeEventListener("click", logGreenSpan);

    divElement.removeEventListener("click", logGreyDiv, true);
    pElement.removeEventListener("click", logGrayP, true);
    spanElement.removeEventListener("click", logGraySpan, true);
};

const attachHandlers = () => {
    divElement.addEventListener("click", logGreenDiv);
    pElement.addEventListener("click", logGreenP);
    spanElement.addEventListener("click", logGreenSpan);

    divElement.addEventListener("click", logGreyDiv, true);
    pElement.addEventListener("click", logGrayP, true);
    spanElement.addEventListener("click", logGraySpan, true);
};

clearBtn.addEventListener("click", clearField);
removeBtn.addEventListener("click", removeHandlers);
addBtn.addEventListener("click", attachHandlers);

document.addEventListener("DOMContentLoaded", () => {
    attachHandlers();
});