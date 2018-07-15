/** for Each function should accept an array and a callback as arguments */
forEach = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
};

function showFirstAndLast(arr) {
  const firstAndLast = [];
  let str = '';
  arr.forEach((name, idx) => {
    str += name.split('')[0];
    str += name.split('')[name.length - 1];
    firstAndLast.push(str);
    str = '';
  });
  return firstAndLast;
}
