/** Complete assignment ****/
/*** Tomorrow setup github and  setup a callback with an example of asynchronous */
doHomeWork = (subject, callback) => {
  console.log(`My assignment is ${subject}`);
  callback(subject);
};

completedAssignment = subject => {
  console.log(`I just finished my assignment in ${subject}`);
};
console.log('test');
doHomeWork('math', completedAssignment);

module.exports = {
  doHomeWork,
  completedAssignment
};
