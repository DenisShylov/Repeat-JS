const checkboxElem = document.querySelector('.task-status');
const test = () => console.log(checkboxElem.checked);
checkboxElem.addEventListener('click', test);
