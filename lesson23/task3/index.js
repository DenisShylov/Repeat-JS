// Исходный массив
const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

// Изменяем значение done
const changeCheckbox = (event) => {
  const bool = event.target.checked;
  for (let i = 0; i < tasks.length; i++) {
    tasks[i].done = bool;
  }
  renderTasks(tasks);
  console.log(tasks);
};

// Создаем таску
const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector('.task-input');

  const text = taskTitleInputElem.value;

  if (!text) {
    return;
  }
  taskTitleInputElem.value = '';

  tasks.push({
    text,
    done: false,
    id: Math.random().toString(),
  });
  renderTasks(tasks);
  console.log(tasks);
};

const createBtnElem = document.querySelector('.create-task-btn');
createBtnElem.addEventListener('click', onCreateTask);

const listElem = document.querySelector('.list');

const renderTasks = (tasksList) => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');

      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      checkbox.setAttribute('data-id', [id]);
      checkbox.addEventListener('change', changeCheckbox);
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);
