var sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
chai.use(require('sinon-chai'));

const { forEach } = require('../HigherOrderArray');

describe.only('to test the forEach function', () => {
  const numbersDoubled = forEach([1, 2, 3], number => {
    console.log(number * 2);
  });

  console.log(numbersDoubled);
});
