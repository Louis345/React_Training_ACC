var sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
chai.use(require('sinon-chai'));
const assertArrays = require('chai-arrays');
chai.use(assertArrays);
const {
  map,
  doubleValues,
  extractKey,
  valTimesIndex
} = require('../../excercises/Map/map');
describe('testing the functionality of Advanced map array', () => {
  it('testing users created map function and that function should return an array of tripled values', () => {
    let suppliedArr;
    let arrIndex = [];
    const tripledValues = map([1, 2, 3], (number, index, array) => {
      arrIndex.push(index);
      suppliedArr = array;
      return number * 3;
    });
    expect(tripledValues).to.be.equalTo([3, 6, 9]);
    expect(arrIndex).to.be.equalTo([0, 1, 2]);
    expect(suppliedArr).to.be.equalTo([1, 2, 3]);
    it('returns an array that is the same exact length that it receives as well as doubling its values', () => {
      const doubledValues = doubleValues([2, 3, 4], number => {
        return number * 2;
      });
      expect(doubledValues).to.be.equalTo([4, 6, 8]);
    });
    it('user created function accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.', () => {
      const multipliedArr = valTimesIndex([1, 2, 3]);
      expect(multipliedArr).to.be.equalTo([0, 2, 6]);
    });
  });
  it('it extracts  some key and returns a new array with the value of that key in each object.', () => {
    const extractedName = extractKey([
      { name: 'Elie' },
      { name: 'Tim' },
      { name: 'Matt' },
      { name: 'Colt' }
    ]);
    expect(extractedName).to.be.equalTo(['Elie', 'Tim', 'Matt', 'Colt']);
  });
});
