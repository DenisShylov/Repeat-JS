const requestUserData = (userId) => {
  const p = new Promise((resolve, reject) => {
    if (userId === 'broken') {
      setTimeout(() => {
        reject(new Error('User not found'));
      }, 500);
    } else {
      setTimeout(() => {
        resolve({
          name: 'John',
          age: 17,
          userId: `${userId}`,
          email: `${userId}@example.com`,
        });
      }, 1000);
    }
  });
  return p;
};

const result = requestUserData('broken-1')
  .then((value) => console.log(value))
  .catch((err) => console.log(err));
