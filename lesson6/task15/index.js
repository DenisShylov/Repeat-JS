const includes = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return true;
    }
  }
  return false;
};

console.log(includes([1, 4, 8, 3], 3));
console.log(includes([1, 4, 8, 3], 5)); // ==> false);
