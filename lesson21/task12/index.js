const squaredNumbers = () => {
  const number = document.querySelector('.number:first-child');
  const number2 = document.querySelector('.number:nth-child(2)');
  const number3 = document.querySelector('.number:last-child');

  number.dataset.squaredNumber = number.dataset.number ** 2;
  number2.dataset.squaredNumber = number2.dataset.number ** 2;
  number3.dataset.squaredNumber = number3.dataset.number ** 2;
};
console.log(squaredNumbers());
