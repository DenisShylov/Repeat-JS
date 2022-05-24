const sum = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.reduce((acc, num) => acc + num);
};

const arr = [1, 2, 3, 4, 5, 6];
console.log(sum(arr));
