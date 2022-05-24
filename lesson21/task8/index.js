const createButton = (buttonText) => {
  const body = document.querySelector('body');
  const elem = document.createElement('button');
  elem.textContent = buttonText;
  body.append(elem);
};
console.log(createButton('hi'));
