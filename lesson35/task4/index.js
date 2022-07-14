const parseUser = (strJSON) => {
  try {
    return JSON.parse(strJSON);
  } catch {
    return null;
  }
};
