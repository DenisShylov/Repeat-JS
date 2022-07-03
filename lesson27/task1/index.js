localStorage.setItem('name', JSON.stringify('Denis'));
localStorage.setItem('age', JSON.stringify(26));
localStorage.setItem('From Ukraine?', JSON.stringify(true));

const getLocalStorageData = () => {
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;
    try {
      newValue = JSON.parse(value);
    } catch (error) {
      newValue = value;
    }
    return { ...acc, [key]: newValue };
  }, {});
};

console.log(getLocalStorageData());
