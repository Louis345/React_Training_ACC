var sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
chai.use(require('sinon-chai'));
const assertArrays = require('chai-arrays');
chai.use(assertArrays);
const {
  findIndex,

  doubleValues,

  filter
} = require('../HigherOrderArray');

describe('testing the functionalitly of Higher Order Arrays ', () => {
  it('should return the number 3', () => {
    const firstDivisibleNum = findIndex([1, 2, 6], number => {
      if (number % 2 === 0) {
        return number;
      }
    });
    expect(firstDivisibleNum).to.equal(1);
  });

  it('users created function should return an array with its values doubled', () => {
    const doubledValues = doubleValues([1, 2, 3]);
    expect(tripledValues).to.be.equalTo([2, 4, 6]);
  });
  it('the user created filter array should return a new array with values below 21', () => {
    const lowerThanTwentyOne = filter([10, 15, 20, 25, 30, 60], number => {
      if (number < 21) {
        return number;
      }
    });
    expect(lowerThanTwentyOne).to.be.equalTo([10, 15, 20]);
  });
});
