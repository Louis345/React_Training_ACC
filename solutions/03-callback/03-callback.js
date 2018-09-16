/**
 *
 */

var studentNames = ["Matthew Bitley", "Nikita"];

function printer(name) {
  console.log("***", name, "***\n");
}

function printNames(names, printer) {
  for (var i = 0, j = names.length; i < j; i++) {
    printer(names[i]);
  }
}

console.log(printNames(studentNames, printer));
