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

const newArr = [];
for (let i = 0; i < arr.length; i++) {
  newArr.push(callback(arr[i], i, arr));
}
return newArr;

/***
 * Create the filter array from scratch
 *
 */
filter = (arr, callback) => {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
};
