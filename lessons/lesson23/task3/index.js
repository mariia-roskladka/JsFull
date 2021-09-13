const listElem = document.querySelector(".list");

const generateId = () => Math.random().toFixed(2) * 100;
const tasks = [
    { text: "Buy milk", done: false, id: generateId() },
    {
        text: "Pick up Tom from airport",
        done: false,
        id: generateId(),
    },
    { text: "Visit party", done: false, id: generateId() },
    { text: "Visit doctor", done: true, id: generateId() },
    { text: "Buy meat", done: true, id: generateId() },
];

const renderTasks = (tasksList) => {
    const tasksElems = tasksList
        .sort((a, b) => a.done - b.done)
        .map(({ text, done, id }) => {
            const listItemElem = document.createElement("li");
            listItemElem.classList.add("list__item");

            listItemElem.dataset.id = id;
            const checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");

            checkbox.dataset.id = id;
            checkbox.checked = done;
            checkbox.classList.add("list__item-checkbox");

            if (done) {
                listItemElem.classList.add("list__item_done");
            }
            listItemElem.append(checkbox, text);

            return listItemElem;
        });

    listElem.append(...tasksElems);
};
renderTasks(tasks);

const createButton = document.querySelector(".create-task-btn");
const inputField = document.querySelector(".task-input");

function addTask() {
    listElem.innerHTML = ""; // clear list before rendering
    const inputValue = inputField.value; // get input value

    if (inputValue !== "") {
        tasks.push({ text: inputValue, done: false, id: generateId() }); // push new element to array
    }
    inputField.value = "";
    renderTasks(tasks); // render new elements
}
createButton.addEventListener("click", addTask);

function doneTask(event) {
    const elemId = event.target.dataset.id;
    const checkBoxElem = document.querySelector(`[data-id='${elemId}']`);

    console.log(event.target);
    console.log(tasks);
    if (tasks.find((task) => Number(task.id) === Number(elemId)).done) {
        tasks.find((task) => Number(task.id) === Number(elemId)).done = false;
    } else {
        tasks.find((task) => Number(task.id) === Number(elemId)).done = true;
    }

    listElem.innerHTML = "";
    renderTasks(tasks);

    return null;
}

listElem.addEventListener("click", doneTask);