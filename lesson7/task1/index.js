const getSpecialNumbers = (arr) => {
  return arr.filter((el) => el % 3 === 0);
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(getSpecialNumbers(arr));
