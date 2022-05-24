const checkerArr = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  let newArr = [...arr];
  let min = Math.min.apply(null, newArr);
  let max = Math.max.apply(null, newArr);
  return min + max > 1000;
};
console.log(checkerArr([11, 22, 33, 44, 55]));
