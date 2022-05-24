const getSection = (num) => {
  const number = document.querySelector(`span[data-number="${num}`);
  const parent = number.closest('.box');
  return parent.dataset.section;
};
console.log(getSection(4));
