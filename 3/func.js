

// console.log("Print all number be    tween 20 to 40");
// var counter = 5;
// while (counter<50){
//   if (counter % 5 === 0 && counter % 3 ===0) {
//     console.log(counter);
//   }
//   counter++;
// }

///1

//
// function isEeven(number){
//   if (number % 2 == 0 ) {
//     return true;
//
//   } else{
//     return false;
//   }
// }
//
// isEeven(2)

//2
function factorial(num){
  let result = 1;
  for(let i = 2; i <=num;i++){
    result *=i;
  }
  return result;
}
console.log(factorial(5));



function kebabToSnake(str){
  var newStr = str.replace(/-/g , "_")
  return newStr;
}
console.log(kebabToSnake("hello-there-fellow-human"))






function sing(){
  console.log("twinkle twinkle...");
  console.log("How i wonder.....");
}

setInterval(function(){
  console.log("twinkle twinkle");
  console.log("anonymous function");
},2000)
































//
