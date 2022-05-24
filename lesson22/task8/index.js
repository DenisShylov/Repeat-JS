const inputElem = document.querySelector('.text-input');

const enterInput = (event) => {
  console.log(event.target.value);
};
inputElem.addEventListener('change', enterInput);
