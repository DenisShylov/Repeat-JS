'use strict';

const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const renderTasks = (tasksList) => {
  const listElem = document.querySelector('.list');

  const TasksListElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      let listCreateElem = document.createElement('li');
      listCreateElem.classList.add('list__item');

      if (done) {
        listCreateElem.classList.add('list__item_done');
      }
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;

      listCreateElem.append(checkbox, text);
      return listCreateElem;
    });

  listElem.append(...TasksListElems);
};

renderTasks(tasks);
