var sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
chai.use(require('sinon-chai'));
const assertArrays = require('chai-arrays');
chai.use(assertArrays);
const { map, doubleValues, extractKey } = require('../map');
describe.only('testing the functionality of Advanced map array', () => {
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
  });
});
