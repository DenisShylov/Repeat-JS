const pinger = (count, period) => {
  // put your code here
  let i = count;
  console.log('Ping');
  setInterval(() => {
    if (--i > 0) {
      console.log('Ping');
    } else {
      clearInterval(period);
    }
  }, period);
};
pinger(5, 1000);
