function getKeys(obj) {
  for (let key in obj) {
    console.log(key);
  }
}

const user = {
  name: 'Denis',
  age: 26,
  from: 'Ukraine',
};
getKeys(user);
