import { renderTasks } from './renderer.js';
import { listElem } from './createTask.js';
import { setItem, getItem } from './storage.js';

export const updatedTasks = event => {
    const isCheckbox = event.target.classList.contains('list__item-checkbox');

    if (!isCheckbox) {
        return;
    }
    const checkedElem = event.target;

    const tasksList = getItem('tasksList');

    const updateTasks = tasksList.map(task => {
        if (task.id === +checkedElem.dataset.id) {
            return {
                ...task,
                done: checkedElem.checked,
            };
        }
        return task;
    });

    listElem.innerHTML = '';
    setItem('tasksList', updateTasks);
    renderTasks();
};