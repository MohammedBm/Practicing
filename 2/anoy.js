// var answer = prompt("are we there yet" );
//
// while (answer !== "yes" && answer !== "yeah") {
//   var answer = prompt("are wer there yet");
// }
// alert("we made it");

// verison 2

var answer = prompt("are we there yet" );

while (answer.indexOf("yes") === -1) {
  var answer = prompt("are wer there yet");
}
alert("we made it");
