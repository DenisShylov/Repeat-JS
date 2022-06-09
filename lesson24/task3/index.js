const getDiff = (startDate, endDate) => {
  const result = Math.abs(endDate - startDate);
  const days = Math.floor(result / (1000 * 3600 * 24));
  const hours = new Date(result).getUTCHours();
  const minutes = new Date(result).getUTCMinutes();
  const second = new Date(result).getUTCSeconds();
  return `${days}d ${hours}h ${minutes}m ${second}s`;
};

console.log(
  getDiff(new Date(2020, 11, 11, 14, 23, 25), new Date(2021, 10, 5, 13, 24, 33))
);
