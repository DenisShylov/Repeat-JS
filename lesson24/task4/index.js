const formatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'UTC',
  month: 'short',
});
//                  ЗАДАЧУ НЕ РЕШИЛ
const studentsBirthDays = (students) => {
  const copyArr = [...students];

  const res = copyArr.reduce((acc, n, i) => {
    const month = formatter.format(new Date(copyArr[i].birthDate));

    return { ...acc };
  });

  return res;
};

const students = [
  { name: 'Ben', birthDate: '01/17/2008' },
  { name: 'Tom', birthDate: '01/18/2010' },
  { name: 'Sam', birthDate: '03/15/2010' },
];

console.log(studentsBirthDays(students));
