const getName = (object) => {
  const { name } = object;
  return name;
};

const copyAndPush = (array, item) => {
  let newArr = [...array, item];
  return newArr;
};

module.exports = {
  getName,
  copyAndPush
};
