const finishList = () => {
  const list = document.querySelector('.list');
  const special = document.querySelector('.special');

  const elem1 = document.createElement('li');
  elem1.textContent = 1;

  const elem4 = document.createElement('li');
  elem4.textContent = 4;

  const elem6 = document.createElement('li');
  elem6.textContent = 6;

  const elem8 = document.createElement('li');
  elem8.textContent = 8;

  list.prepend(elem1);
  special.before(elem4);
  special.after(elem6);
  list.append(elem8);
};
console.log(finishList());
