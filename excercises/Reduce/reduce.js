/** Create a function that accepts an array of numbers and returns the sum
 *
 * Examples:
 * addItems([1,5,6]) // 12
 * addItems([1,-2,-3]) // -4
 */
const addItems = arr => {};

/** Create a function that tallies the number of each kind of fruit. It should return an object where the fruit
 * name is the key and the tally is the value.
 *
 * Example:
 *
 * var result = generateTally(['Apple', 'Orange', 'Apple', 'Blueberry', 'Grape', 'Grape'])
 * 
 * result should be:
 * {Apple: 2, Orange: 1, Blueberry: 1, Grape: 2}
 *
 */

const generateTally = arr => {};

/** Create a function that flattens an array (that is, it should "unnest" a nested array).
 *
 * Example:
 *
 * var result = flattenArray([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
 *
 * result should be: 
 * [1, 2, 3, 4, 5, 6, 7, 8, 9]
 */

const flattenArray = arr => {};

/** Create a function, that when given an array of object literals, will index the object literals by a single column
 * (in this case, the ID). The function should return an object where the ID is the key and value is the the 
 * object literal.
 * 
 * Example:
 *
 * var people = [
 *  {id: 123, name: 'Dave', age: 23},
 *  {id, 456, name: 'Rachel', age: 35}
 * ];
 * var result =  arrayToObject();
 * 
 * result should be:
 * {
 *   123: {id: 123, name: 'Dave', age: 23},
 *   456: {id, 456, name: 'Rachel', age: 35}
 * }
 */
const arrayToObject = arr => {};

module.exports = {
  addItems,
  generateTally,
  flattenArray,
  arrayToObject
};
