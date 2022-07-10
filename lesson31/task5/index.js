const delay = (num) => {
  const p = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, num);
  });
  return p;
};

delay(3000).then(() => console.log('Done'));
