const setButton = (buttonText) => {
  const body = document.querySelector('body');
  body.innerHTML = `<button>${buttonText}</button>`;
};
console.log(setButton('hi'));
