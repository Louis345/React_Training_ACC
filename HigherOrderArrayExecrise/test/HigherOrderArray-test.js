var sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
chai.use(require('sinon-chai'));

const { forEach } = require('../HigherOrderArray');

describe('test the implmentation of forEach', () => {
  it('should  have a length of 3', () => {
    let numbersDoubled = [];
    forEach([1, 2, 3], number => {
      numbersDoubled.push(number * 2);
    });
    expect(numbersDoubled.length).to.equal(3);
  });
});
