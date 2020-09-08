const getName = (object) => {
  const { name } = object;
  return name;
};

const copyAndPush = (array, item) => {
  const newArr = [...array, item];
  return newArr;
};

const capitalizeAndFilter = (...strings) => {
  if(Array.isArray(strings[0])) {
    strings = strings[0];
  }

  return strings
    .map((currentString) => currentString.toUpperCase())
    .filter((currentString) => currentString[0] !== 'F');
};

module.exports = {
  getName,
  copyAndPush,
  capitalizeAndFilter
};

