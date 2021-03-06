/** Need to import here the multiply function here */
var sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
chai.use(require('sinon-chai'));
const {
  doHomeWork,
  completedAssignment
} = require('../../excercises/callback/callback');

describe('to test the implementation of callbacks', () => {
  it('the callback is correctly called', () => {
    var callback = sinon.spy();
    doHomeWork('test', callback);
    expect(callback.calledOnce).to.equal(true);
  });
});
