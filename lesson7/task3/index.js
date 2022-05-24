const flatArray = (arr) => {
  return arr.reduce((acc, num) => {
    return acc.concat(num);
  }, []);
};

const arr = [5, [1, 4], 7, [3], 8];
console.log(flatArray(arr));
