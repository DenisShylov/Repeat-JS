const cloneArr = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  let newArr = [...arr];
  return newArr;
};
console.log(cloneArr([11, 22, 33, 44, 55]));
