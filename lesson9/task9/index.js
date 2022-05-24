// function buildObject(keysList, valuesList) {
//   let newObj = {};
//   for (let i = 0; i < keysList.length; i++) {
//     newObj[keysList[i]] = valuesList[i];
//   }
//   return newObj;
// }

function buildObject(keysList, valuesList) {
  return keysList.reduce((acc, num, index) => {
    return { ...acc, [num]: valuesList[index] };
  }, 0);
}

// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
console.log(result);
