const getFiniteNumbers = (arr) => {
  return arr.filter((el) => Number.isFinite(el));
};
const getFiniteNumbersV2 = (arr) => {
  return arr.filter((el) => isFinite(el));
};

const getNaN = (arr) => {
  return arr.filter((el) => Number.isNaN(el));
};

const getNaNV2 = (arr) => {
  return arr.filter((el) => isNaN(el));
};

const getIntegers = (arr) => {
  return arr.filter((el) => Number.isInteger(el));
};
console.log(getIntegers([1, 2, 3.4, 2.3, 'adsf', NaN]));
