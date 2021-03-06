const counterElem = document.querySelector('.counter');
const counterValueElem = document.querySelector('.counter__value');

const onCounterChange = (e) => {
  const isButton = e.target.classList.contains('counter__button');
  if (!isButton) {
    return;
  }

  const action = e.target.dataset.action;

  const oldValue = +counterValueElem.textContent;
  const newValue = action === 'decrease' ? oldValue - 1 : oldValue + 1;

  localStorage.setItem('counterValue', newValue);
  counterValueElem.textContent = newValue;
};

counterElem.addEventListener('click', onCounterChange);

const onStorageChange = (e) => {
  counterValueElem.textContent = e.newValue;
  console.log(e);
};
const onDocumentLoaded = () => {
  counterValueElem.textContent = localStorage.getItem('counterValue') || 0;
};

window.addEventListener('storage', onStorageChange);
document.addEventListener('DOMContentLoaded', onDocumentLoaded);
