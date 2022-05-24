// 'use strict';

function getKeys(obj) {
  Object.keys(obj).forEach((el) => console.log(el));
}

// examples
getKeys({ name: 'Denis', city: 'Warsaw', englishLevel: 'A1' });
// prints ===>
// name
// city
// englishLevel
