const { getName, copyAndPush, capitalizeAndFilter } = require('./functions.js');
describe('getNameFunction', () => {

  it('returns the name property of an object', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    const name = getName(spot);
    expect(name).toEqual('spot');
 
  });
});

describe('copyAndPushFunction', () => {

  it(' returns a new array with all the items in the original array and a new item pushed to the end', () => {
    const numbersArr = [1, 2, 3];
    const newNumbersArr = copyAndPush(numbersArr, 4);
    expect(newNumbersArr).toEqual([1, 2, 3, 4]);
  });
});

describe('copyAndPushFunction', () => {

  it(' returns a copy of the array', () => {
    const numbersArr = [1, 2, 3];
    const newNumbersArr = copyAndPush(numbersArr, 4);
    expect(newNumbersArr).toEqual([1, 2, 3, 4]);
  });
});

describe('capitalizeAndFilter', () => {

  it('returns all capital strings except those beginning with F', () => {
    originalStrings = [
      'fred',
      'water glass',
      'dessert'
    ];
    newStrings = capitalizeAndFilter(originalStrings);
    expect(newStrings).toEqual(['WATER GLASS', 'DESSERT']);
  });
});



