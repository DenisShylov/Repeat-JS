const squareArray = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }

  return arr.map((el) => el ** 2);
};

const arr = [1, 2, 3, 4, 5, 6];

console.log(squareArray(arr));
