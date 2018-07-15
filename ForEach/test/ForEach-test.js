var sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
chai.use(require('sinon-chai'));
const assertArrays = require('chai-arrays');
chai.use(assertArrays);

const {
  forEach,
  doubleValues,
  showFirstAndLast,
  onlyEvenValues
} = require('../forEach');

describe('testing the functionalitly of Higher Order Arrays ', () => {
  it('should  have a length of 30', () => {
    let numbersDoubled = [];
    forEach([1, 2, 3], number => {
      numbersDoubled.push(number * 2);
    });
    expect(numbersDoubled.length).to.equal(3);
  });
  it.only('it should print only the first and last letter of a name', () => {
    const abbreviatedName = showFirstAndLast(['colt', 'matt', 'tim', 'udemy']);
    expect(abbreviatedName).to.be.equalTo(['ct', 'mt', 'tm', 'uy']);
  });
});
