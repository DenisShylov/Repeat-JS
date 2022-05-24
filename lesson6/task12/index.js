const sortAsc = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let tar = array[i];
        array[i] = array[j];
        array[j] = tar;
      }
    }
  }
  return array;
};

const sortDesc = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] < array[j]) {
        let tar = array[i];
        array[i] = array[j];
        array[j] = tar;
      }
    }
  }
  return array;
};
