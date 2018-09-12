//Pass by value vs pass by reference

function turnOn(machine) {
    machine.isOn = true;
}
 
var computer = {
    isOn: false
};
 
turnOn(computer);
console.log(computer.isOn);


// function turnOn(machine){
//   var newObj = {};
//   for(var key in machine){
//      newObj[key] = machine;
//   }
//   return newObj;
// }

// var computer = {
//     isOn: false
// };


// console.log(turnOn(computer));

NOTES
// Go through the challenges and try to predict what you'll see printed on the console. As you progress, uncomment the challenge you're working on, comment out the challenges you've completed, then run the code

// Challenge 1

// console.log("this one is " + thisOne + " and that one is " + thatOne );
// var thisOne = 'assigned';


// Challenge 2
/*
thatOne = 'assigned';
console.log("this one is " + thisOne + " and that one is " + thatOne );
var thisOne = 'an otter';
var thatOne = 'an ocelot';
*/


// Challenge 3
/*
thisOne = 'assigned';
thatOne = 'assigned';
console.log("this one is " + thisOne + " and that one is " + thatOne );
var thisOne = 'a meerkat';
var thatOne = 'a mongoose';
*/


// Let's try with a function declaration and a function expression

// Challenge 4
/*
var doAllTheThings = function() {
console.log("We did all the things!");
}
doAllTheThings();
*/

// Challenge 5
/*
doAllTheThings();
var doAllTheThings = function() {
console.log("We did all the things!");
}
*/

// Challenge 6
/*
function doAllTheThings() {
console.log("We did all the things!");
}
*/
