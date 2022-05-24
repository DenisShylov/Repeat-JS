function squareArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] ** 2);
  }
  return newArr;
}

// examples
console.log(squareArray([1, 10, 9, 11])); // ==> [1, 100, 81, 121]
console.log(squareArray([10, 0, -4])); // ==> [100, 0, 16]
console.log(squareArray([1])); // ==> [1]
