import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';

const inputElem = document.querySelector('.task-input');
export const listElem = document.querySelector('.list');

export const createTask = () => {
    if (inputElem.value === '') return;
    const check = getItem('tasksList');
    check.push({
        text: inputElem.value,
        done: false,
        id: check.length + 1,
    });

    setItem('tasksList', check);
    inputElem.value = '';

    listElem.innerHTML = '';
    renderTasks();
};