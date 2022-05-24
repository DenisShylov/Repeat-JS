const filterNames = (arr, text) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.filter((el) => el.includes(text) && el.length >= 5);
};

const arr = ['Denis', 'Nastya', 'Olya'];
console.log(filterNames(arr, 'ya'));
