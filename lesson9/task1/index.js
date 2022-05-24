const getAdults = (obj) =>
  Object.entries(obj)
    .filter((user) => user[1] >= 18)
    .map((user) => user[0]);

console.log(getAdults({ Tom: 18, Jack: 20, Den: 15 }));
