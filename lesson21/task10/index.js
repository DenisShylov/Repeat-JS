const manageClasses = () => {
  const formElem = document.querySelector('.login-form');
  const changeInp = document.querySelector('input[type="text"]');
  changeInp.setAttribute('type', 'password');

  const inputElem = document.createElement('input');
  inputElem.setAttribute('type', 'text');
  inputElem.setAttribute('name', 'login');

  formElem.prepend(inputElem);
};
console.log(finishForm());
