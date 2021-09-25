import { renderTasks } from "./renderer.js";

import { createTask } from "./taskGateway.js";

// eslint-disable-next-line consistent-return
export const onCreateTask = () => {
    const taskTitleInputElem = document.querySelector(".task-input");

    const text = taskTitleInputElem.value;

    if (!text) {
        return null;
    }

    taskTitleInputElem.value = "";

    const newTask = {
        text,
        done: false,
        createDate: new Date().toISOString(),
    };

    createTask(newTask).then(() => {
        renderTasks();
    });
};