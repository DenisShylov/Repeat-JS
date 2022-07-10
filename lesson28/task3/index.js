const mult = (a) => (b) => a * b;

const twice = mult(2);
const triple = mult(3);
console.log(mult(2)(3));
console.log(twice(4));
console.log(triple(9));
