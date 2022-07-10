const successPromise = new Promise((resolve) => {
  resolve(32);
})

  .then(
    (number) =>
      new Promise((resolve) => {
        const halfNumber = number / 2;
        resolve(halfNumber);
      })
  )

  .then(
    (number) =>
      new Promise((resolve) => {
        const squaredNumber = number * number;
        console.log(squaredNumber);
        resolve(squaredNumber);
      })
  )

  //   .then(
  //     (result) =>
  //       new Promise((resolve) => {
  //         console.log(result); // 256
  //         resolve(result);
  //       })
  //   )

  //   .then(
  //     (number) =>
  //       new Promise((resolve) => {
  //         resolve(number);
  //       })
  //   )

  .then(
    (result) =>
      new Promise((resolve) => {
        const res = result + 64;
        console.log(res); // 320
        resolve(res);
      })
  );

console.log(
  '!!! Обрати внимание, что этот текст вывелся самым первым. Ведь это синхронный код, а промисы - асинхронны !!!'
);
