var sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
chai.use(require('sinon-chai'));
const assertArrays = require('chai-arrays');
chai.use(assertArrays);
const {
  forEach,
  findIndex,
  onlyEvenValues,
  doubleValues,
  map,
  filter
} = require('../HigherOrderArray');

describe('testing the functionalitly of Higher Order Arrays ', () => {
  it('should  have a length of 3', () => {
    let numbersDoubled = [];
    forEach([1, 2, 3], number => {
      numbersDoubled.push(number * 2);
    });
    expect(numbersDoubled.length).to.equal(3);
  });
  it('should return the number 3', () => {
    const firstDivisibleNum = findIndex([1, 2, 6], number => {
      if (number % 2 === 0) {
        return number;
      }
    });
    expect(firstDivisibleNum).to.equal(1);
  });
  it('onlyEvenValues should return a array of even numbers', () => {
    const evenNumbers = onlyEvenValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(evenNumbers).to.be.equalTo([2, 4, 6, 8, 10]);
  });
  it('testing users created map function and that function should return an array of tripled values', () => {
    const tripledValues = map([1, 2, 3], number => {
      console.log(number);
      return number * 3;
    });
    expect(tripledValues).to.be.equalTo([3, 6, 9]);
  });
  it('users created function should return an array with its values doubled', () => {
    const doubledValues = doubleValues([1, 2, 3]);
    expect(tripledValues).to.be.equalTo([2, 4, 6]);
  });
  it('user created function accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.', () => {
    const multipliedArr = valTimesIndex([1, 2, 3]);
    expect(multipliedArr).to.be.equalTo([0, 2, 6]);
  });
  it.only('the user created filter array should return a new array with values below 21', () => {
    const lowerThanTwentyOne = filter([10, 15, 20, 25, 30, 60], number => {
      if (number < 21) {
        return number;
      }
    });
    expect(lowerThanTwentyOne).to.be.equalTo([10, 15, 20]);
  });
});
