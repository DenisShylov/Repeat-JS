const makePromise = (value) => {
  const p = new Promise((resolve) => {
    resolve(value);
  });

  return p;
};

/*
 * пример использования
 */
makePromise(17).then((number) => {
  console.log(number); // 17
});
