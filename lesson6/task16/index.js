const removeDuplicates = (array) => {
  if (!Array.isArray(array)) {
    return null;
  }
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i]) {
      delete array[i];
    }
    newArr.push(array[i]);
  }
  return newArr;
};

console.log(removeDuplicates([1, 4, 8, 3, 4, 1]));
console.log(removeDuplicates([1, 4, 8, 4, 5, 6, 5, 1, 3])); // ==> false);
