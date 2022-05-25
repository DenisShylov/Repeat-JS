// Исходный массив
const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

tasks.forEach((el) => Object.assign(el, { id: Math.random().toString() }));

// Создаем таску
const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector('.task-input');

  const text = taskTitleInputElem.value;

  if (!text) {
    return;
  }
  taskTitleInputElem.value = '';

  const listElem = document.querySelector('.list');
  listElem.textContent = '';

  tasks.push({
    text,
    done: false,
    id: Math.random().toString(),
  });
  renderTasks(tasks);
};

const createBtnElem = document.querySelector('.create-task-btn');
createBtnElem.addEventListener('click', onCreateTask);

const changeToCheckbox = (event) => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');
  tasks.map((el) => (el = { id: Math.random().toString() }));

  if (!isCheckbox) {
    return;
  }
  const listElem = document.querySelector('.list');
  listElem.textContent = '';

  const taskData = tasks.find((task) => task.id === event.target.dataset.id);

  Object.assign(taskData, { done: event.target.checked });

  renderTasks(tasks);
};

const listElem = document.querySelector('.list');
listElem.addEventListener('click', changeToCheckbox);

const renderTasks = (tasksList) => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.setAttribute('data-id', id);
      listItemElem.classList.add('list__item');

      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');

      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });
  console.log(tasks);

  listElem.append(...tasksElems);
};

renderTasks(tasks);
