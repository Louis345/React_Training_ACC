var sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
chai.use(require('sinon-chai'));
/** Need to import here the multiply function here */
const {
  doHomeWork,
  completedAssignment
} = require('../CallBackExecrises/callback');

describe('computation', () => {
  it('the callback is correctly called', () => {
    doHomeWork('math', () => {});
    let spy = sinon.spy(doHomeWork);
    console.log(spy);
    expect(spy).to.have.been.calledWith('math');
  });
});
