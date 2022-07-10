// Исходный массив
const tasks = [
  { text: 'Buy milk', done: false, id: Math.random().toString() },
  {
    text: 'Pick up Tom from airport',
    done: false,
    id: Math.random().toString(),
  },
  { text: 'Visit party', done: false, id: Math.random().toString() },
  { text: 'Visit doctor', done: true, id: Math.random().toString() },
  { text: 'Buy meat', done: true, id: Math.random().toString() },
];

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
    createDate: new Date().toISOString(),
    id: Math.random().toString(),
  });
  renderTasks(tasks);
};

const createBtnElem = document.querySelector('.create-task-btn');
createBtnElem.addEventListener('click', onCreateTask);

const changeToCheckbox = (event) => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');

  if (!isCheckbox) {
    return;
  }

  const listElem = document.querySelector('.list');
  listElem.textContent = '';

  const taskData = tasks.find(
    (task) => task.id === event.target.parentNode.dataset.id
  );

  Object.assign(taskData, { done: event.target.checked });

  renderTasks(tasks);
};

const listElem = document.querySelector('.list');
listElem.addEventListener('click', changeToCheckbox);

const renderTasks = (tasksList) => {
  const tasksElems = tasksList
    .sort((a, b) => new Date(b.finishDate) - new Date(a.finishDate))
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

  listElem.append(...tasksElems);
};

renderTasks(tasks);
