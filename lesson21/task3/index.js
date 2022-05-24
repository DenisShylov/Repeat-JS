const getItemList = () => {
  const elems = document.querySelectorAll('.technology');
  console.dir(elems);
  return elems;
};

getItemList();

const getItemsArray = () => {
  const elems = document.querySelectorAll('.tool');
  const arrayElem = Array.from(elems);
  console.dir(arrayElem);
  return arrayElem;
};
getItemsArray();
