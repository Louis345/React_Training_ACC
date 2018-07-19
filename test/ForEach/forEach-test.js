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
} = require('../../excercises/ForEach/forEach');

describe('testing the functionalitly of Advanced Arrays ', () => {
  it('testing forEach', () => {
    let numbersDoubled = [];
    let suppliedArr = [];
    let arrIndex = [];
    forEach([1, 2, 3], (number, idx, arr) => {
      arrIndex.push(idx);
      numbersDoubled.push(number * 2);
      suppliedArr = arr;
    });
    expect(arrIndex).to.be.equalTo([0, 1, 2]);
    expect(suppliedArr).to.be.equalTo([1, 2, 3]);
    expect(numbersDoubled).to.be.equalTo([2, 4, 6]);
  });
  it('it should double all values inside an array', () => {
    const doubledValues = doubleValues([2, 4, 6]);
    expect(doubledValues).to.be.equalTo([4, 8, 12]);
  });
  it('it should print only the first and last letter of a name', () => {
    const abbreviatedName = showFirstAndLast(['colt', 'matt', 'tim', 'udemy']);
    expect(abbreviatedName).to.be.equalTo(['ct', 'mt', 'tm', 'uy']);
  });
  it('it should only return even numbers from an array', () => {
    const evenNumbers = onlyEvenValues([2, 3, 4, 5]);
    expect(evenNumbers).to.be.equalTo([2, 4]);
  });
});
