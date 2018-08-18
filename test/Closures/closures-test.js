var sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
chai.use(require('sinon-chai'));
const { specialMultiply } = require('../../excercises/Closures/closures');

describe('testing the functionality of closures', () => {
  it('should multiply two arguments and return the value', () => {
    const result = specialMultiply(3, 4);
    expect(result).be.equal(12);
  });
  it('should return a function and that returned function should return 12', () => {
    const result = specialMultiply(3)(4);
    expect(result).be.equal(12);
  });
});
