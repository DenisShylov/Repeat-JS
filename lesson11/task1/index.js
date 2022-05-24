const splitText = (text, num) => {
  if (typeof text !== 'string') {
    return null;
  }

  let arr = [];
  let startPosition = 0;

  while (true) {
    let chunk = text.substr(startPosition, num);
    if (chunk.length === 0) {
      break;
    }
    startPosition += num;
    arr.push(chunk[0].toUpperCase() + chunk.slice(1));
  }
  return arr.join('\n');
};

console.log(splitText('abcdefg', 4));
