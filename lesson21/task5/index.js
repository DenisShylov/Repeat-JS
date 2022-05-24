const setTitle = (text) => {
  const elem = document.querySelector('.title');
  return (elem.textContent = text);
};
console.log(setTitle(1));
