const checkboxElem = document.querySelector('.task-status');

const onOff = (event) => {
  console.log(event.target.checked);
};
checkboxElem.addEventListener('change', onOff);
