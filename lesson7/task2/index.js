const sortDesc = (arr) => {
  return arr.sort((a, b) => b - a);
};

const arr = [5, 1, 4, 7, 3, 8];
console.log(sortDesc(arr));
