function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

function addPropertyV2(obj, key, value) {
  Object.assign({}, obj, (obj[key] = value));
  return obj;
}

function addPropertyV3(obj, key, value) {
  const newObj = { ...obj };
  Object.assign({}, newObj, (newObj[key] = value));
  return newObj;
}

function addPropertyV4(obj, key, value) {
  const newObj = { ...obj, [key]: value };
  return newObj;
}

// examples
const transaction = {
  value: 170,
};
// console.log(addPropertyV1(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
// console.log(addPropertyV2(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
// console.log(addPropertyV3(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
console.log(addPropertyV4(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
