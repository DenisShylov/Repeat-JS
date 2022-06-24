// const finishForm = () => {
//   const formElem = document.querySelector('.login-form');
//   const changeInp = document.querySelector('input[type="text"]');
//   changeInp.setAttribute('type', 'password');

//   const inputElem = document.createElement('input');
//   inputElem.setAttribute('type', 'text');
//   inputElem.setAttribute('name', 'login');

//   formElem.prepend(inputElem);
// };
// console.log(finishForm());

const finishForm = () => {
  const formElem = document.querySelector('.login-form');
  const inputElem = document.createElement('input');
  inputElem.setAttribute('type', 'text');

  const pass = document.querySelector('input[type="text"]');
  pass.setAttribute('type', 'password');
  formElem.prepend(inputElem);
};
finishForm();
