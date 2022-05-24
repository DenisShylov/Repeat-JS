const arrAverage = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }

  const res = arr.reduce((acc, el) => {
    return acc + el;
  }, 0);
  return res / arr.length;
};

const arr = [2, 5, 6, 3];
console.log(arrAverage(arr));
