const weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Su'];
const dayOfWeek = (date, days) => {
  const day = new Date(date).getDate();
  const dateInFuture = new Date(date).setDate(day + days);

  return weekDays[new Date(dateInFuture).getDay()];
};

const res = dayOfWeek(new Date(), 14);
console.log(res);
