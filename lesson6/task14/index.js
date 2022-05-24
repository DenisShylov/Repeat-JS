const getSubArray = (arr, numberOfElements) => {
  let newArr = [];
  for (let i = 0; i < numberOfElements; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
};

console.log(getSubArray([1, 2, 3, 4, 5, 6, 7], 4));
