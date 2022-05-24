const getPeople = (obj) => {
  const arr = Object.values(obj);
  let newArr = arr
    .reduce((acc, num) => {
      return [...acc, ...num];
    })
    .map((el) => el.name);
  return newArr;
};

const rooms = {
  room: [
    { name: 'Jack' },
    { name: 'Andrey' },
    { name: 'Ann' },
    { name: 'Vasyl' },
  ],
  room2: [{ name: 'Dan' }],
  room3: [{ name: 'Denis' }, { name: 'Max' }, { name: 'Alex' }],
};
console.log(getPeople(rooms));
