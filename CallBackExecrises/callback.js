/** Complete assignment ****/
/*** Tomorrow setup github and  setup a callback with an example of asynchronous */

/***
 * Do HomeWork should accept a subject, and a callback.
 * Complete this challenge by adding a two arguments 1) a subject 2) a call back
 * completedAssignment function should be invoked by doHomeWork function
 * ***/

doHomeWork = () => {
  console.log('I am correctly working on ', subject);
};
completedAssignment = subject => {
  console.log(`I just finished my assignment in ${subject}`);
};

module.exports = {
  doHomeWork,
  completedAssignment
};
