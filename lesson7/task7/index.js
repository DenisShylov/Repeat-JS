const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  }

  return arr.map((elem) => {
    if (elem % 2 === 0) {
      return elem + delta;
    }
    return elem;
  });
};

const arr = [1, 2, 3, 4, 5, 6];

console.log(increaseEvenEl(arr, 20));
