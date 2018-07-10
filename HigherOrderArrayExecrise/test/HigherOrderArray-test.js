var sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
chai.use(require('sinon-chai'));
const assertArrays = require('chai-arrays');
chai.use(assertArrays);
const { forEach, findIndex, onlyEvenValues } = require('../HigherOrderArray');

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
  it.only('onlyEvenValues should return a array of even numbers', () => {
    const evenNumbers = onlyEvenValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(evenNumbers).to.be.equalTo([2, 4, 6, 8, 10]);
  });
});
