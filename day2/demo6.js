// Anonymous Function / Arrow Function
// Local Variable

function x1(a, b) {
  return a * b;
}
const x2 = function (a, b) {
  return a * b;
};
const x4 = (a, b) => {
  return a * b;
};
console.log(x1(1, 2));
console.log(x2(3, 4));
console.log(x4(5, 6));
console.log(
  ((a, b) => {
    return a * b * 2;
  })(7, 8)
);

var token1 = "abc";
const x3 = function () {
  var token1 = "def";
  console.log("inside, token1=", token1);
};
x3();
console.log("outside, token1=", token1);

// arrow function
var x11 = function (x, y) {
  return x * y;
};
var x12 = (x, y) => {
  return x * y;
};
var x13 = (x, y) => {
  return x * y;
};
var x14 = (x, y) => x * y;

console.log(x11(1, 2), x12(3, 4), x13(5, 6), x14(7, 8));
