const reverseArray = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  let newArr = [...arr];
  const [start, run, ...end] = newArr;
  return [...end.reverse(), run, start];
};
console.log(reverseArray([11, 22, 33, 44, 55]));
