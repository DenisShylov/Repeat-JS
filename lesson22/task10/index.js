const checkboxElem = document.querySelector('.pagination__page:first-child');
const checkboxElem2 = document.querySelector('.pagination__page:nth-child(2)');
const checkboxElem3 = document.querySelector('.pagination__page:last-child');

const handleClick = (event) => {
  console.log(event.target.dataset.pageNumber);
};

checkboxElem.addEventListener('click', handleClick);
checkboxElem2.addEventListener('click', handleClick);
checkboxElem3.addEventListener('click', handleClick);
