/** for Each function should accept an array and a callback as arguments
 *  should return an index and the orginal array
 *
 */
forEach = (arr, callback) => {
  console.log(arr, arr.length);
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
    callback(arr[i], i, arr);
  }
};

/*
* You must use ForEach
Write a function called doubleValues which accepts an array and returns a new array with all the
 values in the array passed to the function doubled
 * 
Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([1,-2,-3]) // [2,-4,-6]
*/

function doubleValues(arr) {}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'udemy']) // ["ct", "mt", "tm", "uy"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr) {}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr) {}

module.exports = {
  forEach,
  doubleValues,
  showFirstAndLast,
  onlyEvenValues
};
