/** Need to import here the multiply function here */
var sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
chai.use(require('sinon-chai'));
const { doHomeWork, completedAssignment } = require('../callback.js');

describe('computation', () => {
  it('the callback is correctly called', () => {
    doHomeWork('math', () => {});
    var callback = sinon.spy();

    console.log(doHomeWork('math', callback));
    console.log(callback);
  });
});
