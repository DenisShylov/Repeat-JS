const inputElem = document.querySelector('.text-input');

const test = () => {
  console.log(inputElem.value);
};
inputElem.addEventListener('change', test);
