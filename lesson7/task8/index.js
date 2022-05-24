const cloneArr = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return [...arr];
};

const arr = [1, 2, 3, 4, 5, 6];

console.log(cloneArr(arr));
