var sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
chai.use(require('sinon-chai'));
const assertArrays = require('chai-arrays');
chai.use(assertArrays);
const { filter, onlyEvenValues, removeVowels } = require('../filter');

describe('testing filter Array method', () => {
  let arrIndex = [];
  let arrTest = '';
  it('should return a filtered item, the index, and the orginal array', () => {
    const notCat = filter(['dog', 'human', 'cat'], (item, index, array) => {
      arrIndex.push(index);
      arrTest = array;
      if (item !== 'cat') {
        return item;
      }
    });
    expect(arrIndex).to.be.equalTo([0, 1, 2]);
    expect(arrTest).to.be.equalTo(['dog', 'human', 'cat']);
    expect(notCat).to.be.equalTo(['dog', 'human']);
  });
  it('it should only return even values', () => {
    const evenNumberonlyEvenValues = onlyEvenValues([1, 2, 3, 4, 5, 6, 7, 8]);
    expect(evenNumberonlyEvenValues).to.be.equalTo([2, 4, 6, 8]);
  });
  it.only('should return a string without any vowels being present', () => {
    const noVowels = removeVowels('Jamal');
    expect(noVowels).to.be.equal('Jml');
  });
});
