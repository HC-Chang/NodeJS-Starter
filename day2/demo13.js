// variable scope
// Only var can used by declare

console.log(x1);
// console.log(x2)
//console.log(x3)
// console.log(x4)

// var, global, let, const
var x1 = 5;
x2 = 6;
let x3 = 7;
const x4 = 8;

console.log(x1);
console.log(x2);
console.log(x3);
console.log(x4);

// global
function foo() {
  console.log("inside foo begin:", current);
  var current = 400;
  bar = 500;
  console.log("after foo instinated", current, bar);
}
//console.log(bar)
foo();
console.log("global bar can be accessed here", bar);
