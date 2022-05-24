 eslint-disable dot-notation 

const pickProps = (obj, props) => {
  const newObj = {};

  for (let key in obj) {
    for (let i of props) {
      if (key.includes(i)) {
        newObj[key] = obj[key];
      }
    }
  }
  return newObj;
};

// examples
console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c'])); // ==> { a: 1, c: 3 }
console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c', 'd', 'hex'])); // ==> { a: 1, c: 3 }
