const copyObj = (obj) => {
  return { ...obj };
};

console.log(copyObj({ Tom: 18, Jack: 20, Den: 15 }));
