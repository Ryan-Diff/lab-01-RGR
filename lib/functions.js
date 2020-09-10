const fetch = require('node-fetch');

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

const fetchQuote = async() => {
  const response = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
  const [{ image, character: name, quote: text }] = await response.json();
  return {
    image,
    name,
    text
  };
};


module.exports = {
  getName,
  copyAndPush,
  capitalizeAndFilter, 
  fetchQuote
};

