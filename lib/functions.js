const getName = (object) => {
  const { name } = object;
  return name;
};

const copyAndPush = (array, item) => {
  array.push(item);
  return array;
};

module.exports = {
  getName,
  copyAndPush
};
