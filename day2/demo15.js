// var / let - feature - 1

// var - value can be replaced
function varTest() {
  var x = 100;
  if (true) {
    var x = 200;
    console.log("[inside]var x = ", x);
  }
  console.log("[outside]var x=", x);
}
varTest();

// let - value can not be replaced
function letTest() {
  let x = 101;
  if (true) {
    let x = 99;
    console.log("[inside]let x = ", x);
  }
  console.log("[outside] let x=", x);
}
letTest();
