const asyncCalculator = (numbr) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = numbr;
      console.log(`Initial value:${result}`);
      resolve(numbr);
    }, 500);
  })
    .then(
      (value) =>
        new Promise((resolve) => {
          setTimeout(() => {
            const result = value * value;
            console.log(`Squared value:${result}`);
            resolve(result);
          }, 500);
        })
    )
    .then(
      (value) =>
        new Promise((resolve) => {
          setTimeout(() => {
            const result = value * 2;
            console.log(`Doubled value:${result}`);
            resolve(result);
          });
        })
    );

asyncCalculator(5);
