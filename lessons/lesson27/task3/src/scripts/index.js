import { renderTasks } from './renderer.js';
import { createTask, listElem } from './createTask.js';
import { updatedTasks } from './updateTasks.js';
import { getItem, setItem } from './storage.js';
import { tasks } from './tasks.js';

document.addEventListener('DOMContentLoaded', () => {
    setItem('tasksList', tasks);
    renderTasks();
});

const crtBtnElem = document.querySelector('.create-task-btn');

crtBtnElem.addEventListener('click', createTask);
listElem.addEventListener('click', updatedTasks);

const onStorageChange = e => {
    if (e.key === 'tasksList') {
        renderTasks();
    }
    setItem('tasksList', getItem('tasksList'));
};

window.addEventListener('storage', onStorageChange);