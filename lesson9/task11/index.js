const getCustomersList = (obj) => {
  const copyObj = { ...obj };
  const entriesArr = Object.entries(copyObj);
  const sorted = entriesArr
    .map(([id, customer]) => {
      return { ...customer, id };
    })
    .sort((a, b) => {
      return a.age - b.age;
    });
  return sorted;
};

const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 17,
  },
};
// console.log(customers);
console.log(getCustomersList(customers));
