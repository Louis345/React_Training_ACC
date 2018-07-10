var sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
chai.use(require('sinon-chai'));

/** for Each function should accept an array and a callback as arguments */
forEach = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
};

/*** Write FindIndex from scartch  */

findIndex = (arr, callback, index) => {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return i;
    }
  }
  return -1;
};

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/

function onlyEvenValues(arr) {
  const doubledNumbers = [];
  arr.forEach((number, idx) => {
    if (number % 2 === 0) doubledNumbers.push(number);
  });
  return doubledNumbers;
}

/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr) {}
module.exports = {
  forEach,
  findIndex,
  onlyEvenValues,
  onlyEvenValues,
  doubleValues
};
